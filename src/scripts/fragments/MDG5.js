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
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart2,
			"ArraySeries":dataElements_Chart2_MDG5
	};

	var map1_MDG5={
		Mapdatapath:"MDG5-map/Mdg5_Map1.json",
        StringTitleText:"ANC 2014",
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
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS_DISTRICT;
      //Call Method from  helper Library
      	helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#MAP1_MDG5",map1_MDG5,mapdata);
  		});
    
  	});

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

	chartHelper.BarChartBuilder("#Chart1_MDG5",chart1_MDG5);
	chartHelper.BarChartBuilder("#Chart2_MDG5",chart2_MDG5);

	

	
});