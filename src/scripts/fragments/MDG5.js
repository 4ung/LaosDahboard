$(function(){
	var categories_Chart1_MDG5=[
		'Oct 2010 to Sep 2011','Oct 2011 to Sep 2012','Oct 2012 to Sep 2013','Oct 2012 to Sep2014'
	];

	var dataElements_Chart1_MDG5=[{
									name:'ANC First Coverage',
									data:[53.7,60.5,65.3,75.3]
								},{
									name:'ANC4 Coverage',
									data:[0,0.53,0.66,35.7]
								}];
	var tooltip_Chart1='<b>{point.y:.1f} </b>';

	var chart1_MDG5={
			"StringType":"column",
			"StringTitle":"Lao PDR",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart1_MDG5,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart1_MDG5
	};

	

	var categories_Chart2_MDG5=[
		'2008','2009','2010','2011','2012','2013','2014'
	];

	var dataElements_Chart2_MDG5=[{
									name:'SBA Coverage',
									data:[24.8,26.7,31.2,34.4,40.4,42.4,47.6]
								},{
									name:'Target',
									data:[50,50,50,50,50,50,50]
								}];

    var tooltip_Chart2='<b>{point.y:.1f} </b>';
	var chart2_MDG5={
			"StringType":"",
			"StringTitle":"Lao PDR",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart2_MDG5,
			"ArrayColors":['#00a2c5','#000','#31ba64','#000'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart2,
			"ArraySeries":dataElements_Chart2_MDG5
	};

	var categories_Chart3_MDG5=[
		'1995','2000','2005','2010','2015'
	];
	var dataElements_Chart3_MDG5=[{
									name:'Maternal Mortality Ratio',
									data:[650,530,405,357,220]
								},{
									name:'Maternal Mortality Ration Target',
									data:[300,300,300,300,300]
								}];

    var tooltip_Chart3='<b>{point.y:.1f} </b>';
	var chart3_MDG5={
			"StringType":"",
			"StringTitle":"Maternal Mortality Ratio \n(Deaths per 100,000 live Births)",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart3_MDG5,
			"ArrayColors":['#00a2c5','#000'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart3,
			"ArraySeries":dataElements_Chart3_MDG5
	};


	var categories_Chart4_MDG5=[
		'Luang Namatha',
		'Attapeu',
		'Vientiene. C',
		'Sekong',
		'Odumxay',
		'Phongsaly',
		'Huaphanh',
		'Saravane',
		'Bokeo',
		'Champasack',
		'Khummuane',
		'Xaysomboun',
		'Vientine.P',
		'BoriKhanxay',
		'Luangprabang',
		'Xaybury',
		'XiengKhuang',
		'Savannakhet'

	];
	var dataElements_Chart4_MDG5=[{
									name:'SBA Coverage',
									data:[23.4,26.3,27.9,29,29.4,29.4,38.4,38.6,42.3,42.7,46.2,48.5,49.8,53.4,54.7,60.2,63.8,68.7]
								}];

    var tooltip_Chart4='<b>{point.y:.1f} </b>';
	var chart4_MDG5={
			"StringType":"column",
			"StringTitle":"SBA Delivery By Province",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart4_MDG5,
			"ArrayColors":['#00a2c5'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart4,
			"ArraySeries":dataElements_Chart4_MDG5
	};





	var map1_MDG5={
		Mapdatapath:"MDG5-map/Mdg5_Map1.json",
        StringTitleText:"ANC First Visit Coverage",
        BooleanNavigation:true,
        ColorMin:"#000",
        ColorMax:"#232323",
        ArrayChroplethRange:[
                    [0, '#EFEFFF'],
                    [10, '#4444FF'],
                    [30, '#232323']
                ],
        BooleanDataLabels:true,
        StringToolTip:"Data Label Tooltip",
        StringTooltipFormat:"{point.name}: {point.value}"
	};

	var map2_MDG5={
		Mapdatapath:"MDG5-map/Mdg5_Map2.json",
        StringTitleText:"MDG 5 SBA distr 2014",
        BooleanNavigation:true,
        ColorMin:"#000",
        ColorMax:"#232323",
        ArrayChroplethRange:[
                    [0, '#EFEFFF'],
                    [0.6, '#4444FF'],
                    [1, '#232323']
                ],
        BooleanDataLabels:true,
        StringToolTip:"Data Label Tooltip",
        StringTooltipFormat:"{point.name}: {point.value}"
	};

	var map3_MDG5={
		Mapdatapath:"MDG5-map/Mdg5_Map3.json",
        StringTitleText:"Lao PDR",
        BooleanNavigation:true,
        ColorMin:"#000",
        ColorMax:"#232323",
        ArrayChroplethRange:[
                    [0, '#EFEFFF'],
                    [0.6, '#4444FF'],
                    [1, '#232323']
                ],
        BooleanDataLabels:true,
        StringToolTip:"Data Label Tooltip",
        StringTooltipFormat:"{point.name}: {point.value}"
	};


	loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS;
      //Call Method from  helper Library
      	helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#MAP1_MDG5",map1_MDG5,mapdata);
  		});
    
  	});
/*
  	loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS_DISTRICT;
      //Call Method from  helper Library
      	helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#MAP2_MDG5",map2_MDG5,mapdata);
  		});
    
  	});

  	loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS_DISTRICT;
      //Call Method from  helper Library
      	helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#MAP3_MDG5",map3_MDG5,mapdata);
  		});
    
  	});
*/
	chartHelper.BarChartBuilder("#Chart1_MDG5",chart1_MDG5);
	chartHelper.BarChartBuilder("#Chart2_MDG5",chart2_MDG5);
	chartHelper.BarChartBuilder("#Chart3_MDG5",chart3_MDG5);
	chartHelper.BarChartBuilder("#Chart4_MDG5",chart4_MDG5);

	

	
});