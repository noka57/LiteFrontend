<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let ipMode="Sip";
   let sipAddr="";
   let sipNetMask="";
   let adIPName="";
   let adipInterface="lo";
   let adipAddr="";
   let adipNetMask="";
   let formModal = false;
   let vs=false;


   let lan_data="";
   let getdataAlready=0;

   let sessionid;
   sessionidG.subscribe(val => {
     sessionid = val;
   });


   async function getLANData () {
    const res = await fetch(window.location.origin+"/getLANdata", {
      method: 'POST',
      body: JSON.stringify({
        sessionid
      })
    })

    if (res.status == 200)
    {
      lan_data =await res.json();
      console.log(lan_data);
      getdataAlready=1;

    }
  }


  onMount(() => {

    console.log("lan sessionid: ");
    console.log(sessionid);


    if (sessionid)
    {
        getLANData();
    }

  });

</script>



<table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">IP Mode</p>

  </td>

    <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={ipMode} value='Sip' >Static</Radio>
  <Radio bind:group={ipMode} value='Dip' >DHCP</Radio>

</div></td>
</tr>
{#if ipMode=="Sip"}
<tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={sipAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={sipNetMask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


{/if}

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>




