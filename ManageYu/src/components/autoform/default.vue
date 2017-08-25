<template>
	<div>    
		<h2>自动表单简介</h2>
		<p class="y-h2-desc">根据配置文件预定好的格式，自动生成不同类型表单元素</p> 
		<pre class="y-h2-desc">
		配置文件数据格式：
		[{ "id": "nationality", "text": "民族", "type": "refer", "typedata": [{"code": "HR002_0xx"}]},
		{ "id": "birthdate", "text": "出生日期", "type": "date" },
		{ "id": "nativeplace", "text": "籍贯" },
		{ "id": "idname", "text": "证件类型", "disabled": true }] 
		</pre> 
		<pre class="y-h2-desc">
		后台接口数据格式：
		{ 	
			"nationality": "11", 
			"birthdate": "gg", 
			"nativeplace": "aa", 
			"idname": "dd", 
		} 
		</pre>
	</div>
</template>

<script>
import { ajaxData } from '@/assets/js/ajaxdata.js';
export default{
	data(){
		return { 
		}
	},   
	methods: { 
	},
	mounted(){
		ajaxData( this.$store.state.Interface.msglist , ( res ) => {   
	 		alert( '接口请求' + this.$store.state.Interface.msglist + res.msg ); 
    	}); 
	}
}
</script>
 