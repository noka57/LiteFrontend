import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-581edbff.js";
import "classnames";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { ipsecConfig, natConfig, ChangedNATConfig, NAT_VS_ConfigChangedLog, IPsec_Responder_Conn_ConfigChangedLog, IPsec_Initiator_Conn_General_ConfigChangedLog, IPsec_Initiator_Conn_Subnet_ConfigChangedLog, IPsec_Basic_ConfigChangedLog, ChangedIPsecConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
const Ipsec = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  ipsecConfig.subscribe((val) => {
  });
  natConfig.subscribe((val) => {
  });
  ChangedNATConfig.subscribe((val) => {
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
  });
  IPsec_Responder_Conn_ConfigChangedLog.subscribe((val) => {
  });
  IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe((val) => {
  });
  IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe((val) => {
  });
  IPsec_Basic_ConfigChangedLog.subscribe((val) => {
  });
  ChangedIPsecConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Overview" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}

      ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Basic" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}

${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Ipsec as default
};
