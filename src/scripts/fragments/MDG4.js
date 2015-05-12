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
    }];

	var Chart1_MDG4={
		"StringType":"",
    "StringTitle":"MDG Mortality under 5 ",
    "StringSubtitle":"Source hmis.gov.la",
    "ArrayXcategories":categoriesChart2,
    "StringYtitle":"",
    "BooleanLegend":true,
    "StringTooltip":tooltip,
    "ArraySeries":dataElementsChart2	};
    
    chartHelper.BarChartBuilder("#Chart1_MDG4",Chart1_MDG4);
	//alert("i am MDG4");
});