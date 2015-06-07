$(function(){
	var categories_Chart1_MDG7=[
		'2000','2005','2009','2010','2012','2013'
	];

	var dataElements_Chart1_MDG7=[{
									name:'MDG Proportion of population family using and improved sanitation facility',
									data:[0,29,37,49,59]
								},{
									name:'MDG Proportion of population using improved drinking water source',
									data:[28,44,52,57,70]
								},{
									name:'Target',
									data:[60,60,60,60,60]
								}];
	var tooltip_Chart1='<b>{point.y:.1f} </b>';

	var chart1_MDG7={
			"StringType":"",
			"StringTitle":"MDG7 safe drinking water  basic Sanitation",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart1_MDG7,
			"ArrayColors":['#00a2c5','#31ba64','#000'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart1_MDG7
	};

	chartHelper.BarChartBuilder("#Chart1_MDG7",chart1_MDG7);
});