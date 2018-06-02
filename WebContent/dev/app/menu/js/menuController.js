"use strict";

(function(){

	angular.module("stapi")

	.controller("menuCtrl", menuCtrl);

	function menuCtrl($scope, $controller){

		var ctrl = this;
		ctrl.scope = $scope;

		var menuItems =  [

			{path: "inicio", icon:"home", label:"Início"},
			{path: "cliente", icon:"person", label:"Clientes"}
			];

		angular.extend(ctrl, $controller('stMenuController', {
			$scope: $scope,
			menuItems: menuItems,
			sidenavId:  "side-nav-principal"
		}));


	}	

})();

