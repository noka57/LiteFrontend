<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { dreamsConfig,
        Dreams_Serial_ConfigChangedLog,
        Dreams_Modbus_S0_ConfigChangedLog,
        Dreams_Modbus_S1_ConfigChangedLog,
        Dreams_Modbus_Option_ConfigChangedLog,
        Dreams_DNP3_ConfigChangedLog,
        Dreams_Restful_ConfigChangedLog,
        Dreams_General_ConfigChangedLog,
        ChangedDreamsConfig
  } from "./configG.js"


    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

    let formModalSerial = false;
    let formModalModbus = false;

  
    let serialindex=0;
    let modbusindex=0;
    let serialindex4modbus=0;

    function modalTriggerSerial(index)
    {
      formModalSerial = true;
      serialindex=index;

      BackupSerial_Item.name = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].name;
      BackupSerial_Item.interface = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].interface;
      BackupSerial_Item.baudrate = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].baudrate;    
      BackupSerial_Item.parity = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].parity; 
      BackupSerial_Item.dataBit = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].dataBit; 
      BackupSerial_Item.stopBit = changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].stopBit; 

    }

    function modalTriggerModbus(sindex,mindex)
    {
      formModalModbus= true;
      modbusindex=mindex;
      serialindex4modbus=sindex;


      if (sindex == 0)
      {
        BackupModbus_Item.name=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].name;
        BackupModbus_Item.slaveId=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].slaveId;
        BackupModbus_Item.pointType=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].pointType;
        BackupModbus_Item.address=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].address;
        BackupModbus_Item.quantity=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].quantity;
        BackupModbus_Item.display=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].display;
      }
      else if (sindex == 1)
      {
        BackupModbus_Item.name=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].name;
        BackupModbus_Item.slaveId=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].slaveId;
        BackupModbus_Item.pointType=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].pointType;
        BackupModbus_Item.address=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].address;
        BackupModbus_Item.quantity=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].quantity;
        BackupModbus_Item.display=changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].display;
      }
      else if (sindex == -1)
      {
        BackupModbus_Item.name=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].name;
        BackupModbus_Item.slaveId=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].slaveId;
        BackupModbus_Item.pointType=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].pointType;
        BackupModbus_Item.address=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].address;
        BackupModbus_Item.quantity=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].quantity;
        BackupModbus_Item.display=changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].display;
      }
      else
      {
        console.log("error sindex:");
        console.log(sindex);
      }


    }

    let BackupSerial_Item=
    {
      "name": "",
      "interface": 0,
      "baudrate": 0,
      "parity": 0,
      "dataBit": 8,
      "stopBit": 1
    };

    function NoModifySerial(index)
    {
      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].name=BackupSerial_Item.name;
      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].interface=BackupSerial_Item.interface;
      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].baudrate=BackupSerial_Item.baudrate;  

      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].parity=BackupSerial_Item.parity; 
      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].dataBit=BackupSerial_Item.dataBit; 
      changed_dreams_data.config.service_dreams.service_dreams_serial.list[index].stopBit=BackupSerial_Item.stopBit;

      formModalSerial=false;
    }

    let BackupModbus_Item=
    {
      "name": "",
      "slaveId": 3,
      "pointType": 0, 
      "address": 0,
      "quantity": 1,
      "display": 0 
    };


    function NoModifyModbus(sindex, mindex)
    {
      if (sindex ==0)
      {
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].name=BackupModbus_Item.name;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].slaveId=BackupModbus_Item.slaveId;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].pointType=BackupModbus_Item.pointType;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].address=BackupModbus_Item.address;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].quantity=BackupModbus_Item.quantity;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[mindex].display=BackupModbus_Item.display;
      }
      else if (sindex ==1)
      {
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].name=BackupModbus_Item.name;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].slaveId=BackupModbus_Item.slaveId;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].pointType=BackupModbus_Item.pointType;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].address=BackupModbus_Item.address;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].quantity=BackupModbus_Item.quantity;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[mindex].display=BackupModbus_Item.display;
      }
      else if (sindex == -1)
      {
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].name=BackupModbus_Item.name;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].slaveId=BackupModbus_Item.slaveId;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].pointType=BackupModbus_Item.pointType;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].address=BackupModbus_Item.address;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].quantity=BackupModbus_Item.quantity;
        changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[mindex].display=BackupModbus_Item.display;
      }
      else
      {
        console.log("error sindex:");
        console.log(sindex);
      }

      formModalModbus=false;
    }


    let dreams_data="";

    let changed_dreams_data = {};
    let saved_changed_dreams_data ={};
    let getDataReady=0;

    let serial_changedValues = [];
    let modbus_s0_changedValues = [];
    let modbus_s1_changedValues = [];
    let modbus_option_changedValues = [];
    let dnp3_changedValues = [];
    let restful_changedValues = [];
    let dreams_general_changedValues=[];

    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
      sessionid = val;
    });

    dreamsConfig.subscribe(val => {
        dreams_data = val;
    });

    Dreams_Serial_ConfigChangedLog.subscribe(val => {
        serial_changedValues = val;
    });

    Dreams_Modbus_S0_ConfigChangedLog.subscribe(val => {
        modbus_s0_changedValues = val;
    });

    Dreams_Modbus_S1_ConfigChangedLog.subscribe(val => {
        modbus_s1_changedValues = val;
    });

    Dreams_Modbus_Option_ConfigChangedLog.subscribe(val => {
        modbus_option_changedValues = val;
    });

    Dreams_DNP3_ConfigChangedLog.subscribe(val => {
        dnp3_changedValues = val;
    });

    Dreams_Restful_ConfigChangedLog.subscribe(val => {
        restful_changedValues = val;
    });

    Dreams_General_ConfigChangedLog.subscribe(val => {
        dreams_general_changedValues = val;
    });

    ChangedDreamsConfig.subscribe(val => {
        saved_changed_dreams_data = val;
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
              let changedstr="Add "+addedCount+" item(s) to "+ key;
              if (type == 5)
              {
                restful_changedValues=[...restful_changedValues, changedstr];
              }
              else if (type == 4)
              {
                dnp3_changedValues=[...dnp3_changedValues, changedstr];
              }
              else if (type == 3)
              {
                modbus_option_changedValues=[...modbus_option_changedValues, changedstr];
              }
              else if (type == 2)
              {
                modbus_s1_changedValues=[...modbus_s1_changedValues, changedstr];
              }
              else if (type == 1)
              {
                modbus_s0_changedValues=[...modbus_s0_changedValues, changedstr];
              }
              else if (type == 0)
              {
                serial_changedValues=[...serial_changedValues, changedstr]; 
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 5)
              {
                restful_changedValues=[...restful_changedValues, changedstr];
              }
              else if (type == 4)
              {
                dnp3_changedValues=[...dnp3_changedValues, changedstr];
              }
              else if (type == 3)
              {
                modbus_option_changedValues=[...modbus_option_changedValues, changedstr];
              }
              else if (type == 2)
              {
                modbus_s1_changedValues=[...modbus_s1_changedValues, changedstr];
              }
              else if (type == 1)
              {
                modbus_s0_changedValues=[...modbus_s0_changedValues, changedstr];
              }
              else if (type == 0)
              {
                serial_changedValues=[...serial_changedValues, changedstr]; 
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
            const name="name";
            changedstr=obj1[name]+" is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 5)
          {
            restful_changedValues=[...restful_changedValues, changedstr];
          }
          else if (type == 4)
          {
            dnp3_changedValues=[...dnp3_changedValues, changedstr];
          }
          else if (type == 3)
          {
            modbus_option_changedValues=[...modbus_option_changedValues, changedstr];
          }
          else if (type == 2)
          {
            modbus_s1_changedValues=[...modbus_s1_changedValues, changedstr];
          }
          else if (type == 1)
          {
            modbus_s0_changedValues=[...modbus_s0_changedValues, changedstr];
          }
          else if (type == 0)
          {
            serial_changedValues=[...serial_changedValues, changedstr]; 
          }
        }
      }
    }

    function SaveGeneral()
    {
      console.log("save general");
      if (dreams_general_changedValues !=0)
      {
        dreams_general_changedValues=[];
      }

      if (changed_dreams_data.config.service_dreams.enable != dreams_data.config.service_dreams.enable)
      {
        let changedstr="Value of Enable Dreams Service has changed to "+changed_dreams_data.config.service_dreams.enable;
        dreams_general_changedValues=[...dreams_general_changedValues, changedstr]; 
      }

      Dreams_General_ConfigChangedLog.set(dreams_general_changedValues);
      ChangedDreamsConfig.set(changed_dreams_data);
      console.log(dreams_general_changedValues);
    }


    function SaveSerial()
    {
        console.log("Save Serial");
        if (serial_changedValues.length !=0)
        {
          serial_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_serial, dreams_data.config.service_dreams.service_dreams_serial,0,0,0);

        Dreams_Serial_ConfigChangedLog.set(serial_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(serial_changedValues);
        SaveGeneral();
    }

    function SaveModbusSerial0()
    {
        console.log("Save Modbus Serial 0");
        if (modbus_s0_changedValues.length !=0)
        {
          modbus_s0_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0, dreams_data.config.service_dreams.service_dreams_modbus.serialPort0,1,0,0);

        Dreams_Modbus_S0_ConfigChangedLog.set(modbus_s0_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(modbus_s0_changedValues);
        SaveGeneral();
    }

    function SaveModbusSerial1()
    {
        console.log("Save Modbus Serial 1");
        if (modbus_s1_changedValues.length !=0)
        {
          modbus_s1_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1, dreams_data.config.service_dreams.service_dreams_modbus.serialPort1,2,0,0);

        Dreams_Modbus_S1_ConfigChangedLog.set(modbus_s1_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(modbus_s1_changedValues);
        SaveGeneral();
    }  


    function SaveModbusSerialOption()
    {
        console.log("Save Modbus Serial Option");
        if (modbus_option_changedValues.length !=0)
        {
          modbus_option_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_modbus.option, dreams_data.config.service_dreams.service_dreams_modbus.option,3,0,0);

        Dreams_Modbus_Option_ConfigChangedLog.set(modbus_option_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(modbus_option_changedValues);
        SaveGeneral();
    }  

    function SaveDNP3()
    {
        console.log("Save DNP3");
        if (dnp3_changedValues.length !=0)
        {
          dnp3_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_dnp3, dreams_data.config.service_dreams.service_dreams_dnp3,4,0,0);

        Dreams_DNP3_ConfigChangedLog.set(dnp3_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(dnp3_changedValues);
        SaveGeneral();
    }  

    function SaveRestful()
    {
        console.log("Save Restful");
        if (restful_changedValues.length !=0)
        {
          restful_changedValues=[];
        }

        compareObjects(changed_dreams_data.config.service_dreams.service_dreams_restful, dreams_data.config.service_dreams.service_dreams_restful,5,0,0);

        Dreams_Restful_ConfigChangedLog.set(restful_changedValues);
        ChangedDreamsConfig.set(changed_dreams_data);
    
        console.log(restful_changedValues);
        SaveGeneral();
    }  


    function ModbusModify()
    {
      formModalModbus=false;
    }


    function SerialModify()
    {
      formModalSerial=false;
    }

   async function getDREAMSdata () {
    const res = await fetch(window.location.origin+"/getDREAMSdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      dreams_data =await res.json();
      console.log(dreams_data);
      dreamsConfig.set(dreams_data);

      changed_dreams_data = JSON.parse(JSON.stringify(dreams_data));
      saved_changed_dreams_data= JSON.parse(JSON.stringify(dreams_data));
      ChangedDreamsConfig.set(saved_changed_dreams_data);

      getDataReady=1;

     
    }
  }


  function EnableDreamsCheck()
  {
    if (changed_dreams_data.config.service_dreams.enable)
    {
      changed_dreams_data.config.service_dreams.enable=0;
    }
    else
    {
      changed_dreams_data.config.service_dreams.enable=1;
    }
  }


  onMount(() => {

    console.log("dreams sessionid: ");
    console.log(sessionid);


    if (sessionid && dreams_data == "")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getDREAMSdata();
    }
    else if (sessionid && dreams_data != "")
    {
        getDataReady=1;
        if (serial_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_serial = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_serial)); 
        }

        if (modbus_s0_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0 = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_modbus.serialPort0));     
        }

        if (modbus_s1_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1 = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_modbus.serialPort1));     
        }

        if (modbus_option_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_modbus.option = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_modbus.option));     
        }        

        if (dnp3_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_dnp3 = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_dnp3)); 
        }

        if (restful_changedValues.length == 0)
        {
          changed_dreams_data=JSON.parse(JSON.stringify(saved_changed_dreams_data));
          changed_dreams_data.config.service_dreams.service_dreams_restful = JSON.parse(JSON.stringify(dreams_data.config.service_dreams.service_dreams_restful)); 
        }
     
  }

});


