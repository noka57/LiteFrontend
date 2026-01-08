<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import './global.css';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let dnp3rtuMaster_new_modal=false;
  let dnp3tcpMaster_new_modal=false;
  let rMasterSoliciteOption=0;
  let dnp3Object_modal_binary_input=false;
  let dnp3_Object_ID_group_binary_input=-1;
  let dnp3_Variation_ID_binary_input=-1;
  let dnp3_Qualifier_binary_input=-1


  let dnp3Object_modal_binary_output=false;
  let dnp3_Object_ID_group_binary_output=-1;
  let dnp3_Variation_ID_binary_output=-1;
  let dnp3_Qualifier_binary_output=-1


  let dnp3Object_modal_counter=false;
  let dnp3_Object_ID_group_counter=-1;
  let dnp3_Variation_ID_counter=-1;
  let dnp3_Qualifier_counter=-1



  let dnp3Object_modal_analog_input=false;
  let dnp3_Object_ID_group_analog_input=-1;
  let dnp3_Variation_ID_analog_input=-1;
  let dnp3_Qualifier_analog_input=-1

  let dnp3Object_modal_analog_output=false;
  let dnp3_Object_ID_group_analog_output=-1;
  let dnp3_Variation_ID_analog_output=-1;
  let dnp3_Qualifier_analog_output=-1


  function new_Drtu_master_trigger()
  {
    dnp3rtuMaster_new_modal = true;
  }


  function new_Dtcp_master_trigger()
  {
    dnp3tcpMaster_new_modal = true;
  }


  function new_object_trigger_binary_input()
  {
    dnp3Object_modal_binary_input = true;
  }


  function new_object_trigger_binary_output()
  {
    dnp3Object_modal_binary_output = true;
  }


  function new_object_trigger_counter()
  {
    dnp3Object_modal_counter = true;
  }

  function new_object_trigger_analog_input()
  {
    dnp3Object_modal_analog_input = true;
  }

  function new_object_trigger_analog_output()
  {
    dnp3Object_modal_analog_output = true;
  }


</script>



 <Tabs style="underline">


<TabItem open title="RTU">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>

<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-18">Outstation ID</TableHeadCell>
    <TableHeadCell class="w-18">Master ID</TableHeadCell>    
    <TableHeadCell class="w-18">Solicited Static Data</TableHeadCell>
  </TableHead>
  <TableBody>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">DNPM1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">S1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">None</TableBodyCell>      
    </TableBodyRow>

    <TableBodyRow>


 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_Drtu_master_trigger()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>


  </TableBody>


 
