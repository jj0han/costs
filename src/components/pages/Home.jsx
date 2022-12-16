import "../../styles/css/Home.css"
import savings from "../../images/savings.svg"
import LinkButton from "../layout/LinkButton"

export default function Home() {
    return (
        <section className="home_container">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to={"/NewProject"} text="Criar projeto"/>
            <img src={savings} alt="savings" />
        </section>
    )
}