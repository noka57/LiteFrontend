import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, p as is_void, v as validate_component, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-337e42f7.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ChangedLANConfig, ChangedNATConfig, ChangedFirewallConfig, ChangedStaticRouteConfig, ChangedMaintenanceConfig, ChangedOperationConfig, ChangedDockerConfig, ChangedDreamsConfig, ChangedWANConfig, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog, LanConfigChangedLog, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, Firewall_General_ConfigChangedLog, Firewall_IPFilter_ConfigChangedLog, Firewall_MACFilter_ConfigChangedLog, StaticRouteConfigChangedLog, MaintenanceConfigChangedLog, OperationConfigChangedLog, DockerConfigChangedLog, Dreams_Serial_ConfigChangedLog, Dreams_Modbus_S0_ConfigChangedLog, Dreams_Modbus_S1_ConfigChangedLog, Dreams_Modbus_Option_ConfigChangedLog, Dreams_DNP3_ConfigChangedLog, Dreams_Restful_ConfigChangedLog, Dreams_General_ConfigChangedLog } from "../endpoints/configG.js";
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
  let serial_changedValues = [];
  let modbus_s0_changedValues = [];
  let modbus_s1_changedValues = [];
  let modbus_option_changedValues = [];
  let dnp3_changedValues = [];
  let restful_changedValues = [];
  let dreams_general_changedValues = [];
  let cwan1_basic_changedValues = [];
  let cwan1_advanced_changedValues = [];
  let cwan1_simpolicy_changedValues = [];
  let cwan1_glink_changedValues = [];
  let ewan1_basic_changedValues = [];
  let ewan1_ewlap_changedValues = [];
  let redundancy_policy_changedValues = [];
  let faresaving_policy_changedValues = [];
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
  ChangedDreamsConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
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
  Dreams_Serial_ConfigChangedLog.subscribe((val) => {
    serial_changedValues = val;
  });
  Dreams_Modbus_S0_ConfigChangedLog.subscribe((val) => {
    modbus_s0_changedValues = val;
  });
  Dreams_Modbus_S1_ConfigChangedLog.subscribe((val) => {
    modbus_s1_changedValues = val;
  });
  Dreams_Modbus_Option_ConfigChangedLog.subscribe((val) => {
    modbus_option_changedValues = val;
  });
  Dreams_DNP3_ConfigChangedLog.subscribe((val) => {
    dnp3_changedValues = val;
  });
  Dreams_Restful_ConfigChangedLog.subscribe((val) => {
    restful_changedValues = val;
  });
  Dreams_General_ConfigChangedLog.subscribe((val) => {
    dreams_general_changedValues = val;
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
          return `${cwan1_basic_changedValues != 0 || cwan1_advanced_changedValues != 0 || cwan1_simpolicy_changedValues != 0 || cwan1_glink_changedValues != 0 || ewan1_basic_changedValues != 0 || ewan1_ewlap_changedValues != 0 || redundancy_policy_changedValues != 0 || faresaving_policy_changedValues != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
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
          })}` : ``}



${dreams_general_changedValues.length != 0 || serial_changedValues.length != 0 || modbus_s0_changedValues.length != 0 || modbus_s1_changedValues.length != 0 || modbus_option_changedValues.length != 0 || dnp3_changedValues.length != 0 || restful_changedValues.length != 0 ? `${validate_component(Li, "Li").$$render($$result, {}, {}, {
            default: () => {
              return `DREAMS
 ${dreams_general_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                              return `${each(dreams_general_changedValues, (item) => {
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

	${serial_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `Serial
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(serial_changedValues, (item) => {
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

	${modbus_s0_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `Modbus Item (Serial 0)
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(modbus_s0_changedValues, (item) => {
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

	${modbus_s1_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `Modbus Item (Serial 1)
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(modbus_s1_changedValues, (item) => {
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

	${modbus_option_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `Modbus Item (Option)
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(modbus_option_changedValues, (item) => {
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

	${dnp3_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `DNP3
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(dnp3_changedValues, (item) => {
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

	${restful_changedValues.length != 0 ? `${validate_component(List, "List").$$render(
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
                        return `Restful
  ${validate_component(List, "List").$$render(
                          $$result,
                          {
                            tag: "ol",
                            class: "pl-5 mt-2 space-y-1 text-red-600"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(restful_changedValues, (item) => {
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
    )}</div>
<div class="${"pt-10 pl-10 text-center"}">${LANchangedValues.length != 0 || NAT_loopback_changedValues.length != 0 || NAT_virtualServer_changedValues.length != 0 || NAT_virtualComputer_changedValues.length != 0 || NAT_dmz_changedValues.length != 0 || Firewall_general_changedValues.length != 0 || Firewall_ipfilter_changedValues.length != 0 || Firewall_macfilter_changedValues.length != 0 || staticR_changedValues.length != 0 || maintenance_changedValues.length != 0 || operation_changedValues.length != 0 || docker_changedValues.length != 0 || serial_changedValues.length != 0 || modbus_s0_changedValues.length != 0 || modbus_s1_changedValues.length != 0 || modbus_option_changedValues.length != 0 || dnp3_changedValues.length != 0 || restful_changedValues.length != 0 || dreams_general_changedValues.length != 0 || cwan1_basic_changedValues != 0 || cwan1_advanced_changedValues != 0 || cwan1_simpolicy_changedValues != 0 || cwan1_glink_changedValues != 0 || ewan1_basic_changedValues != 0 || ewan1_ewlap_changedValues != 0 || redundancy_policy_changedValues != 0 || faresaving_policy_changedValues != 0 ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Apply and Reboot`;
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
<tr><td class="${"pt-5"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td> 
<td class="${"pt-5"}"><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Applying configuration and restart ....
</p></td></tr>`}`}</table>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Apply as default
};
