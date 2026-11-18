## 用途

ELRepo 的 Enterprise Linux 附加软件包。

## 配置方法

先通过项目官方说明安装对应的 release/keyring 软件包。编辑 `/etc/yum.repos.d/` 中该仓库的 `.repo` 文件，在需要使用本站的条目中注释 `metalink=` 或 `mirrorlist=`，启用 `baseurl=`，将仓库根地址改为：

```{ztmpl lang="text"}
{{endpoint}}/
```

保留版本、仓库、架构子路径，以及 `gpgcheck`、`gpgkey`。ELRepo 的 `elrepo/`、`kernel/`、`extras/` 是不同仓库。只启用所需条目，保留其目录后缀。

EL 9 的 `[elrepo]` 条目示例：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/elrepo/el9/$basearch/
```

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 相关文档

[项目配置说明](https://elrepo.org)
