<template>
	<div class="index" :class="miniNavFlag ? '' : 'y-layout-nav'"> 
    <yHeader></yHeader>
    <yNav @miniNav="miniNav"></yNav>
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
      miniNavFlag: true
    }
  },
  methods:{ 
    miniNav(){
      this.miniNavFlag = true;
    }
  },
  mounted(){ 
  },
  created(){   
  }
}
</script>
 
