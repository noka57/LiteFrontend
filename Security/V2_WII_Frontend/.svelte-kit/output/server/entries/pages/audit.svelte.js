import { c as create_ssr_component, v as validate_component, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Audit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  let fwr_log = "";
  let login_log = "";
  let reboot_log = "";
  let disconnected_log = "";
  return `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Firmware Upgrade" }, {}, {
        default: () => {
          return `<pre style="${"white-space: pre-wrap;"}">${escape(fwr_log)}</pre>`;
        }
      })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Login" }, {}, {
        default: () => {
          return `<pre style="${"white-space: pre-wrap;"}">${escape(login_log)}</pre>`;
        }
      })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Reboot" }, {}, {
        default: () => {
          return `<pre style="${"white-space: pre-wrap;"}">${escape(reboot_log)}</pre>`;
        }
      })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Interface Disconnected" }, {}, {
        default: () => {
          return `<pre style="${"white-space: pre-wrap;"}">${escape(disconnected_log)}</pre>`;
        }
      })}`;
    }
  })}`;
});
export {
  Audit as default
};
