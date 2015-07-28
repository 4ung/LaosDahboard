$(function(){

	console.log(helper);
	console.log(chartHelper);
	console.log(mapHelper);

	 var tooltip='Mortality Rate in : <b>{point.y:.1f}';
	var categoriesChart2=[
        '1995','2000','2005','2010'
    ];
    var dataElementsChart2=[{

        name: 'MDG - Under 5 Mortality rate',
        data: [170,107,98,73]

    },{
    	name:'MDG - Infant mortality rate',
    	data:[104,82,70,68]
    },{
        name:'Under 5 Mortality Target 2015',
        data:[70,70,70,70]
    },{
        name:"infant Mortality Target 2015",
        data:[45,45,45,45]
    }
    ];

	var Chart1_MDG4={
		"StringType":"",
    "StringTitle":"MDG Mortality under 5 ",
    "StringSubtitle":"Source hmis.gov.la",
    "ArrayXcategories":categoriesChart2,
    "StringYtitle":"",
    "BooleanLegend":true,
    "StringTooltip":tooltip,
    "ArrayColors":['#00a2c5','#31ba64','#2a2b2b','#000'],
    "ArraySeries":dataElementsChart2	};
    
    chartHelper.BarChartBuilder("#Chart1_MDG4",Chart1_MDG4);

        var tooltip_chart3='BCG Coverage in : <b>{point.y:.1f}';
    var categoriesChart3=[
        'BCG Coverage (BCG Given estimated\n live Birth)'
    ];
    var dataElementsChart3=[{

        name: 'Oct 2010-Sept 2011',
        data: [55.9]

    },{
        name:'Oct 2011-Sept 2012',
        data:[59]
    },{
        name:'Oct 2012-Sept 2013',
        data:[64]
    },{
        name:"Oct 2013-Sept 2014",
        data:[74.2]
    }
    ];

    var Chart3_MDG4={
        "StringType":"column",
    "StringTitle":"BCG COverage 2011-2014 ",
    "StringSubtitle":"Source hmis.gov.la",
    "ArrayXcategories":categoriesChart3,
    "StringYtitle":"",
    "BooleanLegend":true,
    "StringTooltip":tooltip_chart3,
    "ArrayColors":['#00a2c5','#31ba64','#851464','#ffa110'],
    "ArraySeries":dataElementsChart3    };
    
    chartHelper.BarChartBuilder("#Chart3_MDG4",Chart3_MDG4);



    var tooltip_chart4='<b>{point.y:.1f}';
    var categoriesChart4=[
        '2010','2011','2012','2013','2014'
    ];
    var dataElementsChart4=[{

        name: 'Measles Coverage',
        data: [43.5,47.8,54.2,58.5,62]

    }
    ];

    var Chart4_MDG4={
        "StringType":"",
    "StringTitle":"Mesales Vaccine Coverage 2010-2014 ",
    "StringSubtitle":"Source hmis.gov.la",
    "ArrayXcategories":categoriesChart4,
    "StringYtitle":"",
    "BooleanLegend":true,
    "StringTooltip":tooltip_chart4,
    "ArrayColors":['#00a2c5','#31ba64','#2a2b2b','#000'],
    "ArraySeries":dataElementsChart4    };
    
    chartHelper.BarChartBuilder("#Chart4_MDG4",Chart4_MDG4);




var Map1={
        Mapdatapath:"MDG4-map/Mdg4_Map1.json",
        StringTitleText:"Mesale Coverage 2014",
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
        StringTooltipFormat:"{point.name}: {point.value}"

};


 helper.DisableCache();
  /*Loading GLobal Variables*/
  loadmanifest().done(function(data){
      window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS;
      //Call Method from  helper Library
      helper.loadData(window.DASHBOARD.MAP_PATH).done(function(mapdata){
            mapHelper.mapBuilder("#Map1_MDG4",Map1,mapdata);
  });
    
  });

	//alert("i am MDG4");
});