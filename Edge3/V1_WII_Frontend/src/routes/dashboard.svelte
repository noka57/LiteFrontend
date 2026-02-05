<script>
  import './global.css';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge } from 'flowbite-svelte';
  import { onMount} from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { dashboadData,ioDashboard} from "./configG.js";
  let style="width:25%";
  let tableBodyClass="";
  let tdClass="border-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium";
  let value1=0;
  let value2=0;
  let value3=0;
  let value4=0;
  let dashboard_data="";
  let vpn_dashboard="";
  let currentUri = '';
  let currentOrigin = '';
  let sessionid='';
  let interval;
  let interval_io;
  let sessionBinary;
  let hidden=0;
  let io_data="";


  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };


  sessionidG.subscribe(val => {
    sessionid = val;
  });

  dashboadData.subscribe(val => {
        dashboard_data = val;
    });


  ioDashboard.subscribe(val => {
        io_data = val;
  });


  function GPSClick() {
    if (dashboard_data!="")
      window.open(dashboard_data.config.dashboard.gpsInfo.gMapUrl, "_blank");
  }

  let disabledOpenVPNTunnel=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
  let disabledIPsecTunnel=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

  let RestartIntervalId;
  let RestartReady=0;
  let path1="";
  let path2="";
  let path3="";
  let path4="";
  let AllpathReady=0;
  let x1=50;
  let y1=5;

  let x2=50;
  let y2=5;
  let x3=50;
  let y3=5;
  let x4=50;
  let y4=5;


  function calculateProgressBarPath(value,i)
  {
    let max = 102;
    let x=50;
    let y=5;

    if (value <= 0) 
    {
      return "";
    } 
    else if (value >= max) 
    {
    
      return "M50,5A35 35 0 1 1 49.9999 5";
    } 
    else 
    {
      const angle = Math.PI * 2 * (value / max);
      x = 50 + Math.cos(angle - Math.PI / 2) * 35;
      y = 40 + Math.sin(angle - Math.PI / 2) * 35;
      let path = "M50,5";
      if (value<=80)
      {
        if (angle > Math.PI) {
          path += "A35 35 0 0 1 50 75";
        }
        path += `A35 35 0 0 1 ${x} ${y}`;
        return path;
      }
      else
      {
        if (i==1)
        {
          if (value >=100)
          {
            x1=50;
            y1=5;

          }
          else
          {
            x1=x;
            y1=y;
          }

        }
        else if (i==2)
        {
          if (value >=100)
          {
            x2=50;
            y2=5;

          }
          else
          {
            x2=x;
            y2=y;
          }

        }
        else if (i==3)
        {
          if (value >=100)
          {
            x3=50;
            y3=5;

          }
          else
          {
            x3=x;
            y3=y;
          }
        }
        else if (i==4)
        {
          if (value >=100)
          {
            x4=50;
            y4=5;

          }
          else
          {
            x4=x;
            y4=y;
          }
        }
        path+="A35 35 0 0 1 50 75A35 35 0 0 1 15.810308878413977 32.51234208777258";
        return path;
      }
    }
  }


  function sendPing() 
  {
    fetch(window.location.origin)
      .then(response => {
        if (response.status === 200) 
        {
          console.log('Ping successful');
          RestartReady=1;
          clearInterval(RestartIntervalId);

          setTimeout(() => {
              window.location.href = window.location.origin;
              }, 3000); 
        } 
        else 
        {
          console.log('Ping failed. Retrying...');
        }
      })
      .catch(error => 
      {
        console.error('Ping failed:', error);
      });
  }


  async function getVPNDashboard() {

    try
    {
      const res = await fetch(window.location.origin+"/GetVPNdashboard", {
        method: 'POST',
        body: sessionBinary
      })

      if (res.status == 200)
      {
        vpn_dashboard =await res.json();
        console.log("get vpn_dashboard 200 OK\r\n");
        console.log(vpn_dashboard);
        //VPNdashboad.set(vpn_dashboard);
      }
      else
      {
          console.log("get vpn_dashboard error\r\n");
          //stopInterval();
          //RestartIntervalId = setInterval(sendPing, 1000);
      }
    }
    catch (error) 
    {
      console.error('Error fetching vpn data:', error);
      //stopIntervalVPN();
      //RestartIntervalId = setInterval(sendPing, 1000);
    }
  }



  async function getDashboardData() {

    try
    {
      AllpathReady=0;
      const res = await fetch(window.location.origin+"/getDashboardData", {
        method: 'POST',
        body: sessionBinary
      })

      if (res.status == 200)
      {
        dashboard_data =await res.json();
        console.log("get dashboard 200 OK\r\n");
        console.log(dashboard_data);
        dashboadData.set(dashboard_data);
       // value1=dashboard_data.config.dashboard.systemResource.cpuUsage;
       // value2=dashboard_data.config.dashboard.systemResource.ramUsage;
       // value3=dashboard_data.config.dashboard.systemResource.emmcUsage;
       // value4=dashboard_data.config.dashboard.systemResource.sdCardUsage;

       // path1=calculateProgressBarPath(value1,1);
      //  path2=calculateProgressBarPath(value2,2);
       // path3=calculateProgressBarPath(value3,3);
      //  path4=calculateProgressBarPath(value4,4);
        AllpathReady=1;


      }
      else
      {
          console.log("get dashboard error\r\n");
          stopInterval();
          RestartIntervalId = setInterval(sendPing, 1000);
      }
    }
    catch (error) 
    {
      console.error('Error fetching dashboard data:', error);
      stopInterval();
      RestartIntervalId = setInterval(sendPing, 1000);
    }
  }

  async function getIO() 
  {
    const res = await fetch(window.location.origin+"/GeTIOdaTa", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log ("-getiodata 200 ok");
      io_data =await res.json();
      console.log(io_data);
      ioDashboard.set(io_data);
    }
  }

  const startInterval = () => {
    interval = setInterval(getDashboardData, 60000); // Send POST request every minute (60,000 milliseconds)
  };

  const stopInterval = () => {
    clearInterval(interval);
  };


  const startIntervalIO = () => {
    interval_io = setInterval(getIO, 60000); // Send POST request every minute (60,000 milliseconds)
  };

  const stopIntervalIO = () => {
    clearInterval(interval_io);
  };





  onMount(() => {

    if (!sessionid)
    {
      currentUri = window.location.href;
      sessionidG.set(currentUri.split('?')[1]);
      sessionid=currentUri.split('?')[1];

     // console.log("dashboard sessionid:")
     // console.log(sessionid);

     // console.log("currentUri");
     // console.log(currentUri);
      let host=currentUri.split('/')[2];
      //console.log("host");
     // console.log(host);

      history.pushState({}, '', "/dashboard");
    }

    if (sessionid && dashboard_data=="")
    {
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
      getDashboardData();
      startInterval();
    }
    else if (sessionid && dashboard_data!="")
    {
      AllpathReady=0;
     // value1=dashboard_data.config.dashboard.systemResource.cpuUsage;
     // value2=dashboard_data.config.dashboard.systemResource.ramUsage;
     // value3=dashboard_data.config.dashboard.systemResource.emmcUsage;
     // value4=dashboard_data.config.dashboard.systemResource.sdCardUsage;

    //  path1=calculateProgressBarPath(value1,1);
    //  path2=calculateProgressBarPath(value2,2);
    //  path3=calculateProgressBarPath(value3,3);
    //  path4=calculateProgressBarPath(value4,4);
      AllpathReady=1;

      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
      console.log("onMount get dashboard\r\n");
      getDashboardData();
    }

    if (sessionid && io_data=="")
    {
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
      getIO();

      startIntervalIO();
    }
    else if (sessionid && io_data!="")
    {

      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      console.log("onMount get io data\r\n");
      getIO();

    }


  });



