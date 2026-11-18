## 用途

Tailscale stable 的 Debian、Ubuntu 软件包。

## 配置方法

先使用 Tailscale 官方安装说明配置签名密钥。本站将 Ubuntu、Debian 分别整理为 APT 仓库，根地址是：

```{ztmpl lang="text"}
{{endpoint}}/ubuntu
{{endpoint}}/debian
```

Ubuntu 24.04 的源文件示例：

```{ztmpl lang="text"}
deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] {{endpoint}}/ubuntu noble main
```

Debian 使用 `/debian` 根地址，Suite 使用系统对应的发行版代号。本站地址后不再添加官方路径中的第二层代号；发行版由 APT 的 Suite 字段选择。保留官方签名密钥设置。

```{ztmpl lang="bash"}
{{sudo}}apt update
{{sudo}}apt install tailscale
```

安装后通过 `sudo tailscale up` 登录所使用的 tailnet。

## 相关文档

[Tailscale stable 软件源](https://pkgs.tailscale.com/stable/)
