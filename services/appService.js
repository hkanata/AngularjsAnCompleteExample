app.service('statesService', function($http) {

	var urlStates = "dados/states.php";
	
	// privado
	var states = [
		{"name": "Minas Gerais", "capital": "Belo Horizonte", "renda": 2000},
		{"name": "Sao Paulo", "capital": "Betim", "renda": 2000},
		{"name": "Rio de Janeiro", "capital": "Rio de Janeiro", "renda": 2000},
		{"name": "Fortaleza", "capital": "Belem", "renda": 2000}
	];
  
	// público
	this.getLetters = function() {
		return "abcdefghijklmnopqrstuvwyz";
	};
  
	this.getToday = function(){
		return new Date();
	};
  
	this.addStateIntoCollection = function(estado, capital, renda) {
		states.push({
			name: estado,
			capital: capital,
			renda: renda
		});
	};
	
	this.removeMe = function(index) {
		states.splice(index, 1);
	}

	this.getStatesHttp = function(callback) {
		//$http.get('states.json').success(callback);
		$http.get(urlStates).success(callback);
	};
  
	this.getStates = function(callback) {
		return states;
	};

});