## 用途

GNU ELPA、NonGNU ELPA 与 MELPA 扩展包。

## 配置方法

在 Emacs 配置中设置需要的归档：

```{ztmpl lang="lisp"}
(setq package-archives
      '(("gnu" . "{{endpoint}}/gnu/")
        ("nongnu" . "{{endpoint}}/nongnu/")
        ("melpa" . "{{endpoint}}/melpa/")))
```

执行 `M-x package-refresh-contents` 刷新列表，再通过 `M-x package-install` 安装包。`stable-melpa/` 提供按发布标签整理的 MELPA 包，可作为 `melpa/` 的另一种选择。

## 相关文档

[Emacs 包管理](https://www.gnu.org/software/emacs/manual/html_node/emacs/Package-Installation.html)
