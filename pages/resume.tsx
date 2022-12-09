import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { languages, tools } from "../data";
import { fadeInUp, routeFade } from "../animations";
import Head from "next/head";

const Resume = () => {
  return (
    <motion.div
      className="md:px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Savio Lopes | Resume</title>
      </Head>

      {/* Educação & Experiência */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 break-words">
        <motion.div
          className="resume-col"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h3 className="my-3 text-2xl">Professional experience</h3>

          <div className="mt-10">
            <h3 className="text-x2 font-bold">Junior Front End Developer</h3>
            <span className="text-rigth text-sm">
              Private Code Soluções Digitais (10/2022 - The moment)
            </span>
          </div>

          <div className="mt-10">
            <h3 className="text-x2 font-bold">Web Development Intern</h3>
            <span className="text-rigth text-sm">
              Slideworks (05/2022 - 09/2022)
            </span>
          </div>

          <div className="mt-10">
            <h3 className="text-x2 font-bold">
              Intern in Innovation and Technology
            </h3>
            <span className="text-rigth text-sm">
              Mais Top Estética (01/2022 - 04-2022)
            </span>
          </div>

          <div className="mt-8">
            <h3 className="text-x2 font-bold">
              Intern as Front End Developer.
            </h3>
            <span className="text-rigth text-sm">
              Cazalab (11/2020 - 11/2021)
            </span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h3 className="my-3 text-2xl">Academic Education</h3>
          <div className="mt-10">
            <h3 className="my-2 text-x2 font-bold">
              Graduating in Systems Analysis and Development
            </h3>
            <p>Fatec Profº Waldomiro May (2019-2022)</p>
          </div>

          <div className="mt-8">
            <h3 className="my-2 mt-10 text-x2 font-bold">
              Electronics Technician
            </h3>
            <p>ETEC Marcos Uchoas dos Santos Penchel</p>
          </div>
        </motion.div>
      </div>

      {/* Linguagens e Ferramentas */}

      <div className="grid gap-9 mt-10 md:grid-cols-2">
        <div>
          <h3 className="my-2 text-2xl mt-10">Languages ​​and Technologies</h3>
          <p className="mb-8">
            Self-assessment in some technologies from 0 to 100%:
          </p>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="my-2 text-2xl mt-10">Tools</h3>
          <div>
            <p className="mb-8">
              Self-assessment in some technologies from 0 to 100%:
            </p>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
