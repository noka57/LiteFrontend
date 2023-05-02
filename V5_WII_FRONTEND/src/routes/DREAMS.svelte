<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let EnableD=false;;
   let formModal = false;
   let formModal2 = false;
   let Sinterface="R485";
   let BR="9600";
   let Parity="None";
   let DB="8";
   let SB="1";
   let FC="None";
   let DNP3Port="20000";
   let DEmail="";
   let DPwd="";
   let SlaveID="3";
   let PointType="IR";
   let MAddr="0";
   let MQ="1";
   let MDisplay="BE";


</script>

<label>
  <input type=checkbox checked={EnableD}>
  Enable DREAMS
</label>


<p class="mt-10"></p>

<Tabs style="underline">
  <TabItem open title="Serial">
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell>Data Bits</TableHeadCell>
    <TableHeadCell class="w-22">Stop Bits</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

<Modal bind:open={formModal} autoclose={false} size="md" class="w-full">
  <form action="#">


<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">Serial Port 0</td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Sinterface} value='R485' >RS 485</Radio>
  <Radio bind:group={Sinterface} value='R232' >RS 232</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" bind:value={BR} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Parity} value='None' >None</Radio>
  <Radio bind:group={Parity} value='Even' >Even</Radio>
  <Radio bind:group={Parity} value='Odd' >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>
</table>
 </form>
</Modal>
 </TableBodyCell>

      <TableBodyCell class="!p-6 w-10"> Serial Port 0</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-10">8</TableBodyCell>
      <TableBodyCell class="w-22">1</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

<Modal bind:open={formModal2} autoclose={false} size="lg" class="w-full">
  <form action="#">


<p class="mt-10"></p>
 </form>
</Modal>
 </TableBodyCell>

      <TableBodyCell class="!p-6 w-10"> Serial Port 1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">115200</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-10">8</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

  </TabItem>
  <TabItem title="Modbus">
<Accordion>
 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Serial Port 0</span>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>
 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
  <TableBodyCell class="w-10">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>




 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">Line Current Phase B</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian</TableBodyCell>
    </TableBodyRow>




 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase C</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>




 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">Line Current Phase N</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">Line Voltage Phase AB</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
  <TableBodyCell class="w-10">4</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>



 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">Line Voltage Phase BC</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">Line Voltage Phase AC</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>




 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">實功</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">虛功</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">功率因數</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">4</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">頻率</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">5</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">累積電量</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">6</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian Byte Swap</TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>


 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Serial Port 1</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">變流器功率因數設定值</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian Byte Swap</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">變流器實功設定值</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">變流器虛功設定值</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">變流器Vpset設定值</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">1-25變流器是否成功接受控制</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">4</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">26-50變流器是否成功接受控制</TableBodyCell>
  <TableBodyCell class="w-10">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">5</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Big-Endian Byte Swap</TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>

 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Option</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
  <TableBodyCell class="w-10">電表額外數值</TableBodyCell>
  <TableBodyCell class="w-10">3</TableBodyCell>
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Little-Endian Byte Swap</TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>


 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Value List</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Value</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase B</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase C</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase N</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Voltage Phase AB</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Voltage Phase BC</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">Line Voltage Phase AC</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>



    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">實功</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>



    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">虛功</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">功率因數</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">頻率</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">累積電量</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">變流器功率因數設定值</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">變流器實功設定值</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>


        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">變流器虛功設定值</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

            <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">變流器Vpset設定值</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">1-25變流器是否成功接受控制</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

        <TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">26-50變流器是否成功接受控制</TableBodyCell>
  <TableBodyCell class="w-10">100</TableBodyCell>
    </TableBodyRow>

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">電表額外數值</TableBodyCell>
  <TableBodyCell class="w-10">200</TableBodyCell>
    </TableBodyRow>

  </TableBody>
</Table>
 </AccordionItem>

<Modal bind:open={formModal2} autoclose={false} size="md" class="w-full">
  <form action="#">


<p class="mt-10"></p>

<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">Line Current Phase A</td>



  </tr>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={PointType} value='IR' >Input Register</Radio>
  <Radio bind:group={PointType} value='HR' >Holding Register</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MQ} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


  <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Display</p>

  </td>

    <td class="pl-5 pt-5"><div class="gap-4">
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
    <td><Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>
 </form>
</Modal>
</Accordion>


  </TabItem>

    <TabItem title="DNP3">
    <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DNP3Port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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

    <TabItem title="Restful">

     <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Email</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DEmail} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DPwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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


</Tabs>