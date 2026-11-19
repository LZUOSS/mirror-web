## 用途

Arch Linux RISC-V 软件包和相关系统文件。

## 配置方法

编辑 `/etc/pacman.d/mirrorlist`，将本站条目放在其他镜像之前：

```{ztmpl lang="ini"}
Server = {{endpoint}}/repo/$repo
```

同步数据库并完成系统更新：

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

RISC-V rootfs 压缩包和安装 ISO 位于 [`images/`](/archriscv/images/)。

## 相关文档

[Arch Linux RISC-V 项目](https://archriscv.felixc.at/) · [MirrorZ Arch Linux RISC-V 帮助](https://help.mirrors.cernet.edu.cn/archriscv/)
