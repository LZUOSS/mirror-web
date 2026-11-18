## 用途

openEuler 各版本的安装介质及软件包。

## 配置方法

在 `/etc/yum.repos.d/` 的 openEuler 源配置中，将 `https://repo.openeuler.org` 根地址替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

保留原来的版本目录、OS/update/EPOL 仓库名与 `$basearch`，保留签名密钥设置，再运行 `sudo dnf makecache`。

以 openEuler 24.03 LTS 的 OS 条目为例：

```{ztmpl lang="ini"}
baseurl={{endpoint}}/openEuler-24.03-LTS/OS/$basearch/
```

安装介质位于各发行版目录下的 `ISO/`，按架构下载。

## 相关文档

[openEuler 文档](https://docs.openeuler.org/)
