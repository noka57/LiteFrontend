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
			//alert('check account');
			active_step='pwd';
		}
		else
		{
			//doPost();
		}
		
	};
	
	const handleOnChange = (evt) => {
		// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
		// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
		passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password' );
	};


	function checkAccount(id){
			alert('check account');
			};


</script>



<style>
	main {
		width: 75%;
		height: 100%;
		margin:auto;
		background-repeat:no-repeat;
		background-image: url("../Login_2.png");

	}


	
	.form__group__input {
		margin-bottom: 0;
	}


	.login{
		padding-left:700px;
		padding-top:300px;
		color:#1762BC;
		font-family:Calibri-Bold;
		font-size:32px;
	}

	.login2{
		padding-left:700px;
		color:#1762BC;
		font-family:Calibri-Bold;
		font-size:32px;
	}

	.buttonC{
		background-color:#1762BC;
		margin-top: 30px;
		color: white;
		border-radius: 15px;
		width:500px;
	}

</style>




<main>
<p class="login">
{#if active_step == 'Acct'}
	Login
{:else}
	{account}
{/if}
</p>

<form class="login2" on:submit|preventDefault={handleOnSubmit}>
{#if active_step == 'Acct'}


	<div>
		<input type="text" id="account" bind:this={accountInput} bind:value={account} required placeholder="Account"/>
	</div>

	<button class="buttonC" type="submit">Continue</button>
	{:else}
	<div >
		<input type="password" id="password" bind:this={passwordInput} bind:value={password} required placeholder="Password"/>
	</div>
	<button class="buttonC" type="submit">Login</button>
	{/if}
</form>

</main>

