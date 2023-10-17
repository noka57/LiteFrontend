<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';
  import TimezonePicker from 'svelte-timezone-picker';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { operationConfig,
  OperationConfigChangedLog,
  ChangedOperationConfig
   } from "./configG.js"


    const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };


    let formModal = false;

    let timestamp = 0;
    let dateString="";
    $: {
        const dateObject=new Date(timestamp*1000);
        dateString =dateObject.toLocaleString('en-US', options);
        MYear=dateObject.getFullYear();
        MMonth=dateObject.getMonth()+1;
        MDay=dateObject.getDate();
        MHour=dateObject.getHours();
        MMin=dateObject.getMinutes();
    }

    let timezone = 'Asia/Taipei';


    let MYear=2023;
    let MMonth=7;
    let MDay=26;
    let MHour=10;
    let MMin=10;


    let operation_data="";
    let changed_operation_data = {};
    let saved_changed_operation_data = {};
    let operation_changedValues = [];
    let getDataReady=0;

    let sessionid;
    let sessionBinary;
   sessionidG.subscribe(val => {
     sessionid = val;
   });

    function update(ev) {
        console.log(ev.detail.timezone);
        changed_operation_data.config.system_operation_time.autoSyncTimeParam.tz=ev.detail.timezone;
        timezone=ev.detail.timezone;
    }

    operationConfig.subscribe(val => {
        operation_data = val;
    });



    OperationConfigChangedLog.subscribe(val => {
      operation_changedValues = val;
    });


    ChangedOperationConfig.subscribe(val => {
      saved_changed_operation_data = val;
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
        operation_changedValues=[...operation_changedValues, changedstr];
      }
    }
  }

  function SaveOperationSettings(){
    console.log("Save Operation Setting\r\n");
    if (operation_changedValues.length !=0)
    {
      operation_changedValues=[];
    }

    compareObjects(changed_operation_data, operation_data);

    OperationConfigChangedLog.set(operation_changedValues);
    ChangedOperationConfig.set(changed_operation_data);
    
    console.log(operation_changedValues);

  };


    async function PostReboot () {
    const res = await fetch(window.location.origin+"/PostReboot", {
        method: 'POST',
        body: sessionBinary
    })

    if (res.status == 200)
    {

        console.log("reboot command sent\r\n");

    }
    }



  function StartReboot()
  {
    if (sessionid)
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        PostReboot();
    }
  }

   async function getOperationData () {
    const res = await fetch(window.location.origin+"/getOperationData", {
        method: 'POST',
        body: sessionBinary
    })

    if (res.status == 200)
    {
        operation_data =await res.json();
        console.log(operation_data);
        operationConfig.set(operation_data);


        changed_operation_data= JSON.parse(JSON.stringify(operation_data));
        saved_changed_operation_data = JSON.parse(JSON.stringify(operation_data))
        ChangedOperationConfig.set(saved_changed_operation_data);
        timezone=changed_operation_data.config.system_operation_time.autoSyncTimeParam.tz;
        timestamp=changed_operation_data.config.system_operation_time.currTimestamp;
        getDataReady=1;
    }
  }

  function AutoSyncTime()
  {
    if (changed_operation_data.config.system_operation_time.autoSyncTime)
    {
      changed_operation_data.config.system_operation_time.autoSyncTime=1;
    }
    else
    {
      changed_operation_data.config.system_operation_time.autoSyncTime=0;
    }
  }

  function CheckDLS()
  {
    if (changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn)
    {
      changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn=1;
    }
    else
    {
      changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn=0;
    }
  }


  onMount(() => {

    console.log("operation sessionid: ");
    console.log(sessionid);


    if (sessionid && operation_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getOperationData();
    }
    else if (sessionid && operation_data !="")
    {
        if (operation_changedValues.length == 0)
        {
            changed_operation_data = JSON.parse(JSON.stringify(operation_data));
        }
        else
        {
            changed_operation_data = JSON.parse(JSON.stringify(saved_changed_operation_data));
        }

        getDataReady=1;
    }

  });


 </script>
<Tabs style="underline">
  <TabItem open title="Time">
<table>
    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Current Local Date & Time</p></td>
    <td class="pl-5 pt-5">{dateString}</td>


    </tr>

    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Automatic Date & Time</p></td><td class="pl-5 pt-5">
{#if getDataReady==1}
    <Toggle bind:checked={changed_operation_data.config.system_operation_time.autoSyncTime} on:change={AutoSyncTime}></Toggle>
{/if}
    </td>
    </tr>



    <tr>
    <td class="w-85">   </td>
    <td class="w-85 pt-5 pl-5">

{#if getDataReady==1}
{#if !changed_operation_data.config.system_operation_time.autoSyncTime}
    <Button on:click={() => formModal = true}>Manually Set Date & Time</Button>

{:else}
<Radio bind:group={changed_operation_data.config.system_operation_time.autoSyncTimeParam.type} value='GPS'><p class="text-lg pt-1">GPS</p></Radio>


<Radio bind:group={changed_operation_data.config.system_operation_time.autoSyncTimeParam.type} value='NTP'><p class="text-lg pt-1">NTP</p>

<p class="pl-5">
{#if changed_operation_data.config.system_operation_time.autoSyncTimeParam.type=="NTP"} <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" bind:value={changed_operation_data.config.system_operation_time.autoSyncTimeParam.ntpServer}/>
{:else}
<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" disabled/>
{/if}
</p>
</Radio>
{/if}
{/if}

    </td>
    </tr>

<tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Time Zone</p></td>
    <td class="w-85 pt-5 pl-5"><TimezonePicker on:update="{update}" /></td>
    </tr>

    <tr>

{#if getDataReady==1}
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Day Light Saving</p></td><td class="pl-5 pt-5"><Toggle bind:checked={changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn} on:change={CheckDLS}></Toggle></td>
{/if}
    </tr>

<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveOperationSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



<Modal bind:open={formModal} size="md" class="w-full" autoclose>

<table>


<tr>
      <td class="w-24 pl-5 pt-5"><input type="number" bind:value={MYear} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMonth} min=1 max=12 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MDay} min=1 max=31 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-16 pt-5"> </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MHour} min=0 max=23 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-5 pt-5"> : </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMin} min=0 max=59 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


      <tr class="pt-10">
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

        <td></td>
        <td></td>
    <td class="pt-10">


    <Button color="dark" pill>Apply</Button>

    </td>


    </tr>
  </table>

</Modal>

</table>


  </TabItem>

   <TabItem title="Reboot">
<table>
<tr>
    <td class="w-65">Reboot Device</td><td class="pl-5">    <Button color="dark" pill on:click={StartReboot}>Reboot</Button></td>
</tr>
</table>
      </TabItem>
 
   <TabItem title="Reset">

<table>
<tr>
    <td class="w-65">Reset to default</td><td class="pl-5">    <Button color="dark" pill>Reset</Button></td>
</tr>
</table>

      </TabItem>
 </Tabs>