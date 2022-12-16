import "../../styles/css/NewProject.css"
import ProjectForm from "../project/ProjectForm"
import { useNavigate } from "react-router-dom"

export default function NewProject() {

    //permite redirecionar o usuário
    const history = useNavigate()

    function createPost(project) {
        //inicia o cost e os serviços
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history("/projects", {message: "Projeto criado com sucesso"})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="newproject_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto e adicione seus serviços</p>
            <ProjectForm handleSubmit={createPost} btnText={"Submit"}/>
        </div>
    )
}