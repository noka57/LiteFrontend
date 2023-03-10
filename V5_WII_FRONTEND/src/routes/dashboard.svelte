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
<path d="M2.25 15C2.25 17.4853 4.26472 19.5 6.75 19.5H18C20.0711 19.5 21.75 17.8211 21.75 15.75C21.75 14.1479 20.7453 12.7805 19.3316 12.2433C19.4407 11.9324 19.5 11.5981 19.5 11.25C19.5 9.59315 18.1569 8.25 16.5 8.25C16.1767 8.25 15.8654 8.30113 15.5737 8.39575C14.9765 6.1526 12.9312 4.5 10.5 4.5C7.6005 4.5 5.25 6.85051 5.25 9.75C5.25 10.0832 5.28105 10.4092 5.3404 10.7252C3.54555 11.3167 2.25 13.0071 2.25 15Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
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
        <TableBodyCell class="border-l-8 border-r-0 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class=""><p class="text-black text-lg">SIM1</p>
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
                      <TableBodyCell class="border-l-0 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"><div class="flex"><div class=""><p class="text-black text-lg">SIM2</p>
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
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="pl-5 w-full">


<svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 841.89 595.28" enable-background="new 0 0 841.89 595.28" class="w-64 h-64">
<g>
  <g>
    <defs>
      <polygon id="SVGID_1_" points="375.865,343.349 465.86,343.349 465.86,253.372 375.865,253.372 375.865,343.349      "/>
    </defs>
    <clipPath id="SVGID_2_">
      <use xlink:href="#SVGID_1_"  overflow="visible"/>
    </clipPath>
    <path clip-path="url(#SVGID_2_)" fill-rule="evenodd" clip-rule="evenodd" fill="#E37A34" d="M464.286,298.324L464.286,298.324
      c0,23.994-19.461,43.45-43.459,43.45l0,0c-23.999,0-43.425-19.456-43.425-43.45l0,0c0-23.957,19.426-43.414,43.425-43.414l0,0
      C444.825,254.91,464.286,274.367,464.286,298.324"/>
  </g>
  <g>
    <defs>
      <polygon id="SVGID_3_" points="375.865,342.579 465.86,342.579 465.86,253.372 375.865,253.372 375.865,342.579      "/>
    </defs>
    <clipPath id="SVGID_4_">
      <use xlink:href="#SVGID_3_"  overflow="visible"/>
    </clipPath>
    <path opacity="0.302" clip-path="url(#SVGID_4_)" fill-rule="evenodd" clip-rule="evenodd" fill="#1EA750" d="M421.01,254.817
      c24.052,0,43.55,19.493,43.55,43.54c0,24.048-19.498,43.542-43.55,43.542c-24.053,0-43.551-19.494-43.551-43.542
      c0-10.131,3.535-19.946,9.994-27.754l33.557,27.754V254.817L421.01,254.817z"/>
  </g>
  <g>
    <defs>
      <polygon id="SVGID_5_" points="375.865,343.349 465.86,343.349 465.86,253.372 375.865,253.372 375.865,343.349      "/>
    </defs>
    <clipPath id="SVGID_6_">
      <use xlink:href="#SVGID_5_"  overflow="visible"/>
    </clipPath>
    <path clip-path="url(#SVGID_6_)" fill-rule="evenodd" clip-rule="evenodd" fill="#E7E6E6" d="M448.902,297.94L448.902,297.94
      c0,15.306-12.346,27.685-27.655,27.685l0,0c-15.274,0-27.69-12.379-27.69-27.685l0,0c0-15.235,12.416-27.649,27.69-27.649l0,0
      C436.557,270.291,448.902,282.705,448.902,297.94"/>
    <g clip-path="url(#SVGID_6_)">
      <defs>
        <polygon id="SVGID_7_" points="375.865,343.349 465.86,343.349 465.86,253.372 375.865,253.372 375.865,343.349        "/>
      </defs>
      <clipPath id="SVGID_8_">
        <use xlink:href="#SVGID_7_"  overflow="visible"/>
      </clipPath>
      <g clip-path="url(#SVGID_8_)">
        <defs>
          <rect id="SVGID_9_" x="375.865" y="253.372" width="89.995" height="89.977"/>
        </defs>
        <clipPath id="SVGID_10_">
          <use xlink:href="#SVGID_9_"  overflow="visible"/>
        </clipPath>
        <g clip-path="url(#SVGID_10_)">
          <text transform="matrix(1.0002 0 0 1 404.5205 302.8975)"><tspan x="0" y="0" fill="#435369" stroke="#435369" stroke-width="0.5054" stroke-miterlimit="10" font-family="'SimplifiedArabicFixed'" font-size="17.6877">8</tspan><tspan x="11.534" y="0" fill="#435369" stroke="#435369" stroke-width="0.5054" stroke-miterlimit="10" font-family="'SimplifiedArabicFixed'" font-size="17.6877">7</tspan><tspan x="22.29" y="0" fill="#435369" stroke="#435369" stroke-width="0.5054" stroke-miterlimit="10" font-family="'SimplifiedArabicFixed'" font-size="17.6877">%</tspan></text>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>


<p class="text-black text-lg">CPU Solo Core</p>
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