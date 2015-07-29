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
	"mapBuilder_LatLong":function(StringDivArea,map_data,map_icons){

		arr_series=[{
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
		        }];
        for(needle in map_icons){
        	arr_series.push(map_icons[needle]);
        }

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

		        series: arr_series
    	 });
		}catch(e){
			console.log(e);
		}

	},
	"icon_map_converter":function(latlong_data){
				arr_district_typeA=new Array();
				arr_district_typeB=new Array();
				arr_health_center=new Array();
				arr_province_hospital=new Array();
				arr_central_hospital=new Array();

				Obj_district_type_A={};
				Obj_district_type_B={};
				Obj_health_center={};
				Obj_province_hospital={};
				Obj_central_hospital={};

				map_icons=new Array();

				for(needle in latlong_data){
					if(latlong_data[needle].dimensions.LBwVBieQt45!=undefined){
							switch(latlong_data[needle].dimensions.LBwVBieQt45){
								case "District hospital type A":
									Obj_district_type_A.type="mappoint";
									Obj_district_type_A.name=latlong_data[needle].dimensions.LBwVBieQt45;
									Obj_district_type_A.color="#B1AA00";
									arr_district_typeA.push(mapHelper.decomposer(latlong_data[needle]));
								break;
								case "District hospital type B":
									Obj_district_type_B.type="mappoint";
									Obj_district_type_B.name=latlong_data[needle].dimensions.LBwVBieQt45;
									Obj_district_type_B.color="#00B121";
									arr_district_typeB.push(mapHelper.decomposer(latlong_data[needle]));
								break;
								case "Health Center":
									Obj_health_center.type="mappoint";
									Obj_health_center.name=latlong_data[needle].dimensions.LBwVBieQt45;
									Obj_health_center.color="#CE0707";
									arr_health_center.push(mapHelper.decomposer(latlong_data[needle]));
								break;
								case "Province Hospitals":
									Obj_province_hospital.type="mappoint";
									Obj_province_hospital.name=latlong_data[needle].dimensions.LBwVBieQt45;
									Obj_province_hospital.color="#07B1CE";
									arr_province_hospital.push(mapHelper.decomposer(latlong_data[needle]));
								break;
								case "Central Hospital":
									Obj_central_hospital.type="mappoint";
									Obj_central_hospital.name=latlong_data[needle].dimensions.LBwVBieQt45;
									Obj_central_hospital.color="#AC6DC1";
									arr_central_hospital.push(mapHelper.decomposer(latlong_data[needle]));
								break;
								default: break;
						}
					}
				}
				if(arr_district_typeA.length!=0)
					Obj_district_type_A.data=arr_district_typeA;
					map_icons.push(Obj_district_type_A);
				if(arr_district_typeB.length!=0)
					Obj_district_type_B.data=arr_district_typeB;
					map_icons.push(Obj_district_type_B);
				if(arr_health_center.length!=0)
					Obj_health_center.data=arr_health_center;
					map_icons.push(Obj_health_center);
				if(arr_province_hospital.length!=0)
					Obj_province_hospital.data=arr_province_hospital;
					map_icons.push(Obj_province_hospital);
				console.log(Obj_province_hospital);
				if(arr_central_hospital.length!=0)
					Obj_central_hospital.data=arr_central_hospital;
					map_icons.push(Obj_central_hospital);

				return map_icons;

	},
	"decomposer":function(latlongdata){

				var latlongobj={};
				var str_lat_log=latlongdata.co.replace('[','').replace(']','').trim();
				str_lat_log=str_lat_log.split(",");
				var icon_name=latlongdata.dimensions.LBwVBieQt45;
				latlongobj.name=icon_name;
				latlongobj.lon=str_lat_log[0].replace('"','');
				latlongobj.lat=str_lat_log[1].replace('"','');
				return latlongobj;
	}
};