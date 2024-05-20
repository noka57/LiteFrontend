<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    portConnectionConfig,
    PortConnection_LAN_ConfigChangedLog,
    PortConnection_COM_ConfigChangedLog,
    PortConnection_Transparent_ConfigChangedLog,
    ChangedPortConnectionConfig,
    ChangedModbusConfig,
    modbusConfig,
    ModbusRTU_Slave_ConfigChangedLog,
    ModbusRTU_Master_ConfigChangedLog,
    ModbusTCP_Slave_ConfigChangedLog,
    ModbusTCP_Master_ConfigChangedLog
  } from "./configG.js"


    let port_connection_data="";
    let changed_port_connection_data = {};
    let saved_changed_port_connection_data = {};
    let getDataReady=0;
    let port_connection_lan_changedValues = [];
    let port_connection_com_changedValues = [];
    let port_connection_transparent_changedValues=[];

    let modbus_rtu_master_changedValues=[];
    let modbus_rtu_slave_changedValues=[];
    let modbus_tcp_master_changedValues=[];
    let modbus_tcp_slave_changedValues=[];
    let saved_changed_modbus_data ="";
    let modbus_data="";

    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    ModbusTCP_Slave_ConfigChangedLog.subscribe(val => {
        modbus_tcp_slave_changedValues = val;
    });
    ModbusTCP_Master_ConfigChangedLog.subscribe(val => {
        modbus_tcp_master_changedValues = val;
    });

    ModbusRTU_Slave_ConfigChangedLog.subscribe(val => {
        modbus_rtu_slave_changedValues = val;
    });

    ModbusRTU_Master_ConfigChangedLog.subscribe(val => {
        modbus_rtu_master_changedValues = val;
    });

    ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
    });

    modbusConfig.subscribe(val => {
      modbus_data = val;
    });

    portConnectionConfig.subscribe(val => {
      port_connection_data = val;
    });

    PortConnection_LAN_ConfigChangedLog.subscribe(val => {
      port_connection_lan_changedValues = val;
    });

    PortConnection_COM_ConfigChangedLog.subscribe(val => {
      port_connection_com_changedValues = val;
    });

    PortConnection_Transparent_ConfigChangedLog.subscribe(val => {
      port_connection_transparent_changedValues = val;
    });    

    ChangedPortConnectionConfig.subscribe(val => {
      saved_changed_port_connection_data = val;
    });



   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

   let COM_TCP_Target_Index=-1;


    function compareModbusObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
    {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareModbusObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
              let changedstr="Add "+addedCount+" item(s) to "+ key;

              if (type == 6)
              {
                modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
              }  
              else if (type == 7)
              {
                modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
              }
              else if (type == 8)
              {
                modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
              }  
              else if (type == 9)
              {
                modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
              }            
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 6)
              {
                modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
              }  
              else if (type == 7)
              {
                modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
              }
              else if (type == 8)
              {
                modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
              }  
              else if (type == 9)
              {
                modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
              }    
            }
          }
          else
          {
            compareModbusObjects(obj1[key], obj2[key], type, 0,0);
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

          if (type == 6)
          {
            modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
          }  
          else if (type == 7)
          {
            modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
          }
          else if (type == 8)
          {
            modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
          }  
          else if (type == 9)
          {
            modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
          }    
        } 
      }
    }



  let modify_lan_modal=false;
  let modify_lan_index;

  let backup_lan_profile={
    profileName:"",
    ip:""

  };

  let modify_com_modal=false;
  let modify_com_index;

  let backup_com_profile={
    enable: false,
    serialProfile: "ComPort1",
    interface: 0,
    baudrate: 9600,
    parity: 0,
    dataBits: 8,
    stopBits: 1
  };


  function TriggerModifyCOM(index)
  {
    modify_com_modal=true;
    modify_com_index=index;    
    backup_com_profile.enable=changed_port_connection_data.config.fieldManagement_portConnection_com[index].enable;
    backup_com_profile.serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[index].serialProfile;
    backup_com_profile.interface=changed_port_connection_data.config.fieldManagement_portConnection_com[index].interface;
    backup_com_profile.baudrate=changed_port_connection_data.config.fieldManagement_portConnection_com[index].baudrate;
    backup_com_profile.parity=changed_port_connection_data.config.fieldManagement_portConnection_com[index].parity;
    backup_com_profile.dataBits=changed_port_connection_data.config.fieldManagement_portConnection_com[index].dataBits;
    backup_com_profile.stopBits=changed_port_connection_data.config.fieldManagement_portConnection_com[index].stopBits;

  }

  function NoModifyCOM(index)
  {
    modify_com_modal=false;

    changed_port_connection_data.config.fieldManagement_portConnection_com[index].enable=backup_com_profile.enable;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].serialProfile=backup_com_profile.serialProfile;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].interface=backup_com_profile.interface;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].baudrate=backup_com_profile.baudrate;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].parity=backup_com_profile.parity;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].dataBits=backup_com_profile.dataBits;
    changed_port_connection_data.config.fieldManagement_portConnection_com[index].stopBits=backup_com_profile.stopBits;

  }

  function ModifyCom()
  {
    modify_com_modal=false;  
  }

  function saveCom()
  {
    console.log("save com");
    if (port_connection_com_changedValues.length != 0)
    {
      port_connection_com_changedValues=[];
    }

    for (let i=0;i<changed_port_connection_data.config.fieldManagement_portConnection_com.length;i++)
    {
        if (port_connection_data.config.fieldManagement_portConnection_com[i].enable != changed_port_connection_data.config.fieldManagement_portConnection_com[i].enable)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].enable=changed_port_connection_data.config.fieldManagement_portConnection_com[i].enable;
            let changedstr="COM List No."+(i+1)+" Enable is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].enable;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }


        if (port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile != changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile)
        {

            for (let j=0; j < modbus_data.config.fieldManagement_modbus_rtu.master.length; j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[j].serialProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile != "")
                {
                    saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[j].serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;

  
                    if (modbus_rtu_master_changedValues.length !=0)
                    {
                        modbus_rtu_master_changedValues=[];
                    }

                    compareModbusObjects(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[j], modbus_data.config.fieldManagement_modbus_rtu.master[j], 9, 1,j+1);

                    ModbusRTU_Master_ConfigChangedLog.set(modbus_rtu_master_changedValues);
                    ChangedModbusConfig.set(saved_changed_modbus_data);
                }
            }

            for (let j=modbus_data.config.fieldManagement_modbus_rtu.master.length; j< saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[j].serialProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile != "")
                {
                   saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[j].serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;
                }

            }

            for (let j=0; j < modbus_data.config.fieldManagement_modbus_rtu.slave.length; j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[j].serialProfile
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile != "")
                {
                    saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[j].serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;


                    if (modbus_rtu_slave_changedValues.length !=0)
                    {
                        modbus_rtu_slave_changedValues=[];
                    }

                    compareModbusObjects(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[j], modbus_data.config.fieldManagement_modbus_rtu.slave[j], 8, 1,j+1);


                    ModbusRTU_Slave_ConfigChangedLog.set(modbus_rtu_slave_changedValues);
                    ChangedModbusConfig.set(saved_changed_modbus_data);
                }
            }

            for (let j=modbus_data.config.fieldManagement_modbus_rtu.slave.length; j< saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length;j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[j].serialProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile != "")
                {
                   saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[j].serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;
                }

            }  

            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile=changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;
            let changedstr="COM List No."+(i+1)+" Serial Profile is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].serialProfile;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];

        }


        if (port_connection_data.config.fieldManagement_portConnection_com[i].interface != changed_port_connection_data.config.fieldManagement_portConnection_com[i].interface)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].interface=changed_port_connection_data.config.fieldManagement_portConnection_com[i].interface;
            let changedstr="COM List No."+(i+1)+" interface is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].interface;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }

        if (port_connection_data.config.fieldManagement_portConnection_com[i].baudrate != changed_port_connection_data.config.fieldManagement_portConnection_com[i].baudrate)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].baudrate=changed_port_connection_data.config.fieldManagement_portConnection_com[i].baudrate;
            let changedstr="COM List No."+(i+1)+" baudrate is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].baudrate;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }


        if (port_connection_data.config.fieldManagement_portConnection_com[i].parity != changed_port_connection_data.config.fieldManagement_portConnection_com[i].parity)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].parity=changed_port_connection_data.config.fieldManagement_portConnection_com[i].parity;
            let changedstr="COM List No."+(i+1)+" parity is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].parity;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }


        if (port_connection_data.config.fieldManagement_portConnection_com[i].dataBits != changed_port_connection_data.config.fieldManagement_portConnection_com[i].dataBits)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].dataBits=changed_port_connection_data.config.fieldManagement_portConnection_com[i].dataBits;
            let changedstr="COM List No."+(i+1)+" dataBits is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].dataBits;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }


        if (port_connection_data.config.fieldManagement_portConnection_com[i].stopBits != changed_port_connection_data.config.fieldManagement_portConnection_com[i].stopBits)
        {
            saved_changed_port_connection_data.config.fieldManagement_portConnection_com[i].stopBits=changed_port_connection_data.config.fieldManagement_portConnection_com[i].stopBits;
            let changedstr="COM List No."+(i+1)+" stopBits is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_com[i].stopBits;

            port_connection_com_changedValues=[...port_connection_com_changedValues, changedstr];            
        }

    }

    PortConnection_COM_ConfigChangedLog.set(port_connection_com_changedValues);
    ChangedPortConnectionConfig.set(saved_changed_port_connection_data);
    console.log(port_connection_com_changedValues);   

  }


  function SaveComTcpTransparent()
  {
    console.log("save com tcp transparent");
    if (port_connection_transparent_changedValues.length !=0)
    {
      port_connection_transparent_changedValues =[];
    }


    for (let i=0;i<changed_port_connection_data.config.fieldManagement_com_tcp.length;i++)
    {
      if (changed_port_connection_data.config.fieldManagement_com_tcp[i].mode != port_connection_data.config.fieldManagement_com_tcp[i].mode)
      {
        let changedstr="COM No."+(i+1)+" TCP Transparent Mode is changed to "+changed_port_connection_data.config.fieldManagement_com_tcp[i].mode;

        port_connection_transparent_changedValues=[...port_connection_transparent_changedValues, changedstr]; 

        saved_changed_port_connection_data.config.fieldManagement_com_tcp[i].mode=changed_port_connection_data.config.fieldManagement_com_tcp[i].mode;

      }

      if (changed_port_connection_data.config.fieldManagement_com_tcp[i].listenPort != port_connection_data.config.fieldManagement_com_tcp[i].listenPort)
      {

        let changedstr="COM No."+(i+1)+" TCP Trasparent Listen Port is changed to "+changed_port_connection_data.config.fieldManagement_com_tcp[i].listenPort;

        port_connection_transparent_changedValues=[...port_connection_transparent_changedValues, changedstr]; 

        saved_changed_port_connection_data.config.fieldManagement_com_tcp[i].listenPort=changed_port_connection_data.config.fieldManagement_com_tcp[i].listenPort;
      }



      if (changed_port_connection_data.config.fieldManagement_com_tcp[i].remoteHost != port_connection_data.config.fieldManagement_com_tcp[i].remoteHost)
      {

        let changedstr="COM No."+(i+1)+" TCP Transparent Remote Host is changed to "+changed_port_connection_data.config.fieldManagement_com_tcp[i].remoteHost;

        port_connection_transparent_changedValues=[...port_connection_transparent_changedValues, changedstr]; 

        saved_changed_port_connection_data.config.fieldManagement_com_tcp[i].remoteHost=changed_port_connection_data.config.fieldManagement_com_tcp[i].remoteHost;
      }


      if (changed_port_connection_data.config.fieldManagement_com_tcp[i].remotePort != port_connection_data.config.fieldManagement_com_tcp[i].remotePort)
      {
        let changedstr="COM No."+(i+1)+" TCP Transparent Remote Port is changed to "+changed_port_connection_data.config.fieldManagement_com_tcp[i].remotePort;

        port_connection_transparent_changedValues=[...port_connection_transparent_changedValues, changedstr]; 
    
        saved_changed_port_connection_data.config.fieldManagement_com_tcp[i].remotePort=changed_port_connection_data.config.fieldManagement_com_tcp[i].remotePort;

      }

    }


    PortConnection_Transparent_ConfigChangedLog.set(port_connection_transparent_changedValues);
    ChangedPortConnectionConfig.set(saved_changed_port_connection_data);
    console.log(port_connection_transparent_changedValues);

  }



  function TriggerModifyLAN(index)
  {
    modify_lan_modal=true;
    modify_lan_index=index;
    backup_lan_profile.profileName=changed_port_connection_data.config.fieldManagement_portConnection_lan[index].profileName;


  }

  function NoModifyLAN(index)
  {
    modify_lan_modal=false;
    changed_port_connection_data.config.fieldManagement_portConnection_lan[index].profileName=backup_lan_profile.profileName;
  }

  function ModifyLANProfile()
  {
    modify_lan_modal=false;  
  }

  function saveLanProfile()
  {
    console.log("save lan profile");
    if (port_connection_lan_changedValues.length != 0)
    {
      port_connection_lan_changedValues=[];
    }

    for (let i=0;i<changed_port_connection_data.config.fieldManagement_portConnection_lan.length;i++)
    {
        if (port_connection_data.config.fieldManagement_portConnection_lan[i].profileName != changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName)
        {


            for (let j=0; j < modbus_data.config.fieldManagement_modbus_tcp.master.length; j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[j].lanProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName != ""
                )
                {
                    saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[j].lanProfile=changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;

                    if (modbus_tcp_master_changedValues.length !=0)
                    {
                        modbus_tcp_master_changedValues=[];
                    }

                    compareModbusObjects(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[j], modbus_data.config.fieldManagement_modbus_tcp.master[j], 7, 1,j+1);

                    ModbusTCP_Master_ConfigChangedLog.set(modbus_tcp_master_changedValues);
                    ChangedModbusConfig.set(saved_changed_modbus_data);
                }

            }

            for (let j=modbus_data.config.fieldManagement_modbus_tcp.master.length; j< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[j].lanProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName != "")
                {
                   saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[j].lanProfile=changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;
                }

            }


            for (let j=0; j < modbus_data.config.fieldManagement_modbus_tcp.slave.length; j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[j].lanProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName != "")
                {
                    saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[j].lanProfile=changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;


                    if (modbus_tcp_slave_changedValues.length !=0)
                    {
                        modbus_tcp_slave_changedValues=[];
                    }

                    compareModbusObjects(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[j], modbus_data.config.fieldManagement_modbus_tcp.slave[j], 6, 1,j+1);


                    ModbusTCP_Slave_ConfigChangedLog.set(modbus_tcp_slave_changedValues);
                    ChangedModbusConfig.set(saved_changed_modbus_data);
                }
            }

            for (let j=modbus_data.config.fieldManagement_modbus_tcp.slave.length; j< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length;j++)
            {
                if (saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[j].lanProfile 
                &&
                saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName != "")
                {
                   saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[j].lanProfile=changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;
                }

            }


            saved_changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName=changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;
            let changedstr="LAN List No."+(i+1)+" Profile Name is changed to "+changed_port_connection_data.config.fieldManagement_portConnection_lan[i].profileName;

            port_connection_lan_changedValues=[...port_connection_lan_changedValues, changedstr]; 

        }
    }

    PortConnection_LAN_ConfigChangedLog.set(port_connection_lan_changedValues);
    ChangedPortConnectionConfig.set(saved_changed_port_connection_data);
    console.log(port_connection_lan_changedValues);
  }


  async function getModbusData() {
    const res = await fetch(window.location.origin+"/GeTModbuS", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        console.log("get modbus data");
        modbus_data =await res.json();
        console.log(modbus_data);
        modbusConfig.set(modbus_data);

        saved_changed_modbus_data=JSON.parse(JSON.stringify(modbus_data));
        ChangedModbusConfig.set(saved_changed_modbus_data);

    }
  }


   async function getPortConnectionData() {
    const res = await fetch(window.location.origin+"/GeTPortConnection", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      port_connection_data =await res.json();
      console.log(port_connection_data);
      portConnectionConfig.set(port_connection_data);

      changed_port_connection_data = JSON.parse(JSON.stringify(port_connection_data));
      saved_changed_port_connection_data= JSON.parse(JSON.stringify(port_connection_data));
      ChangedPortConnectionConfig.set(saved_changed_port_connection_data);
      getDataReady=1;

      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }
    
    }
  }


  onMount(() => {

    console.log("port connection sessionid: ");
    console.log(sessionid);


    if (sessionid && port_connection_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getPortConnectionData();
    }
    else if(sessionid && port_connection_data!="")
    {
        getDataReady=1;

        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        console.log("port connection data exists");
        changed_port_connection_data=JSON.parse(JSON.stringify(saved_changed_port_connection_data));
        if (port_connection_lan_changedValues.length==0)
        {
            changed_port_connection_data.config.fieldManagement_portConnection_lan=JSON.parse(JSON.stringify(port_connection_data.config.fieldManagement_portConnection_lan)); 
        }
      

        if (port_connection_com_changedValues.length==0)
        {
            changed_port_connection_data.config.fieldManagement_portConnection_com=JSON.parse(JSON.stringify(port_connection_data.config.fieldManagement_portConnection_com)); 
        }

        if (saved_changed_modbus_data == "")
        {
          getModbusData();
        }

    }

  });

