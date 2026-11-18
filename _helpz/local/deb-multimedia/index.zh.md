## 用途

Debian 的第三方多媒体软件包。

## 配置方法

先按项目说明安装 `deb-multimedia-keyring`，再编辑原有 Deb Multimedia 源文件。只将仓库地址换为：

```{ztmpl lang="text"}
{{endpoint}}
```

保留与本机 Debian 对应的发行版代号、组件及签名密钥。此仓库的软件包会参与 APT 版本选择，添加后运行：

```{ztmpl lang="bash"}
{{sudo}}apt update
apt-cache policy ffmpeg
```

## 相关文档

[Deb Multimedia 使用说明](https://www.deb-multimedia.org/) · [MirrorZ 帮助](https://help.mirrors.cernet.edu.cn/deb-multimedia/)
