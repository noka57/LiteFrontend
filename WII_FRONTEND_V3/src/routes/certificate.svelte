<script>
  import { Fileupload, Tabs, TabItem, AccordionItem, Accordion, Radio, Button, Dropdown, DropdownItem, Chevron, Label, FloatingLabelInput,
  Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
  let cdefault='No';
  let ddefault='Never';
  export let group1='Manually';
  export let crlvalue;
  export let mc4value

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
</script>



<Tabs style="underline">
  <TabItem open title="Certificate Settings">
<Accordion>
  <AccordionItem>
    <span slot="header">Check the validity period of certificates and CRLs</span>
<Radio bind:group={cdefault} class='p-3' value='No'>No</Radio>
<Radio bind:group={cdefault} class='p-3' value='Always'>Always</Radio>
<Radio bind:group={cdefault} class='p-3' value='WTS'>Wait for synchronization of the system time</Radio>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">CRL origin</span>
    <div class="flex gap-4">

    <Radio name="group1" bind:group={group1} value='Manually'>manually</Radio>

    <Radio name="group1" bind:group={group1} value='EveryWeek'>from URL every week</Radio>
</div>



{#if group1 === 'Manually'}


<Label class="p-5 space-y-2 mb-2">
  <Fileupload id="fileup" bind:crlvalue/>
  <Button color="dark" on:click={btn1}>Update</Button>
</Label>

{:else}
<div id="exampleWrapper" class="p-5 grid gap-6 items-end w-full md:grid-cols-3">
  <FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="URL"/>
</div>
{/if}

  </AccordionItem>

</Accordion>
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
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alisa Name"/></TableBodyCell>
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
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alisa Name"/></TableBodyCell>
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
      <TableBodyCell><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alisa Name"/></TableBodyCell>
      <TableBodyCell><Fileupload id="mc4" bind:mc4value/></TableBodyCell>
      <TableBodyCell><Button color="dark" on:click={btn1}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>
</Tabs>