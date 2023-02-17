<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Radio} from 'flowbite-svelte';
  let cdefault='No';
  let ddefault='Never';
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
    <span slot="header">CRL download interval</span>
<Radio bind:group={ddefault} class='p-3' value='Never'>Never (Manually)</Radio>
<Radio bind:group={ddefault} class='p-3' value='everyY'>Every Year</Radio>
<Radio bind:group={ddefault} class='p-3' value='everyQ'>Every Quarter</Radio>
<Radio bind:group={ddefault} class='p-3' value='everyM'>Every Month</Radio>
<Radio bind:group={ddefault} class='p-3' value='everyW'>Every Week</Radio>
<Radio bind:group={ddefault} class='p-3' value='everyD'>Every Day</Radio>
  </AccordionItem>
    <AccordionItem>
    <span slot="header">CRL origin</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" >Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank"  class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion>
  </TabItem>
  <TabItem title="Machine Certificates">
    <p class="text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400" dark:hover:bg-gray-800><b>654</b> 121.</p>
  </TabItem>
  <TabItem title="CA Certificates">
    <p class="text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400" dark:hover:bg-gray-800><b>777</b> 321.</p>
  </TabItem>
  <TabItem title="Remote Certificates">
    <p class="text-sm text-gray-500 hover:bg-gray-50 dark:text-gray-400" dark:hover:bg-gray-800><b>888</b> 333.</p>
  </TabItem>
  <TabItem disabled>
    <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
    <p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>