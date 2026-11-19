## 用途

Homebrew 预编译软件包和 JSON API。

## 配置方法

在当前 shell 设置：

```{ztmpl lang="bash"}
export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"
export HOMEBREW_API_DOMAIN="{{endpoint}}/api"
brew update
```

长期使用时，将两条 `export` 写入当前 shell 的启动配置。第一条设置 bottle 下载地址，第二条设置 formula 和 cask 的 JSON 元数据地址。Homebrew 自身的 Git 仓库仍使用原有地址，cask 安装文件按各 cask 定义的地址下载。

运行 `brew config` 可查看当前设置。

## 相关文档

[Homebrew 环境变量](https://docs.brew.sh/Manpage#environment)
