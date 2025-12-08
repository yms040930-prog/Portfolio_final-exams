export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        {children}
      </div>
    </section>
  )
}
