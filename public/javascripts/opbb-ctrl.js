var opbb = angular
	.module('opbb')
	.controller('mainCtrl', mainCtrl);


mainCtrl.$inject = ['$log', 'SettingsService'];
function mainCtrl($log, SettingsService){
	$log.debug('opbb.mainCtrl init.');

	var vm = this;

    vm.env = SettingsService.selectedBaseUrl.name;

    vm.switchEnv = function(){
        
        if (vm.env === SettingsService.BaseUrl.name) {
            SettingsService.setDevMode();
        } else {
            SettingsService.setWebMode();
        }

        vm.env = SettingsService.selectedBaseUrl.name;
    };

}
