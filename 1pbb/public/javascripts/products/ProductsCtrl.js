angular
	.module('opbb')
	.controller('ProductsCtrl', ProductsCtrl);


ProductsCtrl.$inject = ['$log', 'DataApi'];
function ProductsCtrl ($log, DataApi){

	$log.debug('ProductsCtrl init');

	var vm = this;

	vm.items = [];
	vm.status = undefined;
	vm.gridOptions = {};

	vm.activate = function _activate(){
		$log.debug('ProductsCtrl.activate called ' + DataApi.modeProducts);

		//DataApi.echo();

		DataApi.get( DataApi.modeProducts )
			.then(function success(response){

				console.log(response);

				vm.status = response.status;
				vm.items = response.data;
				vm.gridOptions.data = vm.items;
			
			}, function fail(response){
				
				$log.debug('ProductsCtrl.activate.get failed');
				vm.items = response.data || "Request failed";
				vm.status = response.status;

			});
	};

	vm.safe = function _safe(){
		DataApi.update( DataApi.modeProducts, vm.items )
			.then(function success(response){

				/*
				vm.status = response.status;
				vm.items = response.data;
				vm.gridOptions.data = vm.items;
			
		*/
			}, function fail(response){
		/*		
				$log.debug('ProductsCtrl.activate.get failed');
				vm.items = response.data || "Request failed";
				vm.status = response.status;
*/
			});


		
	};

}