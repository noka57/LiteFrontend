import { writable } from 'svelte/store';

export const dashboadData= writable("");

export const openvpnConfig=writable("");
export const ipsecConfig= writable("");
export const maintenanceConfig = writable("");
export const operationConfig = writable("");
export const dockerConfig = writable("");
export const dreamsConfig = writable("");
export const staticrouteConfig = writable("");
export const firewallConfig = writable("");
export const natConfig=writable("");
export const lanConfig=writable("");
export const wanConfig=writable("");

export const OpenVPN_Client_Advanced_ConfigChangedLog=writable("");
export const OpenVPN_Client_Conn_ConfigChangedLog=writable("");
export const OpenVPN_Server_Advanced_ConfigChangedLog=writable("");
export const OpenVPN_Server_Conn_ConfigChangedLog=writable("");
export const OpenVPN_Basic_ConfigChangedLog=writable("");
export const ChangedOpenVPNConfig=writable("");

export const IPsec_Responder_Conn_ConfigChangedLog=writable("");
export const IPsec_Initiator_Conn_General_ConfigChangedLog=writable("");
export const IPsec_Initiator_Conn_Subnet_ConfigChangedLog=writable("");
export const IPsec_Basic_ConfigChangedLog=writable("");
export const ChangedIPsecConfig=writable("");


export const LanConfigChangedLog=writable("");
export const ChangedLANConfig=writable("");


export const NAT_LoopBack_ConfigChangedLog=writable("");
export const NAT_VS_ConfigChangedLog=writable("");
export const NAT_VC_ConfigChangedLog=writable("");
export const NAT_Dmz_ConfigChangedLog=writable("");
export const ChangedNATConfig=writable("");

export const Firewall_General_ConfigChangedLog=writable("");
export const Firewall_IPFilter_ConfigChangedLog=writable("");
export const Firewall_MACFilter_ConfigChangedLog=writable("");
export const ChangedFirewallConfig=writable("");

export const StaticRouteConfigChangedLog=writable("");
export const ChangedStaticRouteConfig=writable("");

export const MaintenanceConfigChangedLog=writable("");
export const ChangedMaintenanceConfig=writable("");

export const OperationConfigChangedLog=writable("");
export const ChangedOperationConfig=writable("");

export const DockerConfigChangedLog=writable("");
export const ChangedDockerConfig=writable("");

export const Dreams_Serial_ConfigChangedLog=writable("");
export const Dreams_Modbus_S0_ConfigChangedLog=writable("");
export const Dreams_Modbus_S1_ConfigChangedLog=writable("");
export const Dreams_Modbus_Option_ConfigChangedLog=writable("");
export const Dreams_DNP3_ConfigChangedLog=writable("");
export const Dreams_Restful_ConfigChangedLog=writable("");
export const Dreams_General_ConfigChangedLog=writable("");
export const ChangedDreamsConfig=writable("");


export const WAN_CWAN1_BASIC_ConfigChangedLog=writable("");
export const WAN_CWAN1_Advanced_ConfigChangedLog=writable("");
export const WAN_CWAN1_SimPolicy_ConfigChangedLog=writable("");
export const WAN_CWAN1_GLink_ConfigChangedLog=writable("");

export const WAN_EWAN1_Basic_ConfigChangedLog=writable("");
export const WAN_EWAN1_EWLAP_ConfigChangedLog=writable("");
export const WAN_RedundancyPolicy_ConfigChangedLog=writable("");
export const WAN_FareSavingPolicy_ConfigChangedLog=writable("");

export const ChangedWANConfig=writable("");
export const LastestReadableWANConfig=writable("");