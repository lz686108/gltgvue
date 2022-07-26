<template>
  <div>
    <div class="vae" :id="id" style="height: 28vh;width: 15vw"></div>
  </div>
</template>
<script>

import * as echarts from "echarts";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      dx: "",
      xx: "",
      ttl: "",
    };
  },
  props: {
    id: {
      type: String
    },
  },
  methods: {
    ceterces(dx, xx, ttl) {
      var chartDom1 = document.getElementById(this.id);
      var myChart = echarts.init(chartDom1);
      var option;
      const gaugeData = [
        {
          value: ttl,
          name: '建议(吨)',
          itemStyle: {
            normal: {
              color: '#90FEB3'
            }
          },
          title: {
            offsetCenter: ['0%', '-45%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-25%']
          }
        },
        {
          value: xx,
          name: '通铁量',
          itemStyle: {
            normal: {
              color: '#B06BF7'
            }
          },
          title: {
            offsetCenter: ['0%', '-5%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '15%']
          }
        },
        {
          value: dx,
          name: '周期(天)',
          itemStyle: {
            normal: {
              color: '#69DBFC'
            }
          },
          title: {
            offsetCenter: ['0%', '35%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '55%']
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
              //formatter: '{value}天/吨',
            },
          }
        ]
      };
      option && myChart.setOption(option);
    }

  },
  components: {},
  created() {
  },
  watch: {
    dataChange: {
      handler(newVal, oldVal) {
        this.ceterces(newVal.dx, newVal.xx, newVal.ttl)
        console.log()
      },
      deep: true
    },
  },
  mounted() {
    this.ceterces();
  },
  computed: {
    dataChange() {
      const {dx, xx, ttl} = this;
      return {dx, xx, ttl};
    }
  }
};
</script>
<style scoped>
.vae {
  width: 15vw;
  height: 35vh;
}
</style>