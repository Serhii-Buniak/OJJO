import { styled } from "../../../themes"
import PolicyText from "./PolicyItems/PolicyText"
import PolicyMarkedText from "./PolicyItems/PolicyMarkedText"
import PolicyLink from "./PolicyItems/PolicyLink"
import Breakpoints from "../../breakpoints"

const PolicyStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    gap: 0 3vw;
    .item { 
        margin: 20px 0;
        font-size: 14px;
        line-height: 150%;
        color: ${props => props.theme.colors.accent};
    }
    @media ${Breakpoints.TabletL}, ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        justify-content:space-around;
        gap: 0 5vw;
    }
`

interface PolicyProps {

}

const Policy: React.FC<PolicyProps> = () => {
    return (
        <PolicyStyled>
            <PolicyText className='item'>(c) 2020 OJJO jewelry</PolicyText>
            <PolicyLink className='item' link='#'>Договор публичной офферты</PolicyLink>
            <PolicyLink className='item' link='#'>Контрагентам</PolicyLink>
            <PolicyMarkedText className='item'>Сделано Figma.info</PolicyMarkedText>
        </PolicyStyled>
    )
}

export default Policy