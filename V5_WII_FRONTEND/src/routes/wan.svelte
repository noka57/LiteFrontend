<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let pin="";
   let apn="";
   let un="";
   let pd="";

   let selected;
  let countries = [
    {value:"us", name: "AUTO"},
    {value:"ca", name: "CHAP"},
    {value:"fr", name: "PAP"},
  ];

  let selected2;
  let countries2 = [
    {value:"us2", name: "3G"},
    {value:"ca2", name: "4G"},
    {value:"fr2", name: "5G"},
    {value:"f2r2", name: "5GNR-SA"},
  ]


  let selected3;
  let countries3 = [
    {value:"us3", name: "SIM A First"},
    {value:"ca3", name: "SIM B First"},
    {value:"fr3", name: "SIM A Only"},
    {value:"f3r3", name: "SIM B Only"},
  ]


  let selected4;
  let countries4 = [
    {value:"us4", name: "Reset Modem"},
    {value:"ca4", name: "Power Cycle Modem"},
  ]


  let selected5;
  let countries5 = [
    {value:"us5", name: "PING"},
    {value:"ca5", name: "DNS Query"},
    {value:"fr5", name: "DNS Packet Check"},
  ]


  let selected6;
  let countries6 = [
    {value:"us6", name: "None"},
    {value:"ca6", name: "DNS 1"},
    {value:"fr6", name: "DNS 2"},
    {value:"ca66", name: "Gateway"},
    {value:"u66", name: "Other Host"},
  ]

  let a;
  let openDetailStatus = false;

  function handleClick() {
        openDetailStatus=!openDetailStatus;
  }

</script>

<Tabs style="underline">
  <TabItem open title="General Status">
  <p>TBD</p>
  </TabItem>
  <TabItem title="Cellular WAN-1">
<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General Status</div>
<Table>
  <TableHead>
    <TableHeadCell class="text-center">Index</TableHeadCell>
    <TableHeadCell class="text-center">Modem Status</TableHeadCell>
    <TableHeadCell class="text-center">Modem Model</TableHeadCell>
    <TableHeadCell class="text-center">IMSI</TableHeadCell>
    <TableHeadCell class="text-center">Registration</TableHeadCell>
  </TableHead>
 
  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"  on:click={handleClick}>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">1</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">Ready</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">EG25</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">460015726101417</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">Registrated to home network</td>
  </tr>

{#if openDetailStatus}


 <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Phone Number</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>+886912345678</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Status</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>Connected</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">SIM Status</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>Active</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Active SIM</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>SIM A</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Signal Strength</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>RSSI</TableBodyCell>
      </TableBodyRow>



      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Registered Mobile Operator</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>PLMN ID</TableBodyCell>
      </TableBodyRow>




      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">IMSI</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>ID</TableBodyCell>
      </TableBodyRow>




      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connect State</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>PIN</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connected Network Type</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>LTE</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connected Band</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>B6</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Vendor</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>ven</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Model</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>ven</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Firmware Version</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>1.0.0</TableBodyCell>
      </TableBodyRow>

{/if}


</Table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Basic Settings</span>
    <table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">PIN</p></td><td class="pl-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-center">Automatic APN Selection</p></td><td class="pl-5 pt-5"><Toggle></Toggle></td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">APN</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="manually input or auto"></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Authentication</p></td><td class="pl-5 pt-5"><Select class="mt-2" items={countries} bind:value={selected} placeholder="None"/></td>
    </tr>

    </table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Advanced Settings</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td><td class="pl-5"><Select class="mt-2" items={countries2} bind:value={selected2} placeholder="Auto"/></td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-center">Band Lock</p></td><td class="pl-5 pt-5"><Toggle></Toggle></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Initial AT Cmd Set</p></td><td class="pl-5 pt-5"><input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>

    </table>
  </AccordionItem>

   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">SIM Policy</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td><td class="pl-5"><Select class="mt-2" items={countries3} bind:value={selected3} placeholder="None"/></td>
    <td />
        <td />
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Checking Rules</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>
              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Fail Connections
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times (1-10)
              </td> 
              </tr>


              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              RSSI Monitor
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1" class="font-medium">Enable Threshold</label>
              -
              </td>

              <td>
              
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (-90~-113 dBm)
              </td>
              </tr>



              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Network Service
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
 <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike">
  <label for="vehicle2" class="font-medium">Enable Loss LTE Signal</label>
              
              </td>

              <td>
              
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (1-30 minutes)
              </td>
              </tr>



              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Roaming Service
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
 <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike">
  <label for="vehicle3" class="font-medium">Enable Timeout</label>
              </td>

              <td>
              
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (1-30 minutes)
              </td>
              </tr>
            </table>
        </td>
    <tr>




    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">SIM failover Treatment</p></td><td class="pl-5"><Select class="mt-2" items={countries4} bind:value={selected4} placeholder="None"/></td>
    </tr>
    </table>
  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">EWLAP-CWAN</span>
<table>
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-center">EWLAP</p></td><td class="pl-5 pt-5"><Toggle></Toggle></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Checking Rules</p></td><td class="pl-5"><Select class="mt-2" items={countries5} bind:value={selected5} placeholder="None"/></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Checking Target 1/2</p></td><td class="pl-5"><Select class="mt-2" items={countries6} bind:value={selected6} placeholder="None"/></td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Checking Period</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              seconds
              </td> 
              </tr>



              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Retry Count
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              mini seconds
              </td> 
              </tr>
            </table>
        </td>
    <tr>

    </table>
  </AccordionItem>


  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">AT Debug</span>
<div class='mb-6'>
  <Label for='default-input' class='block mb-2'>Command</Label>
  <Input id='default-input' placeholder="Command" />
</div>


<Label for="textarea-id" class="mb-2">Result</Label>
<Textarea id="textarea-id" placeholder="Result" rows="4" name="message"/>
<div class="flex flex-wrap gap-2">
<Button>Send</Button>
</div>

  </AccordionItem>
</Accordion>
  </TabItem>


  <TabItem title="Ethernet WAN">
  <p>TBD</p>
  </TabItem>



  <TabItem title="WAN Redundancy
Policy">
  <p>TBD</p>
  </TabItem>


  <TabItem title="Fare Saving Policy">
  <p>TBD</p>
  </TabItem>
  
</Tabs>
