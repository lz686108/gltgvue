<template>
  <div
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 19.25vw;height: 16.1vh;margin-top: 1vh" :id="id">
    {{ bbh }}
  </div>
</template>
<script>

import * as echarts from "echarts";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      zhaxian: [],
      tiexian: [],
      bbh: '',
      loading: false,
      bucrh: '',
      euerq: [],
    };
  },
  props: {
    id: {
      type: String,
    },
    name1s: {
      type: String,
    },
    //位置
    weizhi: {
      type: String,
    },
    iuy: {
      type: String,
    }
  },
  methods: {
    zztr() {
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        backgroundColor: '#1E2D42',
        barGap: 0, //去掉间隔
        grid: {
          top: 35,
          bottom: 25,
          left: 40,
          right: 20
        },
        legend: {
          textStyle: {
            color: '#698694',
            fontSize: 10
          }
        },
        title: {
          text: this.name1s,
          textStyle: {
            color: '#ffffff',
            fontSize: 10
          },
          padding: [10, 0, 0, 12],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
            "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
            "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
            "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
          ],
          axisTick: {
            show: false //去掉刻度线
          },
          axisLine: {
            lineStyle: {
              color: '#3d4d6e' // x坐标轴颜色
            }
          },
          axisLabel: {
            show: true,
            interval: 4,
            // rotate: 45,
            textStyle: {
              color: '#90b9cc', // 坐标字体颜色
              fontSize: 10
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#90b9cc', //文字颜色
              fontSize: 10
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#3d4d6e'], //网状格颜色
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            data: this.zhaxian,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#4B99FF'
              }
            },
            symbol: 'none'
          },
          {
            data: this.tiexian,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#fcd953'
              }
            },
            symbol: 'none'
          },
          {
            data: this.euerq,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#90FEB3'
              }
            },
            symbol: 'none'
          }
        ]
      };
      option && myChart.setOption(option);
    },
    //铁线
    selecgechareasetx(bbh2) {
      this.loading = true
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectechartesl",
        params: {
          luhao: this.name1s,
          bbh: bbh2,
          weizhi: this.weizhi,
          tezhax: "铁线",
        },
      }).then((res) => {
        this.tiexian = res.data;
        this.zztr();
        this.loading = false
      });
    },
    //渣线
    selecgechareasezhax(bbh1) {
      this.loading = true
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectechartesl",
        params: {
          luhao: this.name1s,
          bbh: bbh1,
          weizhi: this.weizhi,
          tezhax: "渣线",
        },
      }).then((res) => {
        this.zhaxian = res.data;
        this.zztr();
        this.loading = false
      });
    }

  },
  components: {},
  created() {
  },
  watch: {
    dataChange: {
      handler(newVal, oldVal) {
        this.selecgechareasezhax(newVal.bbh);
        this.selecgechareasetx(newVal.bbh);
        var a = [];
        for (let i = 0; i < 25; i++) {
          a[i] = newVal.bucrh
        }
        this.euerq = a;
        this.zztr();
      },
      deep: true
    },
  },
  mounted() {
    this.zztr();
  },
  computed: {
    dataChange() {
      const {bbh, bucrh} = this;
      return {bbh, bucrh};
    }
  }

};
</script>
<style scoped>
.footer {
  width: 100vw;
  line-height: 2vh;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 0.6vw;
  text-align: center;
}
</style>
