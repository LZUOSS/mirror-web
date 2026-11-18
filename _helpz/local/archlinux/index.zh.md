## 用途

Arch Linux 软件包和相关系统文件。

## 配置方法

编辑 `/etc/pacman.d/mirrorlist`，将本站条目放在其他镜像之前：

```{ztmpl lang="ini"}
Server = {{endpoint}}/$repo/os/$arch
```

同步数据库并完成系统更新：

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

安装介质位于 `iso/`，软件源主要用于 x86_64。

Arch Linux 采用滚动更新，软件包数据库与已安装软件包一起更新。

## 相关文档

[MirrorZ Arch Linux 帮助](https://help.mirrors.cernet.edu.cn/archlinux/)
