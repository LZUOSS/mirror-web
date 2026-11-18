## 用途

AlmaLinux 安装镜像及 BaseOS、AppStream 等软件包。

## 配置方法

编辑 `/etc/yum.repos.d/` 下该发行版的 `.repo` 文件。在需要使用本站的仓库条目内注释 `mirrorlist=` 或 `metalink=`，启用 `baseurl=`，并替换为本站路径。BaseOS 的路径示例：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/$releasever/BaseOS/$basearch/os/
```

AppStream 条目使用 `AppStream` 目录；其他条目保留各自原有子路径。保留 `gpgcheck` 和 `gpgkey`，更新元数据：

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 安装镜像

进入所需版本的 `isos/` 子目录，再按架构下载。

## 相关文档

[项目文档](https://wiki.almalinux.org/)
