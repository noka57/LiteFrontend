<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let pin="";
   let apn="";
   let un="";
   let pd="";
   let ptime="60";
   let rcount="5";
   let interval="1500";

   let selected="auto";
   let selected2="auto";

  let selected3="SimAF";

  let selected4="None";

  let selected5="PING";

  let selected6="dns1";



  let selected7="DClient";
  let selected5_1="PING";
  let selected6_1="dns1";

  let selected8="Off";

  let selected5_2="PING";
  let selected6_2="dns1";



  let selected9="cw1";
  let selected9_1="cw1";
  let selected9_2="cw1";


  let selected10="ew";


  let selected11="cw1";

  let selected10_1="ew";


  let selected11_1="cw1";


  let selected12="Off";


  let selected13="Sch";
  let countries13 = [
    {value:"Sch", name: "Schedule"},
    {value:"Peri", name: "Period"},
  ]


  let selected14="Hour";
  let countries14 = [
    {value:"Day", name: "Day(s)"},
    {value:"Hour", name: "Hour(s)"},
    {value:"Minute", name: "Minute(s)"},
  ]


  let selected15="TX";
  let countries15 = [
    {value:"TX", name: "TX"},
    {value:"RX", name: "RX"},
    {value:"TRX", name: "TX+RX"},
  ]


  let a;
  let openDetailStatus = false;

  function handleClick() {
        openDetailStatus=!openDetailStatus;
  }

   let isActive = true;

   let isActive2 = true;


   let isActive3 = true;

   let isActive4 = true;

   let isActive5 = true;

</script>

<Tabs style="underline">
  <TabItem open title="General Status">
  <Table striped={true}>
  <TableHead>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell>Cellular-WAN-1</TableHeadCell>
    <TableHeadCell>Ethernet WAN</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Status</TableBodyCell>
      <TableBodyCell>Connect</TableBodyCell>
      <TableBodyCell>N.A</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>IP Address</TableBodyCell>
      <TableBodyCell>10.23.34.3</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Gateway</TableBodyCell>
      <TableBodyCell>10.23.34.1</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>DNS 1</TableBodyCell>
      <TableBodyCell>168.95.1.1</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>DNS 2</TableBodyCell>
      <TableBodyCell>8.8.8.8</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>SIM Status</TableBodyCell>
      <TableBodyCell>SIM A Ready</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Role</TableBodyCell>
      <TableBodyCell>Primary</TableBodyCell>
      <TableBodyCell>Backup</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Error Reason</TableBodyCell>
      <TableBodyCell>SIM missing</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell colspan="2">Cellular Status</TableBodyCell>
      <TableBodyCell rowspan="6">N.A</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Register Status</TableBodyCell>
      <TableBodyCell>Registered</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Network Type</TableBodyCell>
      <TableBodyCell>4G</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Band</TableBodyCell>
      <TableBodyCell>6</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Operator</TableBodyCell>
      <TableBodyCell>CHT</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>RSSI</TableBodyCell>
      <TableBodyCell>-85dBm</TableBodyCell>
    </TableBodyRow>



  </TableBody>
</Table>
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
    <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
    </td>
    </tr>
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-center">Automatic APN Selection</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={isActive} /></td>
    </tr>

