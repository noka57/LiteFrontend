import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-81886b3d.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import "node-forge";
import { sessionidG } from "../endpoints/sessionG.js";
import "asn1js";
import "pkijs";
import { Certificate_Settings_ConfigChangedLog, ChangedCertificateConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Certificate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  Certificate_Settings_ConfigChangedLog.subscribe((val) => {
  });
  ChangedCertificateConfig.subscribe((val) => {
  });
  let CACertAliasName = "";
  let RemoteCertAliasName = "";
  let crlAliasName = "";
  let MachineCertAliasName = "";
  let MachineCertP12Password = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${``}

  ${validate_component(TabItem, "TabItem").$$render(
          $$result,
          {
            open: true,
            title: "Machine Certificates"
          },
          {},
          {
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
                        return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `No`;
                          }
                        })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-64" }, {}, {
                          default: () => {
                            return `Alias Name`;
                          }
                        })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-64" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-96" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `${``}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-64" }, {}, {
                              default: () => {
                                return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "filled",
                                    id: "floating_filled",
                                    name: "floating_filled",
                                    type: "text",
                                    label: "Alias Name",
                                    value: MachineCertAliasName
                                  },
                                  {
                                    value: ($$value) => {
                                      MachineCertAliasName = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-64" }, {}, {
                              default: () => {
                                return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "filled",
                                    id: "floating_filled2",
                                    name: "floating_filled2",
                                    type: "text",
                                    label: "PKCS#12 Password",
                                    value: MachineCertP12Password
                                  },
                                  {
                                    value: ($$value) => {
                                      MachineCertP12Password = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-96" }, {}, {
                              default: () => {
                                return `<input type="${"file"}" id="${"RemoteCertUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}">`;
                              }
                            })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {
                              default: () => {
                                return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                                  default: () => {
                                    return `Upload`;
                                  }
                                })}`;
                              }
                            })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "CA Certificates" }, {}, {
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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-64" }, {}, {
                            default: () => {
                              return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "filled",
                                  id: "floating_filled",
                                  name: "floating_filled",
                                  type: "text",
                                  label: "Alias Name",
                                  value: CACertAliasName
                                },
                                {
                                  value: ($$value) => {
                                    CACertAliasName = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-96" }, {}, {
                            default: () => {
                              return `<input type="${"file"}" id="${"RemoteCertUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}">`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                                default: () => {
                                  return `Upload`;
                                }
                              })}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Remote Certificates" }, {}, {
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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-64" }, {}, {
                            default: () => {
                              return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "filled",
                                  id: "floating_filled",
                                  name: "floating_filled",
                                  type: "text",
                                  label: "Alias Name",
                                  value: RemoteCertAliasName
                                },
                                {
                                  value: ($$value) => {
                                    RemoteCertAliasName = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-96" }, {}, {
                            default: () => {
                              return `<input type="${"file"}" id="${"RemoteCertUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}">`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                                default: () => {
                                  return `Upload`;
                                }
                              })}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}



${`${validate_component(TabItem, "TabItem").$$render($$result, { title: "CRL" }, {}, {
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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-64" }, {}, {
                            default: () => {
                              return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "filled",
                                  id: "floating_filled",
                                  name: "floating_filled",
                                  type: "text",
                                  label: "Alias Name",
                                  value: crlAliasName
                                },
                                {
                                  value: ($$value) => {
                                    crlAliasName = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-96" }, {}, {
                            default: () => {
                              return `<input type="${"file"}" id="${"crlUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}">`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                                default: () => {
                                  return `Upload`;
                                }
                              })}`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Certificate as default
};
