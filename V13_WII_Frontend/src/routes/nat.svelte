<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {natConfig, ChangedNATConfig, NAT_LoopBack_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_Dmz_ConfigChangedLog} from "./configG.js"

   let formModalPFW = false;
   let newformModalPFW=false;
   let formModalVC = false;
   let newformModalVC=false;

   let port_forwarding_current_index;
   let virtualcomputer_current_index;


   let new_pfw_index;
   let new_vc_index;

   let nat_data="";
   let changed_nat_data = {};
   let saved_changed_nat_data ={};
   let dmz_changedValues = [];
   let pfw_changedValues = [];
   let vc_changedValues = [];
   let loopback_changedValues = [];
   let getDataReady=0;

   let sessionid;
   let sessionBinary;
   sessionidG.subscribe(val => {
     sessionid = val;
   });


    natConfig.subscribe(val => {
        nat_data = val;
    });

    NAT_LoopBack_ConfigChangedLog.subscribe(val => {
        loopback_changedValues = val;
    });

    NAT_VC_ConfigChangedLog.subscribe(val => {
        vc_changedValues = val;
    });

    NAT_VS_ConfigChangedLog.subscribe(val => {
        pfw_changedValues = val;
    });

    NAT_Dmz_ConfigChangedLog.subscribe(val => {
        dmz_changedValues = val;
    });

    ChangedNATConfig.subscribe(val => {
      saved_changed_nat_data = val;
    });




    function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
    {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }

            if (obj1[key].length > obj2[key].length) 
            {

              let addedCount=obj1[key].length-obj2[key].length;
              for (let j=obj2[key].length; j <obj1[key].length; j++)
              {
                if (obj1[key][j]["delete"])
                {
                  addedCount--;
                }

              }

              if (addedCount >0)
              {
                let changedstr="Add "+addedCount+" item(s) to "+ key;
                if (type == 3)
                {
                  dmz_changedValues=[...dmz_changedValues, changedstr];
                }
                else if (type == 2)
                {
                  vc_changedValues=[...vc_changedValues, changedstr];
                }
                else if (type == 1)
                {
                  pfw_changedValues=[...pfw_changedValues, changedstr];
                }
                else if (type == 0)
                {
                  loopback_changedValues=[...loopback_changedValues, changedstr]; 
                }
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 3)
              {
                dmz_changedValues=[...dmz_changedValues, changedstr];
              }
              else if (type == 2)
              {
                vc_changedValues=[...vc_changedValues, changedstr];
              }
              else if (type == 1)
              {
                pfw_changedValues=[...pfw_changedValues, changedstr];
              }
              else if (type == 0)
              {
                loopback_changedValues=[...loopback_changedValues, changedstr]; 
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0);
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 3)
          {
            dmz_changedValues=[...dmz_changedValues, changedstr];
          }
          else if (type == 2)
          {
            vc_changedValues=[...vc_changedValues, changedstr];
          }
          else if (type == 1)
          {
            pfw_changedValues=[...pfw_changedValues, changedstr];
          }
          else if (type == 0)
          {
            loopback_changedValues=[...loopback_changedValues, changedstr]; 
          }

        }
      }
    }


    function SaveDMZ()
    {
        console.log("Save DMZ");
        if (dmz_changedValues.length !=0)
        {
          dmz_changedValues=[];
        }

        compareObjects(changed_nat_data.config.networking_nat_dmz, nat_data.config.networking_nat_dmz,3,0,0);


        NAT_Dmz_ConfigChangedLog.set(dmz_changedValues);
        saved_changed_nat_data.config.networking_nat_dmz=JSON.parse(JSON.stringify(changed_nat_data.config.networking_nat_dmz));        
        ChangedNATConfig.set(saved_changed_nat_data);
    
        console.log(dmz_changedValues);
    } 

    function SaveVirtualComputer()
    {
      console.log("Save VirtualComputer");
      if (vc_changedValues.length !=0)
      {
        vc_changedValues=[];
      }

      compareObjects(changed_nat_data.config.networking_nat_virtualComputer, nat_data.config.networking_nat_virtualComputer,2,0,0);


      NAT_VC_ConfigChangedLog.set(vc_changedValues);

      saved_changed_nat_data.config.networking_nat_virtualComputer=JSON.parse(JSON.stringify(changed_nat_data.config.networking_nat_virtualComputer));
      ChangedNATConfig.set(saved_changed_nat_data);
    
      console.log(vc_changedValues);
    }

    function SavePFW()
    {
      console.log("Save Port Forwarding");
      if (pfw_changedValues.length !=0)
      {
        pfw_changedValues=[];
      }

      compareObjects(changed_nat_data.config.networking_port_forwarding, nat_data.config.networking_port_forwarding,1,0,0);


      NAT_VS_ConfigChangedLog.set(pfw_changedValues);


      let tempForDelete=[];
      for (let i = 0; i< changed_nat_data.config.networking_port_forwarding.list.length; i++)
      {
        if (!changed_nat_data.config.networking_port_forwarding.list[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_nat_data.config.networking_port_forwarding.list[i]]
        }

      }

      saved_changed_nat_data.config.networking_port_forwarding.enable=changed_nat_data.config.networking_port_forwarding.enable

      saved_changed_nat_data.config.networking_port_forwarding.list=JSON.parse(JSON.stringify(tempForDelete));
      changed_nat_data.config.networking_port_forwarding.list=JSON.parse(JSON.stringify(tempForDelete));



      //saved_changed_nat_data.config.networking_port_forwarding=JSON.parse(JSON.stringify(changed_nat_data.config.networking_port_forwarding));
      ChangedNATConfig.set(saved_changed_nat_data);
    
      console.log(pfw_changedValues);
    }


    function RestoreDelete(index)
    {
      changed_nat_data.config.networking_port_forwarding.list[index].delete=false;
    }


    function deletePFW(index)
    {
      changed_nat_data.config.networking_port_forwarding.list[index].delete=true;
    }


    function SaveNatLoopBack()
    {
      console.log("Save Loopback nat");      
      if (loopback_changedValues.length !=0)
      {
        loopback_changedValues=[];
      }

      compareObjects(changed_nat_data.config.networking_nat_loopback, nat_data.config.networking_nat_loopback,0,0,0);
      NAT_LoopBack_ConfigChangedLog.set(loopback_changedValues);

      saved_changed_nat_data.config.networking_nat_loopback=JSON.parse(JSON.stringify(changed_nat_data.config.networking_nat_loopback));
      ChangedNATConfig.set(saved_changed_nat_data);
    
      console.log(loopback_changedValues);
    }

    let BackupPFWItem=
    {
      "enable": false,
      "delete": false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    };


    function modalTriggerPFW(index)
    {
      formModalPFW = true;
      port_forwarding_current_index=index;

      BackupPFWItem.enable=changed_nat_data.config.networking_port_forwarding.list[index].enable;
      BackupPFWItem.wanIf=changed_nat_data.config.networking_port_forwarding.list[index].wanIf;
      BackupPFWItem.serverIp=changed_nat_data.config.networking_port_forwarding.list[index].serverIp;
      BackupPFWItem.sourceIp=changed_nat_data.config.networking_port_forwarding.list[index].sourceIp;
      BackupPFWItem.protocol=changed_nat_data.config.networking_port_forwarding.list[index].protocol;
      BackupPFWItem.pubPort=changed_nat_data.config.networking_port_forwarding.list[index].pubPort;
      BackupPFWItem.pubPortRange.start=changed_nat_data.config.networking_port_forwarding.list[index].pubPortRange.start;
      BackupPFWItem.pubPortRange.end=changed_nat_data.config.networking_port_forwarding.list[index].pubPortRange.end;
      BackupPFWItem.privPort=changed_nat_data.config.networking_port_forwarding.list[index].privPort;
      BackupPFWItem.privPortRange.start=changed_nat_data.config.networking_port_forwarding.list[index].privPortRange.start;
      BackupPFWItem.privPortRange.end=changed_nat_data.config.networking_port_forwarding.list[index].privPortRange.end;
    }


    let BackupVC_Item={
      "enable": false,
      "globalIp": "",
      "localIp": ""
    };


    let newVC_Item=[{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        },{
          "enable": false,
          "globalIp": "",
          "localIp": ""
        }
        ];


    let newPFW_Item = [{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    },{
      "enable": false,
      "delete":false,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": {
        "start": 0,
        "end": 0
      },
      "privPort": 0,
      "privPortRange": {
        "start": 0,
        "end": 0
      }
    }];


   function NewPFW_Item_Invoker(index)
   {
      newPFW_Item[index].enable=false;
      newPFW_Item[index].delete=false;
      newPFW_Item[index].wanIf=0;
      newPFW_Item[index].serverIp="";  
      newPFW_Item[index].sourceIp="";
      newPFW_Item[index].protocol="TCP";
      newPFW_Item[index].pubPort=0;
      newPFW_Item[index].pubPortRange.start=0;
      newPFW_Item[index].pubPortRange.end=0;
      newPFW_Item[index].privPort=0;
      newPFW_Item[index].privPortRange.start=0;
      newPFW_Item[index].privPortRange.end=0;

      new_pfw_index=index;
      newformModalPFW = true;

   }

   function NewVC_Item_Invoker(index)
   {
      newVC_Item[index].enable=false;
      newVC_Item[index].globalIp="";
      newVC_Item[index].localIp="";

      new_vc_index=index;
      newformModalVC = true;

   }


   function ModifyPFW(index)
   {
      formModalPFW = false;
   }

   function NoModifyPFW(index)
   {
      formModalPFW = false;
      changed_nat_data.config.networking_port_forwarding.list[index].enable= BackupPFWItem.enable;
      changed_nat_data.config.networking_port_forwarding.list[index].delete= BackupPFWItem.delete;
      changed_nat_data.config.networking_port_forwarding.list[index].wanIf= BackupPFWItem.wanIf;


      changed_nat_data.config.networking_port_forwarding.list[index].serverIp= BackupPFWItem.serverIp;

      changed_nat_data.config.networking_port_forwarding.list[index].sourceIp= BackupPFWItem.sourceIp;


      changed_nat_data.config.networking_port_forwarding.list[index].protocol= BackupPFWItem.protocol;

      changed_nat_data.config.networking_port_forwarding.list[index].pubPort= BackupPFWItem.pubPort;

      changed_nat_data.config.networking_port_forwarding.list[index].pubPortRange.start= BackupPFWItem.pubPortRange.start;

      changed_nat_data.config.networking_port_forwarding.list[index].pubPortRange.end= BackupPFWItem.pubPortRange.end;

      changed_nat_data.config.networking_port_forwarding.list[index].privPort= BackupPFWItem.privPort;

      changed_nat_data.config.networking_port_forwarding.list[index].privPortRange.start= BackupPFWItem.privPortRange.start;

      changed_nat_data.config.networking_port_forwarding.list[index].privPortRange.end= BackupPFWItem.privPortRange.end;

   }


   function ModifyVC(index)
   {
      formModalVC = false;
   }

   function NoModifyVC(index)
   {
      formModalVC = false; 

      changed_nat_data.config.networking_nat_virtualComputer.list[index].enable= BackupVC_Item.enable;
      changed_nat_data.config.networking_nat_virtualComputer.list[index].globalIp= BackupVC_Item.globalIp;
      changed_nat_data.config.networking_nat_virtualComputer.list[index].localIp= BackupVC_Item.localIp;
   }

   function AddPFW(index)
   {
      newformModalPFW = false;

      changed_nat_data.config.networking_port_forwarding.list=[...changed_nat_data.config.networking_port_forwarding.list,newPFW_Item[index]];
   }


   function AddVC(index)
   {
      newformModalVC = false;

      changed_nat_data.config.networking_nat_virtualComputer.list=[...changed_nat_data.config.networking_nat_virtualComputer.list, newVC_Item[index]];
   }


    function modalTriggerVC(index){
      formModalVC = true;
      virtualcomputer_current_index=index;
      BackupVC_Item.enable=changed_nat_data.config.networking_nat_virtualComputer.list[index].enable;
      BackupVC_Item.globalIp=changed_nat_data.config.networking_nat_virtualComputer.list[index].globalIp;
      BackupVC_Item.localIp=changed_nat_data.config.networking_nat_virtualComputer.list[index].localIp;
   }


   async function getNATData () {
    const res = await fetch(window.location.origin+"/getNATdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      nat_data =await res.json();
      console.log(nat_data);
      natConfig.set(nat_data);

      changed_nat_data = JSON.parse(JSON.stringify(nat_data));
      saved_changed_nat_data= JSON.parse(JSON.stringify(nat_data));
      ChangedNATConfig.set(saved_changed_nat_data);
      getDataReady=1;
      
    }
  }


  onMount(() => {

    console.log("nat sessionid: ");
    console.log(sessionid);

    if (sessionid && nat_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getNATData();
    }
    else if (sessionid && nat_data !="")
    {  
      getDataReady=1;
      changed_nat_data=JSON.parse(JSON.stringify(saved_changed_nat_data));
      if (dmz_changedValues.length == 0)
      {
        changed_nat_data.config.networking_nat_dmz = JSON.parse(JSON.stringify(nat_data.config.networking_nat_dmz)); 
      }


      if (pfw_changedValues.length == 0)
      {
        changed_nat_data.config.networking_port_forwarding = JSON.parse(JSON.stringify(nat_data.config.networking_port_forwarding));     
      }

      if (vc_changedValues.length == 0)
      { 
        changed_nat_data.config.networking_nat_virtualComputer = JSON.parse(JSON.stringify(nat_data.config.networking_nat_virtualComputer)); 
      }

      if (loopback_changedValues.length == 0)
      {
        changed_nat_data.config.networking_nat_loopback = JSON.parse(JSON.stringify(nat_data.config.networking_nat_loopback));     
      }

    }

  });

