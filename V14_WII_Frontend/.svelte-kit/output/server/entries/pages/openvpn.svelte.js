import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { openvpnConfig, OpenVPN_Client_Advanced_PFW_ConfigChangedLog, OpenVPN_Client_Advanced_PSK_ConfigChangedLog, OpenVPN_Client_Advanced_RNA_ConfigChangedLog, OpenVPN_Client_Advanced_FO_ConfigChangedLog, OpenVPN_Client_Conn_ConfigChangedLog, OpenVPN_Server_Advanced_CCD_ConfigChangedLog, OpenVPN_Server_Advanced_PSK_ConfigChangedLog, OpenVPN_Server_Advanced_PFW_ConfigChangedLog, OpenVPN_Server_Conn_ConfigChangedLog, OpenVPN_Basic_ConfigChangedLog, ChangedOpenVPNConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
const openvpn_svelte_svelte_type_style_lang = "";
const css = {
  code: '.strikeout.svelte-1gf39g8{text-decoration:line-through;color:#999;position:relative}.strikeout.svelte-1gf39g8:before{content:"";position:absolute;top:50%;left:0;right:0;border-bottom:1px solid #111;transform:translateY(-50%)}.strikeout.svelte-1gf39g8:after{content:"\\00B7";font-size:1px;position:absolute;bottom:0;left:0;right:0;text-align:center}',
  map: null
};
const Openvpn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$result.css.add(css);
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
