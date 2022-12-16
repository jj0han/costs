import "../../styles/css/Select.css"

export default function Select({ name, text, options, handleCategory }) {
    const allOptions = options.map((option) => {
        return <option key={option.id} value={option.id}>{option.name}</option>
    })

    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleCategory} name={name} id={name}>
                <option disabled selected>Selecione uma opção</option>
                {allOptions}
            </select>
        </div>
    )
}