</script>
<Tabs style="underline">
  <TabItem open title="LAN">



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Profile Name</TableHeadCell>

     </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_port_connection_data.config.fieldManagement_portConnection_lan as LANItem, index}
    <TableBodyRow>



      <TableBodyCell class="!p-4 w-4">
{#if 0}     
<button on:click={() =>TriggerModifyLAN(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>
{/if}

       </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{LANItem.profileName}</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}



<tr class="pt-5">
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
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveLanProfile}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



 </TableBody>


<Modal bind:open={modify_lan_modal} size="md" class="w-full" permanent={true}>
<form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyLAN(modify_lan_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>
<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Profile Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_port_connection_data.config.fieldManagement_portConnection_lan[modify_lan_index].profileName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" ></td>



  </tr>

    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyLANProfile}>Modify</Button></td>
    </tr>
</table>
  </form>
</Modal>



</Table>



  </TabItem>

  <TabItem title="COM">


<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    General
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_port_connection_data.config.fieldManagement_portConnection_com as ComItem, index}

    <TableBodyRow>   
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCOM(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
<TableBodyCell>
<input type="checkbox"  bind:checked={ComItem.enable}>
</TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{ComItem.serialProfile}</TableBodyCell>
{#if ComItem.interface == 0}
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
{:else}
      <TableBodyCell class="w-10">Unknown</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{ComItem.baudrate}</TableBodyCell>

{#if ComItem.parity == 0}
      <TableBodyCell class="w-10">None</TableBodyCell>
{:else if ComItem.parity == 1}
      <TableBodyCell class="w-10">Even</TableBodyCell>
{:else if ComItem.parity == 2}
      <TableBodyCell class="w-10">Odd</TableBodyCell>
{/if}
      <TableBodyCell class="w-18">{ComItem.dataBits}</TableBodyCell>
      <TableBodyCell class="w-18">{ComItem.stopBits}</TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveCom}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
    </tr>
  </TableBody>
   
<Modal bind:open={modify_com_modal} size="md" class="w-full" permanent={true}>
<form action="#">
<label>
  <input type="checkbox"  bind:checked={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].enable} >
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCOM(modify_com_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>
  
<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">
      {changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].serialProfile}

      </td>

</tr>

<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].interface} value={0} >RS 485</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].baudrate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity} value={0} >None</Radio>
  <Radio bind:group={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity} value={1} >Even</Radio>
  <Radio bind:group={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity} value={2} >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].dataBits} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].stopBits} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


  
  </tr>
      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyCom}>Modify</Button></td>
    </tr>
