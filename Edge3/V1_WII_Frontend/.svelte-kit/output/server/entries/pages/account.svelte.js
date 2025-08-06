import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
/* empty css                                                                            */import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Account as default
};
