## 用途

OpenWrt release 固件与软件包。

## 软件源配置

本站提供 `releases/`。先查看设备当前的 OpenWrt 版本和包管理器，保留现有源中的版本、target、subtarget 与架构后缀，只将 `https://downloads.openwrt.org` 替换为：

```{ztmpl lang="text"}
{{endpoint}}
```

### 使用 opkg 的系统

编辑 `/etc/opkg/distfeeds.conf`，替换地址后执行：

```{ztmpl lang="bash"}
opkg update
```

### 使用 apk 的系统

OpenWrt 25.12 起使用 apk。编辑 `/etc/apk/repositories.d/distfeeds.list`，替换地址后执行：

```{ztmpl lang="bash"}
apk update
```

## 固件下载

进入 `releases/<版本>/targets/`，按设备的 target/subtarget 选择固件。factory 用于相应原厂固件刷入场景，sysupgrade 用于已有 OpenWrt 系统升级。snapshot 使用原有官方源；本站此条目只配置 release 路径。

## 相关文档

[清华 OpenWrt 帮助](https://mirrors.tuna.tsinghua.edu.cn/help/openwrt/) · [OpenWrt 软件包文档](https://openwrt.org/docs/guide-user/additional-software/start)
