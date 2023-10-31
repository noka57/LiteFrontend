<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload } from 'flowbite-svelte';


  let value;
  let SMS=false;
  let SMSPhoneNum;
  let smsitem=false;


  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


  const btn2 = () => {
    alert('You clicked btn2.');
    if (value) {
      alert(value);
    }
    else
    {
      alert('no file');
    }
  };

     let isActive = false;
 </script>


<table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Event Engine</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={isActive}></Toggle></td>
<td></td>

    </tr>

</table>

<p class="pt-5"></p>

 <Tabs style="underline">
  <TabItem open title="Profile Settings">

<Accordion>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Common Setting
    </span>




<Accordion>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SMS
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
               <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="w-18">SMS Admin Profile Index</TableHeadCell>
    <TableHeadCell class="w-18">Phone Number</TableHeadCell>


  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => SMS = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

<Modal bind:open={SMS} autoclose={false} size="md" class="w-full">


<label>
  <input class="center" type=checkbox checked={smsitem}>
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
SMS Admin Profile Index
      </p></td>
      <td class="pl-5 pt-5 text-blue-900">sms_admin_1</td>

  </tr>



<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Phone Number
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={SMSPhoneNum} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>




            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

</table>
</Modal>


</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Email
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Line Notify
    </span>
</AccordionItem>

</Accordion>


</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Event Trigger
    </span>

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SMS
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DI
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Socket
    </span>
</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    MQTT Notification
    </span>
</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SNMP Trap
    </span>
</AccordionItem>

</Accordion>

</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Action Behavior
    </span>

<Accordion>
<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    SMS
    </span>
</AccordionItem>

<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Email
    </span>
</AccordionItem>

<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DO
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
    </span>
</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Socket
    </span>
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
    What's APP Notification
    </span>
</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SNMP Trap
    </span>
</AccordionItem>

</Accordion>


</AccordionItem>

</Accordion>


   </TabItem>

    <TabItem title="Rule Settings">
</TabItem>

    <TabItem title="Log Viewer">
</TabItem>

</Tabs>



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