</script>

<label>
{#if getDataReady == 1}
  <input type=checkbox checked={!!changed_dreams_data.config.service_dreams.enable} on:click={EnableDreamsCheck}>
{/if}
  Enable DREAMS
</label>


<p class="mt-10"></p>

<Tabs style="underline">
  <TabItem open title="Serial">
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell>Data Bits</TableHeadCell>
    <TableHeadCell class="w-22">Stop Bits</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_dreams_data.config.service_dreams.service_dreams_serial.list as Serial, index}

  
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTriggerSerial(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>


      <TableBodyCell class="!p-6 w-10">{Serial.name}</TableBodyCell>
{#if Serial.interface==0}
      <TableBodyCell class="w-10">RS485</TableBodyCell>
{:else if Serial.interface==1}
      <TableBodyCell class="w-10">RS232</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{Serial.baudrate}</TableBodyCell>
{#if Serial.parity==0}
      <TableBodyCell class="w-10">None</TableBodyCell>
{:else if Serial.parity==1}
      <TableBodyCell class="w-10">Even</TableBodyCell>
{:else if Serial.parity==2}
      <TableBodyCell class="w-10">Odd</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{Serial.dataBit}</TableBodyCell>
      <TableBodyCell class="w-10">{Serial.stopBit}</TableBodyCell>
    </TableBodyRow>
{/each}
{/if}


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

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveSerial}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>




<Modal bind:open={formModalSerial} size="md" class="w-full" permanent={true}>
  <form action="#">

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifySerial(serialindex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">{changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].name}</td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface} value={0} >RS 485</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface} value={1} >RS 232</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].baudrate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity} value={0} >None</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity} value={1} >Even</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity} value={2} >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].dataBit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].stopBit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>    
    <td></td>
        <td></td>    
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={SerialModify}>Modify</Button></td>


    </tr>
</table>
 </form>
</Modal>


  </TableBody>
</Table>

  </TabItem>
  <TabItem title="Modbus">
<Accordion>
 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Serial Port 0</span>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
  {#each changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list as S0ModbusItem, index}

 <TableBodyRow>

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTriggerModbus(0,index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">{S0ModbusItem.name}</TableBodyCell>
  <TableBodyCell class="w-10">{S0ModbusItem.slaveId}</TableBodyCell>
{#if S0ModbusItem.pointType==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if S0ModbusItem.pointType==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}
  <TableBodyCell class="w-10">{S0ModbusItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{S0ModbusItem.quantity}</TableBodyCell>

{#if S0ModbusItem.display == 0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if S0ModbusItem.display == 1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if S0ModbusItem.display == 2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if S0ModbusItem.display == 3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}


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

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveModbusSerial0}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>


 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Serial Port 1</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
  {#each changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list as S1ModbusItem, index}

 <TableBodyRow>

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTriggerModbus(1,index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">{S1ModbusItem.name}</TableBodyCell>
  <TableBodyCell class="w-10">{S1ModbusItem.slaveId}</TableBodyCell>
{#if S1ModbusItem.pointType==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if S1ModbusItem.pointType==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}
  <TableBodyCell class="w-10">{S1ModbusItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{S1ModbusItem.quantity}</TableBodyCell>

{#if S1ModbusItem.display == 0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if S1ModbusItem.display == 1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if S1ModbusItem.display == 2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if S1ModbusItem.display == 3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}
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

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveModbusSerial1}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>

 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Option</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Slave ID</TableHeadCell>
    <TableHeadCell>Point Type</TableHeadCell>
    <TableHeadCell>Address(DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Display</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
  {#each changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list as S_OptionModbusItem, index}

 <TableBodyRow>

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTriggerModbus(-1,index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">{S_OptionModbusItem.name}</TableBodyCell>
  <TableBodyCell class="w-10">{S_OptionModbusItem.slaveId}</TableBodyCell>
{#if S_OptionModbusItem.pointType==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if S_OptionModbusItem.pointType==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}
  <TableBodyCell class="w-10">{S_OptionModbusItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{S_OptionModbusItem.quantity}</TableBodyCell>

{#if S_OptionModbusItem.display == 0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if S_OptionModbusItem.display == 1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if S_OptionModbusItem.display == 2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if S_OptionModbusItem.display == 3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}

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

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveModbusSerialOption}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>
 </AccordionItem>


 <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Value List</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Value</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_dreams_data.config.service_dreams.service_dreams_modbus.valueList.list as item, index}

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">{item.name}</TableBodyCell>
  <TableBodyCell class="w-10">{item.value}</TableBodyCell>
    </TableBodyRow>

{/each}
{/if}


  </TableBody>
</Table>
 </AccordionItem>

<Modal bind:open={formModalModbus} size="md" class="w-full" permanent={true}>
  <form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyModbus(serialindex4modbus,modbusindex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>
<tr>

      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>
{#if serialindex4modbus==0}      
      <td class="pl-5 pt-5">{changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].name}</td>
{:else if serialindex4modbus==1}
      <td class="pl-5 pt-5">{changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].name}</td>
{:else if serialindex4modbus==-1}
      <td class="pl-5 pt-5">{changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].name}</td>
{:else}
      <td class="pl-5 pt-5"></td>
{/if}


  </tr>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}      
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
      </td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">


{#if serialindex4modbus==0}  
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType} value={0} >Input Register</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType} value={1} >Holding Register</Radio>

{:else if serialindex4modbus==1}
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].pointType} value={0} >Input Register</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].pointType} value={1} >Holding Register</Radio>
{:else if serialindex4modbus==-1}
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].pointType} value={0} >Input Register</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].pointType} value={1} >Holding Register</Radio>
{/if}

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}  
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

      </td>



  </tr>


  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}  
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
      </td>



  </tr>


  <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Display</p>

  </td>

    <td class="pl-5 pt-5"><div class="gap-4">

{#if serialindex4modbus==0}  
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display} value={3} >Little Endian Byte Swap</Radio>
{:else if serialindex4modbus==1}
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].display} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].display} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].display} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[modbusindex].display} value={3} >Little Endian Byte Swap</Radio>
{:else if serialindex4modbus==-1}
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].display} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].display} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].display} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_dreams_data.config.service_dreams.service_dreams_modbus.option.list[modbusindex].display} value={3} >Little Endian Byte Swap</Radio>
  
{/if}
</div></td>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModbusModify}>Modify</Button></td>


    </tr>

</table>
 </form>
</Modal>
</Accordion>


  </TabItem>

    <TabItem title="DNP3">
    <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_dreams_data.config.service_dreams.service_dreams_dnp3.listenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


   <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveDNP3}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </TabItem>

    <TabItem title="Restful">

     <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Email</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_dreams_data.config.service_dreams.service_dreams_restful.account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Password</p></td><td class="pl-5 pt-5"><input type="password" bind:value={changed_dreams_data.config.service_dreams.service_dreams_restful.password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

   <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveRestful}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>
  </TabItem>


</Tabs>