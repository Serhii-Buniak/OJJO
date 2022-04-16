import { styled } from "../../../../../../themes"
import createArrow from "../../../../../UI/Arrow"

const DropMenuPopupStyled = styled.ul`
    animation: onActive 0.3s ease;
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    outline: 2px solid ${props => props.theme.colors.accent};
    z-index: 3;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    display: block; 
    min-width: 100%;
    line-height: 140%;
    a {
        color: ${props => props.theme.colors.accent};
        display: block; 
        :hover{
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.accent};
        } 
    }

    & &{
        top: 0px;
        left: calc(100% + 1.8px)
        
    }

    .DropMenuButton{
        color: ${props => props.theme.colors.accent};
        .arrow{
            ${props => createArrow({ width: '2px', color: props.theme.colors.accent })}
        }
        :hover {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.accent};
            .arrow{
                ${props => createArrow({ width: '2px', color: props.theme.colors.white })}
            }
        }
        &.active{
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.accent};
        .arrow{
            ${props => createArrow({ direction: 'right', width: '2px', color: props.theme.colors.white })}
        }
    }
}

@keyframes onActive {
    0% {
        transform: translate(0px, -30px);
        opacity: 0;
        border: 0px;
    }

    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
}
`

interface DropMenuPopupProps {
    children: React.ReactNode
}

const DropMenuPopup: React.FC<DropMenuPopupProps> = ({ children }) => {
    return (
        <DropMenuPopupStyled>
            {children}
        </DropMenuPopupStyled>
    )
}

export default DropMenuPopup