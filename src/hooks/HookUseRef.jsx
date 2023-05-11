import React, { useRef } from 'react'

const HookUseRef = () => {

    const formInputRef = useRef(null)

    const focusInput = () => {
        formInputRef.current.focus()
    }

    return (
        <>
            <h1>Using useref to accedd underlying DOM</h1>
            <input type='text' ref={formInputRef} />
            <button
                onClick={focusInput}
            >Focus input</button>
        </>
    )
}

export default HookUseRef
