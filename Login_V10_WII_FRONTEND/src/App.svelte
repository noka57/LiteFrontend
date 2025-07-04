<script>
	import { onMount } from 'svelte';

	export let active_step='Acct';
	let style;

	let account = "";
	let accountInput = null;
	let account_Fail=0;
	
	let password = "";
	let passwordInput = null;
	let password_Fail=0;

	let NewPWInput=null;
	let NewPassword="";
	let ConfirmPWInput=null;
	let ConfirmPW="";

	let ChangePWMismatch=0;

	let sessionid="test";
	let pw_status=0;
	let lock_status=0;
	let currentTime ="";
	let showPassword = false;
	let expiredPWopration=0;
	let PWRuleFailed=0;
	let forceUpgrade=0;
	let hasNewerFwr=0;

	let showChangedPassword = false;


  $: {

    if (passwordInput && active_step === 'pwd') 
    {
       passwordInput.focus();
    } 

  }


	onMount(() => {
		if (accountInput && active_step=='Acct')
		{
			accountInput.focus();
		}
		console.log(window.screen.width);
		console.log(window.screen.height);
	});

	async function getNextPage(){
		window.location = '/EDashboard.html?'+encodeURIComponent(sessionid);
	}


	async function doPostRemainAPW() {
		const res = await fetch(window.location.href+"PremainAdminPW", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("remain password OK");
			if (hasNewerFwr==0)
			{
				getNextPage();
			}
			else if (hasNewerFwr==1)
			{
					console.log("Ota has newer fwr");
					active_step = "OTAhasNewerFwr";
			}
		}
		else
		{
			console.log("errorRA");
		}
	};


	async function doPostRemainGPW() {
		const res = await fetch(window.location.href+"PremainGuestPW", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("remain password OK");
			getNextPage();
		}
		else
		{
			console.log("errorRG");
		}
	};



  function handleExpired(event) 
  {
    const buttonClicked = event.target.className;
    if (buttonClicked.includes('buttonExpiredChange')) 
    {
      console.log('Change button clicked');
      active_step='ChangeExpiredPW';

    } 
    else if (buttonClicked.includes('buttonExpiredRemain')) 
    {
      console.log('Remain button clicked');

      if (account=="admin")
			{
				console.log("change admin password");
        currentTime= Math.floor((new Date().getTime())/1000);
        console.log(currentTime);
				doPostRemainAPW();
			}
			else if (account=="guest")
			{
				console.log("change guest password");
				currentTime= Math.floor((new Date().getTime())/1000);
        console.log(currentTime);
				doPostRemainGPW();
			}


    }
  }


  function handleUpgradeFwr(event) 
  {
    const buttonClicked = event.target.className;
    if (buttonClicked.includes('buttonExpiredChange')) 
    {
      console.log('Upgrade button clicked');
    //  active_step='ChangeExpiredPW';

    } 
    else if (buttonClicked.includes('buttonExpiredRemain')) 
    {
      console.log('No button clicked');
      getNextPage();
    }
  }


	async function doPostChangeAPW() {
		console.log("ChangePW");
		const res = await fetch(window.location.href+"PchangeAdminPW", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				NewPassword,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("change password OK");
			if (hasNewerFwr==0)
			{
				alert("Successful change! Please login again.");
				window.location = '/';
			}
			else if (hasNewerFwr==1)
			{
					console.log("OTa has newer fwr");
					active_step = "OTAhasNewerFwr";
			}
		}
		else
		{
			console.log("errorA");
		}
	};

	async function doPostChangeGPW() {
		console.log("ChangePW");
		const res = await fetch(window.location.href+"PchangeGuestPW", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				NewPassword,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("change password OK");
			alert("Successful change! Please login again.");
			window.location = '/';
		}
		else
		{
			console.log("errorG");
		}
	};

	async function doPostLockAdmin() {
		const res = await fetch(window.location.href+"LockAdmIn", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("lock admin OK");
		}
		else
		{
			console.log("errorLA");
		}
	};

	async function doPostLockGuest() {
		const res = await fetch(window.location.href+"LockGuEst", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				currentTime: parseInt(currentTime)
			})
		})

		if (res.status == 200)
		{
			console.log("lock guest OK");
		}
		else
		{
			console.log("errorLG");
		}
	};

	async function doPostLogin () {
		//console.log("Plogin");
		const res = await fetch(window.location.href+"Plogin", {
			method: 'POST',
			body: JSON.stringify({
				sessionid,
				password
			})
		})

		if (res.status == 200)
		{
			pw_status=await res.text();
			console.log(pw_status);

			if (pw_status==1 || pw_status==5)
			{
				console.log("initial password");
				active_step='ChangeInitPW';

				if (pw_status==5)
				{
					hasNewerFwr=1;
					console.log("ota has newer fwr");
				}
			}
			else if (pw_status==2 || pw_status==6)
			{
				console.log("expired password");
				active_step='ExpiredPW';

				if (pw_status==6)
				{
					hasNewerFwr=1;
					console.log("ota has newer fwr");
				}
			}
			else if (pw_status==4)
			{
					hasNewerFwr=1;
					console.log("ota has newer fwr");
					active_step = "OTAhasNewerFwr"
			}
			else
			{
				getNextPage();
			}
		}
		else
		{

			password = "";
			password_Fail++;
			if (password_Fail >3)
			{
					if (account=="admin")
					{
						currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostLockAdmin();
					}
					else if (account=="guest")
					{
						currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostLockGuest();
					}
			}					
						
		}

	};
	
 function CheckPasswordRule(str) {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    return lowerCaseRegex.test(str) && upperCaseRegex.test(str) && numberRegex.test(str) && specialCharRegex.test(str) && str.length >=16;
  }


	const handleOnSubmit = (evt) => {

		if (active_step=='Acct')
		{
			checkAccount();
		}
		else if (active_step=='pwd')
		{
			doPostLogin();
		}
		else if (active_step=='ChangeInitPW')
		{
			if (NewPassword != ConfirmPW)
			{
				PWRuleFailed=0;
				ChangePWMismatch=1;
			}
			else
			{
				ChangePWMismatch=0;

				if (CheckPasswordRule(NewPassword))
				{
					PWRuleFailed=0;
					if (account=="admin")
					{
						console.log("change admin password");
	        	currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostChangeAPW();
					}
					else if (account=="guest")
					{
						console.log("change guest password");
						currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostChangeGPW();
					}
				}
				else
				{
					PWRuleFailed=1;
				}

			}

		}
		else if (active_step=='ChangeExpiredPW')
		{
			if (NewPassword != ConfirmPW)
			{
				PWRuleFailed=0;
				ChangePWMismatch=1;
			}
			else
			{
				ChangePWMismatch=0;
				if (CheckPasswordRule(NewPassword))
				{
					PWRuleFailed=0;
					if (account=="admin")
					{
						console.log("change admin password");
	        	currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostChangeAPW();
					}
					else if (account=="guest")
					{
						console.log("change guest password");
						currentTime= Math.floor((new Date().getTime())/1000);
	        	console.log(currentTime);
						doPostChangeGPW();
					}
				}
				else
				{
					PWRuleFailed=1;
				}
			}
		}
		
	};
	

	async function checkAccount(id){
			
		const res = await fetch(window.location.href+"Acheck", {
			method: 'POST',
			body: JSON.stringify({
				account
					})
				})


		if (res.status == 200)
		{
			sessionid=await res.text();
			active_step='pwd';
		}
		else
		{
			if (res.status == 403)
			{
				console.log("403");
			  lock_status=await res.text();
			  console.log (lock_status);
			  if (lock_status ==1)
			  {

				}
				else
				{
					account = "";
					account_Fail++;
				}
			}
		}
		



		};




