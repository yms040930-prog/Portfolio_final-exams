import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <Hero>
      <h1 className="text-3xl mb-10 font-bold text-white text-center">
        환영합니다! 포트폴리오 홈입니다.
      </h1>

      <div className="space-y-6">
        <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <Link
            href="https://blog.naver.com/hello_world-777"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            Naver Blog
          </Link>
          <p className="mt-2 text-gray-800">
            프로젝트, 개발 경험, 일상 기록 등 다양한 내용을 공유하는 개인
            블로그입니다.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <Link
            href="https://github.com/yms040930-prog"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            GitHub
          </Link>
          <p className="mt-2 text-gray-800">
            소스코드와 프로젝트를 관리하며, 공개 저장소를 통해 다양한 개발
            경험을 확인할 수 있습니다.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <Link
            href="https://www.notion.so/41c31ae8e3d74650bc644647fdaac134"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            Notion
          </Link>
          <p className="mt-2 text-gray-800">
            프로젝트 계획, 학습 기록, 포트폴리오 문서 등 체계적으로 정리한 개인
            자료실입니다.
          </p>
        </div>
      </div>
    </Hero>
  )
}
