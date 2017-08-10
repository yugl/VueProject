<template>
	<div>    
		<h2>章节列表</h2>
		<p>列表记录</p>
	</div>
</template>

<script>
export default{
	data(){
		return { 
		}
	},
	computed: {
		url(){ 
			//"https://bird.ioliu.cn/v1"
			return this.$store.state.Interface.msglist;
		}
	},
	mounted(){
		/*this.$http.get( this.url ).then((response) => {  
			console.info( response )
			//debugger;
    	}).catch((err) => { 
    		//debugger;
		}); */
	}
}
</script>
 