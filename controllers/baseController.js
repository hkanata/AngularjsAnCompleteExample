app.controller('baseController', function($scope, $location, statesService) {

	$scope.filtro = "";

	
	/*
		Dynamic data = PHP data
	*/
	//statesService.getStatesHttp(function(data){
		//$scope.states = data;
	//});
	
	/*
		Fixed Data
	*/
	$scope.states = statesService.getStates();
  
	$scope.today = statesService.getToday();
	$scope.letras = statesService.getLetters();
  
	$scope.removerSte = function(index){
		statesService.removeMe(index);
		$location.path('#remover');
	}

	$scope.addState = function() {
		statesService.addStateIntoCollection($scope.estado, $scope.capital, 1000);  
		$scope.estado = '';
		$scope.capital = '';
		$location.path('#initial');
	};
});