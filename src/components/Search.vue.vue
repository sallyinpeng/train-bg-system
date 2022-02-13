<template>
  <div class="search">
    <div class="hint">
      <label>全部结果 > </label>
      <template v-for="(item, key) in hint">
        <el-tag :key="key" size="small" closable @close="closeHint(key, item.code)" type="warning">
          {{ item.name }}
        </el-tag>
      </template>
    </div>
    <div class="params">
      <template v-for="( label, key) in ALIAS">
        <div :key="key" class="row" v-if="catalog[key]">
          <h4 class="label">{{ label }}: </h4>
          <div class="cell">
            <el-checkbox-group v-model="from[key]" :max="multiChecks.includes(key) ? 1 : 99">
              <el-checkbox v-for="(item, k) in catalog[key]" :key="k" size="small" @click="closeHint(k, item.code, key)"
                           type="success" :label="item.name" :value="item.code"
                           :class="{single: !multiChecks.includes(key)}"/>
            </el-checkbox-group>
          </div>
          <div class="buttons">
            <el-button size="mini">收起</el-button>
            <el-button size="mini" @click="toggleMultiCheck(key)">+ 多选</el-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const ALIAS = {
  paperType: '试卷类型',
  region: '地区',
  year: '年份',
  brand: '品牌',
  schoolId: '学校'
}

export default {
  name: 'Search',
  data () {
    return {
      ALIAS,
      multiChecks: [],
      from: {
        paperType: [],
        region: [],
        year: [],
        brand: [],
        schoolId: []
      },
      hint: {
        region: {
          code: '310100',
          name: '上海'
        },
        paperType: {
          code: '7',
          name: '真题'
        }
      },
      catalog: {
        region: [
          {
            code: '310101',
            name: '黄浦'
          },
          {
            code: '310104',
            name: '徐汇'
          },
          {
            code: '310105',
            name: '长宁'
          },
          {
            code: '310106',
            name: '静安'
          }
        ],
        year: [
          {
            code: 2022,
            name: '2022'
          },
          {
            code: 2021,
            name: '2021'
          },
          {
            code: 2020,
            name: '2020'
          }
        ]
      }
    }
  },
  methods: {
    closeHint (key, code) {

    },
    changeHint (key, code, catalog) {

    },
    query () {

    },
    toggleMultiCheck (key) {
      const index = this.multiChecks.indexOf(key)
      if (index + 1) {
        this.multiChecks.splice(index, 1)
        if (this.from[key].length > 1) {
          this.from[key] = []
        }
      } else {
        this.multiChecks.push(key)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .row {
    display: flex;
    justify-content: space-between;
    height: 35px;
    border-bottom: 1px solid #DDD;

    h4 {
      padding-left: 10px;
      width: 80px;
      line-height: 35px;
      background-color: #f3f3f3;
    }

    .cell {
      width: calc(100% - 230px);

      /deep/ .single .el-checkbox__input {
        opacity: 0;
      }

      .el-checkbox {
        flex: none;
        margin: 8px 15px;

        border: none;
        background-color: white;
        color: #005aa0;
      }
    }
  }

  .row:first-child {
    border-top: 1px solid #DDD;
  }

  .buttons {
    width: 150px;

    .el-button {
      margin: 3px;
    }
  }

  .hint {
    margin-bottom: 10px;

    .el-tag {
      margin-right: 5px;
    }

    label {
      color: #666;
    }
  }

  .el-tag {
    cursor: pointer;
  }
}

</style>
