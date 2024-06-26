import { c as create_ssr_component, v as validate_component, e as escape, i as add_attribute, o as each } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
/* empty css                                                                            */import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { dashboadData } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
let tdStyle = "width:25%";
let tdClass = "border-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium";
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value1 = 0;
  let value2 = 0;
  let value3 = 0;
  let value4 = 0;
  let dashboard_data = "";
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
  let path1 = "";
  let path2 = "";
  let path3 = "";
  let path4 = "";
  let AllpathReady = 0;
  return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdStyle, tdClass }, {}, {
                default: () => {
                  return `<div class="${"flex"}"><div class="${""}"><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white bg-green-500 rounded-full mr-2 dark:text-pink-500 w-12 h-12"}"><path d="${"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>
<div class="${"w-full"}"><p class="${"text-sm font-light"}">System Uptime</p>
<p class="${"text-xl font-bold"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemUptime)} s` : ``}</p></div></div>`;
                }
              })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdStyle, tdClass }, {}, {
                default: () => {
                  return `<div class="${"flex"}"><div class="${""}"><svg class="${"w-16 h-16"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 -3 24 24"}"><circle fill="${"#1A87C9"}" cx="${"9"}" cy="${"9"}" r="${"9"}"></circle><path fill="${"#FFFFFF"}" d="${"M13.5,9.8H9C8.6,9.8,8.2,9.4,8.2,9V3c0-0.4,0.3-0.8,0.8-0.8S9.8,2.6,9.8,3v5.2h3.8c0.4,0,0.8,0.3,0.8,0.8\n    S13.9,9.8,13.5,9.8z"}"></path></svg></div>
