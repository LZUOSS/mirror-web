## 用途

Kali Linux 软件包仓库。

## 配置方法

Kali 2026.2 起默认使用 `/etc/apt/sources.list.d/kali.sources`。将现有 Kali 仓库条目的 `URIs` 换为本站地址，保留所用分支、组件和签名密钥路径。默认滚动版的配置如下。

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: kali-rolling
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/kali-archive-keyring.gpg
```

旧版在 `/etc/apt/sources.list` 的 Kali `deb` 行中替换仓库地址。换源后更新索引。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

安装介质见 [Kali Images](../kali-images/)。

## 相关文档

[Kali 软件源文档](https://www.kali.org/docs/general-use/kali-apt-sources/)
