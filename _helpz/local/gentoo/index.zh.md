## 用途

Gentoo distfiles、stage 归档和系统镜像。

## Distfiles 配置

在 `/etc/portage/make.conf` 中配置：

```{ztmpl lang="ini"}
GENTOO_MIRRORS="{{endpoint}}"
```

Portage 会按软件包的 Manifest 校验下载文件。stage 与启动介质位于 `releases/`。ebuild 仓库的同步配置见 [Gentoo Portage](../gentoo-portage/)。

## 相关文档

[Gentoo Handbook](https://wiki.gentoo.org/wiki/Handbook:Main_Page)
