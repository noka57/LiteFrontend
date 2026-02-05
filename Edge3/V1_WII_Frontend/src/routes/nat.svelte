<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal } from 'flowbite-svelte';

  import './global.css';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {natConfig, ChangedNATConfig, NAT_LoopBack_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_Dmz_ConfigChangedLog,
  ChangedWANConfig, wanConfig,ChangedOpenVPNConfig, openvpnConfig,ipsecConfig,ChangedIPsecConfig} from "./configG.js"

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

   let newPFW_openvpnIndex;


    let openvpn_data="";
    let saved_changed_openvpn_data="";
    let wan_data="";
    let saved_changed_wan_data="";


    let ipsec_data="";
    let saved_changed_ipsec_data ="";

    ipsecConfig.subscribe(val => {
      ipsec_data = val;
    });

    ChangedIPsecConfig.subscribe(val => {
      saved_changed_ipsec_data = val;
    });

    openvpnConfig.subscribe(val => {
      openvpn_data = val;
    });

    ChangedOpenVPNConfig.subscribe(val => {
      saved_changed_openvpn_data = val;
    });    


    wanConfig.subscribe(val => {
        wan_data = val;
    });


    ChangedWANConfig.subscribe(val => {
      saved_changed_wan_data = val;
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


    let BackupPFWItem=
    {
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    };


    function modalTriggerPFW(index)
    {
      formModalPFW = true;
      port_forwarding_current_index=index;

      BackupPFWItem.enable=changed_nat_data.config.networking_port_forwarding.list[index].enable;
      BackupPFWItem.delete=changed_nat_data.config.networking_port_forwarding.list[index].delete;      
      BackupPFWItem.incomingIf=changed_nat_data.config.networking_port_forwarding.list[index].incomingIf;
      BackupPFWItem.incomingTun=changed_nat_data.config.networking_port_forwarding.list[index].incomingTun;
      BackupPFWItem.incomingTunAliasName=changed_nat_data.config.networking_port_forwarding.list[index].incomingTunAliasName;
      BackupPFWItem.incomingSrcIp=changed_nat_data.config.networking_port_forwarding.list[index].incomingSrcIp;
      BackupPFWItem.incomingSrcIpUserDefined=changed_nat_data.config.networking_port_forwarding.list[index].incomingSrcIpUserDefined;

      BackupPFWItem.forwardingIf=changed_nat_data.config.networking_port_forwarding.list[index].forwardingIf;
      BackupPFWItem.forwardingTun=changed_nat_data.config.networking_port_forwarding.list[index].forwardingTun; 
      BackupPFWItem.forwardingTunAliasName=changed_nat_data.config.networking_port_forwarding.list[index].forwardingTunAliasName; 


      BackupPFWItem.redirectIp=changed_nat_data.config.networking_port_forwarding.list[index].redirectIp;
      BackupPFWItem.redirectIpUserDefined=changed_nat_data.config.networking_port_forwarding.list[index].redirectIpUserDefined;

      BackupPFWItem.protocol=changed_nat_data.config.networking_port_forwarding.list[index].protocol;
      BackupPFWItem.incomingDstPort=changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPort;
      BackupPFWItem.incomingDstPortRange.start=changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPortRange.start;
      BackupPFWItem.incomingDstPortRange.end=changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPortRange.end;
      BackupPFWItem.redirectPort=changed_nat_data.config.networking_port_forwarding.list[index].redirectPort;
      BackupPFWItem.redirectPortRange.start=changed_nat_data.config.networking_port_forwarding.list[index].redirectPortRange.start;
      BackupPFWItem.redirectPortRange.end=changed_nat_data.config.networking_port_forwarding.list[index].redirectPortRange.end;
    }

    let newPFW_Item = [{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    },{
      "enable": false, 
      "delete": false,
      "incomingIf": 0,
      "incomingTun":"",
      "incomingTunAliasName":"",
      "incomingIPsec":"",
      "incomingIPsecAliasName":"",      
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined":"",
      "forwardingIf":0,
      "forwardingTun":"",
      "forwardingIPsec":"",
      "forwardingIPsecAliasName":"",      
      "redirectIp": 0,
      "redirectIpUserDefined":"",
      "protocol": 0, 
      "incomingDstPort": 0, 
      "incomingDstPortRange": {
        "start": 22222, 
        "end": 22225
      },
      "redirectPort": 0, 
      "redirectPortRange": {
        "start": 22222, 
        "end": 22225
      }
    }];


   function NewPFW_Item_Invoker(index)
   {
      newPFW_Item[index].enable=true;
      newPFW_Item[index].delete=false;
      newPFW_Item[index].incomingIf=2;

      if (saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1)
      {
        if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
        {
          //server
          newPFW_Item[index].incomingTun="openvpn0";
          newPFW_Item[index].incomingTunAliasName="Server";
          newPFW_Item[index].forwardingTunAliasName="Server";
          newPFW_Item[index].forwardingTun="openvpn0"; 
        }
        else if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
        {
          //client
          newPFW_Item[index].incomingTun="";
          newPFW_Item[index].incomingTunAliasName=""; 
          newPFW_Item[index].forwardingTunAliasName="";
          newPFW_Item[index].forwardingTun=""; 
        }
      } 
      else if (saved_changed_openvpn_data !="")
      {
        newPFW_Item[index].incomingTun="";
        newPFW_Item[index].incomingTunAliasName=""; 
        newPFW_Item[index].forwardingTunAliasName="";
        newPFW_Item[index].forwardingTun=""; 
      }


      if (saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
      { 
        if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0)
        {
          newPFW_Item[index].incomingIPsec="IPsecVPN0";
          newPFW_Item[index].incomingIPsecAliasName="Responder"; 
          newPFW_Item[index].forwardingIPsecAliasName="Responder";
          newPFW_Item[index].forwardingIPsec="IPsecVPN0"; 
        }
        else if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1)
        {
          newPFW_Item[index].incomingIPsec="";
          newPFW_Item[index].incomingIPsecAliasName=""; 
          newPFW_Item[index].forwardingIPsecAliasName="";
          newPFW_Item[index].forwardingIPsec="";  
        }
      }
      else if (saved_changed_ipsec_data !="")
      {
        newPFW_Item[index].incomingIPsec="";
        newPFW_Item[index].incomingIPsecAliasName=""; 
        newPFW_Item[index].forwardingIPsecAliasName="";
        newPFW_Item[index].forwardingIPsec="";      
      }


     
      newPFW_Item[index].incomingSrcIp=0;
      newPFW_Item[index].incomingSrcIpUserDefined="";
      newPFW_Item[index].forwardingIf=0;
      newPFW_Item[index].forwardingTun="";
      newPFW_Item[index].forwardingIPSec="";
      newPFW_Item[index].redirectIp=1;
      newPFW_Item[index].redirectIpUserDefined=""; 
      newPFW_Item[index].protocol=3;
      newPFW_Item[index].incomingDstPort=0;
      newPFW_Item[index].incomingDstPortRange.start=0;
      newPFW_Item[index].incomingDstPortRange.end=0;
      newPFW_Item[index].redirectPort=0;
      newPFW_Item[index].redirectPortRange.start=0;
      newPFW_Item[index].redirectPortRange.end=0;

      new_pfw_index=index;
      newformModalPFW = true;

   }

   function ModifyInDestPortChanged()
   {
      if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort!=2)
      {
        if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol==0)
        {
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol=3;
        }
      }      
   }


   function ModifyProtocolChanged()
   {
      if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol==0)
      {
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort=2;
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort=2;
      }

   }

   function NewProtocolChanged()
   {
      if (newPFW_Item[new_pfw_index].protocol==0)
      {
        newPFW_Item[new_pfw_index].incomingDstPort=2;
        newPFW_Item[new_pfw_index].redirectPort=2;
        newPFW_Item[new_pfw_index].redirectIp=0;
      }

   }


   function NewInDestPortChanged()
   {
      if (newPFW_Item[new_pfw_index].incomingDstPort!=2)
      {
        if (newPFW_Item[new_pfw_index].protocol==0)
        {
          newPFW_Item[new_pfw_index].protocol=3;
        }
      }
   }

   function NewIncomingIfChanged()
   {
     console.log("NewIncomingIfChanged:" + newPFW_Item[new_pfw_index].incomingIf);
     if (newPFW_Item[new_pfw_index].incomingIf==1 || newPFW_Item[new_pfw_index].incomingIf==2)
     {
        newPFW_Item[new_pfw_index].forwardingIf=0;
        newPFW_Item[new_pfw_index].incomingSrcIp=0;
        newPFW_Item[new_pfw_index].redirectIp=1;
        newPFW_Item[new_pfw_index].incomingDstPort=0;
        newPFW_Item[new_pfw_index].redirectPort=0;
     }
     else if (newPFW_Item[new_pfw_index].incomingIf==0)
     {
        if (saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1)
        {
          newPFW_Item[new_pfw_index].forwardingIf=1;
          newPFW_Item[new_pfw_index].incomingSrcIp=0;
          newPFW_Item[new_pfw_index].protocol=0;
          newPFW_Item[new_pfw_index].incomingDstPort=2;
          newPFW_Item[new_pfw_index].redirectIp=0;
          newPFW_Item[new_pfw_index].redirectPort=2;
        }
        else if (saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        {
          newPFW_Item[new_pfw_index].forwardingIf=2;
          newPFW_Item[new_pfw_index].incomingSrcIp=0;
          newPFW_Item[new_pfw_index].protocol=0;
          newPFW_Item[new_pfw_index].incomingDstPort=2;
          newPFW_Item[new_pfw_index].redirectIp=0;
          newPFW_Item[new_pfw_index].redirectPort=2;
        }
        else 
        {
          newPFW_Item[new_pfw_index].forwardingIf=-1;
          newPFW_Item[new_pfw_index].incomingSrcIp=0;
        }
     }
     else if (newPFW_Item[new_pfw_index].incomingIf==3)
     {
        newPFW_Item[new_pfw_index].protocol=0;
        newPFW_Item[new_pfw_index].forwardingIf=0;
        newPFW_Item[new_pfw_index].incomingSrcIp=0;
        newPFW_Item[new_pfw_index].incomingDstPort=2;
        newPFW_Item[new_pfw_index].redirectIp=0;
        newPFW_Item[new_pfw_index].redirectPort=2;
     }
     else if (newPFW_Item[new_pfw_index].incomingIf==4)
     {
        newPFW_Item[new_pfw_index].protocol=0;
        newPFW_Item[new_pfw_index].forwardingIf=0;
        newPFW_Item[new_pfw_index].incomingSrcIp=0;
        newPFW_Item[new_pfw_index].incomingDstPort=2;
        newPFW_Item[new_pfw_index].redirectIp=0;
        newPFW_Item[new_pfw_index].redirectPort=2;     
     }

     console.log("incomingTunAliasName:" + newPFW_Item[new_pfw_index].incomingTunAliasName);

   }

   function ModifyIncomingIfChanged()
   {
     console.log("ModifyIncomingIfChanged:" + changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf);
     if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf==1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf==2)
     {
        changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=0;
        changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp=0;
     }
     else if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf==0)
     {
        if (saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1)
        {
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=1;
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp=0;
        }
        else if (saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        {
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=2;
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp=0;
        }
        else
        {
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=-1;
          changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp=0;
        }
     }
     else if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf==3)
     {
        changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=0;
     }
     else if (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf==4)
     {
        changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf=0;
     }     

     console.log("incomingTunAliasName:" + changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingTunAliasName);

   }


   function ModifyPFW(index)
   {
      formModalPFW = false;


      if (changed_nat_data.config.networking_port_forwarding.list[index].forwardingIf ==1)
      {
         if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
         {
            changed_nat_data.config.networking_port_forwarding.list[index].forwardingTun="openvpn0";
         }
         else if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
         {

            for (let i=0; i < saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length;i++)
            {
              if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name == changed_nat_data.config.networking_port_forwarding.list[index].forwardingTunAliasName)
              {
                changed_nat_data.config.networking_port_forwarding.list[index].forwardingTun="openvpn"+i;
              }
            }

         }
      }
      else if (changed_nat_data.config.networking_port_forwarding.list[index].forwardingIf ==2)
      {
        if (saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        { 
          if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0)
          {
            changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsec="IPsecVPN0";
          }
          else if(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1)
          {
            for (let i=0; i < saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
            {
              if (saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name == changed_nat_data.config.networking_port_forwarding.list[index].forwardingIPsecAliasName)
              {
                changed_nat_data.config.networking_port_forwarding.list[index].forwardingIPsec="IPsecVPN"+i;
              }
            }
          }
        }
      }




      if (changed_nat_data.config.networking_port_forwarding.list[index].incomingIf ==3)
      {
          if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
         {
            changed_nat_data.config.networking_port_forwarding.list[index].incomingTun="openvpn0";
         }
         else if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
         {
            for (let i=0; i < saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length;i++)
            {
              if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name == changed_nat_data.config.networking_port_forwarding.list[index].incomingTunAliasName)
              {
                changed_nat_data.config.networking_port_forwarding.list[index].incomingTun="openvpn"+i;
              }
            }

         }  
      }
      else if (changed_nat_data.config.networking_port_forwarding.list[index].incomingIf ==4)
      {
        if (saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        { 
          if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0)
          {
            changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsec="IPsecVPN0"; 
          }
          else if(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1)
          {
            for (let i=0; i < saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
            {
              if (saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name == changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsecAliasName)
              {
                changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsec="IPsecVPN"+i;
              }
            }
          }
        }
      }

   }

   function NoModifyPFW(index)
   {
      formModalPFW = false;


      changed_nat_data.config.networking_port_forwarding.list[index].enable= BackupPFWItem.enable;
      changed_nat_data.config.networking_port_forwarding.list[index].delete= BackupPFWItem.delete;
      changed_nat_data.config.networking_port_forwarding.list[index].incomingIf= BackupPFWItem.incomingIf;
      changed_nat_data.config.networking_port_forwarding.list[index].incomingTun= BackupPFWItem.incomingTun; 
      changed_nat_data.config.networking_port_forwarding.list[index].incomingTunAliasName= BackupPFWItem.incomingTunAliasName;
      changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsec= BackupPFWItem.incomingIPsec; 
      changed_nat_data.config.networking_port_forwarding.list[index].incomingIPsecAliasName= BackupPFWItem.incomingIPsecAliasName;                  
      changed_nat_data.config.networking_port_forwarding.list[index].incomingSrcIp= BackupPFWItem.incomingSrcIp;
      changed_nat_data.config.networking_port_forwarding.list[index].incomingSrcIpUserDefined= BackupPFWItem.incomingSrcIpUserDefined
      ;

      changed_nat_data.config.networking_port_forwarding.list[index].forwardingIf= BackupPFWItem.forwardingIf;
      changed_nat_data.config.networking_port_forwarding.list[index].forwardingTun= BackupPFWItem.forwardingTun;
      changed_nat_data.config.networking_port_forwarding.list[index].forwardingTunAliasName= BackupPFWItem.forwardingTunAliasName;

      changed_nat_data.config.networking_port_forwarding.list[index].forwardingIPsec= BackupPFWItem.forwardingIPsec;
      changed_nat_data.config.networking_port_forwarding.list[index].forwardingIPsecAliasName= BackupPFWItem.forwardingIPsecAliasName;

      changed_nat_data.config.networking_port_forwarding.list[index].redirectIp= BackupPFWItem.redirectIp;
      changed_nat_data.config.networking_port_forwarding.list[index].redirectIpUserDefined= BackupPFWItem.redirectIpUserDefined;

      changed_nat_data.config.networking_port_forwarding.list[index].protocol= BackupPFWItem.protocol;

      changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPort= BackupPFWItem.incomingDstPort;

      changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPortRange.start= BackupPFWItem.incomingDstPortRange.start;

      changed_nat_data.config.networking_port_forwarding.list[index].incomingDstPortRange.end= BackupPFWItem.incomingDstPortRange.end;

      changed_nat_data.config.networking_port_forwarding.list[index].redirectPort= BackupPFWItem.redirectPort;

      changed_nat_data.config.networking_port_forwarding.list[index].redirectPortRange.start= BackupPFWItem.redirectPortRange.start;

      changed_nat_data.config.networking_port_forwarding.list[index].redirectPortRange.end= BackupPFWItem.redirectPortRange.end;

   }

   function AddPFW(index)
   {
      newformModalPFW = false;

      if (newPFW_Item[index].forwardingIf ==1)
      {
         if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
         {
            newPFW_Item[index].forwardingTun="openvpn0";
         }
         else if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
         {
            for (let i=0; i < saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length;i++)
            {
              if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name == newPFW_Item[index].forwardingTunAliasName)
              {
                newPFW_Item[index].forwardingTun="openvpn"+i;
              }
            }
         }
      }
      else if (newPFW_Item[index].forwardingIf ==2)
      {
        if (saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        { 
          if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0)
          {
            newPFW_Item[index].incomingIPsec="IPsecVPN0";
            newPFW_Item[index].incomingIPsecAliasName="Responder"; 
            newPFW_Item[index].forwardingIPsecAliasName="Responder";
            newPFW_Item[index].forwardingIPsec="IPsecVPN0"; 
          }
          else if(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1)
          {
            for (let i=0; i < saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
            {
              if (saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name == newPFW_Item[index].forwardingIPsecAliasName)
              {
                newPFW_Item[index].forwardingIPsec="IPsecVPN"+i;
              }
            }
          }
        }
      }


      if (newPFW_Item[index].incomingIf ==3)
      {
          if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
         {
            newPFW_Item[index].incomingTun="openvpn0";
         }
         else if (saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
         {
            for (let i=0; i < saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length;i++)
            {
              if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name == newPFW_Item[index].incomingTunAliasName)
              {
                newPFW_Item[index].incomingTun="openvpn"+i;
              }
            }

         }  
      }
      else if (newPFW_Item[index].incomingIf ==4)
      {
        if (saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1)
        { 
          if (saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0)
          {
            newPFW_Item[index].incomingIPsec="IPsecVPN0";
            newPFW_Item[index].incomingIPsecAliasName="Responder"; 
            newPFW_Item[index].forwardingIPsecAliasName="Responder";
            newPFW_Item[index].forwardingIPsec="IPsecVPN0"; 
          }
          else if(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1)
          {
            for (let i=0; i < saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
            {
              if (saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name == newPFW_Item[index].incomingIPsecAliasName)
              {
                newPFW_Item[index].incomingIPsec="IPsecVPN"+i;
              }
            }
          }
        }
      }


      changed_nat_data.config.networking_port_forwarding.list=[...changed_nat_data.config.networking_port_forwarding.list,newPFW_Item[index]];
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

   async function getWANData () {
    const res = await fetch(window.location.origin+"/getWANData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        wan_data =await res.json();
        console.log(wan_data);
        wanConfig.set(wan_data);
        saved_changed_wan_data= JSON.parse(JSON.stringify(wan_data));

        ChangedWANConfig.set(saved_changed_wan_data);
    }
  }



  async function getOpenVPNData() {
    const res = await fetch(window.location.origin+"/getOPENvpndata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      openvpn_data =await res.json();
      console.log(openvpn_data);
      openvpnConfig.set(openvpn_data);

      saved_changed_openvpn_data= JSON.parse(JSON.stringify(openvpn_data));
      ChangedOpenVPNConfig.set(saved_changed_openvpn_data);


    }
  }

  async function getIPsecData() {
    const res = await fetch(window.location.origin+"/getIPsecdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      ipsec_data =await res.json();
      console.log(ipsec_data);
      ipsecConfig.set(ipsec_data);


      saved_changed_ipsec_data= JSON.parse(JSON.stringify(ipsec_data));
      ChangedIPsecConfig.set(saved_changed_ipsec_data);
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

        if (saved_changed_wan_data == "")
        {
          getWANData();
        }
        else
        {
          console.log("wan data already");
        }

        if (saved_changed_openvpn_data=="")
        {
          getOpenVPNData();
        }
        else
        {
          console.log("openvpn data already");
        }

        if (saved_changed_ipsec_data=="")
        {
          getIPsecData();
        }
        else
        {
          console.log("ipsec data already");
        }

    }
    else if (sessionid && nat_data !="")
    { 
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues); 
      
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


      if (saved_changed_wan_data == "")
      {
        getWANData();
      }
      else
      {
        console.log("wan data already");
      }


      if (saved_changed_openvpn_data=="")
      {
        getOpenVPNData();
      }
      else
      {
        console.log("openvpn data already");
      }


      if (saved_changed_ipsec_data=="")
      {
        getIPsecData();
      }
      else
      {
        console.log("ipsec data already");
      }

    }

  });

