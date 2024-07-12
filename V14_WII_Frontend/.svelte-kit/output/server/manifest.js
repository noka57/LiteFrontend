export const manifest = {
	appDir: "_app",
	assets: new Set(["EWLOGO.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-69834269.js","imports":["_app/immutable/start-69834269.js","_app/immutable/chunks/index-267512dc.js","_app/immutable/chunks/index-b2b51752.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js')
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
				type: 'endpoint',
				id: "sessionG",
				pattern: /^\/sessionG\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/sessionG.js')
			},
			{
				type: 'endpoint',
				id: "configG",
				pattern: /^\/configG\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/configG.js')
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
				id: "PortC",
				pattern: /^\/PortC\/?$/,
				names: [],
				types: [],
				path: "/PortC",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "SerialTransparent",
				pattern: /^\/SerialTransparent\/?$/,
				names: [],
				types: [],
				path: "/SerialTransparent",
				shadow: null,
				a: [0,5],
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
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "apply",
				pattern: /^\/apply\/?$/,
				names: [],
				types: [],
				path: "/apply",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "awsIoTcore",
				pattern: /^\/awsIoTcore\/?$/,
				names: [],
				types: [],
				path: "/awsIoTcore",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "azure",
				pattern: /^\/azure\/?$/,
				names: [],
				types: [],
				path: "/azure",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "certificate",
				pattern: /^\/certificate\/?$/,
				names: [],
				types: [],
				path: "/certificate",
				shadow: null,
				a: [0,10],
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
				a: [0,11],
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
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "datatagpro",
				pattern: /^\/datatagpro\/?$/,
				names: [],
				types: [],
				path: "/datatagpro",
				shadow: null,
				a: [0,13],
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
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "event",
				pattern: /^\/event\/?$/,
				names: [],
				types: [],
				path: "/event",
				shadow: null,
				a: [0,15],
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
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "gMQTT",
				pattern: /^\/gMQTT\/?$/,
				names: [],
				types: [],
				path: "/gMQTT",
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				id: "ipsec",
				pattern: /^\/ipsec\/?$/,
				names: [],
				types: [],
				path: "/ipsec",
				shadow: null,
				a: [0,18],
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
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				path: "/logout",
				shadow: null,
				a: [0,20],
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
				a: [0,21],
				b: [1]
			},
			{
				type: 'page',
				id: "modbus",
				pattern: /^\/modbus\/?$/,
				names: [],
				types: [],
				path: "/modbus",
				shadow: null,
				a: [0,22],
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
				a: [0,23],
				b: [1]
			},
			{
				type: 'page',
				id: "openvpn",
				pattern: /^\/openvpn\/?$/,
				names: [],
				types: [],
				path: "/openvpn",
				shadow: null,
				a: [0,24],
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
				a: [0,25],
				b: [1]
			},
			{
				type: 'page',
				id: "remoteS",
				pattern: /^\/remoteS\/?$/,
				names: [],
				types: [],
				path: "/remoteS",
				shadow: null,
				a: [0,26],
				b: [1]
			},
			{
				type: 'page',
				id: "sdatalogger",
				pattern: /^\/sdatalogger\/?$/,
				names: [],
				types: [],
				path: "/sdatalogger",
				shadow: null,
				a: [0,27],
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
				a: [0,28],
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
				a: [0,29],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
