## 用途

安同 OS 软件包及相关工具。

## 配置方法

使用系统的 `oma` 镜像源设置选择兰州大学。手动配置 APT 时，在现有源文件中将软件包仓库根地址替换为：

```{ztmpl lang="text"}
{{endpoint}}/debs
```

保留原有分支、组件和公钥配置，再运行 `sudo apt update`。

下载目录还提供 `aosc-os/`、`oma/` 和 `pubkeys/`；系统安装方式见安同 OS 官方指南。

## 相关文档

[安同 OS 文档](https://wiki.aosc.io/)