{#if !isActive}
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">APN</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Username</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>

    <tr>
    <td>

    <p class="pl-40 pt-5 text-lg font-light text-right">Authentication</p></td>



    <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={selected} value='auto' >AUTO</Radio>
  <Radio bind:group={selected} value='chap' >CHAP</Radio>
  <Radio bind:group={selected} value='pap' >PAP</Radio>

</div>


    </td>

{/if}
    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    </table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Advanced Settings</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td>  
    <td class="pl-5">
<div class="flex gap-4">
  <Radio bind:group={selected2} value='auto' >AUTO</Radio>
  <Radio bind:group={selected2} value='3g' >3G</Radio>
  <Radio bind:group={selected2} value='4g' >4G</Radio>
  <Radio bind:group={selected2} value='5g' >5G</Radio>
  <Radio bind:group={selected2} value='5gnrsa' >5GNR-SA</Radio>
</div>
</td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Extra AT Command </p></td><td class="pl-5 pt-5"><input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Band Lock</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={isActive2} /></td>
    </tr>

{#if isActive2}

 <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Band Scan and List</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={isActive3} /></td>
    </tr>
    
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">
    <input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
      </td>
    </tr>





    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Band Select: </p></td><td class="pl-5 pt-5"><input type="text" bind:value={un} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>
  
{/if}
        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>
  </AccordionItem>

   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">SIM Policy</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td>
 <td class="pl-5">
<div class="flex gap-4">
  <Radio bind:group={selected3} value='SimAF' >SIM A First</Radio>
  <Radio bind:group={selected3} value='SimBF' >SIM B First</Radio>
  <Radio bind:group={selected3} value='SimAO' >SIM A Only</Radio>
  <Radio bind:group={selected3} value='SimBO' >SIM B Only</Radio>

</div>
</td>
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
    <td><p class="pl-40 pt-5 text-lg font-light text-right">SIM failover Treatment</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected4} value='None' >None</Radio>
  <Radio bind:group={selected4} value='RM' >Reset Modem</Radio>
  <Radio bind:group={selected4} value='PCM'>Power Cycle Modem</Radio>


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
  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">EWLAP-CWAN</span>
<table>
    <tr>
    <td class="w-60"><p class="pl-40 pt-5 text-lg font-light text-right">EWLAP</p></td><td class="pl-5 pt-5"><Toggle bind:checked={isActive4}></Toggle></td>
    </tr>
{#if isActive4}

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Rules</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected5} value='PING' >PING</Radio>
  <Radio bind:group={selected5} value='DNSQ' >DNS Query</Radio>
  <Radio bind:group={selected5} value='DNSPC'>DNS Packet Check</Radio>


</div></td>

    </tr>


    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target 1/2</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected6} value='None' >None</Radio>
  <Radio bind:group={selected6} value='dns1' >DNS 1</Radio>
  <Radio bind:group={selected6} value='dns2'>DNS 2</Radio>
  <Radio bind:group={selected6} value='gw' >Gateway</Radio>
  <Radio bind:group={selected6} value='otherH'>Other Host</Radio>

</div></td>
    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
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
              Interval times
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
{/if}
    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
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
  <Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General Status</div>



<Table>
  <TableHead>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Connection Type</TableHeadCell>
    <TableHeadCell>Network Type</TableHeadCell>
    <TableHeadCell>IP Address</TableHeadCell>
    <TableHeadCell>Subnet Mask</TableHeadCell>
    <TableHeadCell>Gateway</TableHeadCell>
    <TableHeadCell>DNS</TableHeadCell>
    <TableHeadCell>MAC</TableHeadCell>
    <TableHeadCell>Connection Status</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>WAN</TableBodyCell>
      <TableBodyCell>PPPoE</TableBodyCell>
      <TableBodyCell>NAT</TableBodyCell>
      <TableBodyCell>10.18.81.235</TableBodyCell>
      <TableBodyCell>255.255.255.248</TableBodyCell>
      <TableBodyCell>10.18.81.236</TableBodyCell>
      <TableBodyCell>168.95.1.1/168.95.192.1</TableBodyCell>
      <TableBodyCell>00:E0:B3:12:34:56</TableBodyCell>
      <TableBodyCell>Connected</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

  </AccordionItem>


  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Basic Settings</div>
  <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Connection Type</p>

  </td>


  <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={selected7} value='Sip' >Static IP</Radio>
  <Radio bind:group={selected7} value='DClient' >DHCP Client</Radio>
  <Radio bind:group={selected7} value='PPP'>PPPoE</Radio>


</div></td>


  </tr>

