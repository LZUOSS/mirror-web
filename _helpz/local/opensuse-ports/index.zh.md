## 用途

本站镜像 openSUSE 上游 `/ports/` 目录中的软件包和安装镜像。

## 配置方法

用 `zypper lr -u` 查看现用仓库。对于手动管理的软件源，在 YaST 或 `/etc/zypp/repos.d/` 中对应的 `.repo` 文件里，将仓库地址中的 `https://download.opensuse.org/ports` 替换为以下地址。

```{ztmpl lang="text"}
{{endpoint}}
```

保留原 URL 中的架构、发行版和仓库路径，并保留签名检查。例如，aarch64 Tumbleweed 的 OSS 仓库地址为

```{ztmpl lang="text"}
{{endpoint}}/aarch64/tumbleweed/repo/oss/
```

修改后以管理员权限刷新仓库索引。

```{ztmpl lang="bash"}
{{sudo}}zypper refresh
```

使用 `openSUSE-repos` 服务管理的仓库时，服务刷新会重新生成仓库定义。[openSUSE-repos 使用说明](https://github.com/openSUSE/openSUSE-repos#reloading--refreshing-list-of-repositories)

## 安装镜像

aarch64 Tumbleweed 的安装镜像位于以下目录。

```{ztmpl lang="text"}
{{endpoint}}/aarch64/tumbleweed/iso/
```

其他 openSUSE 软件源参见 [openSUSE](../opensuse/)。
