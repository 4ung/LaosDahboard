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