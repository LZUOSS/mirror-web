## 用途

Alpine 稳定版、edge 软件源和安装镜像。

## 配置方法

编辑 `/etc/apk/repositories`，将 `https://dl-cdn.alpinelinux.org/alpine` 替换为本站地址，保留每行的版本和仓库名：

```{ztmpl lang="text"}
{{endpoint}}
```

例如原来的 `v3.x/main` 与 `v3.x/community` 后缀保持一致。稳定版使用同一版本分支，`edge` 用于滚动开发分支。更新索引：

```{ztmpl lang="bash"}
{{sudo}}apk update
```

安装镜像位于各版本的 `releases/` 子目录，按设备架构选择。

## 相关文档

[Alpine repositories](https://wiki.alpinelinux.org/wiki/Repositories)
