## 用途

Gentoo ebuild 仓库的文件树。

## 使用方法

此目录提供 ebuild 与仓库元数据的 HTTP 浏览。Portage 的仓库同步需要完整的 rsync、Git 或快照接口；文件树的 HTTP 地址不能填入 Git 同步字段。

下面命令沿用系统现有的 rsync/Git 同步源；HTTP 浏览地址不改变该同步源：

```{ztmpl lang="bash"}
{{sudo}}emerge --sync
```

源码归档下载可以独立使用本站 [Gentoo distfiles](../gentoo/)，在 `make.conf` 中设置 `GENTOO_MIRRORS`。

## 相关文档

[Gentoo ebuild repository](https://wiki.gentoo.org/wiki/Repository_format/ebuild)
