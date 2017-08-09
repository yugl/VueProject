<template>
	<div class="index y-layout-nav"> 
    <yHeader></yHeader>
    <yNav></yNav>
    <div class="y-content">
		  <router-view></router-view>
    </div>
	</div>
</template>

<script> 
import yHeader from './header'; 
import yNav from './nav'; 
export default { 
  components: {
    yHeader,
    yNav
  },
  data () {
    return { 
    }
  },
  methods:{ 
  },
  mounted(){ 
  },
  created(){   
  }
}
</script>
 
