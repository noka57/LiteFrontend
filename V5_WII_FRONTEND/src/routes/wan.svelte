<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea } from 'flowbite-svelte';



   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

</script>

<Tabs style="underline">
  <TabItem open title="General Status">
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
  <TabItem title="Cellular WAN-1">
<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Tag Base View</span>




  </AccordionItem>
 </Accordion>   
  </TabItem>


  <TabItem title="Cellular WAN-2">
  <p>TBD</p>
  </TabItem>

  <TabItem title="Dual Cellular Policy">
  <p>TBD</p>
  </TabItem>


  <TabItem title="Ethernet WAN">
  <p>TBD</p>
  </TabItem>



  <TabItem title="WAN Redundancy
Policy">
  <p>TBD</p>
  </TabItem>


  <TabItem title="Fare Saving Policy">
  <p>TBD</p>
  </TabItem>
  
</Tabs>
