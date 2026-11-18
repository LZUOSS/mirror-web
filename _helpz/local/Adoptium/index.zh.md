## 用途

Eclipse Temurin JDK 安装包及 DEB、RPM 软件源。

## 安装包下载

按 Java 主版本进入目录，再选择操作系统、CPU 架构和 JDK/JRE。下载归档或安装器后，使用同目录提供的校验文件核对完整性。

## Debian / Ubuntu 软件源

先按 [Adoptium Linux 安装文档](https://adoptium.net/installation/linux/) 配置签名密钥。已有源配置中，将 `https://packages.adoptium.net/artifactory/deb` 替换为：

```{ztmpl lang="text"}
{{endpoint}}/deb
```

保留系统的发行版代号和 `signed-by`。更新索引后安装 Temurin，例如：

```{ztmpl lang="bash"}
{{sudo}}apt update
{{sudo}}apt install temurin-21-jdk
```

## RPM 软件源

本站 RPM 目录使用 `rhel9-x86_64`、`rhel10-aarch64`、`fedora42-x86_64` 等合并目录名。RHEL 9 及兼容系统的仓库配置为：

```{ztmpl lang="ini"}
[Adoptium]
name=Adoptium Temurin
baseurl={{endpoint}}/rpm/rhel9-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
```

将该条目写入 `/etc/yum.repos.d/adoptium.repo`，再运行 `sudo dnf makecache`。其他系统使用本站 `rpm/` 中对应的发行版与架构目录名；本站的合并目录名与官方当前的分层路径不同。

## 相关文档

[Adoptium 安装文档](https://adoptium.net/installation/) · [MirrorZ 帮助](https://help.mirrors.cernet.edu.cn/Adoptium/)
