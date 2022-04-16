import { styled } from "../../../../themes";
import PolicyText from "./PolicyText";

const PolicyMarkedText = styled(PolicyText)`
    text-decoration: underline;
    ${props => props.theme.fonts.Gilroy.semibold};
`

export default PolicyMarkedText