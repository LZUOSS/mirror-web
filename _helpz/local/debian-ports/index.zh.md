## 用途

Debian 非正式移植架构的软件包。

## 配置方法

Debian Ports 用于移植架构，不同于普通 Debian 主仓库。已有 Ports 系统在其 APT 配置中，将 `https://deb.debian.org/debian-ports` 替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

保留 `unstable`、`unreleased` 等本机所用套件、架构及 `debian-ports-archive-keyring` 的签名设置，再运行 `sudo apt update`。

## 相关文档

[Debian Ports](https://www.ports.debian.org/)
