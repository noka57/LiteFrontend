<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";


  let testServerAuth=0;
  let testSecMode=0;
  let testSecPolicy=0;
  let testClientReconnect=0;
  let opcua2modbus=0;
  let modbusOption=0;
  let sessionid;
  let sessionBinary;
  let styleSpecial=true;
  let modbusTagSPF=[0,0,0];
  let modbusTag=[0,0,0];
  let ClientAuth=0;
  let modbusPRateMS=1000;


  sessionidG.subscribe(val => {
     sessionid = val;
  });

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let specialPT=0;


  let openTagList=false;
  let modifyModbusTagModal=false;
  let modbusTagIndex=0



  function handleClickTagList()
  {
    openTagList=!openTagList;
  }


  function TriggerModifyModbusTag(index)
  {
    modbusTagIndex=index;
    modifyModbusTagModal=true;
  }


  function ModifyModbusTag()
  {
    modifyModbusTagModal=false;
  }

  function NoModifyModbusTag()
  {
    modifyModbusTagModal=false;
  }

  onMount(() => {

    console.log("conversion sessionid: ");
    console.log(sessionid);

  });


</script>


<Tabs style="underline">

  <TabItem open title="OPCUA">

<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Server
    </span>


<table>
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Endpoint Url</p></td><td class="pl-5 pt-5"><input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


 <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Local Certificate</p></td>



    <td class="pl-5 pt-5" colspan="5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" >
<option disabled="" value="">Choose ...</option>

<option>Certificate1</option>
<option>Certificate2</option>
<option>Certificate3</option>

</select></td>


    </tr>





<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td><td class="pl-5 pt-5">

<Toggle bind:checked={ClientAuth}></Toggle>

</td>
</tr>

