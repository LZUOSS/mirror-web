## 用途

Arch Linux ARM 软件包和相关系统文件。

## 配置方法

编辑 `/etc/pacman.d/mirrorlist`，将本站条目放在其他镜像之前：

```{ztmpl lang="ini"}
Server = {{endpoint}}/$arch/$repo
```

同步数据库并完成系统更新：

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

根据目标设备选择 aarch64 或 armv7h，系统归档位于 `os/`。

## 相关文档

[MirrorZ Arch Linux ARM 帮助](https://help.mirrors.cernet.edu.cn/archlinuxarm/)
