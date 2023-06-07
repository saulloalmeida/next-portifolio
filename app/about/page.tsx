import { ArrowIcon } from "components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Desenvolvedor de Software Full Stack.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Sobre mim</h1>

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          Sou Desenvolvedor de Software Full Stack, buscando a primeira
          oportunidade na área. Atuo há mais de 10 anos na área financeira, no
          atendimento a clientes e na solução de problemas.
        </p>
        <hr />
        <p>
          Meus projetos e estudos estão focados em tecnologias como typescript,
          react, nextjs, prisma, tailwindCSS, node, html, css, javasript.
        </p>
        <p>
          Tenho graduação em Computação e pós graduado em Tecnologias de
          Desenvolvimento Web, meu olho brilha demais pela área de tecnologia e
          sempre gostei de conhecer várias tecnologias diferentes, como por
          exemplo PHP/Laravel, Dart/Flutter, Javascript, entre outras.
        </p>
        <p>
          {" "}
          Depois de quase 10 anos no meu emprego atual, me perguntei onde
          gostaria de estar e a resposta foi na área de tecnologia. Então,
          juntei forças, coragem e estou aqui, contando um pouco da minha
          história e tentando me realocar no mercado de trabalho.
        </p>
        <p>
          Faço o treinamento Ignite da RocketSeat (incrível por sinal!), que
          possuem trilhas de React, Node, React Native e outras. Me considero
          aberto em aprender novas tecnologias, ter novas experiências, me
          desenvolver cada vez mais no pessoal e profissional, me adapto às
          mudanças e tenho certeza que estou pronto para superar qualquer
          desafio! Peço uma oportunidade para me conhecerem um pouco mais, pois
          desejo sinceramente me realocar no mercado de trabalho para área que
          de fato eu amo e me identifico.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/saullo-almeida/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              {/* <TwitterIcon /> */}
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/saulloalmeida"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              {/* <GitHubIcon /> */}
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
