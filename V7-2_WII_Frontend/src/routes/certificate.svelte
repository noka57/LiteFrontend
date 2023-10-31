<script>
  import { Fileupload, Tabs, TabItem, Radio, Button, Dropdown, DropdownItem, Label, FloatingLabelInput, Modal,
  Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, AccordionItem, Accordion, Input} from 'flowbite-svelte';
  let cdefault='No';
  let ddefault='Never';
  let newCRL=false;
  let CRLURL="";
  let newCRLFileUpload=false;
  export let crlvalue;
  export let mc4value
  export let crlInterval='everyW';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  const btn1 = () => {
    alert('You clicked btn1.');
    if (crlvalue) {
      alert(crlvalue);
    }
    else
    {
      alert('no file');
    }
  };


  function NewCRLTrigger(){
    newCRL=true;
  }

  function NewCRLFileUploadTrigger(){
    newCRLFileUpload=true;
  }

</script>



<Tabs style="underline">
  <TabItem open title="Certificate Settings">

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Check the validity period of certificates and CRLs</p>
<Radio bind:group={cdefault} class='p-3' value='No'>No</Radio>
<Radio bind:group={cdefault} class='p-3' value='Always'>Always</Radio>
<Radio bind:group={cdefault} class='p-3' value='WTS'>Wait for synchronization of the system time</Radio>
<p class="pt-10"></p>

    <tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-80"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TabItem>
  <TabItem title="Machine Certificates">
  <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>Subject</TableHeadCell>
    <TableHeadCell>Issuer</TableHeadCell>
    <TableHeadCell>Valid From</TableHeadCell>
    <TableHeadCell>Valid To</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>AWS</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>AWS CA</TableBodyCell>
      <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
      <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>
      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell>Azure</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Azure CA</TableBodyCell>
            <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">3</TableBodyCell>
      <TableBodyCell>Self-sign</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Self</TableBodyCell>
            <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">4</TableBodyCell>
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name"/></TableBodyCell>
      <TableBodyCell><Fileupload id="mc4" bind:mc4value/></TableBodyCell>
      <TableBodyCell><Button color="dark" on:click={btn1}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>
  <TabItem title="CA Certificates">
 <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>Subject</TableHeadCell>
    <TableHeadCell>Issuer</TableHeadCell>
    <TableHeadCell>Valid From</TableHeadCell>
    <TableHeadCell>Valid To</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>AWS</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>AWS CA</TableBodyCell>
      <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
      <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>
      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell>Azure</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Azure CA</TableBodyCell>
            <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">3</TableBodyCell>
      <TableBodyCell>Self-sign</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Self</TableBodyCell>
            <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">4</TableBodyCell>
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name"/></TableBodyCell>
      <TableBodyCell><Fileupload id="mc4" bind:mc4value/></TableBodyCell>
      <TableBodyCell><Button color="dark" on:click={btn1}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>
  <TabItem title="Remote Certificates">
 <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>Subject</TableHeadCell>
    <TableHeadCell>Issuer</TableHeadCell>
    <TableHeadCell>Valid From</TableHeadCell>
    <TableHeadCell>Valid To</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>AWS</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>AWS CA</TableBodyCell>
      <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
      <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>
      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell>Azure</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Azure CA</TableBodyCell>
            <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">3</TableBodyCell>
      <TableBodyCell>Self-sign</TableBodyCell>
      <TableBodyCell>CN=test_name,OU=WII,O=Etherwan</TableBodyCell>
      <TableBodyCell>Self</TableBodyCell>
          <TableBodyCell>Sep 08,2015</TableBodyCell>
      <TableBodyCell>Sep 08,2025</TableBodyCell>
    </TableBodyRow>


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">4</TableBodyCell>
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name"/></TableBodyCell>
      <TableBodyCell><Fileupload id="mc4" bind:mc4value/></TableBodyCell>
      <TableBodyCell><Button color="dark" on:click={btn1}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>
    <TabItem title="CRL">
<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Manually Uploaded File</span>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-10">
    </TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">CRL Issuer</TableHeadCell>
    <TableHeadCell class="w-10">Next Update</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  <TableBody>


<TableBodyRow>
      <TableBodyCell class="w-10">
<button on:click={NewCRLFileUploadTrigger}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>
     <tr>
    <td ></td>
    <td ></td>
    <td ></td>
        <td ></td>
    <td ><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
  </TableBody>
</Table>

<Modal bind:open={newCRLFileUpload} size="md" class="w-full" autoclose>


<table>

<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">CRL File</p></td>
<td class="pl-5 pt-5">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400">

</td>
<td class="pl-5 pt-5">
  <Button>Upload</Button>

</td>

</tr>

  </table>

</Modal>

  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">URL</span>


<p class="mb-4 font-semibold text-gray-900 dark:text-white">Download URL Interval</p>
<div class="flex gap-4">
  <Radio bind:group={crlInterval} value='everyW' >Every Week</Radio>
  <Radio bind:group={crlInterval} value='everyM' >Every Month</Radio>
  <Radio bind:group={crlInterval} value='everyQ' >Every Quarter</Radio>
</div>
<div class="p-4"></div>
    <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-10">

    </TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">CRL issuer</TableHeadCell>
    <TableHeadCell class="w-10">Next Update</TableHeadCell>
    <TableHeadCell class="w-10">URL</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  <TableBody>


<TableBodyRow>


      <TableBodyCell class="w-10">
<button on:click={NewCRLTrigger}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>
        <tr>
    <td ></td>
    <td ></td>
    <td ></td>
        <td ></td>
    <td ><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>

<Modal bind:open={newCRL} size="sm" class="w-full" autoclose>


<table>


 <tr>
   <td><p class="pl-20 pt-4 text-lg font-light text-right">URL</p></td><td class="pl-5 pt-5"><input type="text" bind:value={CRLURL}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
  </table>

</Modal>


  </AccordionItem>
</Accordion>
 

  </TabItem>
</Tabs>