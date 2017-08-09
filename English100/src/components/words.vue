<template>
	<div class="y-content">
		<div class="y-words-content">
			<div v-for="(item, index) in wdata.words">
				<span class="y-text-index">{{index+1}}</span>
				<span class="y-text-spell">{{item.spell}}</span>
				<span class="y-text-speak">/{{item.speak}}/</span>
				<p class="y-text-translate">{{item.translate}}</p>
				<div class="y-input-box"> 
					<input type="text" :data-val="item.spell" data-level="0" @blur="compare">
					<input type="text" :data-val="item.spell" data-level="0" @blur="compare">
					<input type="text" :data-val="item.spell" data-level="0" @blur="compare">
					<span class="y-text-level" data-val="0"></span> 
					<small>(拼写三遍，记得更牢哦！)</small>
				</div>
			</div>
		</div>
		<div class="y-words-box">
			<div class="y-inner">
				<router-link class="y-words-btn" :to='"/Content/"+ ( key )'>
				<i class="y-arrow"></i>返回
				</router-link> 
			</div>
		</div> 
	</div>
</template>

<script>  
export default { 
	data() {
		return {  
			wdata: '', //单词数据 
			key: '',
			spellLevel: ['', 'Good', 'Great', 'Wonderful']
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

			this.$http.get('https://yugl.github.io/diary/English100/static/words/day'+ this.key +'-words.json').then((response) => {  
				this.wdata = response.data.data;  
	    	}).catch((err) => {   
			});
    	},
    	compare( el ){  
    		var inputEl = el.target;
    		var spanEl = el.target.parentElement.querySelector('span');
    		var _spanval = 0;  
    		var _str = inputEl.getAttribute('data-val');
    		var _etr = inputEl.value.replace(/(^\s*)|(\s*$)/g,"");   
 			var inputs = inputEl.parentElement.querySelectorAll('input');

    		if( _str.toLowerCase() == _etr.toLowerCase() ){  
    			inputEl.setAttribute('data-level', 1 );  
    		}else{ 
    			inputEl.setAttribute('data-level', 0 );  
    		};  
 
    		for(var i = 0, l = inputs.length; i < l; i++){ 
    			_spanval += parseInt(inputs[i].getAttribute('data-level')); 
    		};
    		spanEl.setAttribute('data-val', _spanval ); 
    		spanEl.innerHTML = this.spellLevel[_spanval];
    	}
    } 
}
</script> 
<style>  
</style>
