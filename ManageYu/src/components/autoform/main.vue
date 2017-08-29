<template>
	<div class="y-main">    
		<div class="y-operate-box">
			<ul>  
				<li>
					<router-link to='/FormEdit'>
						<span class="y-item"><i class="iconfont icon-liebiao"></i> 表单</span>
					</router-link>
				</li>
				<li>
					<router-link to='/FormView'>
						<span class="y-item"><i class="iconfont icon-chakan"></i> 视图</span>
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
	} 
}
</script>
 