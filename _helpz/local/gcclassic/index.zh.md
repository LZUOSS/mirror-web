<h2>GCClassic</h2>

<pre><code>git clone --recurse-submodules https://mirrors.lzu.edu.cn/scientific/gcclassic/gcclassic.git</code></pre><p>克隆时初始化子模块。需要历史版本时，先用 git tag -l 查看标签，切换标签后执行 git submodule update --init --recursive 以取得该版本锁定的依赖。</p><p>子模块从项目指定的上游仓库下载。编译器、依赖和运行数据的获取方式见官方文档。</p><ul><li><a href="https://geos-chem.readthedocs.io/en/stable/gcclassic-user-guide/get-code-steps.html">官方源码与子模块说明</a></li><li><a href="https://github.com/geoschem/GCClassic/releases">上游版本说明</a></li></ul>
