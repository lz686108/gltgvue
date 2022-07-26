<template>
  <div>
    <!--     v-for="(item,index) in ddd":key="index`" :style="{width:item*2+'vw'}"-->
    <div style="height: 1vh"></div>
    <div style="height: 2vh;width: 97.6vw;background-color: #1E2D42;margin-left: 0.5vw;font-size: 0.5vw;
    color: #ffffff;padding-left: 1vw;padding-top: 1vh">
      1#高炉
    </div>
    <div style="width: 98.6vw;height: 7vh;background-color: #1E2D42;margin-left: 0.5vw" id="m1">
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
    }
  },
  methods: {
    euice() {
      var chartDom = document.getElementById('m1');
      var myChart = echarts.init(chartDom);
      var option;
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
          top: '4%',
          bottom: '0%',
          height: 45,
          containLabel: true
        },
        xAxis: {
          data: [
            '01-01',
            '01-02',
            '01-03',
            '01-04',
            '01-05',
            '01-06',
            '01-07',
            '01-08',
            '01-09',
            '01-10',
            '01-11',
            '01-12',
            '01-13',
            '01-14',
            '01-15',
            '01-16',
            '01-17',
            '01-18',
            '01-19',
            '01-20',
            '01-21',
            '01-22',
            '01-23',
            '01-24',
            '01-25',
            '01-26',
            '01-27',
            '01-28',
            '01-29',
            '01-30',
            '01-31',
            '02-01',
            '02-02',
            '02-03',
            '02-04',
            '02-05',
            '02-06',
            '02-07',
            '02-08',
            '02-09',
            '02-10',
            '02-11',
            '02-12',
            '02-13',
            '02-14',
            '02-15',
            '02-16',
            '02-17',
            '02-18',
            '02-19',
            '02-20',
            '02-21',
            '02-22',
            '02-23',
            '02-24',
            '02-25',
            '02-26',
            '02-27',
            '02-28',
            '03-01',
            '03-02',
            '03-03',
            '03-04',
            '03-05',
            '03-06',
            '03-07',
            '03-08',
            '03-09',
            '03-10',
            '03-11',
            '03-12',
            '03-13',
            '03-14',
            '03-15',
            '03-16',
            '03-17',
            '03-18',
            '03-19',
            '03-20',
            '03-21',
            '03-22',
            '03-23',
            '03-24',
            '03-25',
            '03-26',
            '03-27',
            '03-28',
            '03-29',
            '03-30',
            '03-31',
            '04-01',
            '04-02',
            '04-03',
            '04-04',
            '04-05',
            '04-06',
            '04-07',
            '04-08',
            '04-09',
            '04-10'
          ],
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
              color: '#90B9CC'
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
          {name: state[0], type: 'bar', data: []},
          {name: state[1], type: 'bar', data: []},
          {name: state[2], type: 'bar', data: []},
          {name: state[3], type: 'bar', data: []},
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
            data: [
              {
                itemStyle: {normal: {color: colors[0]}},
                name: '正常',
                value: [0, '01-01', '02-04']
              },
              {
                itemStyle: {normal: {color: colors[2]}},
                name: '正常',
                value: [0, '01-04', '01-05']
              },
              {
                itemStyle: {normal: {color: colors[1]}},
                name: '繁忙',
                value: [0, '03-05', '03-20']
              },
              {
                itemStyle: {normal: {color: colors[2]}},
                name: '繁忙',
                value: [0, '02-03', '03-06']
              }
            ]
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
    }
  },
  components: {
  },
  created() {
  }
  ,
  mounted() {
    this.euice();
    var aur = this.getAll('2022-01-01', '2022-06-08')
  }
  ,
}
;
</script>

<style scoped>
</style>
