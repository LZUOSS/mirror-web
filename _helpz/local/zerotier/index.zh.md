## 用途

ZeroTier 的 DEB、RPM 及独立发行文件。

## 软件源配置

先通过 ZeroTier 官方文档配置对应系统的软件源和发布公钥。已有源使用 `download.zerotier.com` 时，将下载根地址替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

保留 `/debian/` 或 `/redhat/` 后缀、发行版代号、架构和签名设置，再使用系统包管理器刷新索引。

## 独立下载

正式发行文件位于 `RELEASES/`，预发布文件位于 `PRERELEASES/`。按版本与目标平台选择。

## 相关文档

[ZeroTier 下载与安装](https://www.zerotier.com/download/)
