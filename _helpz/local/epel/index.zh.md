## 用途

EPEL 的 Enterprise Linux 附加软件包。

## 配置方法

先按 [EPEL 配置说明](https://docs.fedoraproject.org/en-US/epel/getting-started/) 启用当前系统所需的依赖仓库并安装 `epel-release`。在 `/etc/yum.repos.d/epel.repo` 的 `[epel]` 条目中注释 `metalink=`，启用 `baseurl=` 并换成本站地址。保留原有签名设置。

EL 8 和 EL 9 的版本目录为 `8/` 和 `9/`。使用默认主版本号的系统可配置为：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/$releasever/Everything/$basearch/
```

EL 10 按次版本区分软件包。使用已安装的 `epel-release` 所提供的 `baseurl=` 示例，将 `/pub/epel/` 及之前的地址换成本站 EPEL 根地址，保留后续的版本变量和架构路径。CentOS Stream 10 对应本站的 `10s/`，具体的 RHEL 10 次版本以本机 `epel-release` 配置为准。

已启用的 EPEL Next 或 testing 条目可用相同方法替换根地址，保留原有的 `next/` 或 `testing/` 路径。

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 相关文档

[EPEL 版本分支](https://docs.fedoraproject.org/en-US/epel/branches/)
