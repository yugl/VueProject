<template> 
  <nav class="y-nav">
    <el-row :gutter="20">
      <el-col>
        <router-link to='/EnglishAddChap'>
          <div @click="miniNav" class="y-nav-item active">英语100天</div>
        </router-link>
      </el-col>
      <el-col><div @click="miniNav" class="y-nav-item">待定</div></el-col>
      <el-col><div @click="miniNav" class="y-nav-item">待定</div></el-col>
      <el-col><div @click="miniNav" class="y-nav-item">待定</div></el-col>
    </el-row>
  </nav>
</template>

<script> 
export default { 
  data () {
    return { 
    }
  },
  methods:{ 
    miniNav(){
      this.$emit('miniNav');
    }
  },
  mounted(){ 
  },
  created(){   
  }
}
</script>
 
