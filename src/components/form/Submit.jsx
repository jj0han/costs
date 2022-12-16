import "../../styles/css/Submit.css"

export default function Submit({ text }) {
    return (
        <div>
            <button className="btn" type="submit">{text}</button>
        </div>
    )
}