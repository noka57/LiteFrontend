<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge } from 'flowbite-svelte';
  let tdStyle="width:25%";
  let tableBodyClass="";
  let tdClass="border-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" 
</script>

<Table>

  <TableBody>
    <TableBodyRow>
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">System Uptime</p>
<p class="text-xl font-bold">1hr 11mins</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">Internet Uptime</p>
<p class="text-xl font-bold">1hr 3mins</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">CPU Temperature</p>
<p class="text-xl font-bold">45.0°C</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class="">
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
        <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Modem</p>


              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Ethernet</p>
              </TableBodyCell>

            </TableBodyRow>


                    <TableBodyRow>      
        <TableBodyCell class="border-l-8 border-r-0 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class=""><p class="text-black text-lg">SIM1</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"></path>
</svg></div>
<div class="w-full pt-4 px-10">
<p class="text-sm font-light">LTE</p>
<p class="text-sm font-light">CHT</p>
</div>
</div>

              </TableBodyCell>
                      <TableBodyCell class="border-l-0 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><p class="text-black text-lg">SIM2</p>
                      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"></path>
</svg>
              </TableBodyCell>

              <TableBodyCell class="border-l-8 border-r-0 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class="px-10"><p class="text-black text-lg text-center">Eth1</p>
              </div>
<div>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
              </TableBodyCell>

  <TableBodyCell class="border-l-0 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class="px-10"><p class="text-black text-lg text-center">Eth2</p>
              </div>
<div>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
              </TableBodyCell>

            </TableBodyRow>
             <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Internet Status</p>


              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">LAN Status</p>
              </TableBodyCell>

            </TableBodyRow>


             <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10"><p class="text-black text-lg">Active Link</p>
        <p class="text-black text-lg">IP Address</p>
        <p class="text-black text-lg">Gateway</p>
        <p class="text-black text-lg">DNS</p>
</div>
<div class="px-40"><p class="text-lg font-light">wwan</p>
        <p class="text-lg font-light">10.20.218.162</p>
        <p class="text-lg font-light">10.20.218.161</p>
        <p class="text-lg font-light">8.8.8.8</p>
</div>
</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">IP Address</p>
        <p class="text-black text-lg">MAC Address</p>
</div>
<div class="px-40">
        <p class="text-lg font-light">192.168.1.1</p>
        <p class="text-lg font-light">AA:BB:CC:DD:EE:FF</p>
</div>
</div>
                      </TableBodyCell>
        </TableBodyRow>

 <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">System Resource</p>


              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">System Information</p>
              </TableBodyCell>

            </TableBodyRow>


             <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="pl-5 w-full"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-14 h-14">
  <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg><p class="text-black text-lg">CPU Solo Core</p>
</div>
<div class="w-full"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-14 h-14">
  <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg><p class="text-black text-lg">RAM</p>
</div>
<div class="w-full"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-14 h-14">
  <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg><p class="text-black text-lg">Storage</p>
</div>


</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">Operating System</p>
        <p class="text-black text-lg">System Time</p>
        <p class="text-black text-lg">Firmware Version</p>
        <p class="text-black text-lg">Hardware Version</p>
        <p class="text-black text-lg">Serial Number</p>
</div>
<div class="px-40">
        <p class="text-lg font-light">OpenWRT</p>
        <p class="text-lg font-light">Fri Mar 3 10:30:30 2023</p>
        <p class="text-lg font-light">0.0.1</p>
        <p class="text-lg font-light">0.0.1</p>
        <p class="text-lg font-light">12345678</p>
</div>
</div>
                      </TableBodyCell>
        </TableBodyRow>


         <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Cloud Status</p>


              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">VPN Status</p>
              </TableBodyCell>

            </TableBodyRow>


             <TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10"><p class="text-black text-lg">Platform</p>
</div>
<div class="px-40"><p class="text-lg font-light">Azure</p>
</div>
</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">VPN Role</p>
</div>
<div class="px-40">
        <p class="text-lg font-light">Client</p>
</div>
</div>
<div class="pt-5 px-10" colspan="2">
<Badge large color="green">1</Badge>
<Badge large color="green">2</Badge>
<Badge large color="green">3</Badge>
<Badge large color="green">4</Badge>
<Badge large color="red">5</Badge>
<Badge large color="red">6</Badge>
<Badge large color="red">7</Badge>
<Badge large color="red">8</Badge>
<Badge large color="red">9</Badge>
<Badge large color="red">10</Badge>
</div>
                      </TableBodyCell>
        </TableBodyRow>

  </TableBody>
</Table>