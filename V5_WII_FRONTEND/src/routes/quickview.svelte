<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea } from 'flowbite-svelte';

  let searchTerm = '';
  let items = [
    { tagname: '1tag1', timestamp: '2023 March', value: 1234, sid: 1, fc: 1, start: 1, len:1, resp:"rsp1" },
    { tagname: '2tag2', timestamp: '2023 March', value: 5678, sid: 1, fc: 1, start: 2, len:1, resp:"rsp2" },
    { tagname: '3tag3', timestamp: '2023 March', value: 9012, sid: 1, fc: 1, start: 3, len:1, resp:"rsp3" },
    { tagname: '4tag4', timestamp: '2023 March', value: 3456, sid: 1, fc: 1, start: 4, len:1, resp:"rsp4" },
  ];
  $: filteredItems = items.filter(
    (item) => item.tagname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  let searchTerm2 = '';
  let items2 = [
    { upname: '1up1', uptimestamp: '2023 March', upcontent:"{key: value}" },
    { upname: '2up2', uptimestamp: '2023 March', upcontent:"{key: value}" },
    { upname: '3up3', uptimestamp: '2023 March', upcontent:"{key: value}" },
    { upname: '4up4', uptimestamp: '2023 March', upcontent:"{key: value}" },
  ];
  $: filteredItems2 = items2.filter(
    (item2) => item2.upname.toLowerCase().indexOf(searchTerm2.toLowerCase()) !== -1
  );

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

</script>

<Tabs style="underline">
  <TabItem open title="Field Port">
<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">DI Status</div>
<Table>
  <TableHead>
    <TableHeadCell>Index</TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Level</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>
    <TableHeadCell>Count</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>DI1</TableBodyCell>
      <TableBodyCell>High</TableBodyCell>
      <TableBodyCell>Alarm Off</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
      <TableBodyCell>DI2</TableBodyCell>
      <TableBodyCell>High</TableBodyCell>
      <TableBodyCell>Alarm Off</TableBodyCell>
    </TableBodyRow>

  </TableBody>
</Table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Action Of Clear</span>
    <table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-center"> Counter Alarm Of DI 1 Clear </p></td><td class="pl-5"><Button color="red">Clear</Button></td>
    </tr>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-center"> Counter Alarm Of DI 2 Clear </p></td><td class="pl-5 pt-1"><Button color="red">Clear</Button></td>
    </tr>
    </table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">DO Status</span>
<Table>
  <TableHead>
    <TableHeadCell>Index</TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Level</TableHeadCell>
    <TableHeadCell>Low-level Width</TableHeadCell>
    <TableHeadCell>High-level Width</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>DO3</TableBodyCell>
      <TableBodyCell>Low</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
      <TableBodyCell>DO4</TableBodyCell>
      <TableBodyCell>Low</TableBodyCell>
    </TableBodyRow>

  </TableBody>
</Table>
  </AccordionItem>

   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">DO Control</span>
    <table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-center"> Level Of DO 3</p></td><td class="pl-5"><Button color="red">Toggle</Button></td>
    </tr>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-center"> Level Of DO 4</p></td><td class="pl-5 pt-1"><Button color="red">Toggle</Button></td>
    </tr>
    </table>
  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">COM X Buffer Display</span>
    <table>
    <tr>
    <td class="pl-40"><Label for="textarea-id" class="mb-2">TX message</Label>
<Textarea id="textarea-id" placeholder="TX" rows="4" name="message"/></td>
    
    <td class="pl-40"><Label for="textarea-id2" class="mb-2">RX message</Label>
<Textarea id="textarea-id2" placeholder="RX" rows="4" name="message2"/></td>
    </tr>
    </table>
  </AccordionItem>
</Accordion>
  </TabItem>
  <TabItem title="Data Tag">
<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Tag Base View</span>

    <TableSearch placeholder="Search by Tag name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>Tag Name</TableHeadCell>
    <TableHeadCell>Time Stamp</TableHeadCell>
    <TableHeadCell>Tag Value</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>FC</TableHeadCell>
    <TableHeadCell>Start Addr</TableHeadCell>
    <TableHeadCell>Length</TableHeadCell>
    <TableHeadCell>Response Data String(250 Characters)</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.tagname}</TableBodyCell>
        <TableBodyCell>{item.timestamp}</TableBodyCell>
        <TableBodyCell>{item.value}</TableBodyCell>
        <TableBodyCell>{item.sid}</TableBodyCell>
        <TableBodyCell>{item.fc}</TableBodyCell>
        <TableBodyCell>{item.start}</TableBodyCell>
        <TableBodyCell>{item.len}</TableBodyCell>
        <TableBodyCell>{item.resp}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Tag Uplink View</span>
<TableSearch placeholder="Search by Uplink ID Name" hoverable={true} bind:inputValue={searchTerm2}>
  <TableHead>
    <TableHeadCell>Uplink ID Name</TableHeadCell>
    <TableHeadCell>Time Stamp</TableHeadCell>
    <TableHeadCell>Uplink JSON Content</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each filteredItems2 as item2}
      <TableBodyRow>
        <TableBodyCell>{item2.upname}</TableBodyCell>
        <TableBodyCell>{item2.uptimestamp}</TableBodyCell>
        <TableBodyCell>{item2.upcontent}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>



  </AccordionItem>
 </Accordion>   
  </TabItem>
</Tabs>
