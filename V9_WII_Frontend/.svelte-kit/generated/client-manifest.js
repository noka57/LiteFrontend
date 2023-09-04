export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/CircleProgressBar.svelte"),
	() => import("../../src/routes/DREAMS.svelte"),
	() => import("../../src/routes/account.svelte"),
	() => import("../../src/routes/apply.svelte"),
	() => import("../../src/routes/configuration.svelte"),
	() => import("../../src/routes/dashboard.svelte"),
	() => import("../../src/routes/docker.svelte"),
	() => import("../../src/routes/firewall.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/lan.svelte"),
	() => import("../../src/routes/logout.svelte"),
	() => import("../../src/routes/maintenance.svelte"),
	() => import("../../src/routes/nat.svelte"),
	() => import("../../src/routes/operation.svelte"),
	() => import("../../src/routes/staticR.svelte"),
	() => import("../../src/routes/wan.svelte")
];

export const dictionary = {
	"": [[0, 10], [1]],
	"CircleProgressBar": [[0, 2], [1]],
	"DREAMS": [[0, 3], [1]],
	"account": [[0, 4], [1]],
	"apply": [[0, 5], [1]],
	"configuration": [[0, 6], [1]],
	"dashboard": [[0, 7], [1]],
	"docker": [[0, 8], [1]],
	"firewall": [[0, 9], [1]],
	"lan": [[0, 11], [1]],
	"logout": [[0, 12], [1]],
	"maintenance": [[0, 13], [1]],
	"nat": [[0, 14], [1]],
	"operation": [[0, 15], [1]],
	"staticR": [[0, 16], [1]],
	"wan": [[0, 17], [1]]
};