## 用途

Python 软件包索引及发行文件。

## 临时使用

在已有 Python 环境中指定索引地址：

```{ztmpl lang="bash"}
python -m pip install --index-url {{endpoint}}/simple/ requests
```

## 长期配置

写入当前用户的 pip 配置：

```{ztmpl lang="bash"}
python -m pip config --user set global.index-url {{endpoint}}/simple/
```

查看当前配置：

```{ztmpl lang="bash"}
python -m pip config debug
```

只为当前虚拟环境设置索引时，将 `--user` 改为 `--site`。删除这项设置时，用相同作用域运行 `python -m pip config --user unset global.index-url` 或 `python -m pip config --site unset global.index-url`。

## 相关文档

[pip 配置文档](https://pip.pypa.io/en/stable/topics/configuration/)
