import { writable } from 'svelte/store';

export const dashboadData= writable("");

export const maintenanceConfig = writable("");
export const operationConfig = writable("");
export const dockerConfig = writable("");
export const dreamsConfig = writable("");
export const staticrouteConfig = writable("");
export const firewallConfig = writable("");
export const natConfig=writable("");
export const lanConfig=writable("");
export const wanConfig=writable("");

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