{#if selected7=="Sip"}
  <tr>
      <td><p class="pl-40 pt-1 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

{/if}


{#if selected7=="PPP"}
  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

{/if}

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </AccordionItem>

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">EWLAP-Ethernet WAN</div>

<table>
    <tr>
    <td class="w-60"><p class="pl-40 pt-5 text-lg font-light text-right">EWLAP</p></td>
    <td class="pl-5 pt-5"><Toggle bind:checked={isActive5}></Toggle></td>
    </tr>
{#if isActive5}

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected5_1} value='PING' >PING</Radio>
  <Radio bind:group={selected5_1} value='DNSQ' >DNS Query</Radio>
  <Radio bind:group={selected5_1} value='DNSPC'>DNS Packet Check</Radio>


</div></td>

    </tr>





    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected6_1} value='None' >None</Radio>
  <Radio bind:group={selected6_1} value='dns1' >DNS 1</Radio>
  <Radio bind:group={selected6_1} value='dns2'>DNS 2</Radio>
  <Radio bind:group={selected6_1} value='gw' >Gateway</Radio>
  <Radio bind:group={selected6_1} value='otherH'>Other Host</Radio>

</div></td>

    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
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
<input type="text" bind:value={ptime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
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
<input type="text" bind:value={rcount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Interval times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="text" bind:value={interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              mini seconds
              </td> 
              </tr>
            </table>
        </td>
    <tr>
{/if}


    <tr>
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



  <TabItem title="WAN Redundancy
Policy">
 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Operation Mode</p>

  </td>

      <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={selected8} value='Off' >Off</Radio>
  <Radio bind:group={selected8} value='Aon' >Always On</Radio>
  <Radio bind:group={selected8} value='fo'>Fail Over</Radio>
  <Radio bind:group={selected8} value='fb' >Fail Back</Radio>


</div></td>


  </tr>

{#if selected8=="Aon"}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected9} value='cw1' >C-WAN-1</Radio>
  <Radio bind:group={selected9} value='ew' >E-WAN</Radio>


</div></td>


  </tr>

{:else if selected8=="fo"}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected9_1} value='cw1' >C-WAN-1</Radio>
  <Radio bind:group={selected9_1} value='ew' >E-WAN</Radio>
</div></td>

  </tr>
{:else if selected8=="fb"}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected9_2} value='cw1' >C-WAN-1</Radio>
  <Radio bind:group={selected9_2} value='ew' >E-WAN</Radio>
</div></td>

  </tr>
{/if}

{#if selected8=="fo" || selected8=="fb"}
    <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Backup WAN</p></td>
  {#if selected9_1=="cw1" && selected8=="fo"}


 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected10} value='ew' >E-WAN</Radio>
  </div></td>
  
  {:else if selected9_1=='ew'&& selected8=="fo"}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected11} value='cw1' >C-WAN-1</Radio>

</div></td>
  {:else if selected9_2=="cw1" && selected8=="fb"}

<td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected10_1} value='ew' >E-WAN</Radio>
</div></td>
  
  {:else if selected9_2=='ew'&& selected8=="fb"}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected11_1} value='cw1' >C-WAN-1</Radio>

</div></td>
{/if}

</tr>





 <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Payload Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected5_2} value='PING' >PING</Radio>
  <Radio bind:group={selected5_2} value='DNSQ' >DNS Query</Radio>
  <Radio bind:group={selected5_2} value='DNSPC'>DNS Packet Check</Radio>


</div></td>
    </tr>


    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target 1/2</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={selected6_2} value='None' >None</Radio>
  <Radio bind:group={selected6_2} value='dns1' >DNS 1</Radio>
  <Radio bind:group={selected6_2} value='dns2'>DNS 2</Radio>
  <Radio bind:group={selected6_2} value='gw' >Gateway</Radio>
  <Radio bind:group={selected6_2} value='otherH'>Other Host</Radio>

</div></td>
    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
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
              Interval times
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
{/if}


 <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </TabItem>


  <TabItem title="Fare Saving Policy">

