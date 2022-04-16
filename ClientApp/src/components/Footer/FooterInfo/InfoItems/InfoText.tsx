import { styled } from "../../../../themes"

const InfoText = styled.div`
    color: ${props => props.theme.colors.accent};
    ${props => props.theme.fonts.Gilroy.regular}
    font-size: 14px;
    line-height: 150%;
`

export default InfoText