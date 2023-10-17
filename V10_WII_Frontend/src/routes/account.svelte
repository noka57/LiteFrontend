<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";


    let isActive = false;
    let oldPW="";
    let newPW="";
    let confmPW="";

    let isActiveG = false;

    let oldPWG="";
    let newPWG="";
    let confmPWG="";



    let account_data="";
    let getdataAlready=0;

    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });


   async function getAccountData () {
    const res = await fetch(window.location.origin+"/getAccountData", {
      method: 'POST',
      body: sessionBinary
    })


    if (res.status == 200)
    {
      account_data =await res.json();
      console.log(account_data);
      getdataAlready=1;

    }
  }


  onMount(() => {

    console.log("account sessionid: ");
    console.log(sessionid);


    if (sessionid && account_data == "")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getAccountData();
    }

  });


 </script>



<Tabs style="underline">
  <TabItem open title="admin">
<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Change Password</p></td><td class="pl-5 pt-5"><Toggle bind:checked={isActive}></Toggle></td>
    </tr>
{#if isActive}
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Old Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={oldPW} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">New Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newPW} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Confirm Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={confmPW} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

{/if}

<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>
 </TabItem>

   <TabItem title="guest">
<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Change Password</p></td><td class="pl-5 pt-5"><Toggle bind:checked={isActiveG}></Toggle></td>
    </tr>

{#if isActiveG}
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Old Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={oldPWG} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">New Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newPWG} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Confirm Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={confmPWG} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

{/if}

<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

   </TabItem>
 </Tabs>