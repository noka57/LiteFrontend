<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload } from 'flowbite-svelte';


  let value;

  const btn1 = () => {
    alert('You clicked btn1.');
  };

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
 </script>


<table>
    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Backup Current Configuration</p></td>

<td class="pl-5 pt-5"><Button on:click={btn1}>Download</Button></td>
  </tr>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Restore Configuration</p></td>
<td class="pl-5 pt-5">

  <Fileupload id="filetest" bind:value/>

</td>
<td class="pl-5 pt-5">
  <Button on:click={btn2}>Upload</Button>


</td>

</tr>

</table>


