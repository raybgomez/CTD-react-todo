import { useEffect, useRef } from "react"

const InputWithLabel = ({
    value,
    onChange,
    children
}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                id="todoTitle"
                name="title"
                type="text"
                value={value}
                onChange={onChange}
                ref={inputRef}
            />
        </>
    )
}

export default InputWithLabel