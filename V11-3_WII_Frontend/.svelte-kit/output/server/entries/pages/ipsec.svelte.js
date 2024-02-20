import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ipsecConfig, IPsec_Responder_Conn_ConfigChangedLog, IPsec_Initiator_Conn_General_ConfigChangedLog, IPsec_Initiator_Conn_Subnet_ConfigChangedLog, IPsec_Basic_ConfigChangedLog, ChangedIPsecConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Ipsec = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  ipsecConfig.subscribe((val) => {
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
