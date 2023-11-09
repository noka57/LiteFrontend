<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

 import { writable } from 'svelte/store';

  let currentStep = 1;
  let steps = ['Step 1', 'Step 2', 'Step 3'];
  let R_Name;
  let R_DelayS;
  let R_Once_Repeat;
  let R_Repeat;
  let R_RepeatInterval;
 

  let isActive = false;
  let formModalsmsT = false;
  let T_SMS_Name;
  let TSMSP='any';
  let T_SMS_PhoneN;
  let T_SMS_Content;
  let smsitemT=false;


  let formModalDIT = false;
  let diitemT=false;
  let T_DI_Name;
  let TDIT='levelH';
  let T_DI_Duration;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';



  let formModalMT=false;
  let mitemT=true;
  let T_Modbus_name;
  let T_VType;
  let T_MV_name;
  let T_Comparison;

  let A_Modbus_assign;
  let formModalMA=false;
  let mitemA=true;
  let A_Modbus_name;
  let A_MV_name;
  let A_VType;

  let formModalsmsA = false;
  let A_SMS_Name;
  let A_SMS_PhoneN;
  let A_SMS_Content;
  let smsitemA=false;



  let A_SNTP_Name;
  let A_SNTP_SIP;
  let A_SNTP_Port;
  let A_SNTP_Account;
  let A_SNTP_Pwd;
  let A_SNTP_TLS='No';
  let formModalemailSNTPA = false;
  let formModalemailA = false;
  let emailitemA=false;
  let A_Email_Name;
  let A_Email_addr;
  let A_Email_content;

  let formModalDOA=false;
  let doitemA=false;
  let A_DO_Name;
  let ADOT;
  let A_DO_Duration;

  let formModalRule=false;
  let ruleitem=false;

  let R_TCount='1';
  let R_TMultipleRelation='OR';

  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;

  function handleClickMMS() {
        openDetailStatusMMS=!openDetailStatusMMS;
  }


  function handleClickMMT() {
        openDetailStatusMMT=!openDetailStatusMMT;
  }


  function handleClickMV() {
        openDetailStatusMV=!openDetailStatusMV;
  }

  function Rule_Modal_Page1()
  {
    currentStep=1;
  }



  function Rule_Modal_Page2()
  {
    currentStep=2;
  }

  function Rule_Modal_Page3()
  {
    currentStep=3;
  }


  function NewRule()
  {
    currentStep=1;
    formModalRule = true;
  }




let MVList = [
    {value:"Test1", name: "Line Current Phase A"},

  ];

let OpList = [
    {value:"GT", name: ">"},
    {value:"LT", name: "<"},
    {value:"GE", name: ">="},
    {value:"LE", name: "<="},
    {value:"EQ", name: "="},
    {value:"NEQ", name: "!="},
  ];



  let items = [
    { tt: '2023/11/01 02:03:30', tc: 'SMS', tn: 'T_sms_', at: '2023/11/01 02:03:35', ac: 'Email', an: 'A_Email_' },
    { tt: '2023/11/01 02:03:35', tc: 'Modbus', tn: 'T_Modbus_', at: '2023/11/01 02:03:45', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:30', tc: 'DI', tn: 'T_DI_', at: '2023/11/02 02:03:35', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:40', tc: 'SMS', tn: 'T_sms_', at: '2023/11/02 02:03:45', ac: 'Email', an: 'A_Email_'  }
  ];

  let TriggerCatelogList=[
    {value:"SMS", name: "SMS"},
    {value:"DI", name: "DI"},
    {value:"Modbus", name: "Modbus"},
    {value:"MQTT Notification", name: "MQTT Notification"},
    {value:"Socket", name: "Socket"},

  ];

  let ActionCatelogList=[
    {value:"SMS", name: "SMS"},
    {value:"DO", name: "DO"},
    {value:"Modbus", name: "Modbus"},
    {value:"Email", name: "Email"},
    {value:"MQTT Publish", name: "MQTT Publish"},
    {value:"Line Notification", name: "SNMP Line Notification"},
    {value:"Socket", name: "Socket"},

  ];


  let TriggerSMSList=[
    {value:"1", name: "T_sms_"},
  ];

  let TriggerDIList=[
    {value:"1", name: "T_DI_"},
  ];

  let TriggerMBList=[
    {value:"1", name: "T_Modbus_"},
  ];

  let Tselected1;
  let Tselected2;
  let Tselected3;
  let Aselected;


  let ActionSMSList=[
    {value:"1", name: "A_sms_"},
  ];

  let ActionDIList=[
    {value:"1", name: "A_DO_"},
  ];

  let ActionMBList=[
    {value:"1", name: "A_Modbus_"},
  ];

  let ActionEmailList=[
    {value:"1", name: "A_Email_"},
  ];

  const sortKey = writable('tt'); // default sort key
  const sortDirection = writable(-1); // default sort direction (ascending)
  const sortItems = writable(items.slice()); // make a copy of the items array

  // Define a function to sort the items
  const sortTable = (key) => {

    // If the same key is clicked, reverse the sort direction
    if ($sortKey === key) {
      sortDirection.update((val) => -val);
    } else {
      sortKey.set(key);
      sortDirection.set(-1);
    }
  };

  $: {
    const key = $sortKey;
    const direction = $sortDirection;
    const sorted = [...$sortItems].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal < bVal) {
        return -direction;
      } else if (aVal > bVal) {
        return direction;
      }
      return 0;
    });
    sortItems.set(sorted);
  }


 </script>



 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Event Engine</p></td>
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

