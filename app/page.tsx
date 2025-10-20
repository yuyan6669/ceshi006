import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:px-8 sm:py-24">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <Image
                  src="/toux06.jpeg"
                  alt="煜炎的头像"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            煜炎
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            10年+技术开发经验，专注于大型互联网产品研发与技术。
            <br />
            大厂技术负责人 | AI技术教学 | 《DeepSeek极简入门与应用》作者
          </p>
        </header>

        {/* Skills Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">💡</span>
            我的技能
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              • 精通 React、Vue、TypeScript 等现代化技术栈，有大型应用架构设计经验
            </p>
            <p className="leading-relaxed">
              • 深入研究 AI 与技术融合，专注 D2C、Copilot 等前沿技术
            </p>
            <p className="leading-relaxed">
              • 丰富的技术团队管理经验，善于规划技术方向和推动团队创新
            </p>
          </div>
        </section>

        {/* Works Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🚀</span>
            我的作品
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                MCP Hub 中国
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                精选优质 MCP 服务的综合平台，包含 Web 应用、CLI 工具和 MCP 服务器，支持 Cursor 一键安装，为 AI 开发者提供便捷服务
              </p>
              <a
                href="https://XXX/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                访问项目 →
              </a>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                字流
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                AI 驱动的多平台内容发布工具。一次创作，智能适配公众号、知乎、掘金、知识星球、视频号、抖音、B站、小红书等平台格式
              </p>
              <a
                href="https://XXX.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                访问项目 →
              </a>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🏆</span>
            我的成就
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start">
              <span className="text-xl mr-2">✨</span>
              <span>逆向分析 Copilot (Github 已获得上千 star)</span>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-2">🎤</span>
              <span>GMTC 全球大技术大会演讲嘉宾</span>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-2">📚</span>
              <span>《DeepSeek极简入门与应用》畅销书作者</span>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-2">💬</span>
              <span>知乎技术话题高赞回答者</span>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-2">⭐</span>
              <span>Trae 官方认证 Expert</span>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-2">🎯</span>
              <span>CSDN AI编程大赛官方特邀评委</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-6">联系我</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-all">
              <p className="font-semibold mb-1">公众号</p>
              <p className="text-lg">XXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-all">
              <p className="font-semibold mb-1">微信</p>
              <p className="text-lg">XXX3</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 煜炎. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
