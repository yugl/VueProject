<template>
	<el-row>
		<el-col :xs="24" :sm="6" :md="4"> 
			<Ynav></Ynav>
		</el-col>
		<el-col :xs="24" :sm="18" :md="20">
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
