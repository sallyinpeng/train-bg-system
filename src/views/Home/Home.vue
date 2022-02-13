<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user-info">
            <div>
              <el-avatar :size="150"
                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="admin-info">
              <h3>Admin</h3>
              <p class="admin-text">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <div class="login-left">
              <p>上次登录时间：</p>
              <p>上次登录地点：</p>
            </div>
            <div class="login-right">
              <p><span>2022-01-13</span></p>
              <p><span>广州</span></p>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover" style="margin-top:20px;height:480px">
          <el-table
            :data="tableData"
            border style="width: 100%">
            <el-table-column
              show-overflow-tooltip
              :prop="val"
              :label="item"
              v-for="(item,val) in tableLabel" :key="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" class="menu-card" v-for="(item,val) in menuList" :key="val">
          <div class="menu-icon" :style="{background:item.color}"><i :class="item.icon"></i></div>
          <div class="menu-text">
            <p class="pay-number">￥{{ item.num }}</p>
            <p>{{ item.order }}</p>
          </div>
        </el-card>
        <el-card shadow="hover" style="width:100%;height:280px;margin-left:20px">
          <div class="orderChart" style="height:280px"></div>
        </el-card>
        <div class="graph">
          <el-card shadow="hover" style="width:46%;height:280px;margin-left:20px;margin-top:20px">
            <div class="userChart" ref="userChart" style="height:280px"></div>
          </el-card>
          <el-card shadow="hover" style="width:48%;height:280px;margin-left:20px;margin-top:20px">
            <div class="pieChart" style="height:280px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Home',
  data () {
    return {
      tableData: [
        {
          name: '小米',
          todayBuy: '300',
          monthBuy: '3000',
          totalBuy: '3000000000000'
        },
        {
          name: '小米',
          todayBuy: '300',
          monthBuy: '3000',
          totalBuy: '300000'
        },
        {
          name: '小米',
          todayBuy: '300',
          monthBuy: '3000',
          totalBuy: '300000'
        },
        {
          name: '小米',
          todayBuy: '300',
          monthBuy: '3000',
          totalBuy: '300000'
        }
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      menuList: [
        {
          icon: 'el-icon-success',
          num: '1234',
          order: '今日支付订单',
          color: '#2ec7c9'
        },
        {
          icon: 'el-icon-success',
          num: '3000',
          order: '本月支付订单',
          color: '#ffb980'
        },
        {
          icon: 'el-icon-success',
          num: '19999',
          order: '总共支付订单',
          color: '#5ab1ef'
        },
        {
          icon: 'el-icon-success',
          num: '299',
          order: '今日收藏订单',
          color: '#2ec7c9'
        },
        {
          icon: 'el-icon-success',
          num: '3999',
          order: '本月收藏订单',
          color: '#ffb980'

        }, {
          icon: 'el-icon-success',
          num: '4999',
          order: '总共收藏订单',
          color: '#5ab1ef'
        }
      ],
      orderChart: {
        legend: {},
        color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
        tooltip: {
          show: true, // 是否显示
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '华为',
            data: [580, 460, 1500, 1200, 800, 430, 680],
            type: 'line'
          },
          {
            name: '苹果',
            data: [800, 600, 1500, 200, 4800, 6300, 800],
            type: 'line'
          },
          {
            name: '三星',
            data: [2000, 2600, 1500, 1200, 1800, 2300, 3800],
            type: 'line'
          },
          {
            name: '小米',
            data: [1000, 4600, 5500, 6200, 7800, 4300, 1800],
            type: 'line'
          },
          {
            name: 'vivo',
            data: [5000, 2600, 500, 2200, 3800, 1300, 4000],
            type: 'line'
          }, {
            name: 'oppo',
            data: [700, 4800, 2500, 3200, 2800, 2300, 1500],
            type: 'line'
          }
        ]
      },
      userChart: {
        legend: {},
        color: ['#2ec7c9', '#b6a2de'],
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            name: '新增用户',
            type: 'bar',
            data: [230, 240, 180, 250, 180, 560, 780],
            barGap: '20%',
            barCategoryGap: '40%'
          },
          {
            name: '活跃用户',
            type: 'bar',
            data: [120, 140, 99, 90, 91, 78, 100]
          }
        ]
      },
      pieChart: {
        legend: {
          // orient: 'vertical',
          // x: 'right',
          // y: 'center',
          // padding: [10, 0, 10, 0]
        },
        // color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
        tooltip: {
          //   show: true, // 是否显示
          //   trigger: 'axis'
        },
        series: [
          {
            type: 'pie',
            label: {
              show: false
            },
            data: [
              {
                name: '小米',
                value: 2999
              },
              {
                value: 5999,
                name: '苹果'
              },
              {
                value: 1500,
                name: 'vivo'
              },
              {
                value: 1500,
                name: '三星'
              },
              {
                value: 1900,
                name: 'oppo'
              },
              {
                value: 2200,
                name: '魅族'
              },
              {
                value: 2200,
                name: '华为'
              }
            ]
          }
        ]

      }
    }
  },
  methods: {
    getEcharts () {
      this.chartLineMyChart = echarts.init(document.querySelector('.orderChart'))
      this.chartLineMyChart.setOption(this.orderChart)
      // this.chartLineMyChart = echarts.init(document.querySelector('.userChart'))
      this.chartLineMyChart = echarts.init(this.$refs.userChart)
      this.chartLineMyChart.setOption(this.userChart)
      this.chartLineMyChart = echarts.init(document.querySelector('.pieChart'))
      this.chartLineMyChart.setOption(this.pieChart)
    }
  },
  mounted () {
    this.getEcharts()
  }
}
</script>

<style lang="less" scoped>
.home {
  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #808080FF;

    .el-avatar {
      margin-right: 40px;
    }

    .admin-info {
      padding: 20px;
      display: inline-block;

      h3 {
        font-size: 30px;
        margin-bottom: 10px;
        margin-top: 20px;
      }
    }
  }

  .login-info {
    padding: 20px 20px 10px 20px;
    display: flex;
    justify-content: space-between;

    .login-right {
      text-align: left;
      padding-top: 5px;
    }
  }

  .el-col-16 {
    display: flex;
    flex-wrap: wrap;

    .menu-card {
      margin-left: 20px;
      margin-bottom: 20px;
      width: 30%;
      //padding: 0;
      text-align: center;

      /deep/ .el-card__body {
        padding: 0;
        display: flex;
        justify-content: space-between;

      }

      .menu-icon {
        width: 80px;
        height: 80px;
        background-color: rgb(46 199 201);

        .el-icon-success {
          font-size: 35px;
          margin-top: 20px;
          color: white;
        }
      }

      .menu-text {
        padding-top: 10px;
        padding-right: 25px;
        margin-left: 30px;

        .pay-number {
          font-size: 25px;
        }
      }
    }
  }

  .graph {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
