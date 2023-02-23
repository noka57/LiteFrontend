<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  let tdStyle="width:25%";
</script>

<Table noborder={true}>

  <TableBody>
    <TableBodyRow>
      <TableBodyCell {tdStyle}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">System Uptime</p>
<p class="text-xl font-bold">1hr 11mins</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">Internet Uptime</p>
<p class="text-xl font-bold">1hr 3mins</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">CPU Temperature</p>
<p class="text-xl font-bold">45.0°C</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle}><div class="flex"><div class="">
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-blue-500 mr-2 rounded-full dark:text-pink-500 w-12 h-12">
  <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">Traffic</p>
<p class="text-xl font-bold">1Mb</p>
</div>
</div>

      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>