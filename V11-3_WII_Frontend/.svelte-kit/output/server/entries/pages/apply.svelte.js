import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, p as is_void, v as validate_component, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-337e42f7.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ChangedLANConfig, ChangedNATConfig, ChangedFirewallConfig, ChangedStaticRouteConfig, ChangedMaintenanceConfig, ChangedOperationConfig, ChangedDockerConfig, ChangedWANConfig, ChangedIPsecConfig, ChangedOpenVPNConfig, ChangedGenericMQTTConfig, ChangedRemoteServiceConfig, ChangedPortConnectionConfig, ChangedCertificateConfig, ChangedModbusConfig, ChangedSDataLoggerConfig, ChangedEventEngineConfig, EventEngine_General_ConfigChangedLog, EventEngine_TriggerSMS_ConfigChangedLog, EventEngine_TriggerDI_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_TriggerTCPMsg_ConfigChangedLog, EventEngine_TriggerMQTT_ConfigChangedLog, EventEngine_ActionSMS_ConfigChangedLog, EventEngine_ActionEmail_ConfigChangedLog, EventEngine_ActionDO_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, EventEngine_ActionTCPMsg_ConfigChangedLog, EventEngine_ActionMQTT_ConfigChangedLog, EventEngine_ActionLINE_ConfigChangedLog, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, Certificate_Settings_ConfigChangedLog, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusVariable_Slave_ConfigChangedLog, ModbusVariable_Master_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, PortConnection_LAN_ConfigChangedLog, PortConnection_COM_ConfigChangedLog, RemoteServiceConfigChangedLog, GenericMQTTConfigChangedLog, OpenVPN_Client_Advanced_PSK_ConfigChangedLog, OpenVPN_Client_Advanced_RNA_ConfigChangedLog, OpenVPN_Client_Advanced_FO_ConfigChangedLog, OpenVPN_Client_Conn_ConfigChangedLog, OpenVPN_Server_Advanced_CCD_ConfigChangedLog, OpenVPN_Server_Advanced_PSK_ConfigChangedLog, OpenVPN_Server_Conn_ConfigChangedLog, OpenVPN_Basic_ConfigChangedLog, IPsec_Responder_Conn_ConfigChangedLog, IPsec_Initiator_Conn_General_ConfigChangedLog, IPsec_Initiator_Conn_Subnet_ConfigChangedLog, IPsec_Basic_ConfigChangedLog, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog, LanConfigChangedLog, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, Firewall_General_ConfigChangedLog, Firewall_IPFilter_ConfigChangedLog, Firewall_MACFilter_ConfigChangedLog, StaticRouteConfigChangedLog, MaintenanceConfigChangedLog, OperationConfigChangedLog, DockerConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color: color2 = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
    $$bindings.color(color2);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(classNames(customSize ? customSize : textSizes[tag], color2, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = classNames(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position", "color", "olClass", "ulClass", "dlClass"]);
  let { tag = "ul" } = $$props;
  let { list = "disc" } = $$props;
  let { position = "inside" } = $$props;
  let { color: color2 = "text-gray-500 dark:text-gray-400" } = $$props;
  let { olClass = "list-decimal list-inside" } = $$props;
  let { ulClass = "max-w-md" } = $$props;
  let { dlClass = "max-w-md divide-y divide-gray-200  dark:divide-gray-700" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = classNames(color2, tag === "ul" ? ulClass : olClass, lists[list], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
    $$bindings.color(color2);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.dlClass === void 0 && $$bindings.dlClass && dlClass !== void 0)
    $$bindings.dlClass(dlClass);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
let color = "text-blue-600 dark:text-gray-400";
const Apply = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let LANchangedValues = [];
  let NAT_loopback_changedValues = [];
  let NAT_virtualServer_changedValues = [];
  let NAT_virtualComputer_changedValues = [];
  let NAT_dmz_changedValues = [];
  let Firewall_general_changedValues = [];
  let Firewall_ipfilter_changedValues = [];
  let Firewall_macfilter_changedValues = [];
  let staticR_changedValues = [];
  let maintenance_changedValues = [];
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
  let basic_changedValues = [];
  let responder_conn_changedValues = [];
  let initiator_conn_general_changedValues = [];
  let initiator_conn_subnet_changedValues = [];
  let openvpn_basic_changedValues = [];
  let openvpn_server_conn_changedValues = [];
  let openvpn_client_conn_changedValues = [];
  let openvpn_server_advanced_ccd_changedValues = [];
  let openvpn_server_advanced_psk_changedValues = [];
  let openvpn_client_advanced_psk_changedValues = [];
  let openvpn_client_advanced_rna_changedValues = [];
  let openvpn_client_advanced_fo_changedValues = [];
  let generic_mqtt_changedValues = [];
  let remote_service_changedValues = [];
  let port_connection_lan_changedValues = [];
  let port_connection_com_changedValues = [];
  let certificate_settings_changedValues = [];
  let modbus_gateway_TtR_changedValues = [];
  let modbus_gateway_RtT_changedValues = [];
  let modbus_gateway_RtR_changedValues = [];
  let modbus_gateway_TtT_changedValues = [];
  let modbus_variable_master_changedValues = [];
  let modbus_variable_slave_changedValues = [];
  let modbus_tcp_master_changedValues = [];
  let modbus_tcp_slave_changedValues = [];
  let modbus_rtu_master_changedValues = [];
  let modbus_rtu_slave_changedValues = [];
  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];
  let event_engine_general_changedValues = [];
  let event_engine_trigger_sms_changeValues = [];
  let event_engine_trigger_di_changeValues = [];
  let event_engine_trigger_modbus_changeValues = [];
  let event_engine_trigger_tcpmsg_changeValues = [];
  let event_engine_trigger_mqtt_changeValues = [];
  let event_engine_action_sms_changeValues = [];
  let event_engine_action_email_changeValues = [];
  let event_engine_action_do_changeValues = [];
  let event_engine_action_modbus_changeValues = [];
  let event_engine_action_tcpmsg_changeValues = [];
  let event_engine_action_mqtt_changeValues = [];
  let event_engine_action_line_changeValues = [];
  sessionidG.subscribe((val) => {
  });
  ChangedLANConfig.subscribe((val) => {
  });
  ChangedNATConfig.subscribe((val) => {
  });
  ChangedFirewallConfig.subscribe((val) => {
  });
  ChangedStaticRouteConfig.subscribe((val) => {
  });
  ChangedMaintenanceConfig.subscribe((val) => {
  });
  ChangedOperationConfig.subscribe((val) => {
  });
  ChangedDockerConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
  });
  ChangedIPsecConfig.subscribe((val) => {
  });
  ChangedOpenVPNConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  ChangedRemoteServiceConfig.subscribe((val) => {
  });
  ChangedPortConnectionConfig.subscribe((val) => {
  });
  ChangedCertificateConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  ChangedEventEngineConfig.subscribe((val) => {
  });
  EventEngine_General_ConfigChangedLog.subscribe((val) => {
    event_engine_general_changedValues = val;
  });
  EventEngine_TriggerSMS_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_sms_changeValues = val;
  });
  EventEngine_TriggerDI_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_di_changeValues = val;
  });
  EventEngine_TriggerModbus_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_modbus_changeValues = val;
  });
  EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_tcpmsg_changeValues = val;
  });
  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe((val) => {
    event_engine_trigger_mqtt_changeValues = val;
  });
  EventEngine_ActionSMS_ConfigChangedLog.subscribe((val) => {
    event_engine_action_sms_changeValues = val;
  });
  EventEngine_ActionEmail_ConfigChangedLog.subscribe((val) => {
    event_engine_action_email_changeValues = val;
  });
  EventEngine_ActionDO_ConfigChangedLog.subscribe((val) => {
    event_engine_action_do_changeValues = val;
  });
  EventEngine_ActionModbus_ConfigChangedLog.subscribe((val) => {
    event_engine_action_modbus_changeValues = val;
  });
  EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe((val) => {
    event_engine_action_tcpmsg_changeValues = val;
  });
  EventEngine_ActionMQTT_ConfigChangedLog.subscribe((val) => {
    event_engine_action_mqtt_changeValues = val;
  });
  EventEngine_ActionLINE_ConfigChangedLog.subscribe((val) => {
    event_engine_action_line_changeValues = val;
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
    sdata_logger_general_changedValues = val;
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
    sdata_logger_proxy_edge_changedValues = val;
  });
  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe((val) => {
    sdata_logger_proxy_cloud_changedValues = val;
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
    sdata_logger_monitor_edge_changedValues = val;
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
    sdata_logger_monitor_cloud_changedValues = val;
  });
  Certificate_Settings_ConfigChangedLog.subscribe((val) => {
    certificate_settings_changedValues = val;
  });
  ModbusGateway_TtR_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_TtR_changedValues = val;
  });
  ModbusGateway_RtT_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_RtT_changedValues = val;
  });
  ModbusGateway_RtR_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_RtR_changedValues = val;
  });
  ModbusGateway_TtT_ConfigChangedLog.subscribe((val) => {
    modbus_gateway_TtT_changedValues = val;
  });
  ModbusVariable_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_variable_slave_changedValues = val;
  });
  ModbusVariable_Master_ConfigChangedLog.subscribe((val) => {
    modbus_variable_master_changedValues = val;
  });
  ModbusTCP_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_tcp_slave_changedValues = val;
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe((val) => {
    modbus_tcp_master_changedValues = val;
  });
  ModbusRTU_Slave_ConfigChangedLog.subscribe((val) => {
    modbus_rtu_slave_changedValues = val;
  });
  ModbusRTU_Master_ConfigChangedLog.subscribe((val) => {
    modbus_rtu_master_changedValues = val;
  });
  PortConnection_LAN_ConfigChangedLog.subscribe((val) => {
    port_connection_lan_changedValues = val;
  });
  PortConnection_COM_ConfigChangedLog.subscribe((val) => {
    port_connection_com_changedValues = val;
  });
  RemoteServiceConfigChangedLog.subscribe((val) => {
    remote_service_changedValues = val;
  });
  GenericMQTTConfigChangedLog.subscribe((val) => {
    generic_mqtt_changedValues = val;
  });
  OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_psk_changedValues = val;
  });
  OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_rna_changedValues = val;
  });
  OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe((val) => {
    openvpn_client_advanced_fo_changedValues = val;
  });
  OpenVPN_Client_Conn_ConfigChangedLog.subscribe((val) => {
    openvpn_client_conn_changedValues = val;
  });
  OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe((val) => {
    openvpn_server_advanced_ccd_changedValues = val;
  });
  OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
    openvpn_server_advanced_psk_changedValues = val;
  });
  OpenVPN_Server_Conn_ConfigChangedLog.subscribe((val) => {
    openvpn_server_conn_changedValues = val;
  });
  OpenVPN_Basic_ConfigChangedLog.subscribe((val) => {
    openvpn_basic_changedValues = val;
  });
  IPsec_Responder_Conn_ConfigChangedLog.subscribe((val) => {
    responder_conn_changedValues = val;
  });
  IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe((val) => {
    initiator_conn_general_changedValues = val;
  });
  IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe((val) => {
    initiator_conn_subnet_changedValues = val;
  });
  IPsec_Basic_ConfigChangedLog.subscribe((val) => {
    basic_changedValues = val;
  });
  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe((val) => {
    cwan1_basic_changedValues = val;
  });
  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe((val) => {
    cwan1_advanced_changedValues = val;
  });
  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe((val) => {
    cwan1_simpolicy_changedValues = val;
  });
  WAN_CWAN1_GLink_ConfigChangedLog.subscribe((val) => {
    cwan1_glink_changedValues = val;
  });
  WAN_EWAN1_Basic_ConfigChangedLog.subscribe((val) => {
    ewan1_basic_changedValues = val;
  });
  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe((val) => {
    ewan1_ewlap_changedValues = val;
  });
  WAN_RedundancyPolicy_ConfigChangedLog.subscribe((val) => {
    redundancy_policy_changedValues = val;
  });
  WAN_FareSavingPolicy_ConfigChangedLog.subscribe((val) => {
    faresaving_policy_changedValues = val;
  });
  LanConfigChangedLog.subscribe((val) => {
    LANchangedValues = val;
  });
  NAT_LoopBack_ConfigChangedLog.subscribe((val) => {
    NAT_loopback_changedValues = val;
  });
  NAT_VC_ConfigChangedLog.subscribe((val) => {
    NAT_virtualComputer_changedValues = val;
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
    NAT_virtualServer_changedValues = val;
  });
  NAT_Dmz_ConfigChangedLog.subscribe((val) => {
    NAT_dmz_changedValues = val;
  });
  Firewall_General_ConfigChangedLog.subscribe((val) => {
    Firewall_general_changedValues = val;
  });
  Firewall_IPFilter_ConfigChangedLog.subscribe((val) => {
    Firewall_ipfilter_changedValues = val;
  });
  Firewall_MACFilter_ConfigChangedLog.subscribe((val) => {
    Firewall_macfilter_changedValues = val;
  });
  StaticRouteConfigChangedLog.subscribe((val) => {
    staticR_changedValues = val;
  });
  MaintenanceConfigChangedLog.subscribe((val) => {
    maintenance_changedValues = val;
  });
  OperationConfigChangedLog.subscribe((val) => {
    operation_changedValues = val;
  });
  DockerConfigChangedLog.subscribe((val) => {
    docker_changedValues = val;
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"text-center"}">${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h2",
        customSize: "text-3xl font-extrabold",
        class: "text-center mb-2 font-semibold text-gray-900 dark:text-white"
      },
      {},
      {
        default: () => {
          return `The following configs are changed:`;
        }
      }
    )}
