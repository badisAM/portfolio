import BootSequence from "@/components/BootSequence";
import TypingText from "@/components/TypingText";
import ProjectsDeck from "@/components/ProjectsDeck";
import TerminalWindow from "@/components/TerminalWindow";
import SkillTree from "@/components/SkillTree";
import GitLog from "@/components/GitLog";
import Badges from "@/components/Badges";
import ContributionGraph from "@/components/ContributionGraph";
import ContactForm from "@/components/ContactForm";
import ModelViewer from "@/components/ModelViewer";
import SectionRail from "@/components/SectionRail";
import Reveal from "@/components/Reveal";
import { companies } from "@/data/projects";

function Head({ cmd, title }: { cmd: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="mb-2 font-mono text-[13px] text-accent">$ {cmd}</div>
      <h2 className="font-display text-[28px] font-bold md:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SectionRail />

      {/* HERO */}
      <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="glow absolute -right-40 top-0 h-[620px] w-[620px]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-[1fr_1fr]">
          <div>
            <BootSequence />
            <div className="mt-7 mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[11.5px] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              open-to-work · PFE janvier 2027
            </div>
            <h1 className="font-display text-[44px] font-bold leading-[1.05] md:text-[68px]">
              Ammar
              <br />
              <span className="text-text-sec">Bedis</span>
            </h1>
            <p className="mt-4 font-mono text-base text-accent-2 md:text-lg">
              <TypingText words={["Data Scientist", "AI Engineer", "Full-Stack Dev", "MLOps"]} />
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-sec">
              Étudiant ingénieur en Data Science &amp; AI à ESPRIT. Je transforme des
              workflows lents en systèmes automatisés, avec des résultats mesurables.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] font-semibold text-[#062012] transition-opacity hover:opacity-90">
                view --repos
              </a>
              <a href="#contact" className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent">
                ./connect.sh
              </a>
            </div>
          </div>
          <div className="relative -mx-6 md:mx-0">
            <ModelViewer url="/models/man.glb" className="h-[420px] w-full md:h-[540px]" speed={0.3} />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="about" className="border-t border-line-soft bg-bg-alt py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><Head cmd="ls -la ~/skills/ | tree" title="Stack & compétences" /></Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <TerminalWindow title="ammar@esprit: ~/skills — 90x24">
                <SkillTree />
              </TerminalWindow>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-line bg-card p-6">
                  <div className="mb-4 font-mono text-[12px] text-text-sec">
                    $ git log --stat contributions
                  </div>
                  <ContributionGraph username="badisAM" />
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-card to-bg p-4 transition-colors hover:border-accent/40">
                  {/* halo diffus + quadrillage discret derrière le modèle */}
                  <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(60% 55% at 50% 45%, rgba(74,222,128,.16), rgba(56,189,248,.07) 45%, transparent 75%)",
                    }}
                  />
                  {/* liseré lumineux en haut */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

                  <div className="relative">
                    <ModelViewer
                      url="/models/employee.glb"
                      className="h-[320px] w-full"
                      speed={0.3}
                    />
                  </div>
                  <p className="relative mt-1 text-center font-mono text-[10.5px] text-text-sec">
                    <a
                      href="https://poly.pizza/m/3w4Bgw7Phn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      Man
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://poly.pizza/u/Polygonal%20Mind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      Polygonal Mind
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative overflow-hidden py-28">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal><Head cmd="gh repo list --topic ai" title="Repository Board" /></Reveal>
          <Reveal delay={0.1}><ProjectsDeck /></Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="journey" className="relative overflow-hidden border-t border-line-soft bg-bg-alt py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><Head cmd="git log --oneline --graph career" title="Experience Timeline" /></Reveal>
          <Reveal>
            <TerminalWindow title="ammar@esprit: ~/career — 90x24">
              <GitLog />
            </TerminalWindow>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {companies.map((c) => (
                <div key={c.name} className="flex flex-col gap-3 rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent/40">
                  {c.logo ? (
                    <div
                      className={`relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg ${
                        c.plate ? "bg-white p-3" : "p-2"
                      }`}
                    >
                      {!c.plate && (
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 50%, rgba(255,255,255,.07), transparent 70%)",
                          }}
                        />
                      )}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.logo} alt={c.name} className="relative max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <div className="flex h-20 w-full items-center justify-center rounded-lg bg-white/[0.06] font-display text-xl font-bold text-text-sec">
                      {c.name}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-semibold leading-snug">{c.name}</div>
                    <div className="mt-1 text-[11.5px] text-text-sec">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BADGES */}
      <section id="badges" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><Head cmd="open ~/certifications" title="Badges & Credentials" /></Reveal>
          <Reveal delay={0.1}><Badges /></Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-line-soft bg-bg-alt py-28">
        <div className="glow absolute -left-40 bottom-0 h-[520px] w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal><Head cmd="./connect.sh" title="On en discute ?" /></Reveal>
          <Reveal delay={0.1}>
            <TerminalWindow title="ammar@esprit: ~ — contact.sh">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="font-mono text-[13px] leading-[1.9]">
                  <div className="text-text-sec">$ chmod +x connect.sh</div>
                  <div className="mt-2 text-accent">✓ email: <a href="mailto:ammarbedis@gmail.com" className="underline-offset-4 hover:underline">ammarbedis@gmail.com</a></div>
                  <div className="text-accent">✓ phone: +216 53 509 869</div>
                  <div className="text-accent">✓ github: <a href="https://github.com/badisAM" target="_blank" className="underline-offset-4 hover:underline">/badisAM</a></div>
                  <div className="text-accent">✓ linkedin: <a href="https://linkedin.com/in/bedis-ammar" target="_blank" className="underline-offset-4 hover:underline">/bedis-ammar</a></div>
                  <div className="mt-2 text-text-sec">→ status: <span className="text-amber">open-to-work, PFE Jan 2027</span></div>
                </div>
                <ContactForm />
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </section>
    </>
  );
}