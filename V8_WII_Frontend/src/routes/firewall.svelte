<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    firewallConfig,
    Firewall_General_ConfigChangedLog,
    Firewall_IPFilter_ConfigChangedLog,
    Firewall_MACFilter_ConfigChangedLog,
    ChangedFirewallConfig
  } from "./configG.js"


  let firewall_data="";
  let changed_firewall_data = {};
  let saved_changed_firewall_data ={};

  let general_changedValues = [];
  let ipfilter_changedValues = [];
  let macfilter_changedValues = [];
  let getdataAlready=0;
  let ipfilter_current_index;
  let macfilter_current_index;

  let new_ipfilter_index;
  let new_macfilter_index;


  let NewMacFilterItem=[0,""];

  let newformModal=false;
  let newformModal2=false;
  let formModal = false;
  let formModal2 = false;
  let getDataReady=0;    
  
  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });

  firewallConfig.subscribe(val => {
      firewall_data = val;
  });

  Firewall_General_ConfigChangedLog.subscribe(val => {
      general_changedValues = val;
  });

  Firewall_IPFilter_ConfigChangedLog.subscribe(val => {
      ipfilter_changedValues = val;
  });


  Firewall_MACFilter_ConfigChangedLog.subscribe(val => {
      macfilter_changedValues = val;
  });

  ChangedFirewallConfig.subscribe(val => {
      saved_changed_firewall_data = val;
  });


  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
              let changedstr="Add "+addedCount+" item(s) to "+ key;
              if (type == 2)
              {
                macfilter_changedValues=[...macfilter_changedValues, changedstr];
              }
              else if (type == 1)
              {
                ipfilter_changedValues=[...ipfilter_changedValues, changedstr];
              }
              else if (type == 0)
              {
                general_changedValues=[...general_changedValues, changedstr]; 
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 2)
              {
                macfilter_changedValues=[...macfilter_changedValues, changedstr];
              }
              else if (type == 1)
              {
                ipfilter_changedValues=[...ipfilter_changedValues, changedstr];
              }
              else if (type == 0)
              {
                general_changedValues=[...general_changedValues, changedstr]; 
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0);
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 2)
          {
            macfilter_changedValues=[...macfilter_changedValues, changedstr];
          }
          else if (type == 1)
          {
            ipfilter_changedValues=[...ipfilter_changedValues, changedstr];
          }
          else if (type == 0)
          {
            general_changedValues=[...general_changedValues, changedstr]; 
          }

        }
      }
  }

  function FilterCheck()
  {
    if (changed_firewall_data.config.networking_firewall_general.enable)
    {
      changed_firewall_data.config.networking_firewall_general.enable=0;
    }
    else
    {
      changed_firewall_data.config.networking_firewall_general.enable=1;
    }
  }

  function saveGeneral()
  {
    console.log("save general");

    if (general_changedValues.length!=0)
    {
      general_changedValues=[];
    }
    
    compareObjects(changed_firewall_data.config.networking_firewall_general, firewall_data.config.networking_firewall_general,0,0,0);
    Firewall_General_ConfigChangedLog.set(general_changedValues);
    ChangedFirewallConfig.set(changed_firewall_data);
    
    console.log(general_changedValues);
  }

  let newIPF_Item=[
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }
      ,
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }
      ,
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }
      ,
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }
      ,
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }
      ,
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      },
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      },
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      },
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      },
      {
        "enable": 0,
        "fromIf": 0,
        "toIf": 0,
        "srcIp": "",
        "dstIp": "",
        "protocol": "TCP",
        "dstPort": 0,
        "dstPortRange": {
          "start": 22222, 
          "end": 22225
        }
      }                      
  ];


  function NewIpFilter_Item_Invoker(index)
  {
      newIPF_Item[index].enable=0;
      newIPF_Item[index].fromIf=0;
      newIPF_Item[index].toIf=0;
      newIPF_Item[index].srcIp=0;
      newIPF_Item[index].dstIp=0;
      newIPF_Item[index].protocol=0;
      newIPF_Item[index].dstPort=0;
      newIPF_Item[index].dstPortRange.start=0;
      newIPF_Item[index].dstPortRange.end=0;

      new_ipfilter_index=index;
      newformModal = true;
  }

  let newMAF_Item=[
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    }
  ];

  function NewMAF_Item_Invoker(index)
  {
    newMAF_Item[index].enable=0;
    newMAF_Item[index].macAddr="";

    new_macfilter_index=index;
    newformModal2 = true
  }

  function saveIpFilter()
  {
    console.log("save IpFilter");

    if (ipfilter_changedValues.length!=0)
    {
      ipfilter_changedValues=[];
    }
    
    compareObjects(changed_firewall_data.config.networking_firewall_ipFilter, firewall_data.config.networking_firewall_ipFilter,1,0,0);
    Firewall_IPFilter_ConfigChangedLog.set(ipfilter_changedValues);
    ChangedFirewallConfig.set(changed_firewall_data);
    
    console.log(ipfilter_changedValues);
  }


  function saveMacFilter()
  {
    console.log("save MacFilter");

    if (macfilter_changedValues.length!=0)
    {
      macfilter_changedValues=[];
    }
    
    compareObjects(changed_firewall_data.config.networking_firewall_macFilter, firewall_data.config.networking_firewall_macFilter,2,0,0);
    Firewall_MACFilter_ConfigChangedLog.set(macfilter_changedValues);
    ChangedFirewallConfig.set(changed_firewall_data);
    
    console.log(macfilter_changedValues);
  }

  function NewIPF_Enable(index)
  {
    if (newIPF_Item[index].enable)
    {
      newIPF_Item[index].enable=0;
    }
    else
    {
      newIPF_Item[index].enable=1;
    }
  }


  function NewMAF_Enable(index)
  {
    if (newMAF_Item[index].enable)
    {
      newMAF_Item[index].enable=0;
    }
    else
    {
      newMAF_Item[index].enable=1;
    }
  }



  function AddIPF(index)
  {
    newformModal = false;

    changed_firewall_data.config.networking_firewall_ipFilter.list=[...changed_firewall_data.config.networking_firewall_ipFilter.list,newIPF_Item[index]];
  }


  function AddMAF(index)
  {
    newformModal2 = false;

    changed_firewall_data.config.networking_firewall_macFilter.list=[...changed_firewall_data.config.networking_firewall_macFilter.list,newMAF_Item[index]];
  }


  function IPF_Item_enableCheck(index)
  {
    if (changed_firewall_data.config.networking_firewall_ipFilter.list[index].enable)
    {
      changed_firewall_data.config.networking_firewall_ipFilter.list[index].enable=0;
    }
    else
    {
      changed_firewall_data.config.networking_firewall_ipFilter.list[index].enable=1;
    }
  }


  function MAF_Item_enableCheck(index)
  {
    if (changed_firewall_data.config.networking_firewall_macFilter.list[index].enable)
    {
      changed_firewall_data.config.networking_firewall_macFilter.list[index].enable=0;
    }
    else
    {
      changed_firewall_data.config.networking_firewall_macFilter.list[index].enable=1;
    }
  }


  function NoModifyIPF(index)
  {
    formModal = false;
    changed_firewall_data.config.networking_firewall_ipFilter.list[index].enable= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].enable;
    
    changed_firewall_data.config.networking_firewall_ipFilter.list[index].fromIf= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].fromIf;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].toIf= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].toIf;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].srcIp= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].srcIp;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstIp= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstIp;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].protocol= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].protocol;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPort= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPort;

    changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPortRange.start= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPortRange.start;


    changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPortRange.end= saved_changed_firewall_data.config.networking_firewall_ipFilter.list[index].dstPortRange.end;
  }

  function NoModifyMAF(index)
  {
    formModal2 = false;
    changed_firewall_data.config.networking_firewall_macFilter.list[index].enable= saved_changed_firewall_data.config.networking_firewall_macFilter.list[index].enable;
    
    changed_firewall_data.config.networking_firewall_macFilter.list[index].macAddr= saved_changed_firewall_data.config.networking_firewall_macFilter.list[index].macAddr;   
      
  }

  function ModifyIPF(index)
  {
    formModal = false;
  }

  function ModifyMAF(index)
  {
    formModal2 = false;
  }


  function modalTrigger(index){
    formModal = true;
    ipfilter_current_index=index;
  }


  function modalTrigger2(index){
    formModal2 = true;
    macfilter_current_index=index;
  }


   async function getFirewallData () {
    const res = await fetch(window.location.origin+"/getFirewalldata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      firewall_data =await res.json();
      console.log(firewall_data);
      firewallConfig.set(firewall_data);

      changed_firewall_data = JSON.parse(JSON.stringify(firewall_data));
      saved_changed_firewall_data= JSON.parse(JSON.stringify(firewall_data));
      ChangedFirewallConfig.set(saved_changed_firewall_data);
      getDataReady=1;
    
    }
  }


  onMount(() => {

    console.log("firewall sessionid: ");
    console.log(sessionid);


    if (sessionid && firewall_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getFirewallData();
    }
    else if (sessionid && firewall_data != "")
    {
      getDataReady=1;

      if (general_changedValues.length==0)
      {
          changed_firewall_data=JSON.parse(JSON.stringify(saved_changed_firewall_data));
          changed_firewall_data.config.networking_firewall_general=JSON.parse(JSON.stringify(firewall_data.config.networking_firewall_general)); 
      }
      
      if (ipfilter_changedValues.length==0)
      {
          changed_firewall_data=JSON.parse(JSON.stringify(saved_changed_firewall_data));
          changed_firewall_data.config.networking_firewall_ipFilter=JSON.parse(JSON.stringify(firewall_data.config.networking_firewall_ipFilter)); 
      }
      

      if (macfilter_changedValues.length==0)
      {
          changed_firewall_data=JSON.parse(JSON.stringify(saved_changed_firewall_data));
          changed_firewall_data.config.networking_firewall_macFilter=JSON.parse(JSON.stringify(firewall_data.config.networking_firewall_macFilter)); 
      }

    }

  });

