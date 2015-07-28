var helper={
	
	"loadData":function(URL){
		return $.ajax({
				url:URL,
				success:function(data){
					//console.log(data);
				},
				error:function(err){

				}
			});
	},
	"DisableCache":function(){
		$.ajax({
			cache:false
		});
	},
	"ChartHelper":chartHelper
};

var chartHelper={
	"BarChartBuilder":function ChartBuilder(StringDivArea,ChartObject){
			///<summary>Simple Method to Build Simple Chart </summary>
			///<param name="StringType">Chart Type</param>
			///<param name="StringTitle">Chart Title</param>
			///<param name="StringSubTitle">SubTitle of Chart</param>
			///<param name="ArrayXcategories">Array for X axis [name,name,name,...]	</param>
			///<param name="StringYtitle">Text for Y Axis</param>
			///<param name="BooleanLegend">Enable Legend (True,False)</param>
			///<param name="StringTooltip">Tool Tip Text for each chart items can Include higharts Global Variable</param>
			///<param name="ArraySeries">Chart items Array[{name:"",data:[]},...]	</param>
				if(ChartObject.ArrayColors===undefined){
						$(StringDivArea).highcharts({
						    chart: {
						        type: ChartObject.StringType
						    },
						    title: {
						        text: ChartObject.StringTitle
						    },
						    subtitle: {
						        text: ChartObject.StringSubtitle
						    },
						    xAxis: {
						        categories:ChartObject.ArrayXcategories						        
						    },
						    yAxis: {
						        min: 0,
						        
						        title: {
						            text: ChartObject.StringYtitle
						        }
						    },
						    legend: {
						        enabled: ChartObject.BooleanLegend
						    },
						    tooltip: {
						        pointFormat: ChartObject.StringTooltip
						    },
						    series: ChartObject.ArraySeries
						});
				}else{
						$(StringDivArea).highcharts({
						    chart: {
						        type: ChartObject.StringType
						    },
						    colors:ChartObject.ArrayColors,
						    title: {
						        text: ChartObject.StringTitle
						    },
						    subtitle: {
						        text: ChartObject.StringSubtitle
						    },
						    xAxis: {
						        categories:ChartObject.ArrayXcategories
						        /*
						        labels: {
						            rotation: -45,
						            style: {
						                fontSize: '13px',
						                fontFamily: 'Verdana, sans-serif'
						            }
						        }
						        */
						    },
						    yAxis: {
						        min: 0,						        
						        title: {
						            text: ChartObject.StringYtitle
						        }
						    },
						    legend: {
						        enabled: ChartObject.BooleanLegend
						    },
						    tooltip: {
						        pointFormat: ChartObject.StringTooltip
						    },
						    series: ChartObject.ArraySeries
						});
				}
			}
};

var mapHelper={
	"mapBuilder":function(StringDivArea,MapObject,map_data){
			helper.loadData(window.DASHBOARD.BASE_URL+"/map-data/"+MapObject.Mapdatapath).done(function (data) {

    
            console.log(data);
        
        // Instanciate the map
        $(StringDivArea).highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : MapObject.StringTitleText
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: false,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: MapObject.BooleanNavigation
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: MapObject.ColorMin,
                maxColor: MapObject.ColorMax,
                stops: MapObject.ArrayChroplethRange
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: map_data,
                joinBy: ['DHIS_CODE', 'code'],
                dataLabels: {
                    enabled: MapObject.BooleanDataLabels,
                    color: '#CECBCB',
                    format: '{point.name}'
                },
                name: MapObject.StringToolTip,
                tooltip: {
                    pointFormat: MapObject.StringTooltipFormat
                }
            }]
        });
    });

	},
	"mapBuilder_LatLong":function(StringDivArea,map_data){
		try{
		 $(StringDivArea).highcharts('Map', {
				

		        title: {
		            text: 'Highmaps basic lat/lon demo'
		        },

		        mapNavigation: {
		            enabled: true
		        },

		        tooltip: {
		            headerFormat: '',
		            pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
		        },

		        series: [{
		            // Use the gb-all map with no data as a basemap
		            mapData: map_data,
		            name: 'Basemap',
		            borderColor: '#A0A0A0',
		            nullColor: 'rgba(200, 200, 200, 0.3)',
		            showInLegend: false
		        }, 
		        {
		            name: 'Separators',
		            type: 'mapline',
		            data: Highcharts.geojson(map_data, 'mapline'),
		            color: '#707070',
		            showInLegend: false,
		            enableMouseTracking: false
		        },{
		            // Specify points using lat/lon
		            type: 'mappoint',
		            name: 'Cities',
		            color: '#000',
		            data: [{
		                name: 'London',
		                lat: 1.0258000,
		                lon: 20.1610000
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            },{
		                name: 'London',
		                lat: 102.24,
		                lon: 18.22
		            }]
		        }]
    	 });
		}catch(e){
			console.log(e);
		}

	}
};