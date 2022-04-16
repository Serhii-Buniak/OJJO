import { styled } from '../../../../../themes'

const WrapperStyled = styled.li`
    color: ${props => props.theme.colors.white};
    text-align: center;
    display: block;   
    font-size: 14px;
    justify-content:center;
    ${props => props.theme.fonts.Gilroy.regular};
    line-height: 150%;
    & > li > a {
        color: ${props => props.theme.colors.white};
    }   
`

export default WrapperStyled