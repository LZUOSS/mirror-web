## 用途

Raspberry Pi 的固件、内核和附加软件包。

## 配置方法

在 `/etc/apt/sources.list.d/raspi.sources` 的 `URIs` 中替换 `archive.raspberrypi.com/debian` 对应的完整地址。旧版系统编辑同目录下的 `raspi.list`。发行版代号、组件和签名密钥沿用原配置。

```{ztmpl lang="text"}
{{endpoint}}
```

更新索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```

此源提供 Raspberry Pi 附加包。64 位系统的基础包使用 [Debian 软件源](../debian/)，32 位系统继续使用原有 [Raspbian 软件源](https://www.raspberrypi.com/documentation/computers/software-sources.html#finding-software-sources-in-raspberry-pi-os)。

## 相关文档

[Raspberry Pi OS 文档](https://www.raspberrypi.com/documentation/computers/os.html)
