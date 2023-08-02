<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let natlo=false;
   let vs=false;
   let formModal = false;
   let wanIfce="All";
   let sevIP="";
   let sourceIP="";
   let proto="TC";
   let pubport="SPort";
  let SinglePubP="";
  let RangePubPF="";
  let RangePubPE="";

   let priport="SPort";
  let SinglePriP="";
  let RangePriPF="";
  let RangePriPE="";
   let formModal2 = false;
    let vc=false;
    let GIP="";
    let LIP="";
    let dmz=false;
    let DMZInfce="All";
    let DMZHost="";
</script>


<Tabs style="underline">
  <TabItem open title="Loopback">
<table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">NAT Loopback</p>

  </td>

    <td class="pl-5"><div class="flex gap-4">
<label>
  <input type=checkbox checked={natlo}>
  Enable
</label>

</div></td>
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

<TabItem title="Virtual Server">
<label>
  <input type=checkbox checked={vs}>
  Enable Virtual Server
</label>

<p class="mt-10"></p>
  <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>WAN Interface</TableHeadCell>
    <TableHeadCell>Server IP</TableHeadCell>
    <TableHeadCell>Source IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Public Port</TableHeadCell>
    <TableHeadCell>Private Port</TableHeadCell>
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
  <input class="center" type=checkbox checked={vs}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">WAN Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={wanIfce} value='All' >All</Radio>
  <Radio bind:group={wanIfce} value='Cel' >Cellular WAN-1</Radio>
  <Radio bind:group={wanIfce} value='Eth' >Ethernet WAN</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={sevIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={sourceIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={proto} value='TC' >TCP</Radio>
  <Radio bind:group={proto} value='UD' >UDP</Radio>
  <Radio bind:group={proto} value='TCUD' >TCP & UDP</Radio>
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Public Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={pubport} value='SPort' >Single Port</Radio><input type="text" bind:value={SinglePubP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={pubport} value='PortR' >Port Range</Radio><input type="text" bind:value={RangePubPF} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="text" bind:value={RangePubPE} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Private Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={priport} value='SPort' >Single Port</Radio><input type="text" bind:value={SinglePriP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={priport} value='PortR' >Port Range</Radio><input type="text" bind:value={RangePriPF} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="text" bind:value={RangePriPE} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


  </TabItem>


<TabItem title="Virtual Computer">
<label>
  <input type=checkbox checked={vs}>
  Enable Virtual Computer
</label>

<p class="mt-10"></p>
  <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-10">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-10">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Global IP</TableHeadCell>
    <TableHeadCell class="w-10">Local IP</TableHeadCell>


  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

<Modal bind:open={formModal2} autoclose={false} size="md" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={vs}>
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Global IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={GIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={LIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
      <TableBodyCell class="w-40"></TableBodyCell>
      <TableBodyCell class="w-40"></TableBodyCell>
    </TableBodyRow>


     <tr>
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
  <TabItem title="DMZ">

<label>
  <input type=checkbox checked={dmz}>
  Enable DMZ
</label>

<table>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={DMZInfce} value='All' >All</Radio>
  <Radio bind:group={DMZInfce} value='CW' >Cellular WAN</Radio>
  <Radio bind:group={DMZInfce} value='EW' >Ethernet WAN</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DMZ Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DMZHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


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
</table>
  </TabItem>
</Tabs>




