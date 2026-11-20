<h2>SeisSol</h2>

<pre><code>git clone https://mirrors.lzu.edu.cn/scientific/seissol/seissol.git SeisSol
git -C SeisSol remote set-url origin https://github.com/SeisSol/SeisSol.git
git -C SeisSol submodule update --init --recursive</code></pre><p>先从本站完整克隆，再将 origin 指向 SeisSol 上游。子模块地址相对于官方 GitHub 仓库，初始化时会从上游获取该版本对应的依赖。</p><p>需要历史版本时，可以先切换到所需标签，再执行子模块更新。</p><ul><li><a href="https://github.com/SeisSol/SeisSol">官方源码和构建步骤</a></li><li><a href="https://github.com/SeisSol/SeisSol/releases">官方版本说明</a></li></ul>
