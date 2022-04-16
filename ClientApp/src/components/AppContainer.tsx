import { FlattenSimpleInterpolation } from "styled-components";
import { styled } from "../themes";
import Breakpoints from "./breakpoints";

interface AppContainerProps {
    css?: FlattenSimpleInterpolation
}

const AppContainerWrapper = styled.div<AppContainerProps>`
    height: inherit;
    width: inherit;
    padding: 0 20px;
    margin: 0 auto;
    @media ${Breakpoints.Default} {
        max-width: 57vw;
        min-width: 1160px;
    }
    ${props => props.css}
`

const AppContainer: React.FC<AppContainerProps> = ({ children, css }) =>
    <AppContainerWrapper css={css} className='AppContainer'>
        {children}
    </AppContainerWrapper>


export default AppContainer