import Image from 'next/image';

const skills = [
  'Computer Technology',
  'Artificial Intelligence',
  'Research Foundations',
  'Product Thinking',
  'Freelance Collaboration',
  'Technical Leadership',
];

const highlights = [
  {
    label: 'Education',
    title: 'BCA Research Student',
    detail: 'Central University of Kerala, batch 2026-2030.',
  },
  {
    label: 'Leadership',
    title: 'Chief Technology Officer',
    detail: 'Freelance working CTO at Contios.',
  },
  {
    label: 'Focus',
    title: 'Technology and AI',
    detail: 'Building foundations across computing, research, and applied AI.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#151515]">
      <section className="relative overflow-hidden border-b border-black/10 bg-[#efe7d7]">
        <div className="mx-auto grid min-h-[92vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
          <div className="order-2 max-w-3xl lg:order-1">
            <p className="mb-5 inline-flex border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#4b3f2d]">
              Kerala, India
            </p>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-normal text-[#111] sm:text-7xl lg:text-8xl">
              Abhishek Meena
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#352f28] sm:text-2xl">
              BCA research student at Central University of Kerala and Chief
              Technology Officer at Contios, exploring computer technology,
              artificial intelligence, and practical freelance work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-[#111] px-5 text-sm font-semibold text-white transition hover:bg-[#2c6d6a]"
                href="mailto:m.abhishek1913@gmail.com"
              >
                Email Me
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-black/20 px-5 text-sm font-semibold transition hover:border-[#2c6d6a] hover:text-[#2c6d6a]"
                href="https://www.linkedin.com/in/abhishek-meena-450ba5427/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-black/20 px-5 text-sm font-semibold transition hover:border-[#2c6d6a] hover:text-[#2c6d6a]"
                href="https://github.com/kyroxstudios-AM"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden border border-black/15 bg-[#d2e6db] shadow-[18px_18px_0_#2c6d6a]">
              <Image
                alt="Portrait of Abhishek Meena"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                src="/abhishek-meena.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c6d6a]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              Student, researcher, and technology builder.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#3b3b3b]">
            <p>
              I am a BCA student at Central University of Kerala, batch
              2026-2030, with a research-oriented interest in computer
              technology and artificial intelligence.
            </p>
            <p>
              Alongside my studies, I work freelance as Chief Technology
              Officer at Contios, where I focus on turning technical ideas into
              practical digital products and systems.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#151515] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
          {highlights.map((item) => (
            <article
              className="border border-white/15 bg-white/[0.04] p-6"
              key={item.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9bd6c5]">
                {item.label}
              </p>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/72">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f3eb]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c6d6a]">
              Skills and Interests
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              Building a strong foundation for applied technology.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  className="border border-black/15 bg-white px-4 py-2 text-sm font-medium text-[#252525]"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <article className="overflow-hidden border border-black/15 bg-white">
            <div className="relative aspect-square w-full bg-[#f68db5]">
              <Image
                alt="IBM SkillsBuild AI Fundamentals certificate graphic"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                src="/ai-fundamentals.png"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a0a3e]">
                Certification
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                AI Fundamentals: Foundations for Understanding AI
              </h3>
              <p className="mt-3 leading-7 text-[#555]">
                IBM SkillsBuild learning that supports my interest in artificial
                intelligence and modern computing.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c6d6a]">
              Current Path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
              Learning, researching, and shipping.
            </h2>
          </div>
          <div className="space-y-4">
            <article className="border-l-4 border-[#2c6d6a] bg-[#f7f3eb] p-6">
              <p className="text-sm font-semibold text-[#2c6d6a]">2026-2030</p>
              <h3 className="mt-2 text-2xl font-semibold">
                BCA, Central University of Kerala
              </h3>
              <p className="mt-3 leading-7 text-[#555]">
                Developing a research-focused academic base in computing and AI.
              </p>
            </article>
            <article className="border-l-4 border-[#111] bg-[#f7f3eb] p-6">
              <p className="text-sm font-semibold text-[#2c6d6a]">Current</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Chief Technology Officer, Contios
              </h3>
              <p className="mt-3 leading-7 text-[#555]">
                Freelance technology leadership across product direction,
                systems thinking, and implementation planning.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="bg-[#2c6d6a] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold">Let&apos;s connect.</h2>
            <p className="mt-2 text-white/75">
              Student and freelance CTO open to technology and AI opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center bg-white px-4 text-sm font-semibold text-[#1e514f]"
              href="mailto:m.abhishek1913@gmail.com"
            >
              m.abhishek1913@gmail.com
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center border border-white/30 px-4 text-sm font-semibold"
              href="https://github.com/kyroxstudios-AM"
              rel="noreferrer"
              target="_blank"
            >
              kyroxstudios-AM
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
