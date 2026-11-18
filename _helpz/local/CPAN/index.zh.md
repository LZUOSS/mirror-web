## 用途

Perl 模块及其源代码归档。

## 配置方法

运行 `cpan` 进入 CPAN Shell，设置下载地址并保存：

```{ztmpl lang="text"}
o conf urllist {{endpoint}}/
o conf pushy_https 0
o conf commit
quit
```

`pushy_https` 控制 CPAN 是否强制改用预设 HTTPS 站点。设为 0 后使用上面的本站 HTTPS 地址。

使用 cpanminus 时可单次指定镜像：

```{ztmpl lang="bash"}
cpanm --mirror {{endpoint}} --mirror-only App::cpanminus
```

## 相关文档

[CPAN](https://www.cpan.org/) · [MirrorZ CPAN 帮助](https://help.mirrors.cernet.edu.cn/CPAN/)
