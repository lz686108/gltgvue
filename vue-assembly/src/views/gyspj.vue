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
            <select v-model="bbh" class="xubut" @change="selectgyspjbl()">
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
      justify-content: center;align-items: center;color: #ffffff;cursor: pointer" @click="updategyspjgs()">
          保存
        </div>
        <div style="background-color: #0058CE;font-size: 0.8vw;width: 4vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;color: #ffffff;cursor: pointer" @click="insernewbbh()">
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
      <div
          style="width: 98vw;margin-left: 0.2vw;height: 2.5vh;display: flex;justify-content: space-between;font-size: 0.7vw;color: #ffffff;align-items: center;margin-left: 0.5vw;padding-top:1vh ">
        <div><span>厂商名称：
          <input
              type="text"
              class="inputindex"
              v-model="pjxx[0].csnamers"
              style="cursor: pointer;color: red;width: 12vw;text-align: left"
          />
</span></div>
        <div><span>耐材名称：
                      <input
                          type="text"
                          class="inputindex"
                          v-model="pjxx[0].ncnamers"
                          style="cursor: pointer;color: red;width: 12vw"
                      />

        </span></div>
        <div><span>时间：{{ pjxx[0].crdate }}</span></div>
      </div>
      <table class="table" style="width: 99vw;margin-left: 0.5vw">
        <thead style="margin-top: 1vh">
        <tr>
          <td>项目</td>
          <td>权重</td>
          <td>评价单位</td>
          <td style="width: 21vw;">基本考核项目</td>
          <td>单位</td>
          <td>标准</td>
          <td>权重</td>
          <td style="width: 21vw">加减分规则</td>
          <td>得分</td>
          <td>说明</td>
        </tr>
        </thead>
      </table>
      <div>
        <table class="table1s" style="width: 99vw;margin-left: 0.5vw">
          <thead>
          <tr>
            <td rowspan="3" style="text-align: left;padding-left: 0.5vw">材料质量稳定性</td>
            <td rowspan="3" style="text-align: left;padding-left: 0.5vw">40%</td>
            <td rowspan="3" style="text-align: left;padding-left: 0.5vw">使用单位</td>
            <td style="width: 20vw;text-align: left;padding-left: 0.5vw;padding-right: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              高炉主铁沟（含撇渣器）单沟通铁量不低于16万吨（期间允许一次9小时小修，大修时间18小时）①
            </td>
            <td style="text-align: left;padding-left: 0.5vw">万吨</td>
            <td style="text-align: left;padding-left: 0.5vw">18h/16万吨</td>
            <td style="text-align: right;padding-right: 0.5vw">25</td>
            <td style="width: 21vw;text-align: left">
              <div style="margin-left: 0.5vw">
                1、通铁量每提高或降低5000吨铁加减1分。
              </div>
              <div style="margin-left: 0.5vw">
                2、中修时间每提前1小时或超出1小时加减1分
              </div>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen1"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming1"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 20vw;text-align: left;padding-left: 0.5vw;padding-right: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              沟役运行期间无漏铁事故
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">10</td>
            <td style="text-align: left;padding-left: 0.5vw">出现漏铁事故，扣10分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen2"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming2"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="width: 20vw;text-align: left;padding-left: 0.5vw;padding-right: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              每批（车）有效耐火材料出厂检验报告、产品合格证（带乙方质检部门印章）及发货清单
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">5</td>
            <td style="text-align: left;padding-left: 0.5vw">随车无材质单一次扣1分</td>
            <td><input
                type="text"
                class="inputindex"
                v-model="pjxx[0].defen3"
                style="cursor: pointer;color: red;width: 6vw;text-align: right"
            /></td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming3"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td rowspan="6" style="text-align: left;padding-left: 0.5vw">现场管理与施工</td>
            <td rowspan="6" style="text-align: left;padding-left: 0.5vw">50%</td>
            <td rowspan="6" style="text-align: left;padding-left: 0.5vw">使用单位</td>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">满足正常生产使用需求，无生产延误</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">10</td>
            <td style="text-align: left;padding-left: 0.5vw">造成生产延误次数为0，每延误1次扣1-10分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen4"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming4"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">服从现场管理人员指挥，无违章项</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">5</td>
            <td style="text-align: left;padding-left: 0.5vw">不听从指挥一次扣2分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen5"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming5"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">主沟浇注料库存量/支沟浇注料存量①</td>
            <td style="text-align: left;padding-left: 0.5vw">吨</td>
            <td style="text-align: left;padding-left: 0.5vw">45/15</td>
            <td style="text-align: right;padding-right: 0.5vw">10</td>
            <td style="text-align: left;padding-left: 0.5vw">低于标准一次扣2.5分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen6"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming6"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">现场物料、工器具摆放整齐有序无杂物</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">5</td>
            <td style="text-align: left;padding-left: 0.5vw">发现一次扣1分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen7"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming7"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              在规定时间内完成沟体和材料设计，并提供沟体施工图，以及详细的施工作业、烘烤、维护方案
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">15</td>
            <td style="text-align: left;padding-left: 0.5vw">未完成一次扣1-15分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen8"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming8"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">积极配合使用单位提出的改进措施</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">5</td>
            <td style="text-align: left;padding-left: 0.5vw">不配合一次扣2.5分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen9"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming9"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <!--          3-->
          <tr>
            <td rowspan="4" style="text-align: left;padding-left: 0.5vw">商务评价</td>
            <td rowspan="4" style="text-align: left;padding-left: 0.5vw">10%</td>
            <td rowspan="4" style="text-align: left;padding-left: 0.5vw">供应处</td>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">按要求时间发货</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">2.5</td>
            <td style="text-align: left;padding-left: 0.5vw">未按要求时间发货一次扣2分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen10"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming10"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              月度发票入账及时性、手续齐全、材料清晰工整
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">2.5</td>
            <td style="text-align: left;padding-left: 0.5vw">延误一次扣1分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen11"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming11"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">服务态度良好</td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">2.5</td>
            <td style="text-align: left;padding-left: 0.5vw">态度差一次扣1分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen12"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming12"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <tr>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">公司组织会议迟到、早退、缺席、怠慢者
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td style="text-align: right;padding-right: 0.5vw">2.5</td>
            <td style="text-align: left;padding-left: 0.5vw">一次扣1分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen13"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming13"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />
            </td>
          </tr>
          <!--        4-->
          <tr>
            <td style="text-align: left;padding-left: 0.5vw">特殊贡献</td>
            <td style="text-align: left;padding-left: 0.5vw">加分项</td>
            <td style="text-align: left;padding-left: 0.5vw">使用单位</td>
            <td style="text-align: left;padding-left: 0.5vw;padding-top: 1vh;padding-bottom: 1vh">
              其他服务商力量不足时，主动协助其完成作业任务，保障公司生产
            </td>
            <td style="text-align: left;padding-left: 0.5vw">次</td>
            <td style="text-align: left;padding-left: 0.5vw">0</td>
            <td></td>
            <td style="text-align: left;padding-left: 0.5vw">一次加1-5分</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].defen14"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  v-model="pjxx[0].shuoming14"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
              />

            </td>
          </tr>
          <!--          最后一行-->
          <tr>
            <td style="text-align: left;padding-left: 0.5vw">得分:</td>
            <td style="text-align: left;padding-left: 0.5vw">102.9</td>
            <td style="text-align: left;padding-left: 0.5vw">分</td>
            <td colspan="7"></td>
          </tr>
          </thead>
        </table>

      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tabls: ["1#高炉", "2#高炉", "3#高炉", "4#高炉", "5#高炉"],
      dia: 0,
      //版本号
      bbhlist: [],
      bbh: "",
      //评价信息
      pjxx: [],
      loading: false
    }
  },
  methods: {
    insernewbbh() {
      this.loading = true
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/insertgyspj",
        params: {
          bbhs: this.bbh,
        },
      }).then((res) => {
        if ("1" == res.data) {
          this.$message("当前版本已存在");
        } else {
          this.bbhlist = [];
          this.selectgyspjbbh();
          this.$message("新增成功");
        }
        this.loading = false
      });
    },
    cxe(index) {
      this.updategyspj();
      this.dia = index;
      this.selectgyspjbl();
    },
    updategyspjgs() {
      this.updategyspj();
      this.$message("保存成功")
    },
    //查询版本号
    selectgyspjbbh() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectgyspjbbh",
        params: {
          bbhe: this.bbh
        },
      }).then((res) => {
        this.bbhlist = res.data;
        this.bbh = this.bbhlist[this.bbhlist.length - 1]
        //版本号炉号查询供应商评价信息
        this.selectgyspjbl();
      });
    },
    //版本号炉号查询供应商评价信息
    selectgyspjbl() {
      this.loading = true
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectgyspjbl",
        params: {
          bbhe: this.bbh,
          luhoa: this.dia,
        },
      }).then((res) => {
        this.pjxx = res.data;
        this.loading = false
      });
    },
    //查询炉号对应供应商名称
    selectnmlu() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectnmlu",
        params: {},
      }).then((res) => {
      });
    },
    //修改供应商评价信息
    updategyspj() {
      this.loading = true
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/updategyspj",
        params: {
          gyspjlist: JSON.stringify(this.pjxx)
        },
      }).then((res) => {
        this.loading = false
      });
    }
  },
  components: {},
  created() {
  },
  mounted() {
    //版本号
    this.selectgyspjbbh();
  },
};
</script>
<style scoped>
.ared {
  background-color: #1D3466 !important;
  color: #809DD2 !important;
}

.eia {
  background-color: #0058CE !important;
  color: #ffffff !important;
}

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
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: none;
  width: 6vw;
  height: 2.5vh;
  margin-left: 0.1vw;
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

