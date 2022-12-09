import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import CertificationCard from "../components/CertificationCard";
import ProjectsNavbar from "../components/CertificationNavbar";
import { certifications as projectsData } from "../data";
import { CategoryCertification } from "../types";
import { fadeInUp, routeFade, stagger } from "../animations";

const Certifications = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("todos");

  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handlerFilterCategory = (category: CategoryCertification | "todos") => {
    if (category === "todos") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll max-h-[75vh]"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Savio Lopes | Certifications</title>
      </Head>

      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-100 rounded-lg sm:col-span-6 lg:col-span-4"
          >
            <CertificationCard
              project={project}
              key={project.id}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
