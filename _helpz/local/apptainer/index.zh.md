<h2>Apptainer</h2>

<p>Debian 选择适合系统版本和架构的 .deb，下载后可用 apt install ./文件名.deb 安装。RHEL 系选择匹配系统及架构的 .rpm，可用 dnf install ./文件名.rpm 安装。仅在需要 setuid 安装时遵循官方手册选择相应的 suid 包。</p><p>这里提供文件下载。安装器所需的系统依赖仍从发行版的软件源取得。无管理员权限时，按官方现场安装文档检查用户命名空间与依赖。安装后用 apptainer --version 检查。</p><ul><li><a href="/hpc/apptainer/">本站版本下载</a></li><li><a href="https://apptainer.org/docs/admin/latest/installation.html">Apptainer 官方安装和无特权安装文档</a></li></ul><p>当前核定范围包括 451 个工件、38 个版本。版本示例为 v1.0.0, v1.0.1, v1.0.2, v1.0.3。</p>
