<template>
	<div class="y-content">
		<template v-if="!developed">
			敬请期待
		</template>
		<template v-else>   
			<div class="y-header">
				<span class="y-title-header">Previous Story</span>
				<p>{{cdata.previous}}</p>
			</div>
			<h2>Chapter {{key}}</h2>
			<div class="y-quote" v-for="item in cdata.stories">
				<h4>{{item.title}}</h4>
				<p v-for="itempart in item.content" v-html="itempart"></p>
				<p class="y-moral"><span class="y-text-moral"><span class="y-bold">MORAL:</span>{{item.moral}}</span></p>
			</div>	
			<div class="y-words-box">
				<div class="y-inner">
					<router-link class="y-words-btn" :to='"/Words/"+ ( key )'>
					<i class="y-arrow"></i>记单词
					</router-link> 
				</div>
			</div> 
		</template> 
	</div>
</template>

<script>  
export default { 
	data() {
		return {  
			cdata: '', //内容数据
			key: '',
			developed: true 
		}
	},
	mounted(){  
		this.ajaxData();
	}, 
	watch: { 
      "$route": "ajaxData"
    },
    methods: {
    	ajaxData(){
    		this.key = this.$route.params.id ? this.$route.params.id : "1";
			this.$http.get('https://yugl.github.io/diary/English100/static/day'+ this.key +'.json').then((response) => { 
				this.developed = true;
				this.cdata = response.data.data;  
	    	}).catch((err) => {  
				this.developed = false;
			}); 
    	} 
    } 
}
</script> 
<style>  
</style>