${validate_component(List, "List").$$render(
      $$result,
      {
        tag: "ol",
        color,
        class: "text-2xl space-y-1",
        style: "display: inline-block;text-align: left;"
      },
      {},
      {
        default: () => {
          return `${event_engine_action_line_changeValues.length != 0 || event_engine_action_mqtt_changeValues.length != 0 || event_engine_action_tcpmsg_changeValues.length != 0 || event_engine_action_modbus_changeValues.length != 0 || event_engine_action_do_changeValues.length != 0 || event_engine_action_email_changeValues.length != 0 || event_engine_action_sms_changeValues.length != 0 || event_engine_trigger_mqtt_changeValues.length != 0 || event_engine_trigger_tcpmsg_changeValues.length != 0 || event_engine_trigger_modbus_changeValues.length != 0 || event_engine_trigger_di_changeValues.length != 0 || event_engine_trigger_sms_changeValues.length != 0 || event_engine_general_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Event Engine
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${event_engine_general_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `General
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(event_engine_general_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}


${event_engine_trigger_mqtt_changeValues.length != 0 || event_engine_trigger_tcpmsg_changeValues.length != 0 || event_engine_trigger_modbus_changeValues.length != 0 || event_engine_trigger_di_changeValues.length != 0 || event_engine_trigger_sms_changeValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Trigger Profile
${event_engine_trigger_sms_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `SMS
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_trigger_sms_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_trigger_di_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `DI
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_trigger_di_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_trigger_modbus_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Modbus
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_trigger_modbus_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_trigger_tcpmsg_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Message
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_trigger_tcpmsg_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}


${event_engine_trigger_mqtt_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `MQTT Notification
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_trigger_mqtt_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}` : ``}



${event_engine_action_line_changeValues.length != 0 || event_engine_action_mqtt_changeValues.length != 0 || event_engine_action_tcpmsg_changeValues.length != 0 || event_engine_action_modbus_changeValues.length != 0 || event_engine_action_do_changeValues.length != 0 || event_engine_action_sms_changeValues.length != 0 || event_engine_action_email_changeValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Action Profile

${event_engine_action_sms_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `SMS
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_sms_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_action_email_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Email
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_email_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_action_do_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `DO
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_do_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_action_modbus_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Modbus
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_modbus_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}


${event_engine_action_tcpmsg_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Message
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_tcpmsg_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}

${event_engine_action_mqtt_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `MQTT
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_mqtt_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}


${event_engine_action_line_changeValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Line Notification
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(event_engine_action_line_changeValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}` : ``}`;
                  }
                }
              )}`;
            }
          })}` : ``}




${sdata_logger_general_changedValues.length != 0 || sdata_logger_proxy_edge_changedValues.length != 0 || sdata_logger_proxy_cloud_changedValues.length != 0 || sdata_logger_monitor_edge_changedValues.length != 0 || sdata_logger_monitor_cloud_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Smart Data Logger
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${sdata_logger_general_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `General
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(sdata_logger_general_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}

${sdata_logger_proxy_edge_changedValues.length != 0 || sdata_logger_proxy_cloud_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Proxy Mode
${sdata_logger_proxy_edge_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Edge Data
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(sdata_logger_proxy_edge_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}
${sdata_logger_proxy_cloud_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Cloud Settings
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(sdata_logger_proxy_cloud_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}` : ``}




${sdata_logger_monitor_edge_changedValues.length != 0 || sdata_logger_monitor_cloud_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Monitor Mode

${sdata_logger_monitor_edge_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Edge Data
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(sdata_logger_monitor_edge_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}
${sdata_logger_monitor_cloud_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Cloud Settings
${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(sdata_logger_monitor_cloud_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}` : ``}`;
                  }
                }
              )}`;
            }
          })}` : ``}



${modbus_gateway_TtR_changedValues.length != 0 || modbus_gateway_RtT_changedValues.length != 0 || modbus_gateway_RtR_changedValues.length != 0 || modbus_gateway_TtT_changedValues.length != 0 || modbus_variable_master_changedValues.length != 0 || modbus_variable_slave_changedValues.length != 0 || modbus_tcp_master_changedValues.length != 0 || modbus_tcp_slave_changedValues.length != 0 || modbus_rtu_master_changedValues.length != 0 || modbus_rtu_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Modbus
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${modbus_rtu_master_changedValues.length != 0 || modbus_rtu_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `RTU
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${modbus_rtu_master_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Master
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_rtu_master_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}
${modbus_rtu_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Slave
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_rtu_slave_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}


