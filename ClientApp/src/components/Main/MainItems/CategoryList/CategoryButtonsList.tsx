import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import CategoryButton, { CategoryButtonType } from "./CategoryButton"

const CategoryButtonsListStyled = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    margin-bottom: 60px;
    
    @media ${Breakpoints.Default} {  
        justify-content: space-between;      
    }

    @media ${Breakpoints.Desktop}, ${Breakpoints.Laptop}, ${Breakpoints.TabletL} {
        gap: 20px;
    }

    @media ${Breakpoints.Mobile}, ${Breakpoints.TabletM} {
        justify-content: space-around;
        gap: 20px;
        .item{
            width: 120px;
            height: 45px;
            font-size: 14px;
        }
    }
`

interface CategoryButtonsListProps {
    primaryIndex: number
    buttons: CategoryButtonType[]
}

const CategoryButtonsList: React.FC<CategoryButtonsListProps> = ({ primaryIndex, buttons }) => {
    return (
        <CategoryButtonsListStyled>
            {buttons.map((b, i) =>
                <CategoryButton
                    primary={primaryIndex === i}
                    onClick={b.onClick}
                    key={i}
                    className='item'
                >{b.children}</CategoryButton>
            )}
        </CategoryButtonsListStyled>
    )
}

export default CategoryButtonsList