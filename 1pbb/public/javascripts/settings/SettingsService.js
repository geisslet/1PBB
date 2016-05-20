angular
	.module('opbb')
	.service('SettingsService', SettingsService);


SettingsService.$inject = ['$log'];
function SettingsService ($log){

	var serv = this;

	serv.BaseUrlDev = { 'url':'localhost:3000', 'name':'local'};
	serv.BaseUrl = { 'url':'http://geisslet-old-horse.vsv4j2ufg0pruobz.myfritz.net:3000', 'name':'web'};

	serv.selectedBaseUrl = serv.BaseUrl;

	serv.setWebMode = function(){
		serv.selectedBaseUrl = serv.BaseUrl;
	};

	serv.setDevMode = function(){
		serv.selectedBaseUrl = serv.BaseUrlDev;
	};

}