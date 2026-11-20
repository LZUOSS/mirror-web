<h2>GCHP</h2>

<pre><code>git clone --recurse-submodules https://mirrors.lzu.edu.cn/scientific/geos-chem-gchp/geos-chem-gchp.git</code></pre><p>克隆时初始化子模块。需要历史版本时，先用 git tag -l 查看标签，切换标签后执行 git submodule update --init --recursive 以取得该版本锁定的依赖。</p><p>子模块从项目指定的上游仓库下载。编译环境、依赖和运行数据的获取方式见官方文档。</p><ul><li><a href="https://gchp.readthedocs.io/en/stable/getting-started/quick-start.html">GCHP 官方快速开始</a></li><li><a href="https://github.com/geoschem/GCHP/releases">上游版本说明</a></li></ul>
