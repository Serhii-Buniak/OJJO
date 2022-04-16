
import { styled } from "../../../../../themes"
import WrapperStyled from "./WrapperStyled"

const IconStyled = styled.a`
    img {
        display: block; 
    }
`

interface IconProps {
    image: string
    link: string
    alt?: string
}

const Icon: React.FC<IconProps> = ({ image, link, alt }) => {
    return (
        <WrapperStyled>
            <IconStyled href={link} >
                <img src={image} alt={alt || 'icon'} />
            </IconStyled>
        </WrapperStyled>
    )
}

export default Icon