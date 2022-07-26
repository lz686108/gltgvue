<template>
  <div>
    <!--     v-for="(item,index) in ddd":key="index`" :style="{width:item*2+'vw'}"-->
    <div style="width: 97.6vw;background-color: #1E2D42;margin-left: 0.5vw;font-size: 0.5vw;
    color: #ffffff;padding-left: 1vw;display: flex;align-items: center;padding-top: 0.5vh">
      {{ namars }}
    </div>
    <div style="width: 98.6vw;height: 6vh;background-color: #1E2D42;margin-left: 0.5vw" :id="id">
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      tmpleaie: [],
      datels: '',
      cumpedacs: [],
      tegek: [],
    };
  },
  props: {
    id: {
      type: String,
    },
    namars: {
      type: String,
    },
  },
  methods: {
    euice() {
      var chartDom = document.getElementById([this.id]);
      var myChart = echarts.init(chartDom);
      var option;
      var colors = ['#4B99FF', '#90FEB3', '#303F56'];
      var state = ['正常', '繁忙', '故障'];
      var opt = {
        color: colors,
        tooltip: {
          formatter: function (params) {
            return params.name + ':' + params.value[1] + '~' + params.value[2];
          }
        },
        grid: {
          left: '-1%',
          right: '2%',
          top: '0%',
          bottom: '0%',
          height: 45,
          containLabel: true
        },
        xAxis: {
          data: this.tmpleaie,
          axisTick: {
            //y轴刻度线
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            //y轴
            show: true,
            lineStyle: {
              color: '#384359',
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            //x轴文字的配置
            show: true,
            interval: 10,
            textStyle: {
              color: '#90B9CC',
              fontSize: '10'
            }
          }
        },
        yAxis: {
          show: false,
          data: ['WAN1'],
          axisTick: {
            //y轴刻度线
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          // 用空bar来显示四个图例
          // {name: state[0], type: 'bar', data: []},
          // {name: state[1], type: 'bar', data: []},
          // {name: state[2], type: 'bar', data: []},
          // {name: state[3], type: 'bar', data: []},
          {
            type: 'custom',
            renderItem: function (params, api) {
              var categoryIndex = api.value(0);
              var start = api.coord([api.value(1), categoryIndex]);
              var end = api.coord([api.value(2), categoryIndex]);
              //柱子的高度
              var height = 10;
              return {
                type: 'rect',
                shape: echarts.graphic.clipRectByRect(
                    {
                      x: start[0],
                      y: start[1] - height / 2,
                      width: end[0] - start[0],
                      height: height
                    },
                    {
                      x: params.coordSys.x,
                      y: params.coordSys.y,
                      width: params.coordSys.width,
                      height: params.coordSys.height
                    }
                ),
                style: api.style()
              };
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data:
            //     [
            //   {
            //     itemStyle: {normal: {color: '#4B99FF'}},
            //     lx: "大修",
            //     name: '大修',
            //     value: [0, "01-01", '02-04'],
            //   },
            //   {
            //     itemStyle: {normal: {color: colors[2]}},
            //     lx: "大修",
            //     name: '789789',
            //     value: [0, '01-01', '02-01']
            //   },
            //   {
            //     itemStyle: {normal: {color: '#90FEB3'}},
            //     lx: "大修",
            //     name: '大修',
            //     value: [0, '03-05', '03-20']
            //   },
            //   {
            //     itemStyle: {normal: {color: colors[2]}},
            //     lx: "大修",
            //     name: '无',
            //     value: [0, '02-03', '03-06']
            //   }
            // ]
            this.cumpedacs,
          }
        ]
      };
      myChart.setOption(opt);

      option && myChart.setOption(option);


    },
    getAll(start, end) {
      let dateList = [];
      var startTime = this.getDate(start);
      var endTime = this.getDate(end);
      while ((endTime.getTime() - startTime.getTime()) >= 0) {
        var year = startTime.getFullYear();
        var month = startTime.getMonth() + 1 < 10 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1;
        var day = startTime.getDate().toString().length == 1 ? "0" + startTime.getDate() : startTime.getDate();
        dateList.push(month + "-" + day);
        startTime.setDate(startTime.getDate() + 1);
      }
      return dateList;
    },
    getDate(datestr) {
      var temp = datestr.split("-");
      var date = new Date(temp[0], temp[1] - 1, temp[2]);
      return date;
    },
    //履历复盘信息
    selectrijdhsj(nianfen) {
      axios({
        method: "post",
        url: "http://10.6.1.179:40028/mpd/tceia/eqours/selectrijdhsj",
        params: {
          laiks: this.namars,
          nianfen: nianfen,
        },
      }).then((res) => {
        this.cumpedacs = res.data;
        for (let i = 0; i < this.cumpedacs.length; i++) {
          if (this.cumpedacs[i].lx == "大修") {
            this.cumpedacs[i].itemStyle = {normal: {color: '#4B99FF'}}
          }
          if (this.cumpedacs[i].lx == "小修") {
            this.cumpedacs[i].itemStyle = {normal: {color: '#90FEB3'}}
          }
        }
        this.euice();
        console.log(this.cumpedacs)
      });
    }
  },
  components: {},
  created() {
  },
  watch: {
    dataChange: {
      handler(newVal, oldVal) {
        var date = new Date();
        var aptie = date.getFullYear();
        var mydate = new Date((new Date()).getTime() + 8 * 60 * 60 * 1000);
        var time = mydate.toJSON().split('T').join(' ').substring(0, 10);
        if (aptie == newVal.datels) {
          this.tmpleaie = this.getAll(newVal.datels + "-" + "01-01", time);
        } else {
          this.tmpleaie = this.getAll(newVal.datels + "-" + "01-01", newVal.datels + "-" + "12-31");
        }
        this.selectrijdhsj(newVal.datels);
        this.euice();
      },
      deep: true
    },
  },
  mounted() {
    this.euice();
  },
  computed: {
    dataChange() {
      const {datels} = this;
      return {datels};
    }
  }
}
;
</script>

<style scoped>
</style>
