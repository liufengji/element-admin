<template>
  <!-- todo Ctrl + Alt + L -->
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="desc" label="内容" width="1000"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <template slot-scope="scope">
          <!--{{scope.row}}}-->
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ListArticle",
    data() {
      return {
        articles: []
      }
    },
    methods: {
      fetch() {
        this.$http.get('articles').then(res => {
          this.articles = res.data
        });
      },
      edit(id) {
        this.$router.push(`/articles/${id}/edit`)
      },
      remove(id) {
        // todo ES6 模板字符串
        this.$http.delete(`articles/${id}`).then(res => {
          this.$message({
            message: '文章删除成功',
            type: 'success'
          });
          this.fetch();
        });
      }
    },
    mounted() {
      this.fetch();
    }
  }
</script>

<style>

</style>
