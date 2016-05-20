angular
	.module('opbb')
	.service('DataApi', DataApi);


DataApi.$inject = ['$log', '$http', 'SettingsService'];
function DataApi ($log, $http, SettingsService){

	var api = this;

	api.modeProducts = '/data/products';
	api.modeCustomers = '/data/customers';
	api.modeBills = '/data/bills';
	api.modeOffers = '/data/offers';


	api.get = function _get(mode){
		
		var method = 'GET';
		//var url = 'http://localhost:3000/article';
		//'http://geisslet-old-horse.vsv4j2ufg0pruobz.myfritz.net:3000/data/products';

		var url = SettingsService.selectedBaseUrl.url + mode; 
		
		$http({method: method, url: url})
			.then(function success(response) {
				
				$log.debug('DataApi.get ' + mode + ' success');
				$log.debug(JSON.stringify(response));

				var status = response.status;
				resolve(response.data);

			}, function fail(response) {
				
				$log.debug('DataApi.get ' + mode + ' failed');
				$log.debug(JSON.stringify(response));
				reject(response);

		});

	};

	api.update = function(obj, mode){

		var method = 'POST';

	};

	api.delete = function(obj, mode){

		var method = 'DELETE';

	};

	api.getByKey = function(key, obj, mode){

	};

	api.updateByKey = function(key, obj, mode){

	};

	api.deleteByKey = function(key, obj, mode){

	};

}