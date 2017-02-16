// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('escapeRoomsApp').controller('escapeRoomsReviewsController', ['$scope', '$window', function($scope, $window) {

	}]);

	angular.module('escapeRoomsApp').directive("escapeRoomsReviewsForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/escapeRooms-reviews-form.html",
			controller:function(){

			},
			controllerAs: 'escapeRoomsReviewsForm'
		};
	});
})();
