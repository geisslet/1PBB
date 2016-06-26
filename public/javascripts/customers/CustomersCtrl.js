angular
	.module('opbb')
	.controller('CustomersCtrl', CustomersCtrl);


CustomersCtrl.$inject = ['$log', 'DataApi'];
function CustomersCtrl ($log, DataApi){

	var vm = this;
	vm.items = [];
	vm.status = undefined;
	vm.gridOptions = [];

	vm.activate = function fActivate(){
		$log.debug('CustomersCtrl.activate called');

		DataApi.get(DataApi.modeCustomers)
			.then(function success(response){

				vm.status = response.status;
				vm.items = response.data;
				//vm.gridOptions.data = vm.items;
			
			}, function fail(response){
				
				$log.debug('CustomersCtrl.activate.get failed');
				vm.items = response.data || "Request failed";
				vm.status = response.status;

			});
	};

}