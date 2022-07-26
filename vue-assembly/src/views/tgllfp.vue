<template>
  <div>
    <div style="margin-left: 0.2vw;margin-top: 1vh">
      <dm_time_month @dmclick="matedrse"></dm_time_month>
    </div>
    <div style="color: #ffffff;font-size: 0.7vw;margin-top: 0.5vh;margin-left: 0.2vw;margin-left: 0.5vw">铁钩履历复盘统计</div>
    <div
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 99.6vw;margin-left: 0.2vw;background-color: #2A354B;height: 20.5vh;margin-top: 0.5vh">
      <table class="table" style="width: 98.9vw;margin-left: 0.5vw">
        <thead style="margin-top: 1vh">
        <tr>
          <td rowspan="2" style="width: 11vw">检修类别</td>
          <td colspan="2">1#高炉</td>
          <td rowspan="2">2#高炉</td>
          <td rowspan="2">3#高炉</td>
          <td rowspan="2">4#高炉</td>
          <td rowspan="2">5#高炉</td>
        </tr>
        <tr>
          <td>东</td>
          <td>西</td>
        </tr>
        </thead>
      </table>
      <div>
        <table class="table1s" style="width: 98.9vw;margin-left: 0.5vw">
          <thead>
          <tr>
            <td style="width: 7vw" rowspan="2">最高通铁</td>
            <td style="width: 3.8vw">大修</td>
            <td>{{ zgttlist[0] }}</td>
            <td>{{ zgttlist[2] }}</td>
            <td>{{ zgttlist[4] }}</td>
            <td>{{ zgttlist[6] }}</td>
            <td>{{ zgttlist[8] }}</td>
            <td>{{ zgttlist[10] }}</td>
          </tr>
          <tr>
            <td style="width: 3.8vw">小修</td>
            <td>{{ zgttlist[1] }}</td>
            <td>{{ zgttlist[3] }}</td>
            <td>{{ zgttlist[5] }}</td>
            <td>{{ zgttlist[7] }}</td>
            <td>{{ zgttlist[9] }}</td>
            <td>{{ zgttlist[11] }}</td>
          </tr>
          <tr>
            <td style="width: 7vw" rowspan="2">平均通铁</td>
            <td style="width: 3.8vw">大修</td>
            <td>{{ pjtllist[0] }}</td>
            <td>{{ pjtllist[2] }}</td>
            <td>{{ pjtllist[4] }}</td>
            <td>{{ pjtllist[6] }}</td>
            <td>{{ pjtllist[8] }}</td>
            <td>{{ pjtllist[10] }}</td>
          </tr>
          <tr>
            <td style="width: 3.8vw">小修</td>
            <td>{{ pjtllist[1] }}</td>
            <td>{{ pjtllist[3] }}</td>
            <td>{{ pjtllist[5] }}</td>
            <td>{{ pjtllist[7] }}</td>
            <td>{{ pjtllist[9] }}</td>
            <td>{{ pjtllist[11] }}</td>
          </tr>
          </thead>
        </table>
      </div>
    </div>
    <div style="color: #ffffff;font-size: 0.7vw;margin-top: 0.5vh;margin-left: 0.2vw;margin-left: 0.5vw">
      铁钩履历复盘图
    </div>
    <div
        style="width: 99.6vw;margin-left: 0.2vw;background-color: #2A354B;height: 61vh;margin-top: 0.5vh;display: flex;flex-direction: column;justify-content: space-around">
      <div>
        <curce :id="'id1'" :namars="'1#高炉(东)'"></curce>
      </div>
      <div>
        <curce :id="'id12'" :namars="'1#高炉(西)'"></curce>
      </div>
      <div>
        <curce :id="'id2'" :namars="'2#高炉'"></curce>
      </div>
      <div>
        <curce :id="'id3'" :namars="'3#高炉'"></curce>
      </div>
      <div>
        <curce :id="'id4'" :namars="'4#高炉'"></curce>
      </div>
      <div>
        <curce :id="'id5'" :namars="'5#高炉'"></curce>
      </div>


    </div>


  </div>
</template>
<script>
import {debounce} from "../api/debounce";
import * as echarts from "echarts";
import {export2Excel} from "..//common/js/util";
import curce from "@/components/curce.vue";
import dfh from "@/components/dfh.vue";
import axios from "_axios@0.21.4@axios";

export default {
  props: [],
  data() {
    return {
      zgttlist: [],
      pjtllist: [],
      loading: false,
      //组件日期
      fourdates: "",
    };
  },
  methods: {
    //初始化查询最高通铁
    selectzgtthpjtt() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectzgtthpjtt1",
        params: {},
      }).then((res) => {
        this.zgttlist = res.data;
      });
    },
    //平均通铁
    cegep() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/cegep",
        params: {},
      }).then((res) => {
        this.pjtllist = res.data;
        this.loading = false;
      });
    },
    matedrse(param) {
      this.$children[1].datels = param.substring(0,4);
      this.$children[2].datels = param.substring(0,4);
      this.$children[3].datels = param.substring(0,4);
      this.$children[4].datels = param.substring(0,4);
      this.$children[5].datels = param.substring(0,4);
      this.$children[6].datels = param.substring(0,4);
    }
  },
  components: {
    dfh,
    curce
  },
  created() {
  },
  mounted() {
    this.selectzgtthpjtt();
    this.cegep();
  },
}
;
</script>

<style scoped>
.table1s,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}

/* 实现鼠标滑动表格的一整行变色 */
.table1s tbody tr:hover > td {
  background-color: #284269;
}

tr:hover {
  background-color: #284269;
}

/* 实现鼠标滑动表格的一整行变色 */
.table1s tbody {
  /* 表格滚轮 */
  height: 36vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.8%;
  scrollbar-width: none;
  border-collapse: collapse;
}

.table1s tbody tr td {
  background-color: #1f2e43;
  font-size: 0.6vw;
  height: 2.9vh !important;
/* height: 3.2vh !important; */
}

.table1s thead tr td {
  height: 3vh !important;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
}

.table1s tbody tr {
  color: #fff;
}

.table1s td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
  border-right: solid 0.1vw #2b354a;
}

.table1s thead tr td {
  background-color: #1E2D42;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}

.table1s {
  margin-left: 0.2vw;
}

.table1s thead {
  width: 99.8%;
  color: #fff;
  border-collapse: collapse;
}
</style>
<style scoped>
.table,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody tr:hover > td {
  background-color: #284269;
}

tr:hover {
  background-color: #284269;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 36vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.8%;
  scrollbar-width: none;
  border-collapse: collapse;
}

.table tbody tr td {
  background-color: #1f2e43;
  font-size: 0.6vw;
  height: 3vh !important;
}

.table thead tr td {
  height: 2.9vh !important;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
}

.table tbody tr {
  color: #fff;
}

.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
  border-right: solid 0.1vw #2b354a;
}

.table thead tr td {
  background-color: #142a53;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}

.table {
  margin-left: 0.2vw;
}

.table thead {
  width: 99.8%;
  color: #fff;
  border-collapse: collapse;
}

/* 取消表格的滚轮 */
::-webkit-scrollbar-thumb {
  background-color: #000 !important;
  border-radius: 3vw;
}

/* 滑轮背景色 */
/* 滚动条的头尾的颜色 */
::-webkit-scrollbar-button {
  background-color: none;
}

/* 滚动条的头尾的颜色 */
/* 滚动条的背景色 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  background-color: none !important;
  display: none;
}
</style>
