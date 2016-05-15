angular
	.module('opbb')
	.controller('ArticlesCtrl', ArticlesCtrl);


ArticlesCtrl.$inject = ['$log','$http'];
function ArticlesCtrl ($log,$http){

	$log.debug('ArticlesCtrl init');

	var vm = this;

	vm.items = [];
	vm.status = undefined;

	vm.gridOptions = {};

	vm.activate = function fActivate(){
		$log.debug('ArticlesCtrl.activate called');

		var method = 'GET';
		var url = 'http://localhost:3000/article';

		$http({method: method, url: url})
			.then(function success(response) {
				$log.debug('ArticlesCtrl.activate.getArticle success');
				vm.status = response.status;
				vm.items = response.data;

				vm.gridOptions.data = vm.items;

			}, function fail(response) {
				$log.debug('ArticlesCtrl.activate.getArticle fail');
			  vm.items = response.data || "Request failed";
			  vm.status = response.status;
			});
	};

}