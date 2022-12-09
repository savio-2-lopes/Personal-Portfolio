import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Publi = () => {
  return (
    <>
      <Head>
        <title>Savio Lopes | Publications</title>
      </Head>
      <div className="mt-10 mb-10 grid place-items-center">
        <Link href="https://www.fateccruzeiro.edu.br/projetos/acervo/68cbd3dc47a91f1333086e0f34777229.pdf">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              alt="Publi Doc"
              className="w-full"
              src="/images/tg.png"
            />
            <div className="py-4">
              <div className="font-bold mt-5 text-xl mb-2">
                Scientific Article from my TG
              </div>
              <p className="text-gray-700 leading-loose	text-base">
                The scientific article is from my undergraduate work, it
                contains the materials used and how they were applied in the
                development, has a theoretical foundation.
              </p>
            </div>
            <div className="pt-4 pb-2">
              <>
                <a href="https://www.fateccruzeiro.edu.br/projetos/acervo/68cbd3dc47a91f1333086e0f34777229.pdf">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    View more
                  </span>
                </a>
              </>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Publi;