<TabItem title="Trigger Profiles">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SMS
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
    <TableHeadCell class="w-18">SMS Phone Number</TableHeadCell>
    <TableHeadCell class="w-18">SMS Content</TableHeadCell>
   

  </TableHead>
  <TableBody>
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsT = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">T_sms_</TableBodyCell>
      <TableBodyCell class="w-18">12345657</TableBodyCell>
      <TableBodyCell class="w-18">Hi</TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsT = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalsmsT} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={smsitemT}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">T_sms_</p><input type="text" bind:value={T_SMS_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
  <Radio bind:group={TSMSP} value='any' >Any</Radio>
  <Radio bind:group={TSMSP} value='specified'>Specified:</Radio>

{#if TSMSP == 'any'}
  <input type="text" bind:value={T_SMS_PhoneN} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="text" bind:value={T_SMS_PhoneN} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

</div></td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={T_SMS_Content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


  </TableBody>
</Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DI
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
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Debouncing</TableHeadCell>
    <TableHeadCell class="w-18">Duration</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDIT = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">T_DI_</TableBodyCell>
      <TableBodyCell class="w-18">Level Trigger : High</TableBodyCell>
      <TableBodyCell class="w-18">3 X 3</TableBodyCell>
      <TableBodyCell class="w-18">2 second(s)</TableBodyCell>

    </TableBodyRow>

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDIT = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalDIT} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={diitemT}>
  Enable
</label>

<p class="mt-4"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">T_DI_</p><input type="text" bind:value={T_DI_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={TDIT} value='levelH' >Level Trigger : High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={TDIT} value='levelL' >Level Trigger : Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={TDIT} value='edgeH2L' >Edge Trigger : High to Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={TDIT} value='edgeL2H' >Edge Trigger : Low to High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={TDIT} value='edgeT' >Edge Trigger : Toggle</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Debouncing</p></td>
      <td class="pl-5 pt-4">
 <FloatingLabelInput style="outlined" id="sampling_rate_count" name="sampling_rate_count" type="number" label="sampling_rate_count">
    sampling_rate_count
  </FloatingLabelInput> 
  </td>
  <td class="pt-4" colspan="2"> <div class="flex gap-4"><p class="pl-2 pt-4">X</p> 
   
 <FloatingLabelInput style="outlined" id="interval" name="interval" type="number" label="interval(ms)">
    interval(ms)
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">
{#if TDIT != 'edgeT' && TDIT != 'edgeL2H' && TDIT != 'edgeH2L'}
<input type="number" bind:value={T_DI_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={T_DI_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


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
  </form>
</Modal>


  </TableBody>
</Table>




</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
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
    <TableHeadCell class="w-18">Comparison</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalMT = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">T_Modbus_</TableBodyCell>
      <TableBodyCell class="w-18">Line Current Phase A</TableBodyCell>
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
      <TableBodyCell class="w-18"> > 1000</TableBodyCell>

    </TableBodyRow>

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => formModalMT = true}>
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

    </TableBodyRow>



  </TableBody>
</Table>


    <Modal bind:open={formModalMT} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={mitemT}>
  Enable
</label>

<p class="mt-4"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">T_Modbus_</p><input type="text" bind:value={T_Modbus_name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

    <td class="pl-4 pt-4" colspan=""><div>
  <Radio class="pb-2" bind:group={T_VType} value='bool' >Boolean</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='uns' >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='ss' >Signed Short</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='uni' >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='si' >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='float' >Float</Radio>
  <Radio class="pb-2" bind:group={T_VType} value='double' >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comparison</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<Select class="mt-2 " items={OpList} placeholder="None" SNWfull={true}/>

   
 <FloatingLabelInput style="outlined" id="compared_value" name="compared_value" type="number" label="compared_value">
    compared_value
  </FloatingLabelInput> 
  </div>
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
  </form>
</Modal>

<p class="mt-8">

<Table shadow striped={true} tableNoWFull={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Variable
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
  </TableHead>
  <TableBody>
 <TableBodyRow>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">Modbus_Master_T0</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
    </TableBodyRow>

  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 0</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">115200</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>



  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 192.168.127.254</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


  </TableBody>
    {/if}
</Table>




</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    MQTT Notification
    </span>
</AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    TCP Message
    </span>
</AccordionItem>

</Accordion>

</TabItem>


<TabItem title="Action Profiles">



<Accordion>
<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    SMS
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
    <TableHeadCell class="w-18">SMS Phone Number</TableHeadCell>
    <TableHeadCell class="w-18">SMS Content</TableHeadCell>
   

  </TableHead>
  <TableBody>
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_sms_</TableBodyCell>
      <TableBodyCell class="w-18">12345657</TableBodyCell>
      <TableBodyCell class="w-18">Action</TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalsmsA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={smsitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_sms_</p><input type="text" bind:value={A_SMS_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SMS_PhoneN} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_SMS_Content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
  </form>
</Modal>


  </TableBody>
</Table>



</AccordionItem>

<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Email
    </span>

 <Table shadow striped={true} tableNoWFull={true}>

<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    SNTP Server
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please edit the sntp server first.</p>
  </caption>

  <TableHead>

        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">SNTP Server IP</TableHeadCell>
    <TableHeadCell class="w-18">Port</TableHeadCell>
    <TableHeadCell class="w-18">Account</TableHeadCell>
    <TableHeadCell class="w-18">Password</TableHeadCell>
    <TableHeadCell class="w-18">TLS</TableHeadCell>
  </TableHead>
 <TableBody>
    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalemailSNTPA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell class="w-10">Gmail SNTP</TableBodyCell>
      <TableBodyCell class="w-18">168.102.1.1</TableBodyCell>
      <TableBodyCell class="w-18">123</TableBodyCell>
      <TableBodyCell class="w-18">WII</TableBodyCell>
      <TableBodyCell class="w-18" style="-webkit-text-security: disc">12345</TableBodyCell>
      <TableBodyCell class="w-18">No</TableBodyCell>
    </TableBodyRow>

    </TableBody>
</Table>
<p class="mt-4">


 <Table shadow striped={true} tableNoWFull={true}>

<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Remote Email Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please edit the remote email profile.</p>
  </caption>

  <TableHead>

        <TableHeadCell class="!p-4">
    </TableHeadCell>
            <TableHeadCell class="!p-4">
    </TableHeadCell>
            <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-18">Enable</TableHeadCell>
    <TableHeadCell class="w-18">No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Email</TableHeadCell>
    <TableHeadCell class="w-18">Email Content</TableHeadCell>

  </TableHead>
 <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => formModalemailA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">A_Email_</TableBodyCell>
      <TableBodyCell class="w-18">a@b.c</TableBodyCell>
      <TableBodyCell class="w-18">test</TableBodyCell>

    </TableBodyRow>
<TableBodyRow>
      <TableBodyCell class="!p-4 w-4"><button on:click={() => formModalemailA = true}>
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


  <Modal bind:open={formModalemailSNTPA} autoclose={false} size="lg" class="w-full">
  <form action="#">


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_SNTP_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SNTP Server IP</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SNTP_SIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={A_SNTP_Port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SNTP_Account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SNTP_Pwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">TLS</p></td>

  <td class="pl-5 pt-4">
  <div class="flex gap-4">
  <Radio bind:group={A_SNTP_TLS} value='Yes' >Yes</Radio>
  <Radio bind:group={A_SNTP_TLS} value='No'>No</Radio>

  </div>

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
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



  <Modal bind:open={formModalemailA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={emailitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_Email_</p><input type="text" bind:value={A_Email_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Email</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_Email_addr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Email Content</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_Email_content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
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
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



    </TableBody>
</Table>


</AccordionItem>

<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DO
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
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Duration</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDOA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_DO_</TableBodyCell>
      <TableBodyCell class="w-18">Pulse : Start</TableBodyCell>
      <TableBodyCell class="w-18">2 second(s)</TableBodyCell>

    </TableBodyRow>

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDOA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


    <Modal bind:open={formModalDOA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={doitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_DO_</p><input type="text" bind:value={A_DO_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='Pstart' >Pulse : Start</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='Pstop' >Pulse : Stop</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='DOon' >DO : ON</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='DOoff' >DO : OFF</Radio>
  </td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">
{#if ADOT == 'Pstart'}
<input type="number" bind:value={A_DO_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={A_DO_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


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
  </form>
</Modal>

  </TableBody>
</Table>

</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
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
    <TableHeadCell class="w-18">Assignment</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalMA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_Modbus_</TableBodyCell>
      <TableBodyCell class="w-18">Line Current Phase A</TableBodyCell>
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
      <TableBodyCell class="w-18">2000</TableBodyCell>

    </TableBodyRow>

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => formModalMA = true}>
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

    </TableBodyRow>



  </TableBody>
</Table>


    <Modal bind:open={formModalMA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={mitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_Modbus_</p><input type="text" bind:value={A_Modbus_name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>

  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

    <td class="pl-4 pt-4" colspan=""><div>
  <Radio class="pb-2" bind:group={A_VType} value='bool' >Boolean</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='uns' >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='ss' >Signed Short</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='uni' >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='si' >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='float' >Float</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='double' >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Assignment</p></td>
<td class="pl-5 pt-5">
<input type="number" bind:value={A_Modbus_assign} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

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
  </form>
</Modal>

<p class="mt-8">




<Table shadow striped={true} tableNoWFull={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Variable
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
  </TableHead>
  <TableBody>
 <TableBodyRow>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">Modbus_Master_T0</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
    </TableBodyRow>

  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 0</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">115200</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>



  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 192.168.127.254</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


  </TableBody>
    {/if}
</Table>


</AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    MQTT Publish
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Line Notification
    </span>
</AccordionItem>




  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    TCP Message
    </span>
</AccordionItem>

</Accordion>


</TabItem>


    <TabItem title="Rule Settings">



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
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
   

  </TableHead>
  <TableBody>
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalRule = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={NewRule}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalRule} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />

<p class="mt-4"></p>



<table>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type=checkbox checked={ruleitem}></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">R_</p><input type="text" bind:value={R_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Trigger Count</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={R_TCount} value='1' >1</Radio>
  <Radio bind:group={R_TCount} value='2' >2</Radio>
  <Radio bind:group={R_TCount} value='3' >3</Radio>

</div></td>
</tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Multiple Triggers Relationship</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
{#if R_TCount == '1'}
  <Radio bind:group={R_TMultipleRelation} value='OR' name="disabled-state" disabled>OR</Radio>
  <Radio bind:group={R_TMultipleRelation} value='AND' name="disabled-state" disabled>AND</Radio>
{:else}
  <Radio bind:group={R_TMultipleRelation} value='OR' >OR</Radio>
  <Radio bind:group={R_TMultipleRelation} value='AND' >AND</Radio>
{/if}

</div></td>
</tr>

{#if R_TCount == '1' || R_TCount == '2' || R_TCount == '3'}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">1st Trigger Catelog</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerCatelogList} placeholder="None" bind:value={Tselected1}/></td>

</tr>
{/if}





{#if Tselected1 == 'SMS'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerSMSList} placeholder="None" /></td>

</tr>

{:else if Tselected1 == 'DI'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DI Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerDIList} placeholder="None" /></td>

</tr>
{:else if Tselected1 == "Modbus"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerMBList} placeholder="None" /></td>

</tr>
{/if}

{#if R_TCount == '2' || R_TCount=='3'}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">2nd Trigger Catelog</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerCatelogList} placeholder="None" bind:value={Tselected2}/></td>
</tr>
{#if Tselected2 == 'SMS'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerSMSList} placeholder="None" /></td>

</tr>

{:else if Tselected2 == 'DI'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DI Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerDIList} placeholder="None" /></td>

</tr>
{:else if Tselected2 == "Modbus"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerMBList} placeholder="None" /></td>

</tr>
{/if}


{/if}


{#if R_TCount=='3'}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">3rd Trigger Catelog</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerCatelogList} placeholder="None" bind:value={Tselected3}/></td>
</tr>
{#if Tselected3 == 'SMS'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerSMSList} placeholder="None" /></td>

</tr>

{:else if Tselected3 == 'DI'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DI Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerDIList} placeholder="None" /></td>

</tr>
{:else if Tselected3 == "Modbus"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={TriggerMBList} placeholder="None" /></td>

</tr>
{/if}


{/if}


<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Next</Button></td>


    </tr>
{:else if currentStep==2}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Delay Second</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_DelayS} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Option</p></td>

    <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
    <Radio bind:group={R_Once_Repeat} value='once' >Once</Radio>
    <Radio bind:group={R_Once_Repeat} value='repeat'>Repeat</Radio>
    </div></td>
    </tr>
{#if R_Once_Repeat == 'repeat'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_Repeat} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_RepeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>
{:else}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_Repeat} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500  disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_RepeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-50  disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled></td>

</tr>
{/if}



<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page1}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Page3}>Next</Button></td>


    </tr>

{:else if currentStep==3}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Catelog</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionCatelogList} placeholder="None" bind:value={Aselected}/></td>


</tr>



{#if Aselected == 'SMS'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionSMSList} placeholder="None" /></td>

</tr>

{:else if Aselected == 'DO'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DO Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionDIList} placeholder="None" /></td>

</tr>
{:else if Aselected == "Modbus"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionMBList} placeholder="None" /></td>

</tr>


{:else if Aselected == "Email"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Email Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionEmailList} placeholder="None" /></td>

</tr>
{/if}


<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} >Finish</Button></td>


    </tr>
{/if}

  </table>

</Modal>


  </TableBody>
</Table>

</TabItem>

<TabItem title="Simulator">



</TabItem>



    <TabItem title="Log Viewer">


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>

    <TableHeadCell on:click={() => sortTable('tt')}>Trigger Timestamp</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('tc')}>Trigger Catelog</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('tn')}>Trigger Alias Name</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('at')}>Action Timestamp</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('ac')}>Action Catelog</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('an')}>Action Alias Name</TableHeadCell>   

  </TableHead>
  <TableBody >

{#each $sortItems as item}
      <TableBodyRow>
        <TableBodyCell class="w-18">{item.tt}</TableBodyCell>
        <TableBodyCell class="w-18">{item.tc}</TableBodyCell>
        <TableBodyCell class="w-18">{item.tn}</TableBodyCell>
        <TableBodyCell class="w-18">{item.at}</TableBodyCell>
        <TableBodyCell class="w-18">{item.ac}</TableBodyCell>
        <TableBodyCell class="w-18">{item.an}</TableBodyCell>
      </TableBodyRow>
    {/each}




  </TableBody>
</Table>
</TabItem>

</Tabs>



