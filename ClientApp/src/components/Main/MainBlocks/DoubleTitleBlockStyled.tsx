import { styled } from "../../../themes"
import AppContainer from "../../AppContainer"
import blackBackground from "images/main/backgroud.png"

const DoubleTitleBlockStyled = styled.section<{ isBlack?: boolean }>`

    padding: 100px 0 120px 0;
    background: ${props => props.isBlack ? `url(${blackBackground})` : props.theme.colors.bgc};
    color: ${props => props.isBlack ? props.theme.colors.white : props.theme.colors.accent};
    background-size: cover;
    .smallTitle{
        margin-bottom: 15px;     
    }
`

export const SmallTitle = styled.h3`
    font-size: 21px;
    line-height: 140%;
    text-align: center;
    color: inherit;
    ${props => props.theme.fonts.Gilroy.regular};
  

`

export const BigTitle = styled.h2`
  padding: 0 3vw;
    font-size: 30px;
    line-height: 41px;
    text-align: center;
    color: inherit;
    ${props => props.theme.fonts.NotoSerif.bold};

`

interface DoubleTitleBlockProps {
    isBlack?: boolean
    smallTitle: string
    bigTitle: string
    children: React.ReactNode
}

const DoubleTitleBlock: React.FC<DoubleTitleBlockProps> = ({ bigTitle, smallTitle, children, isBlack }) => {
    return (
        <DoubleTitleBlockStyled isBlack={isBlack}>
            <SmallTitle className='smallTitle'>{smallTitle}</SmallTitle>
            <BigTitle className='bigTitle'>{bigTitle}</BigTitle>

            <AppContainer>
                {children}
            </AppContainer>

        </DoubleTitleBlockStyled>
    )
}

export default DoubleTitleBlock