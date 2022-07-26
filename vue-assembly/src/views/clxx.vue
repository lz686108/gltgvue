<template>
  <div>
    <!--    菜单栏-->
    <div style="width: 99.6vw;display: flex;justify-content: space-between;margin-top: 1vh;margin-left: 0.2vw">
      <div style="display: flex;justify-content: space-between">
        <div style="margin-right: 1vw">
          <div class="qhbb">
        <span style="color: #809dd2; margin-right: 0.5vw; margin-left: 0.5vw"
        >版本</span
        >
            <select v-model="bbh" class="xubut" @change="selectclxx()">
              <option v-for="(item, index) in bbhlist" :key="index" style="background-color: #1d3466">
                {{ item }}
              </option>
            </select>
          </div>

        </div>
        <div :class="index == dia ? 'eia' : 'ared'" v-for="(item,index) in tabls" :key="index" @click="cxe(index)"
             style="display: flex;justify-content: space-around;
        color:#ffffff;background-color: #1D3466;color: #809DD2;font-size: 0.8vw;width: 4vw;
        margin-left: 0.2vw;border-radius: 0.2vw;align-items: center;cursor: pointer">
          {{ item }}
        </div>
      </div>
      <div style="width: 8.5vw;display: flex;justify-content: space-between">
        <div style="background-color: #0058CE;font-size: 0.8vw;width: 4vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;color: #ffffff" @click="tucierl()">
          保存
        </div>
        <div style="background-color: #0058CE;font-size: 0.8vw;width: 4vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;color: #ffffff" @click="insernewbbh()">
          新增
        </div>
      </div>


    </div>
    <!--    表格-->
    <div
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="margin-top: 1vh;width: 99.6vw;margin-left: 0.2vw;background-color: #2A354B;height: 86.5vh">
      <table class="table" style="width: 99vw;margin-left: 0.5vw">
        <thead style="margin-top: 1vh">
        <tr>
          <td rowspan="2">高炉</td>
          <td rowspan="2">厂家</td>
          <td rowspan="2">料种</td>
          <td rowspan="2">编号</td>
          <td colspan="6">检验</td>
          <td colspan="2">库存量</td>
          <td colspan="2">存放</td>
        </tr>
        <tr>
          <td>到货日期</td>
          <td>检验项目</td>
          <td>技术标准</td>
          <td>检验结果</td>
          <td>结果判定</td>
          <td>检验机构</td>
          <td>标准</td>
          <td>实际</td>
          <td>存放地点</td>
          <td>存放条件</td>
        </tr>
        </thead>
      </table>
      <div>
        <table class="table1s" style="width: 99vw;margin-left: 0.5vw">
          <thead>
          <tr>
            <td rowspan="10" style="text-align: left">
              {{ gaoe[0].lhnubm }}
            </td>
            <td rowspan="10" style="color: red;text-align: left;">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].changjia"
                  style="cursor: pointer;color: red"
              />
            </td>
            <td rowspan="5" style="text-align: left">主沟料</td>
            <td rowspan="5" style="color: red;text-align: left">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].bianhao"
                  style="cursor: pointer;color: red"
              />
            </td>
            <td rowspan="5" style="color: red">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].dhdate"
                  style="cursor: pointer;color: red"
              />
            </td>
            <td style="text-align: left">Al2O3</td>
            <td style="text-align: right">≥65</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />

            </td>
            <td rowspan="5" style="text-align: left">国家耐火材料质量监督检验中心</td>
            <td rowspan="5" style="text-align: right">45</td>
            <td rowspan="5" style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].shiji"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td rowspan="5" style="text-align: left;padding-left: 0.4vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[0].cunfangdidian"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
            <td rowspan="5" style="text-align: left">防火防水</td>
          </tr>
          <tr>
            <td style="text-align: left">SiC+C</td>
            <td style="text-align: right">≥16</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[1].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[1].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">加热永久线变化率</td>
            <td style="text-align: right">-0.10～0.5</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[2].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[2].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">常温耐压强度</td>
            <td style="text-align: right">≥20</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[3].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[3].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">高温耐压强度</td>
            <td style="text-align: right">≥50</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[4].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[4].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td rowspan="5" style="text-align: left"> 支沟料</td>
            <td rowspan="5" style="color:red;text-align: left">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].bianhao"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
            <td rowspan="5" style="color: red">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].dhdate"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
            <td style="text-align: left">Al2O3</td>
            <td style="text-align: right">≥65</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
            <td rowspan="5" style="text-align: left">国家耐火材料质量监督检验中心</td>
            <td rowspan="5" style="text-align: right">20</td>
            <td rowspan="5" style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].shiji"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td rowspan="5" style="text-align: left;padding-left: 0.4vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[5].cunfangdidian"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
            <td rowspan="5" style="text-align: left">防火防水</td>
          </tr>
          <tr>
            <td style="text-align: left">SiC+C</td>
            <td style="text-align: right">≥16</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[6].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[6].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">加热永久线变化率</td>
            <td style="text-align: right">-0.10～0.5</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[7].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[6].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">常温耐压强度</td>
            <td style="text-align: right">≥20</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[8].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[8].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align: left">高温耐压强度</td>
            <td style="text-align: right">≥50</td>
            <td style="text-align: right">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[9].jianyanjieguo"
                  style="cursor: pointer;color: red;text-align: right"
              />
            </td>
            <td style="text-align: left;padding-left: 0.5vw">
              <input
                  type="text"
                  class="inputindex"
                  v-model="gaoe[9].jieguopanding"
                  style="cursor: pointer;color: red;text-align: left"
              />
            </td>
          </tr>

          </thead>
        </table>

      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import ElementUI from 'element-ui';