${modbus_tcp_master_changedValues.length != 0 || modbus_tcp_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `TCP
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${modbus_tcp_master_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Master
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_tcp_master_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}
${modbus_tcp_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Slave
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_tcp_slave_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}


${modbus_variable_master_changedValues.length != 0 || modbus_variable_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Variable
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${modbus_variable_master_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Master
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_variable_master_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}
${modbus_variable_slave_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Slave
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_variable_slave_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}


${modbus_gateway_TtR_changedValues.length != 0 || modbus_gateway_RtT_changedValues.length != 0 || modbus_gateway_RtR_changedValues.length != 0 || modbus_gateway_TtT_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Gateway
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${modbus_gateway_TtR_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `From TCP To RTU
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_gateway_TtR_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}


${modbus_gateway_RtT_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `From RTU To TCP
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_gateway_RtT_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}


${modbus_gateway_RtR_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `From RTU To RTU
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_gateway_RtR_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}


${modbus_gateway_TtT_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                default: () => {
                                  return `From TCP To TCP
 ${validate_component(List, "List").$$render(
                                    $$result,
                                    {
                                      tag: "ol",
                                      class: "pl-5 mt-2 space-y-1 text-green-900"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${each(modbus_gateway_TtT_changedValues, (item) => {
                                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${escape(item)}`;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    }
                                  )}`;
                                }
                              })}` : ``}`;
                            }
                          }
                        )}`;
                      }
                    })}` : ``}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${certificate_settings_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Certificate 
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Check the validity period of certificates and CRLs
 ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(certificate_settings_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${port_connection_lan_changedValues.length != 0 || port_connection_com_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Port Connection
    ${port_connection_lan_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `LAN
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(port_connection_lan_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}


    ${port_connection_com_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `COM
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(port_connection_com_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}

${remote_service_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Remote Service
 ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(remote_service_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}


${generic_mqtt_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Generic MQTT
 ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(generic_mqtt_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${openvpn_basic_changedValues.length != 0 || openvpn_server_conn_changedValues.length != 0 || openvpn_client_conn_changedValues.length != 0 || openvpn_server_advanced_ccd_changedValues.length != 0 || openvpn_server_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_rna_changedValues.length != 0 || openvpn_client_advanced_fo_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `OpenVPN
  ${openvpn_basic_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Basic
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_basic_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${openvpn_server_conn_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Server Connection
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_server_conn_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${openvpn_client_conn_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Client Connection
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_client_conn_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}


	${openvpn_server_advanced_ccd_changedValues.length != 0 || openvpn_server_advanced_psk_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Server Advanced
  	${openvpn_server_advanced_ccd_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_server_advanced_ccd_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}` : ``}

  	${openvpn_server_advanced_psk_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_server_advanced_psk_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${openvpn_client_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_rna_changedValues.length != 0 || openvpn_client_advanced_fo_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Client Advanced
  	${openvpn_client_advanced_psk_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_client_advanced_psk_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}` : ``}

  	${openvpn_client_advanced_rna_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_client_advanced_rna_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}` : ``}

  	${openvpn_client_advanced_fo_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(openvpn_client_advanced_fo_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}` : ``}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}

${basic_changedValues.length != 0 || responder_conn_changedValues.length != 0 || initiator_conn_general_changedValues.length != 0 || initiator_conn_subnet_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `IPsec
 ${basic_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Basic
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(basic_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${responder_conn_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Responder Connection
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(responder_conn_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${initiator_conn_general_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Initiator Connection
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(initiator_conn_general_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}
   ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(initiator_conn_subnet_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}

${cwan1_basic_changedValues.length != 0 || cwan1_advanced_changedValues.length != 0 || cwan1_simpolicy_changedValues.length != 0 || cwan1_glink_changedValues.length != 0 || ewan1_basic_changedValues.length != 0 || ewan1_ewlap_changedValues.length != 0 || redundancy_policy_changedValues.length != 0 || faresaving_policy_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `WAN
 ${cwan1_basic_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Cellular-WAN-1 Basic Settings
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(cwan1_basic_changedValues.length, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${cwan1_advanced_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Cellular-WAN-1 Advanced Settings
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(cwan1_advanced_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${cwan1_simpolicy_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Cellular-WAN-1 SIM Policy
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(cwan1_simpolicy_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${cwan1_glink_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Cellular-WAN-1 LTE Guarantie Link
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(cwan1_glink_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}


	${ewan1_basic_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Ethernet WAN Basic Settings
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(ewan1_basic_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}


	${ewan1_ewlap_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Ethernet WAN EWLAP
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(ewan1_ewlap_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``} 

	${redundancy_policy_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `WAN Redundancy Policy
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(redundancy_policy_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``} 

	${faresaving_policy_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Fare Saving Policy
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(faresaving_policy_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}


${LANchangedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `LAN
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(LANchangedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}


${NAT_loopback_changedValues.length != 0 || NAT_virtualServer_changedValues.length != 0 || NAT_virtualComputer_changedValues.length != 0 || NAT_dmz_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `NAT
 ${NAT_loopback_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Loopback
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(NAT_loopback_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${NAT_virtualServer_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Virtual Server
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(NAT_virtualServer_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${NAT_virtualComputer_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `Virtual Computer
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(NAT_virtualComputer_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${NAT_dmz_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `DMZ
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(NAT_dmz_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}


${Firewall_general_changedValues.length != 0 || Firewall_ipfilter_changedValues.length != 0 || Firewall_macfilter_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Firewall
 ${Firewall_general_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `General
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(Firewall_general_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${Firewall_ipfilter_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `IP Filter
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(Firewall_ipfilter_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}

	${Firewall_macfilter_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-blue-400"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                      default: () => {
                        return `MAC Filter
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(Firewall_macfilter_changedValues, (item) => {
                                return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${escape(item)}`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}` : ``}`;
            }
          })}` : ``}

${staticR_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Static Route
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(staticR_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${maintenance_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Maintenance
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(maintenance_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${operation_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Operation
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(operation_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}

${docker_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `Docker Engine
  ${validate_component(List, "List").$$render(
                $$result,
                {
                  tag: "ol",
                  class: "pl-5 mt-2 space-y-1 text-red-600"
                },
                {},
                {
                  default: () => {
                    return `${each(docker_changedValues, (item) => {
                      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item)}`;
                        }
                      })}`;
                    })}`;
                  }
                }
              )}`;
            }
          })}` : ``}`;
        }
      }
    )}</div>
<div class="${"pt-10 pl-10 text-center"}">${event_engine_action_line_changeValues.length != 0 || event_engine_action_mqtt_changeValues.length != 0 || event_engine_action_tcpmsg_changeValues.length != 0 || event_engine_action_modbus_changeValues.length != 0 || event_engine_action_do_changeValues.length != 0 || event_engine_action_email_changeValues.length != 0 || event_engine_action_sms_changeValues.length != 0 || event_engine_trigger_mqtt_changeValues.length != 0 || event_engine_trigger_tcpmsg_changeValues.length != 0 || event_engine_trigger_modbus_changeValues.length != 0 || event_engine_trigger_di_changeValues.length != 0 || event_engine_trigger_sms_changeValues.length != 0 || event_engine_general_changedValues.length != 0 || sdata_logger_general_changedValues.length != 0 || sdata_logger_proxy_edge_changedValues.length != 0 || sdata_logger_proxy_cloud_changedValues.length != 0 || sdata_logger_monitor_edge_changedValues.length != 0 || sdata_logger_monitor_cloud_changedValues.length != 0 || modbus_gateway_TtR_changedValues.length != 0 || modbus_gateway_RtT_changedValues.length != 0 || modbus_gateway_RtR_changedValues.length != 0 || modbus_gateway_TtT_changedValues.length != 0 || modbus_variable_master_changedValues.length != 0 || modbus_variable_slave_changedValues.length != 0 || modbus_tcp_master_changedValues.length != 0 || modbus_tcp_slave_changedValues.length != 0 || modbus_rtu_master_changedValues.length != 0 || modbus_rtu_slave_changedValues.length != 0 || LANchangedValues.length != 0 || NAT_loopback_changedValues.length != 0 || NAT_virtualServer_changedValues.length != 0 || NAT_virtualComputer_changedValues.length != 0 || NAT_dmz_changedValues.length != 0 || Firewall_general_changedValues.length != 0 || Firewall_ipfilter_changedValues.length != 0 || Firewall_macfilter_changedValues.length != 0 || staticR_changedValues.length != 0 || maintenance_changedValues.length != 0 || operation_changedValues.length != 0 || docker_changedValues.length != 0 || cwan1_basic_changedValues != 0 || cwan1_advanced_changedValues != 0 || cwan1_simpolicy_changedValues != 0 || cwan1_glink_changedValues.length != 0 || ewan1_basic_changedValues.length != 0 || ewan1_ewlap_changedValues.length != 0 || redundancy_policy_changedValues.length != 0 || faresaving_policy_changedValues.length != 0 || basic_changedValues.length != 0 || responder_conn_changedValues.length != 0 || initiator_conn_general_changedValues.length != 0 || initiator_conn_subnet_changedValues.length != 0 || openvpn_basic_changedValues.length != 0 || openvpn_server_conn_changedValues.length != 0 || openvpn_client_conn_changedValues.length != 0 || openvpn_server_advanced_ccd_changedValues.length != 0 || openvpn_server_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_psk_changedValues.length != 0 || openvpn_client_advanced_rna_changedValues.length != 0 || openvpn_client_advanced_fo_changedValues.length != 0 || generic_mqtt_changedValues.length != 0 || remote_service_changedValues.length != 0 || port_connection_lan_changedValues.length != 0 || port_connection_com_changedValues.length != 0 || certificate_settings_changedValues.length != 0 ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Apply and Restart`;
      }
    })}` : ``}</div>

${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        class: "w-full",
        permanent: true,
        open: defaultModal
      },
      {
        open: ($$value) => {
          defaultModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${``}

<table>${`${`<tr><td><svg class="${"w-16 h-16"}" aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4.5 12.75l6 6 9-13.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></td>
<td><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">It&#39;s valid configuration.
</p></td></tr>
<tr>${`<td class="${"pt-5"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td> 
<td class="${"pt-5"}"><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Applying configuration and restart ....
</p></td>`}</tr>`}`}


${``}</table>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Apply as default
};
