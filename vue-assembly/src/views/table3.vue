<template>
  <div class="table">
    <div class="flex-1">
      <dm_icon :icon="'mingxi'" :value="'各项明细'" style="margin-left: 0.7vw">
      </dm_icon>
    </div>
    <div class="table-1">
      <dm_newtable
        :dmthead="tablethead"
        :dmlist="tablelist"
        :dmheight="'20'"
        :dmupdate="true"
        :dmdelete="true"
        @dmclick="list"
      >
      </dm_newtable>
      <dm_newtable
        style="margin-top: 10vh"
        :dmthead="tablethead"
        :dmlist="tablelist"
        :dmheight="'20'"
        :dmupdate="true"
        :dmdelete="true"
        @dmclick="list"
        :end_fixed="true"
      >
      </dm_newtable>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tablelist: [
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
        { index: 1, name: "王少", age: 24, time: "2022:04-04" },
      ],
      tablethead: [
        {
          name: "序号",
          key: "index",
          text: "center",
        },
        {
          name: "name",
          key: "name",
          text: "right",
          width: "20%",
        },
        {
          name: "TFe",
          key: "age",
          text: "right",
          width: "20%",
        },
        {
          name: "CaO",
          key: "time",
          text: "left",
          width: "20%",
        },
        {
          name: "CaO",
          key: "time",
          text: "left",
          width: "50%",
        },
        {
          name: "CaO",
          key: "time",
          text: "left",
          width: "50%",
        },
        {
          name: "CaO",
          key: "time",
          text: "left",
        },
      ],
    };
  },
  // 路由守卫
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // console.log(vm);
      // 每次进入路由执行
    });
  },
  methods: {
    list(parms, msg) {
      console.log(parms, msg);
    },
    // sort_list(parms) {
    //   if (parms.sort == "降序") {
    //     if (typeof this.obj[0][parms.key] != "string") {
    //       this.obj.sort(this.compare(parms.key));
    //     } else {
    //       this.sortList(this.obj, parms.key, "降序");
    //     }
    //   } else {
    //     if (typeof this.obj[0][parms.key] != "string") {
    //       this.obj.sort(this.compare1(parms.key));
    //     } else {
    //       this.sortList(this.obj, parms.key, "正序");
    //     }
    //   }
    // },
    // compare(property) {
    //   return function (a, b) {
    //     var value1 = a[property];
    //     var value2 = b[property];
    //     return value2 - value1;
    //   };
    // },
    // compare1(property) {
    //   return function (a, b) {
    //     var value1 = a[property];
    //     var value2 = b[property];
    //     return value1 - value2;
    //   };
    // },
    // sortList(lists, keys, reorder) {
    //   if (reorder == "正序") {
    //     // lists传的是数组
    //     return lists.sort((a, b) => {
    //       return a[keys].localeCompare(b[keys]); // grapheme为字母对应的属性名
    //     });
    //   } else {
    //     // lists传的是数组
    //     return lists.sort((a, b) => {
    //       return b[keys].localeCompare(a[keys]); // grapheme为字母对应的属性名
    //     });
    //   }
    // },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.table-1 {
  width: 84vw;
  height: 74.5vh;
  margin: 0 auto;
  background: #2a354b;
  border-radius: 9px 9px 9px 9px;
  padding-top: 0.5vh;
  position: relative;
}
.flex-1 {
  height: 3vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5vh;
}
.haha {
  background: red;
}
</style>
  