<script>
	import { onMount } from 'svelte';
	
	let account = "";
	let accountInput = null;
	
	let password = "";
	let passwordInput = null;
	
	onMount(() => {
		accountInput.focus();
	});

	async function getTest(){
	//alert(window.location);
	//const res = await fetch(window.location.href+"/testview.html", {
		//	method: 'GET'
		//	})

			//alert(res.status);
			//window.location='/testview.html'
			//const { body, statusCode, contentType } = pageContext.httpResponse,res.status(statusCode).type(contentType).send(body)
	 //window.location = '/protected';
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
		if (res.status == 404)
			getTest();
			//alert("not found")
		

		//const { body, statusCode, contentType } = pageContext.httpResponse
    //res.status(statusCode).type(contentType).send(body)

		//const json = await res.json()
		//result = JSON.stringify(json)
	};
	
	const handleOnSubmit = (evt) => {
		// Log user into account.
		//alert(account);
		//alert(password);
		//alert(window.location.href);
		doPost();
		
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
		margin: 0 auto;
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

</style>


<main>
<h1>
	Login
</h1>

<form class="form" on:submit|preventDefault={handleOnSubmit}>
	<div class="form__group">
		<label class="form__group__label" for="account">Account</label>
		<input class="form__group__input" type="text" id="account" bind:this={accountInput} bind:value={account} required />
	</div>
	<div class="form__group">
		<label class="form__group__label" for="password">Password</label>
		<input class="form__group__input" type="password" id="password" bind:this={passwordInput} bind:value={password} required />
	</div>
	<div class="form__group form__group--check">
		<input class="form__group__checkbox" type="checkbox" id="showPassword" on:change={handleOnChange} />
		<label class="form__group__label" for="showPassword">Show Password</label>
	</div>
	<button type="submit">Login</button>
</form>

</main>