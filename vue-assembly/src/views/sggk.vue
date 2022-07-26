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
            <select v-model="bbh" class="xubut" @change="selectoutgal()">
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
          <td style="width: 8vw">日期</td>
          <td>步骤{{ curlist[0].luhao }}</td>
          <td>标准(h)</td>
          <td>用时(h)</td>
          <td style="width: 21vw;">施工关键点质量管控标准</td>
          <td style="width: 15vw">存档照片</td>
          <td style="width: 15vw">关键施工尺寸、数据</td>
          <td>施工技术人员</td>
          <td>高炉跟踪人员</td>
          <td>施工异常项记录及建议</td>
        </tr>
        </thead>
      </table>
      <div style="height: 80vh;overflow:auto">
        <table class="table1s" style="width: 99vw;margin-left: 0.5vw">
          <thead>
          <tr>
            <td rowspan="6" style="width: 8vw;text-align: left">
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 7.5vw;text-align: left"
                  v-model="curlist[0].rdate"
              />
              <!--              日期-->
            </td>
            <td class="piuie" style="text-align: left">放残铁</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[0].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[0].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">根据残铁孔高度、角度及撇渣器底部侵蚀高度确定烧熔位置，保证渣铁放净。
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','1')" class="gmke">
              <div v-for="(item,index) in pht1" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>
            <td style="width: 15vw;text-align: left;padding-left: 0vw">
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 14.5vw;text-align: left"
                  v-model="curlist[0].gjsscc"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[0].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[0].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[0].shigongyichangjilu"
              />
            </td>
          </tr>
          <tr>
            <td class="piuie" style="text-align: left">解体</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[1].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[1].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">
              <div>1、清除侵蚀氧化疏松层，打毛沟帮光滑部位，不残留渣铁。</div>
              <div>2、沟底距离模具底部150~200mm为标准，沟帮浇注厚度≥300mm。</div>
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','2')" class="gmke">
              <div v-for="(item,index) in pht2" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>

            <td style="width: 15vw;text-align: left;padding-left: 0vw">
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="curlist[1].gjsscc"
              >
              </el-input>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[1].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[1].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[1].shigongyichangjilu"
              />
            </td>
          </tr>
          <tr>
            <td class="piuie" style="text-align: left">支模</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[2].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[2].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">
              <div>1、模具横梁必须贴合主沟钢壳护板后进行焊接，中心与铁口中心线重合，模具对接处应对齐，必须包裹镀锌铁皮便于脱模。</div>
              <div>2、撇渣器如需套浇支模对接处填塞焦粉、或钢板等堵塞。</div>
              <div>3、支模完成后由承包方、高炉共同对沟帮、底部浇注厚度最小、最大值测量。</div>
              <div>4、模具校准后在铺设钢轨并用电焊固定两端，严禁模具上浮、移位。</div>
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','3')" class="gmke">
              <div v-for="(item,index) in pht3" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>

            <td>
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="curlist[2].gjsscc"
              >
              </el-input>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[2].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[2].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[2].shigongyichangjilu"
              />
            </td>
          </tr>


          <!--          第四行-->
          <tr>
            <td class="piuie" style="text-align: left">浇注</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[3].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[3].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">
              <div>1、湿混时间≥3分钟，搅拌机到达浇注位置；出料1分钟内完成；加水量沟壁56-58kg/t, 沟底最大加水量62kg/t</div>
              <div>2、加水使用搅拌机自带的标定后的水桶，定量加水</div>
              <div>3、现场振动不得出现漏振过震或蜂窝麻面现象，投料时应在投料下面振动不得出现间歇，振动至料气泡全部逸出后，
                提振动棒时应边振边慢慢提起，不得迅速提起留下空洞。沟底等温度较高区域震动要及时迅速，防止高温材料失水过快或凝固。
              </div>
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','4')" class="gmke">
              <div v-for="(item,index) in pht4" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>

            <td>
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="curlist[3].gjsscc"
              >
              </el-input>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[3].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[3].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[3].shigongyichangjilu"
              />
            </td>
          </tr>
          <!--            第五行-->
          <tr>
            <td class="piuie" style="text-align: left">脱模</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[4].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[4].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">
              <div>1、烘烤后，沟体工作面向内200mm处测温≥120℃具备出铁条件</div>
              <div>2、 由于使用木材烘烤，无法量化，经验很重要，烘烤步骤大致为：拆模后，风干0.5H；点火、小火烘烤0.5H；中火烘烤1H ；间隔盖上铁板大火烘烤1H，严禁氧气直接吹沟帮</div>
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','5')" class="gmke">
              <div v-for="(item,index) in pht5" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>

            <td>
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="curlist[4].gjsscc"
              >
              </el-input>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[4].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[4].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[4].shigongyichangjilu"
              />
            </td>
          </tr>
          <!--      第六行-->
          <tr>
            <td class="piuie" style="text-align: left">脱模</td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[5].biaozhun"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: right"
                  v-model="curlist[5].yongshi"
              />
            </td>
            <td style="width: 20vw;text-align: left " class="piuie">
              <div>脱模先将固定模具的各个焊点用大锤打掉，确保没有残余焊点。将捆绑薄铁板的铁丝用断掉后。使用大锤将要起的模具震松，
                在模具一端挂上吊具，用天车将模具起出。过程中，根据情况可能会向模具打水冷却。
                大锤再次振打。模具全部提出后，铁板也必须全部清理出沟体。
              </div>
            </td>
            <td style="width: 15vw">
              <input style="color:#fff;" type="file" name="myfile" @change="upload('','6')" class="gmke">
              <div v-for="(item,index) in pht6" :key="index"
                   style="width: 15vw;">
                <!--              文件上传-->
                <img :src="item"
                     style="width: 7.5vw;height: 10vh;float:left;overflow: hidden;"
                >
              </div>
            </td>

            <td>
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="curlist[5].gjsscc"
              >
              </el-input>
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[5].ssjsrenyuan"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[5].gaohugenzong"
              />
            </td>
            <td>
              <input
                  type="text"
                  class="inputindex"
                  style="cursor: pointer;color: red;width: 6vw;text-align: left"
                  v-model="curlist[5].shigongyichangjilu"
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
import 'element-ui/lib/theme-chalk/index.css';

