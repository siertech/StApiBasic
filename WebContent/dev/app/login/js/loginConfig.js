
"use strict";
(function(){
angular.module("adm").config(function($routeProvider,$httpProvider){


	$routeProvider.when("/login",{

		templateUrl:"app/login/html/login.html",
		controller:"loginController",
		resolve: {
			demo:function(){
				return {};
			},
			redirect:function(){
				false;
			}
			
		}
	});
	
	$routeProvider.when("/cadastro/:login",{

		templateUrl:"app/login/html/cadastroUsuario.html",
		resolve: {

			cadastrarUsuario: function(loginUtil,$route,$rootScope,$localStorage, stService,st, $cookieStore, $location){

				var login = $route.current.params.login;

				//Realiza o cadastro do usuário
				stService.executeGet("cadastrar-usuario",{login:login}).success(function(){

					$localStorage.empresa = login;
					$localStorage.usuario = login;
					$localStorage.senha  ="123",	
					$location.path("login");
					
				})
				//Caso ocorra um erro ao cadastrar o usuário
				.error(function(){

				});

			}

		}
	
	});
	


	
});

})();

