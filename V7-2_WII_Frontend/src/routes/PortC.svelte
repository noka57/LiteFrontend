<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

   let formModal=false;


  let formModalsm=false;
  let Sinterface="R485";
  let BR="9600";
  let Parity="None";
  let DB="8";
  let SB="1";

  let smenable=true;

</script>
<Tabs style="underline">
  <TabItem open title="LAN">



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell class="w-18">Profile Name</TableHeadCell>
    <TableHeadCell class="w-18">IP</TableHeadCell>
    <TableHeadCell class="w-18">Status</TableHeadCell>

     </TableHead>
  <TableBody>
    <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
               <TableBodyCell class="!p-1">            
</TableBodyCell>

      <TableBodyCell class="!p-1 w-4">LAN 1</TableBodyCell>
      <TableBodyCell class="w-18">127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-18">Active?(On? LinkUp?)</TableBodyCell>



    </TableBodyRow>

 <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
               <TableBodyCell class="!p-1">            
</TableBodyCell>

      <TableBodyCell class="!p-1 w-4">LAN 2</TableBodyCell>
      <TableBodyCell class="w-18">127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-18">Active?(On? LinkUp?)</TableBodyCell>



    </TableBodyRow>
     <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
               <TableBodyCell class="!p-1">            
</TableBodyCell>

      <TableBodyCell class="!p-1 w-4">LAN 3</TableBodyCell>
      <TableBodyCell class="w-18">127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-18">Active?(On? LinkUp?)</TableBodyCell>



    </TableBodyRow>
     <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
               <TableBodyCell class="!p-1">            
</TableBodyCell>

      <TableBodyCell class="!p-1 w-4">LAN 4</TableBodyCell>
      <TableBodyCell class="w-18">127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-18">Active?(On? LinkUp?)</TableBodyCell>



    </TableBodyRow>
     <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
               <TableBodyCell class="!p-1">            
</TableBodyCell>

      <TableBodyCell class="!p-1 w-4">LAN 5</TableBodyCell>
      <TableBodyCell class="w-18">127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-18">Active?(On? LinkUp?)</TableBodyCell>



    </TableBodyRow>


<tr class="pt-5">
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



  </TabItem>

  <TabItem title="COM">

<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
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
      <TableBodyCell class="!p-6 w-10">ComPort1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">ComPort2</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
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
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">ComPort1</td>

</tr>

<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Sinterface} value='R485' >RS 485</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" bind:value={BR} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Parity} value='None' >None</Radio>
  <Radio bind:group={Parity} value='Even' >Even</Radio>
  <Radio bind:group={Parity} value='Odd' >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


  
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


  </TabItem>


  <TabItem title="DI">

  </TabItem>

    <TabItem title="DO">

  </TabItem>

 </Tabs>