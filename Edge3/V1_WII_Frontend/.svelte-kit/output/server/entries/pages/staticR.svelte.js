import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-77cf2b36.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-de764e50.js";
import { T as Table } from "../../_app/immutable/chunks/Table-297ce0df.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { staticrouteConfig, StaticRouteConfigChangedLog, ChangedStaticRouteConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-44304d72.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
import "../../_app/immutable/chunks/CloseButton-dd962073.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
const StaticR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let NewformModal = false;
  let changed_staticR_data = {};
  let static_route_current_index;
  let new_static_route_index;
  sessionidG.subscribe((val) => {
  });
  staticrouteConfig.subscribe((val) => {
  });
  StaticRouteConfigChangedLog.subscribe((val) => {
  });
  ChangedStaticRouteConfig.subscribe((val) => {
  });
  let newStaticR_Item = [
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    },
    {
      "enable": 0,
      "delete": false,
      "dstIp": "",
      "netmask": "",
      "gateway": "",
      "interface": 0,
      "metric": 20
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label class="pl-2">${``}
  Enable Static Route
</label>


<p class="mt-10"></p>


 ${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `Enable`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `No`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `Destination IP`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `Network Mask`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `Gateway IP`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
              default: () => {
                return `Interface`;
              }
            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-22" }, {}, {
              default: () => {
                return `Metric`;
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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-22" }, {}, {})}`;
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
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
              }
            })}</td></tr>


${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "lg",
                class: "w-full",
                permanent: true,
                open: formModal
              },
              {
                open: ($$value) => {
                  formModal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<form action="#"><label>${``}
  Enable

</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close"><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table><tr>${``}</tr>




<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].netmask, 0)}></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].gateway, 0)}></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p></td>

    <td class="pl-5 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface
                    },
                    {
                      group: ($$value) => {
                        changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Auto`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface
                    },
                    {
                      group: ($$value) => {
                        changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `LAN`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface
                    },
                    {
                      group: ($$value) => {
                        changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Ethernet WAN`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface
                    },
                    {
                      group: ($$value) => {
                        changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Cellular WAN`;
                      }
                    }
                  )}</div></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_staticR_data.config.networking_staticRoute.list[static_route_current_index].metric, 0)}></td></tr>

            <tr><td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Modify`;
                    }
                  })}</td></tr></table></form>`;
                }
              }
            )}


${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "lg",
                class: "w-full",
                autoclose: true,
                open: NewformModal
              },
              {
                open: ($$value) => {
                  NewformModal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<form action="#"><label><input class="center" type="checkbox"${add_attribute("checked", newStaticR_Item[new_static_route_index].enable, 1)}>
  Enable
</label>

<p class="mt-10"></p>

<table><tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Destination IP</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", newStaticR_Item[new_static_route_index].dstIp, 0)}></td></tr>




<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", newStaticR_Item[new_static_route_index].netmask, 0)}></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", newStaticR_Item[new_static_route_index].gateway, 0)}></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Interface</p></td>

    <td class="pl-5 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: newStaticR_Item[new_static_route_index].interface
                    },
                    {
                      group: ($$value) => {
                        newStaticR_Item[new_static_route_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Auto`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: newStaticR_Item[new_static_route_index].interface
                    },
                    {
                      group: ($$value) => {
                        newStaticR_Item[new_static_route_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `LAN`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: newStaticR_Item[new_static_route_index].interface
                    },
                    {
                      group: ($$value) => {
                        newStaticR_Item[new_static_route_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Ethernet WAN`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: newStaticR_Item[new_static_route_index].interface
                    },
                    {
                      group: ($$value) => {
                        newStaticR_Item[new_static_route_index].interface = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Cellular WAN`;
                      }
                    }
                  )}</div></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Metric</p></td><td class="pl-5 pt-5"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", newStaticR_Item[new_static_route_index].metric, 0)}></td></tr>

            <tr><td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Add`;
                    }
                  })}</td></tr></table></form>`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  StaticR as default
};
