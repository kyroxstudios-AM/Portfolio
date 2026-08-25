import Image from 'next/image';

const navItems = ['About', 'Focus', 'Credential', 'Contact'];

const focusAreas = [
  'Computer Technology',
  'Artificial Intelligence',
  'Research Foundations',
  'Product Strategy',
  'Technical Leadership',
  'Freelance Delivery',
];

const highlights = [
  ['2026-2030', 'BCA research student at Central University of Kerala'],
  ['Current', 'Chief Technology Officer at Contios'],
  ['Kerala', 'Studying, researching, and building practical technology'],
];

const timeline = [
  {
    title: 'Central University of Kerala',
    meta: 'BCA batch 2026-2030',
    text: 'Building an academic foundation in computing with a research-led interest in artificial intelligence.',
  },
  {
    title: 'Contios',
    meta: 'Chief Technology Officer',
    text: 'Freelance technology leadership across product thinking, systems direction, and practical implementation.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-[#111111]">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/15 bg-[#121212]/82 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a className="text-sm font-semibold" href="#top">
            Abhishek Meena
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/72 md:flex">
            {navItems.map((item) => (
              <a className="transition hover:text-white" href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <a
            className="inline-flex min-h-10 items-center justify-center bg-[#f4c542] px-4 text-sm font-semibold text-[#17120a] transition hover:bg-white"
            href="mailto:m.abhishek1913@gmail.com"
          >
            Email
          </a>
        </nav>
      </header>

      <section
        className="relative isolate min-h-screen bg-[#121212] pt-16 text-white"
        id="top"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            alt="Abhishek Meena portrait background"
            className="h-full w-full object-cover opacity-30"
            fill
            priority
            sizes="100vw"
            src="/abhishek-meena.jpeg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#121212_0%,rgba(18,18,18,0.92)_35%,rgba(18,18,18,0.3)_100%)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-end gap-10 px-5 pb-8 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="pb-8 lg:pb-14">
            <p className="inline-flex border border-white/20 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4c542]">
              Kerala, India
            </p>
            <h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-normal sm:text-8xl lg:text-9xl">
              Abhishek Meena
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/78 sm:text-2xl">
              BCA research student at Central University of Kerala and Chief
              Technology Officer at Contios, focused on computer technology,
              artificial intelligence, and practical digital products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-[#111] transition hover:bg-[#f4c542]"
                href="https://www.linkedin.com/in/abhishek-meena-450ba5427/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                href="https://github.com/kyroxstudios-AM"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                href="mailto:m.abhishek1913@gmail.com"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative ml-auto hidden w-full max-w-[500px] lg:block">
            <div className="absolute -left-7 top-7 h-full w-full border border-[#f4c542]" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/20 bg-[#243b38]">
              <Image
                alt="Portrait of Abhishek Meena"
                className="object-cover"
                fill
                priority
                sizes="40vw"
                src="/abhishek-meena.jpeg"
              />
            </div>
          </div>
        </div>

        <div className="border-y border-white/10 bg-white/[0.06]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
            {highlights.map(([label, text]) => (
              <div className="py-5 md:px-6 md:first:pl-0" key={label}>
                <p className="text-sm font-semibold text-[#f4c542]">{label}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="about">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
              About
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Research-minded student. Practical technology builder.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#454545]">
            <p>
              I am a BCA student at Central University of Kerala, batch
              2026-2030, developing a strong base in computer science with a
              research-oriented interest in artificial intelligence.
            </p>
            <p>
              I also work freelance as Chief Technology Officer at Contios,
              where I help shape technical direction and turn ideas into
              structured, usable digital systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6f4]" id="focus">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                Focus
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                Building foundations for AI-era products.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  className="border border-[#b7d8d2] bg-white px-5 py-5 text-lg font-semibold text-[#183532]"
                  key={area}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] text-white" id="credential">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-24">
          <article className="overflow-hidden border border-white/14 bg-white/[0.04]">
            <div className="relative aspect-square w-full bg-[#f68db5]">
              <Image
                alt="IBM SkillsBuild AI Fundamentals certificate graphic"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                src="/ai-fundamentals.png"
              />
            </div>
          </article>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542]">
              Credential
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              AI Fundamentals: Foundations for Understanding AI
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              IBM SkillsBuild learning that supports my interest in artificial
              intelligence, modern computing, and practical technology
              leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
              Path
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Learning, leading, and shipping.
            </h2>
          </div>
          <div className="space-y-5">
            {timeline.map((item) => (
              <article
                className="grid gap-4 border-l-4 border-[#0f766e] bg-[#f5f0e7] p-6 sm:grid-cols-[0.35fr_0.65fr]"
                key={item.title}
              >
                <div>
                  <p className="text-sm font-semibold text-[#0f766e]">
                    {item.meta}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="leading-7 text-[#555]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0f766e] text-white" id="contact">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542]">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 text-white/76">
              Student and freelance CTO open to technology, AI, and product
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              className="inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-[#0f4f4a]"
              href="mailto:m.abhishek1913@gmail.com"
            >
              Email Me
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-white/35 px-5 text-sm font-semibold"
              href="https://github.com/kyroxstudios-AM"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