<div class="${"w-full"}"><p class="${"text-sm font-light"}">Internet Uptime</p>
<p class="${"text-xl font-bold"}">${`${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.internetUptime)} s` : ``}`}
${``}</p></div></div>`;
                }
              })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdStyle, tdClass }, {}, {
                default: () => {
                  return `<div class="${"flex"}"><div class="${""}"><svg class="${"w-16 h-16 mr-2"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 45.3 25"}"><path fill="${"#076291"}" d="${"M42,10.1c0-0.2,0-0.3,0-0.5c0-2.9-2.3-5.2-5.2-5.2c-0.5,0-1,0.1-1.5,0.2c-0.2-0.4-0.5-0.7-0.8-1L13.3,25h19.2\n      l0,0c0.1,0,0.2,0,0.3,0c2.7,0,5.1-1.3,6.6-3.3c3.3-0.1,5.9-2.8,5.9-6.1C45.3,13.2,44.1,11.1,42,10.1z M39.8,21\n      c0.8-1.3,1.2-2.7,1.2-4.3c0-3.3-1.9-6.1-4.6-7.4c0-0.3,0.1-0.6,0.1-0.9c0-1.2-0.3-2.3-0.8-3.2C36.1,5,36.5,5,36.9,5\n      c2.5,0,4.6,2.1,4.6,4.6c0,0.2,0,0.4,0,0.6v0.2l0.2,0.1c1.9,1,3.1,2.9,3.1,5C44.7,18.3,42.6,20.7,39.8,21z"}"></path><path fill="${"#1A87C9"}" d="${"M29.7,1.5c-1.9,0-3.6,0.8-4.8,2c-1.7-2.1-4.2-3.5-7-3.5c-4.7,0-8.6,3.8-8.6,8.6c0,0.2,0,0.4,0.1,0.6\n      C9,9.1,8.5,9.1,8.1,9.1c-4.5,0-8.1,3.6-8.1,8c0,3.8,2.6,7,6.2,7.8h7.1L34.6,3.7C33.4,2.4,31.6,1.5,29.7,1.5z"}"></path><text transform="${"matrix(1.0002 0 0 1 7.4379 17.6826)"}" fill="${"#FFFFFF"}" font-family="${"OpenSans"}" font-size="${"6px"}">Pave2Edge</text></svg></div>
<div class="${"w-full"}"><p class="${"text-sm font-light"}">Pave2Edge</p>
<p class="${"text-xl font-bold"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.p2eStatus)}` : ``}</p></div></div>`;
                }
              })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdStyle, tdClass }, {}, {
                default: () => {
                  return `<div class="${"flex"}"><div class="${""}"><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white bg-blue-500 mr-2 rounded-full dark:text-pink-500 w-12 h-12"}" cursor="${"pointer"}"><path d="${"M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>
<div class="${"w-full"}"><p class="${"text-sm font-light"}">GPS</p>

<p class="${"text-xl font-bold"}">${`${dashboard_data != "" ? `${escape(parseFloat(dashboard_data.config.dashboard.gpsInfo.lat).toFixed(2))}, ${escape(parseFloat(dashboard_data.config.dashboard.gpsInfo.long).toFixed(2))}, ${escape(parseFloat(dashboard_data.config.dashboard.gpsInfo.alt).toFixed(2))}` : ``}`}
${``}</p></div></div>`;
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
                    return `<p class="${"text-red-600 text-lg"}">Modem</p>`;
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
                    return `<p class="${"text-red-600 text-lg"}">Ethernet</p>`;
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
                  class: "border-l-8 border-r-0 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"
                },
                {},
                {
                  default: () => {
                    return `<div class="${"flex"}">${`<div class="${""}"><p class="${"text-black text-lg"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[0].name)}` : ``}</p>

${dashboard_data != "" ? `<svg aria-hidden="${"true"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-700 mr-2 dark:text-pink-500 w-12 h-12"}">${dashboard_data.config.dashboard.modem[0].signal == 0 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
 <path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
 <path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[0].signal == 1 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[0].signal == 2 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[0].signal == 3 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : ``}`}`}`}</svg>` : ``}</div>

<div class="${"w-full pt-4 px-10"}"><p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[0].type)}` : ``}</p>
<p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[0].band)}` : ``}</p>
<p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[0].operator)}` : ``}</p></div>`}</div>`;
                  }
                }
              )}
                      ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                $$result,
                {
                  class: "border-l-0 border-r-8 border-t-4 border-b-8 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium"
                },
                {},
                {
                  default: () => {
                    return `<div class="${"flex"}">${`<div class="${""}"><p class="${"text-black text-lg"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[1].name)}` : ``}</p>
                      

${dashboard_data != "" ? `<svg aria-hidden="${"true"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-700 mr-2 dark:text-pink-500 w-12 h-12"}">${dashboard_data.config.dashboard.modem[1].signal == 0 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
 <path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
 <path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[1].signal == 1 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[1].signal == 2 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : `${dashboard_data.config.dashboard.modem[1].signal == 3 ? `<path d="${"M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>
<path d="${"M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path> 
<path d="${"M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"}" fill="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path>` : ``}`}`}`}</svg>` : ``}</div>
<div class="${"w-full pt-4 px-10"}"><p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[1].type)}` : ``}</p>
<p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[1].band)}` : ``}</p>
<p class="${"text-sm font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.modem[1].operator)}` : ``}</p></div>`}</div>`;
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
                    return `<div class="${"flex"}"><div class="${""}"><p class="${"text-black text-lg text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.ethernet.lan[0].name)}` : ``}</p>

${dashboard_data != "" ? `${dashboard_data.config.dashboard.ethernet.lan[0].status ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-5 -5 24 24"}" class="${"w-16 h-16"}"><path fill="${"blue"}" d="${"M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z\n     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-5 -5 24 24"}" class="${"w-16 h-16"}"><path fill="${"none"}" d="${"M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2\n    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8\n    V6.4h0.8V8.3z"}"></path><path fill="${"#D0D0D0"}" d="${"M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8\n    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"}"></path><rect x="${"2.2"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"3.8"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"5.5"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"7.2"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"8.8"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"10.5"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect></svg>`}` : ``}</div>


<div class="${"pl-20"}"><p class="${"text-black text-lg text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.ethernet.wan[0].name)}` : ``}</p>
${dashboard_data != "" ? `${dashboard_data.config.dashboard.ethernet.wan[0].status ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-5 -5 24 24"}" class="${"w-16 h-16"}"><path fill="${"blue"}" d="${"M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M3,8.3H2.2V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z\n     M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8V6.4h0.8V8.3z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"-5 -5 24 24"}" class="${"w-16 h-16"}"><path fill="${"none"}" d="${"M10.6,3.4V2.6V2.1h-0.3H9.5V1.4V0.8H4v0.6v0.8H3.2H2.9v0.4v0.8H2.1H0.8v6.1h11.9V3.4h-1.4H10.6z M3,8.3H2.2\n    V6.4H3V8.3z M4.7,8.3H3.8V6.4h0.8V8.3z M6.3,8.3H5.5V6.4h0.8V8.3z M8,8.3H7.2V6.4H8V8.3z M9.7,8.3H8.8V6.4h0.8V8.3z M11.3,8.3h-0.8\n    V6.4h0.8V8.3z"}"></path><path fill="${"#D0D0D0"}" d="${"M11.3,2.6V1.4h-1.1V0h-7v1.4H2.2v1.2H0v7.6h13.5V2.6H11.3z M12.7,9.4H0.8V3.4h1.4h0.8V2.6V2.2h0.3H4V1.4V0.8\n    h5.5v0.6v0.8h0.8h0.3v0.4v0.8h0.8h1.4L12.7,9.4L12.7,9.4z"}"></path><rect x="${"2.2"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"3.8"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"5.5"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"7.2"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"8.8"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect><rect x="${"10.5"}" y="${"6.4"}" fill="${"#D0D0D0"}" width="${"0.8"}" height="${"1.9"}"></rect></svg>`}` : ``}</div></div>`;
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
                    return `<p class="${"text-red-600 text-lg"}">Internet Status</p>`;
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
                    return `<p class="${"text-red-600 text-lg"}">LAN Status</p>`;
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
                    return `<div class="${"flex"}"><div class="${"px-10"}"><p class="${"text-black text-lg"}">Active Link</p>
        <p class="${"text-black text-lg"}">IP Address</p>
        ${`<p class="${"text-black text-lg"}">Gateway</p>
        <p class="${"text-black text-lg"}">DNS</p>`}</div>
<div class="${"px-40"}"><p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.wanStatus.active_link)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.wanStatus.ipv4.ip)}` : ``}</p>
        ${`<p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.wanStatus.ipv4.gateway)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.wanStatus.ipv4.dns[0])}/${escape(dashboard_data.config.dashboard.wanStatus.ipv4.dns[1])}` : ``}</p>`}</div></div>`;
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
                    return `<div class="${"flex"}"><div class="${"px-10"}"><p class="${"text-black text-lg"}">IP Address(IPv4)</p>
                ${`<p class="${"text-black text-lg"}">Default Gateway</p>
        <p class="${"text-black text-lg"}">DNS</p>`}</div>
<div class="${"px-40"}"><p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.lanStatus.ipv4.ip)}` : ``}</p>
                ${`<p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.lanStatus.ipv4.gateway)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.lanStatus.ipv4.dns[0])}/${escape(dashboard_data.config.dashboard.lanStatus.ipv4.dns[1])}` : ``}</p>`}</div></div>`;
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
                    return `<p class="${"text-red-600 text-lg"}">System Resource</p>`;
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
                    return `<p class="${"text-red-600 text-lg"}">System Information</p>`;
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
                    return `<div class="${"flex"}">${`<div class="${"pb-20"}"><p class="${"text-black text-sm text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemResource.cpuRemaining)}` : ``}</p>
  ${dashboard_data != "" && AllpathReady == 1 ? `<div style="${"height: 100%;position:relative;weight:100%"}"><svg viewBox="${"0 0 100 100"}" height="${"100%"}" width="${"100%"}" style="${"fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" style="${"stroke: var(--progress-trackcolor, #adb5bd); stroke-width: var(--progress-trackwidth, 19px);"}"></path>${`<path stroke-width="${"20px"}" stroke="${"blue"}"${add_attribute("d", path1, 0)} style="${"stroke-width: var(--progress-width, 20px);"}"></path>`}</svg>
  <div style="${"height: 100%;position:relative;weight:100%"}">${slots.default ? slots.default({}) : `
      <span style="${"left: 50%;position: absolute;top: -57%;transform: translate(-50%, -50%);color: blue"}">${escape(value1)}%</span>
    `}</div></div>` : ``}
<p class="${"text-black text-lg text-center"}">CPU</p></div>


<div class="${"pl-20 pb-20"}"><p class="${"text-black text-sm text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemResource.ramRemaining)}` : ``}</p>
${dashboard_data != "" && AllpathReady == 1 ? `<div style="${"height: 100%;position:relative;weight:100%"}"><svg viewBox="${"0 0 100 100"}" height="${"100%"}" width="${"100%"}" style="${"fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" style="${"stroke: var(--progress-trackcolor, #adb5bd); stroke-width: var(--progress-trackwidth, 19px);"}"></path>${`<path stroke-width="${"20px"}" stroke="${"green"}"${add_attribute("d", path2, 0)} style="${"stroke-width: var(--progress-width, 20px);"}"></path>`}</svg>




<div style="${"height: 100%;position:relative;weight:100%"}">${slots.default ? slots.default({}) : `
      <span style="${"left: 50%;position: absolute;top: -57%;transform: translate(-50%, -50%);color: blue"}">${escape(value2)}%</span>
    `}</div></div>` : ``}
