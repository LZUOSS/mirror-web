## 用途

Radxa 开发板的 DEB 软件包。

## 配置方法

编辑设备镜像自带的 Radxa 源配置，将原有镜像根地址替换为本站 `/radxa-deb/`。保留完整的板型、发行版目录、组件和签名设置。

目录中 `bookworm/`、`bullseye/`、`noble/` 以及 `rk3588-bookworm/` 等面向不同系统；`-test` 目录是测试分支。按设备当前的配置选择对应目录，再运行 `sudo apt update`。

## 相关文档

[Radxa 软件源文档](https://docs.radxa.com/)
