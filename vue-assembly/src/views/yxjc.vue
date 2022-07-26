<template>
  <div>
    <!--    菜单栏-->
    <div style="width: 99.6vw;display: flex;justify-content: space-between;margin-top: 1vh;margin-left: 0.2vw">
      <div style="display: flex;justify-content: space-between">
        <div style="margin-right: 1vw">
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

        </div>
        <div :class="index == dia ? 'eia' : 'ared'" v-for="(item,index) in tabls" :key="index" @click="cxe(index)"
             style="display: flex;justify-content: space-around;
        color:#ffffff;background-color: #1D3466;color: #809DD2;font-size: 0.8vw;width: 4vw;
        margin-left: 0.2vw;border-radius: 0.2vw;align-items: center">
          {{ item }}
        </div>
      </div>
      <div style="width: 18vw;display: flex;justify-content: space-between;margin-right: 0.2vw">
        <div style="width: 2.8vw;display: flex;justify-content: space-between;align-items: center;">
          <div style="background-color: #90FEB3;width: 1vw;height: 0.3vh"></div>
          <div style="color: #C2EBFF;font-size: 0.5vw">标准</div>
        </div>

        <div style="width: 2.8vw;display: flex;justify-content: space-between;align-items: center;">
          <div style="background-color: #4B99FF;width: 1vw;height: 0.3vh"></div>
          <div style="color: #C2EBFF;font-size: 0.5vw">渣线</div>
        </div>
        <div style="width: 2.8vw;display: flex;justify-content: space-between;align-items: center;">
          <div style="background-color: #fcd953;width: 1vw;height: 0.3vh"></div>
          <div style="color: #C2EBFF;font-size: 0.5vw">铁线</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;">
          <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;cursor: pointer" @click="teies()">
            数据
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;">
          <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;cursor: pointer" @click="biazubut=true">
            标准
          </div>
        </div>

      </div>
    </div>
    <!--    echarts-->
    <div
        v-loading="loading1"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="background-color:#2A354B;width: 99.6vw;height: 86.5vh;margin-left: 0.2vw;margin-top: 1vh "
        class="tableTitlefir">
      <!--      第一行-->
      <div style="display: flex;justify-content: start">
        <div class="tableTitlefirSpan" style="margin-top: 1vh;margin-left: 0.5vw">
          <div>落<br>铁<br>点 <br>南 <br>侧</div>
        </div>
        <div style="display: flex;justify-content: space-between">
          <ectaris :id="'cas1'" :name1s="'1号高炉'" :bbh="bbh" :weizhi="'落铁点南侧'"></ectaris>
          <ectaris :id="'cas2'" :name1s="'2号高炉'" :bbh="bbh" :weizhi="'落铁点南侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas3'" :name1s="'3号高炉'" :bbh="bbh" :weizhi="'落铁点南侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas4'" :name1s="'4号高炉'" :bbh="bbh" :weizhi="'落铁点南侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas5'" :name1s="'5号高炉'" :bbh="bbh" :weizhi="'落铁点南侧'" style="margin-left: 0.2vw"></ectaris>
        </div>
      </div>
      <!--    第二行-->
      <div style="display: flex;justify-content: start">
        <div class="tableTitlefirSpan" style="margin-top: 1vh;margin-left: 0.5vw">
          <div>落<br>铁<br>点 <br>北 <br>侧</div>
        </div>
        <div style="display: flex;justify-content: space-between">
          <ectaris :id="'cas21'" :name1s="'1号高炉'" :bbh="bbh" :weizhi="'落铁点北侧'"></ectaris>
          <ectaris :id="'cas22'" :name1s="'2号高炉'" :bbh="bbh" :weizhi="'落铁点北侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas23'" :name1s="'3号高炉'" :bbh="bbh" :weizhi="'落铁点北侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas24'" :name1s="'4号高炉'" :bbh="bbh" :weizhi="'落铁点北侧'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas25'" :name1s="'5号高炉'" :bbh="bbh" :weizhi="'落铁点北侧'" style="margin-left: 0.2vw"></ectaris>
        </div>
      </div>
      <!--第三行-->
      <div style="display: flex;justify-content: start">
        <div class="tableTitlefirSpan" style="margin-top: 1vh;margin-left: 0.5vw">
          <div>落<br>铁<br>点 <br>底 <br>部</div>
        </div>
        <div style="display: flex;justify-content: space-between">
          <ectaris :id="'cas31'" :name1s="'1号高炉'" :bbh="bbh" :weizhi="'落铁点底部'"></ectaris>
          <ectaris :id="'cas32'" :name1s="'2号高炉'" :bbh="bbh" :weizhi="'落铁点底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas33'" :name1s="'3号高炉'" :bbh="bbh" :weizhi="'落铁点底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas34'" :name1s="'4号高炉'" :bbh="bbh" :weizhi="'落铁点底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas35'" :name1s="'5号高炉'" :bbh="bbh" :weizhi="'落铁点底部'" style="margin-left: 0.2vw"></ectaris>
        </div>
      </div>
      <!--第四行-->
      <div style="display: flex;justify-content: start">
        <div class="tableTitlefirSpan" style="margin-top: 1vh;margin-left: 0.5vw">
          <div>残<br>铁<br>孔</div>
        </div>
        <div style="display: flex;justify-content: space-between">
          <ectaris :id="'cas41'" :name1s="'1号高炉'" :bbh="bbh" :weizhi="'残铁孔'"></ectaris>
          <ectaris :id="'cas42'" :name1s="'2号高炉'" :bbh="bbh" :weizhi="'残铁孔'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas43'" :name1s="'3号高炉'" :bbh="bbh" :weizhi="'残铁孔'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas44'" :name1s="'4号高炉'" :bbh="bbh" :weizhi="'残铁孔'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas45'" :name1s="'5号高炉'" :bbh="bbh" :weizhi="'残铁孔'" style="margin-left: 0.2vw"></ectaris>
        </div>
      </div>
      <!--第五行-->
      <div style="display: flex;justify-content: start">
        <div class="tableTitlefirSpan" style="margin-top: 1vh;margin-left: 0.5vw">
          <div>撇<br>渣<br>器 <br>底 <br>部</div>
        </div>
        <div style="display: flex;justify-content: space-between">
          <ectaris :id="'cas51'" :name1s="'1号高炉'" :bbh="bbh" :weizhi="'撇渣器底部'"></ectaris>
          <ectaris :id="'cas52'" :name1s="'2号高炉'" :bbh="bbh" :weizhi="'撇渣器底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas53'" :name1s="'3号高炉'" :bbh="bbh" :weizhi="'撇渣器底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas54'" :name1s="'4号高炉'" :bbh="bbh" :weizhi="'撇渣器底部'" style="margin-left: 0.2vw"></ectaris>
          <ectaris :id="'cas55'" :name1s="'5号高炉'" :bbh="bbh" :weizhi="'撇渣器底部'" style="margin-left: 0.2vw"></ectaris>
        </div>
      </div>
    </div>
    <div v-if="picuer" class="posia">
      <div style="width: 24vw;height: 75vh;background-color: #2A354B">
        <div
            style="width: 22vw;display: flex;justify-content: space-between;margin-left: 1vw;margin-top: 1vh;color: #ffffff;font-size: 1vw">
          <div>运行监测维护</div>
          <div @click="picuer=false" style="cursor: pointer">❌</div>
        </div>
        <!--        渣线铁线按钮-->
        <div style="display: flex;justify-content: start;margin-left: 1.2vw">
          <div
              :class="index == ztxi ? 'gagek' : 'qhopt'"
              @click="ceine(index)"
              v-for="(item,index) in ztlist" :key="index"
              style="
              margin-top: 1vh;text-align: center;line-height: 3.2vh;
              font-size: 0.8vw;border-radius: 0.2vw;height: 3.2vh;width: 4vw;
              margin-right: 0.2vw;cursor: pointer">
            {{ item }}
          </div>
        </div>

        <!--        第一行-->
        <div
            style="background-color: #1E2D42;width: 21.6vw;height: 6vh;margin-left: 1.2vw;margin-top: 1vh;border-radius: 0.4vw;display: flex;justify-content: space-between;align-items: center">
          <div
              style="width: 9.5vw;display: flex;justify-content: space-between;margin-left: 1vw;height: 6vh;align-items: center">
            <div style="font-size: 0.8vw;color: #BDE5F7;">炉号</div>
            <select v-model="luhaosop" class="xubut"
                    style="height: 3.5vh;width: 6vw;background-color: #3E4559;border: none; width: 6.2vw">
              <option v-for="(item,index) in luhapseopt" :key="index" style="background-color: #1d3466">
                {{ item }}
              </option>
            </select>

          </div>
          <div
              style="width: 9.5vw;display: flex;justify-content: space-between;margin-left: 1vw;height: 6vh;align-items: center;margin-right: 0.5vw">
            <div style="font-size: 0.8vw;color: #BDE5F7;">位置</div>
            <select v-model="gysmc" class="xubut"
                    style="height: 3.5vh;width: 6vw;background-color: #3E4559;border: none; width: 6.2vw">
              <option v-for="(item,index) in qecie" :key="index" style="background-color: #1d3466">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <!--        第二行-->
        <div
            style="background-color: #1E2D42;width: 21.6vw;height: 52.5vh;margin-left: 1.2vw;margin-top: 1vh;border-radius: 0.4vw">
          <div style="width: 21.6vw;margin-top: 1vh;display: flex;justify-content: space-between">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">00:00</div>
              <input type="text" class="inputs" v-model="temad.a"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw;margin-top: 1vh">
              <div style="font-size: 0.8vw;color: #BDE5F7;">12:00</div>
              <input type="text" class="inputs" v-model="temad.b"/>
            </div>
          </div>
          <!--3-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">01:00</div>
              <input type="text" class="inputs" v-model="temad.c"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">13:00</div>
              <input type="text" class="inputs" v-model="temad.d"/>
            </div>
          </div>
          <!--4-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">02:00</div>
              <input type="text" class="inputs" v-model="temad.e"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">14:00</div>
              <input type="text" class="inputs" v-model="temad.f"/>
            </div>
          </div>
          <!--5-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">03:00</div>
              <input type="text" class="inputs" v-model="temad.g"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">15:00</div>
              <input type="text" class="inputs" v-model="temad.h"/>
            </div>
          </div>
          <!--6-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">04:00</div>
              <input type="text" class="inputs" v-model="temad.i"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">16:00</div>
              <input type="text" class="inputs" v-model="temad.j"/>
            </div>
          </div>
          <!--7-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">05:00</div>
              <input type="text" class="inputs" v-model="temad.k"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">17:00</div>
              <input type="text" class="inputs" v-model="temad.l"/>
            </div>
          </div>
          <!--          8-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">06:00</div>
              <input type="text" class="inputs" v-model="temad.m"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">18:00</div>
              <input type="text" class="inputs" v-model="temad.n"/>
            </div>
          </div>
          <!--9-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">07:00</div>
              <input type="text" class="inputs" v-model="temad.o"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">19:00</div>
              <input type="text" class="inputs" v-model="temad.p"/>
            </div>
          </div>
          <!--10-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">08:00</div>
              <input type="text" class="inputs" v-model="temad.q"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">20:00</div>
              <input type="text" class="inputs" v-model="temad.r"/>
            </div>
          </div>
          <!--11-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">09:00</div>
              <input type="text" class="inputs" v-model="temad.s"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">21:00</div>
              <input type="text" class="inputs" v-model="temad.t"/>
            </div>
          </div>
          <!--        12-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">10:00</div>
              <input type="text" class="inputs" v-model="temad.u"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">22:00</div>
              <input type="text" class="inputs" v-model="temad.v"/>
            </div>
          </div>
          <!--13-->
          <div style="width: 21.6vw;display: flex;justify-content: space-between;margin-top: 1vh">
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center">
              <div style="font-size: 0.8vw;color: #BDE5F7;">11:00</div>
              <input type="text" class="inputs" v-model="temad.w"/>
            </div>
            <div
                style="width: 9vw;display: flex;justify-content: space-between;margin-left: 1vw;align-items: center;margin-right: 1vw">
              <div style="font-size: 0.8vw;color: #BDE5F7;">23:00</div>
              <input type="text" class="inputs" v-model="temad.x"/>
            </div>
          </div>

          <!--          按钮-->
          <div style="width: 21.6vw;display: flex;justify-content: flex-end;margin-top: 6vh;">
            <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;cursor: pointer" @click="locoket()">
              确定
            </div>
            <div style="background-color: #666666;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;margin-left: 1vw;cursor: pointer" @click="picuer=false">
              取消
            </div>

          </div>
        </div>
      </div>

    </div>
    <!--    标准弹窗-->
    <div v-if="biazubut" class="posia">
      <div style="width: 90vw;height: 23vh;background-color: #2A354B">
        <div
            style="width: 88vw;display: flex;justify-content: space-between;margin-left: 1vw;margin-top: 1vh;color: #ffffff;font-size: 1vw">
          <div>标准维护</div>
          <div @click="biazubut=false" style="cursor:pointer;">❌</div>
        </div>
        <div>
          <table class="table" style="margin-top: 1vh;width: 89vw;margin-left: 0.5vw">
            <thead>
            <tr>
              <td colspan="5">落铁点南侧</td>
              <td colspan="5">落铁点北侧</td>
              <td colspan="5">落铁点底部</td>
              <td colspan="5">残铁孔</td>
              <td colspan="5">撇渣器底部</td>
            </tr>
            <tr>
              <td>1号高炉</td>
              <td>2号高炉</td>
              <td>3号高炉</td>
              <td>4号高炉</td>
              <td>5号高炉</td>
              <td>1号高炉</td>
              <td>2号高炉</td>
              <td>3号高炉</td>
              <td>4号高炉</td>
              <td>5号高炉</td>
              <td>1号高炉</td>
              <td>2号高炉</td>
              <td>3号高炉</td>
              <td>4号高炉</td>
              <td>5号高炉</td>
              <td>1号高炉</td>
              <td>2号高炉</td>
              <td>3号高炉</td>
              <td>4号高炉</td>
              <td>5号高炉</td>
              <td>1号高炉</td>
              <td>2号高炉</td>
              <td>3号高炉</td>
              <td>4号高炉</td>
              <td>5号高炉</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[0].shuzhi"
                />
              </td>
              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[1].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[2].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[3].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[4].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[5].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[6].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[7].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[8].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[9].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[10].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[11].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[12].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[13].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[14].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[15].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[16].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[17].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[18].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[19].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[20].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[21].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[22].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[23].shuzhi"
                />
              </td>

              <td>
                <input
                    type="text"
                    class="inputindex"
                    style="cursor: pointer;color: red;width: 3vw;text-align: left;text-align: right"
                    v-model="bizohlist[24].shuzhi"
                />
              </td>

            </tr>
            </tbody>
          </table>

        </div>
        <div style="width: 88vw;display: flex;justify-content: flex-end;margin-top: 1vh;">
          <div style="background-color: #0058CE;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;cursor: pointer" @click="upteajcbz()">
            确定
          </div>
          <div style="background-color: #666666;font-size: 0.8vw;border-radius: 0.2vw;display: flex;
      justify-content: center;align-items: center;
      color: #ffffff;height: 3.2vh;width: 4vw;margin-left: 1vw;cursor: pointer" @click="biazubut=false">
            取消
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import {debounce} from "../api/debounce";
import * as echarts from "echarts";
import {export2Excel} from "..//common/js/util";
import ectaris from "@/components/ectaris.vue";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      picuer: false,
      qecie: ["落铁点南侧", "落铁点北侧", "落铁点底部", "残铁孔", "撇渣器底部"],
      luhapseopt: ["1号高炉", "2号高炉", "3号高炉", "4号高炉", "5号高炉"],
      gysmc: "",
      luhaosop: "",
      temad: ({
        a: "", b: "", c: "", d: "", e: "",
        f: "", g: "", h: "", i: "", j: "",
        k: "", l: "", m: "", n: "", o: "",
        p: "", q: "", r: "", s: "", t: "",
        u: "", v: "", w: "", x: "", y: "",
      }),
      ztlist: ["渣线", "铁线"],
      ztxi: 0,
      //版本号
      bbhlist: [],
      bbh: "",
      loading: false,
      iuy: 0,
      //标准
      biazubut: false,
      //标准信息查询
      bizohlist: [],
      loading1: false,
    }
  },
  methods: {
    ceine(index) {
      this.ztxi = index
    },
    teies() {
      this.picuer = true
    },
    //新增数据弹窗
    locoket() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/insertimeer",
        params: {
          grklist: JSON.stringify(this.temad),
          gysmc: this.gysmc,
          luhaosop: this.luhaosop,
          ztx: this.ztxi,
          bbh: this.bbh,
        },
      }).then((res) => {
        this.picuer = false
        this.$message("新增成功")
        this.iuy++;
      });
    },
    //查询运行监测版本号
    selectbbhe() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectbbheyxjc",
        params: {},
      }).then((res) => {
        this.bbhlist = res.data;
        this.bbh = this.bbhlist[this.bbhlist.length - 1];
        for (let i = 0; i < 25; i++) {
          this.$children[i].bbh = this.bbh;
        }
      });
    },
    //切换版本
    selectgyspjbl() {
      for (let i = 0; i < 25; i++) {
        this.$children[i].bbh = this.bbh;
      }
    },
    //标准信息查询
    selectbuzie() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectbuzie",
        params: {},
      }).then((res) => {
        this.bizohlist = res.data;
        for (let i = 0; i < 25; i++) {
          this.$children[i].bucrh = this.bizohlist[i].shuzhi;
        }
      });
    },
    //标准信息修改
    upteajcbz() {
      this.loading1 = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/upteajcbz",
        params: {
          buzlist: JSON.stringify(this.bizohlist),
        },
      }).then((res) => {
        this.bizohlist = res.data;
        this.biazubut = false;
        this.$message("修改成功");
        for (let i = 0; i < 25; i++) {
          this.$children[i].bucrh = this.bizohlist[i].shuzhi;
        }
        this.loading1 = false;
      });
    }
  },
  components: {
    ectaris,
  },
  created() {
  },
  mounted() {
    this.gysmc = this.qecie[0];
    this.luhaosop = this.luhapseopt[0];
    this.selectbbhe();
    this.selectbuzie();
  },
};
</script>
<style scoped>
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

.inputs {
  background-color: #3E4559;
  border: none;
  color: #ffffff;
  height: 3vh;
  width: 6vw;
  border-radius: 0.3vw;
  margin-left: 0.5vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
}

.posia {
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

.tableTitlefir {
  background-color: #2A354B;
  margin-left: 0.5vw;
  margin-top: 0.4vh;
}

.tableTitlefirSpan {
  color: #ffffff;
  width: 1.6vw;
  font-size: 0.5vw;
  background-color: #192633;
  height: 16.1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.1vw;
}

.qhopt {
  background-color: #1D3466;
  color: #809DD2;
}

.gagek {
  background-color: #0058CE;
  color: #ffffff;
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
  height: 5vh;
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