</table>
  </form>
</Modal>

</Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    TCP Transparent
    </span>



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64" bind:value={COM_TCP_Target_Index}>
<option disabled="" value="none">Choose Profile ...</option>

{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as TargetProfile,index}
<option value={index}>{TargetProfile.serialProfile}</option>
{/each}
</select>

<p class="pt-4"></p>

{#if COM_TCP_Target_Index!= -1}

    <table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Mode</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].mode} value={0} >Server</Radio>
  <Radio class="pb-2" bind:group={changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].mode} value={1} >Client</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].mode == 0}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].listenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


{:else if changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].mode == 1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_port_connection_data.config.fieldManagement_com_tcp[COM_TCP_Target_Index].remotePort}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


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
    <td></td>
    <td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveComTcpTransparent}>Save</Button></td>

  </tr>



    </table>

{/if}

</AccordionItem>
</Accordion>


  </TabItem>


  <TabItem title="Simulator">

  <table>
<tr>
   <td class="pl-10"><Button pill={true}>Test DI</Button></td>
</tr>

<p class="pt-10"></p>

<tr >
   <td class="pl-10"><Button pill={true}>Test DO High</Button></td>
</tr>

<p class="pt-10"></p>

<tr>
   <td class="pl-10"><Button pill={true}>Test DO Low</Button></td>
</tr>

</table>
  </TabItem>


 </Tabs>