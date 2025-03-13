import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape, o as each } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7d3f7bdf.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { ipsecConfig, ChangedIPsecConfig, openvpnConfig, ChangedOpenVPNConfig, wanConfig, ChangedWANConfig, natConfig, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, ChangedNATConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-3f2c96ee.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Nat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModalPFW = false;
  let newformModalPFW = false;
  let port_forwarding_current_index;
  let new_pfw_index;
  let changed_nat_data = {};
  sessionidG.subscribe((val) => {
  });
  let saved_changed_openvpn_data = "";
  let saved_changed_wan_data = "";
  let saved_changed_ipsec_data = "";
  ipsecConfig.subscribe((val) => {
  });
  ChangedIPsecConfig.subscribe((val) => {
    saved_changed_ipsec_data = val;
  });
  openvpnConfig.subscribe((val) => {
  });
  ChangedOpenVPNConfig.subscribe((val) => {
    saved_changed_openvpn_data = val;
  });
  wanConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
    saved_changed_wan_data = val;
  });
  natConfig.subscribe((val) => {
  });
  NAT_LoopBack_ConfigChangedLog.subscribe((val) => {
  });
  NAT_VC_ConfigChangedLog.subscribe((val) => {
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
  });
  NAT_Dmz_ConfigChangedLog.subscribe((val) => {
  });
  ChangedNATConfig.subscribe((val) => {
  });
  let newPFW_Item = [
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": false,
      "delete": false,
      "incomingIf": 0,
      "incomingTun": "",
      "incomingTunAliasName": "",
      "incomingIPsec": "",
      "incomingIPsecAliasName": "",
      "incomingSrcIp": 0,
      "incomingSrcIpUserDefined": "",
      "forwardingIf": 0,
      "forwardingTun": "",
      "forwardingIPsec": "",
      "forwardingIPsecAliasName": "",
      "redirectIp": 0,
      "redirectIpUserDefined": "",
      "protocol": 0,
      "incomingDstPort": 0,
      "incomingDstPortRange": { "start": 22222, "end": 22225 },
      "redirectPort": 0,
      "redirectPortRange": { "start": 22222, "end": 22225 }
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Port Forwarding" }, {}, {
          default: () => {
            return `<label>${``}
  Enable Port Forwarding
</label>
<p class="${"mt-10"}"></p>
  ${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Enable`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `No`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Incoming Interface`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Forwarding Interface`;
                      }
                    })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Protocol`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Incoming Destination Port`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Redirect Port`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${``}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
  
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                      }
                    })}


    <tr><td></td>
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "xl",
                        class: "w-full",
                        autoclose: true,
                        open: newformModalPFW
                      },
                      {
                        open: ($$value) => {
                          newformModalPFW = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", newPFW_Item[new_pfw_index].enable, 1)}>
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Incoming Interface</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}
${saved_changed_wan_data != "" && saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Ethernet WAN`;
                              }
                            }
                          )}` : ``}  
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN`;
                              }
                            }
                          )}
${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 ? `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: ${escape(newPFW_Item[new_pfw_index].incomingTunAliasName)}`;
                              }
                            }
                          )}` : `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: `;
                              }
                            }
                          )}

${newPFW_Item[new_pfw_index].incomingIf == 3 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_openvpn_data.config.vpn_openvpn_client_connection, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>`}` : ``}`}` : ``}

${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 ? `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 4,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: ${escape(newPFW_Item[new_pfw_index].incomingIPsecAliasName)}`;
                              }
                            }
                          )}` : `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 4,
                              group: newPFW_Item[new_pfw_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: `;
                              }
                            }
                          )}

${newPFW_Item[new_pfw_index].incomingIf == 4 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>`}` : ``}`}` : ``}</div></td></tr>




 <tr><td class="${"w-60"}"><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Forwarding Interface</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${newPFW_Item[new_pfw_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `LAN`;
                            }
                          })}`}

${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 ? `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${newPFW_Item[new_pfw_index].incomingIf == 1 || newPFW_Item[new_pfw_index].incomingIf == 2 || newPFW_Item[new_pfw_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `OpenVPN :${escape(newPFW_Item[new_pfw_index].forwardingTunAliasName)}`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: ${escape(newPFW_Item[new_pfw_index].forwardingTunAliasName)}`;
                              }
                            }
                          )}`}` : `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${newPFW_Item[new_pfw_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `OpenVPN :`;
                            }
                          })}
