## 用途

Ubuntu ARM、RISC-V 等移植架构的软件包。

## 配置方法

在现有 Ubuntu Ports 源文件中，将 `https://ports.ubuntu.com/ubuntu-ports` 替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

`.sources` 格式修改 `URIs`，`.list` 格式修改 `deb` 行的仓库地址。保留本机的发行版代号、updates/security 套件、组件与签名密钥。

```{ztmpl lang="bash"}
{{sudo}}apt update
```

该仓库与 x86 使用的 [Ubuntu 主仓库](../ubuntu/) 分开。

## 相关文档

[Ubuntu 软件源](https://ubuntu.com/server/docs/package-management/)
