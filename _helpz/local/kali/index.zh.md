## 用途

Kali Linux 软件包仓库。

## 配置方法

编辑 `/etc/apt/sources.list`，使用当前 Kali 的分支和组件。滚动版示例：

```{ztmpl lang="text"}
deb {{endpoint}} kali-rolling main contrib non-free non-free-firmware
```

保留系统安装的 Kali archive keyring，更新索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```

安装介质见 [Kali Images](../kali-images/)。

## 相关文档

[Kali 软件源文档](https://www.kali.org/docs/general-use/kali-linux-sources-list-repositories/)
