<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator,MultiSelect } from 'flowbite-svelte';

 import { writable } from 'svelte/store';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    modbusConfig,
    ChangedModbusConfig,
        genericMQTTConfig,
    ChangedGenericMQTTConfig  
  } from "./configG.js"


  let getDataReady=1;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });

  let selectedFile = null;
  let fileContent; 

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light text-center';
  let trClass= 'noborder text-center bg-white dark:bg-gray-800 dark:border-gray-700';

  let modbus_data="";
  let saved_changed_modbus_data ="";
  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;
  let ModbusTagModifyModal=false;


  let group_test=0;
  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";

  let CloudProfile=[];


  genericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
  });

  ChangedGenericMQTTConfig.subscribe(val => {
      saved_changed_generic_mqtt_data = val;
  });

  modbusConfig.subscribe(val => {
      modbus_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
  });

  function handleClickMMS() {
        openDetailStatusMMS=!openDetailStatusMMS;
  }


  function handleClickMMT() {
        openDetailStatusMMT=!openDetailStatusMMT;
  }


  function handleClickMV() {
        openDetailStatusMV=!openDetailStatusMV;
  }


  let modify_com_modal=false;
  let modify_com_index;
  function TriggerModifyCOM(index)
  {
    modify_com_modal=true;
    modify_com_index=index;
  }

  function NoModifyCOM(index)
  {
    modify_com_modal=false;

  }


  function TriggerModifyModbusTag()
  {

    ModbusTagModifyModal=true;
  }

  function NoModifyModbusTag()
  {
    console.log("no modify modbus tag");
    ModbusTagModifyModal=false;
  }


  function TriggerModifyCalculateTag()
  {
  
  }

  let Modify_TCP_Master_Modal=false;
  let Modify_TCP_Master_index;

  function TriggerModifyTCPMaster(index)
  {
    Modify_TCP_Master_Modal=true;
    Modify_TCP_Master_index=index;

  }

  function NoModifyTCPMaster(index)
  {
    Modify_TCP_Master_Modal=false;

  }


  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) 
    {
      selectedFile = file;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const fileBinary= new Uint8Array(event.target.result);
          fileContent=new Uint8Array(fileBinary.length+sessionBinary.length);
          fileContent.set(sessionBinary,0);
          fileContent.set(fileBinary, sessionBinary.length);
      };

      reader.readAsArrayBuffer(file);

    }
  }


 async function getGenericMQTTData () {
    const res = await fetch(window.location.origin+"/getGenericMQTTData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("get gMQTT data");
      generic_mqtt_data =await res.json();
      console.log(generic_mqtt_data);
      genericMQTTConfig.set(generic_mqtt_data);


      saved_changed_generic_mqtt_data= JSON.parse(JSON.stringify(generic_mqtt_data));
      ChangedGenericMQTTConfig.set(saved_changed_generic_mqtt_data);


      for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
      {
        let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];
      }

    }
  }



  let modalAuthExportTR=false;
  let modalAuthExportULR=false;


  function CancelETRAuth()
  {
    modalAuthExportTR=false;
  }

  function exportTR()
  {
    modalAuthExportTR=true;
  }


  function importTR()
  {

    modalAuthExportTR=true;
  }


  function exportULR()
  {

    modalAuthExportULR=true;
  }


  function importULR()
  {

    modalAuthExportULR=true;
  }


  function CancelEULRAuth()
  {
    modalAuthExportULR=false;
  }

  async function getModbusData() {
    const res = await fetch(window.location.origin+"/GeTModbuS", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        console.log("get modbus data");
        modbus_data =await res.json();
        console.log(modbus_data);
        modbusConfig.set(modbus_data);

        saved_changed_modbus_data=JSON.parse(JSON.stringify(modbus_data));
        ChangedModbusConfig.set(saved_changed_modbus_data);

    }
  }

 let PFormatUDefine="Hello";



 const btn1 = () => 
 {
    PFormatUDefine+="$TimeStamp$";

};

 const btn2 = () => 
 {

    PFormatUDefine+="$Keyword1$";
 };

 const btn3 = () => 
 {

    PFormatUDefine+="$Keyword2$";
 };

 const btn4 = () => 
 {

    PFormatUDefine+="$Keyword3$";
 };

  const btn5 = () => 
 {

    PFormatUDefine+="$Keyword4$";
 };



  onMount(() => {

    console.log("data tag pro sessionid: ");
    console.log(sessionid);

    if (sessionid)
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
    }

    console.log("saved_changed_modbus_data");
    console.log(saved_changed_modbus_data);
    if (saved_changed_modbus_data == "")
    {
        getModbusData();
    }

    if (saved_changed_generic_mqtt_data == "")
    {
        getGenericMQTTData();
    }
    else
    {
        for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
        {
              let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];
        }
    }


  });

