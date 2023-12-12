<script>
	import { List, Li, Heading,Button, Modal, Spinner} from 'flowbite-svelte';
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
  		MaintenanceConfigChangedLog,
  		OperationConfigChangedLog,
  		ChangedOperationConfig,
  		DockerConfigChangedLog,
      ChangedDockerConfig,
      Dreams_Serial_ConfigChangedLog,
      Dreams_Modbus_S0_ConfigChangedLog,
      Dreams_Modbus_S1_ConfigChangedLog,
      Dreams_Modbus_Option_ConfigChangedLog,
      Dreams_DNP3_ConfigChangedLog,
      Dreams_Restful_ConfigChangedLog,
      Dreams_General_ConfigChangedLog,
      ChangedDreamsConfig,
      WAN_CWAN1_BASIC_ConfigChangedLog,
    	WAN_CWAN1_Advanced_ConfigChangedLog,
    	WAN_CWAN1_SimPolicy_ConfigChangedLog,
    	WAN_CWAN1_GLink_ConfigChangedLog,
    	WAN_EWAN1_Basic_ConfigChangedLog,
    	WAN_EWAN1_EWLAP_ConfigChangedLog,
    	WAN_RedundancyPolicy_ConfigChangedLog,
    	WAN_FareSavingPolicy_ConfigChangedLog,
    	ChangedWANConfig 
			} from "./configG.js"
	let color="text-blue-600 dark:text-gray-400";
	let defaultModal = false;
  let uploadconfigIsValid =1;
  let CheckedConfigInvalid=0;

  let lan_data="";
  let nat_data="";
  let firewall_data="";
  let static_route_data="";
  let maintenance_data="";
  let operation_data="";
  let docker_data="";
  let dreams_data="";
  let wan_data="";

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

  let ContentOperation;
  let OperationBinary=null;
  let operation_changedValues = [];


  let ContentDocker;
  let DockerBinary=null;
  let docker_changedValues = [];


  let ContentDreams;
  let DreamsBinary=null;
  let serial_changedValues = [];
  let modbus_s0_changedValues = [];
  let modbus_s1_changedValues = [];
  let modbus_option_changedValues = [];
  let dnp3_changedValues = [];
  let restful_changedValues = [];
  let dreams_general_changedValues=[];

  let ContentWan;
  let WanBinary=null;
  let cwan1_basic_changedValues = [];
  let cwan1_advanced_changedValues = [];
  let cwan1_simpolicy_changedValues = [];
  let cwan1_glink_changedValues = [];
  let ewan1_basic_changedValues = [];
  let ewan1_ewlap_changedValues = [];
  let redundancy_policy_changedValues = [];
  let faresaving_policy_changedValues = [];  
  let SetCount=0;
  let SetCountOK=0;



  function closeModal()
  {
    defaultModal = false;
  }


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

  ChangedOperationConfig.subscribe(val => {
      operation_data = val;
  });

  ChangedDockerConfig.subscribe(val => {
      docker_data = val;
  });

  ChangedDreamsConfig.subscribe(val => {
      dreams_data = val;
  });

  ChangedWANConfig.subscribe(val => {
      wan_data = val;
  }); 

  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe(val => {
      cwan1_basic_changedValues = val;
  });

  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe(val => {
      cwan1_advanced_changedValues = val;
  });

  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe(val => {
      cwan1_simpolicy_changedValues = val;
  });

  WAN_CWAN1_GLink_ConfigChangedLog.subscribe(val => {
      cwan1_glink_changedValues = val;
  });

  WAN_EWAN1_Basic_ConfigChangedLog.subscribe(val => {
      ewan1_basic_changedValues = val;
  });

  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe(val => {
      ewan1_ewlap_changedValues = val;
  });

  WAN_RedundancyPolicy_ConfigChangedLog.subscribe(val => {
      redundancy_policy_changedValues = val;
  });

  WAN_FareSavingPolicy_ConfigChangedLog.subscribe(val => {
      faresaving_policy_changedValues = val;
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

  OperationConfigChangedLog.subscribe(val => {
      operation_changedValues = val;
  });


  DockerConfigChangedLog.subscribe(val => {
      docker_changedValues = val;
  });


  Dreams_Serial_ConfigChangedLog.subscribe(val => {
      serial_changedValues = val;
  });

  Dreams_Modbus_S0_ConfigChangedLog.subscribe(val => {
      modbus_s0_changedValues = val;
  });

  Dreams_Modbus_S1_ConfigChangedLog.subscribe(val => {
      modbus_s1_changedValues = val;
  });

  Dreams_Modbus_Option_ConfigChangedLog.subscribe(val => {
      modbus_option_changedValues = val;
  });

  Dreams_DNP3_ConfigChangedLog.subscribe(val => {
      dnp3_changedValues = val;
  });

  Dreams_Restful_ConfigChangedLog.subscribe(val => {
      restful_changedValues = val;
  });

  Dreams_General_ConfigChangedLog.subscribe(val => {
      dreams_general_changedValues = val;
  });

 	async function SetThenPostReboot () {
    
    const res = await fetch(window.location.origin+"/PostReboot", {
        method: 'POST',
        body: sessionBinary
    })

    	if (res.status == 200)
    	{
        console.log("reboot command sent\r\n");
    	}
   }

	async function SetLANData() {
	    const res = await fetch(window.location.origin+"/SetLanData", {
	      method: 'POST',
	      body: ContentLAN
	    })

	  if (res.status == 200)
	  {
	  	console.log("set lan data OK\r\n");
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
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
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
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
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
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
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
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
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
	  }
	}  

	async function SetOperationData()
	{
	  const res = await fetch(window.location.origin+"/SetOperationdata", {
	    method: 'POST',
	    body: ContentOperation
	   })

	  if (res.status == 200)
	  {
	  	console.log("set operation data OK\r\n");
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
	  }
	} 

	async function SetDockerData()
	{
	  const res = await fetch(window.location.origin+"/SetDockerdata", {
	    method: 'POST',
	    body: ContentDocker
	   })

	  if (res.status == 200)
	  {
	  	console.log("set docker data OK\r\n");
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
	  }
	} 


	async function SetWanData()
	{
	  const res = await fetch(window.location.origin+"/SetWandata", {
	    method: 'POST',
	    body: ContentWan
	   })

	  if (res.status == 200)
	  {
	  	console.log("set wan data OK\r\n");
	  	SetCountOK++;
	  	if (SetCountOK == SetCount)
	  	{
	  		SetThenPostReboot();
	  	}
	  }
	} 

	function CalculateTotalSetCount()
	{
	  if  (lan_data != "" && LANchangedValues.length!=0)
    {
    	SetCount++;
    }

    if (nat_data != "" && (NAT_loopback_changedValues.length !=0 || 
															NAT_virtualServer_changedValues.length !=0 ||
															NAT_virtualComputer_changedValues.length !=0 ||
															NAT_dmz_changedValues.length !=0))
    {
    	SetCount++;    
    }


    if (firewall_data != "" && (Firewall_general_changedValues.length !=0 || 
																		Firewall_ipfilter_changedValues.length !=0 ||
																		Firewall_macfilter_changedValues.length !=0))
   	{
    	SetCount++; 
    }

    if (static_route_data !="" && staticR_changedValues.length !=0)
    {
    	SetCount++; 
    }
    

    if (maintenance_data != "" && maintenance_changedValues.length!=0)
    {
    	SetCount++;     
    }


    if (operation_data != "" && operation_changedValues.length!=0)
    {
    	SetCount++; 
    }


    if (docker_data != "" && docker_changedValues.length!=0)
    {
    	SetCount++;     
    }


    if (wan_data != "" && ( cwan1_basic_changedValues !=0 ||
  															cwan1_advanced_changedValues != 0 ||
  															cwan1_simpolicy_changedValues != 0 ||
  															cwan1_glink_changedValues != 0 ||
  															ewan1_basic_changedValues != 0 ||
  															ewan1_ewlap_changedValues != 0 ||
  															redundancy_policy_changedValues != 0 ||
  															faresaving_policy_changedValues != 0))
  	{
  	  SetCount++; 
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
	      CalculateTotalSetCount();
      	if  (lan_data != "" && LANchangedValues.length!=0)
      	{
	        let LANString = JSON.stringify(lan_data, null, 0);
					const bytesArray = Array.from(LANString).map(char => char.charCodeAt(0));
	    		lanBinary = new Uint8Array(bytesArray);
	      	ContentLAN=new Uint8Array(lanBinary.length+sessionBinary.length);
	        ContentLAN.set(sessionBinary,0);
	        ContentLAN.set(lanBinary, sessionBinary.length);
	        SetLANData();
        }

        if (nat_data != "" && (NAT_loopback_changedValues.length !=0 || 
															NAT_virtualServer_changedValues.length !=0 ||
															NAT_virtualComputer_changedValues.length !=0 ||
															NAT_dmz_changedValues.length !=0))
        {
	        let NATString = JSON.stringify(nat_data, null, 0);
					const bytesArray = Array.from(NATString).map(char => char.charCodeAt(0));
	    		natBinary = new Uint8Array(bytesArray);
	      	ContentNAT=new Uint8Array(natBinary.length+sessionBinary.length);
	        ContentNAT.set(sessionBinary,0);
	        ContentNAT.set(natBinary, sessionBinary.length);
	        SetNATData();
        }

        if (firewall_data != "" && (Firewall_general_changedValues.length !=0 || 
																		Firewall_ipfilter_changedValues.length !=0 ||
																		Firewall_macfilter_changedValues.length !=0))
        {
        	let FirewallString = JSON.stringify(firewall_data, null, 0);
					const bytesArray = Array.from(FirewallString).map(char => char.charCodeAt(0));
	    		firewallBinary = new Uint8Array(bytesArray);
	      	ContentFirewall=new Uint8Array(firewallBinary.length+sessionBinary.length);
	        ContentFirewall.set(sessionBinary,0);
	        ContentFirewall.set(firewallBinary, sessionBinary.length);
	        SetFirewallData();
        }

        if (static_route_data !="" && staticR_changedValues.length !=0)
        {
          let StaticRString = JSON.stringify(static_route_data, null, 0);
					const bytesArray = Array.from(StaticRString).map(char => char.charCodeAt(0));
	    		staticRBinary = new Uint8Array(bytesArray);
	      	ContentStaticR=new Uint8Array(staticRBinary.length+sessionBinary.length);
	        ContentStaticR.set(sessionBinary,0);
	        ContentStaticR.set(staticRBinary, sessionBinary.length);
        	SetStaticRData();
        }

        if (maintenance_data != "" && maintenance_changedValues.length!=0)
        {
          let MaintenanceDataString = JSON.stringify(maintenance_data, null, 0);
					const bytesArray = Array.from(MaintenanceDataString).map(char => char.charCodeAt(0));
	    		MaintenanceBinary = new Uint8Array(bytesArray);
	      	ContentMaintenance=new Uint8Array(MaintenanceBinary.length+sessionBinary.length);
	        ContentMaintenance.set(sessionBinary,0);
	        ContentMaintenance.set(MaintenanceBinary, sessionBinary.length);
	        SetMaintenanceData();    	
        }


        if (operation_data != "" && operation_changedValues.length!=0)
        {
          let OperationString = JSON.stringify(operation_data, null, 0);
					const bytesArray = Array.from(OperationString).map(char => char.charCodeAt(0));
	    		OperationBinary = new Uint8Array(bytesArray);
	      	ContentOperation=new Uint8Array(OperationBinary.length+sessionBinary.length);
	        ContentOperation.set(sessionBinary,0);
	        ContentOperation.set(OperationBinary, sessionBinary.length);
	        SetOperationData();

        }

        if (docker_data != "" && docker_changedValues.length!=0)
        {
          let DockerString = JSON.stringify(docker_data, null, 0);
					const bytesArray = Array.from(DockerString).map(char => char.charCodeAt(0));
	    		DockerBinary = new Uint8Array(bytesArray);
	      	ContentDocker=new Uint8Array(DockerBinary.length+sessionBinary.length);
	        ContentDocker.set(sessionBinary,0);
	        ContentDocker.set(DockerBinary, sessionBinary.length);
	        SetDockerData();

        }


        if (wan_data != "" && ( cwan1_basic_changedValues !=0 ||
  															cwan1_advanced_changedValues != 0 ||
  															cwan1_simpolicy_changedValues != 0 ||
  															cwan1_glink_changedValues != 0 ||
  															ewan1_basic_changedValues != 0 ||
  															ewan1_ewlap_changedValues != 0 ||
  															redundancy_policy_changedValues != 0 ||
  															faresaving_policy_changedValues != 0))
  			{
          let WanString = JSON.stringify(wan_data, null, 0);
					const bytesArray = Array.from(WanString).map(char => char.charCodeAt(0));
	    		WanBinary = new Uint8Array(bytesArray);
	      	ContentWan=new Uint8Array(WanBinary.length+sessionBinary.length);
	        ContentWan.set(sessionBinary,0);
	        ContentWan.set(WanBinary, sessionBinary.length);
  				SetWanData();
  			}

      }

	};


</script>


<div class="text-center">
<Heading tag="h2" customSize="text-3xl font-extrabold" class="text-center mb-2 font-semibold text-gray-900 dark:text-white">The following configs are changed:</Heading>
<List tag="ol" {color} class="text-2xl space-y-1" style="display: inline-block;text-align: left;">

{#if 	cwan1_basic_changedValues !=0 ||
  		cwan1_advanced_changedValues != 0 ||
  		cwan1_simpolicy_changedValues != 0 ||
  		cwan1_glink_changedValues != 0 ||
  		ewan1_basic_changedValues != 0 ||
  		ewan1_ewlap_changedValues != 0 ||
  		redundancy_policy_changedValues != 0 ||
  		faresaving_policy_changedValues != 0
  		}
  <Li>WAN
 {#if cwan1_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 Basic Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_basic_changedValues.length as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_advanced_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 Advanced Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_advanced_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_simpolicy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 SIM Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_simpolicy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_glink_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 LTE Guarantie Link
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_glink_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}


	{#if ewan1_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Ethernet WAN Basic Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each ewan1_basic_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}


	{#if ewan1_ewlap_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Ethernet WAN EWLAP
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each ewan1_ewlap_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

	{#if redundancy_policy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	WAN Redundancy Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each redundancy_policy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

	{#if faresaving_policy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Fare Saving Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each faresaving_policy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

  </Li>


{/if}


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

{#if operation_changedValues.length!=0}
  <Li>Operation
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each operation_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}

{#if docker_changedValues.length!=0}
  <Li>Docker Engine
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each docker_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}



{#if dreams_general_changedValues.length !=0 || 
		serial_changedValues.length !=0 ||
		modbus_s0_changedValues.length != 0 ||
		modbus_s1_changedValues.length != 0 ||
		modbus_option_changedValues.length != 0 ||
		dnp3_changedValues.length != 0 ||
		restful_changedValues.length != 0 
		}
  <Li>DREAMS
 {#if dreams_general_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	General
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each dreams_general_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if serial_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Serial
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each serial_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if modbus_s0_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Modbus Item (Serial 0)
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each modbus_s0_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if modbus_s1_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Modbus Item (Serial 1)
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each modbus_s1_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if modbus_option_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Modbus Item (Option)
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each modbus_option_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if dnp3_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	DNP3
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each dnp3_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if restful_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Restful
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each restful_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

  </Li>	
{/if}





</List>


</div>
<div class="pt-10 pl-10 text-center">

{#if 		LANchangedValues.length != 0 ||
  			NAT_loopback_changedValues.length != 0 ||
  			NAT_virtualServer_changedValues.length !=0 ||
  			NAT_virtualComputer_changedValues.length !=0 ||
  			NAT_dmz_changedValues.length !=0 ||
  			Firewall_general_changedValues.length !=0 ||
  			Firewall_ipfilter_changedValues.length !=0 ||
  			Firewall_macfilter_changedValues.length !=0 ||
  			staticR_changedValues.length != 0 ||
  			maintenance_changedValues.length != 0 ||
  			operation_changedValues.length != 0 ||
  			docker_changedValues.length != 0 ||
  			serial_changedValues.length != 0 ||
  			modbus_s0_changedValues.length != 0 ||
  			modbus_s1_changedValues.length != 0 ||
  			modbus_option_changedValues.length != 0 ||
  			dnp3_changedValues.length != 0 ||
  			restful_changedValues.length != 0 ||
  			dreams_general_changedValues.length != 0 ||
  			cwan1_basic_changedValues !=0 ||
  			cwan1_advanced_changedValues != 0 ||
  			cwan1_simpolicy_changedValues != 0 ||
  			cwan1_glink_changedValues != 0 ||
  			ewan1_basic_changedValues != 0 ||
  			ewan1_ewlap_changedValues != 0 ||
  			redundancy_policy_changedValues != 0 ||
  			faresaving_policy_changedValues != 0

		}

<Button on:click={() => modalTrigger()}>Apply and Reboot</Button>
{/if}
</div>

<Modal bind:open={defaultModal} size="md" class="w-full" permanent={true}>
{#if CheckedConfigInvalid == 1}
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={closeModal}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
{/if}

<table>
{#if uploadconfigIsValid == 0}
<tr>
{#if CheckedConfigInvalid == 0}
<td><Spinner size={16} /></td>
<td> <p class="pl-5" style="color:red; font-size:18px">Verifying configuration now ....
</p></td>
{:else if CheckedConfigInvalid == 1}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td> <p class="pl-5" style="color:red; font-size:18px">It's invalid configuration, please upload valid configuration.
</p></td>
{/if}
</tr>
{:else if uploadconfigIsValid == 1}
<tr><td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">It's valid configuration.
</td>
</tr>
<tr>
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Applying configuration and restart ....
</p>
</td>
</tr>
{/if}

</table>
</Modal>