<p class="${"text-black text-lg text-center"}">RAM</p></div>


<div class="${"pl-20 pb-20"}"><p class="${"text-black text-sm text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemResource.emmcRemaining)}` : ``}</p>
${dashboard_data != "" && AllpathReady == 1 ? `<div style="${"height: 100%;position:relative;weight:100%"}"><svg viewBox="${"0 0 100 100"}" height="${"100%"}" width="${"100%"}" style="${"fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" style="${"stroke: var(--progress-trackcolor, #adb5bd); stroke-width: var(--progress-trackwidth, 19px);"}"></path>${`<path stroke-width="${"20px"}" stroke="${"yellow"}"${add_attribute("d", path3, 0)} style="${"stroke-width: var(--progress-width, 20px);"}"></path>`}</svg>





<div style="${"height: 100%;position:relative;weight:100%"}">${slots.default ? slots.default({}) : `
      <span style="${"left: 50%;position: absolute;top: -57%;transform: translate(-50%, -50%);color: blue"}">${escape(value3)}%</span>
    `}</div></div>` : ``}
<p class="${"text-black text-lg text-center"}">EMMC</p></div>
<div class="${"pl-20 pb-20"}"><p class="${"text-black text-sm text-center"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemResource.sdCardRemaining)}` : ``}</p>
${dashboard_data != "" && AllpathReady == 1 ? `<div style="${"height: 100%;position:relative;weight:100%"}"><svg viewBox="${"0 0 100 100"}" height="${"100%"}" width="${"100%"}" style="${"fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" style="${"stroke: var(--progress-trackcolor, #adb5bd); stroke-width: var(--progress-trackwidth, 19px);"}"></path>${`<path stroke-width="${"20px"}" stroke="${"orange"}"${add_attribute("d", path4, 0)} style="${"stroke-width: var(--progress-width, 20px);"}"></path>`}</svg>


<div style="${"height: 100%;position:relative;weight:100%"}">${slots.default ? slots.default({}) : `
      <span style="${"left: 50%;position: absolute;top: -57%;transform: translate(-50%, -50%);color: blue"}">${escape(value4)}%</span>
    `}</div></div>` : ``}
