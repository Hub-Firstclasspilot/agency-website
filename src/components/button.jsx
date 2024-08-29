import { useEffect, useRef } from "react"
import "../styles/components.css"
export default function Button({onClick, children, full, alt , disabled}) {
    const buttonRef = useRef()

    useEffect(() => {
        if (full) {
            buttonRef.current.classList.add("full")
        }
        if (alt) {
            buttonRef.current.classList.add("alt")
        }
    }, [alt, full])


    return (
        <button ref={buttonRef} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}