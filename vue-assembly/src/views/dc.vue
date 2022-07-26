<template>
  <!-- 头部 -->
  <div
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="display: flex;justify-content: start">
    <!--    铁钩运行顶层  -->
    <div>
      <div class="centLeftL1">
        <div style="display: flex;align-items: center;margin-left: 0.5vw">异常监控</div>
        <div class="centLeftfour" style="margin-bottom: 0.2vh">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="background-color: #90FEB3;width: 1vw;height: 0.5vh"></div>
            <div style="margin-left: 0.2vw">建议通铁量(东)</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="background-color: #4B99FF;width: 1vw;height: 0.5vh"></div>
            <div style="margin-left: 0.2vw">建议通铁量(西)</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="background-color: #B06BF7;width: 1vw;height: 0.5vh"></div>
            <div style="margin-left: 0.2vw">通铁量</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="background-color: #f76b6d;width: 1vw;height: 0.5vh"></div>
            <div style="margin-left: 0.2vw">大修(东)</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="background-color: #69DBFC;width: 1vw;height: 0.5vh"></div>
            <div style="margin-left: 0.2vw">大修(西)</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center;
          cursor: pointer;color: #a0bad6" @click="dccsals=true">
            <div style="margin-left: 0.2vw">顶层维护</div>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center;
          cursor: pointer;color: #a0bad6" @click="zqweihu=true">
            <div style="margin-left: 0.2vw">周期维护</div>
          </div>

          <div>
          </div>
        </div>
      </div>
      <!--    五个echarts图部分-->
      <div
          style="width: 75vw;height: 26vh;background-color: #2A354B;margin-top: 0.5vh;display: flex;align-items: start;justify-content: start;margin-left: 0.2vw">
        <div id="d1" style="width: 15vw;height: 28vh;"></div>
        <div>
          <dfh id="id1" :dx="tamgce[4]" :xx="tamgce[5]"></dfh>
        </div>
        <div>
          <dfh id="id2" :dx="tamgce[6]" :xx="tamgce[7]"></dfh>
        </div>
        <div>
          <dfh id="id3" :dx="tamgce[8]" :xx="tamgce[9]"></dfh>
        </div>
        <div>
          <dfh id="id4" :dx="tamgce[10]" :xx="tamgce[11]"></dfh>
        </div>
      </div>
      <!--    名称和得分-->
      <div
          style="width: 75vw;height: 7vh;background-color: #2A354B;display: flex;justify-content: space-around;align-items:center;font-size: 0.7vw;color: #ffffff;margin-left: 0.2vw">
        <div
            style="border: solid 1px #90B9CC;width: 5vw;height: 5vh;display: flex;flex-direction: column;align-items: center;justify-content: center">
          <div>{{ quewerps.gaolu1 }}</div>
          <div>{{ quewerps.df1 }}<span>分</span></div>
        </div>
        <div
            style="border: solid 1px #90B9CC;width: 5vw;height: 5vh;display: flex;flex-direction: column;align-items: center;justify-content: center">
          <div>{{ quewerps.gaolu2 }}</div>
          <div>{{ quewerps.df2 }}<span>分</span></div>
        </div>
        <div
            style="border: solid 1px #90B9CC;width: 5vw;height: 5vh;display: flex;flex-direction: column;align-items: center;justify-content: center">
          <div>{{ quewerps.gaolu3 }}</div>
          <div>{{ quewerps.df3 }}<span>分</span></div>
        </div>
        <div
            style="border: solid 1px #90B9CC;width: 5vw;height: 5vh;display: flex;flex-direction: column;align-items: center;justify-content: center">
          <div>{{ quewerps.gaolu4 }}</div>
          <div>{{ quewerps.df4 }}<span>分</span></div>
        </div>
        <div
            style="border: solid 1px #90B9CC;width: 5vw;height: 5vh;display: flex;flex-direction: column;align-items: center;justify-content: center">
          <div>{{ quewerps.gaolu5 }}</div>
          <div>{{ quewerps.df5 }}<span>分</span></div>
        </div>
      </div>
      <!--    炉号部分-->
      <div
          style="width: 75vw;height: 5vh;background-color: #2A354B;display: flex;justify-content: space-around;align-items:start;font-size: 0.7vw;color: #ffffff;margin-left: 0.2vw">
        <div>1#炉</div>
        <div>2#炉</div>
        <div>3#炉</div>
        <div>4#炉</div>
        <div>5#炉</div>
      </div>
      <!--    顶秀建议-->
      <div style="color: #ffffff;font-size: 0.7vw;margin-top: 0.5vh;margin-left: 0.5vw ">定修建议</div>
      <div
          style="width: 75vw;height: 47vh;background-color: #2A354B;margin-top: 0.5vh;display: flex;justify-content: start;margin-left: 0.2vw">
        <div id="meis" style="width: 50vw;height: 47vh"></div>
        <div style="margin-top: 1vh">
          <table class="table" style="width: 24.5vw;">
            <thead>
            <tr style="height: 4.5vh">
              <td colspan="2">计划周期</td>
              <td colspan="2">实际周期</td>
              <td colspan="2">差异</td>
            </tr>
            <tr style="height: 4.5vh">
              <td>大修</td>
              <td>小修</td>
              <td>大修</td>
              <td>小修</td>
              <td>大修</td>
              <td>小修</td>
            </tr>
            </thead>
            <tbody>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx1 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].a }}</td>
              <td style="text-align: right">{{ zhouqilist[0].b }}</td>
              <td style="text-align: right">{{ jhxxzq.gld1 * 1 - zhouqilist[0].a * 1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx1 * 1 - zhouqilist[0].b * 1 }}</td>
            </tr>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx1 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].c }}</td>
              <td style="text-align: right">{{ zhouqilist[0].d }}</td>
              <td style="text-align: right">{{ jhxxzq.gld1 * 1 - zhouqilist[0].c * 1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx1 * 1 - zhouqilist[0].d * 1 }}</td>
            </tr>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld2 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx2 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].e }}</td>
              <td style="text-align: right">{{ zhouqilist[0].f }}</td>
              <td style="text-align: right">{{ jhxxzq.gld2 * 1 - zhouqilist[0].e * 1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx2 * 1 - zhouqilist[0].f * 1 }}</td>
            </tr>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld3 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx3 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].g }}</td>
              <td style="text-align: right">{{ zhouqilist[0].h }}</td>
              <td style="text-align: right">{{ jhxxzq.gld3 * 1 - zhouqilist[0].g * 1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx3 * 1 - zhouqilist[0].h * 1 }}</td>
            </tr>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld4 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx4 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].i }}</td>
              <td style="text-align: right">{{ zhouqilist[0].j }}</td>
              <td style="text-align: right">{{ jhxxzq.gld4 * 1 - zhouqilist[0].i * 1 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx4 * 1 - zhouqilist[0].j * 1 }}</td>
            </tr>
            <tr style="height: 6vh">
              <td style="text-align: right">{{ jhxxzq.gld5 }}</td>
              <td style="text-align: right">{{ jhxxzq.glx5 }}</td>
              <td style="text-align: right">{{ zhouqilist[0].l }}</td>
              <td style="text-align: right">{{ zhouqilist[0].m }}</td>
              <td style="text-align: right">{{ jhxxzq.gld5 * 1 - zhouqilist[0].l }}</td>
              <td style="text-align: right">{{ jhxxzq.glx5 * 1 - zhouqilist[0].m }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--    右侧警报部分-->
    <div>
      <div
          style="display: flex;align-items: center;margin-left: 0.5vw;color: #ffffff;font-size: 0.8vw;margin-top: 0.5vh">
        异常预警
      </div>
      <div
          style="width: 24vw;height: 87.9vh;background-color: #2A354B;margin-left: 0.5vw;margin-top: 1vh;display: flex;flex-direction: column;align-items: center">


        <!--    第一个-->
        <div
            style="height: 20.7vh;width: 23vw;background-color: #1E2D42;margin-top: 1vh;
            display: flex;align-items: center;flex-direction: column;overflow:auto"
        >
          <div v-for="(item,index) in teoperk" :key="index">
            <div
                style="width: 22vw;height: 3.5vh;border: solid 1px #E9374D;background-color: #AD091E;border-radius: 0.2vw;margin-top: 1.5vh;display: flex;align-items: center">
              <div style="border: #F8FAFF 1px dashed;display: flex;align-items: center;margin-left: 0.5vw"><img
                  src="../assets/table_icon/1s.png"></div>
              <div style="font-size: 0.7vw;color: #F8FAFF;margin-left: 0.5vw">
                施工管理
              </div>
            </div>
            <!--          日期-->
            <div
                style="width: 22vw;height: 2vh;display: flex;justify-content: start;align-items: center;margin-top: 1.5vh">
              <div>
                <img
                    src="../assets/table_icon/2s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal">
                {{ item }}
              </div>
            </div>
            <!--          异常规则-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: start;margin-top: 2vh">
              <div>
                <img
                    src="../assets/table_icon/3s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh">
                异常规则:理化成份未达到标准
              </div>
            </div>
            <!--          操作建议-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: center;margin-top: 1vh">
              <div>
                <img
                    src="../assets/table_icon/4s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal">
                操作建议:建议复检，复检不合格禁止使用
              </div>
            </div>
          </div>
        </div>


        <!--      第二个-->
        <div
            style="height: 20.7vh;width: 23vw;background-color: #1E2D42;margin-top: 1vh;
            display: flex;align-items: center;flex-direction: column;overflow:auto"
        >
          <div v-for="(item,index) in skgklist" :key="index">
            <div
                style="width: 22vw;height: 3.5vh;border: solid 1px #E9374D;background-color: #F0722C;border-radius: 0.2vw;margin-top: 1.5vh;display: flex;align-items: center">
              <div style="border: #F8FAFF 1px dashed;display: flex;align-items: center;margin-left: 0.5vw"><img
                  src="../assets/table_icon/1s.png"></div>
              <div style="font-size: 0.7vw;color: #F8FAFF;margin-left: 0.5vw">
                材料检验
              </div>
            </div>
            <!--          日期-->
            <div
                style="width: 22vw;height: 2vh;display: flex;justify-content: start;align-items: center;margin-top: 1.5vh">
              <div>
                <img
                    src="../assets/table_icon/2s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal">
                {{ item.rdate }}
              </div>
            </div>
            <!--          异常规则-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: start;margin-top: 2vh">
              <div>
                <img
                    src="../assets/table_icon/3s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh">
                异常规则:施工异常项记录≥1项
              </div>
            </div>
            <!--          操作建议-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: center;margin-top: 1vh">
              <div>
                <img
                    src="../assets/table_icon/4s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal">
                操作建议:{{ item.shigongyichangjilu }}
              </div>
            </div>
          </div>
        </div>


        <!--       第三个-->
        <div
            style="height: 20.7vh;width: 23vw;background-color: #1E2D42;margin-top: 1vh;
            display: flex;align-items: center;flex-direction: column;overflow:auto"
        >
          <div v-for="(item,index) in cwyjlist" :key="index">
            <div
                style="width: 22vw;height: 3.5vh;border: solid 1px #E9374D;border-radius: 0.2vw;
                margin-top: 1.5vh;display: flex;align-items: center" :class="item.itemes==1?'beckerkcols':'birckets'">
              <div style="border: #F8FAFF 1px dashed;display: flex;align-items: center;margin-left: 0.5vw"><img
                  src="../assets/table_icon/1s.png"></div>
              <div style="font-size: 0.7vw;color: #F8FAFF;margin-left: 0.5vw">
                测温预警
              </div>
            </div>
            <!--          日期-->
            <div
                style="width: 22vw;height: 2vh;display: flex;justify-content: start;align-items: center;margin-top: 1.5vh">
              <div>
                <img
                    src="../assets/table_icon/2s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal">
                {{ item.riqidate }}
              </div>
            </div>
            <!--          异常规则-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: start;margin-top: 2vh">
              <div>
                <img
                    src="../assets/table_icon/3s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh"
                   v-if="item.itemes==1">
                异常规则:测温点位>=标准℃
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh"
                   v-else>
                异常规则:测温点位与标准相差50℃
              </div>
            </div>
            <!--          操作建议-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: center;margin-top: 1vh">
              <div>
                <img
                    src="../assets/table_icon/4s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal" v-if="item.itemes==1">
                操作建议:异常点位频率增加至每次铁2次，做好修补准备
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal" v-else>
                操作建议:关注异常点位温度变化
              </div>

            </div>
          </div>
        </div>


        <!--        第四个-->
        <div
            style="height: 20.7vh;width: 23vw;background-color: #1E2D42;margin-top: 1vh;
            display: flex;align-items: center;flex-direction: column;overflow:auto"
        >
          <div v-for="(item,index) in tltelelist" :key="index">
            <div
                style="width: 22vw;height: 3.5vh;border: solid 1px #E9374D;border-radius: 0.2vw;
                margin-top: 1.5vh;display: flex;align-items: center"
                :class="item.dxx==0 && item.tsc<=2?'beckerkcols':item.dxx==1 && item.tsc<=5?'beckerkcols':
                item.dxx==0 && item.tsc<=5?'birckets':item.dxx==1 && item.tsc<=10?'birckets':''">
              <div style="border: #F8FAFF 1px dashed;display: flex;align-items: center;margin-left: 0.5vw"><img
                  src="../assets/table_icon/1s.png"></div>
              <div style="font-size: 0.7vw;color: #F8FAFF;margin-left: 0.5vw">
                通铁量预警
              </div>
            </div>
            <!--          日期-->
            <div
                style="width: 22vw;height: 2vh;display: flex;justify-content: start;align-items: center;margin-top: 1.5vh">
              <div>
                <img
                    src="../assets/table_icon/2s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal">
                {{ item.rite }}
              </div>
            </div>
            <!--          异常规则-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: start;margin-top: 2vh">
              <div>
                <img
                    src="../assets/table_icon/3s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh"
                   v-if="(item.dxx==0&&item.tsc<=2)||(item.dxx==1&&item.tsc<=5)">
                异常规则:实际通铁量与建议通铁量相差≤（大修5天或小修2天）
              </div>
              <div style="font-size: 0.5vw;color: #F8FAFF;margin-left: 0.5vw;font-weight: normal;margin-top: 0.5vh"
                   v-else>
                异常规则:实际通铁量与建议通铁量相差≤（大修10天或小修5天）
              </div>
            </div>
            <!--          操作建议-->
            <div
                style="width: 22vw;height: 4vh;display: flex;justify-content: start;align-items: center;margin-top: 1vh">
              <div>
                <img
                    src="../assets/table_icon/4s.png" style="border: #F8FAFF 1px dashed;width: 0.6vw;height: 1.1vh">
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal"
                   v-if="(item.dxx==0&&item.tsc<=2)||(item.dxx==1&&item.tsc<=5)">
                操作建议:探测沟帮侵蚀情况，做好修补准备
              </div>
              <div style="font-size: 0.5vw;color: #E0B564;margin-left: 0.5vw;font-weight: normal" v-else>
                操作建议:关注测温点位温度变化，探测沟帮侵蚀情况
              </div>

            </div>
          </div>
        </div>


      </div>


    </div>
    <div class="klek" v-if="dccsals">
      <div style="width: 26vw;height: 45vh;background-color: #2A354B">
        <div
            style="width: 24.5vw;display: flex;justify-content: space-between;margin-left: 1vw;margin-top: 1vh;color: #ffffff;font-size: 1vw">
          <div>高炉铁钩数据维护(日期)</div>
          <div @click="dccsals=false">❌</div>
        </div>

        <div
            style="background-color: #1E2D42;width: 24vw;height: 34vh;margin-left: 1.2vw;margin-top: 1vh;border-radius: 0.4vw;">
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 2vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#东大修</div>
              <input type="text" class="inputs" v-model="temgep.a" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 2vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#东小修</div>
              <input type="text" class="inputs" v-model="temgep.b" placeholder="2022-06-20"/>
            </div>
          </div>
          <!--          第二行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#西大修</div>
              <input type="text" class="inputs" v-model="temgep.c" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#西小修</div>
              <input type="text" class="inputs" v-model="temgep.d" placeholder="2022-06-20"/>
            </div>
          </div>
          <!--        第三行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">2#大修</div>
              <input type="text" class="inputs" v-model="temgep.e" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">2#小修</div>
              <input type="text" class="inputs" v-model="temgep.f" placeholder="2022-06-20"/>
            </div>
          </div>
          <!--        第五行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">3#大修</div>
              <input type="text" class="inputs" v-model="temgep.g" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">3#小修</div>
              <input type="text" class="inputs" v-model="temgep.h" placeholder="2022-06-20"/>
            </div>
          </div>
          <!--      第八行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">4#大修</div>
              <input type="text" class="inputs" v-model="temgep.i" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">4#大修</div>
              <input type="text" class="inputs" v-model="temgep.j" placeholder="2022-06-20"/>
            </div>
          </div>
          <!--          第十行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">5#大修</div>
              <input type="text" class="inputs" v-model="temgep.k" placeholder="2022-06-20"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">5#小修</div>
              <input type="text" class="inputs" v-model="temgep.l" placeholder="2022-06-20"/>
            </div>
          </div>

        </div>
        <div style="width: 25vw;display: flex;justify-content: flex-end;margin-top: 1.5vh">
          <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw" @click="insetdccuipes()">
            确定
          </div>
          <div style="background-color: #666666;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;margin-left: 1vw" @click="dccsals=false">
            取消
          </div>
        </div>
      </div>
    </div>

    <!--    周期弹窗-->
    <div class="klek" v-if="zqweihu">
      <div style="width: 26vw;height: 45vh;background-color: #2A354B">
        <div
            style="width: 24.5vw;display: flex;justify-content: space-between;margin-left: 1vw;margin-top: 1vh;color: #ffffff;font-size: 1vw">
          <div>周期维护</div>
          <div @click="zqweihu=false">❌</div>
        </div>

        <div
            style="background-color: #1E2D42;width: 24vw;height: 34vh;margin-left: 1.2vw;margin-top: 1vh;border-radius: 0.4vw;">
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 2vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#东大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.a" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 2vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#东小修</div>
              <input type="text" class="inputs" v-model="zqwhlist.b" placeholder="天数"/>
            </div>
          </div>
          <!--          第二行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#西大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.c" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">1#西小修</div>
              <input type="text" class="inputs" v-model="zqwhlist.d" placeholder="天数"/>
            </div>
          </div>
          <!--        第三行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">2#大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.e" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">2#小修</div>
              <input type="text" class="inputs" v-model="zqwhlist.f" placeholder="天数"/>
            </div>
          </div>
          <!--        第五行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">3#大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.g" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">3#小修</div>
              <input type="text" class="inputs" v-model="zqwhlist.h" placeholder="天数"/>
            </div>
          </div>
          <!--      第八行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">4#大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.i" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">4#大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.j" placeholder="天数"/>
            </div>
          </div>
          <!--          第十行-->
          <div style="width: 24vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">5#大修</div>
              <input type="text" class="inputs" v-model="zqwhlist.k" placeholder="天数"/>
            </div>
            <div
                style="width: 10.5vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">5#小修</div>
              <input type="text" class="inputs" v-model="zqwhlist.l" placeholder="天数"/>
            </div>
          </div>
        </div>
        <div style="width: 25vw;display: flex;justify-content: flex-end;margin-top: 1.5vh">
          <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw" @click="zqchucun()">
            确定
          </div>
          <div style="background-color: #666666;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;margin-left: 1vw" @click="zqweihu=false">
            取消
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// 防抖
import * as echarts from "echarts";
import testales from "@/components/testales.vue";
import dfh from "@/components/dfh.vue";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      dccsals: false,
      luhaosop: "",
      temgep: ({
        a: "", b: "", c: "", d: "",
        e: "", f: "", g: "", h: "",
        i: "", j: "", k: "", l: "",
      }),
      //周期
      zqwhlist: ({
        a: "", b: "", c: "", d: "",
        e: "", f: "", g: "", h: "",
        i: "", j: "", k: "", l: "",
      }),
      tamgce: [],
      //平均值
      pegeklist: [],
      quewerps: [],
      //通铁量
      tllist: [],
      loading: false,
      //计划小修周期
      jhxxzq: [],
      //材料信息
      teoperk: [],
      //施工管控
      skgklist: [],
      //测温预警
      cwyjlist: [],
      //通铁量预警
      tltelelist: [],
      //通铁量日期
      ttrdatale: [],
      //周期维护
      zqweihu: false,
      zhouqilist: [],
    }
  },

  methods: {
    ceter() {
      var chartDom = document.getElementById("d1");
      var myChart = echarts.init(chartDom);
      var option;
      const gaugeData = [
        {
          value: 160000,
          name: '建议(东)',
          itemStyle: {
            normal: {
              color: '#90FEB3'
            },
          },
          title: {
            offsetCenter: ['0%', '-60%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-45%'],
          }
        },
        {
          value: 160000,
          name: '建议(西)',
          itemStyle: {
            normal: {
              color: '#4B99FF'
            }
          },
          title: {
            offsetCenter: ['0%', '-30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-15%']
          }
        },
        {
          //
          value: this.tllist.gl1,
          name: '通铁量',
          itemStyle: {
            normal: {
              color: '#B06BF7'
            }
          },
          title: {
            offsetCenter: ['0%', '-0%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '13%']
          }
        },
        {
          value: this.tamgce[0],
          name: '大修(东)',
          itemStyle: {
            normal: {
              color: '#f76b6d'
            }
          },
          title: {
            offsetCenter: ['0%', '25%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '38%']
          }
        },
        {

          value: this.tamgce[2],
          name: '大修(西)',
          itemStyle: {
            normal: {
              color: '#69DBFC'
            }
          },
          title: {
            offsetCenter: ['0%', '50%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '62%']
          }
        }
      ];
      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 0.5,
                borderColor: '#2A354B',
              },
            },
            axisLine: {
              lineStyle: {
                width: 25,
                color: [[1, '#151E2D']],
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 30,
            },
            data: gaugeData,
            //圈内文字
            title: {
              fontSize: 10,
              color: '#E0B564'
            },
            //圈内值
            detail: {
              width: 30,
              height: 6,
              fontSize: 10,
              color: 'auto',
              //formatter: '{value}天',
            },
          }
        ]
      };
      option && myChart.setOption(option);
    },
    zzt() {
      var chartDom = document.getElementById('meis');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          type: 'scroll',
          right: '1%',
          top: '2%',
          itemWidth: 25,
          itemHeight: 8,
          textStyle: {
            color: 'rgba(144,185,204,1)',
            fontSize: 8
          }
        },
        grid: {
          top: '12%',
          left: '3%',
          right: '4%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          position: 'top',
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            show: true
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: 'rgba(144,185,204,1)',
              fontSize: 10
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            //网格线
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['5#炉', '4#炉', '3#炉', '2#炉', '1#炉(西)', '1#炉(东)'],
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: 'rgba(144,185,204,1)',
              fontSize: 10
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            //网格线
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '大修',
            type: 'bar',
            data: [this.zhouqilist[0].a, this.zhouqilist[0].c, this.zhouqilist[0].e, this.zhouqilist[0].g, this.zhouqilist[0].i, this.zhouqilist[0].l],
            barWidth: 8,
            itemStyle: {
              normal: {
                color: '#90FEB3'
              }
            }
          },
          {
            name: '小修',
            type: 'bar',
            data: [this.zhouqilist[0].m, this.zhouqilist[0].j, this.zhouqilist[0].h, this.zhouqilist[0].f, this.zhouqilist[0].d, this.zhouqilist[0].b],
            barWidth: 8,
            itemStyle: {
              normal: {
                color: '#4B99FF'
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);

    },
    //储存
    insetdccuipes() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/insetdccuipes",
        params: {
          getea: JSON.stringify(this.temgep)
        },
      }).then((res) => {
        this.tamgce = res.data;
        this.ceter();
        this.$message("保存成功");
        this.dccsals = false;
      });
    },
    //周期储存
    zqchucun() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/zqweih",
        params: {
          zqwih: JSON.stringify(this.zqwhlist)
        },
      }).then((res) => {
        this.zhouqilist = res.data;
        this.$message("保存成功");
        this.zzt();
        this.zqweihu = false;
      });
    },
    //周期查询
    zqchaxunelst() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectzhouqi",
        params: {},
      }).then((res) => {
        this.zhouqilist = res.data;
        console.log(this.zhouqilist, 78978979)
      });
    },
    //查询五环信息
    selectconte() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectconte",
        params: {
          getea: JSON.stringify(this.temgep)
        },
      }).then((res) => {
        this.tamgce = res.data;
        this.selectdcttl();
        this.$children[0].dx = this.tamgce[4];
        this.$children[1].dx = this.tamgce[6];
        this.$children[2].dx = this.tamgce[8];
        this.$children[3].dx = this.tamgce[10];
      });
    },
    //大修小修平均值
    degep() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/remasteqs",
        params: {},
      }).then((res) => {
        this.pegeklist = res.data;
        this.zzt();
      });
    },
    //顶层供应商查询与材料信息关联
    selectgysdc() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectdcchangjia",
        params: {},
      }).then((res) => {
        this.quewerps = res.data;
      });
    },
    //顶层通铁量
    selectdcttl() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectironnodata",
        params: {},
      }).then((res) => {
        this.tllist = res.data;
        this.ceter();
        this.$children[0].ttl = 130000;
        this.$children[1].ttl = 130000;
        this.$children[2].ttl = 150000;
        this.$children[3].ttl = 150000;
        this.$children[0].xx = this.tllist.gl2;
        this.$children[1].xx = this.tllist.gl3;
        this.$children[2].xx = this.tllist.gl4;
        this.$children[3].xx = this.tllist.gl5;
        this.loading = false;
      });
    },
    //计划大小修周期
    selectxxzq(ral) {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectmitemplanstartdate",
        params: {},
      }).then((res) => {
        this.jhxxzq = res.data;
        var alteac = [];
        alteac.push(
            {
              //0小修 1大修
              dxx: "1",
              tsc: this.jhxxzq.gld1 * 1 - this.pegeklist[0] * 1,
              rite: ral[0].addx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx1 * 1 - this.pegeklist[1] * 1,
              rite: ral[0].adxx,
            },
            {
              dxx: "1",
              tsc: this.jhxxzq.gld1 * 1 - this.pegeklist[2] * 1,
              rite: ral[0].axdx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx1 * 1 - this.pegeklist[3] * 1,
              rite: ral[0].axxx,
            },
            {
              dxx: "1",
              tsc: this.jhxxzq.gld2 * 1 - this.pegeklist[4] * 1,
              rite: ral[0].bdx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx2 * 1 - this.pegeklist[5] * 1,
              rite: ral[0].bxx,
            },
            {
              dxx: "1",
              tsc: this.jhxxzq.gld3 * 1 - this.pegeklist[6] * 1,
              rite: ral[0].cdx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx3 * 1 - this.pegeklist[7] * 1,
              rite: ral[0].cxx,
            },
            {
              dxx: "1",
              tsc: this.jhxxzq.gld4 * 1 - this.pegeklist[8] * 1,
              rite: ral[0].ddx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx4 * 1 - this.pegeklist[9] * 1,
              rite: ral[0].dxx,
            },
            {
              dxx: "1",
              tsc: this.jhxxzq.gld5 * 1 - this.pegeklist[10] * 1,
              rite: ral[0].edx,
            },
            {
              dxx: "0",
              tsc: this.jhxxzq.glx5 * 1 - this.pegeklist[11] * 1,
              rite: ral[0].exx,
            }
        )
        for (let i = 0; i < alteac.length; i++) {
          if (alteac[i].dxx == "0" && alteac[i].tsc <= 5) {
            this.tltelelist.push(alteac[i])
          }
          if (alteac[i].dxx == "1" && alteac[i].tsc <= 10) {
            this.tltelelist.push(alteac[i])
          }
        }
      });

    },
    //通铁量预警日期查询
    selectdckaridat() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectdckaridat",
        params: {},
      }).then((res) => {
        this.ttrdatale = res.data;
        this.selectxxzq(res.data);
      });
    },
    //材料信息
    selectcljyame() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectcljyame",
        params: {},
      }).then((res) => {
        this.teoperk = res.data;
      });
    },
    //施工管控
    selectsggkxx() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectsggkbzce",
        params: {},
      }).then((res) => {
        this.skgklist = res.data;
      });
    },
    //测温预警
    selectcwyj() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/cewenyujingercs",
        params: {},
      }).then((res) => {
        this.cwyjlist = res.data;
      });
    }
  },

  components: {
    testales,
    dfh,
  },
  created() {
    // // get post 请求接口实例
    // this.api();
    // this.$set(
    //     this.value1,
    //     0,
    //     this.$api.timeFormat(new Date() * 1 - 86400 * 30 * 1000)
    // );
    // this.$set(this.value1, 1, this.$api.timeFormat(new Date() * 1));
  },
  mounted() {
    this.selectdckaridat();
    this.selectgysdc();
    //this.selectxxzq();
    this.selectcljyame();
    this.selectsggkxx();
    this.selectcwyj();
    this.zqchaxunelst();
    this.degep();
    this.selectconte();
    this.selectdcttl();
  },
};
</script>


<style scoped>
.beckerkcols {
  background-color: #AD091E;
}

/*棕色*/
.birckets {
  background-color: #F0722C;
}

.inputs {
  background-color: #3E4559;
  border: none;
  color: #ffffff;
  height: 3vh !important;
  width: 6vw !important;
  border-radius: 0.3vw;
  margin-left: 0.5vw;
  cursor: pointer;
  font-size: 0.7vw !important;
  outline: none;
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
}

.xubut option {
  background-color: #3E4559;
  /*  background-color: #1D3466; */
}

.qhopt {
  background-color: #1D3466;
  color: #809DD2;
}

.gagek {
  background-color: #0058CE;
  color: #ffffff;
}

.klek {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.centLeft {
  width: 75vw;
  height: 91.5vh;
  background-color: #2A354B;
}

.centLeftL1 {
  width: 75vw;
  height: 3vh;
  background-color: #091022;
  color: #ffffff;
  font-size: 0.8vw;
  display: flex;
  justify-content: space-between;
}

.centLeftfour {
  width: 33.5vw;
  display: flex;
  justify-content: space-between;
  font-size: 0.5vw;
  align-items: flex-end;
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
