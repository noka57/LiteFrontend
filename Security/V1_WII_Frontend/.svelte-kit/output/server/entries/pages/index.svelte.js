import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
/* empty css                                           */import Dashboard from "./dashboard.svelte.js";
import "classnames";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
/* empty css                                                                            */import "../../_app/immutable/chunks/Table-724d6c25.js";
import "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../endpoints/configG.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default
};