</script>


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
    <TableHeadCell>Incoming Interface</TableHeadCell>
    <TableHeadCell>Forwarding Interface</TableHeadCell>    
    <TableHeadCell>Protocol</TableHeadCell>
    <TableHeadCell>Incoming Destination Port</TableHeadCell>
    <TableHeadCell>Redirect Port</TableHeadCell>
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
{#if PFW.incomingIf==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">LAN</td>
{:else if PFW.incomingIf==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Ethernet WAN</td>
{:else if PFW.incomingIf==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Cellular WAN</td>
{:else if PFW.incomingIf==3}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">OpenVPN</td>
{:else if PFW.incomingIf==4}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">IPsec</td>

{/if}



{#if PFW.forwardingIf==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">LAN</td>
{:else if PFW.forwardingIf==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">OpenVPN</td>
{:else if PFW.forwardingIf==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">IPsec</td>

{/if}


{#if PFW.protocol==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">ALL</td>
{:else if PFW.protocol==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">TCP</td>
{:else if PFW.protocol==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">UDP</td>
{:else if PFW.protocol==3}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">TCP & UDP</td>

{/if}



{#if PFW.incomingDstPort ==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.incomingDstPortRange.start}</td>
{:else if PFW.incomingDstPort ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.incomingDstPortRange.start}-{PFW.incomingDstPort.end}</td>
{:else if PFW.incomingDstPort==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Any</td>
{/if}


{#if PFW.redirectPort ==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.redirectPortRange.start}</td>
{:else if PFW.redirectPort ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{PFW.redirectPortRange.start}-{PFW.redirectPortRange.end}</td>
{:else if PFW.redirectPort ==2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">Keep Origin Port</td>
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
{#if PFW.incomingIf==0}
      <TableBodyCell class="w-10">LAN {#if PFW.incomingSrcIp==1}({PFW.incomingSrcIpUserDefined}){/if}</TableBodyCell>
{:else if PFW.incomingIf==1}
      <TableBodyCell class="w-10">Ethernet WAN</TableBodyCell>
{:else if PFW.incomingIf==2}
      <TableBodyCell class="w-10">Cellular WAN</TableBodyCell>
{:else if PFW.incomingIf==3}

      <TableBodyCell class="w-10">OpenVPN {#if PFW.incomingSrcIp==1}({PFW.incomingSrcIpUserDefined}){/if}</TableBodyCell>

{:else if PFW.incomingIf==4}

      <TableBodyCell class="w-10">IPsec {#if PFW.incomingSrcIp==1}({PFW.incomingSrcIpUserDefined}){/if}</TableBodyCell>
   
{/if}



{#if PFW.forwardingIf==0}
      <TableBodyCell class="w-10">LAN {#if PFW.redirectIp==1}({PFW.redirectIpUserDefined}){/if}</TableBodyCell>
{:else if PFW.forwardingIf==1}
      <TableBodyCell class="w-10">OpenVPN {#if PFW.redirectIp==1}({PFW.redirectIpUserDefined}){/if}</TableBodyCell>
{:else if PFW.forwardingIf==2}
      <TableBodyCell class="w-10">IPsec {#if PFW.redirectIp==1}({PFW.redirectIpUserDefined}){/if}</TableBodyCell>      
{/if}




{#if PFW.protocol==0}
       <TableBodyCell class="w-10">ALL</TableBodyCell>
{:else if PFW.protocol==1}
       <TableBodyCell class="w-10">TCP</TableBodyCell>
{:else if PFW.protocol==2}
       <TableBodyCell class="w-10">UDP</TableBodyCell>
{:else if PFW.protocol==3}
       <TableBodyCell class="w-10">TCP & UDP</TableBodyCell>

{/if}


{#if PFW.incomingDstPort ==0}
      <TableBodyCell class="w-10">{PFW.incomingDstPortRange.start}</TableBodyCell>
{:else if PFW.incomingDstPort ==1}
      <TableBodyCell class="w-10">{PFW.incomingDstPortRange.start}-{PFW.incomingDstPort.end}</TableBodyCell>
{:else if PFW.incomingDstPort==2}
      <TableBodyCell class="w-10">Any</TableBodyCell>
{/if}


{#if PFW.redirectPort ==0}
      <TableBodyCell class="w-10">{PFW.redirectPortRange.start}</TableBodyCell>
{:else if PFW.redirectPort ==1}
      <TableBodyCell class="w-10">{PFW.redirectPortRange.start}-{PFW.redirectPortRange.end}</TableBodyCell>
{:else if PFW.redirectPort ==2}
      <TableBodyCell class="w-10">Keep Origin Port</TableBodyCell>
{/if}

    </TableBodyRow>

{/if}



{/each}
{/if}

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">     
{#if getDataReady == 1}
{#if changed_nat_data.config.networking_port_forwarding.list.length < 64}
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


<Modal bind:open={newformModalPFW} size="xl" class="w-full" autoclose>
  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newPFW_Item[new_pfw_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>


 <tr>
  <td ><p class="pl-5 pt-4 text-lg font-light text-right">Incoming Interface</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={0} on:change={NewIncomingIfChanged}>LAN</Radio>
{#if saved_changed_wan_data != "" && saved_changed_wan_data.config.networking_wan_port_switch==1}  
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={1} on:change={NewIncomingIfChanged}>Ethernet WAN</Radio>
{/if}  

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}  

{#if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={3} on:change={NewIncomingIfChanged}>OpenVPN: {newPFW_Item[new_pfw_index].incomingTunAliasName}</Radio>

{:else if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={3} on:change={NewIncomingIfChanged}>OpenVPN: </Radio>

{#if newPFW_Item[new_pfw_index].incomingIf ==3}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={newPFW_Item[new_pfw_index].incomingTunAliasName}>
<option value="" disabled>Choose ...</option>

{#each saved_changed_openvpn_data.config.vpn_openvpn_client_connection as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{/if}

{/if}

{/if}

{#if saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1}

{#if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0}
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={4} on:change={NewIncomingIfChanged}>IPsec: {newPFW_Item[new_pfw_index].incomingIPsecAliasName}</Radio>
{:else if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1}

<Radio bind:group={newPFW_Item[new_pfw_index].incomingIf} value={4} on:change={NewIncomingIfChanged}>IPsec: </Radio>

{#if newPFW_Item[new_pfw_index].incomingIf ==4}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={newPFW_Item[new_pfw_index].incomingIPsecAliasName}>
<option value="" disabled>Choose ...</option>

{#each saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{/if}


{/if}

{/if}

</div></td>
</tr>




 <tr>
  <td class="w-60"><p class="pl-5 pt-4 text-lg font-light text-right">Forwarding Interface</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
{#if newPFW_Item[new_pfw_index].incomingIf!=0}        
  <Radio bind:group={newPFW_Item[new_pfw_index].forwardingIf} value={0} >LAN</Radio>
{:else}
  <Radio value={0} disabled>LAN</Radio>
{/if}

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}  
{#if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
{#if newPFW_Item[new_pfw_index].incomingIf ==1 || newPFW_Item[new_pfw_index].incomingIf ==2 || newPFW_Item[new_pfw_index].incomingIf ==4}
  <Radio value={1} disabled>OpenVPN :{newPFW_Item[new_pfw_index].forwardingTunAliasName}</Radio>

{:else}
  <Radio bind:group={newPFW_Item[new_pfw_index].forwardingIf} value={1} >OpenVPN: {newPFW_Item[new_pfw_index].forwardingTunAliasName}</Radio>

{/if}
{:else if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
{#if newPFW_Item[new_pfw_index].incomingIf !=0}
  <Radio value={1} disabled>OpenVPN :</Radio>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{:else}
  <Radio bind:group={newPFW_Item[new_pfw_index].forwardingIf} value={1} >OpenVPN: </Radio>
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={newPFW_Item[new_pfw_index].forwardingTunAliasName}>
<option value="" disabled>Choose ...</option>
{#each saved_changed_openvpn_data.config.vpn_openvpn_client_connection as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{/if}

{/if}
{/if}


{#if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1}  
{#if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0}
{#if newPFW_Item[new_pfw_index].incomingIf ==1 || newPFW_Item[new_pfw_index].incomingIf ==2 || newPFW_Item[new_pfw_index].incomingIf ==3}
  <Radio value={1} disabled>IPsec :{newPFW_Item[new_pfw_index].forwardingIPsecAliasName}</Radio>

{:else}
  <Radio bind:group={newPFW_Item[new_pfw_index].forwardingIf} value={2} >IPsec :{newPFW_Item[new_pfw_index].forwardingIPsecAliasName}</Radio>

{/if}
{:else if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1}

{#if newPFW_Item[new_pfw_index].incomingIf !=0}
  <Radio value={2} disabled>IPsec :</Radio>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{:else}
  <Radio bind:group={newPFW_Item[new_pfw_index].forwardingIf} value={2} >IPsec: </Radio>
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={newPFW_Item[new_pfw_index].forwardingIPsecAliasName}>
<option value="" disabled>Choose ...</option>
{#each saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{/if}


{/if}
{/if}

</div></td>
</tr>





<tr>
      <td class="w-10"><p class="pl-20 pt-4 text-lg font-light text-right">Incoming Source IP</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-4">



{#if newPFW_Item[new_pfw_index].forwardingIf !=-1 && (newPFW_Item[new_pfw_index].incomingIf ==0 || newPFW_Item[new_pfw_index].incomingIf ==3 || newPFW_Item[new_pfw_index].incomingIf ==4)}     
      <Radio bind:group={newPFW_Item[new_pfw_index].incomingSrcIp} value={0}>Any</Radio>

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 && newPFW_Item[new_pfw_index].incomingIf ==3}
      <Radio bind:group={newPFW_Item[new_pfw_index].incomingSrcIp} value={1}>User Define :</Radio>
{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 && newPFW_Item[new_pfw_index].incomingIf ==4}
      <Radio bind:group={newPFW_Item[new_pfw_index].incomingSrcIp} value={1}>User Define :</Radio>
{:else if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 && newPFW_Item[new_pfw_index].incomingIf ==3}
      <Radio value={1} disabled>User Define :</Radio>
{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 && newPFW_Item[new_pfw_index].incomingIf ==4}
      <Radio value={1} disabled>User Define :</Radio>      
{:else if newPFW_Item[new_pfw_index].incomingIf ==0}
      <Radio bind:group={newPFW_Item[new_pfw_index].incomingSrcIp} value={1}>User Define :</Radio>
{/if}



{#if newPFW_Item[new_pfw_index].incomingSrcIp==1}

      <input type="text" bind:value={newPFW_Item[new_pfw_index].incomingSrcIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}
{:else}

{#if newPFW_Item[new_pfw_index].forwardingIf !=-1 && (newPFW_Item[new_pfw_index].incomingIf ==2 || newPFW_Item[new_pfw_index].incomingIf ==1)}
     <Radio bind:group={newPFW_Item[new_pfw_index].incomingSrcIp} value={0}>Any</Radio>

{:else}
      <Radio value={0} disabled>Any</Radio>
{/if}
      <Radio value={1} disabled>User Define :</Radio>
      <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}


      </div>
      </td>
      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>


  </tr>

 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value={0} on:change={NewProtocolChanged}>ALL</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value={1} on:change={NewProtocolChanged}>TCP</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value={2} on:change={NewProtocolChanged}>UDP</Radio>
  <Radio bind:group={newPFW_Item[new_pfw_index].protocol} value={3} on:change={NewProtocolChanged}>TCP & UDP</Radio>
</div></td>
</tr>



 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Incoming Destination Port</p>

  </td>

    <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].incomingDstPort} value={2} on:change={NewInDestPortChanged}>Any</Radio>

{#if newPFW_Item[new_pfw_index].protocol !=0}

  <Radio bind:group={newPFW_Item[new_pfw_index].incomingDstPort} value={0} on:change={NewInDestPortChanged}>Single Port</Radio>
{#if newPFW_Item[new_pfw_index].incomingDstPort==1}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
  <input type="number" bind:value={newPFW_Item[new_pfw_index].incomingDstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}


  <Radio bind:group={newPFW_Item[new_pfw_index].incomingDstPort} value={1} on:change={NewInDestPortChanged}>Port Range</Radio>
{#if newPFW_Item[new_pfw_index].incomingDstPort==0}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>


{:else}
  <input type="number" bind:value={newPFW_Item[new_pfw_index].incomingDstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newPFW_Item[new_pfw_index].incomingDstPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
{:else}
 <Radio value={0} disabled>Single Port</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
  <Radio value={1} disabled>Port Range</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}


</div></td>
</tr>








<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Redirect IP</p></td><td class="pl-5 pt-5 w-10" colspan="2">
<div class="flex gap-4">

{#if newPFW_Item[new_pfw_index].forwardingIf == -1}
    <Radio value={0} disabled>Any</Radio>
{:else}
    <Radio bind:group={newPFW_Item[new_pfw_index].redirectIp} value={0} >Any</Radio>
{/if}

{#if newPFW_Item[new_pfw_index].forwardingIf == 0 && (newPFW_Item[new_pfw_index].incomingIf ==1 || newPFW_Item[new_pfw_index].incomingIf ==2 || newPFW_Item[new_pfw_index].incomingIf ==3 || newPFW_Item[new_pfw_index].incomingIf ==4)}
      <Radio bind:group={newPFW_Item[new_pfw_index].redirectIp} value={1} >User Define :</Radio>
      <input type="text" bind:value={newPFW_Item[new_pfw_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if newPFW_Item[new_pfw_index].forwardingIf == -1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else if newPFW_Item[new_pfw_index].forwardingIf == 1}


{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 }
<Radio bind:group={newPFW_Item[new_pfw_index].redirectIp} value={1} >User Define :</Radio>
<input type="text" bind:value={newPFW_Item[new_pfw_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}

{:else if newPFW_Item[new_pfw_index].forwardingIf == 2}
{#if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0}
<Radio bind:group={newPFW_Item[new_pfw_index].redirectIp} value={1} >User Define :</Radio>
<input type="text" bind:value={newPFW_Item[new_pfw_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole ==1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}



{/if}

</div>
      </td>


      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>

  </tr>



 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Redirect Port</p>

  </td>

    <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">
  <Radio bind:group={newPFW_Item[new_pfw_index].redirectPort} value={2} >Keep Origin Port</Radio>

{#if newPFW_Item[new_pfw_index].protocol !=0}
  <Radio bind:group={newPFW_Item[new_pfw_index].redirectPort} value={0} >Single Port</Radio>
{#if newPFW_Item[new_pfw_index].redirectPort==1}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
  <input type="number" bind:value={newPFW_Item[new_pfw_index].redirectPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}


  <Radio bind:group={newPFW_Item[new_pfw_index].redirectPort} value={1} >Port Range</Radio>
{#if newPFW_Item[new_pfw_index].redirectPort==0}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>


{:else}
  <input type="number" bind:value={newPFW_Item[new_pfw_index].redirectPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={newPFW_Item[new_pfw_index].redirectPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
{:else}
  <Radio value={0} disabled>Single Port</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
  <Radio value={1} disabled>Port Range</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
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

    <td class="pl-10"><Button color="dark" pill={true} on:click={AddPFW(new_pfw_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>

<Modal bind:open={formModalPFW} size="xl" class="w-full" permanent={true}>
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
  <td ><p class="pl-5 pt-4 text-lg font-light text-right">Incoming Interface</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={0} on:change={NewIncomingIfChanged}>LAN</Radio>
{#if saved_changed_wan_data != "" && saved_changed_wan_data.config.networking_wan_port_switch==1}  
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={1} on:change={NewIncomingIfChanged}>Ethernet WAN</Radio>
{/if}  

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}  

{#if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={3} on:change={NewIncomingIfChanged}>OpenVPN: {changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingTunAliasName}</Radio>

{:else if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={3} on:change={NewIncomingIfChanged}>OpenVPN: </Radio>

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingTunAliasName}>
<option value="" disabled>Choose ...</option>

{#each saved_changed_openvpn_data.config.vpn_openvpn_client_connection as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{/if}

{/if}

{/if}

{#if saved_changed_ipsec_data !="" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn==1}

{#if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==0}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={4} on:change={NewIncomingIfChanged}>IPsec: {changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIPsecAliasName}</Radio>
{:else if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole==1}

<Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf} value={4} on:change={NewIncomingIfChanged}>IPsec: </Radio>

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIPsecAliasName}>
<option value="" disabled>Choose ...</option>

{#each saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{/if}


{/if}

{/if}

</div></td>
</tr>




 <tr>
  <td class="w-60"><p class="pl-5 pt-4 text-lg font-light text-right">Forwarding Interface</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf!=0}        
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf} value={0} >LAN</Radio>
{:else}
  <Radio value={0} disabled>LAN</Radio>
{/if}

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}  
{#if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4}
  <Radio value={1} disabled>OpenVPN :{changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingTunAliasName}</Radio>

{:else}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf} value={1} >OpenVPN: {changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingTunAliasName}</Radio>

{/if}
{:else if saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf !=0}
  <Radio value={1} disabled>OpenVPN :</Radio>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{:else}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf} value={1} >OpenVPN: </Radio>
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingTunAliasName}>
<option value="" disabled>Choose ...</option>
{#each saved_changed_openvpn_data.config.vpn_openvpn_client_connection as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{/if}

{/if}
{/if}


{#if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1}  
{#if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0}
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3}
  <Radio value={1} disabled>IPsec :{changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIPsecAliasName}</Radio>

{:else}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf} value={2} >IPsec :{changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIPsecAliasName}</Radio>

{/if}
{:else if saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1}

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf !=0}
  <Radio value={2} disabled>IPsec :</Radio>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option value="" disabled>Choose ...</option>
</select>
{:else}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf} value={2} >IPsec: </Radio>
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIPsecAliasName}>
<option value="" disabled>Choose ...</option>
{#each saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as client_conn,index}
<option value={client_conn.name}>{client_conn.name}</option>
{/each}
</select>
{/if}


{/if}
{/if}

</div></td>
</tr>





<tr>
      <td class="w-10"><p class="pl-20 pt-4 text-lg font-light text-right">Incoming Source IP</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-4">



{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf !=-1 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==0 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4)}     
      <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp} value={0}>Any</Radio>

{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3}
      <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp} value={1}>User Define :</Radio>
{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4}
      <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp} value={1}>User Define :</Radio>
{:else if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3}
      <Radio value={1} disabled>User Define :</Radio>
{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4}
      <Radio value={1} disabled>User Define :</Radio>      
{:else if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==0}
      <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp} value={1}>User Define :</Radio>
{/if}



{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp==1}

      <input type="text" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}
{:else}

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf !=-1 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==1)}
     <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp} value={0}>Any</Radio>

{:else}
      <Radio value={0} disabled>Any</Radio>
{/if}
      <Radio value={1} disabled>User Define :</Radio>
      <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}


      </div>
      </td>
      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>


  </tr>

 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Protocol</p>

  </td>

    <td class="pl-5 pt-4" colspan="3"><div class="flex gap-4">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value={0} on:change={NewProtocolChanged}>ALL</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value={1} on:change={NewProtocolChanged}>TCP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value={2} on:change={NewProtocolChanged}>UDP</Radio>
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol} value={3} on:change={NewProtocolChanged}>TCP & UDP</Radio>
</div></td>
</tr>



 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Incoming Destination Port</p>

  </td>

    <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort} value={2} on:change={NewInDestPortChanged}>Any</Radio>

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol !=0}

  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort} value={0} on:change={NewInDestPortChanged}>Single Port</Radio>
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort==1}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
  <input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}


  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort} value={1} on:change={NewInDestPortChanged}>Port Range</Radio>
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort==0}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>


{:else}
  <input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
{:else}
 <Radio value={0} disabled>Single Port</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
  <Radio value={1} disabled>Port Range</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}


</div></td>
</tr>








<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Redirect IP</p></td><td class="pl-5 pt-5 w-10" colspan="2">
<div class="flex gap-4">

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == -1}
    <Radio value={0} disabled>Any</Radio>
{:else}
    <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp} value={0} >Any</Radio>
{/if}

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 0 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==3 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf ==4)}
      <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp} value={1} >User Define :</Radio>
      <input type="text" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == -1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 1}


{#if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 }
<Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp} value={1} >User Define :</Radio>
<input type="text" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn==1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}

{:else if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 2}
{#if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0}
<Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp} value={1} >User Define :</Radio>
<input type="text" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 &&
saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole ==1}

<Radio value={1} disabled>User Define :</Radio>
<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}



{/if}

</div>
      </td>


      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>

      <td class="pl-5 pt-4">

      </td>


      <td class="pl-5 pt-4">

      </td>

  </tr>



 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Redirect Port</p>

  </td>

    <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort} value={2} >Keep Origin Port</Radio>

{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol !=0}
  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort} value={0} >Single Port</Radio>
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort==1}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
  <input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}


  <Radio bind:group={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort} value={1} >Port Range</Radio>
{#if changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort==0}
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>


{:else}
  <input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.start} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2">-</p><input type="number" bind:value={changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.end} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
{:else}
  <Radio value={0} disabled>Single Port</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
  <Radio value={1} disabled>Port Range</Radio>
  <input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled><p class="pt-2">-</p><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
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


    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyPFW(port_forwarding_current_index)}>Modify</Button></td>


    </tr>

  </form>
</Modal>

  </TableBody>
</Table>


  </TabItem>


  {#if 0}

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

{/if}

</Tabs>




