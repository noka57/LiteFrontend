<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {lanConfig, LanConfigChangedLog, DHCPServerLANConfigLog,ChangedLANConfig} from "./configG.js"

  let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

  let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

  let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let lan_data="";
  let changed_lan_data = {};
  let saved_changed_lan_data = {};
  let changedValues = [];
  let dhcpServerChangedValues=[];
  let getDataReady=0;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
   });


  lanConfig.subscribe(val => {
        lan_data = val;
  });

  LanConfigChangedLog.subscribe(val => {
        changedValues = val;
  });

  DHCPServerLANConfigLog.subscribe(val => {
        dhcpServerChangedValues = val;
  });


  ChangedLANConfig.subscribe(val => {
      saved_changed_lan_data=val;
  });


  function compareObjects(obj1, obj2,section) {
    for (const key in obj1) 
    {
      if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
      {
        compareObjects(obj1[key], obj2[key], section);
      } 
      else if (obj1[key] != obj2[key]) 
      {
        if (section ==1)
        {
          let changedstr="Value of "+key+" has changed to "+obj1[key];
          changedValues=[...changedValues, changedstr];
        }
        else if (section ==2)
        {
          let changedstr="Value of "+key+" has changed to "+obj1[key];
          dhcpServerChangedValues=[...dhcpServerChangedValues, changedstr];   
        }
      }
    }
  }




  function SaveLanSettings(){
    console.log("Save LAN Setting\r\n");
    if (changedValues.length !=0)
    {
      changedValues=[];
    }

    compareObjects(changed_lan_data.config.networking_lan.ipStatic, lan_data.config.networking_lan.ipStatic,1);

    LanConfigChangedLog.set(changedValues);
    saved_changed_lan_data.config.networking_lan.ipStatic=JSON.parse(JSON.stringify(changed_lan_data.config.networking_lan.ipStatic));
    ChangedLANConfig.set(saved_changed_lan_data);
    
    console.log(changedValues);

  };

  function SaveDHCPSettings()
  {
      console.log("Save DHCPServer Setting\r\n");
      if (dhcpServerChangedValues.length !=0)
      {
        dhcpServerChangedValues=[]
      }


    compareObjects(changed_lan_data.config.networking_lan.dhcpServer, lan_data.config.networking_lan.dhcpServer,2);


    DHCPServerLANConfigLog.set(dhcpServerChangedValues);
    saved_changed_lan_data.config.networking_lan.dhcpServer=JSON.parse(JSON.stringify(changed_lan_data.config.networking_lan.dhcpServer));
    ChangedLANConfig.set(saved_changed_lan_data);
    
    console.log(dhcpServerChangedValues);
  }


  function DHCPServer_Check()
  {
    console.log("DHCPServer_Check()");
    console.log(changed_lan_data.config.networking_lan.dhcpServer.enable);
    if (changed_lan_data.config.networking_lan.dhcpServer.enable)
    {
      changed_lan_data.config.networking_lan.dhcpServer.enable=1;
    }
    else
    {
      changed_lan_data.config.networking_lan.dhcpServer.enable=0;
    }
  }


   async function getLANData () {
    const res = await fetch(window.location.origin+"/getLANdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      lan_data =await res.json();
      console.log(lan_data);
      lanConfig.set(lan_data);


      changed_lan_data = JSON.parse(JSON.stringify(lan_data));
      saved_changed_lan_data = JSON.parse(JSON.stringify(lan_data));
      ChangedLANConfig.set(saved_changed_lan_data);
      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("lan sessionid: ");
    console.log(sessionid);


    if (sessionid && lan_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getLANData();
    }
    else if (sessionid && lan_data!="")
    {

      changed_lan_data = JSON.parse(JSON.stringify(saved_changed_lan_data));
      getDataReady=1;
      if (changedValues.length == 0)
      {
        changed_lan_data.config.networking_lan.ipStatic = JSON.parse(JSON.stringify(lan_data.config.networking_lan.ipStatic));
      }

      if (dhcpServerChangedValues.length == 0)
      {
        changed_lan_data.config.networking_lan.dhcpServer = JSON.parse(JSON.stringify(lan_data.config.networking_lan.dhcpServer));

      }      
    }

  });

</script>

 <Tabs style="underline">
  <TabItem open title="General">

<table>

{#if getDataReady==1}
{#if changed_lan_data.config.networking_lan.ipMode==0}
<tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


{/if}
{/if}
    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveLanSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

</TabItem>
  <TabItem title="DHCP Server">

<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">DHCP Server</p></td><td class="pl-5 pt-5">
{#if getDataReady == 1}
    <Toggle bind:checked={changed_lan_data.config.networking_lan.dhcpServer.enable} on:change={DHCPServer_Check}></Toggle>
{/if}
    </td>
    </tr>

{#if changed_lan_data.config.networking_lan.dhcpServer.enable}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DHCP IP Pool</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.startIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5">-</td>
<td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.endIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Lease</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.lease} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">hr</td>


  </tr>


{/if}

    <tr>
    <td></td>
    <td></td>

        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveDHCPSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>

</TabItem>
</Tabs>
