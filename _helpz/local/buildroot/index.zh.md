## 用途

Buildroot 构建过程使用的上游源码归档。

## 配置方法

在 Buildroot 的 `make menuconfig` 中进入 `Build options` → `Mirrors and Download locations`，将 `Backup download site` 设置为：

```{ztmpl lang="text"}
{{endpoint}}
```

对应配置项为 `BR2_BACKUP_SITE`。Buildroot 先尝试软件包原始下载地址，再使用备用下载站；文件仍按软件包的 `.hash` 校验。

## 相关文档

[Buildroot 手册](https://buildroot.org/downloads/manual/manual.html)
