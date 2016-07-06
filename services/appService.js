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
		var config = {
			headers : {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		}
		var data = $.param({
			my_site: "opba.com.br"
		});
			
		//$http.get(urlStates).success(callback);
		var promise = $http.post(urlStates, data, config);
		promise.success(function(data) {  
			console.log("SUCCESS");
			console.log(data);
			callback(data);
			console.log("SUCCESS");
		});
		promise.error(function(response, status) {  
			console.log("ERROR");
			console.log("The request failed with response " + response + " and status code " + status);
			console.log("ERROR");
		});
		
		
	};
  
	this.getStates = function(callback) {
		return states;
	};

});