<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: `;
                              }
                            }
                          )}
  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_openvpn_data.config.vpn_openvpn_client_connection, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>`}` : ``}`}` : ``}


${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 ? `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${newPFW_Item[new_pfw_index].incomingIf == 1 || newPFW_Item[new_pfw_index].incomingIf == 2 || newPFW_Item[new_pfw_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `IPsec :${escape(newPFW_Item[new_pfw_index].forwardingIPsecAliasName)}`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec :${escape(newPFW_Item[new_pfw_index].forwardingIPsecAliasName)}`;
                              }
                            }
                          )}`}` : `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${newPFW_Item[new_pfw_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 2, disabled: true }, {}, {
                            default: () => {
                              return `IPsec :`;
                            }
                          })}
<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: `;
                              }
                            }
                          )}
  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>`}` : ``}`}` : ``}</div></td></tr>





<tr><td class="${"w-10"}"><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Incoming Source IP</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-4"}">${newPFW_Item[new_pfw_index].forwardingIf != -1 && (newPFW_Item[new_pfw_index].incomingIf == 0 || newPFW_Item[new_pfw_index].incomingIf == 3 || newPFW_Item[new_pfw_index].incomingIf == 4) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}

${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 && newPFW_Item[new_pfw_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 && newPFW_Item[new_pfw_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 && newPFW_Item[new_pfw_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 && newPFW_Item[new_pfw_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}` : `${newPFW_Item[new_pfw_index].incomingIf == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : ``}`}`}`}`}



${newPFW_Item[new_pfw_index].incomingSrcIp == 1 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].incomingSrcIpUserDefined, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}` : `${newPFW_Item[new_pfw_index].forwardingIf != -1 && (newPFW_Item[new_pfw_index].incomingIf == 2 || newPFW_Item[new_pfw_index].incomingIf == 1) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Any`;
                            }
                          })}`}
      ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td>
      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td></tr>

 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `ALL`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `UDP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP &amp; UDP`;
                              }
                            }
                          )}</div></td></tr>



 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Incoming Destination Port</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}

${newPFW_Item[new_pfw_index].protocol != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}
${newPFW_Item[new_pfw_index].incomingDstPort == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].incomingDstPortRange.start, 0)}>`}


  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}
${newPFW_Item[new_pfw_index].incomingDstPort == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].incomingDstPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].incomingDstPortRange.end, 0)}>`}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Single Port`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>
  ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `Port Range`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td></tr>








<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Redirect IP</p></td><td class="${"pl-5 pt-5 w-10"}" colspan="${"2"}"><div class="${"flex gap-4"}">${newPFW_Item[new_pfw_index].forwardingIf == -1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Any`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}`}

${newPFW_Item[new_pfw_index].forwardingIf == 0 && (newPFW_Item[new_pfw_index].incomingIf == 1 || newPFW_Item[new_pfw_index].incomingIf == 2 || newPFW_Item[new_pfw_index].incomingIf == 3 || newPFW_Item[new_pfw_index].incomingIf == 4) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectIpUserDefined, 0)}>` : `${newPFW_Item[new_pfw_index].forwardingIf == -1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `${newPFW_Item[new_pfw_index].forwardingIf == 1 ? `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectIpUserDefined, 0)}>` : `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : ``}`}` : `${newPFW_Item[new_pfw_index].forwardingIf == 2 ? `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectIpUserDefined, 0)}>` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : ``}`}` : ``}`}`}`}</div></td>


      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td></tr>



 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Redirect Port</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newPFW_Item[new_pfw_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Keep Origin Port`;
                              }
                            }
                          )}

${newPFW_Item[new_pfw_index].protocol != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}
${newPFW_Item[new_pfw_index].redirectPort == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectPortRange.start, 0)}>`}


  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}
${newPFW_Item[new_pfw_index].redirectPort == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].redirectPortRange.end, 0)}>`}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Single Port`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>
  ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `Port Range`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td></tr>


      <tr><td></td>
    <td></td>
    <td></td>
    <td></td> 
    <td></td>
    <td></td> 

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Add`;
                            }
                          })}</td></tr></table></form>`;
                        }
                      }
                    )}

${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "xl",
                        class: "w-full",
                        permanent: true,
                        open: formModalPFW
                      },
                      {
                        open: ($$value) => {
                          formModalPFW = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>


<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Incoming Interface</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}
${saved_changed_wan_data != "" && saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Ethernet WAN`;
                              }
                            }
                          )}` : ``}  
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN`;
                              }
                            }
                          )}
${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 ? `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: ${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingTunAliasName)}`;
                              }
                            }
                          )}` : `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: `;
                              }
                            }
                          )}

