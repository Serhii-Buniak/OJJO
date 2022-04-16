import { styled } from "../../../../../../themes"

const BurgerButtonStyled = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 33px;
    width: 33px;
    position: relative;
    z-index: 30;
    div {
        transition: transform 0.1s ease 0s;
        width: 33px;
        height: 5px;
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
    }
    .second {
        transition: opacity 0.1s ease 0s;
        margin-top: 8px;
        margin-bottom: 10px;
        width: 63%;
    }
    &.active {
        .first {
            transform: rotate(45deg) translate(10px, 9.5px); //16.5px
        }
        .second {
            opacity: 0;
        }
        .third {
            transform: rotate(-45deg) translate(10px, -9.5px);
        }
    }
`

interface BurgerButtonProps {
    isActive: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isActive, onClick }) => {
    return (
        <BurgerButtonStyled onClick={onClick} className={`${isActive && 'active'}`}>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
        </BurgerButtonStyled>
    )
}

export default BurgerButton