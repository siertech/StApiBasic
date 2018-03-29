"use strict";
(function(){
var app;
try{
	app  = angular.module("adm",["stApi"]);
}catch(e){
	window.alert(e);
}

app.factory('config',function($location, $rootScope, $http, $templateCache){

	
	var _appInfo = {
		
			
			$$path:"StApiBasic",
			$$versao: "1.0",
			$$paginaInicial: "/inicio"
			
			
	}
	
	function getAppVersion(){
		
		return _appInfo.$$versao;
	}
	
	function getUrlBase(){
		
		var pathApp = _appInfo.$$path+"/";
		
		//Servidor de teste local (Utilizado para deploy do .war gerado pelo jenkins)
		if($location.$$absUrl.indexOf("7070/"+pathApp)!=-1)
			 return "http://"+$location.$$host+":7070/"+pathApp;
			
		else if($location.$$absUrl.indexOf("8080/"+pathApp)!=-1)
		  return "http://"+$location.$$host+":8080/"+pathApp;
		
		else if($location.$$absUrl.indexOf("8080")!=-1)
			  return "http://"+$location.$$host+":8080/";
		
        //SSL
		else if($location.$$absUrl.indexOf("https")!=-1)
			return "https://"+$location.$$host+"/";
                else
                  return "http://"+$location.$$host+"/";
		
	}
	
	
	function getPath(){
		
		return $location.path();
	}
	
	
	function cacheTemplates (){
		//Função substituida com a inclusão com service-worker
		
	}
	
	

	return {
		info: _appInfo,
		cacheTemplates: cacheTemplates,
		baseUrl: getUrlBase(),
		path: getPath(),
		appVersion: getAppVersion()
	};


});

 
})();