export default {
  data() {
    return {
      tabls: ["1#高炉", "2#高炉", "3#高炉", "4#高炉", "5#高炉"],
      dia: 0,
      //版本号
      bbhlist: [],
      bbh: "",
      //根据版本号和炉号查询数据
      curlist: [],
      textarea: "",
      loading: false,
      urlcries: "",
      fileList: [],
      file: "",
      formFileList: [],
      cards: [],

      pht1: [],
      pht2: [],
      pht3: [],
      pht4: [],
      pht5: [],
      pht6: [],
    }
  },
  methods: {


    //上传图片
    upload(event, cuciea) {
      this.loadcoalgas = true;
      var e = window.event || event;
      // 获取当前选中的文件
      var file = e.target.files[0];
      var formData = new FormData();
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append("file", file);
      axios.post("http://web.fsxgt.cn:18888/v2/upload/" + "220570" + "?fileClass=1attr1=zxattr2=zcattr3=zvattr4=zbattr5=zb", formData, config).then((res) => {
        if (res.data.code == '200') {
          this.$message.success("上传成功!");
          this.loadcoalgas = false;
          console.log(res.data.url)
          console.log(cuciea)
          switch (cuciea) {
            case "1":
              this.pht1.push(res.data.url);
              break;
            case "2":
              this.pht2.push(res.data.url);
              break;
            case "3":
              this.pht3.push(res.data.url);
              break;
            case "4":
              this.pht4.push(res.data.url);
              break;
            case "5":
              this.pht5.push(res.data.url);
              break;
            case "6":
              this.pht6.push(res.data.url);
              break;
            default:
              break;
          }
          console.log(this.pht1)
        }
      })
    },
    insernewbbh() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/insertwebeac",
        params: {
          bbh: this.bbhlist[this.bbhlist.length - 1],
        },
      }).then((res) => {
        this.tefepal();
        if (res.data == "0") {
          this.$message("当前版本已存在")
        } else {
          this.$message("新增成功")
        }
        this.loading = false;
      });
    },
    tucierl() {
      this.deupet();
      this.$message("保存成功")
    },
    cxe(index) {
      this.deupet();
      this.dia = index
      this.pht1 = [];
      this.pht2 = [];
      this.pht3 = [];
      this.pht4 = [];
      this.pht5 = [];
      this.pht6 = [];
      //根据版本号和炉号查询数据
      this.selectoutgal()
    },
    //点击按钮先删除在储存
    deupet() {
      this.loading = true;
      this.curlist[0].cundangzhaopian = this.pht1.join("===");
      this.curlist[1].cundangzhaopian = this.pht2.join("===");
      this.curlist[2].cundangzhaopian = this.pht3.join("===");
      this.curlist[3].cundangzhaopian = this.pht4.join("===");
      this.curlist[4].cundangzhaopian = this.pht5.join("===");
      this.curlist[5].cundangzhaopian = this.pht6.join("===");
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/deupet",
        params: {
          dulist: JSON.stringify(this.curlist)
        },
      }).then((res) => {
        this.loading = false;
      });
    },
    //  查询版本信息
    tefepal() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectsggkbbh",
        params: {},
      }).then((res) => {
        this.bbhlist = res.data;
        this.bbh = this.bbhlist[this.bbhlist.length - 1];
        this.selectoutgal();
      });
    },
    //根据版本号和炉号查询数据
    selectoutgal() {
      this.loading = true;
      this.pht1 = [];
      this.pht2 = [];
      this.pht3 = [];
      this.pht4 = [];
      this.pht5 = [];
      this.pht6 = [];
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectoutgal",
        params: {
          bbh: this.bbh,
          luhao: this.dia,
        },
      }).then((res) => {
        this.curlist = res.data;
        console.log(this.curlist)
        if (this.curlist[0].cundangzhaopian != null) {
          this.pht1 = this.curlist[0].cundangzhaopian.split("===");
        }
        if (this.curlist[1].cundangzhaopian != null) {
          this.pht2 = this.curlist[1].cundangzhaopian.split("===");
        }
        if (this.curlist[2].cundangzhaopian != null) {
          this.pht3 = this.curlist[2].cundangzhaopian.split("===");
        }
        if (this.curlist[3].cundangzhaopian != null) {
          this.pht4 = this.curlist[3].cundangzhaopian.split("===");
        }
        if (this.curlist[4].cundangzhaopian != null) {
          this.pht5 = this.curlist[4].cundangzhaopian.split("===");
        }
        if (this.curlist[5].cundangzhaopian != null) {
          this.pht6 = this.curlist[5].cundangzhaopian.split("===");
        }
        console.log(this.pht1)
        console.log(this.pht2)
        this.loading = false;
      });
    }
  },
  components: {},
  created() {
  },
  mounted() {
    //  版本号
    this.tefepal();
  },
};
</script>
<style scoped>

input[type="file"] {
  color: transparent !important;
}

.gmke input {
  color: #444;
  background: #eee;
  border-color: #ccc;
  text-decoration: none
}

.inputindex {
  background-color: #1E2D42;
  color: #fff;
  border: none;
  width: 3vw;
  height: 2.5vh;
  margin-left: 0.1vw;
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

.piuie {
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
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
  height: 3vh !important;
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
  height: 2.7vh !important;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
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
  height: 2.7vh !important;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
  background-color: #142a53;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}

.table tbody tr {
  color: #fff;
}

.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
  border-right: solid 0.1vw #2b354a;
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
<style>
.el-textarea__inner {
  color: red !important;
  height: 15vh !important;
  background-color: #1E2D42 !important;
  border: #1E2D42 !important;
  overflow-y: false !important;
  padding-left: 0vw !important;
  display: flex;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar {
  display: none;
}
</style>

