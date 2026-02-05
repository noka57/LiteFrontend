import { c as create_ssr_component, v as validate_component, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-49cd3b9b.js";
import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import "node-forge";
import { sessionidG } from "../endpoints/sessionG.js";
import "asn1js";
import "pkijs";
import { Certificate_Settings_ConfigChangedLog, ChangedCertificateConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
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
  let fileMachineCertName = "No file chosen";
  let fileCACertName = "No file chosen";
  let fileRemoteCertName = "No file chosen";
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
                                return `<label for="MachineCertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg">Choose File</label>

      <input type="file" id="MachineCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" style="display: none;">
      <span class="pl-4">${escape(fileMachineCertName)}</span>`;
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
                              return `<label for="CACertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg">Choose File</label>
      <input type="file" id="CACertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" style="display: none;">
      <span class="pl-4">${escape(fileCACertName)}</span>`;
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
                              return `<label for="RemoteCertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg">Choose File</label>
      <input type="file" id="RemoteCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" style="display: none;">
      <span class="pl-4">${escape(fileRemoteCertName)}</span>`;
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
                              return `<input type="file" id="crlUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400">`;
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
