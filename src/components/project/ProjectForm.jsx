import { useEffect, useState } from "react"
import "../../styles/css/ProjectForm.css"
import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    useEffect(() => {
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({
            ...project, [e.target.name]: e.target.value
        })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }
    
    return (
        <form onSubmit={submit} className="form">
            <Input
                type={"text"} 
                name={"name"} 
                text={"Nome do projeto"} 
                placeholder={"Insire o nome do projeto"}
                handleChange={handleChange}
                value={project.name ? project.name : ""}
            />
            <Input
                type={"number"} 
                name={"budget"} 
                text={"Orçamento do projeto"} 
                placeholder={"Insira o orçamento total"}
                handleChange={handleChange}
                value={project.budget ? project.budget : ""}
            />
            <Select
                name={"category_id"}
                text={"Selecione a categoria"}
                options={categories}
                handleCategory={handleCategory}
                value={project.category ? project.category.id : ""}
            />
            <Submit text={btnText}/>
        </form>
    )
}