<template>
  <!-- todo Ctrl + Alt + L -->
  <div>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="article.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即保存</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "CreateArticle",
    data() {
      return {
        article: {
          title: '',
          desc: ''
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res => {
          this.$message({
            message:'文章更新成功',
            type:'success'
          })
          console.log(res.data)
          this.$router.push('/')
        })
      },
      fetch(){
        this.$http.get(`articles/${this.$route.params.id}`).then(res => {
          this.article = res.data
        })
      },
      goBack(){
        this.$router.push('/')
      }
    },
    created() {
      this.fetch()
    }
  }
</script>

<style>

</style>
