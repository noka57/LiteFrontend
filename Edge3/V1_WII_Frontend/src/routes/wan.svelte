<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, Toggle,Select, Checkbox, Input, Tooltip, Radio,FloatingLabelInput } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { wanConfig, ewanWebInputFlag,
    cwanWebInputFlag,
    LastestReadableWANConfig,
    WAN_CWAN1_BASIC_ConfigChangedLog,
    WAN_CWAN1_Advanced_ConfigChangedLog,
    WAN_CWAN1_SimPolicy_ConfigChangedLog,
    WAN_CWAN1_GLink_ConfigChangedLog,
    WAN_EWAN1_Basic_ConfigChangedLog,
    WAN_EWAN1_EWLAP_ConfigChangedLog,
    WAN_RedundancyPolicy_ConfigChangedLog,
    WAN_FareSavingPolicy_ConfigChangedLog,
    WAN_PORT_SWITCH_ConfigChangedLog,
    ChangedWANConfig
  } from "./configG.js";


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

   let openDetailStatus = false;
   let cwanBasicPasswordShow=false;
   let ewanPPPoEPasswordShow=false;


  function handleDetailClick() {
    openDetailStatus=!openDetailStatus;
  };

  let hidden=0;

  let testLANWAN=0;

  let wan_data="";
  let getdataAlready=0;

  let changed_wan_data = {};
  let saved_changed_wan_data = {};
  let lastest_readable_data = {};
  let cwan1_basic_changedValues = [];
  let cwan1_advanced_changedValues = [];
  let cwan1_simpolicy_changedValues = [];
  let cwan1_glink_changedValues = [];
  let ewan1_basic_changedValues = [];
  let ewan1_ewlap_changedValues = [];
  let redundancy_policy_changedValues = [];
  let faresaving_policy_changedValues = [];
  let port_switch_changedValues=[];



  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
    sessionid = val;
  });


  wanConfig.subscribe(val => {
        wan_data = val;
  });


  ChangedWANConfig.subscribe(val => {
      saved_changed_wan_data = val;
  }); 

  LastestReadableWANConfig.subscribe(val => {
      lastest_readable_data = val;
  }); 

  WAN_PORT_SWITCH_ConfigChangedLog.subscribe(val => {
      port_switch_changedValues = val;
  });

  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe(val => {
      cwan1_basic_changedValues = val;
  });

  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe(val => {
      cwan1_advanced_changedValues = val;
  });

  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe(val => {
      cwan1_simpolicy_changedValues = val;
  });

  WAN_CWAN1_GLink_ConfigChangedLog.subscribe(val => {
      cwan1_glink_changedValues = val;
  });

  WAN_EWAN1_Basic_ConfigChangedLog.subscribe(val => {
      ewan1_basic_changedValues = val;
  });

  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe(val => {
      ewan1_ewlap_changedValues = val;
  });

  WAN_RedundancyPolicy_ConfigChangedLog.subscribe(val => {
      redundancy_policy_changedValues = val;
  });

  WAN_FareSavingPolicy_ConfigChangedLog.subscribe(val => {
      faresaving_policy_changedValues = val;
  });

  let ATCommand="";
  let ATResult="";
  let ATCommandContent;
  let StartATCommand=0;
  let FinishATCommand=0;


  async function ATdebug() {
    const res = await fetch(window.location.origin+"/ATdebug", {
      method: 'POST',
      body: ATCommandContent
    })

    if (res.status == 200)
    {
      ATResult =await res.text();
      console.log(ATResult);
      StartATCommand=0;
      FinishATCommand=1;

    }
    else
    {
      console.log("error at debug");
    }
  }


  function executeATdebug()
  {
    console.log(ATCommand);

    if (ATCommand != "")
    {
      StartATCommand=1;
      FinishATCommand=0;
      const bytesArray = Array.from(ATCommand).map(char => char.charCodeAt(0));
      let ATCommandBinary = new Uint8Array(bytesArray);
      ATCommandContent=new Uint8Array(ATCommandBinary.length+sessionBinary.length);
      ATCommandContent.set(sessionBinary,0);
      ATCommandContent.set(ATCommandBinary, sessionBinary.length);

      ATdebug();
    }


  }



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
            if (key == 'dns')
            {
              console.log("dns");
              console.log(obj1[key][i]);
              console.log(obj2[key][i]);
              console.log(type)
              if (obj1[key][i] != obj2[key][i])
              {
                let changedstr="DNS List No."+(i+1)+": changed to " + obj1[key][i];
                if (type == 4)
                {
                  ewan1_basic_changedValues=[...ewan1_basic_changedValues, changedstr]; 
                }
                else if (type ==0)
                {
                 cwan1_basic_changedValues=[...cwan1_basic_changedValues, changedstr];
                }
              }

            }
            else
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }
          }

          if (obj1[key].length > obj2[key].length) 
          {
            let addedCount=obj1[key].length-obj2[key].length;
            let changedstr="Add "+addedCount+" item(s) to "+ key;
            if (type == 7)
            {
              faresaving_policy_changedValues=[...faresaving_policy_changedValues, changedstr];
            }
            else if (type == 6)
            {
              redundancy_policy_changedValues=[...redundancy_policy_changedValues, changedstr];
            }
            else if (type == 5)
            {
              ewan1_ewlap_changedValues=[...ewan1_ewlap_changedValues, changedstr];
            }
            else if (type == 4)
            {
              ewan1_basic_changedValues=[...ewan1_basic_changedValues, changedstr]; 
            }
            else if (type == 3)
            {
              cwan1_glink_changedValues=[...cwan1_glink_changedValues, changedstr];
            }
            else if (type == 2)
            {
              cwan1_simpolicy_changedValues=[...cwan1_simpolicy_changedValues, changedstr];
            }
            else if (type == 1)
            {
              cwan1_advanced_changedValues=[...cwan1_advanced_changedValues, changedstr];              
            }
            else if (type == 0)
            {
              cwan1_basic_changedValues=[...cwan1_basic_changedValues, changedstr];
            }  
          }
          else if (obj1[key].length < obj2[key].length)
          {
            let deletedCount=obj2[key].length-obj1[key].length;
            let changedstr="Delete "+deletedCount+" item(s) from "+ key;
            if (type == 7)
            {
              faresaving_policy_changedValues=[...faresaving_policy_changedValues, changedstr];
            }
            else if (type == 6)
            {
              redundancy_policy_changedValues=[...redundancy_policy_changedValues, changedstr];
            }
            else if (type == 5)
            {
              ewan1_ewlap_changedValues=[...ewan1_ewlap_changedValues, changedstr];
            }
            else if (type == 4)
            {
              ewan1_basic_changedValues=[...ewan1_basic_changedValues, changedstr]; 
            }
            else if (type == 3)
            {
              cwan1_glink_changedValues=[...cwan1_glink_changedValues, changedstr];
            }
            else if (type == 2)
            {
              cwan1_simpolicy_changedValues=[...cwan1_simpolicy_changedValues, changedstr];
            }
            else if (type == 1)
            {
              cwan1_advanced_changedValues=[...cwan1_advanced_changedValues, changedstr];              
            }
            else if (type == 0)
            {
              cwan1_basic_changedValues=[...cwan1_basic_changedValues, changedstr];
            }  
          }
        }
        else
        {
          console.log(key);
          console.log(type);
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
          
        if (type == 7)
        {
          faresaving_policy_changedValues=[...faresaving_policy_changedValues, changedstr];
        }
        else if (type == 6)
        {
          redundancy_policy_changedValues=[...redundancy_policy_changedValues, changedstr];
        }
        else if (type == 5)
        {
          ewan1_ewlap_changedValues=[...ewan1_ewlap_changedValues, changedstr];
        }
        else if (type == 4)
        {
          ewan1_basic_changedValues=[...ewan1_basic_changedValues, changedstr]; 
        }
        else if (type == 3)
        {
          cwan1_glink_changedValues=[...cwan1_glink_changedValues, changedstr];
        }
        else if (type == 2)
        {
          cwan1_simpolicy_changedValues=[...cwan1_simpolicy_changedValues, changedstr];
        }
        else if (type == 1)
        {
          cwan1_advanced_changedValues=[...cwan1_advanced_changedValues, changedstr];              
        }
        else if (type == 0)
        {
          cwan1_basic_changedValues=[...cwan1_basic_changedValues, changedstr];
        }  

      }
    }
  }

  function savePortSwitch()
  {
    console.log("save Port Switch\r\n");

    if (port_switch_changedValues.length !=0)
    {
      port_switch_changedValues=[];
    }

    if (changed_wan_data.config.networking_wan_port_switch != wan_data.config.networking_wan_port_switch)
    {
      if (changed_wan_data.config.networking_wan_port_switch ==1)
      {
        port_switch_changedValues=[...port_switch_changedValues, "lan/wan port is changed to WAN"];
      }
      else if (changed_wan_data.config.networking_wan_port_switch ==0)
      {
        port_switch_changedValues=[...port_switch_changedValues, "lan/wan port is changed to LAN"];
      }


    }

    WAN_PORT_SWITCH_ConfigChangedLog.set(port_switch_changedValues);

    saved_changed_wan_data.config.networking_wan_port_switch=changed_wan_data.config.networking_wan_port_switch;
    ChangedWANConfig.set(saved_changed_wan_data);
    
    console.log(port_switch_changedValues);
  }


  function saveCWAN1BasicSetting()
  {
      console.log("save CWAN1 Basic Setting\r\n");
      if (cwan1_basic_changedValues.length != 0)
      {
        cwan1_basic_changedValues=[];
      }
      compareObjects(changed_wan_data.config.networking_wan_cwan[0].basicSetting, wan_data.config.networking_wan_cwan[0].basicSetting,0,0,0);


      if (wan_data.config.networking_wan_cwan[0].basicSetting.webAccess != changed_wan_data.config.networking_wan_cwan[0].basicSetting.webAccess)
      {
        console.log("web access changed!!");
        cwanWebInputFlag.set("1");
      }


      WAN_CWAN1_BASIC_ConfigChangedLog.set(cwan1_basic_changedValues);

      saved_changed_wan_data.config.networking_wan_cwan[0].basicSetting=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_cwan[0].basicSetting));
      ChangedWANConfig.set(saved_changed_wan_data);
    
      console.log(cwan1_basic_changedValues);
  }


  function saveCWAN1AdvancedSetting()
  {
      console.log("save CWAN1 Advanced Setting\r\n");
      if (cwan1_advanced_changedValues.length != 0)
      {
        cwan1_advanced_changedValues=[];
      }
      compareObjects(changed_wan_data.config.networking_wan_cwan[0].advancedSetting, wan_data.config.networking_wan_cwan[0].advancedSetting,1,0,0);


      WAN_CWAN1_Advanced_ConfigChangedLog.set(cwan1_advanced_changedValues);

      saved_changed_wan_data.config.networking_wan_cwan[0].advancedSetting=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_cwan[0].advancedSetting));
      ChangedWANConfig.set(saved_changed_wan_data);

      console.log(cwan1_advanced_changedValues);
  }

  function saveSIMPolicy()
  {
      console.log("save CWAN1 simpolicy Setting\r\n");
      if (cwan1_simpolicy_changedValues.length != 0)
      {
        cwan1_simpolicy_changedValues=[];
      }
      compareObjects(changed_wan_data.config.networking_wan_cwan[0].simPolicy, wan_data.config.networking_wan_cwan[0].simPolicy,2,0,0);


      WAN_CWAN1_SimPolicy_ConfigChangedLog.set(cwan1_simpolicy_changedValues);

      saved_changed_wan_data.config.networking_wan_cwan[0].simPolicy=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_cwan[0].simPolicy));
      ChangedWANConfig.set(saved_changed_wan_data);

      console.log(cwan1_simpolicy_changedValues);  
  }


  function saveGlink()
  {
      console.log("save CWAN1 glink Setting\r\n");
      if (cwan1_glink_changedValues.length != 0)
      {
        cwan1_glink_changedValues=[];
      }
      compareObjects(changed_wan_data.config.networking_wan_cwan[0].gLink, wan_data.config.networking_wan_cwan[0].gLink,3,0,0);


      WAN_CWAN1_GLink_ConfigChangedLog.set(cwan1_glink_changedValues);
      saved_changed_wan_data.config.networking_wan_cwan[0].gLink=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_cwan[0].gLink));

      ChangedWANConfig.set(saved_changed_wan_data);

      console.log(cwan1_glink_changedValues);      

  }

  function saveEWAN1BasicSetting()
  {
    console.log("save EWan1 Basic Setting\r\n");
    if (ewan1_basic_changedValues.length != 0)
    {
      ewan1_basic_changedValues=[];
    }
    compareObjects(changed_wan_data.config.networking_wan_ewan[0].basicSetting, wan_data.config.networking_wan_ewan[0].basicSetting,4,0,0);

   // console.log("compare remote access");
  //  console.log(changed_wan_data.config.networking_wan_ewan[0].basicSetting.remoteAccess);
  //  console.log(wan_data.config.networking_wan_ewan[0].basicSetting.remoteAccess);

    if (wan_data.config.networking_wan_ewan[0].basicSetting.webAccess != changed_wan_data.config.networking_wan_ewan[0].basicSetting.webAccess)
    {
      ewanWebInputFlag.set("1");
    }


    WAN_EWAN1_Basic_ConfigChangedLog.set(ewan1_basic_changedValues);
    saved_changed_wan_data.config.networking_wan_ewan[0].basicSetting=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_ewan[0].basicSetting));
    ChangedWANConfig.set(saved_changed_wan_data);

    console.log(ewan1_basic_changedValues);      
  }


  function saveEWANLAP()
  {
    console.log("save EWan1 LAP Setting\r\n");
    if (ewan1_ewlap_changedValues.length != 0)
    {
      ewan1_ewlap_changedValues=[];
    }
    compareObjects(changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan, wan_data.config.networking_wan_ewan[0].ewlapEthernetWan,5,0,0);


    WAN_EWAN1_EWLAP_ConfigChangedLog.set(ewan1_ewlap_changedValues);
    saved_changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan));

    ChangedWANConfig.set(saved_changed_wan_data);

    console.log(ewan1_ewlap_changedValues);     
  }

  function saveWanRedundancy()
  {
    console.log("save Wan Redundancy Setting\r\n");
    if (redundancy_policy_changedValues.length != 0)
    {
      redundancy_policy_changedValues=[];
    }

    compareObjects(changed_wan_data.config.networking_wan_wanRedundancyPolicy, wan_data.config.networking_wan_wanRedundancyPolicy,6,0,0);


    WAN_RedundancyPolicy_ConfigChangedLog.set(redundancy_policy_changedValues);

    saved_changed_wan_data.config.networking_wan_wanRedundancyPolicy=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_wanRedundancyPolicy));
    ChangedWANConfig.set(saved_changed_wan_data);

    console.log(redundancy_policy_changedValues);     
  }

  function saveFareSaving()
  {
    console.log("save Fare Saving Setting\r\n");
    if (faresaving_policy_changedValues.length != 0)
    {
      faresaving_policy_changedValues=[];
    }

    compareObjects(changed_wan_data.config.networking_wan_fareSavingPolicy, wan_data.config.networking_wan_fareSavingPolicy,7,0,0);


    WAN_FareSavingPolicy_ConfigChangedLog.set(faresaving_policy_changedValues);

    saved_changed_wan_data.config.networking_wan_fareSavingPolicy=JSON.parse(JSON.stringify(changed_wan_data.config.networking_wan_fareSavingPolicy));
    ChangedWANConfig.set(changed_wan_data);

    console.log(faresaving_policy_changedValues);      
  }


  function EWLAP_Check()
  {
    if (changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn)
    {
      changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn=1;
    }
    else
    {
      changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn=0;
    }

  }


  function AutoAPN_Check(){

    if (changed_wan_data.config.networking_wan_cwan[0].basicSetting.autoApnEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].basicSetting.autoApnEn=1;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].basicSetting.autoApnEn=0;
    }

  };

  function BandLock_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockEn=1;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockEn=0;
    }

  }

  function BandScan_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanEn=1;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanEn=0;
    }

  }

  function EnableRssiThreshold_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.rssiMonitor.enable)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.rssiMonitor.enable=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.rssiMonitor.enable=1;
    }


  }

  function EnableLossLTESignal_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.networkService.enable)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.networkService.enable=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.networkService.enable=1;
    }

  }

  function EnableRoamingTimeout_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.roamingService.enable)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.roamingService.enable=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.roamingService.enable=1;
    }
  }

  function EnableSIMFailover_Check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.simFailover)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.simFailover=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.simFailover=1;
    }
  }


  function GLink_enable()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.enable)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.enable=1;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.enable=0;
    }

  }

  function PingPacket_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.pingEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.pingEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.pingEn=1;
    }


  }

  function TestInterface_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfEn=1;
    }

  }

  function LAN1_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan1En)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan1En=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan1En=1;
    }

  }

  function LAN2_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan2En)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan2En=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan2En=1;
    }

  }

  function LAN3_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan3En)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan3En=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan3En=1;
    }

  }

  function LAN4_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan4En)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan4En=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.lan4En=1;
    }

  }


  function EWAN_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.wanEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.wanEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.wanEn=1;
    }

  }

  function CWan1_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.cWanEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.cWanEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.testIfParam.cWanEn=1;
    }
  }


  function DNSLookup_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsLockupEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsLockupEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsLockupEn=1;
    }

  }

  function DNSPacketSniff_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsPktSniffEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsPktSniffEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.dnsPktSniffEn=1;
    }

  }

  function HTTPS_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.httpEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.httpEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.chkMethod.httpEn=1;
    }

  }

  function PacketCountInc_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.pktCountIncreaseEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.pktCountIncreaseEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.checkParam.checkRule.pktCountIncreaseEn=1;
    }

  }


  function RelinkAgain_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.relinkAgainEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.relinkAgainEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.relinkAgainEn=1;
    }
  }


  function SimSwitchOver_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.simSwitchOverEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.simSwitchOverEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.simSwitchOverEn=1;
    }
  }


  function ModemSWReset_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemSwResetEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemSwResetEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemSwResetEn=1;
    }

  }

  function ModemHWReset_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemHwResetEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemHwResetEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.modemHwResetEn=1;
    }

  }


  function SystemReboot_check()
  {
    if (changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.sysRebootEn)
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.sysRebootEn=0;
    }
    else
    {
      changed_wan_data.config.networking_wan_cwan[0].gLink.recoverySequence.sysRebootEn=1;
    }


  }


  async function downloadRSSIlog() {
    try {
      const response = await fetch(window.location.origin+"/Download4GRSSIlog", {
        method: 'POST',
         body: JSON.stringify({
        sessionid
      })
      });
      
    if (response.status == 200)
    {
      const blob = await response.blob();
      const export_filename = 'RSSI.log';

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = export_filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error exporting file:', error);
    }
  }



  async function getWANData () {
    const res = await fetch(window.location.origin+"/getWANData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      if (getdataAlready == 0)
      {
        wan_data =await res.json();
        console.log("init wan_data");
        console.log(wan_data);
        wanConfig.set(wan_data);

        changed_wan_data = JSON.parse(JSON.stringify(wan_data));
        saved_changed_wan_data = JSON.parse(JSON.stringify(wan_data))
        lastest_readable_data = JSON.parse(JSON.stringify(wan_data))
        ChangedWANConfig.set(saved_changed_wan_data);
        LastestReadableWANConfig.set(lastest_readable_data);
      }
      else
      {
        console.log("update readable data");
        let readable_data=await res.json();
        console.log(readable_data);
        lastest_readable_data.config.networking_wan_generalStatus=readable_data.config.networking_wan_generalStatus;

        for (let i=0; i < lastest_readable_data.config.networking_wan_cwan.length;i++)
        {
            lastest_readable_data.config.networking_wan_cwan[i].generalStatus=readable_data.config.networking_wan_cwan[i].generalStatus;
        }

        for (let i=0; i < lastest_readable_data.config.networking_wan_ewan.length; i++)
        {
            lastest_readable_data.config.networking_wan_ewan[i].generalStatus=readable_data.config.networking_wan_ewan[i].generalStatus;
        }

        LastestReadableWANConfig.set(lastest_readable_data);
      }

      getdataAlready=1;

    }
  }


  onMount(() => {

      console.log("wan sessionid: ");
      console.log(sessionid);
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

    if (sessionid && wan_data=="")
    {
        getWANData();
    }
    else if (sessionid && wan_data!="")
    {
        getdataAlready=1;
        getWANData();
        changed_wan_data=JSON.parse(JSON.stringify(saved_changed_wan_data));
        if (cwan1_basic_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_cwan[0].basicSetting = JSON.parse(JSON.stringify(wan_data.config.networking_wan_cwan[0].basicSetting)); 
        }

        if (cwan1_advanced_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_cwan[0].advancedSetting = JSON.parse(JSON.stringify(wan_data.config.networking_wan_cwan[0].advancedSetting)); 
        }

        if (cwan1_simpolicy_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_cwan[0].simPolicy = JSON.parse(JSON.stringify(wan_data.config.networking_wan_cwan[0].simPolicy)); 
        }

        if (cwan1_glink_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_cwan[0].gLink = JSON.parse(JSON.stringify(wan_data.config.networking_wan_cwan[0].gLink));         

        }


        if (ewan1_basic_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_ewan[0].basicSetting = JSON.parse(JSON.stringify(wan_data.config.networking_wan_ewan[0].basicSetting));  

        }

        if (ewan1_ewlap_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan = JSON.parse(JSON.stringify(wan_data.config.networking_wan_ewan[0].ewlapEthernetWan));  
        }

        if (redundancy_policy_changedValues.length == 0)
        {
          changed_wan_data.config.networking_wan_wanRedundancyPolicy = JSON.parse(JSON.stringify(wan_data.config.networking_wan_wanRedundancyPolicy));  

        }


        if (port_switch_changedValues.length == 0)
        {

          changed_wan_data.config.networking_wan_port_switch=wan_data.config.networking_wan_port_switch;
        }

    }

  });


</script>

<Tabs style="underline">





<TabItem open title="Port Switch">

{#if getdataAlready == 1}
<table>


 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">LAN/WAN Port</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">

      <Radio bind:group={changed_wan_data.config.networking_wan_port_switch} value={0} >LAN</Radio>
      <Radio bind:group={changed_wan_data.config.networking_wan_port_switch} value={1} >WAN</Radio>
    
</div></td>
</tr>

</table>

<p class="pt-5"></p>


<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={savePortSwitch}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>
{/if}

</TabItem>


<TabItem title="Ethernet WAN">
{#if saved_changed_wan_data.config.networking_wan_port_switch ==0}
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>
</Table>
{:else if saved_changed_wan_data.config.networking_wan_port_switch == 1}


  <Accordion>

{#if hidden == 0}

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General Status</div>

<Table>
  <TableHead>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Connection Type</TableHeadCell>
    <TableHeadCell>Network Type</TableHeadCell>
    <TableHeadCell>IP Address</TableHeadCell>
    <TableHeadCell>Netmask</TableHeadCell>
    <TableHeadCell>Gateway</TableHeadCell>
    <TableHeadCell>DNS</TableHeadCell>
    <TableHeadCell>MAC</TableHeadCell>
    <TableHeadCell>Connection Status</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.interface} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.connectionType} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.networkType} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.ip} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.netmask} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.gateway} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.dns[0]} {/if}/{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.dns[1]} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.mac} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{lastest_readable_data.config.networking_wan_ewan[0].generalStatus.connectionStatus} {/if}</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

  </AccordionItem>
{/if}

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Basic Settings</div>
  <table>

<tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Web Access</p>

  </td>

  <td class="pl-5"><div class="flex gap-4">
{#if getdataAlready}  
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].basicSetting.webAccess} value={0} >Reject</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].basicSetting.webAccess} value={1} >Accept</Radio>
{/if}

</div></td>

  </tr>

  <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Connection Type</p>

  </td>


  <td class="pl-5 pt-5"><div class="flex gap-4">
{#if getdataAlready}  
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].basicSetting.connectionType} value={0} >Static IP</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].basicSetting.connectionType} value={1} >DHCP Client</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].basicSetting.connectionType} value={2} >PPPoE</Radio>
{/if}

</div></td>


  </tr>
{#if getdataAlready}  
{#if changed_wan_data.config.networking_wan_ewan[0].basicSetting.connectionType==0}
  <tr>
      <td><p class="pl-40 pt-1 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">DNS 1</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.dns[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>


  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">DNS 2</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.dns[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>
  

{:else if changed_wan_data.config.networking_wan_ewan[0].basicSetting.connectionType==2}
  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5">
{#if ewanPPPoEPasswordShow}            
            <input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
            <input type="password" bind:value={changed_wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}            

            </td>
  </tr>

  <tr>
      <td><p class="pl-40"></p>
      </td>
      <td class="pl-5 pt-5">
        <input type="checkbox" bind:checked={ewanPPPoEPasswordShow}> Show Password
      </td>
  </tr>

{/if}
{/if}

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveEWAN1BasicSetting}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </AccordionItem>
{#if hidden ==0}
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">WAN Guarantie Link</div>

<table>
    <tr>
    <td class="w-60"><p class="pl-20 pt-5 text-lg font-light text-right">Guarantie Link
</p></td>
    <td class="pl-5 pt-5">
{#if getdataAlready} 
    <Toggle bind:checked={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn} on:change={EWLAP_Check}></Toggle>
{/if}
    </td>
    </tr>
{#if getdataAlready}     
{#if changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn}

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkRule} value={0} >PING</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkRule} value={1} >DNS Query</Radio>



</div></td>

    </tr>





    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget} value={0} >None</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget} value={2} >DNS 2</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget} value={3} >Gateway</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget} value={4} >Other Host</Radio>
<input type="text" bind:value={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.otherHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div></td>

    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.pollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              seconds
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Retry Count
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.retryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Interval times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={changed_wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              mini seconds
              </td> 
              </tr>
            </table>
        </td>
    <tr>
{/if}
{/if}

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveEWANLAP}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    </table>

  </AccordionItem>
{/if}
</Accordion>

{/if}

  </TabItem>


{#if 0}
  <TabItem title="WAN Redundancy Policy">


{#if saved_changed_wan_data.config.networking_wan_port_switch ==0}
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>
</Table>
{:else if saved_changed_wan_data.config.networking_wan_port_switch == 1}



 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Operation Mode</p>

  </td>

      <td class="pl-5"><div class="flex gap-4">
{#if getdataAlready} 
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode} value={0}>Off</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode} value={1}>Always On</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode} value={2}>Fail Over</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode} value={3}>Fail Back</Radio>
{/if}

</div></td>


  </tr>
{#if getdataAlready} 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==1}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.alwaysOn.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.alwaysOn.primaryWan} value={1} >Cellular-WAN</Radio>
</div></td>


  </tr>

{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.primaryWan} value={1} >Cellular-WAN</Radio>
</div></td>

  </tr>
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.primaryWan} value={1} >Cellular-WAN</Radio>
</div></td>

  </tr>
{/if}
{/if}

{#if getdataAlready} 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2 || changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
    <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Backup WAN</p></td>
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.primaryWan==1 && changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}


 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.backupWan} value={0} >Ethernet-WAN</Radio>
  </div></td>
  
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.primaryWan==0 && changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.backupWan} value={1} >Cellular-WAN</Radio>

