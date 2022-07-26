<template>
  <div class="table-1">
    <!-- 合计变色 -->

    <p style="color: #fff; padding-left: 0.7vw; line-height: 4vh">表格</p>
    <div class="dm_ding dm_frozen1" style="height: 30vh">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>图片</th>
            <th>单位</th>
            <th>单位</th>
            <th>单位</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>操作</th>
            <th>操作</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 50" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <el-image
                style="width: 1vw; height: 1vw"
                :src="img"
                :preview-src-list="[img]"
              >
              </el-image>
            </td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>
              <img
                @click="update(item)"
                style="width: 0.8vw; margin-right: 0.5vw; cursor: pointer"
                src="../assets/img_icon/bianji@2x.png"
                alt=""
              />
              <el-popconfirm
                @confirm="del(item)"
                icon-color="red"
                title="确定删除吗？"
              >
                <img
                  slot="reference"
                  style="width: 0.8vw; cursor: pointer"
                  src="../assets/img_icon/shanchu1@2x.png"
                  alt=""
                />
              </el-popconfirm>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="color: #fff; padding-left: 0.7vw; line-height: 4vh">冻结表格</p>
    <div class="dm_frozen dm_ding">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>单位</th>
            <th>单位</th>
            <th>单位</th>
            <th>单位</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>工序</th>
            <th>操作</th>
            <th>操作</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 100" :key="i">
            <td>{{ index + 1 }}</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>
              <img
                @click="update(item)"
                style="width: 0.8vw; margin-right: 0.5vw; cursor: pointer"
                src="../assets/img_icon/bianji@2x.png"
                alt=""
              />
              <el-popconfirm
                @confirm="del(item)"
                icon-color="red"
                title="确定删除吗？"
              >
                <img
                  slot="reference"
                  style="width: 0.8vw; cursor: pointer"
                  src="../assets/img_icon/shanchu1@2x.png"
                  alt=""
                />
              </el-popconfirm>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: false,

      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417150803_VBGwk.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653104425&t=17f22f0d6cb185d72c51bfdd99eebfb7",
    };
  },

  methods: {
    sort_list(parms) {
      console.log(parms);
      this.sortList(this.obj, parms.key, parms.sort);
    },
    sortList(lists, keys, reorder) {
      if (reorder == "降序") {
        // lists传的是数组
        return lists.sort((a, b) => {
          return a[keys].localeCompare(b[keys]); // grapheme为字母对应的属性名
        });
      } else {
        // lists传的是数组
        return lists.sort((a, b) => {
          return b[keys].localeCompare(a[keys]); // grapheme为字母对应的属性名
        });
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.table-1 {
  width: 84vw;
  height: 92vh;
  margin: 0 auto;
  background: #2a354b;
}
</style>
  