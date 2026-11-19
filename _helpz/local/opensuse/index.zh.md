## 用途

openSUSE Leap、Tumbleweed、Slowroll 的软件包和介质。

## 配置方法

用 `zypper lr -u` 查看仓库地址。对本机独立配置的发行版仓库，可以在 YaST 或 `/etc/zypp/repos.d/` 中将原地址改为本站的对应路径。以下是三种发行版本的 OSS 仓库示例：

```{ztmpl lang="text"}
{{endpoint}}/distribution/leap/16.0/repo/oss/
{{endpoint}}/tumbleweed/repo/oss/
{{endpoint}}/slowroll/repo/oss/
```

按本机版本保留原有的仓库路径，例如 `non-oss/` 或 `update/`，并保留签名检查。上游地址的路径以 `/ports/` 开头时，参见 [openSUSE Ports](../opensuse-ports/)。

形如 `openSUSE:repo-oss` 的仓库由 `openSUSE-repos` 服务生成，刷新服务会重新生成配置。这类仓库可以继续由发行版服务管理。

手动修改后刷新元数据：

```{ztmpl lang="bash"}
{{sudo}}zypper refresh
```

安装介质位于对应发行版的 `iso/` 目录。按文件名选择架构。

## 相关文档

- [openSUSE 软件源文档](https://en.opensuse.org/Package_repositories)
- [openSUSE-repos 仓库服务](https://github.com/openSUSE/openSUSE-repos)