${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_openvpn_data.config.vpn_openvpn_client_connection, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>`}` : ``}`}` : ``}

${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 ? `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 4,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: ${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIPsecAliasName)}`;
                              }
                            }
                          )}` : `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 4,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: `;
                              }
                            }
                          )}

${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>`}` : ``}`}` : ``}</div></td></tr>




 <tr><td class="${"w-60"}"><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Forwarding Interface</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `LAN`;
                            }
                          })}`}

${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 ? `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `OpenVPN :${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingTunAliasName)}`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: ${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingTunAliasName)}`;
                              }
                            }
                          )}`}` : `${saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `OpenVPN :`;
                            }
                          })}
<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OpenVPN: `;
                              }
                            }
                          )}
  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_openvpn_data.config.vpn_openvpn_client_connection, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>`}` : ``}`}` : ``}


${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 ? `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `IPsec :${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIPsecAliasName)}`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec :${escape(changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIPsecAliasName)}`;
                              }
                            }
                          )}`}` : `${saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf != 0 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 2, disabled: true }, {}, {
                            default: () => {
                              return `IPsec :`;
                            }
                          })}
<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option value="${""}" disabled>Choose ...</option></select>` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `IPsec: `;
                              }
                            }
                          )}
  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-60"}"><option value="${""}" disabled>Choose ...</option>${each(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn, (client_conn, index) => {
                            return `<option${add_attribute("value", client_conn.name, 0)}>${escape(client_conn.name)}</option>`;
                          })}</select>`}` : ``}`}` : ``}</div></td></tr>





<tr><td class="${"w-10"}"><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Incoming Source IP</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-4"}">${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf != -1 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 0 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}

${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 && changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}` : `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}` : ``}`}`}`}`}



${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp == 1 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIpUserDefined, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}` : `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf != -1 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 1) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingSrcIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Any`;
                            }
                          })}`}
      ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td>
      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td></tr>

 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `ALL`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `UDP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 3,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP &amp; UDP`;
                              }
                            }
                          )}</div></td></tr>



 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Incoming Destination Port</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}

${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}
${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.start, 0)}>`}


  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}
${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPort == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingDstPortRange.end, 0)}>`}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Single Port`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>
  ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `Port Range`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td></tr>








<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Redirect IP</p></td><td class="${"pl-5 pt-5 w-10"}" colspan="${"2"}"><div class="${"flex gap-4"}">${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == -1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Any`;
                            }
                          })}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}`}

${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 0 && (changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 1 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 2 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 3 || changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].incomingIf == 4) ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined, 0)}>` : `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == -1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 1 ? `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined, 0)}>` : `${saved_changed_openvpn_data != "" && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1 && saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : ``}`}` : `${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].forwardingIf == 2 ? `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIp = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `User Define :`;
                              }
                            }
                          )}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectIpUserDefined, 0)}>` : `${saved_changed_ipsec_data != "" && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1 && saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1 ? `${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `User Define :`;
                            }
                          })}
<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : ``}`}` : ``}`}`}`}</div></td>


      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>

      <td class="${"pl-5 pt-4"}"></td>


      <td class="${"pl-5 pt-4"}"></td></tr>



 <tr><td><p class="${"pl-5 pt-4 text-lg font-light text-right"}">Redirect Port</p></td>

    <td class="${"pl-5 pt-4"}" colspan="${"4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Keep Origin Port`;
                              }
                            }
                          )}

${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].protocol != 0 ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}
${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.start, 0)}>`}


  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort
                            },
                            {
                              group: ($$value) => {
                                changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}
${changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPort == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_nat_data.config.networking_port_forwarding.list[port_forwarding_current_index].redirectPortRange.end, 0)}>`}` : `${validate_component(Radio, "Radio").$$render($$result, { value: 0, disabled: true }, {}, {
                            default: () => {
                              return `Single Port`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>
  ${validate_component(Radio, "Radio").$$render($$result, { value: 1, disabled: true }, {}, {
                            default: () => {
                              return `Port Range`;
                            }
                          })}
  <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td></tr>


      <tr><td></td>
    <td></td>
    <td></td>
    <td></td> 
    <td></td>
    <td></td> 


    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Modify`;
                            }
                          })}</td></tr></table></form>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DMZ" }, {}, {
          default: () => {
            return `<label>${``}
  Enable DMZ
</label>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


<tr>${``}</tr>


      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>


    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Nat as default
};
