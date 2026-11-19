## 用途

Debian 的安全更新软件包。

## 配置方法

在 `/etc/apt/sources.list.d/debian.sources` 中找到套件名以 `-security` 结尾的安全更新条目，将该条目的 `URIs` 换为本站地址。Debian 13 的示例如下。

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: trixie-security
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```

保留本机的套件名、组件和签名密钥路径。传统 `.list` 格式修改安全更新行中的仓库地址。[Debian 主仓库](../debian/) 的地址在对应条目中单独替换。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

## 相关文档

[Debian 安全更新](https://www.debian.org/security/)
