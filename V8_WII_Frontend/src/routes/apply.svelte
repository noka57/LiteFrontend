<script>
	import { List, Li, Heading,Button, Modal} from 'flowbite-svelte';
	import { sessionidG } from "./sessionG.js";
	import {LanConfigChangedLog, ChangedLANConfig} from "./configG.js"
	let color="text-blue-600 dark:text-gray-400";
	let defaultModal = false;
  let lan_data="";

	let sessionid;
	let Content; 
  let sessionBinary;
  let lanBinary=null;
  let LANchangedValues = [];
	sessionidG.subscribe(val => {
	     sessionid = val;
	});

	ChangedLANConfig.subscribe(val => {
        lan_data = val;
  	});

  LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
  });

  

	async function SetLANData() {
	    const res = await fetch(window.location.origin+"/SetLanData", {
	      method: 'POST',
	      body: Content
	    })

	  if (res.status == 200)
	  {
	  	console.log("set lan data OK\r\n");
	  }
	};


	function modalTrigger()
	{
	    defaultModal = true;

			if (sessionid && lan_data != "") 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        let LANString = JSON.stringify(lan_data, null, 0);
				const bytesArray = Array.from(LANString).map(char => char.charCodeAt(0));
    		lanBinary = new Uint8Array(bytesArray);
      	Content=new Uint8Array(lanBinary.length+sessionBinary.length);
        Content.set(sessionBinary,0);
        Content.set(lanBinary, sessionBinary.length);
        SetLANData();
      }




	};


</script>


<div class="text-center">
<Heading tag="h2" customSize="text-3xl font-extrabold" class="text-center mb-2 font-semibold text-gray-900 dark:text-white">The following configs are changed:</Heading>
<List tag="ol" {color} class="text-2xl space-y-1" style="display: inline-block;text-align: left;">
{#if LANchangedValues.length!=0}
  <Li>LAN
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each LANchangedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}
</List>

</div>
<div class="pt-10 pl-10 text-center">
<Button on:click={() => modalTrigger()}>Apply and Reboot</Button>
</div>

<Modal bind:open={defaultModal} size="lg" class="w-full" >

<div class="flex"><div class="">
<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

<path fill-rule="evenodd" clip-rule="evenodd" d="M9.40123 3.0034C10.5557 1.00229 13.4439 1.00229 14.5983 3.0034L21.9527 15.7509C23.1065 17.7509 21.6631 20.2501 19.3541 20.2501H4.64546C2.33649 20.2501 0.893061 17.7509 2.04691 15.7509L9.40123 3.0034ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V9C11.25 8.58579 11.5858 8.25 12 8.25ZM12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75C12.75 15.3358 12.4142 15 12 15C11.5858 15 11.25 15.3358 11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5Z" fill="currentColor"/>
</svg>
</div>

    <p class="pl-4 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Don't Close This Page Before Finishing</p>

  </div>
</Modal>