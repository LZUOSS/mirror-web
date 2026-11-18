## 用途

Python 软件包索引及发行文件。

## 临时使用

在已有 Python 环境中指定索引地址：

```{ztmpl lang="bash"}
python -m pip install --index-url {{endpoint}}/simple requests
```

## 长期配置

写入当前用户的 pip 配置：

```{ztmpl lang="bash"}
python -m pip config --user set global.index-url {{endpoint}}/simple
```

查看当前配置：

```{ztmpl lang="bash"}
python -m pip config debug
```

项目使用虚拟环境时，在虚拟环境中安装软件包。本站使用 HTTPS，保留 pip 的 TLS 证书校验。

## 相关文档

[pip 配置文档](https://pip.pypa.io/en/stable/topics/configuration/)
