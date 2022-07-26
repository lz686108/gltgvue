<template>
  <div class="max">
    <p>button按钮</p>
    <div class="flex">
      <dm_button :value="'默认按钮'"></dm_button>
      <dm_button :type="'reset'" :value="'重置按钮'"></dm_button>
      <dm_button :type="'delete'" :value="'删除按钮'"></dm_button>
      <dm_button :type="'empty'" :value="'清空'"></dm_button>
    </div>
    <p>icon button按钮</p>
    <div class="flex">
      <dm_button :value="'导出'" :icon="'export'"></dm_button>
      <dm_button :value="'修改'" :icon="'update'"></dm_button>
      <dm_button :value="'切换'" :icon="'switch'"></dm_button>
      <dm_button :value="'新建'" :icon="'newly'"></dm_button>
      <dm_button :type="'delete'" :value="'删除'" :icon="'delete'"></dm_button>
      <dm_button :type="'empty'" :value="'清空'" :icon="'empty'"></dm_button>
    </div>
    <p>时间组件</p>
    <dm_time_month @dmclick="day"></dm_time_month>
    <dm_time_day style="margin-top: 1vw"></dm_time_day>
    <dm_time_day_section style="margin-top: 1vw" @dmclick="section">
    </dm_time_day_section>
    <p>按钮切换</p>
    <dm_tab :dm_tab="dm_tab" @dmclick="bar_click"> </dm_tab>
    <p>搜索功能</p>
    <div class="dm_flex_start">
      <input class="dm_input" type="text" placeholder="请输入" />
      <div class="dm_search">搜索</div>
    </div>
    <p>表格标题图标</p>
    <div class="bac">
      <dm_icon :icon="'genzong'" :value="'跟踪'"> </dm_icon>
      <dm_icon :icon="'yujing'" :value="'预警'"> </dm_icon>
      <dm_icon :icon="'mingxi'" :value="'明细'"> </dm_icon>
      <dm_icon :icon="'qushi'" :value="'趋势'"> </dm_icon>
      <dm_icon :icon="'kanban'" :value="'看板'"> </dm_icon>
      <dm_icon :icon="'wendu'" :value="'温度'"> </dm_icon>
      <dm_icon :icon="'canshu'" :value="'参数'"> </dm_icon>
      <dm_icon :icon="'chengfen'" :value="'成分'"> </dm_icon>
      <dm_icon :icon="'rili'" :value="'日历'"> </dm_icon>
      <dm_icon :icon="'mulu'" :value="'目录'"> </dm_icon>
      <dm_icon :icon="'nengyuan'" :value="'能源'"> </dm_icon>
      <dm_icon :icon="'bingtu'" :value="'饼图'"> </dm_icon>
      <dm_icon :icon="'tongji'" :value="'统计'"> </dm_icon>
      <dm_icon :icon="'shijian'" :value="'时间'"> </dm_icon>
      <dm_icon :icon="'biaoge'" :value="'表格'"> </dm_icon>
      <dm_icon :icon="'hezuo'" :value="'合作'"> </dm_icon>
      <dm_icon :icon="'cengji'" :value="'层级'"> </dm_icon>
      <dm_icon :icon="'fenlei'" :value="'分类'"> </dm_icon>
      <dm_icon :icon="'fenzhi'" :value="'分支'"> </dm_icon>
      <dm_icon :icon="'shangpin'" :value="'商品'"> </dm_icon>
      <dm_icon :icon="'shuju'" :value="'数据'"> </dm_icon>
      <dm_icon :icon="'chengben'" :value="'成本'"> </dm_icon>
      <dm_icon :icon="'fenji'" :value="'分级'"> </dm_icon>
      <dm_icon :icon="'zhuzhuangtu'" :value="'柱状图'"> </dm_icon>
      <dm_icon :icon="'tianqiyupan'" :value="'天气预判'"> </dm_icon>
      <dm_icon :icon="'zhibiao'" :value="'指标'"> </dm_icon>
      <dm_icon :icon="'zhouqi'" :value="'周期'"> </dm_icon>
      <dm_icon :icon="'tupian'" :value="'图片'"> </dm_icon>
      <dm_icon :icon="'baojing'" :value="'报警'"> </dm_icon>
      <dm_icon :icon="'jiankong'" :value="'监控'"> </dm_icon>
      <dm_icon :icon="'yunxing'" :value="'运行'"> </dm_icon>
      <dm_icon :icon="'lishi'" :value="'历史'"> </dm_icon>
      <dm_icon :icon="'chuangan'" :value="'传感'"> </dm_icon>
      <dm_icon :icon="'guanlian'" :value="'关联'"> </dm_icon>
      <dm_icon :icon="'biaozhun'" :value="'标准'"> </dm_icon>
    </div>
    <dm_button :value="'新增修改弹窗'" @dmclick="show = true"></dm_button>

    <dm_meng v-if="show">
      <!-- <div class="dm_flex" style="width: 90%; flex-wrap: wrap">
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
      </div> -->
      <div class="dm_flex dm_flex_button">
        <div class="dm_sure dm_cancel" @click="show = false">取消</div>
        <div class="dm_sure" @click="show = false">保存</div>
      </div>
    </dm_meng>
    <dm_option :dm_list="dm_tab" @dmclick="gg"> </dm_option>
    <span style="color: #fff">asdadas</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: {},
      show: false,
      dm_tab: ["按钮1", "按钮2", "按钮3", "按钮4", "按钮5"],
    };
  },

  methods: {
    gg(parms) {
      console.log(parms);
    },
    day(parms) {
      console.log(parms);
    },
    bar_click(parms) {
      console.log(parms);
    },
    section(parms) {
      console.log(parms, "我是周期组件");
    },
  },
  created() {},
  mounted() {
    console.log("md5加密方式：" + this.$md5("holle"));

    console.log("sha256加密方式：" + this.$sha256("holle"));

    console.log("base加密方式：" + this.$sha256("holle"));
  },
};
</script>

<style scoped>
.bac {
  width: 95%;
  min-height: 5vh;
  background: #2a354b;
  border-radius: 4px;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 0.5vw;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
.max {
  width: 84vw;
  height: 91.5vh;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.flex .dm_button:nth-of-type(2),
.flex .dm_button:nth-of-type(3),
.flex .dm_button:nth-of-type(4),
.flex .dm_button:nth-of-type(5),
.flex .dm_button:nth-of-type(6) {
  margin-left: 1vw;
}
p {
  color: #fff;
  padding: 0.5vw;
}
</style>
  