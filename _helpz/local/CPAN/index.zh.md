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

`pushy_https` 设为 `0` 后，CPAN 按 `urllist` 访问本站。在 CPAN Shell 中运行 `o conf urllist` 可以查看设置。

使用 cpanminus 时可单次指定镜像：

```{ztmpl lang="bash"}
cpanm --from {{endpoint}}/ JSON::MaybeXS
```

## 相关文档

[CPAN Shell 文档](https://perldoc.perl.org/CPAN) · [cpanm 命令文档](https://metacpan.org/pod/cpanm)