<Modal bind:open={dnp3rtuMaster_new_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48">
<option disabled="" value="">Choose Profile ...</option>

<option value={0}>S1</option>
<option value={1}>S2</option>


</select>


      </td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Outstation ID</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Master ID</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Solicited Static Data</p></td>
    <td class="pl-5 pt-5 w-18" colspan="3"><div class="flex gap-2">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={rMasterSoliciteOption}>
<option disabled="" value="">Choose Profile ...</option>

<option value={0}>None</option>
<option value={1}>Startup Only</option>
<option value={2}>Periodically</option>


</select>

{#if rMasterSoliciteOption==2}

      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-2 h-10 dark:bg-gray-700 dark:border-green-500"> 
{:else}

      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-2 h-10 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> 
{/if}

<p class="pl-1 pt-4"> ms</p>
      </div></td>



  </tr>


      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>




</Table>


  </AccordionItem>

</Accordion>
</TabItem>



<TabItem title="TCP">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Outstation ID</TableHeadCell>  
    <TableHeadCell class="w-18">Master ID</TableHeadCell>
    <TableHeadCell class="w-18">Solicited Static Data</TableHeadCell>              
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">DNPTCPM1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">1.1.1.1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">2110</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">4</TableBodyCell>      
      <TableBodyCell class="!p-6 w-18">None</TableBodyCell>  
    </TableBodyRow>

    <TableBodyRow>


 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_Dtcp_master_trigger()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>


<Modal bind:open={dnp3tcpMaster_new_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Outstation ID</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Master ID</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Solicited Static Data</p></td>
    <td class="pl-5 pt-5 w-18" colspan="3"><div class="flex gap-2">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={rMasterSoliciteOption}>
<option disabled="" value="">Choose Profile ...</option>

<option value={0}>None</option>
<option value={1}>Startup Only</option>
<option value={2}>Periodically</option>


</select>

{#if rMasterSoliciteOption==2}

      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-2 h-10 dark:bg-gray-700 dark:border-green-500"> 
{:else}

      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-2 h-10 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> 
{/if}

<p class="pl-1 pt-4"> ms</p>
      </div></td>



  </tr>




      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>




  </Table>



  </AccordionItem>

</Accordion>
</TabItem>


<TabItem title="Object">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64">
<option disabled="" value="">Choose Profile ...</option>

<option value={0}>TCP_Master1</option>
<option value={1}>RTU_Master1</option>

</select>


<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Binary Input
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Object Group ID</TableHeadCell>
    <TableHeadCell class="w-18">Variation ID</TableHeadCell>
    <TableHeadCell class="w-18">Qualifier</TableHeadCell> 
    <TableHeadCell class="w-18">Polling Interval</TableHeadCell>                     
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">1_Binary Input</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">0_Any Variations</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">All</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">2_Binary Input Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">2_With Absolute Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity: 4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>




    <TableBodyRow>





 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_object_trigger_binary_input()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>

  </Table>



<Modal bind:open={dnp3Object_modal_binary_input} size="xl" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Object Group ID</p></td>


    <td class="pl-5 pt-5" colspan="2"><div class="flex gap-4">

<Radio bind:group={dnp3_Object_ID_group_binary_input} value={1}>1_Binary Input</Radio>

<Radio bind:group={dnp3_Object_ID_group_binary_input} value={2}>2_Binary Input Event</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Variation ID</p></td>

<td class="pl-5 pt-5" colspan="4"><div class="flex gap-4">

{#if dnp3_Object_ID_group_binary_input ==1}

<Radio bind:group={dnp3_Variation_ID_binary_input} value={0}>0_Any Variation</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_input} value={1}>1_Packed Format</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_input} value={2}>2_With Flag</Radio>

{:else if dnp3_Object_ID_group_binary_input ==2}
<Radio bind:group={dnp3_Variation_ID_binary_input} value={0}>0_Any Variation</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_input} value={1}>1_Without Time</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_input} value={2}>2_With Absolute Time</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_input} value={3}>3_With Relative Time</Radio>



{/if}



</div></td>


  </tr>




<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Qualifier</p></td><td class="pl-5 pt-8" colspan="8">

      <div class="flex gap-4">
{#if dnp3_Object_ID_group_binary_input != -1 && dnp3_Variation_ID_binary_input !=-1}

<Radio bind:group={dnp3_Qualifier_binary_input} value={0}>All</Radio>

<Radio bind:group={dnp3_Qualifier_binary_input} value={1}>Limited Quantity:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

<Radio bind:group={dnp3_Qualifier_binary_input} value={2}>Specified Point Indexes:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pl-1 pt-2"> - </p>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

</div>
      </td>



  </tr>



<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Polling Interval</p></td>
    <td class="pl-5 pt-8 w-18" colspan="1"><div class="flex gap-2">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>


  </tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>

    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>





  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Binary Output
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Object Group ID</TableHeadCell>
    <TableHeadCell class="w-18">Variation ID</TableHeadCell>
    <TableHeadCell class="w-18">Qualifier</TableHeadCell> 
    <TableHeadCell class="w-18">Polling Interval</TableHeadCell>                     
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">10_Binary Output</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">0_Any Variations</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">All</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">11_Binary Output Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">2_With Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity: 4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>




    <TableBodyRow>





 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_object_trigger_binary_output()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>

  </Table>



<Modal bind:open={dnp3Object_modal_binary_output} size="xl" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Object Group ID</p></td>


    <td class="pl-5 pt-5" colspan="2"><div class="flex gap-4">

<Radio bind:group={dnp3_Object_ID_group_binary_output} value={10}>10_Binary Output</Radio>
<Radio bind:group={dnp3_Object_ID_group_binary_output} value={11}>11_Binary Output Event</Radio>


</div></td>


  </tr>

<tr>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Variation ID</p></td>

<td class="pl-5 pt-5" colspan="4"><div class="flex gap-4">

{#if dnp3_Object_ID_group_binary_output ==10}

<Radio bind:group={dnp3_Variation_ID_binary_output} value={0}>0_Any Variation</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_output} value={1}>1_Packed Format</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_output} value={2}>2_With Status</Radio>

{:else if dnp3_Object_ID_group_binary_output ==11}
<Radio bind:group={dnp3_Variation_ID_binary_output} value={0}>0_Any Variation</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_output} value={1}>1_Without Time</Radio>
<Radio bind:group={dnp3_Variation_ID_binary_output} value={2}>2_With Time</Radio>




{/if}



</div></td>


  </tr>




