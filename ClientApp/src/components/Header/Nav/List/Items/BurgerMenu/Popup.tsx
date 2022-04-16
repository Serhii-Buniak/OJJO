import { styled } from "../../../../../../themes"

const BurgerMenuStyled = styled.div`
    background-color: ${props => props.theme.colors.accent};
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    margin: 109px 0 0 0;
    padding: 30px 0 106px 0;
    overflow-y: scroll;
    opacity: 0.94;
    animation: popup 0.1s ease-in 0s;
    line-height: 150%;
  
    @keyframes popup {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
`

interface BurgerMenuPopupProps {

}

const BurgerMenuPopup: React.FC<BurgerMenuPopupProps> = ({ children }) => {
    return (
        <BurgerMenuStyled>
            {children}
        </BurgerMenuStyled>
    )
}

export default BurgerMenuPopup