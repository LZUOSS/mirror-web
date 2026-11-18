## 用途

Jellyfin 服务端、客户端及相关发行文件。

## Debian / Ubuntu 软件源

先按 Jellyfin 官方说明建立源文件及签名密钥。在现有配置中把 `https://repo.jellyfin.org/debian` 或 `/ubuntu` 的根地址替换为对应的本站路径：

```{ztmpl lang="text"}
{{endpoint}}/debian
{{endpoint}}/ubuntu
```

两条地址分别用于 Debian、Ubuntu，选择与系统对应的一条；保留代号、组件、架构和 `Signed-By`，再运行 `sudo apt update`。

## 独立安装文件

服务端位于 `server/`，客户端位于 `client/`，其他发行文件按目录分类。

## 相关文档

[Jellyfin 安装文档](https://jellyfin.org/docs/general/installation/)
