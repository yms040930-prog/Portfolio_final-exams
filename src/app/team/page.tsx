export default function TeamPage() {
  return (
    <main className="min-h-screen flex justify-center items-start pt-28 px-4 bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">팀 소개</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700">팀 이름</h2>
          <p className="text-gray-600 mt-1 text-xl font-bold">복학생조</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700">팀원</h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>김성용</li>
            <li>염민서</li>
            <li>정호준</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            프로젝트 링크
          </h2>
          <a
            href="https://jbu.seongyong.kim/"
            target="_blank"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-xl shadow hover:bg-teal-700 transition"
          >
            👉 프로젝트 바로가기
          </a>
        </section>
      </div>
    </main>
  )
}
