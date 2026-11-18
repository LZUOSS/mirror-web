## 用途

Ubuntu x86 软件包仓库。

## 配置方法

Ubuntu 24.04 起默认使用 `/etc/apt/sources.list.d/ubuntu.sources`。以 noble 为例，主仓库条目为：

```{ztmpl lang="text"}
Types: deb
URIs: {{endpoint}}
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

已有系统只替换 `URIs`，保留本机发行版代号、组件和 keyring。传统格式在 `/etc/apt/sources.list` 的相应 `deb` 行中替换仓库地址。安全更新条目可保留官方 `https://security.ubuntu.com/ubuntu`。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

ARM、RISC-V 等移植架构使用 [Ubuntu Ports](../ubuntu-ports/)。安装 ISO 使用 [Ubuntu Releases](../ubuntu-releases/)。

## 相关文档

[Ubuntu 软件包管理](https://ubuntu.com/server/docs/package-management/) · [清华 Ubuntu 帮助](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/) · [科大 Ubuntu 帮助](https://mirrors.ustc.edu.cn/help/ubuntu.html)
