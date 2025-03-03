import { g as getContext, c as create_ssr_component, e as escape, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, i as add_attribute, j as compute_slots, k as subscribe, l as null_to_empty, v as validate_component, o as each } from "../../_app/immutable/chunks/index-a89b87ed.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { dashboadData, VPNdashboad, DataTagPro_ULRule_ConfigChangedLog, DataTagPro_TagRuleSchedule_ConfigChangedLog, DataTagPro_TagRuleEvent_ConfigChangedLog, DataTagPro_TagRuleSCADA_ConfigChangedLog, DataTagPro_TagRuleDM_ConfigChangedLog, DataTagPro_TagRuleTOU_ConfigChangedLog, DataTagPro_TagRuleAccumulated_ConfigChangedLog, DataTagPro_TagRuleCalculation_ConfigChangedLog, DataTagPro_TagRuleC2D_ConfigChangedLog, DataTagPro_General_ConfigChangedLog, LanConfigChangedLog, DHCPServerLANConfigLog, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, Firewall_General_ConfigChangedLog, Firewall_IPFilter_ConfigChangedLog, Firewall_MACFilter_ConfigChangedLog, StaticRouteConfigChangedLog, MaintenanceConfigChangedLog, ConfigurationP2EConfigChangedLog, OperationConfigChangedLog, DockerConfigChangedLog, WAN_PORT_SWITCH_ConfigChangedLog, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog, IPsec_Responder_Conn_ConfigChangedLog, IPsec_Initiator_Conn_General_ConfigChangedLog, IPsec_Initiator_Conn_Subnet_ConfigChangedLog, IPsec_Basic_ConfigChangedLog, OpenVPN_Client_Advanced_PSK_ConfigChangedLog, OpenVPN_Client_Advanced_PFW_ConfigChangedLog, OpenVPN_Client_Advanced_RNA_ConfigChangedLog, OpenVPN_Client_Advanced_FO_ConfigChangedLog, OpenVPN_Client_Conn_ConfigChangedLog, OpenVPN_Server_Advanced_CCD_ConfigChangedLog, OpenVPN_Server_Advanced_PSK_ConfigChangedLog, OpenVPN_Server_Advanced_PFW_ConfigChangedLog, OpenVPN_Server_Conn_ConfigChangedLog, OpenVPN_Basic_ConfigChangedLog, GenericMQTTConfigChangedLog, AWSIoTcoreConfigChangedLog, AzHub_ConfigChangedLog, AzHubDPS_ConfigChangedLog, AzCentral_ConfigChangedLog, RemoteServiceConfigMqttChangedLog, RemoteServiceConfigRestfulChangedLog, RemoteServiceConfigRemoteControlChangedLog, PortConnection_LAN_ConfigChangedLog, PortConnection_COM_ConfigChangedLog, PortConnection_Transparent_ConfigChangedLog, Certificate_Settings_ConfigChangedLog, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusDataModel_Slave_ConfigChangedLog, ModbusTag_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Cloud_ConfigChangedLog, SDatalogger_ProxyMode_Topic_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Topic_ConfigChangedLog, EventEngine_General_ConfigChangedLog, EventEngine_Rule_ConfigChangedLog, EventEngine_TriggerSMS_ConfigChangedLog, EventEngine_TriggerDI_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_TriggerTCPMsg_ConfigChangedLog, EventEngine_TriggerMQTT_ConfigChangedLog, EventEngine_TriggerPING_ConfigChangedLog, EventEngine_TriggerRSSI_ConfigChangedLog, EventEngine_ActionSMS_ConfigChangedLog, EventEngine_ActionEmail_ConfigChangedLog, EventEngine_ActionDO_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, EventEngine_ActionTCPMsg_ConfigChangedLog, EventEngine_ActionMQTT_ConfigChangedLog, EventEngine_ActionLINE_ConfigChangedLog, enableDataTagEnginePROall } from "../endpoints/configG.js";
import classNames from "classnames";
/* empty css                                                                            */import { w as writable } from "../../_app/immutable/chunks/index-b74adbb6.js";
const app = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Hamburger_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: '.hamburger.svelte-sfue04.svelte-sfue04{padding:var(--padding, 3px);display:inline-block;cursor:pointer;transition-property:opacity, filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible}.hamburger.svelte-sfue04.svelte-sfue04:active{background-color:transparent !important}.hamburger.svelte-sfue04.svelte-sfue04:hover{opacity:var(--hover-opacity, 0.7)}.hamburger.is-active.svelte-sfue04.svelte-sfue04:hover{opacity:var(--hover-opacity-active, var(--hover-opacity, 0.7))}.hamburger.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04,.hamburger.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{background-color:var(--active-color, var(--color, black))}.hamburger-box.svelte-sfue04.svelte-sfue04{width:var(--layer-width, 30px);height:calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);display:inline-block;position:relative}.hamburger-inner.svelte-sfue04.svelte-sfue04{display:block;top:50%;margin-top:var(--layer-height, 4px)/-2}.hamburger-inner.svelte-sfue04.svelte-sfue04,.hamburger-inner.svelte-sfue04.svelte-sfue04::before,.hamburger-inner.svelte-sfue04.svelte-sfue04::after{width:var(--layer-width, 30px);height:var(--layer-height, 4px);background-color:var(--color, black);border-radius:var(--border-radius, 4px);position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease}.hamburger-inner.svelte-sfue04.svelte-sfue04::before,.hamburger-inner.svelte-sfue04.svelte-sfue04::after{content:"";display:block}.hamburger-inner.svelte-sfue04.svelte-sfue04::before{top:calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1)}.hamburger-inner.svelte-sfue04.svelte-sfue04::after{bottom:calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1)}.hamburger--3dx.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dx.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dx.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateY(180deg)}.hamburger--3dx.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dx.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dx-r.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dx-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dx-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateY(-180deg)}.hamburger--3dx-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dx-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dy.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dy.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dy.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateX(-180deg)}.hamburger--3dy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dy-r.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateX(180deg)}.hamburger--3dy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dxy.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dxy.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dxy.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateX(180deg) rotateY(180deg)}.hamburger--3dxy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dxy.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dxy-r.svelte-sfue04 .hamburger-box.svelte-sfue04{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dxy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--3dxy-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{background-color:transparent !important;transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg)}.hamburger--3dxy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dxy-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--arrow.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrow.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrow-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrow-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowalt.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:translate3d(calc(var(--layer-width, 30px) * -0.2), calc(var(--layer-width, 30px) * -0.25), 0) rotate(-45deg) scale(0.7, 1);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:translate3d(calc(var(--layer-width, 30px) * -0.2), calc(var(--layer-width, 30px) * 0.25), 0) rotate(45deg) scale(0.7, 1);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:translate3d(calc(var(--layer-width, 30px) * 0.2), calc(var(--layer-width, 30px) * -0.25), 0) rotate(45deg) scale(0.7, 1);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:translate3d(calc(var(--layer-width, 30px) * 0.2), calc(var(--layer-width, 30px) * 0.25), 0) rotate(-45deg) scale(0.7, 1);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowturn.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(-180deg)}.hamburger--arrowturn.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrowturn.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowturn-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(-180deg)}.hamburger--arrowturn-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowturn-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--boring.svelte-sfue04 .hamburger-inner.svelte-sfue04,.hamburger--boring.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--boring.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-property:none}.hamburger--boring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(45deg)}.hamburger--boring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0}.hamburger--boring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(-90deg)}.hamburger--collapse.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0.13s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear}.hamburger--collapse.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(-45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear}.hamburger--collapse.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:rotate(-90deg);transition:top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0.13s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear}.hamburger--collapse-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear}.hamburger--collapse-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:rotate(90deg);transition:top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--elastic.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:var(--layer-height, 4px)/2;transition-duration:0.275s;transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:opacity 0.125s 0.275s ease}.hamburger--elastic.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(135deg);transition-delay:0.075s}.hamburger--elastic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition-delay:0s;opacity:0}.hamburger--elastic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-270deg);transition-delay:0.075s}.hamburger--elastic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:var(--layer-height, 4px)/2;transition-duration:0.275s;transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:opacity 0.125s 0.275s ease}.hamburger--elastic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(-135deg);transition-delay:0.075s}.hamburger--elastic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition-delay:0s;opacity:0}.hamburger--elastic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(270deg);transition-delay:0.075s}.hamburger--emphatic.svelte-sfue04.svelte-sfue04{overflow:hidden}.hamburger--emphatic.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:background-color 0.125s 0.175s ease-in}.hamburger--emphatic.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{left:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in}.hamburger--emphatic.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc((var(--layer-height, 4px)) + (var(--layer-spacing, 6px)));right:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in}.hamburger--emphatic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent !important}.hamburger--emphatic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{left:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * -2);transform:translate3d(calc(var(--layer-width, 30px) * 2), calc(var(--layer-width, 30px) * 2), 0) rotate(45deg);transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{right:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * -2);transform:translate3d(calc(var(--layer-width, 30px) * -2), calc(var(--layer-width, 30px) * 2), 0) rotate(-45deg);transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic-r.svelte-sfue04.svelte-sfue04{overflow:hidden}.hamburger--emphatic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:background-color 0.125s 0.175s ease-in}.hamburger--emphatic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{left:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in}.hamburger--emphatic-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc((var(--layer-height, 4px)) + (var(--layer-spacing, 6px)));right:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in}.hamburger--emphatic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent !important}.hamburger--emphatic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{left:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * 2);transform:translate3d(calc(var(--layer-width, 30px) * 2), calc(var(--layer-width, 30px) * -2), 0) rotate(-45deg);transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{right:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * 2);transform:translate3d(calc(var(--layer-width, 30px) * -2), calc(var(--layer-width, 30px) * -2), 0) rotate(45deg);transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--minus.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--minus.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear}.hamburger--minus.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--minus.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{opacity:0;transition:bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear}.hamburger--minus.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0}.hamburger--minus.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0}.hamburger--slider.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:calc(var(--layer-height, 4px) / 2)}.hamburger--slider.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition-property:transform, opacity;transition-timing-function:ease;transition-duration:0.15s}.hamburger--slider.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2)}.hamburger--slider.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(45deg)}.hamburger--slider.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:rotate(-45deg) translate3d(clac(var(--layer-width, 30px)/-7), calc(var(--layer-spacing, 6px) * -1), 0);opacity:0}.hamburger--slider.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-90deg)}.hamburger--slider-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:calc(var(--layer-height, 4px) / 2)}.hamburger--slider-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition-property:transform, opacity;transition-timing-function:ease;transition-duration:0.15s}.hamburger--slider-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2)}.hamburger--slider-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(-45deg)}.hamburger--slider-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transform:rotate(45deg) translate3d(calc(var(--layer-width, 30px) / 7), calc(var(--layer-spacing, 6px) * -1), 0);opacity:0}.hamburger--slider-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(90deg)}.hamburger--spin.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in}.hamburger--spin.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(225deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out}.hamburger--spin.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(-90deg);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in}.hamburger--spin-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(-225deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out}.hamburger--spin-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(90deg);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spring.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:var(--layer-height, 4px)/2;transition:background-color 0s 0.13s linear}.hamburger--spring.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-delay:0.22s;background-color:transparent !important}.hamburger--spring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transition:top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0) rotate(45deg)}.hamburger--spring.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0) rotate(-45deg)}.hamburger--spring-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear}.hamburger--spring-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(-45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spring-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear}.hamburger--spring-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:rotate(90deg);transition:top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear}.hamburger--stand.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(90deg);background-color:transparent !important;transition:transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear}.hamburger--stand.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:rotate(-45deg);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(45deg);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition:transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear}.hamburger--stand-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(-90deg);background-color:transparent !important;transition:transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear}.hamburger--stand-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;transform:rotate(-45deg);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(45deg);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--squeeze.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-duration:0.075s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--squeeze.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition:top 0.075s 0.12s ease, opacity 0.075s ease}.hamburger--squeeze.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition:bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--squeeze.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(45deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--squeeze.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0;transition:top 0.075s ease, opacity 0.075s 0.12s ease}.hamburger--squeeze.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(-90deg);transition:bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--vortex.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-duration:0.2s;transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--vortex.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-duration:0s;transition-delay:0.1s;transition-timing-function:linear}.hamburger--vortex.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition-property:top, opacity}.hamburger--vortex.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-property:bottom, transform}.hamburger--vortex.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(765deg);transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--vortex.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-delay:0s}.hamburger--vortex.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0}.hamburger--vortex.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(90deg)}.hamburger--vortex-r.svelte-sfue04 .hamburger-inner.svelte-sfue04{transition-duration:0.2s;transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--vortex-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-duration:0s;transition-delay:0.1s;transition-timing-function:linear}.hamburger--vortex-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{transition-property:top, opacity}.hamburger--vortex-r.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-property:bottom, transform}.hamburger--vortex-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04{transform:rotate(-765deg);transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before,.hamburger--vortex-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{transition-delay:0s}.hamburger--vortex-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::before{top:0;opacity:0}.hamburger--vortex-r.is-active.svelte-sfue04 .hamburger-inner.svelte-sfue04::after{bottom:0;transform:rotate(-90deg)}',
  map: null
};
const Hamburger$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { type = "spin" } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$2);
  return `


<button class="${[
    "hamburger hamburger--" + escape(type, true) + " svelte-sfue04",
    open ? "is-active" : ""
  ].join(" ").trim()}" aria-label="${"Hamburger menu"}"><span class="${"hamburger-box svelte-sfue04"}"><span class="${"hamburger-inner svelte-sfue04"}"></span></span>
</button>`;
});
function quartInOut(t) {
  return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass: asideClass2 = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass2 !== void 0)
    $$bindings.asideClass(asideClass2);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(asideClass2, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside>`;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span>
    ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li>`;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-1 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const sidebarOpen = writable(false);
const sidebarIsInert = writable(true);
const sidebarStayOpen = writable(false);
const Aside_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".close.svelte-yp3hav.svelte-yp3hav{left:-100%}.open.svelte-yp3hav.svelte-yp3hav{left:0}[inert].svelte-yp3hav.svelte-yp3hav{pointer-events:none;cursor:default}[inert].svelte-yp3hav.svelte-yp3hav,[inert].svelte-yp3hav .svelte-yp3hav{opacity:0.5;pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}",
  map: null
};
const Aside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarIsInert, $$unsubscribe_sidebarIsInert;
  let $sidebarOpen, $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarIsInert = subscribe(sidebarIsInert, (value) => $sidebarIsInert = value);
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => $sidebarOpen = value);
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  let { asideClass: asideClass2 = "absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg" } = $$props;
  let inert = null;
  let ariaHidden;
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass2 !== void 0)
    $$bindings.asideClass(asideClass2);
  $$result.css.add(css$1);
  inert = $sidebarIsInert ? "inert" : null;
  $$unsubscribe_sidebarIsInert();
  $$unsubscribe_sidebarOpen();
  return `${$sidebarOpen ? `<aside class="${escape(asideClass2, true) + " " + escape($$props.class ? $$props.class : "", true) + " svelte-yp3hav"}"${add_attribute("aria-hidden", ariaHidden, 0)} ${inert ? "inert" : ""}>${slots.default ? slots.default({}) : ``}</aside>` : ``}`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navClass: navClass2 = "py-8 px-4 text-lg" } = $$props;
  let { navDivClass: navDivClass2 = "pb-8" } = $$props;
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass2 !== void 0)
    $$bindings.navClass(navClass2);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass2 !== void 0)
    $$bindings.navDivClass(navDivClass2);
  return `<nav class="${escape(navClass2, true) + " " + escape($$props.class ? $$props.class : "", true)}" style="${"height:830px"}"><div${add_attribute("class", navDivClass2, 0)}>${slots.default ? slots.default({}) : ``}</div></nav>`;
});
(function(module, exports) {
  !function(e, t) {
    t();
  }(0, function() {
    var u = function() {
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i2 = t[n];
          i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e, i2.key, i2);
        }
      }
      return function(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      };
    }();
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    !function() {
      if ("undefined" != typeof window) {
        var o = Array.prototype.slice, r = Element.prototype.matches || Element.prototype.msMatchesSelector, i = [
          "a[href]",
          "area[href]",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "details",
          "summary",
          "iframe",
          "object",
          "embed",
          "[contenteditable]"
        ].join(","), s = function() {
          function n(e2, t2) {
            h(this, n), this._inertManager = t2, this._rootElement = e2, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, {
              attributes: true,
              childList: true,
              subtree: true
            });
          }
          return u(n, [
            {
              key: "destructor",
              value: function() {
                this._observer.disconnect(), this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(e2) {
                  this._unmanageNode(e2.node);
                }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
              }
            },
            {
              key: "_makeSubtreeUnfocusable",
              value: function(e2) {
                var t2 = this;
                l(e2, function(e3) {
                  return t2._visitNode(e3);
                });
                var n2 = document.activeElement;
                if (!document.body.contains(e2)) {
                  for (var i2 = e2, o2 = void 0; i2; ) {
                    if (i2.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      o2 = i2;
                      break;
                    }
                    i2 = i2.parentNode;
                  }
                  o2 && (n2 = o2.activeElement);
                }
                e2.contains(n2) && (n2.blur(), n2 === document.activeElement && document.body.focus());
              }
            },
            {
              key: "_visitNode",
              value: function(e2) {
                if (e2.nodeType === Node.ELEMENT_NODE) {
                  var t2 = e2;
                  t2 !== this._rootElement && t2.hasAttribute("inert") && this._adoptInertRoot(t2), (r.call(t2, i) || t2.hasAttribute("tabindex")) && this._manageNode(t2);
                }
              }
            },
            {
              key: "_manageNode",
              value: function(e2) {
                var t2 = this._inertManager.register(e2, this);
                this._managedNodes.add(t2);
              }
            },
            {
              key: "_unmanageNode",
              value: function(e2) {
                var t2 = this._inertManager.deregister(e2, this);
                t2 && this._managedNodes.delete(t2);
              }
            },
            {
              key: "_unmanageSubtree",
              value: function(e2) {
                var t2 = this;
                l(e2, function(e3) {
                  return t2._unmanageNode(e3);
                });
              }
            },
            {
              key: "_adoptInertRoot",
              value: function(e2) {
                var t2 = this._inertManager.getInertRoot(e2);
                t2 || (this._inertManager.setInert(e2, true), t2 = this._inertManager.getInertRoot(e2)), t2.managedNodes.forEach(function(e3) {
                  this._manageNode(e3.node);
                }, this);
              }
            },
            {
              key: "_onMutation",
              value: function(e2, t2) {
                e2.forEach(function(e3) {
                  var t3 = e3.target;
                  if ("childList" === e3.type)
                    o.call(e3.addedNodes).forEach(function(e4) {
                      this._makeSubtreeUnfocusable(e4);
                    }, this), o.call(e3.removedNodes).forEach(function(e4) {
                      this._unmanageSubtree(e4);
                    }, this);
                  else if ("attributes" === e3.type) {
                    if ("tabindex" === e3.attributeName)
                      this._manageNode(t3);
                    else if (t3 !== this._rootElement && "inert" === e3.attributeName && t3.hasAttribute("inert")) {
                      this._adoptInertRoot(t3);
                      var n2 = this._inertManager.getInertRoot(t3);
                      this._managedNodes.forEach(function(e4) {
                        t3.contains(e4.node) && n2._manageNode(e4.node);
                      });
                    }
                  }
                }, this);
              }
            },
            {
              key: "managedNodes",
              get: function() {
                return new Set(this._managedNodes);
              }
            },
            {
              key: "hasSavedAriaHidden",
              get: function() {
                return null !== this._savedAriaHidden;
              }
            },
            {
              key: "savedAriaHidden",
              set: function(e2) {
                this._savedAriaHidden = e2;
              },
              get: function() {
                return this._savedAriaHidden;
              }
            }
          ]), n;
        }(), a = function() {
          function n(e2, t2) {
            h(this, n), this._node = e2, this._overrodeFocusMethod = false, this._inertRoots = /* @__PURE__ */ new Set([t2]), this._savedTabIndex = null, this._destroyed = false, this.ensureUntabbable();
          }
          return u(n, [
            {
              key: "destructor",
              value: function() {
                if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                  var e2 = this._node;
                  null !== this._savedTabIndex ? e2.setAttribute("tabindex", this._savedTabIndex) : e2.removeAttribute("tabindex"), this._overrodeFocusMethod && delete e2.focus;
                }
                this._node = null, this._inertRoots = null, this._destroyed = true;
              }
            },
            {
              key: "_throwIfDestroyed",
              value: function() {
                if (this.destroyed)
                  throw new Error("Trying to access destroyed InertNode");
              }
            },
            {
              key: "ensureUntabbable",
              value: function() {
                if (this.node.nodeType === Node.ELEMENT_NODE) {
                  var e2 = this.node;
                  if (r.call(e2, i)) {
                    if (-1 === e2.tabIndex && this.hasSavedTabIndex)
                      return;
                    e2.hasAttribute("tabindex") && (this._savedTabIndex = e2.tabIndex), e2.setAttribute("tabindex", "-1"), e2.nodeType === Node.ELEMENT_NODE && (e2.focus = function() {
                    }, this._overrodeFocusMethod = true);
                  } else
                    e2.hasAttribute("tabindex") && (this._savedTabIndex = e2.tabIndex, e2.removeAttribute("tabindex"));
                }
              }
            },
            {
              key: "addInertRoot",
              value: function(e2) {
                this._throwIfDestroyed(), this._inertRoots.add(e2);
              }
            },
            {
              key: "removeInertRoot",
              value: function(e2) {
                this._throwIfDestroyed(), this._inertRoots.delete(e2), 0 === this._inertRoots.size && this.destructor();
              }
            },
            {
              key: "destroyed",
              get: function() {
                return this._destroyed;
              }
            },
            {
              key: "hasSavedTabIndex",
              get: function() {
                return null !== this._savedTabIndex;
              }
            },
            {
              key: "node",
              get: function() {
                return this._throwIfDestroyed(), this._node;
              }
            },
            {
              key: "savedTabIndex",
              set: function(e2) {
                this._throwIfDestroyed(), this._savedTabIndex = e2;
              },
              get: function() {
                return this._throwIfDestroyed(), this._savedTabIndex;
              }
            }
          ]), n;
        }(), e = function() {
          function t2(e2) {
            if (h(this, t2), !e2)
              throw new Error("Missing required argument; InertManager needs to wrap a document.");
            this._document = e2, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), d(e2.head || e2.body || e2.documentElement), "loading" === e2.readyState ? e2.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
          }
          return u(t2, [
            {
              key: "setInert",
              value: function(e2, t3) {
                if (t3) {
                  if (this._inertRoots.has(e2))
                    return;
                  var n = new s(e2, this);
                  if (e2.setAttribute("inert", ""), this._inertRoots.set(e2, n), !this._document.body.contains(e2))
                    for (var i2 = e2.parentNode; i2; )
                      11 === i2.nodeType && d(i2), i2 = i2.parentNode;
                } else {
                  if (!this._inertRoots.has(e2))
                    return;
                  this._inertRoots.get(e2).destructor(), this._inertRoots.delete(e2), e2.removeAttribute("inert");
                }
              }
            },
            {
              key: "getInertRoot",
              value: function(e2) {
                return this._inertRoots.get(e2);
              }
            },
            {
              key: "register",
              value: function(e2, t3) {
                var n = this._managedNodes.get(e2);
                return void 0 !== n ? n.addInertRoot(t3) : n = new a(e2, t3), this._managedNodes.set(e2, n), n;
              }
            },
            {
              key: "deregister",
              value: function(e2, t3) {
                var n = this._managedNodes.get(e2);
                return n ? (n.removeInertRoot(t3), n.destroyed && this._managedNodes.delete(e2), n) : null;
              }
            },
            {
              key: "_onDocumentLoaded",
              value: function() {
                o.call(this._document.querySelectorAll("[inert]")).forEach(function(e2) {
                  this.setInert(e2, true);
                }, this), this._observer.observe(this._document.body || this._document.documentElement, {
                  attributes: true,
                  subtree: true,
                  childList: true
                });
              }
            },
            {
              key: "_watchForInert",
              value: function(e2, t3) {
                var i2 = this;
                e2.forEach(function(e3) {
                  switch (e3.type) {
                    case "childList":
                      o.call(e3.addedNodes).forEach(function(e4) {
                        if (e4.nodeType === Node.ELEMENT_NODE) {
                          var t5 = o.call(e4.querySelectorAll("[inert]"));
                          r.call(e4, "[inert]") && t5.unshift(e4), t5.forEach(function(e5) {
                            this.setInert(e5, true);
                          }, i2);
                        }
                      }, i2);
                      break;
                    case "attributes":
                      if ("inert" !== e3.attributeName)
                        return;
                      var t4 = e3.target, n = t4.hasAttribute("inert");
                      i2.setInert(t4, n);
                  }
                }, this);
              }
            }
          ]), t2;
        }();
        if (!Element.prototype.hasOwnProperty("inert")) {
          var t = new e(document);
          Object.defineProperty(Element.prototype, "inert", {
            enumerable: true,
            get: function() {
              return this.hasAttribute("inert");
            },
            set: function(e2) {
              t.setInert(this, e2);
            }
          });
        }
      }
      function l(e2, t2, n) {
        if (e2.nodeType == Node.ELEMENT_NODE) {
          var i2 = e2;
          t2 && t2(i2);
          var o2 = i2.shadowRoot;
          if (o2)
            return void l(o2, t2);
          if ("content" == i2.localName) {
            for (var r2 = i2, s2 = r2.getDistributedNodes ? r2.getDistributedNodes() : [], a2 = 0; a2 < s2.length; a2++)
              l(s2[a2], t2);
            return;
          }
          if ("slot" == i2.localName) {
            for (var d2 = i2, u2 = d2.assignedNodes ? d2.assignedNodes({ flatten: true }) : [], h2 = 0; h2 < u2.length; h2++)
              l(u2[h2], t2);
            return;
          }
        }
        for (var c = e2.firstChild; null != c; )
          l(c, t2), c = c.nextSibling;
      }
      function d(e2) {
        if (!e2.querySelector("style#inert-style, link#inert-style")) {
          var t2 = document.createElement("style");
          t2.setAttribute("id", "inert-style"), t2.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", e2.appendChild(t2);
        }
      }
    }();
  });
})();
const Hamburger_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1prbcdr.svelte-1prbcdr{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-1prbcdr line.svelte-1prbcdr{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out}button.svelte-1prbcdr.svelte-1prbcdr{z-index:20}.open.svelte-1prbcdr svg.svelte-1prbcdr{transform:scale(0.7)}.open.svelte-1prbcdr #top.svelte-1prbcdr{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-1prbcdr #middle.svelte-1prbcdr{opacity:0}.open.svelte-1prbcdr #bottom.svelte-1prbcdr{transform:translate(-12px, 9px) rotate(-45deg)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarOpen, $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => $sidebarOpen = value);
  let { hamburgerClass: hamburgerClass2 = "" } = $$props;
  if ($$props.hamburgerClass === void 0 && $$bindings.hamburgerClass && hamburgerClass2 !== void 0)
    $$bindings.hamburgerClass(hamburgerClass2);
  $$result.css.add(css);
  $$unsubscribe_sidebarOpen();
  return `<button id="${"hamburgerBtn"}" class="${[
    escape(null_to_empty(hamburgerClass2), true) + " svelte-1prbcdr",
    $sidebarOpen ? "open" : ""
  ].join(" ").trim()}" aria-label="${"Sidebar"}"><svg width="${"32"}" height="${"24"}" class="${"svelte-1prbcdr"}"><line id="${"top"}" x1="${"0"}" y1="${"2"}" x2="${"32"}" y2="${"2"}" class="${"svelte-1prbcdr"}"></line><line id="${"middle"}" x1="${"0"}" y1="${"12"}" x2="${"24"}" y2="${"12"}" class="${"svelte-1prbcdr"}"></line><line id="${"bottom"}" x1="${"0"}" y1="${"22"}" x2="${"32"}" y2="${"22"}" class="${"svelte-1prbcdr"}"></line></svg>
</button>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt = "" } = $$props;
  let { hamburgerClass: hamburgerClass2 = "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none" } = $$props;
  let { headerClass: headerClass2 = "bg-gray-200 pt-4 px-10 items-center text-gray-600" } = $$props;
  let { logo: logo2 = "" } = $$props;
  let { logoClass: logoClass2 = "" } = $$props;
  let { navClass: navClass2 = "flex relative" } = $$props;
  let { siteClass: siteClass2 = "w-1/4 h-12 text-lg pt-1 pl-12" } = $$props;
  let { siteName: siteName2 = "Demo" } = $$props;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.hamburgerClass === void 0 && $$bindings.hamburgerClass && hamburgerClass2 !== void 0)
    $$bindings.hamburgerClass(hamburgerClass2);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass2 !== void 0)
    $$bindings.headerClass(headerClass2);
  if ($$props.logo === void 0 && $$bindings.logo && logo2 !== void 0)
    $$bindings.logo(logo2);
  if ($$props.logoClass === void 0 && $$bindings.logoClass && logoClass2 !== void 0)
    $$bindings.logoClass(logoClass2);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass2 !== void 0)
    $$bindings.navClass(navClass2);
  if ($$props.siteClass === void 0 && $$bindings.siteClass && siteClass2 !== void 0)
    $$bindings.siteClass(siteClass2);
  if ($$props.siteName === void 0 && $$bindings.siteName && siteName2 !== void 0)
    $$bindings.siteName(siteName2);
  return `<header class="${escape(headerClass2, true) + " " + escape($$props.class ? $$props.class : "", true)}"><nav${add_attribute("class", navClass2, 0)}>${validate_component(Hamburger, "Hamburger").$$render($$result, { hamburgerClass: hamburgerClass2 }, {}, {})}
		<div${add_attribute("class", siteClass2, 0)}><a href="${"https://www.etherwan.com/tw"}" class="${"flex w-20"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img${add_attribute("src", logo2, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", logoClass2, 0)}></a></div>
		<div class="${"pt-8"}"><span class="${"pl-10 self-center text-3xl font-semibold text-gray-900 whitespace-nowrap dark:text-white"}">${escape(siteName2)}</span></div>
		${slots.default ? slots.default({}) : ``}</nav></header>`;
});
const Responsive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { breakPoint = 1024 } = $$props;
  let width;
  if ($$props.breakPoint === void 0 && $$bindings.breakPoint && breakPoint !== void 0)
    $$bindings.breakPoint(breakPoint);
  {
    if (width >= breakPoint) {
      sidebarStayOpen.update((n) => true);
      sidebarOpen.update((n) => true);
      sidebarIsInert.update((n) => false);
    } else {
      sidebarStayOpen.update((n) => false);
      sidebarOpen.update((n) => false);
      sidebarIsInert.update((n) => true);
    }
  }
  return ``;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { child } = $$props;
  let { activeDropdownDiv = "z-10 w-44 text-lg list-none bg-white rounded divide-y divide-gray-100 shadow" } = $$props;
  let { activeChildLi = "block py-2 px-4 text-base text-gray-700 hover:bg-gray-100" } = $$props;
  let { dropdownLi = "flex justify-between items-center py-2 pr-4 pl-3 w-full text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.child === void 0 && $$bindings.child && child !== void 0)
    $$bindings.child(child);
  if ($$props.activeDropdownDiv === void 0 && $$bindings.activeDropdownDiv && activeDropdownDiv !== void 0)
    $$bindings.activeDropdownDiv(activeDropdownDiv);
  if ($$props.activeChildLi === void 0 && $$bindings.activeChildLi && activeChildLi !== void 0)
    $$bindings.activeChildLi(activeChildLi);
  if ($$props.dropdownLi === void 0 && $$bindings.dropdownLi && dropdownLi !== void 0)
    $$bindings.dropdownLi(dropdownLi);
  return `${``}
<li><button${add_attribute("class", dropdownLi, 0)}>${escape(name)}
		<svg class="${"ml-1 w-4 h-4"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
	
	<div class="${[
    escape(activeDropdownDiv, true) + " " + escape($$props.class ? $$props.class : "", true),
    "hidden "
  ].join(" ").trim()}" style="${"position: absolute; margin: 0px;"}"><ul class="${"py-1"}" aria-label="${"dropdown-button"}">${each(child, ({ href, name: name2, rel, id }) => {
    return `<li><a${add_attribute("href", href, 0)}${add_attribute("id", id, 0)}${add_attribute("rel", rel, 0)}${add_attribute("class", activeChildLi, 0)}>${escape(name2)}</a>
				</li>`;
  })}</ul></div></li>`;
});
const TopMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { topDiv: topDiv2 = "w-full md:block md:w-auto" } = $$props;
  let { childLi = "block py-2  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-base" } = $$props;
  let { topMenuDiv: topMenuDiv2 = "container flex flex-wrap justify-end mx-auto" } = $$props;
  let { topMenus } = $$props;
  let { topul: topul2 = "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-gray-200" } = $$props;
  let { topli = "block py-2 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" } = $$props;
  let { activeDropdownDiv = "z-10 w-44 text-lg list-none bg-white rounded divide-y divide-gray-100 shadow" } = $$props;
  let { activeChildLi = "block py-2 px-4 text-base text-gray-700 hover:bg-gray-100" } = $$props;
  let { dropdownLi = "flex justify-between items-center py-2 w-full text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto" } = $$props;
  let { svg0background = "" } = $$props;
  sessionidG.subscribe((val) => {
  });
  dashboadData.subscribe((val) => {
  });
  VPNdashboad.subscribe((val) => {
  });
  if ($$props.topDiv === void 0 && $$bindings.topDiv && topDiv2 !== void 0)
    $$bindings.topDiv(topDiv2);
  if ($$props.childLi === void 0 && $$bindings.childLi && childLi !== void 0)
    $$bindings.childLi(childLi);
  if ($$props.topMenuDiv === void 0 && $$bindings.topMenuDiv && topMenuDiv2 !== void 0)
    $$bindings.topMenuDiv(topMenuDiv2);
  if ($$props.topMenus === void 0 && $$bindings.topMenus && topMenus !== void 0)
    $$bindings.topMenus(topMenus);
  if ($$props.topul === void 0 && $$bindings.topul && topul2 !== void 0)
    $$bindings.topul(topul2);
  if ($$props.topli === void 0 && $$bindings.topli && topli !== void 0)
    $$bindings.topli(topli);
  if ($$props.activeDropdownDiv === void 0 && $$bindings.activeDropdownDiv && activeDropdownDiv !== void 0)
    $$bindings.activeDropdownDiv(activeDropdownDiv);
  if ($$props.activeChildLi === void 0 && $$bindings.activeChildLi && activeChildLi !== void 0)
    $$bindings.activeChildLi(activeChildLi);
  if ($$props.dropdownLi === void 0 && $$bindings.dropdownLi && dropdownLi !== void 0)
    $$bindings.dropdownLi(dropdownLi);
  if ($$props.svg0background === void 0 && $$bindings.svg0background && svg0background !== void 0)
    $$bindings.svg0background(svg0background);
  activeUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `<div${add_attribute("class", topMenuDiv2, 0)}><div${add_attribute("class", topDiv2, 0)}><ul${add_attribute("class", topul2, 0)}>${each(topMenus, ({ id, name, href, rel, child }) => {
    return `${child ? `${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        name,
        child,
        activeChildLi,
        activeDropdownDiv,
        dropdownLi
      },
      {},
      {}
    )}` : `<li${add_attribute("class", topli, 0)}>${id == 0 ? `${activeUrl == "/dashboard" || activeUrl.substring(0, 16) == "/EDashboard.html" ? `<button type="${"button"}"><svg version="${"1.0"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512.000000 512.000000"}" preserveAspectRatio="${"xMidYMid meet"}" class="${"text-green-500 mr-2 dark:text-pink-500 w-6 h-6"}"><g transform="${"translate(0.000000,512.000000) scale(0.100000,-0.100000)"}" fill="${"green"}" stroke="${"none"}"><path d="${"M4213 5106 c-59 -19 -104 -49 -153 -102 -80 -87 -100 -171 -81 -333\n7 -51 10 -95 9 -96 -2 -2 -39 19 -83 47 -131 82 -370 193 -531 247 -731 243\n-1503 145 -2139 -273 -630 -414 -1038 -1047 -1141 -1771 -23 -159 -23 -486 0\n-638 41 -276 114 -514 231 -752 128 -263 275 -471 480 -683 211 -218 418 -370\n690 -503 600 -293 1258 -327 1919 -99 554 191 1027 562 1305 1024 206 340 321\n735 325 1111 1 135 0 142 -28 202 -33 73 -104 144 -174 176 -67 31 -207 31\n-274 0 -67 -31 -143 -106 -174 -171 -23 -48 -28 -76 -35 -196 -22 -376 -135\n-675 -359 -951 -323 -397 -893 -655 -1447 -655 -605 0 -1140 300 -1493 836\n-394 597 -398 1340 -12 1934 227 350 589 633 971 760 218 73 295 84 561 84\n217 0 244 -2 361 -26 136 -30 284 -78 402 -132 85 -39 221 -116 214 -122 -2\n-2 -51 -13 -109 -23 -57 -10 -124 -29 -147 -41 -65 -32 -127 -96 -158 -159\n-24 -49 -28 -68 -28 -146 0 -76 4 -99 26 -146 53 -112 161 -187 283 -196 83\n-6 1082 174 1151 207 57 28 127 97 154 153 46 95 45 111 -14 631 -31 264 -60\n505 -65 534 -28 156 -161 271 -324 279 -42 2 -88 -3 -113 -11z"}"></path></g></svg>
</button>` : ``}` : `${id == 1 ? `<a${add_attribute("href", href, 0)}${add_attribute("rel", rel, 0)} class="${[escape(childLi, true), $page.url.pathname === href ? "active" : ""].join(" ").trim()}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-green-500 mr-2 dark:text-pink-500 w-6 h-6"}"${add_attribute("style", svg0background, 0)}><path d="${"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></a>` : `${id == 2 ? `<a${add_attribute("href", href, 0)}${add_attribute("rel", rel, 0)} class="${[escape(childLi, true), $page.url.pathname === href ? "active" : ""].join(" ").trim()}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-green-500 mr-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></a>` : ``}`}`}

					</li>`}`;
  })}</ul></div></div>`;
});
const Side = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarOpen, $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => $sidebarOpen = value);
  let { alt = "" } = $$props;
  let { hamburgerClass: hamburgerClass2 = "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none lg:hidden" } = $$props;
  let { headerClass: headerClass2 = "bg-gray-200 pt-4 px-10 items-center text-gray-600" } = $$props;
  let { logo: logo2 = "" } = $$props;
  let { logoClass: logoClass2 = "" } = $$props;
  let { navClass: navClass2 = "flex relative" } = $$props;
  let { siteClass: siteClass2 = "w-1/4 h-12 text-lg pt-1 pl-12" } = $$props;
  let { siteName: siteName2 = "Demo" } = $$props;
  let { spanClass: spanClass2 = "pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap" } = $$props;
  let { topDiv: topDiv2 = "w-full md:block md:w-auto" } = $$props;
  let { buttonClass: buttonClass2 = "inline-flex items-center text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" } = $$props;
  let { childLi = "block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-base" } = $$props;
  let { topMenuDiv: topMenuDiv2 = "container flex flex-wrap justify-end mx-auto" } = $$props;
  let { topMenus } = $$props;
  let { topul: topul2 = "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white" } = $$props;
  let { topli = "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" } = $$props;
  let { activeDropdownDiv = "z-10 w-44 text-lg list-none bg-white rounded divide-y divide-gray-100 shadow" } = $$props;
  let { activeChildLi = "block py-2 px-4 text-base text-gray-700 hover:bg-gray-100" } = $$props;
  let { dropdownLi = "flex justify-between items-center py-2 pr-4 pl-3 w-full text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto" } = $$props;
  let { svg0background = "" } = $$props;
  let { asideClass: asideClass2 = "absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  let { sideWrapperClass = "fixed z-50 top-0 left-0 w-full" } = $$props;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.hamburgerClass === void 0 && $$bindings.hamburgerClass && hamburgerClass2 !== void 0)
    $$bindings.hamburgerClass(hamburgerClass2);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass2 !== void 0)
    $$bindings.headerClass(headerClass2);
  if ($$props.logo === void 0 && $$bindings.logo && logo2 !== void 0)
    $$bindings.logo(logo2);
  if ($$props.logoClass === void 0 && $$bindings.logoClass && logoClass2 !== void 0)
    $$bindings.logoClass(logoClass2);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass2 !== void 0)
    $$bindings.navClass(navClass2);
  if ($$props.siteClass === void 0 && $$bindings.siteClass && siteClass2 !== void 0)
    $$bindings.siteClass(siteClass2);
  if ($$props.siteName === void 0 && $$bindings.siteName && siteName2 !== void 0)
    $$bindings.siteName(siteName2);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.topDiv === void 0 && $$bindings.topDiv && topDiv2 !== void 0)
    $$bindings.topDiv(topDiv2);
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass2 !== void 0)
    $$bindings.buttonClass(buttonClass2);
  if ($$props.childLi === void 0 && $$bindings.childLi && childLi !== void 0)
    $$bindings.childLi(childLi);
  if ($$props.topMenuDiv === void 0 && $$bindings.topMenuDiv && topMenuDiv2 !== void 0)
    $$bindings.topMenuDiv(topMenuDiv2);
  if ($$props.topMenus === void 0 && $$bindings.topMenus && topMenus !== void 0)
    $$bindings.topMenus(topMenus);
  if ($$props.topul === void 0 && $$bindings.topul && topul2 !== void 0)
    $$bindings.topul(topul2);
  if ($$props.topli === void 0 && $$bindings.topli && topli !== void 0)
    $$bindings.topli(topli);
  if ($$props.activeDropdownDiv === void 0 && $$bindings.activeDropdownDiv && activeDropdownDiv !== void 0)
    $$bindings.activeDropdownDiv(activeDropdownDiv);
  if ($$props.activeChildLi === void 0 && $$bindings.activeChildLi && activeChildLi !== void 0)
    $$bindings.activeChildLi(activeChildLi);
  if ($$props.dropdownLi === void 0 && $$bindings.dropdownLi && dropdownLi !== void 0)
    $$bindings.dropdownLi(dropdownLi);
  if ($$props.svg0background === void 0 && $$bindings.svg0background && svg0background !== void 0)
    $$bindings.svg0background(svg0background);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass2 !== void 0)
    $$bindings.asideClass(asideClass2);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.sideWrapperClass === void 0 && $$bindings.sideWrapperClass && sideWrapperClass !== void 0)
    $$bindings.sideWrapperClass(sideWrapperClass);
  $$unsubscribe_sidebarOpen();
  return `${$sidebarOpen ? `${validate_component(OutsideClick, "OutsideClick").$$render($$result, {}, {}, {
    default: () => {
      return `<div${add_attribute("class", sideWrapperClass, 0)}>${validate_component(Navbar, "Navbar").$$render(
        $$result,
        {
          alt,
          hamburgerClass: hamburgerClass2,
          headerClass: headerClass2,
          logo: logo2,
          logoClass: logoClass2,
          navClass: navClass2,
          siteClass: siteClass2,
          siteName: siteName2,
          spanClass: spanClass2
        },
        {},
        {
          default: () => {
            return `${validate_component(TopMenu, "TopMenu").$$render(
              $$result,
              {
                buttonClass: buttonClass2,
                childLi,
                topDiv: topDiv2,
                topMenuDiv: topMenuDiv2,
                topMenus,
                topul: topul2,
                topli,
                activeDropdownDiv,
                activeChildLi,
                dropdownLi,
                svg0background
              },
              {},
              {}
            )}`;
          }
        }
      )}

			${validate_component(Aside, "Aside").$$render(
        $$result,
        {
          asideClass: asideClass2,
          transitionType,
          transitionParams
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}</div>`;
    }
  })}` : `<div${add_attribute("class", sideWrapperClass, 0)}>${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      alt,
      hamburgerClass: hamburgerClass2,
      headerClass: headerClass2,
      logo: logo2,
      logoClass: logoClass2,
      navClass: navClass2,
      siteClass: siteClass2,
      siteName: siteName2,
      spanClass: spanClass2
    },
    {},
    {
      default: () => {
        return `${validate_component(TopMenu, "TopMenu").$$render(
          $$result,
          {
            buttonClass: buttonClass2,
            childLi,
            topDiv: topDiv2,
            topMenuDiv: topMenuDiv2,
            topMenus,
            topul: topul2,
            topli,
            activeDropdownDiv,
            activeChildLi,
            dropdownLi,
            svg0background
          },
          {},
          {}
        )}`;
      }
    }
  )}
		${validate_component(OutsideClick, "OutsideClick").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Aside, "Aside").$$render(
        $$result,
        {
          asideClass: asideClass2,
          transitionType,
          transitionParams
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}</div>`}`;
});
const OutsideClick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_sidebarStayOpen;
  $$unsubscribe_sidebarStayOpen = subscribe(sidebarStayOpen, (value) => value);
  $$unsubscribe_sidebarStayOpen();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
