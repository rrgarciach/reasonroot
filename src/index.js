// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style';

let roots = [];
function init() {
	let App = require('./components/app').default;
	var stmtElements = document.getElementsByTagName('statement');
	//debugger;
	for (var i = 0; i < stmtElements.length; i++) {
		var stmt = JSON.parse(stmtElements[i].getAttribute("stmt"));
		var stmts = JSON.parse(stmtElements[i].getAttribute("stmts"));
		roots[i] = render(<App stmt={stmt} stmts={stmts} />, stmtElements[i], roots[i]);
	}

}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
