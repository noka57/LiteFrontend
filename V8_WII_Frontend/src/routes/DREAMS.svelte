<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { dreamsConfig} from "./configG.js"
   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let EnableD=false;;
   let formModal = false;
   let formModal2 = false;

   let serialname=["",""];
   let serialinterface=[0,0];
   let serialBR=[0,0];
   let serialparity=[0,0];
   let serialdatabit=[0,0];
   let serialstopbit=[0,0];
   let serial0modbusName=["","","","","","","","","","","",""];
   let serial0modbusSID=[0,0,0,0,0,0,0,0,0,0,0,0];
   let serial0modbusPointType=[1,1,1,1,1,1,1,1,1,1,1,1];
   let serial0modbusAddress=[0,0,0,0,0,0,0,0,0,0,0,0];
   let serial0modbusQuantity=[0,0,0,0,0,0,0,0,0,0,0,0];
   let serial0modbusDisplay=[0,0,0,0,0,0,0,0,0,0,0,0];

   let serial1modbusName=["","","","","",""];
   let serial1modbusSID=[0,0,0,0,0,0];
   let serial1modbusPointType=[1,1,1,1,1,1];
   let serial1modbusAddress=[0,0,0,0,0,0];
   let serial1modbusQuantity=[0,0,0,0,0,0];
   let serial1modbusDisplay=[0,0,0,0,0,0];


   let valueListName=["","","","","","","","","","","","","","","","","","",""];
   let valueListValue=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   let optionName="";
   let optionSID=0;
   let optionPointType=1;
   let optionAddress=0;
   let optionQuantity=1;
   let optionDisplay=0;



   let DNP3Port=0;
   let DEmail="";
   let DPwd="";
  
   let serialindex=0;
   let modbusindex=0;
   let serialindex4modbus=0;

   function modalTrigger(index){
    formModal = true;
    serialindex=index;

   }

   function modalTrigger2(sindex,mindex)
   {
    formModal2= true;
    modbusindex=mindex;
    serialindex4modbus=sindex;

   }




    let dreams_data="";
    let getdataAlready=0;

   let sessionid;
   sessionidG.subscribe(val => {
     sessionid = val;
   });

    dreamsConfig.subscribe(val => {
        dreams_data = val;
    });


   async function getDREAMSdata () {
    const res = await fetch(window.location.origin+"/getDREAMSdata", {
      method: 'POST',
      body: JSON.stringify({
        sessionid
      })
    })

    if (res.status == 200)
    {
      dreams_data =await res.json();
      console.log(dreams_data);
      getdataAlready=1;

      dreamsConfig.set(dreams_data);

      EnableD=!!dreams_data.config.service_dreams.enable;
      serialname[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].name;
      serialname[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].name;

      serialinterface[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].interface;
      serialinterface[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].interface;

      serialBR[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].baudrate;
      serialBR[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].baudrate;

      serialparity[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].parity;
      serialparity[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].parity;

      serialdatabit[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].dataBit;
      serialdatabit[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].dataBit;

      serialstopbit[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].stopBit;
      serialstopbit[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].stopBit;


      serial0modbusName[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].name;
      serial0modbusName[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].name;
      serial0modbusName[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].name;
      serial0modbusName[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].name;
      serial0modbusName[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].name;
      serial0modbusName[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].name;
      serial0modbusName[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].name;
      serial0modbusName[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].name;
      serial0modbusName[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].name;
      serial0modbusName[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].name;
      serial0modbusName[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].name;
      serial0modbusName[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].name;



      serial0modbusSID[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].slaveId;
      serial0modbusSID[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].slaveId;
      serial0modbusSID[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].slaveId;
      serial0modbusSID[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].slaveId;
      serial0modbusSID[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].slaveId;
      serial0modbusSID[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].slaveId;
      serial0modbusSID[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].slaveId;
      serial0modbusSID[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].slaveId;
      serial0modbusSID[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].slaveId;
      serial0modbusSID[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].slaveId;
      serial0modbusSID[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].slaveId;
      serial0modbusSID[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].slaveId;


      serial0modbusPointType[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].pointType;
      serial0modbusPointType[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].pointType;
      serial0modbusPointType[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].pointType;
      serial0modbusPointType[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].pointType;
      serial0modbusPointType[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].pointType;
      serial0modbusPointType[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].pointType;
      serial0modbusPointType[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].pointType;
      serial0modbusPointType[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].pointType;
      serial0modbusPointType[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].pointType;
      serial0modbusPointType[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].pointType;
      serial0modbusPointType[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].pointType;
      serial0modbusPointType[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].pointType;


      serial0modbusAddress[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].address;
      serial0modbusAddress[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].address;
      serial0modbusAddress[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].address;
      serial0modbusAddress[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].address;
      serial0modbusAddress[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].address;
      serial0modbusAddress[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].address;
      serial0modbusAddress[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].address;
      serial0modbusAddress[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].address;
      serial0modbusAddress[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].address;
      serial0modbusAddress[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].address;
      serial0modbusAddress[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].address;
      serial0modbusAddress[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].address;

      serial0modbusQuantity[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].quantity;
      serial0modbusQuantity[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].quantity;
      serial0modbusQuantity[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].quantity;
      serial0modbusQuantity[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].quantity;
      serial0modbusQuantity[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].quantity;
      serial0modbusQuantity[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].quantity;
      serial0modbusQuantity[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].quantity;
      serial0modbusQuantity[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].quantity;
      serial0modbusQuantity[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].quantity;
      serial0modbusQuantity[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].quantity;
      serial0modbusQuantity[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].quantity;
      serial0modbusQuantity[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].quantity;


      serial0modbusDisplay[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].display;
      serial0modbusDisplay[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].display;
      serial0modbusDisplay[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].display;
      serial0modbusDisplay[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].display;
      serial0modbusDisplay[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].display;
      serial0modbusDisplay[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].display;
      serial0modbusDisplay[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].display;
      serial0modbusDisplay[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].display;
      serial0modbusDisplay[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].display;
      serial0modbusDisplay[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].display;
      serial0modbusDisplay[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].display;
      serial0modbusDisplay[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].display;



      serial1modbusName[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].name;
      serial1modbusName[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].name;
      serial1modbusName[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].name;
      serial1modbusName[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].name;
      serial1modbusName[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].name;
      serial1modbusName[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].name;

      serial1modbusSID[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].slaveId;
      serial1modbusSID[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].slaveId;
      serial1modbusSID[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].slaveId;
      serial1modbusSID[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].slaveId;
      serial1modbusSID[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].slaveId;
      serial1modbusSID[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].slaveId;

      serial1modbusPointType[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].pointType;
      serial1modbusPointType[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].pointType;
      serial1modbusPointType[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].pointType;
      serial1modbusPointType[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].pointType;
      serial1modbusPointType[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].pointType;
      serial1modbusPointType[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].pointType;


      serial1modbusAddress[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].address;
      serial1modbusAddress[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].address;
      serial1modbusAddress[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].address;
      serial1modbusAddress[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].address;
      serial1modbusAddress[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].address;
      serial1modbusAddress[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].address;

      serial1modbusQuantity[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].quantity;
      serial1modbusQuantity[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].quantity;
      serial1modbusQuantity[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].quantity;
      serial1modbusQuantity[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].quantity;
      serial1modbusQuantity[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].quantity;
      serial1modbusQuantity[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].quantity;

      serial1modbusDisplay[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].display;
      serial1modbusDisplay[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].display;
      serial1modbusDisplay[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].display;
      serial1modbusDisplay[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].display;
      serial1modbusDisplay[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].display;
      serial1modbusDisplay[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].display;

      valueListName[0]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[0].name;
      valueListName[1]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[1].name;
      valueListName[2]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[2].name;
      valueListName[3]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[3].name;
      valueListName[4]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[4].name;
      valueListName[5]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[5].name;
      valueListName[6]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[6].name;
      valueListName[7]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[7].name;
      valueListName[8]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[8].name;
      valueListName[9]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[9].name;
      valueListName[10]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[10].name;
      valueListName[11]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[11].name;
      valueListName[12]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[12].name;
      valueListName[13]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[13].name;
      valueListName[14]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[14].name;
      valueListName[15]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[15].name;
      valueListName[16]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[16].name;
      valueListName[17]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[17].name;
      valueListName[18]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[18].name;


      valueListValue[0]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[0].value;
      valueListValue[1]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[1].value;
      valueListValue[2]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[2].value;
      valueListValue[3]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[3].value;
      valueListValue[4]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[4].value;
      valueListValue[5]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[5].value;
      valueListValue[6]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[6].value;
      valueListValue[7]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[7].value;
      valueListValue[8]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[8].value;
      valueListValue[9]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[9].value;
      valueListValue[10]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[10].value;
      valueListValue[11]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[11].value;
      valueListValue[12]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[12].value;
      valueListValue[13]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[13].value;
      valueListValue[14]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[14].value;
      valueListValue[15]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[15].value;
      valueListValue[16]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[16].value;
      valueListValue[17]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[17].value;
      valueListValue[18]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[18].value;


      optionName=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].name;
      optionSID=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].slaveId;
      optionPointType=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].pointType;
      optionAddress=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].address;
      optionQuantity=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].quantity;
      optionDisplay=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].display;

      DNP3Port=dreams_data.config.service_dreams.service_dreams_dnp3.listenPort;

      DEmail=dreams_data.config.service_dreams.service_dreams_restful.account;
      DPwd=dreams_data.config.service_dreams.service_dreams_restful.password;

    }
  }


  onMount(() => {

    console.log("dreams sessionid: ");
    console.log(sessionid);


    if (sessionid && dreams_data == "")
    {
        getDREAMSdata();
    }
    else if (sessionid && dreams_data != "")
    {
      EnableD=!!dreams_data.config.service_dreams.enable;
      serialname[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].name;
      serialname[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].name;

      serialinterface[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].interface;
      serialinterface[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].interface;

      serialBR[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].baudrate;
      serialBR[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].baudrate;

      serialparity[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].parity;
      serialparity[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].parity;

      serialdatabit[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].dataBit;
      serialdatabit[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].dataBit;

      serialstopbit[0]=dreams_data.config.service_dreams.service_dreams_serial.list[0].stopBit;
      serialstopbit[1]=dreams_data.config.service_dreams.service_dreams_serial.list[1].stopBit;

      serial0modbusName[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].name;
      serial0modbusName[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].name;
      serial0modbusName[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].name;
      serial0modbusName[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].name;
      serial0modbusName[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].name;
      serial0modbusName[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].name;
      serial0modbusName[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].name;
      serial0modbusName[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].name;
      serial0modbusName[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].name;
      serial0modbusName[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].name;
      serial0modbusName[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].name;
      serial0modbusName[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].name;



      serial0modbusSID[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].slaveId;
      serial0modbusSID[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].slaveId;
      serial0modbusSID[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].slaveId;
      serial0modbusSID[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].slaveId;
      serial0modbusSID[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].slaveId;
      serial0modbusSID[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].slaveId;
      serial0modbusSID[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].slaveId;
      serial0modbusSID[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].slaveId;
      serial0modbusSID[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].slaveId;
      serial0modbusSID[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].slaveId;
      serial0modbusSID[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].slaveId;
      serial0modbusSID[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].slaveId;


      serial0modbusPointType[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].pointType;
      serial0modbusPointType[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].pointType;
      serial0modbusPointType[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].pointType;
      serial0modbusPointType[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].pointType;
      serial0modbusPointType[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].pointType;
      serial0modbusPointType[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].pointType;
      serial0modbusPointType[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].pointType;
      serial0modbusPointType[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].pointType;
      serial0modbusPointType[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].pointType;
      serial0modbusPointType[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].pointType;
      serial0modbusPointType[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].pointType;
      serial0modbusPointType[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].pointType;


      serial0modbusAddress[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].address;
      serial0modbusAddress[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].address;
      serial0modbusAddress[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].address;
      serial0modbusAddress[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].address;
      serial0modbusAddress[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].address;
      serial0modbusAddress[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].address;
      serial0modbusAddress[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].address;
      serial0modbusAddress[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].address;
      serial0modbusAddress[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].address;
      serial0modbusAddress[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].address;
      serial0modbusAddress[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].address;
      serial0modbusAddress[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].address;

      serial0modbusQuantity[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].quantity;
      serial0modbusQuantity[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].quantity;
      serial0modbusQuantity[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].quantity;
      serial0modbusQuantity[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].quantity;
      serial0modbusQuantity[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].quantity;
      serial0modbusQuantity[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].quantity;
      serial0modbusQuantity[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].quantity;
      serial0modbusQuantity[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].quantity;
      serial0modbusQuantity[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].quantity;
      serial0modbusQuantity[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].quantity;
      serial0modbusQuantity[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].quantity;
      serial0modbusQuantity[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].quantity;


      serial0modbusDisplay[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[0].display;
      serial0modbusDisplay[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[1].display;
      serial0modbusDisplay[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[2].display;
      serial0modbusDisplay[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[3].display;
      serial0modbusDisplay[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[4].display;
      serial0modbusDisplay[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[5].display;
      serial0modbusDisplay[6]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[6].display;
      serial0modbusDisplay[7]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[7].display;
      serial0modbusDisplay[8]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[8].display;
      serial0modbusDisplay[9]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[9].display;
      serial0modbusDisplay[10]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[10].display;
      serial0modbusDisplay[11]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[11].display;


      serial1modbusName[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].name;
      serial1modbusName[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].name;
      serial1modbusName[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].name;
      serial1modbusName[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].name;
      serial1modbusName[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].name;
      serial1modbusName[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].name;

      serial1modbusSID[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].slaveId;
      serial1modbusSID[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].slaveId;
      serial1modbusSID[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].slaveId;
      serial1modbusSID[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].slaveId;
      serial1modbusSID[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].slaveId;
      serial1modbusSID[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].slaveId;

      serial1modbusPointType[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].pointType;
      serial1modbusPointType[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].pointType;
      serial1modbusPointType[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].pointType;
      serial1modbusPointType[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].pointType;
      serial1modbusPointType[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].pointType;
      serial1modbusPointType[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].pointType;


      serial1modbusAddress[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].address;
      serial1modbusAddress[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].address;
      serial1modbusAddress[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].address;
      serial1modbusAddress[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].address;
      serial1modbusAddress[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].address;
      serial1modbusAddress[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].address;

      serial1modbusQuantity[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].quantity;
      serial1modbusQuantity[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].quantity;
      serial1modbusQuantity[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].quantity;
      serial1modbusQuantity[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].quantity;
      serial1modbusQuantity[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].quantity;
      serial1modbusQuantity[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].quantity;

      serial1modbusDisplay[0]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[0].display;
      serial1modbusDisplay[1]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[1].display;
      serial1modbusDisplay[2]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[2].display;
      serial1modbusDisplay[3]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[3].display;
      serial1modbusDisplay[4]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[4].display;
      serial1modbusDisplay[5]=dreams_data.config.service_dreams.service_dreams_modbus.serialPort1.list[5].display;


      valueListName[0]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[0].name;
      valueListName[1]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[1].name;
      valueListName[2]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[2].name;
      valueListName[3]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[3].name;
      valueListName[4]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[4].name;
      valueListName[5]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[5].name;
      valueListName[6]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[6].name;
      valueListName[7]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[7].name;
      valueListName[8]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[8].name;
      valueListName[9]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[9].name;
      valueListName[10]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[10].name;
      valueListName[11]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[11].name;
      valueListName[12]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[12].name;
      valueListName[13]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[13].name;
      valueListName[14]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[14].name;
      valueListName[15]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[15].name;
      valueListName[16]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[16].name;
      valueListName[17]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[17].name;
      valueListName[18]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[18].name;


      valueListValue[0]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[0].value;
      valueListValue[1]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[1].value;
      valueListValue[2]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[2].value;
      valueListValue[3]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[3].value;
      valueListValue[4]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[4].value;
      valueListValue[5]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[5].value;
      valueListValue[6]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[6].value;
      valueListValue[7]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[7].value;
      valueListValue[8]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[8].value;
      valueListValue[9]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[9].value;
      valueListValue[10]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[10].value;
      valueListValue[11]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[11].value;
      valueListValue[12]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[12].value;
      valueListValue[13]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[13].value;
      valueListValue[14]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[14].value;
      valueListValue[15]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[15].value;
      valueListValue[16]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[16].value;
      valueListValue[17]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[17].value;
      valueListValue[18]=dreams_data.config.service_dreams.service_dreams_modbus.valueList.list[18].value;
      
      optionName=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].name;
      optionSID=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].slaveId;
      optionPointType=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].pointType;
      optionAddress=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].address;
      optionQuantity=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].quantity;
      optionDisplay=dreams_data.config.service_dreams.service_dreams_modbus.option.list[0].display;

      DNP3Port=dreams_data.config.service_dreams.service_dreams_dnp3.listenPort;

      DEmail=dreams_data.config.service_dreams.service_dreams_restful.account;
      DPwd=dreams_data.config.service_dreams.service_dreams_restful.password;
    }

  });


</script>

<label>
  <input type=checkbox checked={EnableD}>
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
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger(0)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

<Modal bind:open={formModal} size="md" class="w-full" autoclose>
  <form action="#">


<p class="mt-10"></p>


<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">{serialname[serialindex]}</td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={serialinterface[serialindex]} value={0} >RS 485</Radio>
  <Radio bind:group={serialinterface[serialindex]} value={1} >RS 232</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="number" bind:value={serialBR[serialindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={serialparity[serialindex]} value={0} >None</Radio>
  <Radio bind:group={serialparity[serialindex]} value={1} >Even</Radio>
  <Radio bind:group={serialparity[serialindex]} value={2} >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="number" bind:value={serialdatabit[serialindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="number" bind:value={serialstopbit[serialindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>
</table>
 </form>
</Modal>
 </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{serialname[0]}</TableBodyCell>
{#if serialinterface[0]==0}
      <TableBodyCell class="w-10">RS485</TableBodyCell>
{:else if serialinterface[0]==1}
      <TableBodyCell class="w-10">RS232</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{serialBR[0]}</TableBodyCell>

{#if serialparity[0]==0}
      <TableBodyCell class="w-10">None</TableBodyCell>
{:else if serialparity[0]==1}
      <TableBodyCell class="w-10">Even</TableBodyCell>
{:else if serialparity[0]==2}
      <TableBodyCell class="w-10">Odd</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}

      <TableBodyCell class="w-10">{serialdatabit[0]}</TableBodyCell>
      <TableBodyCell class="w-10">{serialstopbit[0]}</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger(1)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


 </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{serialname[1]}</TableBodyCell>
{#if serialinterface[1]==0}
      <TableBodyCell class="w-10">RS485</TableBodyCell>
{:else if serialinterface[1]==1}
      <TableBodyCell class="w-10">RS232</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{serialBR[1]}</TableBodyCell>
{#if serialparity[1]==0}
      <TableBodyCell class="w-10">None</TableBodyCell>
{:else if serialparity[1]==1}
      <TableBodyCell class="w-10">Even</TableBodyCell>
{:else if serialparity[1]==2}
      <TableBodyCell class="w-10">Odd</TableBodyCell>
{:else}
      <TableBodyCell class="w-10"></TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{serialdatabit[1]}</TableBodyCell>
      <TableBodyCell class="w-10">{serialstopbit[1]}</TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

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

  {#each serial0modbusName as item, index}

 <TableBodyRow>

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger2(0,index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">{item}</TableBodyCell>
  <TableBodyCell class="w-10">{serial0modbusSID[index]}</TableBodyCell>
{#if serial0modbusPointType[index]==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if serial0modbusPointType[index]==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}
  <TableBodyCell class="w-10">{serial0modbusAddress[index]}</TableBodyCell>
  <TableBodyCell class="w-10">{serial0modbusQuantity[index]}</TableBodyCell>

{#if serial0modbusDisplay[index] == 0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if serial0modbusDisplay[index] == 1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if serial0modbusDisplay[index] == 2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if serial0modbusDisplay[index] == 3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}



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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

  {#each serial1modbusName as item, index}

 <TableBodyRow>

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger2(1,index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>

  <TableBodyCell class="w-10">{item}</TableBodyCell>
  <TableBodyCell class="w-10">{serial1modbusSID[index]}</TableBodyCell>
{#if serial1modbusPointType[index]==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if serial1modbusPointType[index]==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}
  <TableBodyCell class="w-10">{serial1modbusAddress[index]}</TableBodyCell>
  <TableBodyCell class="w-10">{serial1modbusQuantity[index]}</TableBodyCell>

{#if serial1modbusDisplay[index] == 0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if serial1modbusDisplay[index] == 1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if serial1modbusDisplay[index] == 2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if serial1modbusDisplay[index] == 3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => modalTrigger2(-1,0)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


 </TableBodyCell>
  <TableBodyCell class="w-10">{optionName}</TableBodyCell>
  <TableBodyCell class="w-10">{optionSID}</TableBodyCell>
{#if optionPointType==0}
  <TableBodyCell class="w-10">Input Register</TableBodyCell>
{:else if optionPointType==1}
  <TableBodyCell class="w-10">Holding Register</TableBodyCell>
{/if}

  <TableBodyCell class="w-10">{optionAddress}</TableBodyCell>
  <TableBodyCell class="w-10">{optionQuantity}</TableBodyCell>
{#if optionDisplay==0}
  <TableBodyCell class="w-10">Big endian</TableBodyCell>
{:else if optionDisplay==1}
  <TableBodyCell class="w-10">Little endian</TableBodyCell>
{:else if optionDisplay==2}
  <TableBodyCell class="w-10">Big endian byte swap</TableBodyCell>
{:else if optionDisplay==3}
  <TableBodyCell class="w-10">Little endian byte swap</TableBodyCell>
{/if}
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

    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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


{#each valueListName as item, index}

<TableBodyRow>
 <TableBodyCell class="!p-4 w-10">

 </TableBodyCell>
  <TableBodyCell class="w-10">{item}</TableBodyCell>
  <TableBodyCell class="w-10">{valueListValue[index]}</TableBodyCell>
    </TableBodyRow>

{/each}


  </TableBody>
</Table>
 </AccordionItem>

<Modal bind:open={formModal2} size="md" class="w-full" autoclose>
  <form action="#">


<p class="mt-10"></p>

<table>
<tr>

      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>
{#if serialindex4modbus==0}      
      <td class="pl-5 pt-5">{serial0modbusName[modbusindex]}</td>
{:else if serialindex4modbus==1}
      <td class="pl-5 pt-5">{serial1modbusName[modbusindex]}</td>
{:else if serialindex4modbus==-1}
      <td class="pl-5 pt-5">{optionName}</td>
{:else}
      <td class="pl-5 pt-5"></td>
{/if}


  </tr>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}      
      <input type="number" bind:value={serial0modbusSID[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={serial1modbusSID[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={optionSID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
      </td>



  </tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">


{#if serialindex4modbus==0}  
  <Radio bind:group={serial0modbusPointType[modbusindex]} value={0} >Input Register</Radio>
  <Radio bind:group={serial0modbusPointType[modbusindex]} value={1} >Holding Register</Radio>

{:else if serialindex4modbus==1}
  <Radio bind:group={serial1modbusPointType[modbusindex]} value={0} >Input Register</Radio>
  <Radio bind:group={serial1modbusPointType[modbusindex]} value={1} >Holding Register</Radio>
{:else if serialindex4modbus==-1}
  <Radio bind:group={optionPointType} value={0} >Input Register</Radio>
  <Radio bind:group={optionPointType} value={1} >Holding Register</Radio>
{/if}

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}  
      <input type="number" bind:value={serial0modbusAddress[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={serial1modbusAddress[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={optionAddress} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

      </td>



  </tr>


  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5">

{#if serialindex4modbus==0}  
      <input type="number" bind:value={serial0modbusQuantity[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==1}
      <input type="number" bind:value={serial1modbusQuantity[modbusindex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if serialindex4modbus==-1}
      <input type="number" bind:value={optionQuantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
      </td>



  </tr>


  <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Display</p>

  </td>

    <td class="pl-5 pt-5"><div class="gap-4">

{#if serialindex4modbus==0}  
  <Radio bind:group={serial0modbusDisplay[modbusindex]} value={0} >Big Endian</Radio>
  <Radio bind:group={serial0modbusDisplay[modbusindex]} value={1} >Little Endian</Radio>
  <Radio bind:group={serial0modbusDisplay[modbusindex]} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={serial0modbusDisplay[modbusindex]} value={3} >Little Endian Byte Swap</Radio>
{:else if serialindex4modbus==1}
  <Radio bind:group={serial1modbusDisplay[modbusindex]} value={0} >Big Endian</Radio>
  <Radio bind:group={serial1modbusDisplay[modbusindex]} value={1} >Little Endian</Radio>
  <Radio bind:group={serial1modbusDisplay[modbusindex]} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={serial1modbusDisplay[modbusindex]} value={3} >Little Endian Byte Swap</Radio>
{:else if serialindex4modbus==-1}
  <Radio bind:group={optionDisplay} value={0} >Big Endian</Radio>
  <Radio bind:group={optionDisplay} value={1} >Little Endian</Radio>
  <Radio bind:group={optionDisplay} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={optionDisplay} value={3} >Little Endian Byte Swap</Radio>
  
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
    <td><Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>
 </form>
</Modal>
</Accordion>


  </TabItem>

    <TabItem title="DNP3">
    <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={DNP3Port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


   <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </TabItem>

    <TabItem title="Restful">

     <table>
    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Email</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DEmail} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


    <tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">DREAMS Password</p></td><td class="pl-5 pt-5"><input type="password" bind:value={DPwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

   <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>
  </TabItem>


</Tabs>