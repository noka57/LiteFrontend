<script>
	import { onMount } from 'svelte';

	export let active_step='Acct'
	let style;

	let account = "";
	let accountInput = null;
	let account_Fail=0;
	
	let password = "";
	let passwordInput = null;
	let password_Fail=0;

	let sessionid="test";


	onMount(() => {
		accountInput.focus();
	});

	async function getNextPage(){
		window.location = '/EDashboard.html?'+encodeURIComponent(sessionid);
	}

	async function doPost () {
		const res = await fetch(window.location.href+"Plogin", {
			method: 'POST',
			body: JSON.stringify({
				password
			})
		})

		//alert(res.status)
		if (res.status == 200)
		{
		    sessionid=await res.text();
			getNextPage();
		}
		else
		{
			password = "";
			password_Fail++;
		}

	};
	
	const handleOnSubmit = (evt) => {


		if (active_step=='Acct')
		{
			checkAccount();
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
	};


	async function checkAccount(id){
			
		const res = await fetch(window.location.href+"Acheck", {
			method: 'POST',
			body: JSON.stringify({
				account
					})
				})

		if (res.status == 200)
			active_step='pwd';
		else
		{
			account = "";
			account_Fail++;
		}


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

	.login{
		padding-left:900px;
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

	.AFail{
		color:red;
		font-size:12px;
	}

	.PFail{
		color:red;
		font-size:12px;
	}

</style>




<main>

<p class="login">
{#if active_step != 'pwd'}
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
	{#if account_Fail != 0}
	
<p class="AFail">Please enter a valid account</p>
	{/if}	

	{:else if active_step == 'pwd'}
	<div >
		<input type="password" id="password" bind:this={passwordInput} bind:value={password} required placeholder="Password"/>
	</div>
	<button class="buttonC" type="submit">Login</button>

	{#if password_Fail != 0}
	
<p class="PFail">Please enter a valid password</p>
	{/if}

{/if}
</form>

</main>

