export const manifest = {
	appDir: "_app",
	assets: new Set(["EWLOGO.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ca10cb8a.js","imports":["_app/immutable/start-ca10cb8a.js","_app/immutable/chunks/index-a8392c86.js","_app/immutable/chunks/index-62ca60bd.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "CircleProgressBar",
				pattern: /^\/CircleProgressBar\/?$/,
				names: [],
				types: [],
				path: "/CircleProgressBar",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "DREAMS",
				pattern: /^\/DREAMS\/?$/,
				names: [],
				types: [],
				path: "/DREAMS",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "account",
				pattern: /^\/account\/?$/,
				names: [],
				types: [],
				path: "/account",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "configuration",
				pattern: /^\/configuration\/?$/,
				names: [],
				types: [],
				path: "/configuration",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				path: "/dashboard",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "docker",
				pattern: /^\/docker\/?$/,
				names: [],
				types: [],
				path: "/docker",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "firewall",
				pattern: /^\/firewall\/?$/,
				names: [],
				types: [],
				path: "/firewall",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "lan",
				pattern: /^\/lan\/?$/,
				names: [],
				types: [],
				path: "/lan",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "maintenance",
				pattern: /^\/maintenance\/?$/,
				names: [],
				types: [],
				path: "/maintenance",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "nat",
				pattern: /^\/nat\/?$/,
				names: [],
				types: [],
				path: "/nat",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "operation",
				pattern: /^\/operation\/?$/,
				names: [],
				types: [],
				path: "/operation",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "staticR",
				pattern: /^\/staticR\/?$/,
				names: [],
				types: [],
				path: "/staticR",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "wan",
				pattern: /^\/wan\/?$/,
				names: [],
				types: [],
				path: "/wan",
				shadow: null,
				a: [0,15],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
