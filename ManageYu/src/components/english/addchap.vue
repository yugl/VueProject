<template>
	<div>    
		<h2>添加章节</h2>
		<p class="y-h2-desc">所有字段都需要输入</p>
		<el-form ref="form" label-position="left" :model="form" label-width="80px"> 
			<el-form-item label="previous">
		    	<el-input v-model="form.previous" type="textarea" autosize placeholder="请输入内容"></el-input>
		  	</el-form-item> 
		  	<div class="y-addbox">
		  		<span class="y-btn-add" @click="addStory">添加story</span> 
		  		<div class="y-additem" v-for="item in stories"> 
		  			<el-form-item label="title">
				    	<el-input v-model="item.title"></el-input>
				  	</el-form-item> 
				  	<el-form-item label="moral">
				    	<el-input v-model="item.moral"></el-input>
				  	</el-form-item>
				  	<el-form-item label="content">
				    	<el-input v-model="item.content" type="textarea" autosize></el-input>
				  	</el-form-item> 
		  		</div>
		  	</div> 
		  	<el-form-item>
		    	<el-button type="primary" @click="onSubmit">立即添加</el-button>
		    	<el-button>取消</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default{
	data(){
		return { 
			form: {
				previous: '' 
			}, 
			stories: [] 
		}
	},   
	methods: {
		onSubmit(){ 
			this.form.stories = this.stories;
			alert( JSON.stringify([ this.form ]) ); 
		},
		addStory(){
			var _obj = {
				title: '',
				moral: '',
				content: ''
			};
			this.stories.push( _obj );
		}
	},
	mounted(){
		 
	}
}
</script>
 