import { styled } from "../../../../themes"
import { Property } from "csstype"

interface ListStyled {
    gap?: Property.Gap
    direction?: Property.JustifyContent
}

interface ListProps {
    styles?: ListStyled,
    children: React.ReactNode
}

const StyledList = styled.ul<ListStyled>`
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: ${props => props.direction ?? 'space-between'};
    gap: ${props => props.gap};

`

const List: React.FC<ListProps> = ({ children, styles: styles }) => {

    return (
        <StyledList gap={styles?.gap} direction={styles?.direction}>
            {children}
        </StyledList>
    )
}

export default List