</script>


 <Tabs style="underline">
<TabItem open title="General">

<table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Data Tag Pro</p></td>
<td class="pl-5 pt-5">
{#if getDataReady == 1}
<Toggle></Toggle>
{/if}
</td>
<td></td>

    </tr>

</table>

<p class="pt-5"></p>


<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</TabItem>
   
<TabItem title="Tag Rule">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus Tag
    </span>

<Table shadow striped={true}>
<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please set rtu master configuration first.</p>
  </caption>

{#if openDetailStatusMMS}
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-10">Interface</TableHeadCell>
    <TableHeadCell class="w-10">Baudrate</TableHeadCell>
    <TableHeadCell class="w-10">Parity</TableHeadCell>
    <TableHeadCell class="w-10">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>    
    <TableHeadCell class="w-10"></TableHeadCell> 
  </TableHead>
  <TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyCOM(1)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>

       </TableBodyCell>

    <TableBodyCell class="w-4">
<input type="checkbox">
    </TableBodyCell>

    <TableBodyCell></TableBodyCell>
 <TableBodyCell></TableBodyCell>
  <TableBodyCell></TableBodyCell>
   <TableBodyCell></TableBodyCell>
    <TableBodyCell></TableBodyCell>
     <TableBodyCell></TableBodyCell>
     <TableBodyCell></TableBodyCell>
 </TableBodyRow>
  </TableBody>
{/if}  

  
<Modal bind:open={modify_com_modal} size="md" class="w-full" permanent={true}>
<form action="#">
<label>
  <input type="checkbox"  >
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCOM(modify_com_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>
  
<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">


      </td>

</tr>

<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio  value={0} >RS 485</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio  value={0} >None</Radio>
  <Radio  value={1} >Even</Radio>
  <Radio  value={2} >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


  
  </tr>
      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Modify</Button></td>
    </tr>
</table>
  </form>
</Modal>

</Table>


<p class="mt-8"></p>  


<Table shadow striped={true} >

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please set tcp master configuration first.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
     <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>  
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-10">Remote Port</TableHeadCell>
    <TableHeadCell class="w-10">Connection Timeout</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell> 
    <TableHeadCell class="w-10"></TableHeadCell> 
    <TableHeadCell class="w-10"></TableHeadCell> 
  </TableHead>
  <TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyTCPMaster(1)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>

       </TableBodyCell>


    <TableBodyCell class="w-4">
<input type="checkbox">
    </TableBodyCell>

    <TableBodyCell></TableBodyCell>
 <TableBodyCell></TableBodyCell>
  <TableBodyCell></TableBodyCell>
   <TableBodyCell></TableBodyCell>
 </TableBodyRow>
  </TableBody>
{/if} 




   <Modal bind:open={Modify_TCP_Master_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox" >
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTCPMaster(Modify_TCP_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>
</table>
</form>
</Modal>

</Table>
<p class="mt-8"></p>  


<Table shadow striped={true}>
  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Modbus Parameter

  
<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">Enable</TableHeadCell>
    <TableHeadCell class="!p-1 w-2">No</TableHeadCell>
    <TableHeadCell class="!p-4 w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Protocol</TableHeadCell>
    <TableHeadCell class="!p-1 w-10">Slave ID</TableHeadCell>
    <TableHeadCell class="!p-4 w-18">Point Type</TableHeadCell>
    <TableHeadCell class="!p-2 w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Quantity</TableHeadCell>
    <TableHeadCell class="!p-1 w-10">Response Timeout</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Polling Rate</TableHeadCell>
    <TableHeadCell class="!p-1 w-10">Delay Between Polls</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Byte Order</TableHeadCell>
  </TableHead>

<TableBody>
{#if getDataReady == 1}

<TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button >
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button >    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox"  >
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4"></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

    </TableBodyRow>


{/if}

  <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
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
        <td></td>
        <td></td>

    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>



<Modal bind:open={ModbusTagModifyModal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox">
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyModbusTag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" >
<option disabled="" value="">Choose Variable ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_variable.master as MasterVariable, index}
<option value={MasterVariable.variableName}>{MasterVariable.variableName}</option>
{/each}
{/if}
</select>

    </td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

 <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" >
<option disabled="" value="none">Choose Type ...</option>

<option value={1}>Boolean</option>
<option value={2}>Unsigned Short</option>
<option value={3}>Signed Short</option>
<option value={4}>Unsigned Integer</option>
<option value={5}>Signed Integer</option>
<option value={6}>Float</option>
<option value={7}>Double</option>
</select>

 


 </td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Preset Value</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2"  value={0} >Initial</Radio>
  <Radio class="pb-2"  value={1} >Span High</Radio>
  <Radio class="pb-2"  value={2} >Span Low</Radio>
  <Radio class="pb-2"  value={3} >Timeout present</Radio>
  <Radio class="pb-2"  value={4} >Busy present</Radio>

</div></td>
</tr>





<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2"  value={0} >Hexadecimal</Radio>
  <Radio class="pb-2"  value={1} >Decimal</Radio>
  <Radio class="pb-2"  value={2} >Binary</Radio>

</div></td>
</tr>








            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>


</table>
</form>
</Modal>


 </Table> 



  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Calculation Tag
    </span>



<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Formula</TableHeadCell>    
    <TableHeadCell class="w-18">X1,X2,X3,X4</TableHeadCell>
    <TableHeadCell class="w-18">Init Value</TableHeadCell> 
    <TableHeadCell class="w-18">Update Period(sec)</TableHeadCell>
    <TableHeadCell class="w-18">Span H/L</TableHeadCell>
    <TableHeadCell class="w-18">?</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">cal_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>


  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Accumulated Tag
    </span>



<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Start Time</TableHeadCell>
    <TableHeadCell class="w-18">End Time</TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">acc_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-03 00:00</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-04 16:00</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>


  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Direct Methods Tag
    </span>



<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Method Name</TableHeadCell>    
    <TableHeadCell class="w-18">Payload</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">WriteHoldingRegister</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":1, "StartAddress":0,"WriteValueHex": "FFFF1234"&#125;</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">ReadHoldingRegister</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":1, "StartAddress":0,"Quantity": 2&#125;</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


 </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">3</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">ReadCoil</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":3, "StartAddress":0,"Quantity": 2&#125;</TableBodyCell>



 </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">4</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">WriteCoil</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":3, "StartAddress":0,"WriteValueHex": 1&#125;</TableBodyCell>



 </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">5</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">ReadDiscreteInput</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":3, "StartAddress":0,"Quantity": 4&#125;</TableBodyCell>



 </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">6</TableBodyCell>
      <TableBodyCell class="w-18">DM_</TableBodyCell>
      <TableBodyCell class="w-18">ReadInputRegister</TableBodyCell>
      <TableBodyCell class="w-18" colspans="3">&#123;"MasterProfile":"RTU_MASTER_1_Test", "SlaveID":3, "StartAddress":0,"Quantity": 4&#125;</TableBodyCell>



 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>



  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SCADA Tag
    </span>




<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">?</TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">scada_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>


  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Event Tag
    </span>



<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Trigger Condition</TableHeadCell>
    <TableHeadCell class="w-18">Action</TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">evt_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18"> > 65</TableBodyCell>
      <TableBodyCell class="w-18">write value to what?</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>


  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Schedule Tag
    </span>




<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">sche_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>

  </AccordionItem>

{#if 0}

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tag Rule Import/Export
    </span>



<table>

    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Export Tag Rule</p></td>

<td class="pl-5 pt-5"><Button on:click={exportTR}>Export</Button></td>
  </tr>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Import Tag Rule</p></td>
<td class="pl-5 pt-5">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleFileUpload}>

</td>
<td class="pl-5 pt-5">
  <Button on:click={importTR}>Import</Button>

</td>

</tr>



<Modal bind:open={modalAuthExportTR} size="lg" class="w-full" permanent={true}>
<form action="#">

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={CancelETRAuth}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Please Enter Password:</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>


</table>
</form>
</Modal>

</table>

  </AccordionItem>
{/if}


</Accordion>

</TabItem>

<TabItem title="UL Rule">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Content Setting
    </span>
<table>


   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Content Format</p></td>
      <td class="pl-5 pt-5">
      <Button on:click={exportULR}>Export</Button>
</td>
</tr>
   <tr>
      <td><p class="w-48 pl-20 pt-4 text-lg font-light text-right"></p></td>
      <td class="pl-5 pt-10">

<Radio  bind:group={group_test} value={0} >Import</Radio>
      </td>

      <td class="pl-5 pt-10">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleFileUpload}>

</td>
<td class="pl-5 pt-10">
  <Button on:click={importULR}>Import</Button>

</td>
    </tr>

   <tr>
      <td><p class="w-48 pl-20 pt-4 text-lg font-light text-right"></p></td>
      <td class="pl-5 pt-10">

<Radio  bind:group={group_test} value={1} >User Defined:</Radio>
      </td>
    </tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if group_test == 1}
    <Button size="xs" on:click={btn1}>TimeStamp</Button>
{:else}
    <Button size="xs" disabled>TimeStamp</Button>
{/if}
</li>

<li class="pt-4">
{#if group_test == 1}
<Button size="xs" on:click={btn2}>Keyword1</Button>
{:else}
<Button size="xs" disabled>Keyword1</Button>
{/if}
</li>

<li class="pt-4">
{#if group_test == 1}
<Button size="xs" on:click={btn3}>Keyword2</Button>
{:else}
<Button size="xs" disabled>Keyword2</Button>
{/if}
</li>

<li class="pt-4">
{#if group_test == 1}
<Button size="xs" on:click={btn4}>Keyword3</Button>
{:else}
<Button size="xs" disabled>Keyword3</Button>
{/if}
</li>


<li class='pt-4'>
{#if group_test == 1}
<Button size="xs" on:click={btn5}>Keyword4</Button>
{:else}
<Button size="xs" disabled>Keyword4</Button>
{/if}
</li>

</ul>
  </div>
  </td>

    <td class="pl-4 pt-4" colspan="3">
{#if group_test == 1}

<Textarea id="textarea-id" placeholder="Data Format" rows="12" name="message"  bind:value={PFormatUDefine}/>



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
{/if}


    </td>




</tr>    




<Modal bind:open={modalAuthExportULR} size="lg" class="w-full" permanent={true}>
<form action="#">

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={CancelEULRAuth}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Please Enter Password:</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>




</table>
</form>
</Modal>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Setting
    </span>


<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio  value={0} >Right Away</Radio>
  <Radio  value={1} > User Defined (mins): </Radio>
{#if 0}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio value={0} >Latest First</Radio>
  <Radio  value={1} > First In, First Out </Radio>

</div>



</td>


</tr>


<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={CloudProfile} />

    </td>


</tr>





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
    <td class="pl-10 pt-4"><Button color="blue" pill={true} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


  </AccordionItem>

</Accordion>


</TabItem>


<TabItem title="DL Rule">
</TabItem>


{#if 0}

<TabItem title="Observation">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Port Status
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tag Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    UL Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DL Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Log Export
    </span>

  </AccordionItem>

</Accordion>



</TabItem>

{/if}

{#if 0}
<TabItem title="Simulator">



<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Down Link
    </span>


<p>Select Tag: </p><select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" >
<option disabled="" value="">None</option>
<option value="1" >modbusTest</option>

</select>


<p class="pt-5">Value: </p><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500">



<p class="pt-5"></p>
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" >Simulate</button>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Up Link
    </span>

<p>Select Tag: </p><select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">
<option disabled="" value="">None</option>
<option value="1" >modbusTest</option>

</select>


<p class="pt-5">Value: </p><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500">

<p class="pt-5"></p>
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" >Simulate</button>

  </AccordionItem>
</Accordion>



 </TabItem>

 {/if}


 </Tabs>