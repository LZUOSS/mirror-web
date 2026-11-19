## 用途

Fedora 和 Enterprise Linux 的 free、nonfree 附加包。

## 配置方法

先按 [RPM Fusion 配置说明](https://rpmfusion.org/Configuration) 安装与你的系统版本对应的 release 包。保留原有仓库的启用状态和签名设置。

### Fedora

在使用 DNF5 的 Fedora 上，以管理员身份在 `/etc/dnf/repos.override.d/` 新建 `90-lzu-rpmfusion.repo`，按已安装的仓库选择以下条目：

```{ztmpl lang="ini"}
[rpmfusion-free]
metalink=
baseurl={{endpoint}}/free/fedora/releases/$releasever/Everything/$basearch/os/

[rpmfusion-free-updates]
metalink=
baseurl={{endpoint}}/free/fedora/updates/$releasever/$basearch/

[rpmfusion-nonfree]
metalink=
baseurl={{endpoint}}/nonfree/fedora/releases/$releasever/Everything/$basearch/os/

[rpmfusion-nonfree-updates]
metalink=
baseurl={{endpoint}}/nonfree/fedora/updates/$releasever/$basearch/
```

### Enterprise Linux

例如在 EL 9 上，修改 `/etc/yum.repos.d/` 中对应的条目。注释 `metalink=` 或 `mirrorlist=`，为 `[rpmfusion-free-updates]` 启用：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/free/el/updates/9/$basearch/
```

`[rpmfusion-nonfree-updates]` 对应：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/nonfree/el/updates/9/$basearch/
```

保存后刷新元数据：

```{ztmpl lang="bash"}
{{sudo}}dnf --refresh makecache
```

## 相关文档

[DNF5 仓库覆盖文件](https://dnf5.readthedocs.io/en/stable/dnf5.conf.5.html#repository-configuration-override)
