<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator, MultiSelect } from 'flowbite-svelte';


  let isActive=false;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let proxyData=false;
  let pdenable=false;
  let pname;


  let monitorData=false;
  let mdenable=false;
  let mname;

  let MaxStorage="Full";
  let CloudPInterval="Now";
  let CloudPIntervalValue;
  let CloudLostDelayP=0;
  let CloudPDataP='Latest';
  let CloudPDataC='No';
  let CloudAzureProfile;
  let CloudMQTTProfile;
  let CloudAvnetProfile;
  let EnableAzureProfile;
  let EnableMQTTProfile;
  let EnableAvnetProfile;
  let ViewerSelect='All';


  let MVList = [
    {value:"Test1", name: "Line Current Phase A"},

  ];
  let VType;

  let VTList = [
    {value:"1", name: "Boolean"},
    {value:"2", name: "Unsigned Short"},
    {value:"3", name: "Signed Short"},
    {value:"4", name: "Unsigned Integer"},
    {value:"5", name: "Signed Integer"},
    {value:"6", name: "Float"},
    {value:"7", name: "Double"},
  ];





let OpList = [
    {value:"add", name: "+"},
    {value:"sub", name: "-"},
    {value:"mul", name: "*"},
    {value:"div", name: "/"},

  ];

  let PDisplay='hex';
  let PFormat='Default';
  let PFormatUDefine="Hello";

  function AppendUserDefine(string)
  {
    if (PFormat =='UserDefined')
    {
        console.log("append");
        console.log(string);
        PFormatUDefine+=string;
    }

  }
 const btn1 = () => 
 {
    PFormatUDefine+="$TimeStamp$";

};

 const btn2 = () => 
 {

    PFormatUDefine+="$Keyword1$";
 };

 const btn3 = () => 
 {

    PFormatUDefine+="$Keyword2$";
 };

 const btn4 = () => 
 {

    PFormatUDefine+="$Keyword3$";
 };

  const btn5 = () => 
 {

    PFormatUDefine+="$Keyword4$";
 };

  let selected = [];
  let countries = [
    { value: 'Azure1', name: 'Azure Profile 1' },
    { value: 'Azure2', name: 'Azure Profile 2' },
    { value: 'MQTT1', name: 'MQTT Profile 1' },
    { value: 'MQTT2', name: 'MQTT Profile 2' },
    { value: 'Avnet', name: 'Avnet Profile 1' }
  ];

</script>



 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-left">Smart Data Logger</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={isActive}></Toggle></td>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



   </TabItem>

  <TabItem title="Proxy Mode">


<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Variable Postprocessing</TableHeadCell>
    <TableHeadCell class="w-18">Postprocessed Display</TableHeadCell>
    <TableHeadCell class="w-18">Data Format</TableHeadCell>
  </TableHead>

<TableBody>
    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => proxyData = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">Proxy_EdgeData_</TableBodyCell>
      <TableBodyCell class="w-18">Line Current Phase A</TableBodyCell>
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
      <TableBodyCell class="w-18"> + 1000</TableBodyCell>
      <TableBodyCell class="w-18"> Hexadecimal</TableBodyCell>
      <TableBodyCell class="w-18"><div class="flex gap-2">Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></TableBodyCell>
    </TableBodyRow>

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => proxyData = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>




<Modal bind:open={proxyData} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={pdenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">Proxy_EdgeData_</p><input type="text" bind:value={pname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

 <td class= "pl-4 pt-4"><Select class="mt-2" items={VTList} placeholder="None" /></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Postprocessing</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<Select class="mt-2 " items={OpList} placeholder="None" SNWfull={true}/>

   
 <FloatingLabelInput style="outlined" id="operand_value" name="operand_value" type="number" label="operand_value">
    operand_value
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Postprocessed Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={PDisplay} value='hex' >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='dec' >Decimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='bin' >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={PFormat} value='Default' >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
  <Radio class="pb-2" bind:group={PFormat} value='UserDefined' >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if PFormat == 'UserDefined'}
    <Button size="xs" on:click={btn1}>TimeStamp</Button>
{:else}
    <Button size="xs" disabled>TimeStamp</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn2}>Keyword1</Button>
{:else}
<Button size="xs" disabled>Keyword1</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn3}>Keyword2</Button>
{:else}
<Button size="xs" disabled>Keyword2</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn4}>Keyword3</Button>
{:else}
<Button size="xs" disabled>Keyword3</Button>
{/if}
</li>


<li class='pt-4'>
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn5}>Keyword4</Button>
{:else}
<Button size="xs" disabled>Keyword4</Button>
{/if}
</li>

</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if PFormat == 'UserDefined'}

<Textarea id="textarea-id" placeholder="Data Format" rows="12" name="message" bind:value={PFormatUDefine} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
{/if}


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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>


</table>

</Modal>


  </Table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Settings
    </span>


