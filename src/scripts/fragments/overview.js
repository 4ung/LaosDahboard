
	 /*
         * DONUT CHART
         * -----------
         */
function makeDonutChart(){
        var donutData = [
          {label: "Series2", data: 30, color: "#3c8dbc"},
          {label: "Series3", data: 20, color: "#0073b7"},
          {label: "Series4", data: 50, color: "#00c0ef"}
        ];
        $.plot("#donut-chart", donutData, {
          series: {
            pie: {
              show: true,
              radius: 1,
              innerRadius: 0.5,
              label: {
                show: true,
                radius: 2 / 3,
                formatter: labelFormatter,
                threshold: 0.1
              }

            }
          },
          legend: {
            show: false
          }
        });

}

/*
       * Custom Label formatter
       * ----------------------
       */
      function labelFormatter(label, series) {
        return "<div style='font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;'>"+ label+ "<br/>"+ Math.round(series.percent) + "%</div>";
      }

/*Building Map*/



/*function mapbuilder(map_data){

    helper.loadData(window.DASHBOARD.BASE_URL+"/map-data/overview-map/overviewmap.json").done(function (data) {

    
            console.log(map_data);
        
        // Instanciate the map
        $('#Samplemap').highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : 'BCG Coverage of Laos (/km²)'
            },

            legend: {
                layout: 'veritcal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: map_data,
                joinBy: ['DHIS_CODE', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.name}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.name}: {point.value}/km²'
                }
            }]
        });
    });
}*/

function ChartBuilder(){
  $('#SampleChart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'World\'s MDG Status cities per 2014'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'MDG in 2008: <b>{point.y:.1f} %</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['Shanghai', 23.7],
                ['Lagos', 16.1],
                ['Instanbul', 14.2],
                ['Karachi', 14.0],
                ['Mumbai', 12.5],
                ['Moscow', 12.1],
                ['São Paulo', 11.8],
                ['Beijing', 11.7],
                ['Guangzhou', 11.1],
                ['Delhi', 11.1],
                ['Shenzhen', 10.5],
                ['Seoul', 10.4],
                ['Jakarta', 10.0],
                ['Kinshasa', 9.3],
                ['Tianjin', 9.3],
                ['Tokyo', 9.0],
                ['Cairo', 8.9],
                ['Dhaka', 8.9],
                ['Mexico City', 8.9],
                ['Lima', 8.9]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

$(function(){

  helper.DisableCache();
  /*Loading GLobal Variables*/
  loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS_ORIGINAL;
      window.DASHBOARD.HOSPITAL_MAP=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.overview_map_path+data.maps.LAOS_HOSPITAL;
//console.log(window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.overview_map_path+data.LAOS_HOSPITAL);

      //Call Method from  helper Library
      helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
        result_mapdata=mapdata;

        helper.loadData(window.DASHBOARD.HOSPITAL_MAP).done(function(hospitalmap){
            mapHelper.mapBuilder_LatLong("#Samplemap",result_mapdata,mapHelper.icon_map_converter(hospitalmap));
        });
        //console.log(mapdata);
        //mapHelper.mapBuilder_LatLong("#Samplemap",mapdata);

        //mapbuilder(data);
      });
    
  });

  
});