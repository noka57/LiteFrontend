<script>
	import { onMount } from 'svelte';
	
	export let active_step='Acct'
	let style;

	let account = "";
	let accountInput = null;
	
	let password = "";
	let passwordInput = null;
	
	onMount(() => {
		accountInput.focus();
	});

	async function getTest(){
		alert("login!!");
		//window.location = '/Aindex.html';
	}

	async function doPost () {
		const res = await fetch(window.location.href+"login", {
			method: 'POST',
			body: JSON.stringify({
				account,
				password
			})
		})

		//alert(res.status)
		//if (res.status == 200)
			getTest();

	};
	
	const handleOnSubmit = (evt) => {
		// Log user into account.
		//alert(account);
		//alert(password);
		//alert(window.location.href);

		if (active_step=='Acct')
		{
			alert('check account');
			active_step='pwd';
		}
		else
		{
			doPost();
		}
		
	};
	
	const handleOnChange = (evt) => {
		// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
		// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
		passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password' );
	}
</script>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 50px;
		display:grid;
		place-content:center;
		height:80vh;
		
	}

	.form__group {
		margin-bottom: 0.875rem; 
	}
	
	.form__group__label {
	    text-align: left;
		margin-bottom: 0.5rem;
	}
	
	.form__group__input {
		margin-bottom: 0;
	}
	
	.form__group--check {
		display: flex;
		align-items: center;
	}
	
	.form__group__checkbox {
		margin-bottom: 0;
	}
	
	.form__group--check > .form__group__label {
		margin-bottom: 0;
	}
	
	.form__group--check > .form__group__checkbox {
		margin-right: 0.5rem;
	}

	.redTable{
		width: 50%;
		text-align: center;
		border-collapse: collapse;
		margin:0 auto;
		table-layout: fixed;

	}

	.hello{
		padding: 3px 2px;
		background-image: url("../hello3.jpeg");
		color: #fff;
		font-size: 32px;
	}


</style>




<table class="redTable">
<tr>
<th class="hello">
Hello World
</th>
<th>
<main>
<h1>
{#if active_step == 'Acct'}
	Login
{:else}
	{account}
{/if}
</h1>

<form class="form" on:submit|preventDefault={handleOnSubmit}>
{#if active_step == 'Acct'}
	<div class="form__group">
		<label class="form__group__label" for="account">Account</label>
		<input class="form__group__input" type="text" id="account" bind:this={accountInput} bind:value={account} required />
	</div>
	<button type="submit">Continue</button>
	{:else}
	<div class="form__group">
		<label class="form__group__label" for="password">Password</label>
		<input class="form__group__input" type="password" id="password" bind:this={passwordInput} bind:value={password} required />
	</div>
	<button type="submit">Login</button>
	{/if}
</form>

</main>
</th>
</tr>
</table>

