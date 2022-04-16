import { styled } from '../../../../../themes'
import { Property } from "csstype"
import WrapperStyled from './WrapperStyled'

export const TextStyled = styled.a<TextStyles>`
    width: 100%;
    padding: 10px 15px;
    display: flex;
    padding: ${props => props.padding};
    color: ${props => props.primary ? props.theme.colors.accent : props.theme.colors.white};
    ${props => props.theme.fonts.Gilroy.regular};
    line-height: 150%;
    :hover {
        color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.accent};
        background: ${props => props.primary ? props.theme.colors.accent : props.theme.colors.white};
    }
`

interface TextStyles {
    padding?: Property.Padding
    primary?: true
}

interface TextNavItemProps {
    link: string
    children: React.ReactNode
    as?: any
    styles?: TextStyles

}

const Text: React.FC<TextNavItemProps> = ({ link, children, as, styles }) => {
    return (
        <WrapperStyled as={as}>
            <TextStyled {...styles} href={link}>{children}</TextStyled>
        </WrapperStyled >
    )
}

export default Text