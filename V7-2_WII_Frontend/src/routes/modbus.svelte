<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let formModalsm=false;
  let Sinterface="R485";
  let BR="9600";
  let Parity="None";
  let DB="8";
  let SB="1";
  let MM_SerialProfile;
  let MS_SerialProfile;
  let RM_Name="Modbus_Master_S0";

  let smenable=true;

  let formModaltm=false;
  let formModalmvar=false;


   let SlaveID="2";
   let PointType="IR";
   let MAddr="0";
   let MQ="1";
   let MDisplay="BE";
   let mvarenable=true;
   let M_Name="Line Current Phase A";
   let PRate;
  let RMIntervalP;
  let RMRTimeout;
   let Vrole;


  let MPList = [
    {value:"Test1", name: "Modbus_Master_S0"},
    {value:"Test2", name: "Modbus_Master_S1"},
    {value:"Test3", name: "Modbus_Master_T0"},
  ];


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
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> RTU_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> ComPort1</TableBodyCell>
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
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


   
<Modal bind:open={formModalsm} autoclose={false} size="md" class="w-full">
<label>
  <input class="center" type=checkbox checked={smenable}>
  Enable
</label>

<p class="mt-4"></p>
<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={RM_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">
      <select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={MM_SerialProfile}>
<option disabled="" value="">None</option>
<option value="1" >ComPort1</option>
<option value="1" >ComPort2</option>
      </td>



  </tr>




      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>
</table>

</Modal>


</Table>

</AccordionItem>

  <AccordionItem {defaultClass}>

    <span slot="header" class="pl-4">
    Slave
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>
   
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> RTU_Slave_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> ComPort2</TableBodyCell>

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
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


   
<Modal bind:open={formModalsm} autoclose={false} size="md" class="w-full">
<label>
  <input class="center" type=checkbox checked={smenable}>
  Enable
</label>

<p class="mt-4"></p>
<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={RM_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">
      <select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={MM_SerialProfile}>
<option disabled="" value="">None</option>
<option value="1" >ComPort1</option>
<option value="1" >ComPort2</option>

      </td>



  </tr>


      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>
</table>

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
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>   
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => formModaltm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1">            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> LAN1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> TCP_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => formModaltm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> LAN2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> TCP_Master_2</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 192.168.127.254</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>

    </TableBodyRow>


 <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>

     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
 <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Slave
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell>Listen Port</TableHeadCell>
    <TableHeadCell>Max Connection Count</TableHeadCell>

  </TableHead>
  <TableBody>



 <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => formModaltm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> LAN2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> TCP_Slave_1</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">10</TableBodyCell>

    </TableBodyRow>


 <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>

     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
 <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

</AccordionItem>

</Accordion>

     </TabItem>

    <TabItem title="Variable">

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>


 <Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="!p-1">Variable Name</TableHeadCell>
    <TableHeadCell>Profile</TableHeadCell>
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
 <TableBodyRow>
   <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
       <TableBodyCell class='w-4'>1</TableBodyCell>
      <TableBodyCell class="!p-1 w-4">1</TableBodyCell>
  <TableBodyCell class="!p-1 w-18">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">TCP_Master_1</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
<TableBodyCell class="w-18">1000 ms</TableBodyCell>
    <TableBodyCell class="w-18">20 ms</TableBodyCell>
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
    </TableBodyRow>






 <TableBodyRow>
   <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-1 w-4">2</TableBodyCell>
  <TableBodyCell class="!p-1 w-18">RTU-DI Status</TableBodyCell>
  <TableBodyCell class="w-10">RTU_Master_1</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
        <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
            <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
    </TableBodyRow>





     <TableBodyRow>
   <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-1 w-4">3</TableBodyCell>
  <TableBodyCell class="!p-1 w-18">TCP-Line Current Phase B</TableBodyCell>  
  <TableBodyCell class="w-10">TCP_Master_1</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Input Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
        <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
      <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
    </TableBodyRow>


     <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"> </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-4 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>

<Modal bind:open={formModalmvar} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mvarenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={M_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MPList} placeholder="None" /></td>

</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={PointType} value='Coil' >Coil</Radio>
  <Radio bind:group={PointType} value='DI' >Discrete Input</Radio>
  <Radio bind:group={PointType} value='IR' >Input Register</Radio>
  <Radio bind:group={PointType} value='HR' >Holding Register</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MQ} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={MDisplay} value='BE' >Big Endian</Radio>
  <Radio bind:group={MDisplay} value='LE' >Little Endian</Radio>
  <Radio bind:group={MDisplay} value='BEBS' >Big Endian Byte Swap</Radio>
  <Radio bind:group={MDisplay} value='LEBS' >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={RMRTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={PRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Delay Between Polls</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={RMIntervalP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

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
    <td>
<Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>

</Modal>


</Table>   
</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Slave
    </span>
<Table>
<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>



 <TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">TCP-DI Status</TableBodyCell>
  <TableBodyCell class="w-10">TCP_Slave_1</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
    <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>




<TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
  <TableBodyCell class="w-18">RTU-Line Current Phase B</TableBodyCell>
  <TableBodyCell class="w-10">RTU_Slave_1</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Input Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">Big Endian Byte Swap</TableBodyCell>
    </TableBodyRow>





     <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>

<Modal bind:open={formModalmvar} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mvarenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={M_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MPList} placeholder="None" /></td>

</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={PointType} value='Coil' >Coil</Radio>
  <Radio bind:group={PointType} value='DI' >Discrete Input</Radio>
  <Radio bind:group={PointType} value='IR' >Input Register</Radio>
  <Radio bind:group={PointType} value='HR' >Holding Register</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MQ} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={MDisplay} value='BE' >Big Endian</Radio>
  <Radio bind:group={MDisplay} value='LE' >Little Endian</Radio>
  <Radio bind:group={MDisplay} value='BEBS' >Big Endian Byte Swap</Radio>
  <Radio bind:group={MDisplay} value='LEBS' >Little Endian Byte Swap</Radio>
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
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>

</Modal>


</Table>   

</AccordionItem>
</Accordion>

    </TabItem>

        <TabItem title="Gateway">
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">T_to_R test</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">TCP_Slave_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">RTU_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1000 ms</TableBodyCell>

    </TableBodyRow>


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
    From RTU To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">R_to_T test</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">RTU_Slave_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">TCP_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1000 ms</TableBodyCell>


    </TableBodyRow>


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
    From RTU To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">R_to_R test</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">RTU_Slave_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">RTU_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1000 ms</TableBodyCell>


    </TableBodyRow>


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
    From TCP To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">T_to_T test</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">TCP_Slave_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">TCP_Master_1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1000 ms</TableBodyCell>


    </TableBodyRow>


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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

</Accordion>
</TabItem>


</Tabs>