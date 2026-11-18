## 用途

Raspberry Pi 的固件、内核和附加软件包。

## 配置方法

编辑 `/etc/apt/sources.list.d/raspi.list`，将软件源地址 `https://archive.raspberrypi.com/debian` 替换为下面的地址，保留原有发行版代号、组件和签名密钥设置。

```{ztmpl lang="text"}
{{endpoint}}
```

更新索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```

DEB822 格式对应修改 `raspi.sources` 的 `URIs`。此源提供 Raspberry Pi 附加包，基础 Debian 软件源另见 [Debian](../debian/)。

## 相关文档

[Raspberry Pi OS 文档](https://www.raspberrypi.com/documentation/computers/os.html)
