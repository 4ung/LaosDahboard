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


	chartHelper.BarChartBuilder("#Chart1_MDG5",chart1_MDG5);
	chartHelper.BarChartBuilder("#Chart2_MDG5",chart2_MDG5);

	var chart3_MDG5;

	
});