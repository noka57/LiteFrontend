<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';

let wifi_general_disable=1;
let wifi_general_mode=0;
  

</script>


<Tabs>
 <TabItem open title="General">
  <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Enable</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={wifi_general_disable} value={1}>Disable</Radio>
  <Radio bind:group={wifi_general_disable} value={0} >Enable</Radio>

</div></td>
      </tr>


      <tr>
          <td></td>

{#if wifi_general_disable == 0}    
          <td><p class="pl-5 pt-5 text-lg font-light text-left">Mode</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

    <Radio bind:group={wifi_general_mode} value={0}>Station</Radio>
    <Radio bind:group={wifi_general_mode} value={1}>AP</Radio>
</div></td>
{:else}
          <td><p class="pl-5 pt-5 text-lg font-light text-left">Mode</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

    <Radio bind:group={wifi_general_mode} value={0} disabled>Station</Radio>
    <Radio bind:group={wifi_general_mode} value={1} disabled>AP</Radio>
</div></td>
{/if}

      </tr>


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


      </table>


   </TabItem>


{#if wifi_general_disable == 0}   
 <TabItem title="11ah">

 {#if wifi_general_mode ==0}
<table>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">

</td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>WPA3</option>
</select>

      </td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

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


 {:else if wifi_general_mode==1}

<table>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">

</td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>WPA3</option>
</select>

      </td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>TAIWAN</option>
<option value={1}>US</option>
</select>

      </td>

</tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation Band(MHz)</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
</select>

      </td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
</select>

      </td>

</tr>






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


 {/if}

</TabItem>
{/if}
 </Tabs>
