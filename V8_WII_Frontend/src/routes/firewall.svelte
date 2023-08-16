<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { firewallConfig} from "./configG.js"


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let EnableFilter=false;
   let IPFilterType=0;
   let formModal = false;
   let MACFilterType=0;
   let formModal2 = false;


   let IPFilterArrays = [];
   let MACFilterArrays = [];

   let firewall_data="";
   let getdataAlready=0;
   let ipfilter_current_index;
   let macfilter_current_index;
   let NewIPFilterItem=[0,0,0,"","","Any",0,[1,2]];
   let NewMacFilterItem=[0,""];

   let newformModal=false;
   let newformModal2=false;

   let sessionid;
   sessionidG.subscribe(val => {
     sessionid = val;
   });

   firewallConfig.subscribe(val => {
        firewall_data = val;
    });


  function modalTrigger(index){
    formModal = true;
    ipfilter_current_index=index;

   }


  function modalTrigger2(index){
    formModal2 = true;
    macfilter_current_index=index;

   }


   async function getFirewallData () {
    const res = await fetch(window.location.origin+"/getFirewalldata", {
      method: 'POST',
      body: JSON.stringify({
        sessionid
      })
    })

    if (res.status == 200)
    {
      firewall_data =await res.json();
      console.log(firewall_data);
      getdataAlready=1;

      firewallConfig.set(firewall_data);
      EnableFilter=!!firewall_data.config.networking_firewall_general.enable;
      IPFilterType=firewall_data.config.networking_firewall_ipFilter.type;
      IPFilterArrays=firewall_data.config.networking_firewall_ipFilter.list;

      MACFilterType=firewall_data.config.networking_firewall_macFilter.type;
      MACFilterArrays=firewall_data.config.networking_firewall_macFilter.list;


    }
  }


  onMount(() => {

    console.log("firewall sessionid: ");
    console.log(sessionid);


    if (sessionid && firewall_data =="")
    {
        getFirewallData();
    }
    else if (sessionid && firewall_data != "")
    {

    }

  });

</script>


<Tabs style="underline">
  <TabItem open title="General">
<table>
  <tr>
<label>
  <input type=checkbox checked={EnableFilter}>
  Enable Filter
</label>
</tr>

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
  </TabItem>

  <TabItem title="IP Filter">
<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">IP Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
      <Radio bind:group={IPFilterType} value={0} >Black List</Radio>
  <Radio bind:group={IPFilterType} value={1} >White List</Radio>

</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>From Interface</TableHeadCell>
    <TableHeadCell>To Interface</TableHeadCell>
    <TableHeadCell>Source IP</TableHeadCell>
    <TableHeadCell>Destination IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell class="w-22">Destination Port</TableHeadCell>
  </TableHead>
  <TableBody>


{#each IPFilterArrays as IPfilter, index}

    <TableBodyRow>

      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableHeadCell class="!p-4">
    </TableHeadCell>


          <TableBodyCell class="w-10">{IPfilter.enable}</TableBodyCell>
          <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if IPfilter.fromIf == 0}
          <TableBodyCell class="w-10">Any</TableBodyCell>
{:else if IPfilter.fromIf==1}
        <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if IPfilter.fromIf==2}
        <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if IPfilter.fromIf==3}
        <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>
{/if}

