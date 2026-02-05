import { c as create_ssr_component, v as validate_component, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
/* empty css                                           */import "classnames";
/* empty css                                                                            */import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { dashboadData, ioDashboard } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
let style = "width:25%";
let tdClass = "border-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium";
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dashboard_data = "";
  let io_data = "";
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  sessionidG.subscribe((val) => {
  });
  dashboadData.subscribe((val) => {
    dashboard_data = val;
  });
  ioDashboard.subscribe((val) => {
    io_data = val;
  });
  return `${validate_component(Table, "Table").$$render($$result, { tableNoWFull: true, forDashboard: true }, {}, {
    default: () => {
      return `${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { style, tdClass }, {}, {
                default: () => {
                  return `<div class="flex"><div class=""><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12"><path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
<div class="w-full"><p class="text-sm font-light">System Uptime</p>
<p class="text-xl font-bold">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemUptime)} ` : ``}</p></div></div>`;
                }
              })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { style, tdClass }, {}, {
                default: () => {
                  return `<div class="flex"><div class="">${``}</div>
<div class="w-full">${`<p class="pt-2 text-sm font-light">SSID</p>
<p class="text-xl font-bold">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.wifi11ah.ssid)}` : ``}</p>`}</div></div>`;
                }
              })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { style: "width:50%", tdClass }, {}, {
                default: () => {
                  return `<div class="flex"><div class=""></div>
<div class="w-full">${`<p class="text-sm font-light">11ah mode</p>
<p class="text-xl font-bold">${dashboard_data != "" ? `${dashboard_data.config.dashboard.wifi11ah.mode == 1 ? `AP (Number of STA: Actual ${escape(dashboard_data.config.dashboard.wifi11ah.number)} Expected)` : `${dashboard_data.config.dashboard.wifi11ah.mode == 0 ? `STATION (RSSI: ${escape(dashboard_data.config.dashboard.wifi11ah.rssi)})` : ``}`}` : ``}</p>`}</div></div>`;
                }
              })}`;
            }
          })}


        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `${``}`;
                  }
                }
              )}
                      ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg">Ethernet</p>`;
                  }
                }
              )}`;
            }
          })}


                    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `${``}`;
                  }
                }
              )}

              ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-l-8 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex"><div class=""><p class="text-black text-lg text-center">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.ethernet.wan[0].name)}` : ``}</p>
${dashboard_data != "" ? `${dashboard_data.config.dashboard.ethernet.wan[0].status ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16"><path fill="blue" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z
     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16"><path fill="none" d="M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2
    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8
    V6.4h0.8V8.3z"></path><path fill="#D0D0D0" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8
    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"></path><rect x="2.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="3.8" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="5.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="7.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="8.8" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="10.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect></svg>`}` : ``}</div>


              <div class="pl-20"><p class="text-black text-lg text-center">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.ethernet.lan[0].name)}` : ``}</p>

${dashboard_data != "" ? `${dashboard_data.config.dashboard.ethernet.lan[0].status ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16"><path fill="blue" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z
     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="w-16 h-16"><path fill="none" d="M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2
    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8
    V6.4h0.8V8.3z"></path><path fill="#D0D0D0" d="M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8
    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"></path><rect x="2.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="3.8" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="5.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="7.2" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="8.8" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect><rect x="10.5" y="6.4" fill="#D0D0D0" width="0.8" height="1.9"></rect></svg>`}` : ``}</div></div>`;
                  }
                }
              )}`;
            }
          })}

             ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg">LAN Status</p>`;
                  }
                }
              )}


        ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg">System Information</p>`;
                  }
                }
              )}`;
            }
          })}


             ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex"><div class="px-10"><p class="text-black text-lg">IP Mode</p>
        <p class="text-black text-lg">IP Address(IPv4)</p></div>
<div class="px-10"><p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.lanStatus.ipv4.ipMode)}` : ``}</p>
        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.lanStatus.ipv4.ip)}` : ``}</p></div></div>`;
                  }
                }
              )}

${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg"></p>

<div class="flex"><div class="px-4"><p class="text-black text-lg">Model Name</p>
        <p class="text-black text-lg">Hostname</p>
        <p class="text-black text-lg">Serial Number</p>
        <p class="text-black text-lg">Firmware Version</p>
        <p class="text-black text-lg">WAN MAC Address</p>
        <p class="text-black text-lg">System Time</p></div>
<div class="px-1"><p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.modelName)}` : ``}</p>

        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.hostname)}` : ``}</p>
        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.serialNumber)}` : ``}</p>
        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.firmwareVersion)}` : ``}</p>
        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.macAddress)}` : ``}</p>
        ${``}
        <p class="text-lg font-light">${dashboard_data != "" ? `${escape(new Date(dashboard_data.config.dashboard.systemInfo.systemTime * 1e3).toLocaleString("en-US", options))}` : ``}</p></div></div>`;
                  }
                }
              )}`;
            }
          })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg">IO Data</p>`;
                  }
                }
              )}
                      ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-8 border-b-4 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<p class="text-red-600 text-lg">Modbus Gateway</p>`;
                  }
                }
              )}`;
            }
          })}



             ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex"><div class="px-10"><p class="text-black text-lg">DI</p>
                <p class="text-black text-lg">DO</p>
                <p class="text-black text-lg">AI-1</p>
                <p class="text-black text-lg">AI-2</p></div>

        <div class="px-1"><p class="text-lg font-light">${io_data != "" ? `${io_data.di == 0 ? `Low` : `${io_data.di == 1 ? `High` : ``}`}` : ``}</p>
<p class="text-lg font-light">${io_data != "" ? `${io_data.do == 1 ? `Close` : `${io_data.do == 0 ? `Open` : ``}`}` : ``}</p>
<p class="text-lg font-light">${io_data != "" ? `${io_data.ai1 != "" ? `${escape((parseInt(io_data.ai1, 10) / 100).toFixed(1))} ` : ``}${io_data.ai1_type == 0 ? `(Current)` : `${io_data.ai1_type == 1 ? `(Voltage)` : ``}`} ` : ``}</p>
<p class="text-lg font-light">${io_data != "" ? `${io_data.ai2 != "" ? `${escape((parseInt(io_data.ai2, 10) / 100).toFixed(1))} ` : ``}${io_data.ai2_type == 0 ? `(Current)` : `${io_data.ai2_type == 1 ? `(Voltage)` : ``}`}` : ``}</p></div></div>`;
                  }
                }
              )}

        ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-x-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium",
                  colspan: "2"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex"><div class="px-10"><p class="text-black text-lg">Mode</p></div>

        <div class="px-1"><p class="text-lg font-light">${dashboard_data != "" ? `${dashboard_data.config.dashboard.modbus.mode == -1 ? `Disable` : `${dashboard_data.config.dashboard.modbus.mode == 0 ? `TCP Slave To RTU Master` : `${dashboard_data.config.dashboard.modbus.mode == 1 ? `RTU Slave To TCP Master` : ``}`}`}` : ``}</p></div></div>`;
                  }
                }
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Dashboard as default
};
