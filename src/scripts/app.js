window.DASHBOARD={};

window.DASHBOARD.BASE_URL=window.location.origin;

function loadmanifest(){
	
	return  $.ajax({
			url:window.DASHBOARD.BASE_URL+"/config.manifest",
			dataType:'json'

		});
	 
}




function login(){
	return $.ajax({
	  method: 'POST',
	  url: window.dashboard.login_url,
	  crossDomain: true,
	  dataType: 'json',
	  beforeSend:function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic "+window.DASHBOARD.encodedstring);
    		xhr.setRequestHeader ("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    		xhr.setRequestHeader ("Access-Control-Allow-Origin", "*");

	  },
	  success: function(data){
	  		console.log(data);
	  }
	 
	});
}

/*function login(){
	var base = 'https://apps.dhis2.org/demo/';
	return $.ajax({
		url: base + "dhis-web-commons-security/login.action?authOnly=true",
    	type: 'POST',
    	params: { j_username: "admin", j_password: "district" },
	});
}*/


$(function(){
	helper.DisableCache();
	/*Loading GLobal Variables*/
	loadmanifest().done(function(data){
		console.log(data);
			window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+data.map_path+data.maps.LAOS;
			//Call Method from  helper Library
			helper.loadData(window.DASHBOARD.MAP_PATH).done(function(data){
				window.DASHBOARD.MAP_DATA=data;//console.log(data);
				/*helper.loadData(window.DASHBOARD.BASE_URL+"/map-data/overview-map/overviewmap.map").done(function(data){
			        console.log(data);
			    });*/
				//mapbuilder(data);
			});
		
	});

	ChartBuilder();
	makeDonutChart();

	router();

			

});

function router(){
	$("a[data-rel='overview']").click(function(){
		helper.DisableCache();
		$("#container").load(window.DASHBOARD.BASE_URL+"/fragment/overview.html",function(){
				console.log("load.done");
		});
	});

	$("a[data-rel='MDG1']").click(function(){
		helper.DisableCache();
		$("#container").load(window.DASHBOARD.BASE_URL+"/fragment/MDG1.html",function(){
			
		});
	});

	$("a[data-rel='MDG4']").click(function(){
		helper.DisableCache();
		$("#container").load(window.DASHBOARD.BASE_URL+"/fragment/MDG4.html",function(){
			
		});
	});

	$("a[data-rel='MDG5']").click(function(){
		helper.DisableCache();
		$("#container").load(window.DASHBOARD.BASE_URL+"/fragment/MDG5.html",function(){
			
		});
	});

	$("a[data-rel='MDG6']").click(function(){
		helper.DisableCache();
		$("#container").load(window.DASHBOARD.BASE_URL+"/fragment/MDG6.html",function(){
			
		});
	});
}
