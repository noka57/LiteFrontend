<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { staticrouteConfig,
          StaticRouteConfigChangedLog,
          ChangedStaticRouteConfig } from "./configG.js";


  let formModal = false;
  let NewformModal = false;



  let static_route_data="";
  let changed_staticR_data = {};
  let saved_changed_staticR_data ={};

  let staticR_changedValues = [];
  let static_route_current_index;
  let new_static_route_index;

  let getDataReady=0;


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });


  staticrouteConfig.subscribe(val => {
      static_route_data = val;
  });


  StaticRouteConfigChangedLog.subscribe(val => {
      staticR_changedValues = val;
  });

  ChangedStaticRouteConfig.subscribe(val => {
      saved_changed_staticR_data = val;
  });


  let BackupStaticR_Item={
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
  };


  function modalTriggerStaticR(index){
    formModal = true;
    static_route_current_index=index;
    BackupStaticR_Item.enable=changed_staticR_data.config.networking_staticRoute.list[index].enable;
    BackupStaticR_Item.dstIp=changed_staticR_data.config.networking_staticRoute.list[index].dstIp;
    BackupStaticR_Item.netmask=changed_staticR_data.config.networking_staticRoute.list[index].netmask;
    BackupStaticR_Item.gateway=changed_staticR_data.config.networking_staticRoute.list[index].gateway;
    BackupStaticR_Item.interface=changed_staticR_data.config.networking_staticRoute.list[index].interface;
    BackupStaticR_Item.metric=changed_staticR_data.config.networking_staticRoute.list[index].metric; 
  }


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
              staticR_changedValues=[...staticR_changedValues, changedstr];
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              staticR_changedValues=[...staticR_changedValues, changedstr];
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
          
          staticR_changedValues=[...staticR_changedValues, changedstr];

        }
      }
  }


  function StaticRouteCheck()
  {
    if (changed_staticR_data.config.networking_staticRoute.enable)
    {
      changed_staticR_data.config.networking_staticRoute.enable=0;
    }
    else
    {
      changed_staticR_data.config.networking_staticRoute.enable=1;
    }
  }

 let newStaticR_Item=[
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      },
      {
        "enable": 0,
        "dstIp": "",
        "netmask": "",
        "gateway": "",
        "interface": 0,
        "metric": 20
      }
    ];


  function NewStaticR_Item_Invoker(index)
  {
    newStaticR_Item[index].enable=0;
    newStaticR_Item[index].dstIp="";
    newStaticR_Item[index].netmask="";
    newStaticR_Item[index].gateway="";
    newStaticR_Item[index].interface=0;
    newStaticR_Item[index].metric=0;     

    new_static_route_index=index;
    NewformModal = true;
  }

  function saveStaticR()
  {
    console.log("save StaticR");

    if (staticR_changedValues.length!=0)
    {
      staticR_changedValues=[];
    }

    
    
    compareObjects(changed_staticR_data.config.networking_staticRoute, static_route_data.config.networking_staticRoute,0,0,0);
    StaticRouteConfigChangedLog.set(staticR_changedValues);

    saved_changed_staticR_data.config.networking_staticRoute=JSON.parse(JSON.stringify(changed_staticR_data.config.networking_staticRoute));
    ChangedStaticRouteConfig.set(saved_changed_staticR_data);
    
    console.log(staticR_changedValues);
  }


  function StaticR_Item_enableCheck(index)
  {
    if (changed_staticR_data.config.networking_staticRoute.list[index].enable)
    {
      changed_staticR_data.config.networking_staticRoute.list[index].enable=0;
    }
    else
    {
      changed_staticR_data.config.networking_staticRoute.list[index].enable=1;
    }
  }

  function NoModifyStaticR(index)
  {
    formModal = false;

    changed_staticR_data.config.networking_staticRoute.list[index].enable = BackupStaticR_Item.enable;
    
    changed_staticR_data.config.networking_staticRoute.list[index].dstIp = BackupStaticR_Item.dstIp;
    
    changed_staticR_data.config.networking_staticRoute.list[index].netmask = BackupStaticR_Item.netmask;

    changed_staticR_data.config.networking_staticRoute.list[index].gateway = BackupStaticR_Item.gateway;

    changed_staticR_data.config.networking_staticRoute.list[index].interface = BackupStaticR_Item.interface;

    changed_staticR_data.config.networking_staticRoute.list[index].metric = BackupStaticR_Item.metric;

  }

  function ModifyStaticR(index)
  {
    formModal = false;
  }


  function NewStaticR_enable(index)
  {
    if (newStaticR_Item[index].enable)
    {
      newStaticR_Item[index].enable=0;
    }
    else
    {
      newStaticR_Item[index].enable=1;
    }
  }


  function AddStaticRoute(index)
  {
    NewformModal = false;

    changed_staticR_data.config.networking_staticRoute.list=[...changed_staticR_data.config.networking_staticRoute.list,newStaticR_Item[index]];
  }


   async function getStaticRouteData () {
    const res = await fetch(window.location.origin+"/getStaticRouteData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      static_route_data =await res.json();
      console.log(static_route_data);
      staticrouteConfig.set(static_route_data);

      changed_staticR_data = JSON.parse(JSON.stringify(static_route_data));
      saved_changed_staticR_data= JSON.parse(JSON.stringify(static_route_data));
      ChangedStaticRouteConfig.set(saved_changed_staticR_data);
      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("static route sessionid: ");
    console.log(sessionid);


    if (sessionid && static_route_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getStaticRouteData();
    }
    else if(sessionid && static_route_data!="")
    {
        getDataReady=1;
        if (staticR_changedValues.length != 0)
        {
          changed_staticR_data = JSON.parse(JSON.stringify(saved_changed_staticR_data));
        }
        else
        {
          changed_staticR_data = JSON.parse(JSON.stringify(static_route_data));        
        }


    }

  });



