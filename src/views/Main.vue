<template>
  <!--  <div class="home">-->
  <!--    <img alt="Vue logo" src="../assets/logo.png">-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  </div>-->
  <el-container style="height:100%">
    <el-aside width="auto">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Main',
  components: {
    Aside,
    Header
  }
}
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>
