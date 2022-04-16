import { styled } from "../../themes"

const Line = styled.hr`
    border-top: 1px solid ${props => props.theme.colors.white};
`

export const BlackLine = styled(Line)`
    border-top: 1px solid ${props => props.theme.colors.accent};
`

export default Line