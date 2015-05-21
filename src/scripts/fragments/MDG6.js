$(function(){
	
	var categories_Chart1_MDG6=[
		'2000','2005','2009','2010','2012','2013'
	];

	var dataElements_Chart1_MDG6=[{
									name:'MDG-HIV Prevalence among general Population',
									data:[0.1,0.18,0.2,0.25,0.28,0.29]
								},{
									name:'Target',
									data:[1,1,1,1,1,1]
								}];
	var tooltip_Chart1='<b>{point.y:.1f} </b>';

	var chart1_MDG6={
			"StringType":"",
			"StringTitle":"HIV Prevalence Among general Population VS Target",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart1_MDG6,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart1_MDG6
	};


	var categories_Chart2_MDG6=[
		'2005','2010','2012','2013','2014'
	];

	var dataElements_Chart2_MDG6=[{
									name:'MDG Percantage of Adults and \n \nchildren with advanced HIV infection received',
									data:[40.8,50.8,55.4,58.2,84]
								}];
	var tooltip_Chart2='<b>{point.y:.1f} </b>';

	var chart2_MDG6={
			"StringType":"column",
			"StringTitle":"LAO PDR",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart2_MDG6,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart2_MDG6
	};

	var categories_Chart3_MDG6=[
		'Oct 1999 to Sep 2000','Oct 2004 to Sep 2005 ','Oct 2008 to Sep 2009','Oct 2009 to Sep 2010','Oct 2011 to Sep 2012','Oct 2012 to Sep 2013'
	];

	var dataElements_Chart3_MDG6=[{
									name:'MDG HIV prevalence among General',
									data:[0.03,0.18,0.2,0.25,0.28,0.29]
								},
								{
									name:'Target MDG HIV prevalence among General',
									data:[0,0,0,0,0,0]
								},
								{
									name:'MDG HIV prevalence among general population',
									data:[0,1.8,2,1.4,1.2,5]
								},
								{
									name:'Target HIV prevalence among general population',
									data:[5,5,5,5,5,5]
								}];
	var tooltip_Chart3='<b>{point.y:.1f} </b>';

	var chart3_MDG6={
			"StringType":"",
			"StringTitle":"LAO PDR",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart3_MDG6,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart3,
			"ArraySeries":dataElements_Chart3_MDG6
	};

	var categories_Chart4_MDG6=[
		'1995','2000','2005','2010'
	];

	var dataElements_Chart4_MDG6=[{
									name:'Proportion of TB Cases cured under DOTS',
									data:[48,77,90,91]
								},
								{
									name:'Target Proportion of TB Cases cured under DOTS',
									data:[85,85,85,85]
								}];
	var tooltip_Chart4='<b>{point.y:.1f} </b>';

	var chart4_MDG6={
			"StringType":"",
			"StringTitle":"Proportion of TB Cases cured under DOTS",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart4_MDG6,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart4,
			"ArraySeries":dataElements_Chart4_MDG6
	};

	chartHelper.BarChartBuilder("#Chart1_MDG6",chart1_MDG6);

	chartHelper.BarChartBuilder("#Chart2_MDG6",chart2_MDG6);

	chartHelper.BarChartBuilder("#Chart3_MDG6",chart3_MDG6);
	chartHelper.BarChartBuilder("#Chart4_MDG6",chart4_MDG6);
});