export default {
  data() {
    return {
      tabls: ["1#高炉", "2#高炉", "3#高炉", "4#高炉", "5#高炉"],
      dia: 0,
      //  高炉信息数组
      gaoe: [],
      kept: "",
      //版本号
      bbhlist: [],
      bbh: "",
      loading: false,
    }
  },
  methods: {
    tucierl() {
      this.deup();
      this.$message("保存成功")
    },
    insernewbbh() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/insernewbbh",
        params: {
          bbhe: this.bbh
        },
      }).then((res) => {
        this.bbhlist = [];
        this.selectbbh();
        this.loading = false;
      });
    },
    deup() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/deleupta",
        params: {
          geors: JSON.stringify(this.gaoe),
          tebbhnmu: this.bbh
        },
      }).then((res) => {
        this.loading = false;
      });
    },
    cxe(index) {
      this.deup();
      this.dia = index
      this.selectclxx();
    },
    // 查询高炉信息
    selectclxx() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectclxx",
        params: {
          glig: this.dia,
          tebbhnmu: this.bbh,
        },
      }).then((res) => {
        this.gaoe = res.data;
        this.loading = false;
      });
    },
    //  修改信息
    tegek() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/updatedaget",
        params: {
          geors: JSON.stringify(this.gaoe),
          glnumb: this.tabls[this.dia],
        },
      }).then((res) => {
      });
    },
    //查询版本号
    selectbbh() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectbbh",
        params: {},
      }).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (i == 20) {
            break;
          }
          this.bbhlist.push(res.data[i])
        }
        this.bbh = this.bbhlist[this.bbhlist.length - 1];
        this.selectclxx();
      });
    }
  },
  components: {},
  created() {
  },
  watch: {
    dia() {
      console.log(this.dia)
    }
  },
  mounted() {
    //版本号
    this.selectbbh();

  },
};
</script>
<style scoped>
.qhbb {
  background-color: #1d3466;
  color: #fff;
  font-size: 0.5vw;
  display: flex;
  align-items: center;
  margin-right: 0.5vw;
  cursor: pointer;
  height: 3.5vh;
  border-radius: 0.2vw;
}

.xubut {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #ffffff;
  height: 2vh;
  width: 7.5vw;
  border-radius: 0.3vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
  margin-right: 0.5vw;
}

.inputindex {
  background-color: #1E2D42;
  color: #fff;
  border: none;
  width: 6vw;
  height: 2.5vh;
  margin-left: 0.1vw;
}

.ared {
  background-color: #1D3466 !important;
  color: #809DD2 !important;
}

.eia {
  background-color: #0058CE !important;
  color: #ffffff !important;
}

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
  height: 3vh;
}

.table1s thead tr td {
  height: 2.7vh;
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
  height: 3vh;
}

.table thead tr td {
  height: 2.7vh;
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