</script>


<Tabs style="underline">
  <TabItem open title="General">
<table>
  <tr>
<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_firewall_data.config.networking_firewall_general.enable} on:click={FilterCheck}>
{/if}
  Enable Filter
</label>
</tr>

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveGeneral}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
  </TabItem>

  <TabItem title="IP Filter">
<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">IP Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
    {#if getDataReady == 1}
      <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.type} value={0} >Black List</Radio>
      <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.type} value={1} >White List</Radio>
    {/if}
</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>From Interface</TableHeadCell>
    <TableHeadCell>To Interface</TableHeadCell>
    <TableHeadCell>Source IP</TableHeadCell>
    <TableHeadCell>Destination IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell class="w-22">Destination Port</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_firewall_data.config.networking_firewall_ipFilter.list as IPfilter, index}

    <TableBodyRow>

      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableHeadCell class="!p-4">
    </TableHeadCell>


          <TableBodyCell class="w-10">{IPfilter.enable}</TableBodyCell>
          <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if IPfilter.fromIf == 0}
          <TableBodyCell class="w-10">Any</TableBodyCell>
{:else if IPfilter.fromIf==1}
        <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if IPfilter.fromIf==2}
        <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if IPfilter.fromIf==3}
        <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>
{/if}

{#if IPfilter.toIf == 0}
          <TableBodyCell class="w-10">Any</TableBodyCell>
{:else if IPfilter.toIf==1}
        <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if IPfilter.toIf==2}
        <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if IPfilter.toIf==3}
        <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>
{/if}
        <TableBodyCell class="w-10">{IPfilter.srcIp}</TableBodyCell>
        <TableBodyCell class="w-10">{IPfilter.dstIp}</TableBodyCell>

       <TableBodyCell class="w-10">{IPfilter.protocol}</TableBodyCell>
{#if IPfilter.dstPort==0}
        <TableBodyCell class="w-10">{IPfilter.dstPortRange.start}</TableBodyCell>
{:else if IPfilter.dstPort==1}

        <TableBodyCell class="w-10">{IPfilter.dstPortRange.start}-{IPfilter.dstPortRange.end}</TableBodyCell>
{/if}
        </TableBodyRow>
{/each}
{/if}

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
{#if getDataReady == 1}
{#if changed_firewall_data.config.networking_firewall_ipFilter.list.length < 10}    
<button on:click={() => NewIpFilter_Item_Invoker(changed_firewall_data.config.networking_firewall_ipFilter.list.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if} 
{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-22"></TableBodyCell>
    </TableBodyRow>



    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveIpFilter}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={newformModal} size="lg" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={!!newIPF_Item[new_ipfilter_index].enable} on:click={NewIPF_Enable(new_ipfilter_index)}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">From Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newIPF_Item[new_ipfilter_index].fromIf} value={0} >Any</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].fromIf} value={1} >LAN</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].fromIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].fromIf} value={3} >Cellular WAN-1</Radio>

</div></td>
</tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">To Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newIPF_Item[new_ipfilter_index].toIf} value={0} >Any</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].toIf} value={1} >LAN</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].toIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].toIf} value={3} >Cellular WAN-1</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newIPF_Item[new_ipfilter_index].srcIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newIPF_Item[new_ipfilter_index].dstIp}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newIPF_Item[new_ipfilter_index].protocol} value='Any' >Any</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={newIPF_Item[new_ipfilter_index].protocol} value='UDP' >UDP</Radio>
</div></td>
</tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newIPF_Item[new_ipfilter_index].dstPort} value={0} >Single Port</Radio><input type="number" bind:value={newIPF_Item[new_ipfilter_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={newIPF_Item[new_ipfilter_index].dstPort} value={1} >Port Range</Radio><input type="number" bind:value={newIPF_Item[new_ipfilter_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newIPF_Item[new_ipfilter_index].dstPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddIPF(new_ipfilter_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={formModal} size="lg" class="w-full" permanent={true}>
  <form action="#">


<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox checked={!!changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].enable} on:click={IPF_Item_enableCheck(ipfilter_current_index)}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyIPF(ipfilter_current_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">From Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].fromIf} value={0} >Any</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].fromIf} value={1} >LAN</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].fromIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].fromIf} value={3} >Cellular WAN-1</Radio>
{/if}
</div></td>
</tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">To Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].toIf} value={0} >Any</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].toIf} value={1} >LAN</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].toIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].toIf} value={3} >Cellular WAN-1</Radio>
{/if}
</div></td>
</tr>

<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].srcIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}
</tr>

<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstIp}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}
  </tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].protocol} value='Any' >Any</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].protocol} value='UDP' >UDP</Radio>
{/if}
</div></td>
</tr>





 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstPort} value={0} >Single Port</Radio><input type="number" bind:value={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstPort} value={1} >Port Range</Radio><input type="number" bind:value={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_firewall_data.config.networking_firewall_ipFilter.list[ipfilter_current_index].dstPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyIPF(ipfilter_current_index)}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>
  </TabItem>


  <TabItem title="MAC Filter">

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_firewall_data.config.networking_firewall_macFilter.type} value={0} >Black List</Radio>
  <Radio bind:group={changed_firewall_data.config.networking_firewall_macFilter.type} value={1} >White List</Radio>
{/if}
</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-36">MAC Address</TableHeadCell>
</TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_firewall_data.config.networking_firewall_macFilter.list as MACfilter, index}

    <TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger2(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>

            <TableBodyCell class="!p-4">

            </TableBodyCell>

      <TableBodyCell class="w-10">{MACfilter.enable}</TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-36">{MACfilter.macAddr}</TableBodyCell>
    </TableBodyRow>

{/each}
{/if}

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
{#if getDataReady == 1}
{#if changed_firewall_data.config.networking_firewall_macFilter.list.length < 10}
<button on:click={() => NewMAF_Item_Invoker(changed_firewall_data.config.networking_firewall_macFilter.list.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}
{/if}

 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
    </TableBodyRow>

    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
            <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveMacFilter}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



<Modal bind:open={newformModal2} size="sm" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={!!newMAF_Item[new_macfilter_index].enable} on:click={NewMAF_Enable(new_macfilter_index)}>
  Enable
</label>

<p class="mt-10"></p>


<table>
<tr>
      <td class="pl-4"><p class="pt-4 text-lg font-light text-right">MAC Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newMAF_Item[new_macfilter_index].macAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddMAF(new_macfilter_index)}>Add</Button></td>


    </tr>
</table>

    </form>
</Modal>



<Modal bind:open={formModal2} size="sm" class="w-full" permanent={true}>
  <form action="#">


<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox checked={!!changed_firewall_data.config.networking_firewall_macFilter.list[macfilter_current_index].enable} on:click={MAF_Item_enableCheck(macfilter_current_index)}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyMAF(macfilter_current_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>


<table>
<tr>
      <td class="pl-4"><p class="pt-4 text-lg font-light text-right">MAC Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_firewall_data.config.networking_firewall_macFilter.list[macfilter_current_index].macAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyMAF(macfilter_current_index)}>Modify</Button></td>


    </tr>
</table>

    </form>
</Modal>




  </TableBody>
</Table>
  </TabItem>

</Tabs>