</script>
<style>
 
.strikeout {
  text-decoration: line-through;
  color: #999; /* Adjust color for deleted text */
  position: relative;
}

.strikeout:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-bottom: 1px solid #111; /* Adjust strikeout line color */
  transform: translateY(-50%);
}

.strikeout:after {
  content: "\00B7"; /* Unicode dot character */
  font-size: 1px; /* Adjust dot size */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

</style>

<Tabs style="underline">
 

<TabItem open title="Port Forwarding">
<label>
{#if getDataReady == 1}
  <input type="checkbox" bind:checked={changed_nat_data.config.networking_port_forwarding.enable}>
{/if}
  Enable Port Forwarding
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
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>WAN Interface</TableHeadCell>
    <TableHeadCell>Host IP</TableHeadCell>
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Public Port</TableHeadCell>
    <TableHeadCell class="w-22">Private Port</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
  {#each changed_nat_data.config.networking_port_forwarding.list as PFW, index}


{#if PFW.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDelete(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={PFW.enable} disabled>

      </td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
{#if PFW.wanIf==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">All</td>
{:else if PFW.wanIf==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Ethernet WAN</td>
{:else if PFW.wanIf==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Cellular WAN</td>

{/if}

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.serverIp}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.protocol}</td>

{#if PFW.pubPort ==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.pubPortRange.start}</td>
{:else if PFW.pubPort ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.pubPortRange.start}-{PFW.pubPortRange.end}</td>
{/if}


{#if PFW.privPort ==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.privPortRange.start}</td>
{:else if PFW.privPort ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.privPortRange.start}-{PFW.privPortRange.end}</td>
{/if}

    </tr>


{:else}

    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerPFW(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deletePFW(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


      <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={PFW.enable}>

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if PFW.wanIf==0}
      <TableBodyCell class="w-10">All</TableBodyCell>
{:else if PFW.wanIf==1}
      <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if PFW.wanIf==2}
      <TableBodyCell class="w-10">Cellular WAN</TableBodyCell>

{/if}

      <TableBodyCell class="w-10">{PFW.serverIp}</TableBodyCell>
      <TableBodyCell class="w-10">{PFW.protocol}</TableBodyCell>

{#if PFW.pubPort ==0}
      <TableBodyCell class="w-10">{PFW.pubPortRange.start}</TableBodyCell>
{:else if PFW.pubPort ==1}
      <TableBodyCell class="w-10">{PFW.pubPortRange.start}-{PFW.pubPortRange.end}</TableBodyCell>
{/if}


{#if PFW.privPort ==0}
      <TableBodyCell class="w-10">{PFW.privPortRange.start}</TableBodyCell>
{:else if PFW.privPort ==1}
      <TableBodyCell class="w-10">{PFW.privPortRange.start}-{PFW.privPortRange.end}</TableBodyCell>
{/if}

    </TableBodyRow>

{/if}



{/each}
{/if}

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">     
{#if getDataReady == 1}
{#if changed_nat_data.config.networking_port_forwarding.list.length < 10}
<button on:click={() => NewPFW_Item_Invoker(changed_nat_data.config.networking_port_forwarding.list.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if} 
{/if}    
 </TableBodyCell>
  
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={SavePFW}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={newformModalPFW} size="lg" class="w-full" autoclose>
  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newPFW_Item[new_pfw_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">WAN Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].wanIf} value={0} >All</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].wanIf} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].wanIf} value={2} >Cellular WAN</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Host IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newPFW_Item[new_pfw_index].serverIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value='UDP' >UDP</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value='TCPUDP' >TCP & UDP</Radio>
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Public Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].pubPort} value={0} >Single Port</Radio><input type="number" bind:value={newPFW_Item[new_pfw_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={newPFW_Item[new_pfw_index].pubPort} value={1} >Port Range</Radio><input type="number" bind:value={newPFW_Item[new_pfw_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newPFW_Item[new_pfw_index].pubPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Private Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].privPort} value={0} >Single Port</Radio><input type="number" bind:value={newPFW_Item[new_pfw_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={newPFW_Item[new_pfw_index].privPort} value={1} >Port Range</Radio><input type="number" bind:value={newPFW_Item[new_pfw_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newPFW_Item[new_pfw_index].privPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddPFW(new_pfw_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={formModalPFW} size="lg" class="w-full" permanent={true}>
  <form action="#">

<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox bind:checked={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyPFW(port_forwarding_current_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>


<p class="mt-10"></p>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">WAN Interface</p>

  </td>

  <td class="pl-5 pt-4"><div class="flex gap-4">
  {#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].wanIf} value={0} >All</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].wanIf} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].wanIf} value={2} >Cellular WAN</Radio>
  {/if}
</div></td>
</tr>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Host IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].serverIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>




 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value='TCP' >TCP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value='UDP' >UDP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value='TCPUDP' >TCP & UDP</Radio>
{/if}
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Public Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].pubPort} value={0} >Single Port</Radio><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].pubPort} value={1} >Port Range</Radio><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].pubPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].pubPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div></td>
</tr>



 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Private Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].privPort} value={0} >Single Port</Radio><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].privPort} value={1} >Port Range</Radio><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].privPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].privPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div></td>
</tr>


      <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>


    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyPFW(port_forwarding_current_index)}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>


  </TabItem>

 <TabItem title="DMZ">

<label>
{#if getDataReady == 1}
  <input type=checkbox bind:checked={changed_nat_data.config.networking_nat_dmz.enable}>
{/if}
  Enable DMZ
</label>

<table>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
{#if getDataReady == 1}
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={0} >All</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={1} >Ethernet WAN</Radio>
  <Radio bind:group={changed_nat_data.config.networking_nat_dmz.interface} value={2} >Cellular WAN</Radio>
{/if}
</div></td>
</tr>


<tr>
{#if getDataReady == 1}
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DMZ Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_nat_data.config.networking_nat_dmz.dmzHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
{/if}


  </tr>


      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>


    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveDMZ}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
  </TabItem>

</Tabs>




