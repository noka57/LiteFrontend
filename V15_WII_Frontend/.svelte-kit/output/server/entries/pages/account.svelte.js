import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
/* empty css                                                                            */import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
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
