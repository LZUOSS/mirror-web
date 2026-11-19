## 用途

Ubuntu ARM、RISC-V 等移植架构的软件包。

## 配置方法

在现有 Ubuntu Ports 源文件中，将指向 `ports.ubuntu.com/ubuntu-ports` 的条目改为本站地址。Ubuntu 24.04 起默认使用 `/etc/apt/sources.list.d/ubuntu.sources`，在对应条目中改 `URIs`。以下是 noble 的 deb822 示例。

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: noble noble-updates noble-backports noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

原配置将安全更新单列时，也替换指向 Ubuntu Ports 的安全更新条目的地址。传统 `.list` 格式修改相应的 `deb` 行。保留本机使用的套件、组件、架构限制和签名密钥路径。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

该仓库与 x86 使用的 [Ubuntu 主仓库](../ubuntu/) 分开。

## 相关文档

[Ubuntu 软件源](https://ubuntu.com/server/docs/package-management/)
