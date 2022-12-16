import { useState, useEffect } from "react"

export default function Projects() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(dt => setData(dt))
            .catch((err) => console.log(err))
    }, [])

    console.log(data)

    const Projetos = data.map((projeto) => {
        return <div><h2>{projeto.name}</h2>{projeto.budget}{projeto.category.name}</div>
    })

    return (
        <div>
            <h1>Projects</h1>
            {Projetos ? Projetos : ""}
        </div>
    )
}