## 用途

openSUSE Leap、Tumbleweed、Slowroll 的软件包和介质。

## 配置方法

用 `zypper lr -u` 查看当前仓库。在 YaST 或相应 `.repo` 文件中，把 `https://download.opensuse.org` 替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

保留 `distribution/`、`tumbleweed/`、`slowroll/`、`update/` 等版本分支后缀以及签名检查。更新元数据：

```{ztmpl lang="bash"}
{{sudo}}zypper refresh
```

安装介质位于对应发行版和架构目录中的 `iso/`。

上游仓库的 URL 路径以 `/ports/` 开头时，参见 [openSUSE Ports](../opensuse-ports/)。

## 相关文档

[openSUSE 软件源文档](https://en.opensuse.org/Package_repositories)
