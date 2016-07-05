<div class="container theme-showcase">
	<h1>Criar</h1>
	
	<a href="#initial">Voltar</a>
	
	<p>
	  <form ng-submit="addState()">
		<!-- diretiva ng-model -->
		<input type="text" ng-model="estado" placeholder="Digite um estado" />
		<input type="text" ng-model="capital" placeholder="Digite a capital" />
		<input type="submit" value="Incluir" />
	  </form>
	</p>

</div>