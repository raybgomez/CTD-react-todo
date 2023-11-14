import React from "react"

const InputWithLabel = ({ value, onChange, children }) => {
    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                id="todoTitle"
                name="title"
                type="text"
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default InputWithLabel