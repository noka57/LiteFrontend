import { writable } from 'svelte/store';

export const dashboadData= writable("");


export const eventEngineConfig=writable("");
export const sdataLoggerConfig=writable("");
export const certificateConfig=writable("");
export const modbusConfig= writable("");
export const portConnectionConfig=writable("");
export const remoteServiceConfig=writable("");
export const genericMQTTConfig= writable("");
export const openvpnConfig= writable("");
export const ipsecConfig= writable("");
export const maintenanceConfig = writable("");
export const operationConfig = writable("");
export const dockerConfig = writable("");
export const staticrouteConfig = writable("");
export const firewallConfig = writable("");
export const natConfig=writable("");
export const lanConfig=writable("");
export const wanConfig=writable("");

export const EventEngine_TriggerTCPMsg_ConfigChangedLog=writable("");
export const EventEngine_TriggerModbus_ConfigChangedLog=writable("");
export const EventEngine_TriggerDI_ConfigChangedLog=writable("");
export const EventEngine_TriggerSMS_ConfigChangedLog=writable("");
export const EventEngine_General_ConfigChangedLog=writable("");
export const ChangedEventEngineConfig=writable("");

export const SDatalogger_MonitorMode_Cloud_ConfigChangedLog=writable("");
export const SDatalogger_MonitorMode_Edge_ConfigChangedLog=writable("");
export const SDatalogger_ProxyMode_Cloud_ConfigChangedLog=writable("");
export const SDatalogger_ProxyMode_Edge_ConfigChangedLog=writable("");
export const SDatalogger_General_ConfigChangedLog=writable("");
export const ChangedSDataLoggerConfig=writable("");

export const Certificate_Settings_ConfigChangedLog=writable("");
export const Certificate_CRL_ConfigChangedLog=writable("");
export const ChangedCertificateConfig=writable("");

export const ModbusGateway_TtR_ConfigChangedLog=writable("");
export const ModbusGateway_RtT_ConfigChangedLog=writable("");
export const ModbusGateway_RtR_ConfigChangedLog=writable("");
export const ModbusGateway_TtT_ConfigChangedLog=writable("");
export const ModbusVariable_Slave_ConfigChangedLog=writable("");
export const ModbusVariable_Master_ConfigChangedLog=writable("");
export const ModbusTCP_Slave_ConfigChangedLog=writable("");
export const ModbusTCP_Master_ConfigChangedLog=writable("");
export const ModbusRTU_Slave_ConfigChangedLog=writable("");
export const ModbusRTU_Master_ConfigChangedLog=writable("");
export const ChangedModbusConfig=writable("");

export const PortConnection_LAN_ConfigChangedLog=writable("");
export const PortConnection_COM_ConfigChangedLog=writable("");
export const ChangedPortConnectionConfig=writable("");


export const RemoteServiceConfigChangedLog=writable("");
export const ChangedRemoteServiceConfig=writable("");

export const GenericMQTTConfigChangedLog=writable("");
export const ChangedGenericMQTTConfig=writable("");

export const OpenVPN_Client_Advanced_FO_ConfigChangedLog=writable("");
export const OpenVPN_Client_Advanced_RNA_ConfigChangedLog=writable("");
export const OpenVPN_Client_Advanced_PSK_ConfigChangedLog=writable("");
export const OpenVPN_Client_Conn_ConfigChangedLog=writable("");
export const OpenVPN_Server_Advanced_CCD_ConfigChangedLog=writable("");
export const OpenVPN_Server_Advanced_PSK_ConfigChangedLog=writable("");
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