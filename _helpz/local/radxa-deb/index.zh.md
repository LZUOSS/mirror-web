## 用途

Radxa 开发板的 DEB 软件包。

## 配置方法

编辑设备镜像自带的 Radxa 源配置。先从现有 `deb` 行或 `Suites` 字段确认套件名，再选择本站含有 `dists/套件名/InRelease` 的子目录作为仓库地址。

例如，套件 `bookworm` 和 `rk3588-bookworm` 分别使用以下地址。

```{ztmpl lang="text"}
{{endpoint}}/bookworm
{{endpoint}}/rk3588-bookworm
```

保留原条目的套件、组件和签名设置，再运行 `sudo apt update`。`-test` 目录对应测试套件。

## 相关文档

[Radxa 软件源文档](https://docs.radxa.com/en/orion/o6/system-use/apt)
