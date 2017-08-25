import Vue from 'vue'
import Vuex from 'vuex'  

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    state: {
    	//数据接口   获取方法：[this.$store.state.Interface.msglist]
    	Interface: {
    		'msglist': '/v1/meal/contentInfos'  		
    	}
    } 
});