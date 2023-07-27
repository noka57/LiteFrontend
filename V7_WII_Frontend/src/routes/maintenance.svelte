<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload } from 'flowbite-svelte';


  let value;



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

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Update Local Firmware</p></td>
<td class="pl-5 pt-5">

  <Fileupload id="filetest" bind:value/>

</td>
<td class="pl-5 pt-5">
  <Button on:click={btn2}>Update</Button>


</td>

</tr>


    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Enable EW-FOTA</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={isActive}></Toggle></td>

  </tr>


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
