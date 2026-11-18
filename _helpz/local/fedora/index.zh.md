## 用途

Fedora 主发行仓库的软件包、更新和安装介质。

## 配置方法

编辑 Fedora 自带的 `.repo` 文件，在相应仓库中注释 `metalink=`，启用 `baseurl=`。发布仓库由本站 `/fedora/releases/` 进入，更新仓库为 `/fedora/updates/`。

按照原条目保留发行版本、Everything/Workstation/Server、架构及 `os/` 等后缀，保留 Fedora 签名密钥。

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```

## 安装镜像

进入 `releases/`，选择版本、版本类型和架构，再进入相应 `iso/` 目录。

## 相关文档

[Fedora 软件源配置](https://docs.fedoraproject.org/en-US/quick-docs/fedora-repositories/)
