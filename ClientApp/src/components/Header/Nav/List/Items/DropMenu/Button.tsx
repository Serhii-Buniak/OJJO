import { styled } from "../../../../../../themes";
import createArrow from "../../../../../UI/Arrow";
import { TextStyled } from "../Text";

const DropMenuButtonStyled = styled(TextStyled)`
    ${props => props.theme.fonts.Gilroy.regular};
    cursor: pointer;
    text-align: center;
    height: 100%;
    z-index: 1;
    display: block;
    white-space: nowrap;
    line-height: 150%;
    .arrow{
        margin-left: 5px;
        ${props => createArrow({ direction: 'up', padding: '2px', width: '2px', color: props.theme.colors.white })}
    }
    &.active{
        color: ${props => props.theme.colors.accent};
        background-color: ${props => props.theme.colors.white};
        .arrow{
            ${props => createArrow({ direction: 'down', padding: '2px', width: '2px', color: props.theme.colors.accent })}
        }
    }
    :hover{
        .arrow{
            ${props => createArrow({ width: '2px', color: props.theme.colors.accent })}
         
        }
    }
`

interface DropMenuButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>
    title?: string
    isActive: boolean
}

const DropMenuButton: React.FC<DropMenuButtonProps> = ({ onClick, title, isActive }) => {
    return (
        <DropMenuButtonStyled
            onClick={onClick}
            as='div'
            className={`${isActive ? 'active' : ''} DropMenuButton`}
        >
            <span>{title}</span><i className="arrow"></i>
        </DropMenuButtonStyled >
    );
}

export default DropMenuButton