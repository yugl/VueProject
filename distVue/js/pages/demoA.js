AsynJs(["js/components/demo1.js", "js/components/demo2.js"]);
var demoA = {
	template: `<div>我是{{msg}} <aa :content="msg"></aa><bb></bb> <aa :content="msg"></aa></div>`,
	data: function(){
		return {
			msg: 'hahaaaa'
		};
	}
};
