## 用途

TeX、LaTeX 宏包和 TeX Live 安装文件。

## 配置方法

用 TeX Live 安装程序安装的 TeX Live 可以通过 `tlmgr` 切换在线仓库：

```{ztmpl lang="bash"}
tlmgr option repository {{endpoint}}/systems/texlive/tlnet
tlmgr update --self --all
```

`tlnet` 随当前年度 TeX Live 更新。旧年度安装需要对应年份的冻结仓库，跨年度升级使用新的 TeX Live 安装程序。

通过 Linux 发行版软件源安装的 TeX Live，随系统软件包更新。

## 安装文件

在线安装器和镜像文件位于 `systems/texlive/`。宏包源码按 CTAN 的分类目录组织。

## 相关文档

[TeX Live tlmgr](https://www.tug.org/texlive/tlmgr.html)
