## 用途

BlackArch Linux 软件包和相关系统文件。

## 配置方法

编辑 `/etc/pacman.d/blackarch-mirrorlist`，将本站条目放在其他镜像之前：

```{ztmpl lang="ini"}
Server = {{endpoint}}/$repo/os/$arch
```

同步数据库并完成系统更新：

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

软件源使用 BlackArch 官方配置的仓库名和签名密钥；安装介质位于 `iso/`。

## 相关文档

[MirrorZ BlackArch Linux 帮助](https://help.mirrors.cernet.edu.cn/blackarch/)
