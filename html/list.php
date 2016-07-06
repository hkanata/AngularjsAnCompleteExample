<div class="container theme-showcase">
	<h1>Nomes</h1>
	
	<a href="#create">Incluir</a>
	<p>Hoje são: {{ today | date}}</p>
	
	<p>Filtrar1: <input type="text" ng-model="filtro_padrao" /></p>
	<p>Filtrar2: <input type="text" ng-model="filtro_input" /></p>
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="state in states | orderBy:'name' | filter:filtro_padrao | meuFiltro:filtro_input:'t1':'t2'">
			{{state.name | uppercase}} - {{state.capital | lowercase}} - renda per capita: {{state.renda | currency : 'R$'}} 
			<a href="javascript:void(0);" ng-click="removerSte($index)">remover</a> |
			<a href="#/getId/{{state.renda}}">GET_ID - {{state.renda}}</a>
		</li>
	</ul>

	<!-- limitTo -->
	<p>Letras: {{letras}}</p>
	<p>Letras (limitado a 2): {{letras | limitTo : 2}}</p>
	<p>Letras (limitado a 2 e uppercase): {{letras | limitTo : 2 | uppercase }}</p>

	<!-- filtro json -->
	<p>Estados (json): {{states | json }}</p>
</div>