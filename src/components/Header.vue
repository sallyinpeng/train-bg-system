<template>
  <div class="header">
    <div class="header-left">
      <el-button plain size="mini" @click="handleMenu"><i class="el-icon-menu"></i></el-button>
    </div>
    <div class="header-right">
      <el-dropdown trigger="click">
  <span class="el-dropdown-link">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleMenu () { // 必须要用commit调用mutations里的方法，才能在store存储成功
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="less" scoped>

.header {
  height: 60px;
  background: #333;
  display: flex;
  justify-content: space-between;

  .header-left {
    padding-left: 15px;
    padding-top: 15px;
  }

  .header-right {
    padding-top: 10px;
    padding-right: 15px;
  }
}
</style>