</div></td>
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.primaryWan==1 && changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}

<td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.backupWan} value={0} >Ethernet-WAN</Radio>
</div></td>
  
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.primaryWan==0 && changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.backupWan} value={1} >Cellular-WAN</Radio>

</div></td>
{/if}
</tr>
{/if}
{/if}


{#if getdataAlready} 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2 || changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}


 <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Payload Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkRule} value={0} >PING</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkRule} value={1} >DNS Query</Radio>

{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkRule} value={0} >PING</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkRule} value={1} >DNS Query</Radio>


{/if}

</div></td>
    </tr>
{/if}
{/if}


{#if getdataAlready}
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2 || changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}

    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">

{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkTarget} value={0} >None</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkTarget} value={2} >DNS 2</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkTarget} value={3} >Gateway</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkTarget} value={4} >Other Host</Radio>
<input type="text" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.otherHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkTarget} value={0} >None</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkTarget} value={2} >DNS 2</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkTarget} value={3} >Gateway</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkTarget} value={4} >Other Host</Radio>
<input type="text" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.otherHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">



{/if}

</div></td>
    </tr>
{/if}
{/if}

{#if getdataAlready}
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode == 2 ||
changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
    <td/>
        <td />
            <td />
    </tr>
{/if}
{/if}

    <tr>
    <td />
        <td>
            <table>
{#if getdataAlready}
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2 ||
changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"> 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}              
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkPeriod.pollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkPeriod.pollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

              </td>

              <td>
              seconds
              </td> 
              </tr>

{/if}
{/if}


{#if getdataAlready} 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2 || changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Retry Count
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">

{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkPeriod.retryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkPeriod.retryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

              </td>

              <td>
              times
              </td> 
              </tr>

{/if}
{/if}

{#if getdataAlready} 
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode == 2 ||
changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}  
              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Interval times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
            
{#if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==2}
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failover.chkPeriod.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if changed_wan_data.config.networking_wan_wanRedundancyPolicy.mode==3}
<input type="number" bind:value={changed_wan_data.config.networking_wan_wanRedundancyPolicy.failback.chkPeriod.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

              </td>

              <td>
              mini seconds
              </td> 
              </tr>

{/if}
{/if}

            </table>
        </td>
    <tr>


 <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveWanRedundancy}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

{/if}

  </TabItem>


{#if 0}

  <TabItem title="Fare Saving Policy">

<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Control Traffic Flow</div>


 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Control By</p>

  </td>


  <td class="pl-5" colspan="3"><div class="flex gap-4">
{#if getdataAlready}    
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode} value={0} >Off</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode} value={1} >Time</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode} value={2} >Traffic Amount</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode} value={3} >Data Source</Radio>
{/if}

</div></td>
<td/>
<td/>
<td/>
<td/>
  </tr>

{#if getdataAlready} 
  {#if changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode==1}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Select</p>

  </td>

  <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.select} value={0} >Schedule</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.select} value={1} >Period</Radio>
  </div>
  </td>

  </tr>

  {#if changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.select==0}
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Time(Per month)</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

  {:else if changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.select==1}

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Time(Per month)</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.startTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.startTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.startTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.dutyTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.dutyTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
          <td class="pl-5 pt-5 text-lg font-light text-right"></td>
      <td class="pl-5 pt-5 text-lg font-light text-left">(HH:MM)</td>
    </tr>

     <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Period Interval</p>

  </td>


    <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
      <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={0} >Day(s)</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={1} >Hour(s)</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={2} >Minute(s)</Radio>
  </div>
  </td>

  </tr>

  {/if}


  {:else if changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode==2}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Day of Month</p>

  </td>

 <td class="pl-5 pt-5"><input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.trafficAmount.startTime} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">(1-31)</td>

  </tr>


  <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Amount By</p>

 <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={0} >TX</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={1} >RX</Radio>
  <Radio bind:group={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={2} >TX + RX</Radio>
  With
  </div>

  </td>



   <td class="pl-5 pt-5">
  <input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.trafficAmount.size} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Mbs </td>
  </tr>

  {:else if changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.mode==3}

   <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Disconnect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
<td></td>
  </tr>

   <tr>

  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center">
  RX for
  </td>

   <td class="pl-5 pt-5">
  <input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.dataSource.disconnectRule} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>
  <td></td>
  </tr>




<tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Re-Connect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
  <td></td>

  </tr>


     <tr>
  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center" colspan="2">
Once Rx of Modbus and Disconnect lasting time
  </td>
   <td class="pl-5 pt-5">
  <input type="number" bind:value={changed_wan_data.config.networking_wan_fareSavingPolicy.controlTrafficFlow.dataSource.disconnectRule} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>

  </tr>

  {/if}
{/if}


 <tr>
    <td/>
<td/>
<td/>
    <td/>
<td/>
<td/>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveFareSaving}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



  </table>


    </AccordionItem>
  </Accordion>

  </TabItem>
{/if}

{/if}
  
</Tabs>


