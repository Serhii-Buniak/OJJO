import { styled } from "../../../../../../themes"
import BurgerLine from "./Line"

export const BurgerListStyled = styled.ul`
    line-height: 140%;
    padding: 0 35px;
    line-height: 150%;

    &.SimpleList {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        li {
            font-size: 20px;   
        }
    }

    &.BigIconList {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 0 2.5vw;
            img {
                max-width: 35px;
                height: 35px;
            }
        }
    }

    &.SmallIconList {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 0 3vw;
            img {
                max-width: 30px;
                height: 30px;
            }
        }
    }
`

interface BurgerListProps {
    className: 'SimpleList' | 'SmallIconList' | "BigIconList"
}


const BurgerList: React.FC<BurgerListProps> = ({ children, className }) => {
    return (
        <>
            <BurgerListStyled className={className}>
                {children}
            </BurgerListStyled>
            <BurgerLine className='burgerLine' />
        </>
    )
}

export default BurgerList