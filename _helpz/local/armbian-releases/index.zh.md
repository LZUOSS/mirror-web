## 用途

Armbian 面向 ARM / 嵌入式单板机的系统安装镜像。

## 下载方法

按板型识别码进入对应目录（如 `rock-5b/`、`orangepi-5/`），在 `archive/` 下选择版本与桌面环境。镜像为 `.img.xz` 压缩文件，先认准板型与日期，再核对同目录的 `SHA256SUMS` 校验文件后刷写。

镜像用于刷入 SD 卡 / eMMC。系统启动并联网后，软件包请配置 Armbian 软件仓库（见 [Armbian](../../armbian/)），不要在本目录直接使用 apt。

## 相关文档

[Armbian 下载说明](https://www.armbian.com/download/) · [Armbian 文档](https://docs.armbian.com/)