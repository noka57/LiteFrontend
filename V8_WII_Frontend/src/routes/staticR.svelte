<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {staticrouteConfig} from "./configG.js";

   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let EnableSR=false;;
   let formModal = false;
   let formModal2 = false;

   let StaticRouteArrays = [];
   let NewRouteItem=[0,"","","",0,0];


  let static_route_data="";
  let getdataAlready=0;
  let static_route_current_index;

   let sessionid;
   sessionidG.subscribe(val => {
     sessionid = val;
   });


   staticrouteConfig.subscribe(val => {
        static_route_data = val;
    });


  function modalTrigger(index){
    formModal = true;
    static_route_current_index=index;

   }


   async function getStaticRouteData () {
    const res = await fetch(window.location.origin+"/getStaticRouteData", {
      method: 'POST',
      body: JSON.stringify({
        sessionid
      })
    })

    if (res.status == 200)
    {
      static_route_data =await res.json();
      console.log(static_route_data);
      getdataAlready=1;

      staticrouteConfig.set(static_route_data);
      EnableSR=!!static_route_data.config.networking_staticRoute.enable;
      StaticRouteArrays=static_route_data.config.networking_staticRoute.list;

      console.log(StaticRouteArrays);

    }
  }


  onMount(() => {

    console.log("static route sessionid: ");
    console.log(sessionid);


    if (sessionid && static_route_data=="")
    {
        getStaticRouteData();
    }
    else if(sessionid && static_route_data!="")
    {


    }

  });

  const AddRoute = () => {
    alert('AddRoute');
  };

</script>

<label>
  <input type=checkbox checked={EnableSR}>
  Enable Static Route
</label>


<p class="mt-10"></p>


 <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Destination IP</TableHeadCell>
    <TableHeadCell class="w-10">Network Mask</TableHeadCell>
    <TableHeadCell class="w-10">Gateway IP</TableHeadCell>
    <TableHeadCell class="w-10">Interface</TableHeadCell>
    <TableHeadCell class="w-22">Metric</TableHeadCell>

  </TableHead>
  <TableBody>


{#each StaticRouteArrays as StaticRoute, index}

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

      <TableBodyCell class="w-10">{StaticRoute.enable}</TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.dstIp}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.netmask}</TableBodyCell>
      <TableBodyCell class="w-10">{StaticRoute.gateway}</TableBodyCell>
{#if StaticRoute.interface==0}
      <TableBodyCell class="w-10">Auto</TableBodyCell>
{:else if StaticRoute.interface==1}
  <TableBodyCell class="w-10">LAN</TableBodyCell>
{:else if StaticRoute.interface==2}
  <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if StaticRoute.interface==3}
  <TableBodyCell class="w-10">Cellular WAN-1</TableBodyCell>
{/if}
    <TableBodyCell class="w-10">{StaticRoute.metric}</TableBodyCell>
    </TableBodyRow>
{/each}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModal2=true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

            <TableBodyCell class="!p-4">

            </TableBodyCell>
            <TableBodyCell class="!p-4 w-4">

            </TableBodyCell>
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


<Modal bind:open={formModal}  size="lg" class="w-full" autoclose>
  <form action="#">

<label>
  <input class="center" type=checkbox checked={!!StaticRouteArrays[static_route_current_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={StaticRouteArrays[static_route_current_index].dstIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={StaticRouteArrays[static_route_current_index].netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={StaticRouteArrays[static_route_current_index].gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={StaticRouteArrays[static_route_current_index].interface} value={0} >Auto</Radio>
  <Radio bind:group={StaticRouteArrays[static_route_current_index].interface} value={1} >LAN</Radio>
  <Radio bind:group={StaticRouteArrays[static_route_current_index].interface} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={StaticRouteArrays[static_route_current_index].interface} value={3} >Cellular WAN-1</Radio>


</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="text" bind:value={StaticRouteArrays[static_route_current_index].metric} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={formModal2}  size="lg" class="w-full" autoclose>
  <form action="#">

<label>
  <input class="center" type=checkbox checked={!!NewRouteItem[0]}>
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRouteItem[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRouteItem[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRouteItem[3]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={NewRouteItem[4]} value={0} >Auto</Radio>
  <Radio bind:group={NewRouteItem[4]} value={1} >LAN</Radio>
  <Radio bind:group={NewRouteItem[4]} value={2} >Ethernet WAN</Radio>
  <Radio bind:group={NewRouteItem[4]} value={3} >Cellular WAN-1</Radio>


</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRouteItem[5]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddRoute}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



  </TableBody>
</Table>