<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload,  FloatingLabelInput, Input, Dropdown, DropdownItem, Chevron, Select} from 'flowbite-svelte';

let openvpnBasic='Enable';
let openvpnBasic2='Manual';
let openvpnBasic3='Client';
let vpnname="test1";

let vpnnameList = [
    {value:"test1", name: "test1"},
    {value:"test2", name: "test2"},
    {value:"test3", name: "test3"},
  ];


let mc="aws";

let MachineCList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"ss", name: "Self-sign"},
  ];


  let rcac="azure";

let RemoteCAList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"ss", name: "Self-sign"},
  ];


  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
let name="";
  export let ovpnimport;

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
  <TabItem open title="Overview">
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Client
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
    List all clients' information
    </p>
  </caption>
  <TableHead>
    <TableHeadCell class="w-10">Index</TableHeadCell>
    <TableHeadCell class="w-10">VPN Name</TableHeadCell>
    <TableHeadCell class="w-10">State</TableHeadCell>
    <TableHeadCell class="w-10">VPN State</TableHeadCell>
    <TableHeadCell class="w-10">Client IP</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
            <TableBodyCell>
test1
      </TableBodyCell>
      <TableBodyCell>Active</TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
      <TableBodyCell>10.123.12.2</TableBodyCell>
<TableBodyCell class="w-10"><Button color="dark" pill={true}>Export</Button></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
            <TableBodyCell>
test2
      </TableBodyCell>
      <TableBodyCell>Active</TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
      <TableBodyCell>10.123.12.3</TableBodyCell>
<TableBodyCell class="w-10"><Button color="dark" pill={true}>Export</Button></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>3</TableBodyCell>
            <TableBodyCell>
test3
      </TableBodyCell>
      <TableBodyCell>Active</TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
      <TableBodyCell>10.123.12.4</TableBodyCell>
<TableBodyCell class="w-10"><Button color="dark" pill={true}>Export</Button></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
    </TabItem>

      <TabItem title="Basic">
<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">OpenVPN Check</span>
<Radio bind:group={openvpnBasic} class='p-3' value='Disable'>Disable</Radio>
<Radio bind:group={openvpnBasic} class='p-3' value='Enable'>Enable</Radio>

  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Configuration Source</span>
<Radio bind:group={openvpnBasic2} class='p-3' value='Manual'>Manually edit current configuration file</Radio>
<Radio bind:group={openvpnBasic2} class='p-3' value='Import'>Import an existing configuration file</Radio>

<TableBodyCell><Fileupload id="ovpn" bind:ovpnimport/></TableBodyCell>
<TableBodyCell><Button color="dark" on:click={btn1}>Import</Button></TableBodyCell>
  </AccordionItem>

  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">OpenVPN Role</span>
    <Radio bind:group={openvpnBasic3} class='p-3' value='Client'>Client</Radio>
<Radio bind:group={openvpnBasic3} class='p-3' value='Server'>Server</Radio>
    </AccordionItem>
</Accordion>
    </TabItem>


    <TabItem title="Connection">

    <Select class="mt-2" items={vpnnameList} bind:value={vpnname} />



<p class="pt-10"></p>

<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">General</span>
 <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>VPN Name</TableHeadCell>
    <TableHeadCell>Remote VPN Address</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Initial Mode</TableHeadCell>
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
      <TableBodyCell class="!p-4 w-10">
                  <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
            </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>test1</TableBodyCell>
      <TableBodyCell>10.0.0.1</TableBodyCell>
      <TableBodyCell>1194</TableBodyCell>
      <TableBodyCell>TCP</TableBodyCell>
      <TableBodyCell>Disabled</TableBodyCell>
    </TableBodyRow>



  </TableBody>
</Table>
    </AccordionItem>

      <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Tunnel</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Remote Subnet</TableHeadCell>
    <TableHeadCell>Comment</TableHeadCell>
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
      <TableBodyCell class="!p-4 w-10">
                  <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
            </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>192.168.254.0/24</TableBodyCell>
      <TableBodyCell>subnet1</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
      <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>
            <TableBodyCell class="!p-4 w-10">
                  <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
            </TableBodyCell>
      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell>192.168.1.0/24</TableBodyCell>
      <TableBodyCell>subnet2</TableBodyCell>
    </TableBodyRow>



<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
            <TableBodyCell class="!p-4 w-10">

            </TableBodyCell>
      <TableBodyCell class="w-10">3</TableBodyCell>
      <TableBodyCell class="w-20"><input bind:value={name} class="block rounded-t-lg text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-5"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

    </AccordionItem>



      <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Authentication</span>
    <p>Local Certificate: </p>     <Select class="mt-2" items={MachineCList} bind:value={mc} />
    <p>Remote CA Certificate: </p>     <Select class="mt-2" items={RemoteCAList} bind:value={rcac} />

        </AccordionItem>



      <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Advanced</span>
        </AccordionItem>

</Accordion>

  </TabItem>
</Tabs>
