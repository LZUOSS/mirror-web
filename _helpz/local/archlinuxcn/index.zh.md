## 用途

Arch Linux CN 软件包和相关系统文件。

## 配置方法

首次启用前先更新系统。编辑 `/etc/pacman.conf`，已有 `[archlinuxcn]` 时替换该段的 `Server`，首次使用时添加下面的仓库段。

```{ztmpl lang="ini"}
[archlinuxcn]
Server = {{endpoint}}/$arch
```

首次添加后导入仓库的签名密钥并完成系统更新。

```{ztmpl lang="bash"}
{{sudo}}pacman -Sy archlinuxcn-keyring
{{sudo}}pacman -Syu
```

## 相关文档

[Arch Linux CN 仓库说明](https://github.com/archlinuxcn/repo) · [签名信任问题处理](https://www.archlinuxcn.org/archlinuxcn-keyring-manually-trust-farseerfc-key/)