<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={CloudPInterval} value='Now' >Right Away</Radio>
  <Radio bind:group={CloudPInterval} value='UserDefine' > User Defined (mins): </Radio>
{#if CloudPInterval == 'Now'}
  <input type="number" bind:value={CloudPIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={CloudPIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={CloudLostDelayP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={CloudPDataP} value='Latest' >Latest First</Radio>
  <Radio bind:group={CloudPDataP} value='FIFO' > First In, First Out </Radio>

</div>



</td>


</tr>



<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Compression</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={CloudPDataC} value='No' >No</Radio>
  <Radio bind:group={CloudPDataC} value='gzip' > gzip</Radio>

</div>



</td>


</tr>

<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={countries} bind:value={selected} />

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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</AccordionItem>

</Accordion>

  </TabItem>

  <TabItem title="Monitor Mode">



<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Variable Display</TableHeadCell>
    <TableHeadCell class="w-18">Data Format</TableHeadCell>
  </TableHead>

<TableBody>
    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => monitorData = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">Monitor_EdgeData_</TableBodyCell>
      <TableBodyCell class="w-18">Line Current Phase A</TableBodyCell>
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
      <TableBodyCell class="w-18"> Hexadecimal</TableBodyCell>
      <TableBodyCell class="w-18"><div class="flex gap-2">Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></TableBodyCell>
    </TableBodyRow>

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => monitorData = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>




<Modal bind:open={monitorData} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mdenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">Monitor_EdgeData_</p><input type="text" bind:value={mname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

 <td class= "pl-4 pt-4"><Select class="mt-2" items={VTList} placeholder="None" /></td>
</tr>





<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={PDisplay} value='hex' >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='dec' >Decimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='bin' >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={PFormat} value='Default' >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
  <Radio class="pb-2" bind:group={PFormat} value='UserDefined' >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if PFormat == 'UserDefined'}
    <Button size="xs" on:click={btn1}>TimeStamp</Button>
{:else}
    <Button size="xs" disabled>TimeStamp</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn2}>Keyword1</Button>
{:else}
<Button size="xs" disabled>Keyword1</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn3}>Keyword2</Button>
{:else}
<Button size="xs" disabled>Keyword2</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn4}>Keyword3</Button>
{:else}
<Button size="xs" disabled>Keyword3</Button>
{/if}
</li>


<li class='pt-4'>
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn5}>Keyword4</Button>
{:else}
<Button size="xs" disabled>Keyword4</Button>
{/if}
</li>

</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if PFormat == 'UserDefined'}

<Textarea id="textarea-id" placeholder="Data Format" rows="12" name="message" bind:value={PFormatUDefine} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
{/if}


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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


</tr>


</table>

</Modal>


  </Table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Settings
    </span>


<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={CloudPInterval} value='Now' >Right Away</Radio>
  <Radio bind:group={CloudPInterval} value='UserDefine' > User Defined (mins): </Radio>
{#if CloudPInterval == 'Now'}
  <input type="number" bind:value={CloudPIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={CloudPIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={CloudLostDelayP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={CloudPDataP} value='Latest' >Latest First</Radio>
  <Radio bind:group={CloudPDataP} value='FIFO' > First In, First Out </Radio>

</div>



</td>


</tr>



<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Compression</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={CloudPDataC} value='No' >No</Radio>
  <Radio bind:group={CloudPDataC} value='gzip' > gzip</Radio>

</div>



</td>


</tr>

<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={countries} bind:value={selected} />

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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</AccordionItem>

</Accordion>


  </TabItem>


    <TabItem title="Data Viewer">

<table>
<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Select By</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={ViewerSelect} value='All' >All</Radio>
  <Radio class="pb-2" bind:group={ViewerSelect} value='State' >State</Radio>  <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio class="pb-2" bind:group={ViewerSelect} value='Mode' >Mode</Radio>  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

</div></td>
</tr>

</table>


<p class="pt-10"></p>

 <Table shadow striped={true} tableNoWFull={true}>



  <TableHead>

    <TableHeadCell>Timestamp</TableHeadCell>
    <TableHeadCell>Mode</TableHeadCell>
    <TableHeadCell>Edge Data Alias Name</TableHeadCell>
    <TableHeadCell>Content</TableHeadCell>
    <TableHeadCell>State</TableHeadCell>

  </TableHead>
  <TableBody >


      <TableBodyRow>
        <TableBodyCell class="w-18">2023/11/03 13:02:25</TableBodyCell>
        <TableBodyCell class="w-18">Proxy Mode</TableBodyCell>
        <TableBodyCell class="w-18">Proxy_EdgeData_</TableBodyCell>
        <TableBodyCell class="w-18">?</TableBodyCell>
        <TableBodyCell class="w-18">?</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell class="w-18">2023/11/13 20:02:25</TableBodyCell>
        <TableBodyCell class="w-18">Monitor Mode</TableBodyCell>
        <TableBodyCell class="w-18">Monitor_EdgeData_</TableBodyCell>
        <TableBodyCell class="w-18">?</TableBodyCell>
        <TableBodyCell class="w-18">?</TableBodyCell>
      </TableBodyRow>



  </TableBody>
</Table>

  </TabItem>
   </Tabs>