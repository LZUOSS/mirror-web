## 用途

R 软件、扩展包和源码。

## 配置方法

在 R 会话中设置：

```{ztmpl lang="r"}
options(repos = c(CRAN = "{{endpoint}}/"))
install.packages("ggplot2")
```

长期使用时，将 `options(...)` 一行写入 `~/.Rprofile`。

Linux 的 R 软件包仓库位于 `bin/linux/`，按发行版进入相应子目录；Windows 和 macOS 安装程序分别位于 `bin/windows/`、`bin/macosx/`。

## 相关文档

[CRAN 安装指南](https://cran.r-project.org/doc/manuals/r-release/R-admin.html)