<p class="${"text-black text-lg text-center"}">SD Card</p></div>`}</div>`;
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
                    return `<div class="${"flex"}"><div class="${"px-10"}"><p class="${"text-black text-lg"}">Model Name</p>
        <p class="${"text-black text-lg"}">Serial Number</p>
        <p class="${"text-black text-lg"}">Firmware Version</p>
        <p class="${"text-black text-lg"}">WAN MAC Address</p>
        <p class="${"text-black text-lg"}">IMEI</p>
        <p class="${"text-black text-lg"}">Modem Vendor/Model</p>
        <p class="${"text-black text-lg"}">System Time</p></div>
<div class="${"px-40"}"><p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.modelName)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.serialNumber)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.firmwareVersion)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.macAddress)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.imei)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.modemVendor)}` : ``}/${dashboard_data != "" ? `${escape(dashboard_data.config.dashboard.systemInfo.modemModel)}` : ``}</p>
        <p class="${"text-lg font-light"}">${dashboard_data != "" ? `${escape(new Date(dashboard_data.config.dashboard.systemInfo.systemTime * 1e3).toLocaleString("en-US", options))}` : ``}</p></div></div>`;
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
                    return `<p class="${"text-red-600 text-lg"}">Cloud</p>`;
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
                    return `<p class="${"text-red-600 text-lg"}">VPN</p>`;
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
                    return `<div class="${"flex"}"><div class="${"px-10"}">${`${dashboard_data != "" ? `${each(dashboard_data.config.dashboard.cloudStatus, (CloudStatus, index) => {
                      return `<p class="${"text-black text-lg"}">${escape(CloudStatus.name)}</p>`;
                    })}` : ``}`}</div>

        <div class="${"px-40"}">${`${dashboard_data != "" ? `${each(dashboard_data.config.dashboard.cloudStatus, (CloudStatus, index) => {
                      return `<p class="${"text-lg font-light"}">${escape(CloudStatus.status)}</p>`;
                    })}` : ``}`}</div></div>`;
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
                    return `${dashboard_data != "" ? `${``}` : ``}`;
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
                    return `<p class="${"text-red-600 text-lg"}">Edge Data</p>`;
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
                    return `<p class="${"text-red-600 text-lg"}"></p>`;
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
                    return `<div class="${"flex"}"><div class="${"px-10"}">${dashboard_data != "" ? `${each(dashboard_data.config.dashboard.edgeData, (EdgeData, index) => {
                      return `<p class="${"text-black text-lg"}">${escape(EdgeData.name)}</p>`;
                    })}` : ``}</div>
        
        <div class="${"px-40"}">${dashboard_data != "" ? `${each(dashboard_data.config.dashboard.edgeData, (EdgeData, index) => {
                      return `<p class="${"text-lg font-light"}">${escape(EdgeData.value)}</p>`;
                    })}` : ``}</div></div>`;
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
                {}
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
