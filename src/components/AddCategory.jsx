import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length <= 1) return;
        onNewCategory(value)
        setValue('')
    }

    return (
        <form onSubmit={onSubmit} className="inline-flex">
            <input
                type="text"
                className='p-2 border-2 border-gray-600'
                placeholder='Buscar gifs'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    )
}
