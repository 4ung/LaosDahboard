
     /*
         * DONUT CHART
         * -----------
         */
/*function makeDonutChart(){
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

}*/

/*
       * Custom Label formatter
       * ----------------------
       */
      function labelFormatter(label, series) {
        return "<div style='font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;'>"+ label+ "<br/>"+ Math.round(series.percent) + "%</div>";
      }

/*Building Map*/

/*function mapbuilder(map_data){

    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

        // Instanciate the map
        $('#Samplemap').highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : 'BCG Coverage of Laos (/km²)'
            },

            legend: {
                layout: 'horizontal',
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
                    duration: 5000
                },
                data : data,
                mapData: map_data,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    });
}*/


$(function(){
    //ChartBuilder();
    var categoriesChart1=[
                '01 ນະຄອນຫລວງວຽງຈັນ | Vientiane. C',
                '02 ຜົ້ງສາລີ | Phongsaly',
                '03 ຫລວງນ້ຳທາ | Luangnamtha',
                '04 ອຸດົມໄຊ | Oudomxay',
                '05 ບໍ່ແກ້ວ | Bokeo',
                '06 ຫລວງພະບາງ | Luangprabang',
                '07 ຫົວພັນ | Huaphanh',
                '08 ໄຊຍະບູລີ | Xayabury',
                '09 ຊຽງຂວາງ | Xiengkhuang',
                '10 ວຽງຈັນ | Vientiane. P',
                '11 ບໍໍລິຄຳໄຊ | Borikhamxay',
                '12 ຄຳມ່ວນ | Khammuane',
                '13 ສະຫວັນນະເຂດ | Savannakhet',
                '14 ສາລະວັນ | Saravane',
                '15 ເຊກອງ | Sekong',
                '16 ຈຳປາສັກ | Champasack',
                '17 ອັດຕະປື | Attapeu',
                '18 ໄຊສົມບຸນ | Xaysomboun'
            ];
    var categoriesChart2=[
        '1995','2000','2005','2010'
    ];

    var dataElementsChart1=[{
            name: 'Oct 2012 to Sep 2013',
            data: [65405.0,5744,4154,24848,2880,4249,10951,8040,11025,18379,31008,59121,50148,35626,7627.3,49076,5286,1827

                ],


        }, {
            name: 'Oct 2013 to Sep 2014',
            data: [29398.6,1341,9423,4731,6086,6587,3871,6201,9278,15829,22299,35537,39950,33586,7141,63565,4087,1098
               ]

        }];

    var dataElementsChart2=[{

        name: 'MDG - Prevalence of stunting in children under 5 years',
        data: [48,42,40,38]

    }, {
        name: 'MDG - Prevalence of underweight children under 5 years',
        data: [44,40,37,27]
    }];
 var tooltip='Population in 2008: <b>{point.y:.1f} millions</b>';

    var Chart1={};

    Chart1.StringType="column";
    Chart1.StringTitle="Children Received VitaminA2";
    Chart1.StringSubtitle="Source hmis.gov.la";
    Chart1.ArrayXcategories=categoriesChart1;
    Chart1.StringYtitle="";
    Chart1.BooleanLegend=true;
    Chart1.StringTooltip=tooltip;
    Chart1.ArraySeries=dataElementsChart1;

    var Chart2={};

    Chart2.StringType="";
    Chart2.StringTitle="MDG Stunting and UnderWeight Children under 5 years";
    Chart2.StringSubtitle="Source hmis.gov.la";
    Chart2.ArrayXcategories=categoriesChart2;
    Chart2.StringYtitle="";
    Chart2.BooleanLegend=true;
    Chart2.StringTooltip=tooltip;
    Chart2.ArraySeries=dataElementsChart2;


   // console.log(Chart2);


    var Map1={
        Mapdatapath:"overview-map/overviewmap.json",
        StringTitleText:"Children Anc 5years",
        BooleanNavigation:true,
        ColorMin:"#000",
        ColorMax:"#232323",
        ArrayChroplethRange:[
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#232323']
                ],
        BooleanDataLabels:true,
        StringToolTip:"Data Label Tooltip",
        StringTooltipFormat:"{point.name}: {point.value}/km²"

};


 helper.DisableCache();
  /*Loading GLobal Variables*/
  loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS;
      //Call Method from  helper Library
      helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#Map1",Map1,mapdata);
  });
    
  });

    
    chartHelper.BarChartBuilder("#Chart1",Chart1);

    chartHelper.BarChartBuilder("#Chart2",Chart2);
    
});

