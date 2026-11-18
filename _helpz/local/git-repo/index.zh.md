## 用途

Android Repo 工具及其源码目录。

## 下载 Repo 工具

从本站下载 Repo 启动脚本：

```{ztmpl lang="bash"}
curl -fL {{endpoint}}/git-repo -o repo
chmod +x repo
```

将 `repo` 放入 `PATH` 中的目录。若要从本站更新 Repo 工具本身，请在运行 `repo init` 前设置：

```{ztmpl lang="bash"}
export REPO_URL={{endpoint}}/git-repo.git
```

`REPO_URL` 只控制 Repo 工具自身的源码地址。Android 项目的 manifest 地址由 `repo init -u` 单独指定。

## 相关文档

[Repo 官方使用说明](https://gerrit.googlesource.com/git-repo/+/HEAD/README.md) · [官方启动脚本](https://storage.googleapis.com/git-repo-downloads/repo)
