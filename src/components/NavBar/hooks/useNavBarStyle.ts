import { useState, useEffect } from "react"

export const useNavBarStyle = () => {
    const [newStyle, setNewStyle] = useState<boolean>(false)

    useEffect(() => console.log(newStyle), [newStyle])

    useEffect(() => {
        const handleNewStyleOnScroll = () => {
            if (window.scrollY >= 140) {
                setNewStyle(true)
            }
            else if (window.scrollY < 140) {
                setNewStyle(false)
            }
        }

        window.addEventListener("scroll", handleNewStyleOnScroll)

        return () => {
            window.removeEventListener("scroll", handleNewStyleOnScroll)
        }
    }, [])

    return {
        newStyle
    }
}
