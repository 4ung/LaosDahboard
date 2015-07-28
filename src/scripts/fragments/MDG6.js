$(function(){
	
	var categories_Chart1_MDG6=[
		'2010','2012','2014'
	];

	var dataElements_Chart1_MDG6=[{
									name:'MDG-HIV Prevalence among MSM 15-49 years',
									data:[1.4,1.2,1.4]
								},{
									name:'MDG-HIV Prevalence among MSM 15-24 (%) years total',
									data:[2.1,2.4,1.6]
								},
								{
									name:'MDG-HIV Prevalence among MSM 15-24 (%) years total',
									data:[0.25,0.28,0.29]
								}];
	var tooltip_Chart1='<b>{point.y:.1f} </b>';

	var chart1_MDG6={
			"StringType":"column",
			"StringTitle":"Trends of HIV Prevalence 2014-2015",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart1_MDG6,
			"ArrayColors":['#00a2c5','#ffa110','#9b74b6'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart1_MDG6
	};


	var categories_Chart2_MDG6=[
		'1990','1995','2000','2005','2009','2010','2012','2014'
	];

	var dataElements_Chart2_MDG6=[{
									name:'Maleria Incidence (per 1000 pop)',
									data:[10,12,8.1,3.5,2.8,3.5,2.7,7.1]
								},
								{
									name:'Death Rate Associated with Maleria(per 100,000 pop)',
									data:[9,14,7.1,3.5,1.4,0.4,0.3,0.6]
								}];
	var tooltip_Chart2='<b>{point.y:.1f} </b>';

	var chart2_MDG6={
			"StringType":"column",
			"StringTitle":"Maleria Incidence And Deaths",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart2_MDG6,
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart1,
			"ArraySeries":dataElements_Chart2_MDG6
	};

	var categories_Chart3_MDG6=[
		'2010','2012','2013','2014'
	];

	var dataElements_Chart3_MDG6=[{
									name:'MDG HIV prevalence among General',
									data:[50.8,55.4,58.2,60.6]
								},{
									name:'Target',
									data:[90,90,90,90]
								}];
	var tooltip_Chart3='<b>{point.y:.1f} </b>';

	var chart3_MDG6={
			"StringType":"",
			"StringTitle":"MDG ARV Trend Annual",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart3_MDG6,
			"ArrayColors":['#00a2c5','#000'],
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
			"ArrayColors":['#00a2c5','#000'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart4,
			"ArraySeries":dataElements_Chart4_MDG6
	};

	var categories_Chart5_MDG6=[
		'2005','2010','2013','2014'
	];

	var dataElements_Chart5_MDG6=[{
									name:'MDG incidence of Tubercolosis (per 100000 pop)',
									data:[270,213,197,190]
								},
								{
									name:'MDG-Prevelence of Tubercolosis (per 100000 pop)',
									data:[700,540,488,462]
								}];
	var tooltip_Chart5='<b>{point.y:.1f} </b>';

	var chart5_MDG6={
			"StringType":"column",
			"StringTitle":"Lao PDR",
			"StringSubtitle":"Source hmis.gov.la",
			"ArrayXcategories":categories_Chart5_MDG6,
			"ArrayColors":['#00a2c5','#ffa110'],
			"StringYtitle":"",
			"BooleanLegend":true,
			"StringTooltip":tooltip_Chart5,
			"ArraySeries":dataElements_Chart5_MDG6
	};

	chartHelper.BarChartBuilder("#Chart1_MDG6",chart1_MDG6);

	chartHelper.BarChartBuilder("#Chart2_MDG6",chart2_MDG6);

	chartHelper.BarChartBuilder("#Chart3_MDG6",chart3_MDG6);
	chartHelper.BarChartBuilder("#Chart4_MDG6",chart4_MDG6);
	chartHelper.BarChartBuilder("#Chart5_MDG6",chart5_MDG6);
});