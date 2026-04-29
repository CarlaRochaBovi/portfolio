import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import {
  SiBiome,
  SiDocker,
  SiFastify,
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <section
        id="home"
        className="min-h-[calc(100vh-72px)] flex flex-col justify-center lg:justify-evenly flex-1 gap-18 lg:gap-8 py-12"
      >
        <div className="w-fit px-5 py-2 bg-[#1F1F26] border-l-4 text-[#C799FF] ">
          <p className="tracking-widest text-sm md:text-base font-bold uppercase">
            FULLSTACK WEB DEVELOPER
          </p>
          {/* decide between the sentence above or to WEB DEVELOPER */}
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="max-w-160 w-full flex flex-col gap-4">
            <h1 className="text-6xl lg:text-7xl leading-14 lg:leading-18 text-[#E6E3FA] tracking-tight uppercase font-bold">
              <span className="italic text-[#C799FF]">Código</span> que conecta,
              <span className="italic text-[#C799FF]"> design </span>
              que transforma
            </h1>

            <p className=" text-lg lg:text-xl">
              Cuidado do{" "}
              <span className="text-[#55FE7E] font-bold">código</span> à
              experiência do usuário. Desenvolvimento não é só fazer funcionar —
              é fazer <span className="text-[#55FE7E] font-bold">sentido</span>.
              E fazer sentido exige entender o{" "}
              <span className="text-[#55FE7E] font-bold">problema</span>, testar{" "}
              <span className="text-[#55FE7E] font-bold">soluções</span>,
              revisar,{" "}
              <span className="text-[#55FE7E] font-bold">melhorar</span>. É um{" "}
              <span className="text-[#55FE7E] font-bold">cliclo</span>, não uma
              linha de chegada.
            </p>
          </div>

          {/* add keyboard navigation later */}
          <div className="flex gap-10">
            <button
              type="button"
              className="px-6 py-3 rounded-xs text-lg text-[#131319] font-semibold bg-[#C799FF] hover:brightness-85 duration-150 transition cursor-pointer"
            >
              Ver Projetos
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xs text-lg text-[#E6E3FA] font-semibold border-2 border-[#E6E3FA] bg-[#131319] hover:bg-[#E6E3FA] hover:text-[#131319] hover:border-[#131319] duration-150 transition cursor-pointer"
            >
              Baixar Currículo
            </button>
          </div>
        </div>

        {/* change icon library later */}
        <div className="flex flex-col gap-4 items-left">
          <h5 className="text-xl font-semibold">Stacks Principais</h5>
          <div className="flex flex-wrap gap-8">
            <div className="px-6 py-4 flex items-center gap-4 bg-[#1F1F26] border rounded-xs border-[#474658]/40">
              <SiReact className="size-8" fill="#61DAFB" name="react" />
              <span className=" text-[#E6E3FA] font-semibold">React.JS</span>
            </div>

            <div className="px-6 py-4 flex items-center gap-4 bg-[#1F1F26]  border rounded-xs border-[#474658]/40">
              <SiTypescript
                className="size-8"
                fill="#3178C6"
                name="typescript"
              />
              <span className=" text-[#E6E3FA] font-semibold">Typescript</span>
            </div>

            <div className="px-6 py-4 flex items-center gap-4 bg-[#1F1F26]  border rounded-xs border-[#474658]/40">
              <SiTailwindcss
                className="size-8"
                fill="#06B6D4"
                name="tailwindcss"
              />
              <span className=" text-[#E6E3FA] font-semibold">Tailwind</span>
            </div>

            <div className="px-6 py-4 flex items-center gap-4 bg-[#1F1F26]  border rounded-xs border-[#474658]/40">
              <SiNodedotjs className="size-8" fill="#5FA04E" name="nodejs2" />
              <span className=" text-[#E6E3FA] font-semibold">Node.JS</span>
            </div>
          </div>
        </div>
      </section>

      <section id="stacks" className="flex flex-col w-full gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#E6E3FA]">
            TECNOLOGIAS
          </h2>
          <p className="max-w-2xl text-[#ABA9BE]">
            Ferramentas que utilizo para entregar soluções completas — do código
            à experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* FRONTEND */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#C799FF]">Frontend</h3>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiReact className="size-5 mt-0.5 text-[#61DAFB]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">React.js</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Interfaces dinâmicas e componentizadas com foco em
                    reutilização.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiTypescript className="size-5 mt-0.5 text-[#3178C6]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">TypeScript</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Tipagem estática para código mais seguro e escalável.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiTailwindcss className="size-5 mt-0.5 text-[#06B6D4]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Tailwind CSS</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Estilização ágil com consistência visual e design system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BACKEND & DADOS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#C799FF]">
              Backend & Dados
            </h3>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiNodedotjs className="size-5 mt-0.5 text-[#5FA04E]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Node.js</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Explorando criação de APIs REST e integrações.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiPostgresql className="size-5 mt-0.5 text-[#336791]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">PostgreSQL</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Estudando modelagem relacional e persistência de dados.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiPrisma className="size-5 mt-0.5 text-[#288B8F]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Prisma</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Camada de banco de dados type-safe com schema declarativo e
                    migrations automatizadas.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition">
                <SiFastify className="size-5 mt-0.5 text-[#C799FF]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Fastify</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Framework para APIs com foco em performance, validação
                    integrada e arquitetura baseada em plugins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FERRAMENTAS */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-xl font-semibold text-[#C799FF]">
              Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition min-w-70 flex-1">
                <SiGit className="size-5 mt-0.5 text-[#F05032]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Git & GitHub</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Versionamento e fluxos de trabalho colaborativos.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition min-w-70 flex-1">
                <SiDocker className="size-5 mt-0.5 text-[#2496ED]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Docker</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Ambientes isolados via containers, garantindo consistência
                    do desenvolvimento à produção.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs flex items-start gap-3 hover:border-[#C799FF]/50 transition min-w-70 flex-1">
                <SiBiome className="size-5 mt-0.5 text-[#60A5FA]" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#E6E3FA]">Biome</h4>
                  <p className="text-[#ABA9BE] text-sm mt-1">
                    Toolchain unificada que valida, formata e organiza imports
                    automaticamente, mantendo o código limpo e consistente sem
                    configurações complexas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10 pt-8 border-white/10">
          <h3 className="text-xl font-semibold text-[#C799FF] mb-4">
            Fluxo & Boas Práticas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#1F1F26] border border-[#474658]/40 rounded-xs">
              <h4 className="font-semibold text-[#E6E3FA] mb-1">
                Validação & Segurança
              </h4>
              <p className="text-[#ABA9BE] text-sm">
                Schema validation com Zod e tipagem consistente do frontend ao
                banco, evitando erros em runtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="flex flex-col w-full py-12 gap-10">
        <h2 className=" text-4xl lg:text-5xl font-bold text-[#E6E3FA]">
          PROJETOS
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-14">
          <div className="flex flex-col max-w-3xl w-full rounded-xs overflow-hidden">
            <div className="group relative w-full h-56 overflow-hidden">
              <Image
                fill
                src={
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                sizes="width: auto, height: auto"
                alt={"Random Code Picture"}
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col px-8 py-6 bg-[#48474D]/20 gap-4">
              <h3 className="text-3xl text-[#E6E3FA] font-semibold uppercase">
                Project Name
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                similique doloremque porro ullam suscipit molestiae atque ab?
                Neque quisquam, ex odio tempore doloribus vero modi fugit
                repudiandae placeat sint facere.
              </p>

              <div className="flex flex-wrap gap-3">
                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#C799FF] font-bold bg-[#C799FF]/20 border border-[#C799FF]/20">
                    REACT.JS
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#55FE7E] font-bold bg-[#55FE7E]/20 border border-[#55FE7E]/20">
                    TAILWINDCSS
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#FFCB97] font-bold bg-[#FFCB97]/20 border border-[#FFCB97]/20">
                    TYPESCRIPT
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#C799FF] font-bold bg-[#C799FF]/20 border border-[#C799FF]/20">
                    POSTGRESQL
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="max-w-fit items-center flex self-end uppercase text-lg hover:-translate-y-1 transition duration-150"
              >
                SOURCE
                <LuArrowUpRight size={24} className="" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col max-w-3xl w-full rounded-xs overflow-hidden">
            <div className="group relative w-full h-56 overflow-hidden">
              <Image
                fill
                src={
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                sizes="width: auto, height: auto"
                alt={"Random Code Picture"}
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col px-8 py-6 bg-[#48474D]/20 gap-4">
              <h3 className="text-3xl text-[#E6E3FA] font-semibold uppercase">
                Project Name
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                similique doloremque porro ullam suscipit molestiae atque ab?
                Neque quisquam, ex odio tempore doloribus vero modi fugit
                repudiandae placeat sint facere.
              </p>

              <div className="flex flex-wrap gap-3">
                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#C799FF] font-bold bg-[#C799FF]/20 border border-[#C799FF]/20">
                    REACT.JS
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#55FE7E] font-bold bg-[#55FE7E]/20 border border-[#55FE7E]/20">
                    TAILWINDCSS
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#FFCB97] font-bold bg-[#FFCB97]/20 border border-[#FFCB97]/20">
                    TYPESCRIPT
                  </p>
                </div>

                <div>
                  <p className="px-3 py-1.5 rounded-xs text-xs text-[#C799FF] font-bold bg-[#C799FF]/20 border border-[#C799FF]/20">
                    POSTGRESQL
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="max-w-fit items-center flex self-end uppercase text-lg hover:-translate-y-1 transition duration-150"
              >
                SOURCE
                <LuArrowUpRight size={24} className="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
