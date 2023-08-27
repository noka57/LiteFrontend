<script>
	import { List, Li, Heading,Button, Modal} from 'flowbite-svelte';
	import { sessionidG } from "./sessionG.js";
	import { 
			LanConfigChangedLog, 
			ChangedLANConfig,
			NAT_LoopBack_ConfigChangedLog, 
  		NAT_VS_ConfigChangedLog, 
  		NAT_VC_ConfigChangedLog, 
  		NAT_Dmz_ConfigChangedLog,
  		ChangedNATConfig,
  		Firewall_General_ConfigChangedLog,
    	Firewall_IPFilter_ConfigChangedLog,
    	Firewall_MACFilter_ConfigChangedLog,
    	ChangedFirewallConfig,
    	StaticRouteConfigChangedLog,
      ChangedStaticRouteConfig,
      ChangedMaintenanceConfig,
  		MaintenanceConfigChangedLog 
			} from "./configG.js"
	let color="text-blue-600 dark:text-gray-400";
	let defaultModal = false;
  let lan_data="";
  let nat_data="";
  let firewall_data="";
  let static_route_data="";
  let maintenance_data="";


	let sessionid;
  let sessionBinary;
  let ContentLAN; 
  let lanBinary=null;
  let LANchangedValues = [];


  let ContentNAT; 
  let natBinary=null;
  let NAT_loopback_changedValues =[];
  let NAT_virtualServer_changedValues =[];  	
  let NAT_virtualComputer_changedValues =[];
  let NAT_dmz_changedValues =[];

  let ContentFirewall; 
  let firewallBinary=null;
  let Firewall_general_changedValues = [];
  let Firewall_ipfilter_changedValues = [];
  let Firewall_macfilter_changedValues = [];

  let ContentStaticR;
  let staticRBinary=null;
  let staticR_changedValues = [];

  let ContentMaintenance;
  let MaintenanceBinary=null;
  let maintenance_changedValues = [];

	sessionidG.subscribe(val => {
	     sessionid = val;
	});

	ChangedLANConfig.subscribe(val => {
      lan_data = val;
  });

  ChangedNATConfig.subscribe(val => {
      nat_data = val;
  });


  ChangedFirewallConfig.subscribe(val => {
      firewall_data = val;
  });

  ChangedStaticRouteConfig.subscribe(val => {
      static_route_data = val;
  });

  ChangedMaintenanceConfig.subscribe(val => {
      maintenance_data = val;
  });


  LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
  });


	NAT_LoopBack_ConfigChangedLog.subscribe(val => {
	  	NAT_loopback_changedValues = val;

	});

	NAT_VC_ConfigChangedLog.subscribe(val => {
	    NAT_virtualComputer_changedValues = val;
	});

	NAT_VS_ConfigChangedLog.subscribe(val => {
	    NAT_virtualServer_changedValues = val; 	
	});

	NAT_Dmz_ConfigChangedLog.subscribe(val => {
	    NAT_dmz_changedValues = val;
	});

 	Firewall_General_ConfigChangedLog.subscribe(val => {
      Firewall_general_changedValues = val;
  });

  Firewall_IPFilter_ConfigChangedLog.subscribe(val => {
      Firewall_ipfilter_changedValues = val;

  });

  Firewall_MACFilter_ConfigChangedLog.subscribe(val => {
     Firewall_macfilter_changedValues = val;
  });

 	StaticRouteConfigChangedLog.subscribe(val => {
      staticR_changedValues = val;
  });  

  MaintenanceConfigChangedLog.subscribe(val => {
      maintenance_changedValues = val;
  });

	async function SetLANData() {
	    const res = await fetch(window.location.origin+"/SetLanData", {
	      method: 'POST',
	      body: ContentLAN
	    })

	  if (res.status == 200)
	  {
	  	console.log("set lan data OK\r\n");
	  }
	};

	async function SetNATData() {
	    const res = await fetch(window.location.origin+"/SetNATData", {
	      method: 'POST',
	      body: ContentNAT
	    })

	  if (res.status == 200)
	  {
	  	console.log("set nat data OK\r\n");
	  }
	};

	async function SetFirewallData() {
	    const res = await fetch(window.location.origin+"/SetFirewallData", {
	      method: 'POST',
	      body: ContentFirewall
	    })

	  if (res.status == 200)
	  {
	  	console.log("set firewall data OK\r\n");
	  }
	};

	async function SetStaticRData() 
	{
	    const res = await fetch(window.location.origin+"/SetStaticRdata", {
	      method: 'POST',
	      body: ContentStaticR
	    })

	  if (res.status == 200)
	  {
	  	console.log("set static route data OK\r\n");
	  }
	};

	async function SetMaintenanceData()
	{
	  const res = await fetch(window.location.origin+"/SetmaintenanceData", {
	    method: 'POST',
	    body: ContentMaintenance
	   })

	  if (res.status == 200)
	  {
	  	console.log("set maintenance data OK\r\n");
	  }
	}   	


	function modalTrigger()
	{
	    defaultModal = true;

			if (sessionid) 
      {
      	const hexArray = sessionid.match(/.{1,2}/g); 
	      const byteValues = hexArray.map(hex => parseInt(hex, 16));
	      sessionBinary = new Uint8Array(byteValues);
      	if  (lan_data != "")
      	{
	        let LANString = JSON.stringify(lan_data, null, 0);
					const bytesArray = Array.from(LANString).map(char => char.charCodeAt(0));
	    		lanBinary = new Uint8Array(bytesArray);
	      	ContentLAN=new Uint8Array(lanBinary.length+sessionBinary.length);
	        ContentLAN.set(sessionBinary,0);
	        ContentLAN.set(lanBinary, sessionBinary.length);
	        SetLANData();
        }

        if (nat_data != "")
        {
	        let NATString = JSON.stringify(nat_data, null, 0);
					const bytesArray = Array.from(NATString).map(char => char.charCodeAt(0));
	    		natBinary = new Uint8Array(bytesArray);
	      	ContentNAT=new Uint8Array(natBinary.length+sessionBinary.length);
	        ContentNAT.set(sessionBinary,0);
	        ContentNAT.set(natBinary, sessionBinary.length);
	        SetNATData();
        }

        if (firewall_data != "")
        {
        	let FirewallString = JSON.stringify(firewall_data, null, 0);
					const bytesArray = Array.from(FirewallString).map(char => char.charCodeAt(0));
	    		firewallBinary = new Uint8Array(bytesArray);
	      	ContentFirewall=new Uint8Array(firewallBinary.length+sessionBinary.length);
	        ContentFirewall.set(sessionBinary,0);
	        ContentFirewall.set(firewallBinary, sessionBinary.length);
	        SetFirewallData();

        }

        if (static_route_data !="")
        {
          let StaticRString = JSON.stringify(static_route_data, null, 0);
					const bytesArray = Array.from(StaticRString).map(char => char.charCodeAt(0));
	    		staticRBinary = new Uint8Array(bytesArray);
	      	ContentStaticR=new Uint8Array(staticRBinary.length+sessionBinary.length);
	        ContentStaticR.set(sessionBinary,0);
	        ContentStaticR.set(staticRBinary, sessionBinary.length);
        	SetStaticRData();
        }

        if (maintenance_data != "")
        {
          let MaintenanceDataString = JSON.stringify(maintenance_data, null, 0);
					const bytesArray = Array.from(MaintenanceDataString).map(char => char.charCodeAt(0));
	    		MaintenanceBinary = new Uint8Array(bytesArray);
	      	ContentMaintenance=new Uint8Array(MaintenanceBinary.length+sessionBinary.length);
	        ContentMaintenance.set(sessionBinary,0);
	        ContentMaintenance.set(MaintenanceBinary, sessionBinary.length);
	        SetMaintenanceData();    	
        }
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


{#if NAT_loopback_changedValues.length !=0 || 
		NAT_virtualServer_changedValues.length !=0 ||
		NAT_virtualComputer_changedValues.length !=0 ||
		NAT_dmz_changedValues.length !=0 
		}
  <Li>NAT
 {#if NAT_loopback_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Loopback
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_loopback_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_virtualServer_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Virtual Server
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_virtualServer_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_virtualComputer_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Virtual Computer
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_virtualComputer_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_dmz_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	DMZ
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_dmz_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

  </Li>
{/if}


{#if Firewall_general_changedValues.length !=0 || 
		Firewall_ipfilter_changedValues.length !=0 ||
		Firewall_macfilter_changedValues.length !=0
		}
  <Li>Firewall
 {#if Firewall_general_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	General
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_general_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if Firewall_ipfilter_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	IP Filter
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_ipfilter_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if Firewall_macfilter_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	MAC Filter
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_macfilter_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}
  </Li>	
{/if}

{#if staticR_changedValues.length !=0}
  <Li>Static Route
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each staticR_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}

{#if maintenance_changedValues.length!=0}
  <Li>Maintenance
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each maintenance_changedValues as item}
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