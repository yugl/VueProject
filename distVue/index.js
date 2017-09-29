AsynJs(["js/pages/demoA.js", "js/pages/demoB.js", "js/router.js"]);

window.onload = function() {
	new Vue({
		el: '#app',
		router: Router,
		data: {
			message: '菜鸟教程!'
		}
	});
};

function AsynJs(config) {
	for(var i = 0, l = config.length; i < l; i++) {
		document.write('<script src="' + config[i] + '" ></script>');
	};
};