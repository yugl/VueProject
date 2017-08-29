// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router' 
import axios from 'axios';
import './assets/css/style.css';
Vue.prototype.$http = axios;

Vue.use(ElementUI)

Vue.config.productionTip = false

function isPc(){
	//移动端
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
	  document.getElementsByTagName("html")[0].style.fontSize = "12px";
	}else{ 
		//pc端
	  document.getElementsByTagName("html")[0].style.fontSize = "10px";          
	};
};
isPc();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
