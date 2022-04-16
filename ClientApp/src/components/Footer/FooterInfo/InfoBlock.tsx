import { styled } from "../../../themes"
import InfoText from "./InfoItems/InfoText"
import InfoList from "./InfoList"
import InfoTitle from "./InfoTitle"
import InfoIcons, { InfoIconsProps } from "./InfoItems/InfoIcons"
import InfoContact, { InfoContactProps } from "./InfoItems/InfoContact"

import InfoTextLink, { InfoTextLinktProps } from "./InfoItems/InfoTextLink"
import { useEffect, useState } from "react"

const InfoBlockStyled = styled.div`
    width: 100%;
    .title {
        margin-bottom:20px;
    }

    .icons {
        margin-top: 20px;
    }
    
    .contact {
        margin-bottom: 15px;
    }  
`

export enum menuState {
    None,
    Open,
    Close,
}

interface InfoBlockProps {
    className?: string
    text?: string
    links?: InfoTextLinktProps[]
    contacts?: InfoContactProps[]
    icons?: InfoIconsProps
    children: React.ReactNode
    menuInitialState: menuState
}

const InfoBlock: React.FC<InfoBlockProps> = ({ text, links, children, contacts, icons, className, menuInitialState }) => {

    const [menu, setMenu] = useState<menuState>(menuInitialState)

    useEffect(() => {
        setMenu(menuInitialState)
    }, [menuInitialState])

    const rotateArrow = () => {
        switch (menu) {
            case menuState.Open:
                return 'down'
            case menuState.Close:
                return 'up'
            default:
                return null
        }
    }

    const toggleList = () => {
        switch (menu) {
            case menuState.Open:
                return 'open'
            case menuState.Close:
                return 'close'
            default:
                return null
        }
    }

    const onTitleClick = () => {
        if (menuInitialState !== menuState.None) {
            setMenu(menu === menuState.Open ? menuState.Close : menuState.Open)
        }
    }


    return (
        <InfoBlockStyled className={className}>
            <InfoTitle onClick={onTitleClick} arrow={rotateArrow()} className={'title'}>{children}</InfoTitle>
            <InfoList menu={toggleList()} className={'list'}>
                {text && <InfoText>{text}</InfoText>}
                {links && links.map(l =>
                    <InfoTextLink key={Math.random()} link={l.link}>{l.children}</InfoTextLink>
                )}
                {contacts && contacts.map(c =>
                    <InfoContact key={Math.random()} className='contact' image={c.image}>{c.children}</InfoContact>
                )}
                {icons && <InfoIcons className='icons' images={[...icons.images]} />}
            </InfoList>
        </InfoBlockStyled >
    )
}

export default InfoBlock