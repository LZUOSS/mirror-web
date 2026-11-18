## 用途

Fedora 和 Enterprise Linux 的 free、nonfree 附加包。

## 配置方法

先按 RPM Fusion 官方说明安装与本机 Fedora/EL 版本对应的 release 包。在 `/etc/yum.repos.d/rpmfusion-*.repo` 中注释镜像选择行并启用 `baseurl`，将 `download1.rpmfusion.org` 的仓库根地址替换为本站地址：

```{ztmpl lang="text"}
{{endpoint}}
```

保留 `free/` 或 `nonfree/`、发行版、releases/updates 和架构后缀，以及 GPG 密钥设置。

Fedora 的 free release 条目示例：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/free/fedora/releases/$releasever/Everything/$basearch/os/
```

对应 free updates 条目使用 `/free/fedora/updates/$releasever/$basearch/`；nonfree 条目使用同一结构下的 `nonfree` 根目录。

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 相关文档

[RPM Fusion 配置](https://rpmfusion.org/Configuration)
