<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {natConfig, ChangedNATConfig, NATConfigChangedLog} from "./configG.js"

   let formModal = false;
   let newformModal=false;
   let formModal2 = false;
   let newformModal2=false;


   let NewVirtualServerItem=[0,0,"","","Any",0,[0,0],0,[0,0]];
   let NewVirtualComputerItem=[0,"",""];
   let VirtualServerArrays = [];
   let VirtualComputerArrays = [];


   let virtualserver_current_index;
   let virtualcomputer_current_index;

   let new_vs_index;


   let nat_data="";
   let changed_nat_data = {};
   let changedValues = [];
   let getDataReady=0;

   let sessionid;
   let sessionBinary;
   sessionidG.subscribe(val => {
     sessionid = val;
   });


    natConfig.subscribe(val => {
        nat_data = val;
    });


   function SaveVirtualServer(){
      console.log("Save VirtualServer");
      console.log(changed_nat_data.config.networking_nat_virtualServer);
    }



   function modalTrigger(index){
      formModal = true;
      virtualserver_current_index=index;
   }

   function VS_Item_enableCheck(index)
   {

      if (changed_nat_data.config.networking_nat_virtualServer.list[index].enable)
      {
        changed_nat_data.config.networking_nat_virtualServer.list[index].enable=0;
      }
      else
      {
        changed_nat_data.config.networking_nat_virtualServer.list[index].enable=1;
      }

   }

   function EnableVS()
   {
      if (changed_nat_data.config.networking_nat_virtualServer.enable)
      {
        changed_nat_data.config.networking_nat_virtualServer.enable=0;
      }
      else
      {
        changed_nat_data.config.networking_nat_virtualServer.enable=1;
      }

   }

    let newVS_Item = [{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    }];


   function NewVS_Item_Invoker(index)
   {
      newVS_Item[index].enable=0;
      newVS_Item[index].wanIf=0;
      newVS_Item[index].serverIp="";  
      newVS_Item[index].sourceIp="";
      newVS_Item[index].protocol="TCP";
      newVS_Item[index].pubPort=0;
      newVS_Item[index].pubPortRange.start=0;
      newVS_Item[index].pubPortRange.end=0;
      newVS_Item[index].privPort=0;
      newVS_Item[index].privPortRange.start=0;
      newVS_Item[index].privPortRange.end=0;

      new_vs_index=index;
      newformModal = true;

   }

   function NewVS_ItemEnable(index)
   {
      if (newVS_Item[index].enable)
      {
        newVS_Item[index].enable=0;
      }
      else
      {
        newVS_Item[index].enable=1;
      }
   } 

   function ModifyVS(index)
   {
      formModal = false;

   }

   function AddVS(index)
   {
      newformModal = false;

      changed_nat_data.config.networking_nat_virtualServer.list=[...changed_nat_data.config.networking_nat_virtualServer.list, newVS_Item[index]];
   }


    function modalTrigger2(index){
      formModal2 = true;
      virtualcomputer_current_index=index;
   }


   async function getNATData () {
    const res = await fetch(window.location.origin+"/getNATdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      nat_data =await res.json();
      console.log(nat_data);


      natConfig.set(nat_data);
      changed_nat_data = JSON.parse(JSON.stringify(nat_data));
      getDataReady=1;
      
    }
  }


  onMount(() => {

    console.log("nat sessionid: ");
    console.log(sessionid);


    if (sessionid && nat_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getNATData();
    }
    else if (sessionid && nat_data !="")
    {  
        changed_nat_data = JSON.parse(JSON.stringify(nat_data));
        getDataReady=1;
    }

  });

</script>


<Tabs style="underline">
  <TabItem open title="Loopback">
<table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">NAT Loopback</p>

  </td>

    <td class="pl-5"><div class="flex gap-4">
<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_nat_data.config.networking_nat_loopback.natLoopback}>
{/if}
  Enable
</label>

</div></td>
</tr>

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
  </TabItem>

<TabItem title="Virtual Server">
<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_nat_data.config.networking_nat_virtualServer.enable} on:click={EnableVS}>
{/if}
  Enable Virtual Server
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
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>WAN Interface</TableHeadCell>
    <TableHeadCell>Server IP</TableHeadCell>
    <TableHeadCell>Source IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Public Port</TableHeadCell>
    <TableHeadCell class="w-22">Private Port</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
  {#each changed_nat_data.config.networking_nat_virtualServer.list as VirtualServer, index}

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
      <TableBodyCell class="w-10">{VirtualServer.enable}</TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if VirtualServer.wanIf==0}
      <TableBodyCell class="w-10">All</TableBodyCell>
{:else if VirtualServer.wanIf==1}
      <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if VirtualServer.wanIf==2}
      <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>

{/if}

      <TableBodyCell class="w-10">{VirtualServer.serverIp}</TableBodyCell>
      <TableBodyCell class="w-10">{VirtualServer.sourceIp}</TableBodyCell>
      <TableBodyCell class="w-10">{VirtualServer.protocol}</TableBodyCell>

