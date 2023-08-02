<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let EnableFilter=false;
   let IPFilterType="BL";
   let formModal = false;
   let MACFilterType="BL";
   let formModal2 = false;
   let FIfce="Any";
   let TIfce="Any";
   let sourceIP="";
   let DIP="";
   let proto="Any";
   let SingleSP="";
   let RangeSPF="";
   let RangeSPE="";
   let SingleDP="";
   let RangeDPF="";
   let RangeDPE="";
   let sport="Sport";
   let dport="Sport";
   let ipf=false;
   let MAC="";
   let macf=false;
</script>


<Tabs style="underline">
  <TabItem open title="General">
<table>
  <tr>
<label>
  <input type=checkbox checked={EnableFilter}>
  Enable Filter
</label>
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

  <TabItem title="IP Filter">
<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">IP Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
      <Radio bind:group={IPFilterType} value='BL' >Black List</Radio>
  <Radio bind:group={IPFilterType} value='WL' >White List</Radio>

</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>From Interface</TableHeadCell>
    <TableHeadCell>To Interface</TableHeadCell>
    <TableHeadCell>Source IP</TableHeadCell>
    <TableHeadCell>Destination IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Destination Port</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


<Modal bind:open={formModal} autoclose={false} size="lg" class="w-full">
  <form action="#">


<label>
  <input class="center" type=checkbox checked={ipf}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">From Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={FIfce} value='Any' >Any</Radio>
  <Radio bind:group={FIfce} value='Lan' >LAN</Radio>
  <Radio bind:group={FIfce} value='Cel' >Cellular WAN-1</Radio>
  <Radio bind:group={FIfce} value='Eth' >Ethernet WAN</Radio>
</div></td>
</tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">To Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={TIfce} value='Any' >Any</Radio>
  <Radio bind:group={TIfce} value='Lan' >LAN</Radio>
  <Radio bind:group={TIfce} value='Cel' >Cellular WAN-1</Radio>
  <Radio bind:group={TIfce} value='Eth' >Ethernet WAN</Radio>
</div></td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={sourceIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={proto} value='Any' >Any</Radio>
  <Radio bind:group={proto} value='TC' >TCP</Radio>
  <Radio bind:group={proto} value='UD' >UDP</Radio>
</div></td>
</tr>





 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={dport} value='SPort' >Single Port</Radio><input type="text" bind:value={SingleDP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={dport} value='PortR' >Port Range</Radio><input type="text" bind:value={RangeDPF} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="text" bind:value={RangeDPE} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>
 </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">

            </TableBodyCell>
                  <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>
  </TabItem>


  <TabItem title="MAC Filter">

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
      <Radio bind:group={MACFilterType} value='BL' >Black List</Radio>
  <Radio bind:group={MACFilterType} value='WL' >White List</Radio>

</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-36">MAC Address</TableHeadCell>
</TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


<Modal bind:open={formModal2} autoclose={false} size="lg" class="w-full">
  <form action="#">


<label>
  <input class="center" type=checkbox checked={macf}>
  Enable
</label>

<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAC} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>

    </form>
</Modal>
 </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">

            </TableBodyCell>
                  <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>



    <tr>
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

</Tabs>
