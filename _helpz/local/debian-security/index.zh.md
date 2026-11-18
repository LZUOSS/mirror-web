## 用途

Debian 的安全更新软件包。

## 配置方法

在安全更新条目中把 `https://security.debian.org/debian-security` 换为本站地址。Debian 13 示例：

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```

其他发行版保留各自的套件名与 keyring 路径。安全更新条目与 [Debian 主仓库](../debian/) 分开配置。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

## 相关文档

[Debian 安全更新](https://www.debian.org/security/)
