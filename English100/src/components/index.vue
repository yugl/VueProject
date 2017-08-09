<template>
	<el-row>
		<el-col :xs="8" :sm="6" :md="4"> 
			<Ynav></Ynav>
		</el-col>
		<el-col :xs="16" :sm="18" :md="20">
			<router-view></router-view>
		</el-col> 
	</el-row>
</template>

<script> 
import Ynav from '@/components/nav'
export default {
	name: 'index',
	data() {
		return {  
		}
	},
	components:{
		Ynav
	}
}
</script> 
<style>  
</style>
