<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';


  let isActiveRestful = false;
  let isActiveMQTT = false;

  </script>



  <table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Restful API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={isActiveRestful}></Toggle></td>
<td></td>

    </tr>


        <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">MQTT API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={isActiveMQTT}></Toggle></td>
<td></td>

    </tr>

</table>

<p class="pt-10"></p>

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