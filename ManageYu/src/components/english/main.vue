<template>
	<div class="y-main">    
		<div class="y-operate-box">
			<ul>  
				<li>
					<router-link to='/EnglishListChap'>
						<span class="y-item"><i class="iconfont icon-liebiao"></i> 章节列表</span>
					</router-link>
				</li>
				<li>
					<router-link to='/EnglishAddChap'>
						<span class="y-item"><i class="iconfont icon-zhangjielianxi"></i> 添加章节</span>
					</router-link> 
				</li>
				<li>
					<router-link to='/EnglishAddWords'>
						<span class="y-item"><i class="iconfont icon-danciben"></i> 添加单词</span>
					</router-link>  
				</li>
			</ul>  
		</div>  
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	data(){
		return { 
		}
	}, 
	mounted(){
		/*var _url = this.$store.state.Interface.msglist;
		this.$http.get( _url ).then((response) => {  
			console.info( response )
			debugger;
    	}).catch((err) => { 
    		debugger;
		});  */
	}
}
</script>
 