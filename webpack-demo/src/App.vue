<template>
  <transition name="el-zoom-in-center">
    <div class="wrapper">
        <Aside></Aside>
      <el-container>
        <Header></Header>
      </el-container>
      
    </div>  
  </transition>
</template>
  
<script>
// import Home from './pages/home.vue'
import Aside from './_aside/aside.vue'
import Header from './_header/header.vue'

export default {
  name:'App',

  components:{
    Aside,
    Header
  }
}
</script>

<style lang="stylus" scoped>

.wrapper 
  display flex
  background #999
  
    

</style>

