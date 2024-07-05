---
layout: article
title:  "Github Page 配置踩坑记录"
author: Dylan
tags: [ Notes ]
type: cover
image: /assets/images/iOS_18/preview.jpeg
articles:
  show_author_profile: true
  show_cover: true
articles:
  excerpt_type: html
---
# 使用jekyll本地调试可以访问静态资源，但是上传至GitHub无法访问

使用jekyll本地调试可以访问静态资源，但是上传至GitHub无法访问的问题

在参考网上教程配置完github page之后，将fork 的主题下载之后，启动本地服务器运行没问题.

![本地服务器](/assets/images/install_githubpage/local_test_image.png)

但是在远端打开后CSS不渲染

![github page 展示](/assets/images/install_githubpage/github_page_image.png)

可能的原因

## _site文件被忽略,检查.gitignore文件

.gitignore文件有可能将_site文件添加为忽略文件，以至于`git add .`等后续操作将该文件忽略，从而无法上传至远程仓库的问题。

如下，是我下载jekyll模板后，存在的内容，可以看到_site文件以及`.sass-cache`文件都被忽略了

**解决：** 检查远程仓库是否有_site文件，将.gitignore文件中的内容去掉，重新提交至远程仓库即可。
![_site commit change](/assets/images/install_githubpage/site_change.png)


## baseurl字段设置的有问题
  
如果baseurl字段设置了值，jekyll本地生成的所以HTML文件中，其对静态资源的访问路径都会加上改值以作地址映射

上传至远程仓库后，其由于github的根目录没有关于`/jekyll-theme-memoirs`这个地址映射，所有使得有该映射地址的静态文件都无法访问

**解决：** 我目前还没找到可以为GitHub添加映射的方法，因此只能先将baseurl的值置空

![baseurl commit change](/assets/images/install_githubpage/baseurl_change.png)