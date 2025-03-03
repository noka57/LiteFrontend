import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { natConfig, ChangedNATConfig, NAT_VS_ConfigChangedLog, openvpnConfig, OpenVPN_Client_Advanced_PFW_ConfigChangedLog, OpenVPN_Client_Advanced_PSK_ConfigChangedLog, OpenVPN_Client_Advanced_RNA_ConfigChangedLog, OpenVPN_Client_Advanced_FO_ConfigChangedLog, OpenVPN_Client_Conn_ConfigChangedLog, OpenVPN_Server_Advanced_CCD_ConfigChangedLog, OpenVPN_Server_Advanced_PSK_ConfigChangedLog, OpenVPN_Server_Advanced_PFW_ConfigChangedLog, OpenVPN_Server_Conn_ConfigChangedLog, OpenVPN_Basic_ConfigChangedLog, ChangedOpenVPNConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Openvpn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  natConfig.subscribe((val) => {
  });
  ChangedNATConfig.subscribe((val) => {
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
  });
  sessionidG.subscribe((val) => {
  });
  openvpnConfig.subscribe((val) => {
  });
  OpenVPN_Client_Advanced_PFW_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Client_Conn_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Server_Advanced_PFW_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Server_Conn_ConfigChangedLog.subscribe((val) => {
  });
  OpenVPN_Basic_ConfigChangedLog.subscribe((val) => {
  });
  ChangedOpenVPNConfig.subscribe((val) => {
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

${``}

${`${``}


${``}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Openvpn as default
};
