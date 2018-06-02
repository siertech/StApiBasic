"use strict";
(function(){
var app;
try{
	app  = angular.module("adm",["stapi"]);
}catch(e){
	window.alert(e);
}

app.factory('config',function(){

	return {
		  
		scope: "static",
		confs:{
				path: "StApiBasic",
				securityPaths: "all", //paths da aplicação onde a autenticação no sistema é necessária
				appVersion: "1.0",
				initialPath: "/cliente",
				loginPath: "/login",
				notFoundPath:"/notfound",
				pathsToHideMenu: ["/login"] //Nos paths definido aqui o menu não será exibido
		}
	}

});

 
})();
