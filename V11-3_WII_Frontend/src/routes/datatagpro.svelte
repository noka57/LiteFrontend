<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

 import { writable } from 'svelte/store';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    modbusConfig,
    ChangedModbusConfig,  
  } from "./configG.js"


  let getDataReady=1;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light text-center';
  let trClass= 'noborder text-center bg-white dark:bg-gray-800 dark:border-gray-700';

  let modbus_data="";
  let saved_changed_modbus_data ="";
  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;

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





<p class="mt-8">

<Table shadow striped={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Variable
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
<TableHead>

    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-2">No</TableHeadCell>
    <TableHeadCell class="">Variable Name</TableHeadCell>
    <TableHeadCell class="w-18">Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_variable.master as VariableMasterItem, index}
   

 <TableBodyRow>
{#if VariableMasterItem.enable}
       <TableBodyCell class='w-2'>1</TableBodyCell>
{:else}
       <TableBodyCell class='w-2'>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="w-18">{VariableMasterItem.variableName}</TableBodyCell>
  <TableBodyCell class="w-10">{VariableMasterItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{VariableMasterItem.slaveId}</TableBodyCell>
{#if VariableMasterItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if VariableMasterItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if VariableMasterItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if VariableMasterItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}
  <TableBodyCell class="w-18">{VariableMasterItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{VariableMasterItem.quantity}</TableBodyCell>
  <TableBodyCell class="w-18">{VariableMasterItem.responseTimeout} ms</TableBodyCell>
<TableBodyCell class="w-18">{VariableMasterItem.pollingRate} ms</TableBodyCell>
    <TableBodyCell class="w-18">{VariableMasterItem.delayBetweenPolls} ms</TableBodyCell>

{#if VariableMasterItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if VariableMasterItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if VariableMasterItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if VariableMasterItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}


  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true} >


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
  </TableHead>
  <TableBody>




  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true}>

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>

  </TableHead>
  <TableBody>



  </TableBody>
    {/if}
</Table>


  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Calculation Tag
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Accumulated Tag
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Direct Methods Tag
    </span>

  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SCADA Tag
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Event Tag
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Schedule Tag
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tag Rule Import/Export
    </span>

  </AccordionItem>

</Accordion>

</TabItem>

<TabItem title="UL Rule">
</TabItem>


<TabItem title="DL Rule">
</TabItem>


<TabItem title="Observation">
</TabItem>


<TabItem title="Simulator">
 </TabItem>


 </Tabs>