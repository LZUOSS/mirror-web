## 用途

Arch Linux CN 软件包和相关系统文件。

## 配置方法

在 `/etc/pacman.conf` 末尾添加 Arch Linux CN 仓库段：

```{ztmpl lang="ini"}
[archlinuxcn]
Server = {{endpoint}}/$arch
```

首次添加后安装签名密钥包：

```{ztmpl lang="bash"}
{{sudo}}pacman -Sy archlinuxcn-keyring
```

随后完成系统更新：

```{ztmpl lang="bash"}
{{sudo}}pacman -Syu
```

## 相关文档

[MirrorZ Arch Linux CN 帮助](https://help.mirrors.cernet.edu.cn/archlinuxcn/)
