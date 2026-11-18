## 用途

Manjaro 稳定、测试和开发分支的软件包。

## 配置方法

编辑 `/etc/pacman.d/mirrorlist`。以 stable 分支为例：

```{ztmpl lang="ini"}
Server = {{endpoint}}/stable/$repo/$arch
```

使用 testing 或 unstable 的系统，将 `stable` 替换为本机已有分支。ARM 系统使用相应的 `arm-stable` 等分支，架构与软件包仓库名保留本机设置。

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

## 相关文档

[Manjaro 镜像源说明](https://wiki.manjaro.org/index.php/Pacman-mirrors)
