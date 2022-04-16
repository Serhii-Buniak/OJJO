import { styled } from "../../themes"
import AppContainer from "../AppContainer"
import { BlackLine } from "../UI/Line"
import FooterInfo from "./FooterInfo"
import Policy from "./Policy"

const FooterStyled = styled.footer`
    padding-top: 80px;
    background: ${props => props.theme.colors.bgc};
`

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <AppContainer>
                <FooterInfo />
                <BlackLine className="line" />
                <Policy />
            </AppContainer>
        </FooterStyled>
    )
}

export default Footer