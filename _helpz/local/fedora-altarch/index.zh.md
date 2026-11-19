## 用途

本站 Fedora 次要架构目录用于查找 `ppc64le`（IBM Power）和 `s390x`（IBM Z）的发行文件与软件包。`x86_64` 和 `aarch64` 使用 [Fedora 主仓](/help/fedora/)。

## 配置方法

发行仓库 `[fedora]` 使用系统自带的 `metalink` 选择镜像。更新仓库可使用本站。如果对应版本和架构的更新目录下能打开 `repodata/repomd.xml`，可在 `/etc/dnf/repos.override.d/90-lzu-fedora-altarch.repo` 设置：

```{ztmpl lang="ini"}
[updates]
metalink=
baseurl={{endpoint}}/updates/$releasever/Everything/$basearch/
```

```{ztmpl lang="bash"}
{{sudo}}dnf --refresh makecache
```

## 安装镜像

从 [Fedora 次要架构下载页](https://alt.fedoraproject.org/en/alt/) 选择架构和镜像类型。RISC-V 的下载与安装见 [Fedora RISC-V 安装文档](https://fedoraproject.org/wiki/Architectures/RISC-V/Installing)。

## 相关文档

[DNF5 仓库覆盖文件](https://dnf5.readthedocs.io/en/stable/dnf5.conf.5.html#repository-configuration-override)
