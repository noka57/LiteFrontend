<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';
 import TimezonePicker from 'svelte-timezone-picker';

   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let isActiveST = false;

   let isActiveDLS = false;

    let formModal = false;

    let selected="GPS";


    let timezone = 'Asia/Taipei';
    let MYear=2023;
    let MMonth=7;
    let MDay=26;
    let MHour=10;
    let MMin=10;

  function update(ev) {
    alert(ev.detail.timezone);
  }

 </script>
<Tabs style="underline">
  <TabItem open title="time">
<table>
    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Current Local Date & Time</p></td>
    <td class="pl-5 pt-5">7/26/2023, 10:10</td>


  	</tr>

  	<tr>
  	<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Automatic Date & Time</p></td><td class="pl-5 pt-5"><Toggle bind:checked={isActiveST}></Toggle></td>
  	</tr>



  	<tr>
  	<td class="w-85">	</td>
  	<td class="w-85 pt-5 pl-5">


{#if !isActiveST}
	<Button on:click={() => formModal = true}>Manually Set Date & Time</Button>

{:else}
<Radio bind:group={selected} value='GPS'><p class="text-lg pt-1">GPS</p></Radio>


<Radio bind:group={selected} value='NTP'><p class="text-lg pt-1">NTP</p>

<p class="pl-5">
{#if selected=="NTP"} <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" />
{:else}
<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" disabled/>
{/if}
</p>
</Radio>
{/if}
	</td>
  	</tr>

  	<tr>
  	<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Time Zone</p></td>
  	<td class="w-85 pt-5 pl-5"><TimezonePicker {timezone} on:update="{update}" /></td>
  	</tr>

  	<tr>
  	<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Day Light Saving</p></td><td class="pl-5 pt-5"><Toggle bind:checked={isActiveDLS}></Toggle></td>
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



<Modal bind:open={formModal} size="md" class="w-full" autoclose>

<table>


<tr>
      <td class="w-24 pl-5 pt-5"><input type="number" bind:value={MYear} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMonth} min=1 max=12 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MDay} min=1 max=31 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-16 pt-5"> </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MHour} min=0 max=23 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-5 pt-5"> : </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMin} min=0 max=59 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


      <tr class="pt-10">
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

        <td></td>
        <td></td>
    <td class="pt-10">


    <Button color="dark" pill={true}>Apply</Button>

    </td>


    </tr>
  </table>

</Modal>

</table>


  </TabItem>

   <TabItem title="reboot">

      </TabItem>
 
   <TabItem title="reset">

      </TabItem>
 </Tabs>