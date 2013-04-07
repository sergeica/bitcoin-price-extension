var Util = chrome.extension.getBackgroundPage().Util;
var Settings = chrome.extension.getBackgroundPage().Settings;
var Gox = chrome.extension.getBackgroundPage().Gox;

angular.module('OptionsApp', [])
	
	.controller('OptionsCtrl', function OptionsCtrl($scope) {

		$scope.settings = Settings.vals;

		// Find a way to easily do this for all settings
		$scope.$watch('settings.badge.value', function(new_val, old_val) {
			Settings.set('badge', new_val);
		});

	});