</script>



<style>
	main {
		width: 100%;
		height: 100%;
		background-repeat:no-repeat;
		background-image: url("../Login_2.png");
		background-size: contain;
		background-position: center;
	}

	.login{
		color:#1762BC;
		font-family:Calibri-Bold;
		font-size:1.5vw;
		text-align:center;
		position:relative;
		top:30%;
		left:14%;
	}

	.login2{
		color:#1762BC;
		font-family:Calibri-Bold;
		font-size:1.8vw;
		text-align:center;
		position:relative;
		top:30%;
		left:16%;
	}

	.buttonAccount{
		background-color:#1762BC;
		color: white;
		border-radius: 15px;
		font-size:1.8vw;
		position:relative;
		margin-top: 25px;
		top:30%;
		width:25%
	}

	.buttonPassWord{
		background-color:#1762BC;
		color: white;
		border-radius: 15px;
		font-size:1.8vw;
		position:relative;
		margin-top: 6px;
		top:30%;
		width:25%
	}

	.checkPassword{
		font-size:1vw;
		position:relative;
		text-align:center;
		top:30%;
		left:30%;
		width:25%;
	}



	.buttonChange{
		background-color:#1762BC;
		color: white;
		border-radius: 15px;
		font-size:1.8vw;
		position:relative;
		margin-top: 6px;
		top:30%;
		width:25%
	}


	.buttonExpiredRemain{
		background-color:#1762BC;
		color: white;
		border-radius: 15px;
		font-size:1.8vw;
		position:relative;
		margin-top: 32px;
	}


	.buttonExpiredChange{
		background-color:#1762BC;
		color: white;
		border-radius: 15px;
		font-size:1.8vw;
		position:relative;
		margin-top: 32px;

	}

	.AFail{
		color:red;
		font-size:12px;
	}

	.PFail{
		color:red;
		font-size:12px;
	}

	.defaultPW
	{
		color:red;
		font-size:12px;
	}

	.expiredPW
	{
		color:red;
		font-size:12px;
	}

	.MismatchFail{
		color:red;
		font-size:12px;
	}

	.PWRuleFail{

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

	<button class="buttonAccount" type="submit">Continue</button>
	{#if lock_status == 1}
			<p class="PFail">This account has been locked. Please login again after 30 minutes</p>
	{:else if account_Fail != 0}
		<p class="AFail">Please enter a valid account</p>
	{/if}	

{:else if active_step == 'pwd'}

	{#if showPassword}
	<div>
		<input type="text" id="password" bind:this={passwordInput} bind:value={password} required placeholder="Password"/>
	</div>
	{:else}
	<div>
		<input type="password" id="password" bind:this={passwordInput} bind:value={password} required placeholder="Password"/>
	</div>
	{/if}

	<div class="checkPassword">
		<label>
  		<input type="checkbox" bind:checked={showPassword}/>
  		Show Password
		</label>
	</div>
	<button class="buttonPassWord" type="submit">Login</button>
	{#if password_Fail != 0}
		{#if password_Fail >3}
			<p class="PFail">This account has been locked. Please login again after 30 minutes</p>
		{:else}
			<p class="PFail">Please enter a valid password</p>
		{/if}
	{/if}

{:else if active_step == 'ChangeInitPW'}

<div class="defaultPW">
This is default password. Now change password for security considerations.
</div>

<p class="pt-10"></p>

<div>
{#if showChangedPassword}
		<input type="text" id="newPassword" bind:this={NewPWInput} bind:value={NewPassword} required placeholder="New Password"/>
{:else}
		<input type="password" id="newPassword" bind:this={NewPWInput} bind:value={NewPassword} required placeholder="New Password"/>
{/if}
</div>
{#if showChangedPassword}
		<input type="text" id="ConfirmPassword" bind:this={ConfirmPWInput} bind:value={ConfirmPW} required placeholder="Confirm Password"/>
{:else}
		<input type="password" id="ConfirmPassword" bind:this={ConfirmPWInput} bind:value={ConfirmPW} required placeholder="Confirm Password"/>
{/if}

	<div class="checkPassword">
		<label>
  		<input type="checkbox" bind:checked={showChangedPassword}/>
  		Show Password
		</label>
	</div>

<div>
		<button class="buttonChange" type="submit">Change</button>
</div>

{#if ChangePWMismatch !=0}
		<p class="MismatchFail">Mismatch. Please enter password again.</p>
{:else if PWRuleFailed ==1}
		<p class="PWRuleFail">Password must contain at least one lowercase letter, one uppercase letter,</p> 
		<p class="PWRuleFail">one number, and one special character.</p>
    <p class="PWRuleFail">and has a minimum length of 16 characters. Please enter password again.</p>	
{/if}


{:else if active_step == 'ExpiredPW'}

<div class="expiredPW">
Your password has been expired. To change the password or remain the password.
</div>

	<div class="flex">

		<button class="buttonExpiredChange" type="submit" on:click={handleExpired}>Change</button>
		<button class="buttonExpiredRemain" type="submit" on:click={handleExpired}>Remain</button>


	</div>
{:else if active_step == "OTAhasNewerFwr"}
<div class="expiredPW">
A newer firmware is available. Would you like to upgrade now?
</div>

	<div class="flex">

		<button class="buttonExpiredChange" type="submit" on:click={handleUpgradeFwr}>Upgrade</button>
		<button class="buttonExpiredRemain" type="submit" on:click={handleUpgradeFwr}>No Upgrade</button>


	</div>

{:else if active_step == 'ChangeExpiredPW'}

	<div>
	{#if showChangedPassword}
		<input type="text" id="newPassword" bind:this={NewPWInput} bind:value={NewPassword} required placeholder="New Password"/>		
	{:else}
		<input type="password" id="newPassword" bind:this={NewPWInput} bind:value={NewPassword} required placeholder="New Password"/>	
	{/if}
	</div>
	{#if showChangedPassword}
		<input type="text" id="ConfirmPassword" bind:this={ConfirmPWInput} bind:value={ConfirmPW} required placeholder="Confirm Password"/>
	{:else}
		<input type="password" id="ConfirmPassword" bind:this={ConfirmPWInput} bind:value={ConfirmPW} required placeholder="Confirm Password"/>
	{/if}
	<div class="checkPassword">
		<label>
  		<input type="checkbox" bind:checked={showChangedPassword}/>
  		Show Password
		</label>
	</div>


	<div>
		<button class="buttonChange" type="submit">Change</button>
	</div>

{#if ChangePWMismatch !=0}
		<p class="MismatchFail">Mismatch. Please enter password again.</p>
{:else if PWRuleFailed ==1}
		<p class="PWRuleFail">Password must contain at least one lowercase letter, one uppercase letter,</p> 
		<p class="PWRuleFail">one number, and one special character.</p>
    <p class="PWRuleFail">and has a minimum length of 16 characters. Please enter password again.</p>
{/if}


{/if}
</form>

</main>