{#if VirtualServer.pubPort ==0}
      <TableBodyCell class="w-10">{VirtualServer.pubPortRange.start}</TableBodyCell>
{:else if VirtualServer.pubPort ==1}
      <TableBodyCell class="w-10">{VirtualServer.pubPortRange.start}-{VirtualServer.pubPortRange.end}</TableBodyCell>
{/if}


{#if VirtualServer.privPort ==0}
      <TableBodyCell class="w-10">{VirtualServer.privPortRange.start}</TableBodyCell>
{:else if VirtualServer.privPort ==1}
      <TableBodyCell class="w-10">{VirtualServer.privPortRange.start}-{VirtualServer.privPortRange.end}</TableBodyCell>
{/if}

    </TableBodyRow>

{/each}
{/if}

<TableBodyRow>


 

      <TableBodyCell class="!p-4 w-10">     
{#if getDataReady == 1}
{#if changed_nat_data.config.networking_nat_virtualServer.list.length < 2}
<button on:click={() => NewVS_Item_Invoker(changed_nat_data.config.networking_nat_virtualServer.list.length)}>
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
    <td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveVirtualServer}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={newformModal} size="lg" class="w-full" permanent={true}>
  <form action="#">

<label>
  <input class="center" type=checkbox checked={!!newVS_Item[new_vs_index].enable} on:click={NewVS_ItemEnable(new_vs_index)}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">WAN Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newVS_Item[new_vs_index].wanIf} value={0} >All</Radio>
  <Radio bind:group={newVS_Item[new_vs_index].wanIf} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={newVS_Item[new_vs_index].wanIf} value={2} >Cellular WAN-1</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newVS_Item[new_vs_index].serverIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newVS_Item[new_vs_index].sourceIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newVS_Item[new_vs_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={newVS_Item[new_vs_index].protocol} value='UDP' >UDP</Radio>
  <Radio bind:group={newVS_Item[new_vs_index].protocol} value='TCPUDP' >TCP & UDP</Radio>
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Public Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newVS_Item[new_vs_index].pubPort} value={0} >Single Port</Radio><input type="number" bind:value={newVS_Item[new_vs_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={newVS_Item[new_vs_index].pubPort} value={1} >Port Range</Radio><input type="number" bind:value={newVS_Item[new_vs_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newVS_Item[new_vs_index].pubPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Private Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newVS_Item[new_vs_index].privPort} value={0} >Single Port</Radio><input type="number" bind:value={newVS_Item[new_vs_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={newVS_Item[new_vs_index].privPort} value={1} >Port Range</Radio><input type="number" bind:value={newVS_Item[new_vs_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newVS_Item[new_vs_index].privPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddVS(new_vs_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={formModal} size="lg" class="w-full" permanent={true}>
  <form action="#">

<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox checked={!!changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].enable} on:click={VS_Item_enableCheck(virtualserver_current_index)}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">WAN Interface</p>

  </td>

  <td class="pl-5 pt-4"><div class="flex gap-4">
  {#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].wanIf} value={0} >All</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].wanIf} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].wanIf} value={2} >Cellular WAN-1</Radio>
  {/if}
</div></td>
</tr>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].serverIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>




<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].sourceIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].protocol} value='UDP' >UDP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].protocol} value='TCPUDP' >TCP & UDP</Radio>
{/if}
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Public Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].pubPort} value={0} >Single Port</Radio><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].pubPort} value={1} >Port Range</Radio><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].pubPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Private Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].privPort} value={0} >Single Port</Radio><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].privPort} value={1} >Port Range</Radio><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_nat_virtualServer.list[virtualserver_current_index].privPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>


    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyVS(virtualserver_current_index)}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>


  </TabItem>


<TabItem title="Virtual Computer">
<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_nat_data.config.networking_nat_virtualComputer.enable}>
{/if}
  Enable Virtual Computer
</label>

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
    <TableHeadCell class="w-10">Global IP</TableHeadCell>
    <TableHeadCell class="w-36">Local IP</TableHeadCell>


  </TableHead>
  <TableBody>

{#if getDataReady == 1}
  {#each changed_nat_data.config.networking_nat_virtualComputer.list as VirtualComputer, index}

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

    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="text-gray-900 w-10">{VirtualComputer.enable}</TableHeadCell>
    <TableHeadCell class="text-gray-900 w-10">{index+1}</TableHeadCell>
    <TableHeadCell class="text-gray-900 w-10">{VirtualComputer.globalIp}</TableHeadCell>
    <TableHeadCell class="text-gray-900 w-36">{VirtualComputer.localIp}</TableHeadCell>

    </TableBodyRow>
{/each}
{/if}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => newformModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


      </TableBodyCell>

      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={newformModal2} size="md" class="w-full" permanent={true}>
  <form action="#">

<label>
  <input class="center" type=checkbox checked={NewVirtualComputerItem[0]}>
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Global IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewVirtualComputerItem[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewVirtualComputerItem[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={formModal2} size="md" class="w-full" permanent={true}>
  <form action="#">

<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox checked={!!changed_nat_data.config.networking_nat_virtualComputer.list[virtualcomputer_current_index].enable}>
{/if}
  Enable

</label>

<p class="mt-10"></p>

<table>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Global IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_virtualComputer.list[virtualcomputer_current_index].globalIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>




<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_virtualComputer.list[virtualcomputer_current_index].localIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>

  </TabItem>
  <TabItem title="DMZ">

<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_nat_data.config.networking_nat_dmz.enable}>
{/if}
  Enable DMZ
</label>

<table>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={0} >All</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={2} >Cellular WAN-1</Radio>
{/if}
</div></td>
</tr>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DMZ Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_dmz.dmzHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>


      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>


    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
  </TabItem>
</Tabs>




