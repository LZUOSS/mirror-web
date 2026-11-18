## 用途

Gentoo Prefix 相关 ebuild 文件树。

## 使用方法

HTTP 目录用于查看 ebuild 与元数据。Prefix 环境的配置位于 `$EPREFIX/etc/portage/`，仓库同步使用 Prefix 官方引导程序配置的同步接口。

源码归档位于本站的 `/gentoo`，ebuild 浏览位于本页的 `/gentoo-portage-prefix`。设置 distfiles 下载时，在 `$EPREFIX/etc/portage/make.conf` 中添加：

```{ztmpl lang="ini"}
GENTOO_MIRRORS="{{scheme}}://{{host}}/gentoo"
```

普通 Linux Gentoo 的配置见 [Gentoo](../gentoo/) 和 [Gentoo Portage](../gentoo-portage/)。

## 相关文档

[Gentoo Prefix](https://wiki.gentoo.org/wiki/Project:Prefix)
