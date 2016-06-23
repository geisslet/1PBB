angular
	.module('opbb')
	.service('DataApi', DataApi);


DataApi.$inject = ['$log', '$http', '$q', 'SettingsService'];
function DataApi ($log, $http, $q, SettingsService){

	var api = this;

	api.modeProducts = '/data/products';
	api.modeCustomers = '/data/customers';
	api.modeBills = '/data/bills';
	api.modeOffers = '/data/offers';

	api.echo = function() {
		$log.debug('echo');
	};


	api.get = function _get(mode){
		var url = SettingsService.selectedBaseUrl.url + mode; 
		
		$log.debug('DataApi.get ' + url);

		var method = 'GET';
		//var url = 'http://localhost:3000/article';
		//'http://geisslet-old-horse.vsv4j2ufg0pruobz.myfritz.net:3000/data/products';

		//return $http({method: method, url: url});
		return $q(function(resolve,reject){
			$http({method: method, url: url})
		
			.then(
				function success(response) {
				
				$log.debug('DataApi.get ' + mode + ' success: length ' + response.data.length);
				//$log.debug(JSON.stringify(response));
				resolve(response);

			}, function fail(response) {
				
				$log.debug('DataApi.get ' + mode + ' failed');
				$log.debug(JSON.stringify(response));
				reject(response);
			});
		});
	};

	api.update = function _update(obj, mode){

		var method = 'POST';

	};

	api.delete = function _delete(obj, mode){

		var method = 'DELETE';

	};

	api.getByKey = function _getByKey(key, obj, mode){

	};

	api.updateByKey = function _updateByKey(key, obj, mode){

	};

	api.deleteByKey = function _deleteByKey(key, obj, mode){

	};

}