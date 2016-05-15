angular
	.module('opbb')
	.controller('ArticlesCtrl', ArticlesCtrl);


ArticlesCtrl.$inject = ['$log','$http'];
function ArticlesCtrl ($log,$http){

	var vm = this;

	vm.items = [];
	vm.status = undefined;

	vm.gridOptions = {};

	vm.activate = function activate(){
		$log.debug('ArticlesCtrl.activate called');

		var method = 'GET';
		var url = 'localhost:3000/article';

		$http({method: method, url: url})
			.then(function(response) {
			  vm.status = response.status;
			  vm.items = response.data;

			  vm.gridOptions.data = vm.items;

			}, function(response) {
			  vm.items = response.data || "Request failed";
			  vm.status = response.status;
			});
	};

}