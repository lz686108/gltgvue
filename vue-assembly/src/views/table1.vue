<template>
  <div class="table">
    <dm_time_day style="margin-left: 0.5vw; margin-top: 1vh"></dm_time_day>
    <div class="flex-1">
      <dm_icon :icon="'mingxi'" :value="'查询添加'" style="margin-left: 0.7vw">
      </dm_icon>
    </div>

    <div class="content">
      <div class="wei">
        <div>提交人信息</div>
        <div class="option xg_input">
          <el-input v-model="search" placeholder="请选择提交人信息"></el-input>
        </div>
        <dm_button
          :value="'查询'"
          style="margin-left: 0.7vw"
          @dmclick="datalist()"
        ></dm_button>
      </div>
      <dm_button
        :value="'添加'"
        @dmclick="add()"
        style="margin-right: 0.6vw"
      ></dm_button>
    </div>
    <div class="flex-1">
      <dm_icon :icon="'mingxi'" :value="'各项明细'" style="margin-left: 0.7vw">
      </dm_icon>
      <!-- <div class="lei">
        <img src="../assets/monitor_3@2x.png" alt="" />
        <div class="lei1">各项明细</div>
      </div> -->
      <div class="ji">总计：{{ total }}</div>
    </div>
    <div class="table-1">
      <!-- dmclick  为表格点击事件
      dmheight 为表格内容高度 超出则滚动  单位默认vh 只传数字即可
      dmthead  为表头 键名 宽度大小 文字居左左右
      dmlist   为数据接口数据 跟表头键名一直即可渲染 -->
      <dm_table
        @dmclick="dmclick"
        :dmheight="'40'"
        :dmthead="tablethead"
        :dmlist="tablelist"
        :dmupdate="true"
        :dmdelete="true"
      >
      </dm_table>
    </div>
    <div class="page xg_page">
      <el-pagination
        prev-text="<"
        next-text=">"
        background
        layout="prev, pager, next"
        :page-size="page"
        :total="total"
        @current-change="pageCurrentChange"
      >
      </el-pagination>
      <!-- 弹窗 -->
      <div class="dm_mask" v-if="dmshow">
        <div class="dm_dialog">
          <div class="dm_flex" style="height: 6vh">
            <p>新增</p>
            <img
              @click="dmshow = false"
              src="../assets/img_icon/guanbi@2x.png"
              alt=""
            />
          </div>
          <div class="dm_flex" style="width: 90%; flex-wrap: wrap">
            <div class="dm_flex1">
              <span>姓名</span>
              <input type="text" placeholder="请输入" v-model="arr.name" />
            </div>
            <div class="dm_flex1">
              <span>年龄</span>
              <div class="xg_input">
                <el-select placeholder="请选择年龄" v-model="arr.age">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dm_flex1">
              <span>处分时间</span>
              <div class="xg_input">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  v-model="arr.time"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <div
            class="dm_flex"
            style="height: 5vh; justify-content: flex-end; margin-top: 1.5vh"
          >
            <div class="dm_sure dm_cancel" @click="dmshow = false">取消</div>
            <div class="dm_sure" @click="dm_submit()">保存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["state"],
  data() {
    return {
      arr: {
        name: "",
        age: "",
        time: "",
      },
      dmshow: false,
      tablelist: [],
      tablethead: [
        {
          name: "姓名",
          key: "name",
          text: "left",
          width: "10%",
        },
        {
          name: "年龄",
          key: "age",
          text: "right",
          width: "30%",
        },
        {
          name: "入学时间",
          key: "time",
          text: "left",
          width: "20%",
        },
      ],
      search: "",
      total: 0,
      page: 16,
      //页数
      pageNum: 1,
      options: [
        {
          value: "12",
          label: "12",
        },
        {
          value: "24",
          label: "24",
        },
        {
          value: "36",
          label: "36",
        },
      ],
      value1: [],
    };
  },
  // 路由守卫
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // console.log(vm);
      // 每次进入路由执行
      vm.dm_select();
    });
  },

  methods: {
    add() {
      this.arr = {
        name: "",
        age: "",
        time: "",
      };
      this.dmshow = true;
    },
    //新增修改
    async dm_submit() {
      await this.$api.dm_add(this.arr, this.param, "test");
      this.dmshow = false;
      this.dm_select();
    },
    //查询
    async dm_select() {
      let list = await this.$api.get_api(
        "http://10.6.1.110/API/eid/dm_select.php",
        {
          pageNum: this.pageNum,
        }
      );
      this.tablelist = list.obj;
      this.total = 10000;
    },
    dmtime(parms) {
      this.value1 = parms;
    },
    //删除修改
    async dmclick(parms, msg) {
      if (msg == "删除") {
        await this.$api.dm_del(parms.id, this.param, "test");
        this.dm_select();
      } else if (msg == "修改") {
        this.arr = JSON.parse(JSON.stringify(parms));
        this.dmshow = true;
      }
    },

    pageCurrentChange(val) {
      this.pageNum = val;
      this.dm_select();
    },
  },
  created() {},
  mounted() {
    this.pageCurrentChange(1);
  },
};
</script>

<style scoped>
.table-1 {
  width: 84vw;
  height: 74.5vh;
  margin: 0 auto;
  background: #2a354b;
  border-radius: 9px 9px 9px 9px;
  padding-top: 0.5vh;
  position: relative;
}

.page {
  position: absolute;
  bottom: 3.5vh;
  right: 2.5vw;
}

.lei {
  line-height: 4vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8vw;
  color: #fff;
}
.lei img {
  width: 19px;
  height: 19px;
  margin-left: 1vw;
}
.lei1 {
  padding-left: 0.3vw;
}
.content {
  width: 84vw;
  height: 5.5vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #2a354b;
  border-radius: 3px 3px 3px 3px;
  align-items: center;
  font-size: 0.7vw;
  color: #90b9cc;
}
.wei {
  padding-left: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #bde5f7;
}
.option {
  margin-left: 1vw;
}
.search {
  font-size: 0.7vw;
  background: #0058ce;
  border-radius: 3px 3px 3px 3px;
  color: #fff;
  line-height: 3vh;
  padding-left: 1vw;
  padding-right: 1vw;
  cursor: pointer;
  margin-left: 1vw;
}
.flex-1 {
  height: 3vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5vh;
}
.ji {
  padding-right: 0.5vw;
  font-size: 0.7vw;
  color: #8cb0be;
}
.add {
  padding: 0 1vw 0 1vw;
  line-height: 3vh;
  text-align: center;
  background: #0058ce;
  border-radius: 3px;
  color: #fff;
  margin-right: 0.6vw;
  cursor: pointer;
}
</style>
  