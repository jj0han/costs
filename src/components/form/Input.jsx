import "../../styles/css/Input.css"

export default function Input({ type, name, text, placeholder, value, handleChange }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <input required id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange}/>
        </div>
    )
}