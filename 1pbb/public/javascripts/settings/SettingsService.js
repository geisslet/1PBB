angular
	.module('opbb')
	.service('SettingsService', SettingsService);


SettingsService.$inject = ['$log'];
function SettingsService ($log){

	$log.debug('SettingsService.init');

	var serv = this;

	serv.BaseUrl = { 'url':'http://geisslet-old-horse.vsv4j2ufg0pruobz.myfritz.net:3000', 'name':'web'};
	serv.BaseUrlDev = { 'url':'http://localhost:3000', 'name':'local'};

	serv.selectedBaseUrl = serv.BaseUrlDev;

	serv.setWebMode = function(){
		serv.selectedBaseUrl = serv.BaseUrl;
		$log.debug('new server: ' + JSON.stringify(serv.selectedBaseUrl));
	};

	serv.setDevMode = function(){
		serv.selectedBaseUrl = serv.BaseUrlDev;
		$log.debug('new server: ' + JSON.stringify(serv.selectedBaseUrl));
	};

}