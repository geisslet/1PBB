angular
	.module('opbb')
	.service('DataApi', DataApi);


DataApi.$inject = ['$log', '$http', '$q', 'SettingsService', 'ngDialog'];
function DataApi ($log, $http, $q, SettingsService, ngDialog){

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
				resolve(response.data);

			}, function fail(response) {
				
				$log.debug('DataApi.get ' + mode + ' failed');
				$log.debug(JSON.stringify(response));
				reject(response);
			});
		});
	};

	api.update = function _update(mode, obj){
		var url = SettingsService.selectedBaseUrl.url + mode; 

		$log.debug('DataApi.post ' + url);
		var method = 'POST';
		return $q(function(resolve,reject){
			$http({method: method, url: url, data: obj})
		
			.then(
				function success(response) {
				
				$log.debug('DataApi.get ' + mode + ' success: length ' + response.data.length);
				//$log.debug(JSON.stringify(response));

				//ngDialog.open({ template: 'popupTmpl.html', className: 'ngdialog-theme-default' });
				ngDialog.open({ template: '<p>'+JSON.stringify(response)+'</p>', className: 'ngdialog-theme-default', plain: true });


				resolve(response);

			}, function fail(response) {
				
				$log.debug('DataApi.get ' + mode + ' failed');
				$log.debug(JSON.stringify(response));
				reject(response);
			});
		});

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