<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Control Traffic Flow</div>


 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Control By</p>

  </td>


      <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={selected12} value='Off' >Off</Radio>
  <Radio bind:group={selected12} value='Time' >Time</Radio>
  <Radio bind:group={selected12} value='TA'>Traffic Amount</Radio>
  <Radio bind:group={selected12} value='DS' >Data Source</Radio>


</div></td>
<td/>
<td/>
<td/>
<td/>
  </tr>


  {#if selected12=="Time"}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Select</p>

  </td>

  <td class="pl-5">    <Select class="mt-2" items={countries13} bind:value={selected13}/>
  </td>

  </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Time(Per month)</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-5 text-lg font-light text-right">(DD:MM:HH)</td>
    </tr>


  {#if selected13=="Sch"}



    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5 text-lg font-light text-right">(DD:MM:HH)</td>
    </tr>

  {:else if selected13=="Peri"}
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
          <td class="pl-5 pt-5 text-lg font-light text-right"></td>
      <td class="pl-5 pt-5 text-lg font-light text-left">(MM:HH)</td>
    </tr>

     <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Period Interval</p>

  </td>


    <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
      <td class="pl-5 pt-5">    <Select class="mt-2" items={countries14} bind:value={selected14}/></td>


  </tr>

  {/if}


  {:else if selected12=="TA"}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Day of Month</p>

  </td>

 <td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">(1-31)</td>

  </tr>


  <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Amount By</p>

  <td class="pl-5 pt-5">    <Select class="mt-2" items={countries15} bind:value={selected15}/>
  </td>

  <td class="pl-5 pt-5"> With </td>

   <td class="pl-5 pt-5">
  <input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Mbs </td>
  </tr>

  {:else if selected12=="DS"}

   <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Disconnect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
<td></td>
  </tr>

   <tr>

  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center">
  RX for
  </td>

   <td class="pl-5 pt-5">
  <input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>
  <td></td>
  </tr>




<tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Re-Connect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
  <td></td>

  </tr>


     <tr>
  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center" colspan="2">
Once Rx of Modbus and Disconnect lasting time
  </td>
   <td class="pl-5 pt-5">
  <input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>

  </tr>

  {/if}



 <tr>
    <td/>
<td/>
<td/>
    <td/>
<td/>
<td/>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



  </table>


    </AccordionItem>
  </Accordion>

  </TabItem>


    <TabItem title="Test">

test


<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<style type="text/css">
  .st0{fill:#1A87C9;}
  .st1{fill:#FFFFFF;}
  .st2{font-family:'OpenSans';}
  .st3{font-size:6px;}
</style>
<g>
  <path class="st0 w-24 h-24" d="M1.3,15.3c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V1.4c0-0.4,0.1-0.7,0.4-1S0.9,0,1.3,0h38.1
    c0.4,0,0.7,0.1,1,0.4s0.4,0.6,0.4,1V14c0,0.4-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4L1.3,15.3L1.3,15.3z"/>
  <g>
    <text transform="matrix(1.0002 0 0 1 17.7137 9.9881)" class="st1 st2 st3">GPS</text>
  </g>
  <path class="st1" d="M14.8,4.9c-0.1-0.5-0.3-0.9-0.7-1.2c-0.5-0.5-1.1-0.8-1.8-0.9c-0.1,0-0.2,0-0.4,0c0,0-0.1,0-0.2,0
    c-0.1,0,0,0-0.1,0c-0.8,0-1.4,0.3-2,0.7c-0.5,0.4-0.8,1-0.8,1.6c0,0.3,0,0.7,0.1,1c0.2,0.6,0.4,1.2,0.7,1.7
    c0.5,0.8,1.1,1.6,1.7,2.4c0.2,0.2,0.3,0.3,0.5,0.5l0,0c0.9-0.9,1.6-1.9,2.2-3c0.4-0.7,0.7-1.4,0.8-2.2C14.9,5.3,14.9,5.1,14.8,4.9z
     M11.8,7.4c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.7-1.6c0.9,0,1.6,0.7,1.6,1.6C13.5,6.7,12.7,7.4,11.8,7.4z"/>
</g>
</svg>


  </TabItem>
  
</Tabs>


