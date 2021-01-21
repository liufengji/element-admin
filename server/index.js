const express = require('express');
const cors = require('cors');

const app = express();
// todo cors解决跨域问题
app.use(cors());
// todo req.body 解析数据
// todo 添加 express 生成器
// todo npm install body-parser --save
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongoose:admin123@localhost:27017/mongoose_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
});
const ArticleModel = mongoose.model('article',new mongoose.Schema({
  title:String,
  desc:{type:String}
}))

app.get('/', (req, res) => {
  res.send('index');
});

//新增文章
app.post('/api/articles/',async (req,res) => {
  const data = req.body;
  console.log(data);
  const article = await ArticleModel.create(data);
  res.send(article);
});

//查看文章列表
app.get('/api/articles/',async (req,res) => {
  const article = await ArticleModel.find()
  res.send(article)
})

// 删除文章
app.delete('/api/articles/:id',async (req,res) => {
  await ArticleModel.findByIdAndDelete(req.params.id)
  res.send({
    status:true
  })
})

//文章详情
app.get('/api/articles/:id',async (req,res) => {
  const article = await ArticleModel.findById(req.params.id);
  res.send(article)
})

//修改文章
app.put('/api/articles/:id',async (req,res) => {
  const article = await ArticleModel.findByIdAndUpdate(req.params.id,req.body);
  res.send(article)
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
