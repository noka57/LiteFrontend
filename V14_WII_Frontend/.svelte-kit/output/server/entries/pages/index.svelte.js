import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-4327f458.js";
import Dashboard from "./dashboard.svelte.js";
import "classnames";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
/* empty css                                                                            */import "../../_app/immutable/chunks/Table-8c701dfb.js";
import "../../_app/immutable/chunks/TableBody-890eeeae.js";
import "../../_app/immutable/chunks/TableBodyRow-bb920ec2.js";
import "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
import "../endpoints/configG.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default
};
