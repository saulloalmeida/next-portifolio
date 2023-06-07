import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "meus principais projetos",
};
const products = [
  {
    id: 1,
    name: "Projeto - IgniteShop",
    description: "trata-se de projeto efetuado para simular compra, desde a lista de produtos, detalhes de produtos, integração com stripe e finalização da compra.",
    githubHref: "https://github.com/saulloalmeida/ignite-shop",
    demoHref: "https://ignite-shop-three-kappa.vercel.app/",
    imageSrc:
      "https://github.com/saulloalmeida/ignite-shop/raw/main/readme.png",
    imageAlt:
      "imagem do projeto",
  },
  {
    id: 2,
    name: "Projeto - Feedback Plugin",
    description: "trata-se de projeto efetuado como plugin para qualquer site ou app, que serve como sistema de feedback para empresa.",
    githubHref: "https://github.com/saulloalmeida/feedback-nlwr",
    demoHref: "http://feedback-nlwr.vercel.app/",
    imageSrc:
      "https://github.com/saulloalmeida/feedback-nlwr/raw/master/readme.gif",
    imageAlt:
      "imagem do projeto",
  },
  {
    id: 3,
    name: "Projeto - CRUD",
    description: "trata-se de projeto fullstack, com CRUD implementado, conexão com banco de dados, relacionamento na tabela, utilizando MUI, react, vite, railway",
    githubHref: "https://github.com/saulloalmeida/frontend",
    demoHref: "https://frontend-five-nu.vercel.app/",
    imageSrc:
      "https://github.com/saulloalmeida/frontend/raw/master/readme.png",
    imageAlt:
      "imagem do projeto",
  },
];
export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projetos</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border border-gray-500 rounded p-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full overflow-hidden rounded-lg flex justify-center ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center rounded grayscale"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{product.description}</p>
                </div>
                {/* <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                </div> */}
              </div>
              <div>
                              <div className="mt-6">
                <a
                  href={product.demoHref}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Demonstração<span className="sr-only">, {product.name}</span>
                </a>
              </div>
              <div className="mt-6">
                <a
                  href={product.githubHref}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Github<span className="sr-only">, {product.name}</span>
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
