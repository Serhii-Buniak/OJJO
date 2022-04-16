import { styled } from "../../../../themes"
import PolicyText from "./PolicyText"

const PolicyLinkStyled = styled(PolicyText)`
    
    a {
        color: inherit;
    }
`

interface PolicyLinkProps {
    children: React.ReactNode
    link: string
    className?: string
}

const PolicyLink: React.FC<PolicyLinkProps> = ({ link, children, className }) => {
    return (
        <PolicyLinkStyled className={className}>
            <a href={link}>{children}</a>
        </PolicyLinkStyled>
    )
}

export default PolicyLink