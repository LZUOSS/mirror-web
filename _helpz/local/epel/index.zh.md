## 用途

EPEL 的 Enterprise Linux 附加软件包。

## 配置方法

先通过项目官方说明安装对应的 release/keyring 软件包。编辑 `/etc/yum.repos.d/` 中该仓库的 `.repo` 文件，在需要使用本站的条目中注释 `metalink=` 或 `mirrorlist=`，启用 `baseurl=`，将仓库根地址改为：

```{ztmpl lang="text"}
{{endpoint}}/
```

保留版本、仓库、架构子路径，以及 `gpgcheck`、`gpgkey`。EPEL 跟随系统的 Enterprise Linux 主版本；EPEL Next 和 testing 使用各自的仓库路径。

修改范围为对应的 EPEL 主仓库和 testing 条目。`epel-cisco-openh264.repo` 使用 Cisco 的发布地址，保留其原有配置。

EPEL 9 的 `[epel]` 条目使用下面的地址；其他 EL 主版本选择对应的版本目录：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/9/Everything/$basearch/
```

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 相关文档

[项目配置说明](https://docs.fedoraproject.org/en-US/epel/)
