## 用途

Debian 软件包及更新仓库。

## 配置方法

Debian 13 的 DEB822 配置文件为 `/etc/apt/sources.list.d/debian.sources`。下面是 trixie 的主仓库示例：

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: trixie trixie-updates
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```

已有系统换源时只替换 `URIs`，保留本机的 `Suites`、`Components` 和 `Signed-By`。传统 `.list` 格式只替换 `deb` 行中的仓库地址。安全更新使用独立的 [debian-security](../debian-security/) 路径。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

安装介质见 [Debian CD](../debian-cd/)。

## 相关文档

[Debian 软件包管理](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) · [Debian 13 源配置](https://www.debian.org/releases/trixie/release-notes/upgrading.en.html)
