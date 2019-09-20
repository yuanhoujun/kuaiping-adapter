快评评论系统适配
===
[快评](https://kuaiping.yhdm360.com)是由[深圳一行代码科技有限公司](https://yhdm360.com)开发的一套完整的社会化评论系统解决方案。目前，快评支持使用微信、手机号等方式进行登录，评论语法使用大家所熟知的Markdown标记语言，非常有利于处理复杂问题。

目前，快评正在逐步支持[Hexo](https://github.com/hexojs/hexo)流行主题。为了便于大家快速尝鲜，我们会在该版本库中优先适配Hexo最流行主题，大家可以先按照说明尝试集成，有任何问题，扫描下方二维码联系我们，后续我们会推送PR到相关主题库中。

Hexo主题适配
====
### Next
主题地址：[https://github.com/theme-next/hexo-theme-next](https://github.com/theme-next/hexo-theme-next)

### 集成步骤
1）先按照[Next](https://github.com/theme-next/hexo-theme-next)官方文档集成Next主题

2）clone该版本库到本地

```
git clone https://github.com/yuanhoujun/kuaiping-adapter.git
```

3）复制next文件夹到themes文件夹下，合并到next文件夹中

4）在主题的配置文件`_config.yml`中增加如下配置

```
# Kuaiping
kuaiping:
  enable: true
  appid: xxxx
```

备注：appid需要到[快评官网](https://kuaiping.yhdm360.com)申请。


