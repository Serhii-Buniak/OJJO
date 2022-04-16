import { useEffect, useState } from "react"
import BurgerButton from "./Button"
import BurgerMenuPopup from "./Popup"

interface BurgerMenuProps {
    logo?: string
    children?: React.ReactNode
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children, logo }) => {

    const [open, setOpen] = useState(false)

    function onClick() {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        setOpen(!open);
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        }
        return () => { document.body.style.overflowY = 'auto' }
    }, [open])

    return (
        <li>
            <BurgerButton onClick={onClick} isActive={open} />
            {open &&
                <BurgerMenuPopup>
                    {children}
                </BurgerMenuPopup>
            }
        </li>
    )
}

export default BurgerMenu