{#if IPfilter.toIf == 0}
          <TableBodyCell class="w-10">Any</TableBodyCell>
{:else if IPfilter.toIf==1}
        <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if IPfilter.toIf==2}
        <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if IPfilter.toIf==3}
        <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>
{/if}
        <TableBodyCell class="w-10">{IPfilter.srcIp}</TableBodyCell>
        <TableBodyCell class="w-10">{IPfilter.dstIp}</TableBodyCell>

       <TableBodyCell class="w-10">{IPfilter.protocol}</TableBodyCell>
{#if IPfilter.dstPort==0}
        <TableBodyCell class="w-10">{IPfilter.dstPortRange.start}</TableBodyCell>
{:else if IPfilter.dstPort==1}

        <TableBodyCell class="w-10">{IPfilter.dstPortRange.start}-{IPfilter.dstPortRange.end}</TableBodyCell>
{/if}
        </TableBodyRow>
{/each}


<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => newformModal = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-22"></TableBodyCell>
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
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={newformModal} size="lg" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={NewIPFilterItem[0]}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">From Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={NewIPFilterItem[1]} value={0} >Any</Radio>
  <Radio bind:group={NewIPFilterItem[1]} value={1} >LAN</Radio>
  <Radio bind:group={NewIPFilterItem[1]} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={NewIPFilterItem[1]} value={3} >Cellular WAN-1</Radio>

</div></td>
</tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">To Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={NewIPFilterItem[2]} value={0} >Any</Radio>
  <Radio bind:group={NewIPFilterItem[2]} value={1} >LAN</Radio>
  <Radio bind:group={NewIPFilterItem[2]} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={NewIPFilterItem[2]} value={3} >Cellular WAN-1</Radio>
</div></td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewIPFilterItem[3]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewIPFilterItem[4]}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={NewIPFilterItem[5]} value='Any' >Any</Radio>
  <Radio bind:group={NewIPFilterItem[5]} value='TCP' >TCP</Radio>
  <Radio bind:group={NewIPFilterItem[5]} value='UDP' >UDP</Radio>
</div></td>
</tr>





 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={NewIPFilterItem[6]} value={0} >Single Port</Radio><input type="number" bind:value={NewIPFilterItem[7][0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={NewIPFilterItem[6]} value={1} >Port Range</Radio><input type="number" bind:value={NewIPFilterItem[7][0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={NewIPFilterItem[7][1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={formModal} size="lg" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={IPFilterArrays[ipfilter_current_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">From Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].fromIf} value={0} >Any</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].fromIf} value={1} >LAN</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].fromIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].fromIf} value={3} >Cellular WAN-1</Radio>

</div></td>
</tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">To Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].toIf} value={0} >Any</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].toIf} value={1} >LAN</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].toIf} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].toIf} value={3} >Cellular WAN-1</Radio>
</div></td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Source IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={IPFilterArrays[ipfilter_current_index].srcIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={IPFilterArrays[ipfilter_current_index].dstIp}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].protocol} value='Any' >Any</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].protocol} value='UDP' >UDP</Radio>
</div></td>
</tr>





 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].dstPort} value={0} >Single Port</Radio><input type="number" bind:value={IPFilterArrays[ipfilter_current_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={IPFilterArrays[ipfilter_current_index].dstPort} value={1} >Port Range</Radio><input type="number" bind:value={IPFilterArrays[ipfilter_current_index].dstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={IPFilterArrays[ipfilter_current_index].dstPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>
  </TabItem>


  <TabItem title="MAC Filter">

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Filter Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
      <Radio bind:group={MACFilterType} value={0} >Black List</Radio>
  <Radio bind:group={MACFilterType} value={1} >White List</Radio>

</div></td>
</tr>

</table>
<p class="mt-10"></p>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-36">MAC Address</TableHeadCell>
</TableHead>
  <TableBody>

{#each MACFilterArrays as MACfilter, index}

    <TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger2(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>

            <TableBodyCell class="!p-4">

            </TableBodyCell>

      <TableBodyCell class="w-10">{MACfilter.enable}</TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-36">{MACfilter.macAddr}</TableBodyCell>
    </TableBodyRow>

{/each}


<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => newformModal2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
    </TableBodyRow>

    <tr>
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

<Modal bind:open={formModal2} size="lg" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={MACFilterArrays[macfilter_current_index].enable}>
  Enable
</label>

<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MACFilterArrays[macfilter_current_index].macAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>
</table>

    </form>
</Modal>


<Modal bind:open={newformModal2} size="lg" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox checked={NewMacFilterItem[0]}>
  Enable
</label>

<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewMacFilterItem[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
</table>

    </form>
</Modal>




  </TableBody>
</Table>
  </TabItem>

</Tabs>
