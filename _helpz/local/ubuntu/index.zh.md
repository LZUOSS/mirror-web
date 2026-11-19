## 用途

Ubuntu x86 软件包仓库。

## 配置方法

Ubuntu 24.04 起默认使用 `/etc/apt/sources.list.d/ubuntu.sources`。找到 Ubuntu 主仓库条目，将 `URIs` 换为本站地址，保留本机的发行版代号、更新套件、组件和签名密钥路径。以下是 noble 的 deb822 条目。

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

传统格式在 `/etc/apt/sources.list` 的主仓库 `deb` 行中替换地址。保留现有指向 `security.ubuntu.com` 的安全更新条目。Ubuntu Pro 的 ESM 软件源由 Pro 客户端管理。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

ARM、RISC-V 等移植架构使用 [Ubuntu Ports](../ubuntu-ports/)。安装 ISO 使用 [Ubuntu Releases](../ubuntu-releases/)。

## 相关文档

[Ubuntu 软件包管理](https://ubuntu.com/server/docs/package-management/) · [Ubuntu 安全更新](https://documentation.ubuntu.com/security/security-updates/)
