<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {lanConfig, LanConfigChangedLog, ChangedLANConfig} from "./configG.js"

  let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

  let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

  let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let lan_data="";
  let changed_lan_data = {};
  let saved_changed_lan_data = {};
  let changedValues = [];
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


  ChangedLANConfig.subscribe(val => {
      saved_changed_lan_data=val;
  });


  function compareObjects(obj1, obj2) {
    for (const key in obj1) 
    {
      if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
      {
        compareObjects(obj1[key], obj2[key]);
      } 
      else if (obj1[key] != obj2[key]) 
      {
        let changedstr="Value of "+key+" has changed to "+obj1[key];
        changedValues=[...changedValues, changedstr];
      }
    }
  }


  function compareData() {
    compareObjects(changed_lan_data, lan_data);
  }

  function SaveLanSettings(){
    console.log("Save LAN Setting\r\n");
    if (changedValues.length !=0)
    {
      changedValues=[];
    }

    compareData();

    LanConfigChangedLog.set(changedValues);
    saved_changed_lan_data=JSON.parse(JSON.stringify(changed_lan_data));
    ChangedLANConfig.set(saved_changed_lan_data);
    
    console.log(changedValues);

  };


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
      if (changedValues.length == 0)
      {
        changed_lan_data = JSON.parse(JSON.stringify(lan_data));
      }
      else
      {
        changed_lan_data = JSON.parse(JSON.stringify(saved_changed_lan_data));
      }
      getDataReady=1;
    }

  });

</script>



<table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">IP Mode</p>

  </td>
{#if getDataReady==1}
    <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={changed_lan_data.config.networking_lan.ipMode} value={0} >Static</Radio>
  <Radio bind:group={changed_lan_data.config.networking_lan.ipMode} value={1} >DHCP</Radio>
</div></td>
{/if}
</tr>
{#if getDataReady==1}
{#if changed_lan_data.config.networking_lan.ipMode==0}
<tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
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




