app.controller('baseController', function($scope, $routeParams, $location, statesService) {

	$scope.filtro = "";
	/*
		Dynamic data = PHP data
	*/
	statesService.getStatesHttp(function(data){
		$scope.states = data;
	});
	
	/*
		Fixed Data
	*/
	//$scope.states = statesService.getStates();
  
	if( $routeParams.id != null ){
		$scope._id = $routeParams.id;
	}
  
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

app.filter('meuFiltro', function() {
    return function(data, input, t1, t2) {
		
		console.log(input);
		console.log(t1);
		console.log(t2);
		
        return data;
    };
});