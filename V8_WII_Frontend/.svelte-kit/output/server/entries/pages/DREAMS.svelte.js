import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute } from "../../_app/immutable/chunks/index-e6faea8a.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-a37e9067.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-43be47cb.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-fdd28fa6.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-a2501ae1.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/index-245f18af.js";
import "../../_app/immutable/chunks/Frame-35d083b4.js";
import "../../_app/immutable/chunks/ChevronUp-24a5dd86.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const DREAMS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let formModal2 = false;
  let Sinterface = "R485";
  let BR = "9600";
  let Parity = "None";
  let DB = "8";
  let SB = "1";
  let DNP3Port = "20000";
  let DEmail = "";
  let DPwd = "";
  let SlaveID = "3";
  let PointType = "IR";
  let MAddr = "0";
  let MQ = "1";
  let MDisplay = "BE";
  let testid = "0";
  let testnumber = +testid;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label><input type="${"checkbox"}" ${""}>
  Enable DREAMS
</label>


<p class="${"mt-10"}"></p>

${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Serial" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Serial Port`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Interface`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Baudrate`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Parity`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Data Bits`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-22" }, {}, {
                      default: () => {
                        return `Stop Bits`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>

${validate_component(Modal, "Modal").$$render(
                              $$result,
                              {
                                autoclose: false,
                                size: "md",
                                class: "w-full",
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
                                  return `<form action="${"#"}"><p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td><td class="${"pl-5 pt-5"}">Serial Port ${escape(testid)} ${escape(testnumber)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "R485", group: Sinterface },
                                    {
                                      group: ($$value) => {
                                        Sinterface = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `RS 485`;
                                      }
                                    }
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "R232", group: Sinterface },
                                    {
                                      group: ($$value) => {
                                        Sinterface = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `RS 232`;
                                      }
                                    }
                                  )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Baudrate</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", BR, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Parity</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "None", group: Parity },
                                    {
                                      group: ($$value) => {
                                        Parity = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `None`;
                                      }
                                    }
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Even", group: Parity },
                                    {
                                      group: ($$value) => {
                                        Parity = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Even`;
                                      }
                                    }
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Odd", group: Parity },
                                    {
                                      group: ($$value) => {
                                        Parity = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Odd`;
                                      }
                                    }
                                  )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DB, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Stop Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", SB, 0)}></td></tr>

      <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                    default: () => {
                                      return `Submit`;
                                    }
                                  })}</td></tr></table></form>`;
                                }
                              }
                            )}`;
                          }
                        })}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                          default: () => {
                            return `Serial Port 0`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `RS 485`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `9600`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `None`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `8`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-22" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}`;
                      }
                    })}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                          default: () => {
                            return `Serial Port 1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `RS 485`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `115200`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `None`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `8`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr>`;
                  }
                })}`;
              }
            })}`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Modbus" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Serial Port 0</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase A`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `0`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}




 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase B`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian`;
                                  }
                                })}`;
                              }
                            })}




 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}




 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase N`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase AB`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `4`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}



 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase BC`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `0`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase AC`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}




 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u5BE6\u529F`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u865B\u529F`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u529F\u7387\u56E0\u6578`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `4`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u983B\u7387`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `5`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u7D2F\u7A4D\u96FB\u91CF`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `6`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian Byte Swap`;
                                  }
                                })}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}


 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Serial Port 1</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u529F\u7387\u56E0\u6578\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `0`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian Byte Swap`;
                                  }
                                })}`;
                              }
                            })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u5BE6\u529F\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian`;
                                  }
                                })}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u865B\u529F\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian`;
                                  }
                                })}`;
                              }
                            })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668Vpset\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1-25\u8B8A\u6D41\u5668\u662F\u5426\u6210\u529F\u63A5\u53D7\u63A7\u5236`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `4`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian`;
                                  }
                                })}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `26-50\u8B8A\u6D41\u5668\u662F\u5426\u6210\u529F\u63A5\u53D7\u63A7\u5236`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `5`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Big-Endian Byte Swap`;
                                  }
                                })}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}

 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Option</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u96FB\u8868\u984D\u5916\u6578\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `3`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Little-Endian Byte Swap`;
                                  }
                                })}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}


 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Value List</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Value`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase A`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase B`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Current Phase N`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase AB`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase BC`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `Line Voltage Phase AC`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}



    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u5BE6\u529F`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}



    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u865B\u529F`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u529F\u7387\u56E0\u6578`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u983B\u7387`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u7D2F\u7A4D\u96FB\u91CF`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u529F\u7387\u56E0\u6578\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u5BE6\u529F\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}


        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668\u865B\u529F\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

            ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u8B8A\u6D41\u5668Vpset\u8A2D\u5B9A\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1-25\u8B8A\u6D41\u5668\u662F\u5426\u6210\u529F\u63A5\u53D7\u63A7\u5236`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

        ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `26-50\u8B8A\u6D41\u5668\u662F\u5426\u6210\u529F\u63A5\u53D7\u63A7\u5236`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `100`;
                                  }
                                })}`;
                              }
                            })}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `\u96FB\u8868\u984D\u5916\u6578\u503C`;
                                  }
                                })}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `200`;
                                  }
                                })}`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}

${validate_component(Modal, "Modal").$$render(
                  $$result,
                  {
                    autoclose: false,
                    size: "md",
                    class: "w-full",
                    open: formModal2
                  },
                  {
                    open: ($$value) => {
                      formModal2 = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<form action="${"#"}"><p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td><td class="${"pl-5 pt-5"}">Line Current Phase A</td></tr>
<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", SlaveID, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "IR", group: PointType },
                        {
                          group: ($$value) => {
                            PointType = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Input Register`;
                          }
                        }
                      )}
  ${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "HR", group: PointType },
                        {
                          group: ($$value) => {
                            PointType = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Holding Register`;
                          }
                        }
                      )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MAddr, 0)}></td></tr>


  <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MQ, 0)}></td></tr>


  <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"gap-4"}">${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "BE", group: MDisplay },
                        {
                          group: ($$value) => {
                            MDisplay = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Big Endian`;
                          }
                        }
                      )}
  ${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "LE", group: MDisplay },
                        {
                          group: ($$value) => {
                            MDisplay = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Little Endian`;
                          }
                        }
                      )}
  ${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "BEBS", group: MDisplay },
                        {
                          group: ($$value) => {
                            MDisplay = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Big Endian Byte Swap`;
                          }
                        }
                      )}
  ${validate_component(Radio, "Radio").$$render(
                        $$result,
                        { value: "LEBS", group: MDisplay },
                        {
                          group: ($$value) => {
                            MDisplay = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Little Endian Byte Swap`;
                          }
                        }
                      )}</div></td></tr>


      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
                <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                        default: () => {
                          return `Submit`;
                        }
                      })}</td></tr></table></form>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DNP3" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">Listen Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DNP3Port, 0)}></td></tr>


   <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Restful" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">DREAMS Email</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DEmail, 0)}></td></tr>


    <tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">DREAMS Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DPwd, 0)}></td></tr>

   <tr><td></td>
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
  DREAMS as default
};
