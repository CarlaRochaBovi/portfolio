import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { PiLock, PiArrowUpRight } from "react-icons/pi";
import {
  SiDocker,
  SiFastify,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface ProjectProps {
  name: string;
  description: string;
  imgSource: string;
  imgAlt: string;
  technologies: Array<string>;
  link: string;
}

interface MainStackProps {
  name: string;
  icon: IconType;
  color: string;
}

interface StackProps {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}
interface CategoryProps {
  title: string;
  stacks: StackProps[];
}

export default function Home() {
  const mainStacks: MainStackProps[] = [
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Typescript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#5FA04E",
    },
  ];

  const categories: CategoryProps[] = [
    {
      title: "Frontend",
      stacks: [
        {
          name: "React.js",
          icon: SiReact,
          color: "#61DAFB",
          description:
            "Interfaces dinâmicas e componentizadas com foco em reutilização.",
        },
        {
          name: "Typescript",
          icon: SiTypescript,
          color: "#3178C6",
          description: "Tipagem estática para código mais seguro e escalável.",
        },
        {
          name: "TailwindCSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
          description:
            "Estilização ágil com consistência visual e design system.",
        },
      ],
    },
    {
      title: "Backend & Dados",
      stacks: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#5FA04E",
          description: "Explorando criação de APIs REST e integrações.",
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#336791",
          description:
            "Estudando modelagem relacional e persistência de dados.",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "#288B8F",
          description:
            "Camada de banco de dados type-safe com schema declarativo e migrations automatizadas.",
        },
        {
          name: "Fastify",
          icon: SiFastify,
          color: "#C799FF",
          description:
            "Framework para APIs com foco em performance, validação integrada e arquitetura baseada em plugins.",
        },
      ],
    },
    {
      title: "Ferramentas",
      stacks: [
        {
          name: "Git & GitHub",
          icon: SiGit,
          color: "#F05032",
          description: "Versionamento e fluxos de trabalho colaborativos.",
        },
        {
          name: "Docker",
          icon: SiDocker,
          color: "#2496ED",
          description:
            "Ambientes isolados via containers, garantindo consistência do desenvolvimento à produção.",
        },
      ],
    },
    {
      title: "Fluxo & Boas Práticas",
      stacks: [
        {
          name: "Validação & Segurança",
          icon: PiLock,
          color: "#C799FF",
          description:
            "Schema validation com Zod e tipagem consistente do frontend ao banco, evitando erros em runtime.",
        },
      ],
    },
  ];

  const projects: ProjectProps[] = [
    {
      name: "Project Flow",
      description:
        "Organize, Manage, and Track Your Projects Efficiently. ProjectFlow is a web application designed to streamline project organization and financial tracking. Keep your project items, budgets, and expenses neatly organized in one place. No more chaos - just clear, manageable project oversight.",
      imgSource:
        "https://github.com/CarlaRochaBovi/project-flow/blob/main/assets/website-screenshot-2.png?raw=true",
      imgAlt: "Project Screenshot",
      technologies: ["REACT.JS", "TAILWINDCSS", "TYPESCRIPT", "POSTGRESQL"],
      link: "https://github.com/CarlaRochaBovi/project-flow",
    },
  ];

  const tagColors = [
    "text-[#C799FF] bg-[#C799FF]/20 border-[#C799FF]/20",
    "text-[#55FE7E] bg-[#55FE7E]/20 border-[#55FE7E]/20",
    "text-[#FFCB97] bg-[#FFCB97]/20 border-[#FFCB97]/20",
  ] as const;
  // further note above

  return (
    <div className="flex flex-col h-full">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-end gap-8 lg:gap-10 flex-1 pb-14"
      >
        <div className="flex flex-col gap-10">
          <div className="max-w-160 w-full flex flex-col gap-8">
            <div className="w-fit px-5 py-2 bg-[#1F1F26] border-l-4 text-[#C799FF] ">
              <p className="tracking-widest text-sm lg:text-base font-bold uppercase">
                FULLSTACK WEB DEVELOPER
              </p>
              {/* decide between the sentence above or to WEB DEVELOPER */}
            </div>
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
            <Button variant="primary">Ver Projetos</Button>

            <Button variant="inverted_white">Baixar Currículo</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-left">
          <h5 className="text-xl font-semibold">Stacks Principais</h5>
          <div className="flex flex-wrap gap-8">
            {mainStacks.map((stack: MainStackProps, index) => (
              <Card key={index} size="small">
                <stack.icon className="size-8" fill={stack.color} />
                <span className=" text-[#E6E3FA] font-semibold">
                  {stack.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stacks" className="flex flex-col w-full gap-10 pt-30 pb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#E6E3FA]">
            TECNOLOGIAS
          </h2>
          <p className="max-w-2xl text-[#ABA9BE]">
            Ferramentas que utilizo para entregar soluções completas — do código
            à experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category: CategoryProps, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[#C799FF]">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.stacks.map((stack: StackProps) => (
                  <Card key={stack.name} size="large">
                    <stack.icon className="size-8" fill={stack.color} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#E6E3FA]">
                        {stack.name}
                      </h4>
                      <p className="text-[#ABA9BE] text-sm mt-1">
                        {stack.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="flex flex-col w-full gap-10 pt-30 pb-10"
      >
        <h2 className=" text-4xl lg:text-5xl font-bold text-[#E6E3FA]">
          PROJETOS
        </h2>

        {projects.map((project: ProjectProps, index) => (
          <div
            key={index}
            className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-14"
          >
            <div className="flex flex-col max-w-3xl w-full rounded-xs overflow-hidden">
              <div className="group relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  fill
                  src={project.imgSource}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={project.imgAlt}
                  className="object-cover object-top z-0 transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex w-full flex-col px-8 py-6 bg-[#48474D]/20 gap-4">
                <h3 className="text-3xl text-[#E6E3FA] font-semibold uppercase">
                  {project.name}
                </h3>
                <p>{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index) => {
                    const style = tagColors[index % tagColors.length];
                    return (
                      <div key={index}>
                        <p
                          className={`px-3 py-1.5 rounded-xs text-xs border ${style}`}
                        >
                          {tech}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <Link
                  target="_blank"
                  href={project.link}
                  className="max-w-fit items-center gap-0.5 flex self-end uppercase text-lg text-[#C799FF] scale-100 hover:scale-110 hover:-translate-y-1 transition duration-100"
                >
                  SOURCE
                  <PiArrowUpRight size={24} className="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