{#if ClientAuth==1}
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-1">
  <div class="flex gap-4">
{#if testServerAuth==1}  
  <Radio bind:group={testServerAuth} value={1} {styleSpecial}>Username/Password</Radio>


      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"> <p class="pt-8">/</p> <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500">

{:else}
  <Radio class="pt-10 pb-1" bind:group={testServerAuth} value={1}>Username/Password</Radio>

{/if} 



  </div>

    <div class="flex gap-4">
  <Radio class="pt-10" bind:group={testServerAuth} value={2}>Remote Certificate</Radio>
{#if testServerAuth==2} 

<button color="blue" type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-1 text-sm text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48" on:click={handleClickTagList} on:keydown={() => {}}>Choose Certificate
{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}

</button>
{/if}

  </div>
      </td>

</tr>
{/if}


{#if ClientAuth==1}

{#if testServerAuth==2} 
{#if openTagList}

<tr><td class="w-60"></td>

<td><p class="pl-20 pt-4 text-lg font-light text-right"></td>
<td style="padding-left:11.5rem">

<div role="tooltip" tabindex="-1" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600 shadow-md divide-y z-50 w-48" > 
<ul class="w-44 p-3 space-y-3 text-sm">

<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"> 
<p class="pl-2">Client1</p>
</label>
</li>


<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"> 
<p class="pl-2">Client2</p>
</label>
</li>


<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"> 
<p class="pl-2">Client3</p>
</label>
</li>

</ul>  

</div>

</td>


</tr>
{/if}
{/if}
{/if}





    <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Reverse Connection</p></td><td class="pl-5 pt-5">

    <Toggle bind:checked={testClientReconnect}></Toggle>

    </td>
    </tr>


{#if testClientReconnect == 1}  

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Endpoint Url</p></td>

      <td class="pl-5 pt-5">
    
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">




      </td>

</tr>



{/if}

    <tr class="pt-5">
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

  </AccordionItem>

  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Client
    </span>




<table>
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Endpoint Url</p></td><td class="pl-5 pt-5"><input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


 <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Security Mode</p></td>



    <td class="pl-5 pt-5" colspan="5"><div class="flex gap-4">
  <Radio bind:group={testSecMode} value={0}>Sign and Encrypt</Radio>
  <Radio bind:group={testSecMode} value={1}>Sign</Radio>

</div></td>


    </tr>



 <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Security Policy</p></td>

    <td class="pl-5 pt-5" colspan="5"><div class="flex gap-4">
  <Radio bind:group={testSecPolicy} value={0}>Basic256Sha256</Radio>
  <Radio bind:group={testSecPolicy} value={1}>Aes128Sha256RsaOaep</Radio>
  <Radio bind:group={testSecPolicy} value={2}>Aes256Sha256RsaPss</Radio>
</div></td>





    </tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Authentication</p></td><td class="pl-5 pt-1">

  <Radio class="pt-8" bind:group={testServerAuth} value={0}>Anonymous</Radio>
  <div class="flex gap-4">
{#if testServerAuth==1}  
  <Radio bind:group={testServerAuth} value={1} {styleSpecial}>Username/Password</Radio>


      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"> <p class="pt-8">/</p> <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500">

{:else}
  <Radio class="pt-10 pb-1" bind:group={testServerAuth} value={1}>Username/Password</Radio>

{/if} 



  </div>

    <div class="flex gap-4">
  <Radio class="pt-10" bind:group={testServerAuth} value={2}>Local Certificate</Radio>
{#if testServerAuth==2} 

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-5 h-10 w-48" >
<option disabled="" value="">Choose ...</option>

<option>Certificate1</option>
<option>Certificate2</option>
<option>Certificate3</option>

</select>
{/if}

  </div>
      </td>

</tr>

    <tr class="pt-5">
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


  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Log
    </span>
    </AccordionItem>

</Accordion>


  </TabItem>

  <TabItem title="Conversion">

<Accordion>
  <AccordionItem {defaultClass}>

   <span slot="header" class="pl-4">
    OPC UA TO Modbus
    </span>


<table class="mb-10">

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-right">Enable</p></td>
<td class="pl-5 pt-5">

<Toggle bind:checked={opcua2modbus}></Toggle>

</td>

    </tr>
{#if opcua2modbus==1}

    <tr><td class="w-48"></td>

<td class="pl-5 pt-5">
 <div class="flex gap-4">
  <Radio bind:group={modbusOption} value={0}>Modbus Tag</Radio>
{#if modbusOption==0}    
      <div class="relative"><input id="polling rate" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="polling_rate" placeholder=" " type="number" bind:value={modbusPRateMS}> <label for="polling_rate" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">polling_rate(ms)</label></div>
{:else}
      <div class="relative"><input id="polling rate" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3 disabled:cursor-not-allowed disabled:opacity-50" name="polling_rate" placeholder=" " type="number" bind:value={modbusPRateMS} disabled> <label for="polling_rate" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">polling_rate(ms)</label></div>

{/if}  
  <Radio bind:group={modbusOption} value={1}>Node Number</Radio>

{#if modbusOption==1}    
      <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}


</div>
</td>
    </tr>
{/if}    

</table>

{#if opcua2modbus==1}

{#if modbusOption==0}

<Table shadow striped={true} tableNoWFull={true}>

  <TableHead>


    <TableHeadCell class="!p-4"></TableHeadCell>
    <TableHeadCell class="!p-4"></TableHeadCell>
    <TableHeadCell class="w-10">Support</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Tag</TableHeadCell>
    <TableHeadCell class="w-18">Special Function</TableHeadCell>



  </TableHead>
 <TableBody>


 <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyModbusTag(0)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>


 <TableBodyCell class="!p-0 w-10">
<button>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox">
    </TableBodyCell>
    <TableBodyCell class="w-18">{#if modbusTag[0]!=0}ModbusTag{modbusTag[0]}{/if}</TableBodyCell>
    <TableBodyCell class="w-18">{#if modbusTagSPF[0]!=0}SF{modbusTagSPF[0]}{/if}</TableBodyCell>
    </TableBodyRow>

 <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyModbusTag(1)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

 <TableBodyCell class="!p-0 w-10">
<button>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell class="w-10">
<input type="checkbox">
    </TableBodyCell>
    <TableBodyCell class="w-18">{#if modbusTag[1]!=0}ModbusTag{modbusTag[1]}{/if}</TableBodyCell>
    <TableBodyCell class="w-18">{#if modbusTagSPF[1]!=0}SF{modbusTagSPF[1]}{/if}</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>

            <TableBodyCell class="!p-4 w-10">
      <button>
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell> 


</TableBodyRow>

    </TableBody>

</Table>

{/if}

{/if}

<table>
    <tr>
    <td class="w-60"></td>
        <td class="w-60"></td>
        </tr>
    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={modifyModbusTagModal} size="md" class="w-full" permanent={true}>
<form action="#">
<label>
  <input type="checkbox" >
  Support
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyModbusTag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={modbusTag[modbusTagIndex]}>
<option disabled="" value="">Choose ...</option>

<option value={1}>ModbusTag1</option>
<option value={2}>ModbusTag2</option>
<option value={3}>ModbusTag3</option>

</select>

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Special Function</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={modbusTagSPF[modbusTagIndex]}>
<option disabled="" value="">Choose ...</option>

<option value={1}>SF1</option>
<option value={2}>SF2</option>
<option value={3}>SF3</option>

</select>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyModbusTag}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>




</table>



  </AccordionItem>

  <AccordionItem {defaultClass}>

   <span slot="header" class="pl-4">
    OPC UA TO OPC UA
    </span>


<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-right">Enable</p></td>
<td class="pl-5 pt-5">

<Toggle></Toggle>

</td>
<td></td>

    </tr>

        <tr class="pt-5">
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

  </AccordionItem>


</Accordion>
  </TabItem>


</Tabs>