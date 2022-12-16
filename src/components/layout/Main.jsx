import "../../styles/css/Main.css"

export default function Main({children, customClass}) {
    return (
        <main className={`container ${customClass}`}>
            {children}
        </main>
    )
}