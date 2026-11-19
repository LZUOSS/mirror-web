## 用途

Debian 软件包及更新仓库。

## 配置方法

Debian 13 默认使用 `/etc/apt/sources.list.d/debian.sources`。在现有主仓库条目中替换 `URIs`，保留本机的 `Suites`、`Components` 和 `Signed-By`。以下是 trixie 的 deb822 主仓库条目。

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: trixie trixie-updates
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```

传统 `.list` 格式只替换 `deb` 行中的仓库地址。安全更新条目单独配置，见 [Debian Security](../debian-security/)。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

安装介质见 [Debian CD](../debian-cd/)。

## 相关文档

[Debian 软件包管理](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) · [Debian 13 源配置](https://www.debian.org/releases/trixie/release-notes/upgrading.html#preparing-apt-sources-files)
