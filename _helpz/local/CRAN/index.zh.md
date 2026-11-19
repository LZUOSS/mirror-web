## 用途

R 软件、扩展包和源码。

## 配置方法

在 R 会话中设置：

```{ztmpl lang="r"}
options(repos = c(CRAN = "{{endpoint}}/"))
install.packages("ggplot2")
```

第一行设置当前 R 会话的 CRAN 地址。为用户设置默认地址时，将该行写入 `~/.Rprofile`。

安装 R 本身时，从镜像的 `bin/linux/`、`bin/windows/` 或 `bin/macosx/` 选择对应系统的目录。Linux 发行版的系统包配置按对应子目录提供的说明操作。

## 相关文档

[CRAN 安装指南](https://cran.r-project.org/doc/manuals/r-release/R-admin.html)