let logo = "EWLOGO.png";
let logoClass = "w-20";
let siteName = "EW50-V";
let siteClass = "pl-45";
let headerClass = "bg-white px-10 items-center text-gray-600 border-b-2 p-2 dark:bg-gray-900 dark:text-white";
let hamburgerClass = "hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden";
let topDiv = "pt-8 w-full md:block md:w-auto absolute right-0";
let topMenuDiv = "container flex flex-wrap pt-0 md:pt-2";
let topul = "flex flex-col mt-4 md:flex-row md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white";
let asideClass = "absolute w-auto border-r-2 shadow-lg z-50 bg-white dark:bg-gray-900 dark:text-white";
let spanClass = "pl-20 self-center text-3xl font-semibold text-gray-900 whitespace-nowrap dark:text-white";
let navClass = "py-1 px-1 text-lg overflow-scroll";
let navDivClass = "pb-8";
let buttonClass = "inline-flex items-center text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let transitionParams = {
    duration: 200,
    delay: 100,
    easing: quartInOut,
    x: -200
  };
  let open;
  let svg0background = "";
  let interval;
  let LANchangedValues = [];
  let dhcpServerChangedValues = [];
  let NAT_loopback_changedValues = [];
  let NAT_virtualServer_changedValues = [];
  let NAT_virtualComputer_changedValues = [];
  let NAT_dmz_changedValues = [];
  let Firewall_general_changedValues = [];
  let Firewall_ipfilter_changedValues = [];
  let Firewall_macfilter_changedValues = [];
  let staticR_changedValues = [];
  let maintenance_changedValues = [];
  let configuration_p2e_changedValues = [];
  let operation_changedValues = [];
  let docker_changedValues = [];
  let cwan1_basic_changedValues = [];
  let cwan1_advanced_changedValues = [];
  let cwan1_simpolicy_changedValues = [];
  let cwan1_glink_changedValues = [];
  let ewan1_basic_changedValues = [];
  let ewan1_ewlap_changedValues = [];
  let redundancy_policy_changedValues = [];
  let faresaving_policy_changedValues = [];
  let port_switch_changedValues = [];
  let basic_changedValues = [];
  let responder_conn_changedValues = [];
  let initiator_conn_general_changedValues = [];
  let initiator_conn_subnet_changedValues = [];
  let openvpn_basic_changedValues = [];
  let openvpn_server_conn_changedValues = [];
  let openvpn_client_conn_changedValues = [];
  let openvpn_server_advanced_ccd_changedValues = [];
  let openvpn_server_advanced_psk_changedValues = [];
  let openvpn_server_advanced_pfw_changedValues = [];
  let openvpn_client_advanced_pfw_changedValues = [];
  let openvpn_client_advanced_psk_changedValues = [];
  let openvpn_client_advanced_rna_changedValues = [];
  let openvpn_client_advanced_fo_changedValues = [];
  let generic_mqtt_changedValues = [];
  let azhub_changedValues = [];
  let azhubdps_changedValues = [];
  let azcentral_changedValues = [];
  let awsIoT_core_changedValues = [];
  let remote_service_mqtt_changedValues = [];
  let remote_service_restful_changedValues = [];
  let remote_service_remote_control_changedValues = [];
  let port_connection_lan_changedValues = [];
  let port_connection_com_changedValues = [];
  let port_connection_transparent_changedValues = [];
  let certificate_settings_changedValues = [];
  let modbus_gateway_TtR_changedValues = [];
  let modbus_gateway_RtT_changedValues = [];
  let modbus_gateway_RtR_changedValues = [];
  let modbus_gateway_TtT_changedValues = [];
  let modbus_data_model_master_changedValues = [];
  let modbus_data_model_slave_changedValues = [];
  let modbus_tag_changedValues = [];
  let modbus_tcp_master_changedValues = [];
  let modbus_tcp_slave_changedValues = [];
  let modbus_rtu_master_changedValues = [];
  let modbus_rtu_slave_changedValues = [];
  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_proxy_topic_changedValues = [];
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];
  let sdata_logger_monitor_topic_changedValues = [];
  let event_engine_rule_changedValues = [];
  let event_engine_general_changedValues = [];
  let event_engine_trigger_sms_changeValues = [];
  let event_engine_trigger_di_changeValues = [];
  let event_engine_trigger_modbus_changeValues = [];
  let event_engine_trigger_tcpmsg_changeValues = [];
  let event_engine_trigger_mqtt_changeValues = [];
  let event_engine_trigger_ping_changeValues = [];
  let event_engine_trigger_rssi_changeValues = [];
  let event_engine_action_sms_changeValues = [];
  let event_engine_action_email_changeValues = [];
  let event_engine_action_do_changeValues = [];
  let event_engine_action_modbus_changeValues = [];
  let event_engine_action_tcpmsg_changeValues = [];
  let event_engine_action_mqtt_changeValues = [];
  let event_engine_action_line_changeValues = [];
  let data_tag_pro_general_changedValues = [];
  let data_tag_pro_tag_c2d_changedValues = [];
  let data_tag_pro_tag_calculation_changedValues = [];
  let data_tag_pro_tag_accumulated_changedValues = [];
  let data_tag_pro_tag_tou_changedValues = [];
  let data_tag_pro_tag_dm_changedValues = [];
  let data_tag_pro_tag_scada_changedValues = [];
  let data_tag_pro_tag_event_changedValues = [];
  let data_tag_pro_tag_schedule_changedValues = [];
  let data_tag_pro_ul_changedValues = [];
  const BlinkApply = () => {
    if (svg0background == "") {
      svg0background = "background-color: blue";
    } else if (svg0background == "background-color: blue") {
      svg0background = "";
    }
  };
  const startInterval = () => {
    interval = setInterval(BlinkApply, 500);
  };
  function JudgeChangedOrNot() {
    if (data_tag_pro_general_changedValues.length != 0 || data_tag_pro_tag_c2d_changedValues.length != 0 || data_tag_pro_tag_calculation_changedValues.length != 0 || data_tag_pro_tag_accumulated_changedValues.length != 0 || data_tag_pro_tag_tou_changedValues.length != 0 || data_tag_pro_tag_dm_changedValues.length != 0 || data_tag_pro_tag_scada_changedValues.length != 0 || data_tag_pro_tag_event_changedValues.length != 0 || data_tag_pro_tag_schedule_changedValues.length != 0 || data_tag_pro_ul_changedValues.length != 0 || event_engine_action_line_changeValues.length != 0 || event_engine_action_mqtt_changeValues.length != 0 || event_engine_action_tcpmsg_changeValues.length != 0 || event_engine_action_modbus_changeValues.length != 0 || event_engine_action_do_changeValues.length != 0 || event_engine_action_email_changeValues.length != 0 || event_engine_action_sms_changeValues.length != 0 || event_engine_trigger_rssi_changeValues.length != 0 || event_engine_trigger_ping_changeValues.length != 0 || event_engine_trigger_mqtt_changeValues.length != 0 || event_engine_trigger_tcpmsg_changeValues.length != 0 || event_engine_trigger_modbus_changeValues.length != 0 || event_engine_trigger_di_changeValues.length != 0 || event_engine_trigger_sms_changeValues.length != 0 || event_engine_rule_changedValues.length != 0 || event_engine_general_changedValues.length != 0 || sdata_logger_general_changedValues.length != 0 || sdata_logger_proxy_edge_changedValues.length != 0 || sdata_logger_proxy_cloud_changedValues.length != 0 || sdata_logger_proxy_topic_changedValues.length != 0 || sdata_logger_monitor_edge_changedValues.length != 0 || sdata_logger_monitor_cloud_changedValues.length != 0 || sdata_logger_monitor_topic_changedValues.length != 0 || modbus_gateway_TtR_changedValues.length != 0 || modbus_gateway_RtT_changedValues.length != 0 || modbus_gateway_RtR_changedValues.length != 0 || modbus_gateway_TtT_changedValues.length != 0 || modbus_data_model_master_changedValues.length != 0 || modbus_data_model_slave_changedValues.length != 0 || modbus_tcp_master_changedValues.length != 0 || modbus_tcp_slave_changedValues.length != 0 || modbus_rtu_master_changedValues.length != 0 || modbus_rtu_slave_changedValues.length != 0 || modbus_tag_changedValues.length != 0 || certificate_settings_changedValues.length != 0 || port_connection_lan_changedValues.length != 0 || port_connection_com_changedValues.length != 0 || port_connection_transparent_changedValues.length != 0 || remote_service_mqtt_changedValues.length != 0 || remote_service_restful_changedValues.length != 0 || remote_service_remote_control_changedValues.length != 0 || generic_mqtt_changedValues.length != 0 || azhub_changedValues.length != 0 || azhubdps_changedValues.length != 0 || azcentral_changedValues.length != 0 || awsIoT_core_changedValues.length != 0 || openvpn_basic_changedValues.length != 0 || openvpn_server_conn_changedValues.length != 0 || openvpn_client_conn_changedValues.length != 0 || openvpn_server_advanced_ccd_changedValues.length != 0 || openvpn_server_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_psk_changedValues.length != 0 || openvpn_server_advanced_pfw_changedValues.length != 0 || openvpn_client_advanced_pfw_changedValues.length != 0 || openvpn_client_advanced_rna_changedValues.length != 0 || openvpn_client_advanced_fo_changedValues.length != 0 || LANchangedValues.length != 0 || dhcpServerChangedValues.length != 0 || NAT_loopback_changedValues.length != 0 || NAT_virtualServer_changedValues.length != 0 || NAT_virtualComputer_changedValues.length != 0 || NAT_dmz_changedValues.length != 0 || Firewall_general_changedValues.length != 0 || Firewall_ipfilter_changedValues.length != 0 || Firewall_macfilter_changedValues.length != 0 || staticR_changedValues.length != 0 || maintenance_changedValues.length != 0 || configuration_p2e_changedValues.length != 0 || operation_changedValues.length != 0 || docker_changedValues.length != 0 || cwan1_basic_changedValues.length != 0 || cwan1_advanced_changedValues.length != 0 || cwan1_simpolicy_changedValues.length != 0 || cwan1_glink_changedValues.length != 0 || ewan1_basic_changedValues.length != 0 || ewan1_ewlap_changedValues.length != 0 || redundancy_policy_changedValues.length != 0 || faresaving_policy_changedValues.length != 0 || port_switch_changedValues.length != 0 || basic_changedValues.length != 0 || responder_conn_changedValues.length != 0 || initiator_conn_general_changedValues.length != 0 || initiator_conn_subnet_changedValues.length != 0) {
      if (!interval) {
        startInterval();
      }
    } else {
      if (interval) {
        clearInterval(interval);
        svg0background = "";
        interval = 0;
      }
    }
  }
  DataTagPro_ULRule_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_ul_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleSchedule_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_schedule_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleEvent_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_event_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleSCADA_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_scada_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleDM_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_dm_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleTOU_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_tou_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_accumulated_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_calculation_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_TagRuleC2D_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_tag_c2d_changedValues = val;
    JudgeChangedOrNot();
  });
  DataTagPro_General_ConfigChangedLog.subscribe((val) => {
    data_tag_pro_general_changedValues = val;
    JudgeChangedOrNot();
  });
  LanConfigChangedLog.subscribe((val) => {
    LANchangedValues = val;
    JudgeChangedOrNot();
  });
  DHCPServerLANConfigLog.subscribe((val) => {
    dhcpServerChangedValues = val;
    JudgeChangedOrNot();
  });
  NAT_LoopBack_ConfigChangedLog.subscribe((val) => {
    NAT_loopback_changedValues = val;
    JudgeChangedOrNot();
  });
  NAT_VC_ConfigChangedLog.subscribe((val) => {
    NAT_virtualComputer_changedValues = val;
    JudgeChangedOrNot();
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
    NAT_virtualServer_changedValues = val;
    JudgeChangedOrNot();
  });
  NAT_Dmz_ConfigChangedLog.subscribe((val) => {
    NAT_dmz_changedValues = val;
    JudgeChangedOrNot();
  });
  Firewall_General_ConfigChangedLog.subscribe((val) => {
    Firewall_general_changedValues = val;
    JudgeChangedOrNot();
  });
  Firewall_IPFilter_ConfigChangedLog.subscribe((val) => {
    Firewall_ipfilter_changedValues = val;
    JudgeChangedOrNot();
  });
  Firewall_MACFilter_ConfigChangedLog.subscribe((val) => {
    Firewall_macfilter_changedValues = val;
    JudgeChangedOrNot();
  });
  StaticRouteConfigChangedLog.subscribe((val) => {
    staticR_changedValues = val;
    JudgeChangedOrNot();
  });
  MaintenanceConfigChangedLog.subscribe((val) => {
    maintenance_changedValues = val;
    JudgeChangedOrNot();
  });
  ConfigurationP2EConfigChangedLog.subscribe((val) => {
    configuration_p2e_changedValues = val;
    JudgeChangedOrNot();
  });
  OperationConfigChangedLog.subscribe((val) => {
    operation_changedValues = val;
    JudgeChangedOrNot();
  });
  DockerConfigChangedLog.subscribe((val) => {
    docker_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_PORT_SWITCH_ConfigChangedLog.subscribe((val) => {
    port_switch_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe((val) => {
    cwan1_basic_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe((val) => {
    cwan1_advanced_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe((val) => {
    cwan1_simpolicy_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_CWAN1_GLink_ConfigChangedLog.subscribe((val) => {
    cwan1_glink_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_EWAN1_Basic_ConfigChangedLog.subscribe((val) => {
    ewan1_basic_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe((val) => {
    ewan1_ewlap_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_RedundancyPolicy_ConfigChangedLog.subscribe((val) => {
    redundancy_policy_changedValues = val;
    JudgeChangedOrNot();
  });
  WAN_FareSavingPolicy_ConfigChangedLog.subscribe((val) => {
    faresaving_policy_changedValues = val;
    JudgeChangedOrNot();
  });
  IPsec_Responder_Conn_ConfigChangedLog.subscribe((val) => {
    responder_conn_changedValues = val;
    JudgeChangedOrNot();
  });
  IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe((val) => {
    initiator_conn_general_changedValues = val;
    JudgeChangedOrNot();
  });
  IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe((val) => {
    initiator_conn_subnet_changedValues = val;
    JudgeChangedOrNot();
  });
  IPsec_Basic_ConfigChangedLog.subscribe((val) => {
    basic_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_psk_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Client_Advanced_PFW_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_pfw_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_rna_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_fo_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Client_Conn_ConfigChangedLog.subscribe((val) => {
    openvpn_client_conn_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe((val) => {
    openvpn_server_advanced_ccd_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
    openvpn_server_advanced_psk_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Server_Advanced_PFW_ConfigChangedLog.subscribe((val) => {
    openvpn_server_advanced_pfw_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Server_Conn_ConfigChangedLog.subscribe((val) => {
    openvpn_server_conn_changedValues = val;
    JudgeChangedOrNot();
  });
  OpenVPN_Basic_ConfigChangedLog.subscribe((val) => {
    openvpn_basic_changedValues = val;
    JudgeChangedOrNot();
  });
  GenericMQTTConfigChangedLog.subscribe((val) => {
    generic_mqtt_changedValues = val;
    JudgeChangedOrNot();
  });
  AWSIoTcoreConfigChangedLog.subscribe((val) => {
    awsIoT_core_changedValues = val;
    JudgeChangedOrNot();
  });
  AzHub_ConfigChangedLog.subscribe((val) => {
    azhub_changedValues = val;
    JudgeChangedOrNot();
  });
  AzHubDPS_ConfigChangedLog.subscribe((val) => {
    azhubdps_changedValues = val;
    JudgeChangedOrNot();
  });
  AzCentral_ConfigChangedLog.subscribe((val) => {
    azcentral_changedValues = val;
    JudgeChangedOrNot();
  });
  RemoteServiceConfigMqttChangedLog.subscribe((val) => {
    remote_service_mqtt_changedValues = val;
    JudgeChangedOrNot();
  });
  RemoteServiceConfigRestfulChangedLog.subscribe((val) => {
    remote_service_restful_changedValues = val;
    JudgeChangedOrNot();
  });
  RemoteServiceConfigRemoteControlChangedLog.subscribe((val) => {
    remote_service_remote_control_changedValues = val;
    JudgeChangedOrNot();
  });
  PortConnection_LAN_ConfigChangedLog.subscribe((val) => {
    port_connection_lan_changedValues = val;
    JudgeChangedOrNot();
  });
  PortConnection_COM_ConfigChangedLog.subscribe((val) => {
    port_connection_com_changedValues = val;
    JudgeChangedOrNot();
  });
  PortConnection_Transparent_ConfigChangedLog.subscribe((val) => {
    port_connection_transparent_changedValues = val;
    JudgeChangedOrNot();
  });
  Certificate_Settings_ConfigChangedLog.subscribe((val) => {
    certificate_settings_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusGateway_TtR_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_TtR_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusGateway_RtT_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_RtT_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusGateway_RtR_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_RtR_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusGateway_TtT_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_TtT_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusDataModel_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_data_model_slave_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusTag_ConfigChangedLog.subscribe((val) => {
    modbus_tag_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusTCP_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_tcp_slave_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe((val) => {
    modbus_tcp_master_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusRTU_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_rtu_slave_changedValues = val;
    JudgeChangedOrNot();
  });
  ModbusRTU_Master_ConfigChangedLog.subscribe((val) => {
    modbus_rtu_master_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
    sdata_logger_general_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
    sdata_logger_proxy_edge_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe((val) => {
    sdata_logger_proxy_cloud_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_ProxyMode_Topic_ConfigChangedLog.subscribe((val) => {
    sdata_logger_proxy_topic_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
    sdata_logger_monitor_edge_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
    sdata_logger_monitor_cloud_changedValues = val;
    JudgeChangedOrNot();
  });
  SDatalogger_MonitorMode_Topic_ConfigChangedLog.subscribe((val) => {
    sdata_logger_monitor_topic_changedValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_General_ConfigChangedLog.subscribe((val) => {
    event_engine_general_changedValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_Rule_ConfigChangedLog.subscribe((val) => {
    event_engine_rule_changedValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerSMS_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_sms_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerDI_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_di_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerModbus_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_modbus_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_tcpmsg_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_mqtt_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerPING_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_ping_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_TriggerRSSI_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_rssi_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionSMS_ConfigChangedLog.subscribe((val) => {
    event_engine_action_sms_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionEmail_ConfigChangedLog.subscribe((val) => {
    event_engine_action_email_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionDO_ConfigChangedLog.subscribe((val) => {
    event_engine_action_do_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionModbus_ConfigChangedLog.subscribe((val) => {
    event_engine_action_modbus_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe((val) => {
    event_engine_action_tcpmsg_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionMQTT_ConfigChangedLog.subscribe((val) => {
    event_engine_action_mqtt_changeValues = val;
    JudgeChangedOrNot();
  });
  EventEngine_ActionLINE_ConfigChangedLog.subscribe((val) => {
    event_engine_action_line_changeValues = val;
    JudgeChangedOrNot();
  });
  sessionidG.subscribe((val) => {
  });
  dashboadData.subscribe((val) => {
  });
  VPNdashboad.subscribe((val) => {
  });
  enableDataTagEnginePROall.subscribe((val) => {
  });
  const topMenuList = [
    { href: "/dashboard", id: 0 },
    { href: "/apply", id: 1 },
    { href: "/logout", id: 2 }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    activeUrl = $page.url.pathname;
    $$rendered = `${validate_component(Responsive, "Responsive").$$render($$result, {}, {}, {})}
${validate_component(Side, "Side").$$render(
      $$result,
      {
        logo,
        logoClass,
        siteName,
        siteClass,
        headerClass,
        buttonClass,
        hamburgerClass,
        topDiv,
        topMenuDiv,
        topul,
        asideClass,
        spanClass,
        transitionParams,
        svg0background,
        topMenus: topMenuList
      },
      {},
      {
        default: () => {
          return `${validate_component(Hamburger$1, "Hamburger").$$render(
            $$result,
            { open },
            {
              open: ($$value) => {
                open = $$value;
                $$settled = false;
              }
            },
            {}
          )}

${open ? `${validate_component(Nav, "Nav").$$render($$result, { navClass, navDivClass }, {}, {
            default: () => {
              return `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(SidebarItem, "SidebarItem").$$render(
                            $$result,
                            {
                              label: "Dashboard",
                              href: "/dashboard",
                              active: activeUrl === "/dashboard"
                            },
                            {},
                            {
                              icon: () => {
                                return `<svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-green-500 mr-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
                              }
                            }
                          )}
${``}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}` : ``}`;
        }
      }
    )}

${open ? `<main class="${"dark:text-white"}" style="${"padding-top: 115px;padding-left: 286px;padding-right: 10px;"}">${slots.default ? slots.default({}) : ``}</main>` : `<main class="${"dark:text-white"}" style="${"padding-left: 48px;padding-top: 115px;padding-right: 10px;"}">${slots.default ? slots.default({}) : ``}</main>`}

${$$result.head += `<!-- HEAD_svelte-1hjx5sm_START -->${$$result.title = `<title>Etherwan</title>`, ""}<meta name="${"description"}" content="${"Flowbite-Svelte"}"><!-- HEAD_svelte-1hjx5sm_END -->`, ""}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  _layout as default
};