</script>

<Table tableNoWFull={true} forDashboard={true}>

  <TableBody>
    <TableBodyRow>
      <TableBodyCell {style} {tdClass}><div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12">
  <path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<div class="w-full">
<p class="text-sm font-light">System Uptime</p>
<p class="text-xl font-bold">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemUptime} {/if}</p>
</div>
</div></TableBodyCell>
      <TableBodyCell {style} {tdClass}><div class="flex"><div class="">

{#if 0}
      <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 24 24">

  <circle fill="#1A87C9" cx="9" cy="9" r="9"/>
  <path fill="#FFFFFF" d="M13.5,9.8H9C8.6,9.8,8.2,9.4,8.2,9V3c0-0.4,0.3-0.8,0.8-0.8S9.8,2.6,9.8,3v5.2h3.8c0.4,0,0.8,0.3,0.8,0.8
    S13.9,9.8,13.5,9.8z"/>

</svg>

{/if}

</div>
<div class="w-full">
{#if 1}
<p class="pt-2 text-sm font-light">SSID</p>
<p class="text-xl font-bold">{#if dashboard_data!=""}{dashboard_data.config.dashboard.wifi11ah.ssid} {/if}


</p>
{/if}
</div>
</div></TableBodyCell>
      <TableBodyCell style="width:50%" {tdClass}><div class="flex"><div class="">

      </div>
<div class="w-full">
{#if 1}
<p class="text-sm font-light">11ah mode</p>
<p class="text-xl font-bold">{#if dashboard_data!=""}{#if dashboard_data.config.dashboard.wifi11ah.mode==1}AP (Number of STA: Actual {dashboard_data.config.dashboard.wifi11ah.number} Expected){:else if dashboard_data.config.dashboard.wifi11ah.mode==0}STATION (RSSI: {dashboard_data.config.dashboard.wifi11ah.rssi}){/if}{/if}</p>
{/if}
</div>
</div></TableBodyCell>

    </TableBodyRow>


        <TableBodyRow>


        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2">
{#if 0}
        
<p class="text-red-600 text-lg">WAN Status</p>
{/if}

              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Ethernet</p>
              </TableBodyCell>


            </TableBodyRow>


                    <TableBodyRow>      



        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2">
{#if 0}
        <div class="flex"><div class="px-10"><p class="text-black text-lg">Active Link</p>
        <p class="text-black text-lg">IP Address</p>

        <p class="text-black text-lg">Gateway</p>
        <p class="text-black text-lg">DNS</p>

</div>
<div class="px-10"><p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.wanStatus.active_link}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.wanStatus.ipv4.ip}{/if}</p>

        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.wanStatus.ipv4.gateway}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.wanStatus.ipv4.dns[0]}/{dashboard_data.config.dashboard.wanStatus.ipv4.dns[1]}{/if}</p>

</div>
</div>

{/if}

                      </TableBodyCell>

              <TableBodyCell class="border-l-8 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex">

<div class=""><p class="text-black text-lg text-center">{#if dashboard_data!=""}{dashboard_data.config.dashboard.ethernet.wan[0].name}{/if}</p>
{#if dashboard_data!=""}              
{#if dashboard_data.config.dashboard.ethernet.wan[0].status}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16">
<path fill=blue d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z
     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"/>

</svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="-5 -5 24 24" class="w-16 h-16">
  <path fill="none" d="M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2
    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8
    V6.4h0.8V8.3z"/>
  <path fill="#D0D0D0" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8
    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"/>
 
    <rect x="2.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"/>
    <rect x="3.8" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="5.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"/>
    <rect x="7.2" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="8.8" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="10.5" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>

</svg>
{/if}
{/if}
</div>


              <div class="pl-20">
              <p class="text-black text-lg text-center">
              {#if dashboard_data!=""}{dashboard_data.config.dashboard.ethernet.lan[0].name}{/if}
              </p>

{#if dashboard_data!=""}              
{#if dashboard_data.config.dashboard.ethernet.lan[0].status}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16">
<path fill=blue d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z
     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"/>

</svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="-5 -5 24 24" class="w-16 h-16">
  <path fill="none" d="M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2
    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8
    V6.4h0.8V8.3z"/>
  <path fill="#D0D0D0" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8
    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"/>
 
    <rect x="2.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"/>
    <rect x="3.8" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="5.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"/>
    <rect x="7.2" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="8.8" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>
    <rect x="10.5" y="6.4" fill="#D0D0D0"  width="0.8" height="1.9"/>

</svg>
{/if}
{/if}
</div>



</div>
              </TableBodyCell>


            </TableBodyRow>

             <TableBodyRow>      



              <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">LAN Status</p>
              </TableBodyCell>


        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">System Information</p>



              </TableBodyCell>

            </TableBodyRow>


             <TableBodyRow>      


   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><div class="flex"><div class="px-10">
        <p class="text-black text-lg">IP Mode</p>
        <p class="text-black text-lg">IP Address(IPv4)</p>

</div>
<div class="px-10">
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.lanStatus.ipv4.ipMode}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.lanStatus.ipv4.ip}{/if}</p>

</div>
</div>
                      </TableBodyCell>

<TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg"></p>

<div class="flex"><div class="px-4">
        <p class="text-black text-lg">Model Name</p>
        <p class="text-black text-lg">Hostname</p>
        <p class="text-black text-lg">Serial Number</p>
        <p class="text-black text-lg">Firmware Version</p>
        <p class="text-black text-lg">WAN MAC Address</p>
        <p class="text-black text-lg">System Time</p>

</div>
<div class="px-1">
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.modelName}{/if}</p>

        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.hostname}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.serialNumber}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.firmwareVersion}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.macAddress}{/if}</p>
        {#if 0}
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.imei}{/if}</p>
        <p class="text-lg font-light">{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.modemVendor}{/if}/{#if dashboard_data!=""}{dashboard_data.config.dashboard.systemInfo.modemModel}{/if}</p>
        {/if}
        <p class="text-lg font-light">{#if dashboard_data!=""}{new Date(dashboard_data.config.dashboard.systemInfo.systemTime*1000).toLocaleString('en-US', options)}{/if}</p>


</div>
</div>

              </TableBodyCell>

        </TableBodyRow>


<TableBodyRow>      
        <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">IO Data</p>


              </TableBodyCell>
                      <TableBodyCell class="border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2"><p class="text-red-600 text-lg">Modbus Gateway</p>
              </TableBodyCell>

            </TableBodyRow>



             <TableBodyRow>      


   
        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2">

<div class="flex">
        <div class="px-10">
                <p class="text-black text-lg">DI</p>
                <p class="text-black text-lg">DO</p>
                <p class="text-black text-lg">AI-1</p>
                <p class="text-black text-lg">AI-2</p>
        </div>

        <div class="px-1">
<p class="text-lg font-light">{#if io_data!=""}{#if io_data.di==0}Low{:else if io_data.di==1}High{/if}{/if}</p>
<p class="text-lg font-light">{#if io_data!=""}{#if io_data.do==1}Close{:else if io_data.do==0}Open{/if}{/if}</p>
<p class="text-lg font-light">{#if io_data!=""}{#if io_data.ai1 != ""}{(parseInt(io_data.ai1, 10)/100).toFixed(1)} {/if}{#if io_data.ai1_type==0}(Current){:else if io_data.ai1_type==1}(Voltage){/if} {/if}</p>
<p class="text-lg font-light">{#if io_data!=""}{#if io_data.ai2 != ""}{(parseInt(io_data.ai2, 10)/100).toFixed(1)} {/if}{#if io_data.ai2_type==0}(Current){:else if io_data.ai2_type==1}(Voltage){/if}{/if}</p>
        </div>
      </div>

                      </TableBodyCell>

        <TableBodyCell class="border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium" colspan="2">
              

<div class="flex">
        <div class="px-10">
                <p class="text-black text-lg">Mode</p>
        </div>

        <div class="px-1">
<p class="text-lg font-light">{#if dashboard_data!=""}{#if dashboard_data.config.dashboard.modbus.mode==-1}Disable{:else if dashboard_data.config.dashboard.modbus.mode==0}TCP Slave To RTU Master{:else if dashboard_data.config.dashboard.modbus.mode==1}RTU Slave To TCP Master{/if}{/if}</p>

        </div>
      </div>


                      </TableBodyCell>

        </TableBodyRow>






  </TableBody>
</Table>