</script>

<label class="pl-2">
{#if getDataReady == 1}
  <input type=checkbox bind:checked={changed_staticR_data.config.networking_staticRoute.enable}>
{/if}
  Enable Static Route
</label>


<p class="mt-10"></p>


 <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Destination IP</TableHeadCell>
    <TableHeadCell class="w-10">Network Mask</TableHeadCell>
    <TableHeadCell class="w-10">Gateway IP</TableHeadCell>
    <TableHeadCell class="w-10">Interface</TableHeadCell>
    <TableHeadCell class="w-22">Metric</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_staticR_data.config.networking_staticRoute.list as StaticRoute, index}

    <TableBodyRow>

      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTriggerStaticR(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell  class="!p-4">
    </TableBodyCell>

      <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={StaticRoute.enable}>
      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.dstIp}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.netmask}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.gateway}</TableBodyCell>
{#if StaticRoute.interface==0}
      <TableBodyCell class="w-10">Auto</TableBodyCell>
{:else if StaticRoute.interface==1}
  <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if StaticRoute.interface==2}
  <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if StaticRoute.interface==3}
  <TableBodyCell class="w-10">Cellular WAN</TableBodyCell>
{/if}
    <TableBodyCell class="w-10">{StaticRoute.metric}</TableBodyCell>
    </TableBodyRow>
{/each}
{/if}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
{#if getDataReady == 1}
{#if changed_staticR_data.config.networking_staticRoute.list.length < 10}
<button on:click={() => NewStaticR_Item_Invoker(changed_staticR_data.config.networking_staticRoute.list.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if} 
{/if} 
 </TableBodyCell>

            <TableBodyCell class="!p-4 w-4">

            </TableBodyCell>
            <TableBodyCell class="!p-4 w-4">

            </TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveStaticR}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>

    </tr>


<Modal bind:open={formModal}  size="lg" class="w-full" permanent={true}>
  <form action="#">

<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox bind:checked={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].enable}>
{/if}
  Enable

</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyStaticR(static_route_current_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].dstIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

{/if}

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface} value={0} >Auto</Radio>
  <Radio bind:group={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface} value={1} >LAN</Radio>
  <Radio bind:group={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface} value={3} >Cellular WAN</Radio>


</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].metric} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyStaticR(static_route_current_index)}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={NewformModal}  size="lg" class="w-full" autoclose>
  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newStaticR_Item[new_static_route_index].enable} >
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newStaticR_Item[new_static_route_index].dstIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newStaticR_Item[new_static_route_index].netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newStaticR_Item[new_static_route_index].gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newStaticR_Item[new_static_route_index].interface} value={0} >Auto</Radio>
  <Radio bind:group={newStaticR_Item[new_static_route_index].interface} value={1} >LAN</Radio>
  <Radio bind:group={newStaticR_Item[new_static_route_index].interface} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={newStaticR_Item[new_static_route_index].interface} value={3} >Cellular WAN</Radio>


</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="number" bind:value={newStaticR_Item[new_static_route_index].metric} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddStaticRoute(new_static_route_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



  </TableBody>
</Table>