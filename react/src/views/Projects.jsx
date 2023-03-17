import React from "react";
import Browser from "../components/Browser";
<<<<<<< HEAD
=======
import ProjectCard from "../components/ProjectCard";
>>>>>>> search2
import Title from "../components/Title";

export default function Projects() {
<<<<<<< HEAD
=======
  const [projects, setProjects] = useState([]);
  const [table, setTable] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getAllItems()
      .then((response) => {
        // console.log(response)
        setTable(response);
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = e => {
    filter(e.target.value);
    setBusqueda(e.target.value);
    // console.log("busqueda:"+ e.target.value)
  }
  const filter = (termsearch) => {
    let result = table.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(termsearch)) {
        return elemento;
      }

    });
    setProjects(result);
  }

>>>>>>> search2
  return (
    <>
      <Browser busqueda={busqueda} handleChange={handleChange} />
      <Title title={"Proyectos"} />
<<<<<<< HEAD
=======
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project_name={project.name}
          projectOnClick={""} //configurar el onclick que lleva al id del proyecto con todas sus rubricas
          project_url={project.url}
          project_description={project.description}
        //falta llamar a esta info
        // totalRubrics={project.totalRubrics}
        // totalEvaluations={project.totalEvaluations}
        />
      ))}
>>>>>>> search2
    </>
  );
}
