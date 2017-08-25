<template>
	<div>    
		<h2>自动表单</h2>
		<p class="y-h2-desc">根据配置文件预定好的格式，自动生成不同类型表单元素</p>
		<el-form ref="form" label-position="left" :model="form" label-width="80px">  
		  	<el-button type="primary" @click="onSubmit">提交</el-button>
		    <el-button>返回</el-button>
		</el-form>
	</div>
</template>

<script>
export default{
	data(){
		return {  
		}
	},   
	methods: { 
	},
	mounted(){
		 
	}
}
</script>
 