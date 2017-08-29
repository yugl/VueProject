<template>
	<div>    
		<h2>添加单词</h2>
		<p class="y-h2-desc">所有字段都需要输入</p>
		<el-form ref="form" label-position="left" :model="form" label-width="80px"> 
			<el-form-item label="选择章节">
		    	<el-input v-model="form.chap" type="textarea" autosize placeholder="请选择章节"></el-input>
		  	</el-form-item> 
		  	<div class="y-addbox">
		  		<span class="y-btn-add" @click="addStory">添加words</span> 
		  		<div class="y-additem el-form--inline" v-for="item in words"> 
		  			<el-form-item label="spell">
				    	<el-input v-model="item.spell"></el-input>
				  	</el-form-item> 
				  	<el-form-item label="speak">
				    	<el-input v-model="item.speak"></el-input>
				  	</el-form-item>
				  	<el-form-item class="y-item-inline-block" label="translate">
				    	<el-input v-model="item.translate"></el-input>
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
				chap: '' 
			}, 
			words: [] 
		}
	},   
	methods: {
		onSubmit(){ 
			this.form.words = this.words;
			alert( JSON.stringify([ this.form ]) );  
		},
		addStory(){
			var _obj = {
				spell: '',
				speak: '',
				translate: ''
			};
			this.words.unshift( _obj );
		}
	},
	mounted(){
		 
	}
}
</script>
 