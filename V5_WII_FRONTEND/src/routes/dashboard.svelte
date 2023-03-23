<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge } from 'flowbite-svelte';
  import ProgressCircle from './CircleProgressBar.svelte'
  let tdStyle="width:25%";
  let tableBodyClass="";
  let tdClass="border-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium";
  let value1=50;
  let value2=80;
  let value3=85;
  let value4=98;


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
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="660 368 50 30"  class="w-12 h-12">

    <path fill="#076291" d="M702.39,382.07c0.02-0.18,0.03-0.34,0.03-0.49c0-2.85-2.31-5.16-5.15-5.16c-0.53,0-1.04,0.08-1.53,0.23
      c-0.23-0.35-0.5-0.67-0.78-0.97l-21.3,21.31h19.21c0,0,0.01-0.01,0.01-0.01c0.09,0,0.18,0.01,0.27,0.01
      c2.71,0,5.11-1.31,6.62-3.33c3.28-0.14,5.9-2.84,5.9-6.15C705.66,385.21,704.41,383.15,702.39,382.07z M700.17,393.04
      c0.77-1.26,1.23-2.73,1.23-4.32c0-3.26-1.89-6.07-4.63-7.41c0.05-0.3,0.08-0.61,0.08-0.92c0-1.17-0.29-2.27-0.81-3.24
      c0.39-0.11,0.81-0.17,1.23-0.17c2.53,0,4.58,2.06,4.58,4.59c0,0.18-0.02,0.37-0.05,0.61l-0.03,0.21l0.19,0.09
      c1.93,0.95,3.13,2.87,3.13,5.01C705.08,390.35,702.93,392.71,700.17,393.04z"/>

    <path fill="#1A87C9" d="M690,373.55c-1.89,0-3.61,0.77-4.85,2c-1.57-2.14-4.06-3.54-6.92-3.54c-4.73,0-8.58,3.84-8.58,8.58
      c0,0.2,0.05,0.4,0.06,0.62c-0.42-0.08-0.85-0.14-1.27-0.14c-4.47,0-8.1,3.62-8.1,8.09c0,3.81,2.64,6.99,6.2,7.84h7.1l21.31-21.31
      C693.7,374.37,691.95,373.55,690,373.55z"/>

<text transform="matrix(1.0002 0 0 1 667.4022 389.6925)" fill="#FFFFFF" font-family="OpenSans" font-size="6px">Pave2Edge</text>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">Pave2Edge</p>
<p class="text-xl font-bold">Connected</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {tdStyle} {tdClass}><div class="flex"><div class="">
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-blue-500 mr-2 rounded-full dark:text-pink-500 w-12 h-12">
  <path d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">GPS</p>
<p class="text-xl font-bold">25, 23</p>
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
        <TableBodyCell class="border-l-8 border-r-0 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class=""><p class="text-black text-lg">SIM A</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"></path>
</svg></div>
<div class="w-full pt-4 px-10">
<p class="text-sm font-light">LTE</p>
<p class="text-sm font-light">Band</p>
<p class="text-sm font-light">CHT</p>
</div>
</div>

              </TableBodyCell>
                      <TableBodyCell class="border-l-0 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class=""><p class="text-black text-lg">SIM B</p>
                      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"></path>
</svg>
</div>
<div class="w-full pt-4 px-10">
<p class="text-sm font-light">5G</p>
<p class="text-sm font-light">Band</p>
<p class="text-sm font-light">CHT</p>
</div>
</div>
              </TableBodyCell>

              <TableBodyCell class="border-l-8 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class=""><p class="text-black text-lg text-center">LAN 1</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>
<div class="pl-20"><p class="text-black text-lg text-center">LAN 2</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>

<div class="pl-20"><p class="text-black text-lg text-center">LAN 3</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>

<div class="pl-20"><p class="text-black text-lg text-center">LAN 4</p>
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-gray-700 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path clip-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" fill-rule="evenodd"></path>
</svg>
</div>


<div class="pl-20"><p class="text-black text-lg text-center">WAN</p>
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
<div class="px-40"><p class="text-lg font-light">wan(or cellular)</p>
        <p class="text-lg font-light">10.20.218.162</p>
        <p class="text-lg font-light">10.20.218.161</p>
        <p class="text-lg font-light">8.8.8.8/7.7.7.7</p>
</div>
</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">IP Address(IPv4)</p>
        <p class="text-black text-lg">Default Gateway</p>
        <p class="text-black text-lg">DNS</p>
</div>
<div class="px-40">
        <p class="text-lg font-light">192.168.1.2</p>
        <p class="text-lg font-light">192.168.1.1</p>
        <p class="text-lg font-light">8.8.8.8/7.7.7.7</p>
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
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class=""><ProgressCircle max="102" value="{value1}" color="blue"/>
<p class="text-black text-lg text-center">CPU</p>
</div>
<div class="pl-20">
<ProgressCircle max="102" value="{value2}" color="green"/>
<p class="text-black text-lg text-center">RAM</p>
</div>
<div class="pl-20">
<ProgressCircle max="102" value="{value3}" color="yellow"/>
<p class="text-black text-lg text-center">EMMC</p>
</div>
<div class="pl-20">
<ProgressCircle max="102" value="{value4}" color="orange"/>
<p class="text-black text-lg text-center">SD Card</p>
</div>

</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">Model Name</p>
        <p class="text-black text-lg">Serial Number</p>
        <p class="text-black text-lg">Firmware Version</p>
        <p class="text-black text-lg">MAC Address</p>
        <p class="text-black text-lg">IMEI</p>
        <p class="text-black text-lg">Modem Vendor/Model</p>
        <p class="text-black text-lg">System Time</p>



</div>
<div class="px-40">
        <p class="text-lg font-light">Air PACE 2 PV</p>
        <p class="text-lg font-light">12345678</p>
        <p class="text-lg font-light">0.0.1</p>
        <p class="text-lg font-light">00:0E:AB:AB:AB:AB</p>
        <p class="text-lg font-light">85158xxxxxxx</p>
        <p class="text-lg font-light">Quectel/EC25</p>
        <p class="text-lg font-light">Fri Mar 3 10:30:30 2023</p>


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
        <p class="text-black text-lg">Service</p>
</div>
<div class="px-40"><p class="text-lg font-light">Azure</p>
<p class="text-lg font-light">DPS</p>
</div>
</div>
                      </TableBodyCell>

   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">Type</p>
        <p class="text-black text-lg">Role</p>
</div>
<div class="px-40">
        <p class="text-lg font-light">OpenVPN</p>
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