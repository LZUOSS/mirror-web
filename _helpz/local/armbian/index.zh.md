## 用途

Armbian 系统的软件包仓库。

## 配置方法

编辑 `/etc/apt/sources.list.d/armbian.list`，将软件源地址 `https://apt.armbian.com` 替换为下面的地址，保留原有发行版代号、组件和签名密钥设置。

```{ztmpl lang="text"}
{{endpoint}}
```

更新索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```

`.sources` 格式的安装对应修改 `URIs`。这里是 Armbian 的附加软件源；系统的 Debian/Ubuntu 基础源分别配置，见 [Debian](../debian/) 和 [Ubuntu](../ubuntu/)。

## 相关文档

[Armbian 文档](https://docs.armbian.com/) · [MirrorZ 帮助](https://help.mirrors.cernet.edu.cn/armbian/)
