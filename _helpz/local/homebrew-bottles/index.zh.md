## 用途

Homebrew 预编译软件包和 JSON API。

## 配置方法

在当前 shell 设置：

```{ztmpl lang="bash"}
export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"
export HOMEBREW_API_DOMAIN="{{endpoint}}/api"
brew update
```

长期使用时，将两条 `export` 写入当前 shell 的启动配置。Homebrew 的 Git 仓库地址和 Cask 的上游安装文件地址分别配置；上述变量控制 bottles 与 API。

运行 `brew config` 可查看当前设置。

## 相关文档

[Homebrew 环境变量](https://docs.brew.sh/Manpage#environment)
