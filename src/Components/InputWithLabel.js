import { useEffect, useRef } from "react";
import styles from '../App.module.css';
import PropTypes from "prop-types"


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
        (<>
            <label htmlFor="todoTitle">{children}</label>
            <input
                className={styles.inputItem}
                id="todoTitle"
                name="title"
                type="text"
                value={value}
                onChange={onChange}
                ref={inputRef}
            />
        </>)
    )
}

InputWithLabel.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,

}

export default InputWithLabel