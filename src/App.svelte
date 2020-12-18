<script>
	export let title;
	export let operationInfo = 'soma';
	let value1 = null;
	let value2 = null;
	let result;
	$: if (operationInfo === 'soma') {
		result = value1 + value2;
	} else if (operationInfo === 'subtracao')  {
		result = value1 - value2;
	} else if (operationInfo === 'multiplicacao')  {
		result = value1 * value2;
	} else if (operationInfo === 'divisao'){
		result = value1 / value2;
	} else {
		result = Math.pow(value1, value2);
	}
</script>

<style>
	.main-box {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.select-box {
		border: 0px;
		background-color: #eef;
		outline: none;
	}
	.math-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.result-box {
		padding: 20px;
		background-color: orange;
		color: #fff;
		font-weight: 900;
		height: 30px;
		width: 50%;
		text-align: center;
		font-size: 1.4em;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0px;
	}
</style>

<div class="main-box">
	<h1>{@html title}</h1>
	<p>Digite os valores para realizar uma 
		<select bind:value={operationInfo} class="select-box">
			<option value="soma">soma</option>
			<option value="subtracao">subtração</option>
			<option value="multiplicacao">multiplicação</option>
			<option value="divisao">divisão</option>
			<option value="potenciacao">potenciação</option>
		</select>
	</p>
	<div class="math-box">
		<div class="input-box">
			<input type="number" bind:value={value1} />
			<input type="number" bind:value={value2} />
		</div>
		<div class="result-box">
			{#if result === null || result === undefined || isNaN(result)}
				<p class="waiting-value-text">Resultado</p>
			{:else}
				<p>{result}</p>
			{/if}
		</div>
	</div>
</div>