<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Qualifier</p></td><td class="pl-5 pt-8" colspan="8">

      <div class="flex gap-4">
{#if dnp3_Object_ID_group_binary_output != -1 && dnp3_Variation_ID_binary_output !=-1}

<Radio bind:group={dnp3_Qualifier_binary_output} value={0}>All</Radio>

<Radio bind:group={dnp3_Qualifier_binary_output} value={1}>Limited Quantity:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

<Radio bind:group={dnp3_Qualifier_binary_output} value={2}>Specified Point Indexes:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pl-1 pt-2"> - </p>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

</div>
      </td>



  </tr>



<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Polling Interval</p></td>
    <td class="pl-5 pt-8 w-18" colspan="1"><div class="flex gap-2">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>


  </tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>

    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>




  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Counter
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Object Group ID</TableHeadCell>
    <TableHeadCell class="w-18">Variation ID</TableHeadCell>
    <TableHeadCell class="w-18">Qualifier</TableHeadCell> 
    <TableHeadCell class="w-18">Polling Interval</TableHeadCell>                     
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">20_Counter</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">0_Any Variations</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">All</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">21_Frozen Counter</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3_32 Bit Frozen Delta Counter</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Point Index: 4-8</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">22_Counter Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">5_32 Bit Counter Event With Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity: 4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">23_Frozen Counter Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">1_32 Bit Frozen Counter Event Without Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity: 4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>





 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_object_trigger_counter()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>

  </Table>



<Modal bind:open={dnp3Object_modal_counter} size="xl" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Object Group ID</p></td>


    <td class="pl-5 pt-5" colspan="4"><div class="flex gap-4">

<Radio bind:group={dnp3_Object_ID_group_counter} value={20}>20_Counter</Radio>
<Radio bind:group={dnp3_Object_ID_group_counter} value={21}>21_Frozen Counter</Radio>
<Radio bind:group={dnp3_Object_ID_group_counter} value={22}>22_Counter Event</Radio>
<Radio bind:group={dnp3_Object_ID_group_counter} value={23}>23_Frozen Counter Event</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Variation ID</p></td>

<td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={dnp3_Variation_ID_counter}>

{#if dnp3_Object_ID_group_counter ==20}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Counter</option>
<option value={2}>2_16 Bit Counter</option>
<option value={3}>3_32 Bit Delta Counter</option>
<option value={4}>4_16 Bit Delta Counter</option>
<option value={5}>5_32 Bit Counter Without Flag</option>
<option value={6}>6_16 Bit Counter Without Flag</option>
<option value={7}>7_32 Bit Delta Counter Without Flag</option>
<option value={8}>8_16 Bit Delta Counter Without Flag</option>
{:else if dnp3_Object_ID_group_counter == 21}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Frozen Counter</option>
<option value={2}>2_16 Bit Frozen Counter</option>
<option value={3}>3_32 Bit Frozen Delta Counter</option>
<option value={4}>4_16 Bit Frozen Delta Counter</option>
<option value={5}>5_32 Bit Frozen Counter With Time Of Freeze</option>
<option value={6}>6_16 Bit Frozen Counter With Time Of Freeze</option>
<option value={7}>7_32 Bit Frozen Delta Counter With Time Of Freeze</option>
<option value={8}>8_16 Bit Frozen Delta Counter With Time Of Freeze</option>
<option value={9}>9_32 Bit Frozen Counter Without Flag</option>
<option value={10}>10_16 Bit Frozen Counter Without Flag</option>
<option value={11}>11_32 Bit Frozen Delta Counter Without Flag</option>
<option value={12}>12_16 Bit Frozen Delta Counter Without Flag</option>
{:else if dnp3_Object_ID_group_counter == 22}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Counter Event Without Time</option>
<option value={2}>2_16 Bit Counter Event Without Time</option>
<option value={3}>3_32 Bit Delta Counter Event Without Time</option>
<option value={4}>4_16 Bit Delta Counter Event Without Time</option>
<option value={5}>5_32 Bit Counter Event With Time</option>
<option value={6}>6_16 Bit Counter Event With Time</option>
<option value={7}>7_32 Bit Delta Counter Event With Time</option>
<option value={8}>8_16 Bit Delta Counter Event With Time</option>
{:else if dnp3_Object_ID_group_counter == 23}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Frozen Counter Event Without Time</option>
<option value={2}>2_16 Bit Frozen Counter Event Without Time</option>
<option value={3}>3_32 Bit Frozen Delta Counter Event Without Time</option>
<option value={4}>4_16 Bit Frozen Delta Counter Event Without Time</option>
<option value={5}>5_32 Bit Frozen Counter Event With Time</option>
<option value={6}>6_16 Bit Frozen Counter Event With Time</option>
<option value={7}>7_32 Bit Frozen Delta Counter Event With Time</option>
<option value={8}>8_16 Bit Frozen Delta Counter Event With Time</option>


{/if}





</select>


</td>


  </tr>




<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Qualifier</p></td><td class="pl-5 pt-8" colspan="8">

      <div class="flex gap-4">
{#if dnp3_Object_ID_group_counter != -1 && dnp3_Variation_ID_counter !=-1}

<Radio bind:group={dnp3_Qualifier_counter} value={0}>All</Radio>

<Radio bind:group={dnp3_Qualifier_counter} value={1}>Limited Quantity:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

<Radio bind:group={dnp3_Qualifier_counter} value={2}>Specified Point Indexes:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pl-1 pt-2"> - </p>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

</div>
      </td>



  </tr>



<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Polling Interval</p></td>
    <td class="pl-5 pt-8 w-18" colspan="1"><div class="flex gap-2">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>


  </tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>

    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>




  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Analog Input
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Object Group ID</TableHeadCell>
    <TableHeadCell class="w-18">Variation ID</TableHeadCell>
    <TableHeadCell class="w-18">Qualifier</TableHeadCell> 
    <TableHeadCell class="w-18">Polling Interval</TableHeadCell>                     
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">30_Analog Input</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">0_Any Variations</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">All</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">31_Frozen Analog Input</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3_32-Bit Frozen Analog Input With Time Of Freeze</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Point Index: 7-8</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test3</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">32_Analog Input Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">8_Long Floating Point Analog Input Event With Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity:6</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test4</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">33_Frozen Analog Input Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3_32-Bit Frozen Analog Event With Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity:6</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>





 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_object_trigger_analog_input()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>

  </Table>



<Modal bind:open={dnp3Object_modal_analog_input} size="xl" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Object Group ID</p></td>


    <td class="pl-5 pt-5" colspan="6"><div class="flex gap-4">

<Radio bind:group={dnp3_Object_ID_group_analog_input} value={30}>30_Analog Input</Radio>
<Radio bind:group={dnp3_Object_ID_group_analog_input} value={31}>31_Frozen Analog Input</Radio>
<Radio bind:group={dnp3_Object_ID_group_analog_input} value={32}>32_Analog Input Event</Radio>
<Radio bind:group={dnp3_Object_ID_group_analog_input} value={33}>33_Frozen Analog Input Event</Radio>

</div></td>


  </tr>


<tr>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Variation ID</p></td>

<td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={dnp3_Variation_ID_analog_input}>

{#if dnp3_Object_ID_group_analog_input ==30}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Analog Input</option>
<option value={2}>2_16 Bit Analog Input</option>
<option value={3}>3_32 Bit Analog Input Without Flag</option>
<option value={4}>4_16 Bit Analog Input Without Flag</option>
<option value={5}>5_Short Floating Point Analog Input</option>
<option value={6}>6_Long Floating Point Analog Input</option>
{:else if dnp3_Object_ID_group_analog_input == 31}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Frozen Analog Input</option>
<option value={2}>2_16 Bit Frozen Analog Input</option>
<option value={3}>3_32 Bit Frozen Analog Input With Time Of Freeze</option>
<option value={4}>4_16 Bit Frozen Analog Input With Time Of Freeze</option>
<option value={5}>5_32 Bit Frozen Analog Input Without Flag</option>
<option value={6}>6_16 Bit Frozen Analog Input Without Flag</option>
<option value={7}>7_Short Floating Point Frozen Analog Input</option>
<option value={8}>8_Long Floating Point Frozen Analog Input</option>
{:else if dnp3_Object_ID_group_analog_input == 32}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32-Bit Analog Input Event Without Time</option>
<option value={2}>2_16 Bit Analog Input Event Without Time</option>
<option value={3}>3_32-Bit Analog Input Event With Time</option>
<option value={4}>4_16 Bit Analog Input Event With Time</option>
<option value={5}>5_Short Floating Point Analog Input Event</option>
<option value={6}>6_Long Floating Point Analog Input Event</option>
<option value={7}>7_Short Floating Point Analog Input Event With Time</option>
<option value={8}>8_Long Floating Point Analog Input Event With Time</option>
{:else if dnp3_Object_ID_group_analog_input == 33}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32-Bit Frozen Analog Input Event Without Time</option>
<option value={2}>2_16 Bit Frozen Analog Input Event Without Time</option>
<option value={3}>3_32-Bit Frozen Analog Input Event With Time</option>
<option value={4}>4_16 Bit Frozen Analog Input Event With Time</option>
<option value={5}>5_Short Floating Point Frozen Analog Input Event</option>
<option value={6}>6_Long Floating Point Frozen Analog Input Event</option>
<option value={7}>7_Short Floating Point Frozen Analog Input Event With Time</option>
<option value={8}>8_Long Floating Point Frozen Analog Input Event With Time</option>


{/if}





</select>


</td>


  </tr>




<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Qualifier</p></td><td class="pl-5 pt-8" colspan="8">

      <div class="flex gap-4">
{#if dnp3_Object_ID_group_analog_input != -1 && dnp3_Variation_ID_analog_input !=-1}

<Radio bind:group={dnp3_Qualifier_analog_input} value={0}>All</Radio>

<Radio bind:group={dnp3_Qualifier_analog_input} value={1}>Limited Quantity:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

<Radio bind:group={dnp3_Qualifier_analog_input} value={2}>Specified Point Indexes:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pl-1 pt-2"> - </p>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

</div>
      </td>



  </tr>





<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Polling Interval</p></td>
    <td class="pl-5 pt-8 w-18" colspan="1"><div class="flex gap-2">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>


  </tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>

    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>





  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Analog Output
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Object Group ID</TableHeadCell>
    <TableHeadCell class="w-18">Variation ID</TableHeadCell>
    <TableHeadCell class="w-18">Qualifier</TableHeadCell> 
    <TableHeadCell class="w-18">Polling Interval</TableHeadCell>                     
  </TableHead>
  <TableBody>



    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">40_Analog Output</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">0_Any Variations</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">All</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>





    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

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
<input type="checkbox"  >
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Test2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">42_Analog Output Event</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">8_Long Floating Point Analog Output Event With Time</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">Limited Quantity:6</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">3000 ms</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>


 <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_object_trigger_analog_output()}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>

    </TableBodyRow>



  </TableBody>

  </Table>



<Modal bind:open={dnp3Object_modal_analog_output} size="xl" class="w-full" autoclose>
<form action="#">
<label>

  <input type="checkbox"  >

  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Object Group ID</p></td>


    <td class="pl-5 pt-5" colspan="6"><div class="flex gap-4">

<Radio bind:group={dnp3_Object_ID_group_analog_output} value={40}>40_Analog Output</Radio>
<Radio bind:group={dnp3_Object_ID_group_analog_output} value={42}>42_Analog Output Event</Radio>

</div></td>


  </tr>


<tr>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Variation ID</p></td>

<td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={dnp3_Variation_ID_analog_output}>

{#if dnp3_Object_ID_group_analog_output ==40}
<option value={0}>0_Any Variation</option>
<option value={1}>1_32 Bit Analog Output</option>
<option value={2}>2_16 Bit Analog Output</option>
<option value={3}>3_Short Floating Point Analog Output</option>
<option value={4}>4_Long Floating Point Analog Output</option>
{:else if dnp3_Object_ID_group_analog_output == 42}
<option value={0}>0_Any Variation</option>
<option value={3}>3_32-Bit Analog Output Event With Time</option>
<option value={4}>4_16 Bit Analog Output Event With Time</option>
<option value={7}>7_Short Floating Point Analog Output Event With Time</option>
<option value={8}>8_Long Floating Point Analog Output Event With Time</option>


{/if}





</select>


</td>


  </tr>




<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Qualifier</p></td><td class="pl-5 pt-8" colspan="8">

      <div class="flex gap-4">
{#if dnp3_Object_ID_group_analog_output != -1 && dnp3_Variation_ID_analog_output !=-1}

<Radio bind:group={dnp3_Qualifier_analog_output} value={0}>All</Radio>

<Radio bind:group={dnp3_Qualifier_analog_output} value={1}>Limited Quantity:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

<Radio bind:group={dnp3_Qualifier_analog_output} value={2}>Specified Point Indexes:</Radio>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pl-1 pt-2"> - </p>
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

</div>
      </td>



  </tr>





<tr>
      <td><p class="pl-10 pt-8 text-lg font-light text-right">Polling Interval</p></td>
    <td class="pl-5 pt-8 w-18" colspan="1"><div class="flex gap-2">
      <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>


  </tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>
    <td class="pl-20"></td>

    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>


  </AccordionItem>

</Accordion>
</TabItem>


</Tabs>