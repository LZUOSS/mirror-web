## 用途

本站 Fedora 主仓提供 `x86_64` 和 `aarch64` 的软件包、更新和安装镜像。IBM Power 与 IBM Z 的下载见 [Fedora 次要架构](/help/fedora-altarch/)。

## 配置方法

在使用 DNF5 的 Fedora 上，以管理员身份在 `/etc/dnf/repos.override.d/` 新建 `90-lzu-fedora.repo`，写入以下内容。Fedora 45 起随系统安装的仓库定义位于 `/usr/share/dnf5/repos.d/`，本地覆盖会保留发行版配置中的签名校验和签名密钥。

```{ztmpl lang="ini"}
[fedora]
metalink=
baseurl={{endpoint}}/releases/$releasever/Everything/$basearch/os/

[updates]
metalink=
baseurl={{endpoint}}/updates/$releasever/Everything/$basearch/
```

`$releasever` 和 `$basearch` 由 DNF 按系统版本与架构展开。保存后刷新元数据：

```{ztmpl lang="bash"}
{{sudo}}dnf --refresh makecache
```

恢复发行版的镜像选择时，删除此前新建的覆盖文件，再刷新元数据。

## 安装镜像

打开 [发行版目录](/fedora/releases/)，按版本、版本类型和架构选择文件。ISO 在对应的 `iso/` 目录，例如 `Workstation/x86_64/iso/`。ARM 磁盘镜像可在相应的 `images/` 目录下载，例如 `Workstation/aarch64/images/`。用同目录的 `CHECKSUM` 文件校验下载。

## 相关文档

- [DNF5 仓库覆盖文件](https://dnf5.readthedocs.io/en/stable/dnf5.conf.5.html#repository-configuration-override)
- [Fedora 45 仓库配置位置变更](https://fedoraproject.org/wiki/Changes/RelocateRpmRepoConfigsToUsr)
