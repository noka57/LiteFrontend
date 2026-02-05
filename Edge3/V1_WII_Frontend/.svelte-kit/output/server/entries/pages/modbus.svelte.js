import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-54377ec4.js";
import { A as Accordion } from "../../_app/immutable/chunks/Accordion-c8c12650.js";
import "classnames";
/* empty css                                                                            */import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { Conversion_Opcua2Modbus_ConfigChangedLog, sconversionConfig, ChangedSConfigConfig, sdataLoggerConfig, ChangedSDataLoggerConfig, eventEngineConfig, ChangedEventEngineConfig, ModbusGateway_General_ConfigChangedLog, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusDataModel_Slave_ConfigChangedLog, ModbusTag_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, modbusConfig, ChangedModbusConfig, ChangedPortConnectionConfig, portConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
const Modbus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  Conversion_Opcua2Modbus_ConfigChangedLog.subscribe((val) => {
  });
  sconversionConfig.subscribe((val) => {
  });
  ChangedSConfigConfig.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  eventEngineConfig.subscribe((val) => {
  });
  ChangedEventEngineConfig.subscribe((val) => {
  });
  ModbusGateway_General_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_TtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_TtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusDataModel_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTag_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTCP_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Master_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerModbus_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionModbus_ConfigChangedLog.subscribe((val) => {
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
  });
  ChangedPortConnectionConfig.subscribe((val) => {
  });
  portConnectionConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${``}

${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Gateway" }, {}, {
          default: () => {
            return `${``}

<p class="pt-10"></p>


${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${``}



${``}

${``}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Viewer" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `TimeStamp`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}`;
                    }
                  })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "TCP Slave" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Modbus as default
};
