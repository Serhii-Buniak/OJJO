import { styled } from "../../../../themes"
import CategoryButtonsList from "./CategoryButtonsList"
import CategoryGallery from "./CategoryGallery"
import { CategoryButtonType } from "./CategoryButton"
import { CategoryItemProps } from "./CategoryItem"
import { useState } from "react"
import DoubleTitleBlock from "../../MainBlocks/DoubleTitleBlockStyled"

const CategoryListStyled = styled.div`
    margin: 60px 0 120px 0;
`

export interface CategoryListItemProps {
    id: number
    buttonTitle: string
    content: CategoryItemProps[]
}

export interface CategoryListProps {
    items: CategoryListItemProps[]
}

const CategoryList: React.FC<CategoryListProps> = ({ items }) => {
    const [selected, setSelected] = useState<number>(0)
    let buttons: CategoryButtonType[] = []

    items.forEach((item, i) => {
        buttons.push(
            {
                children: item.buttonTitle,
                onClick: () => setSelected(i)
            }
        )
    })

    return (
        <DoubleTitleBlock
            smallTitle="К мероприятиям"
            bigTitle="Настоящая красота здесь!"
        >
            <CategoryListStyled>
                <CategoryButtonsList
                    primaryIndex={selected}
                    buttons={buttons}
                />
                <CategoryGallery items={items[selected].content} />
            </CategoryListStyled>
        </DoubleTitleBlock>
    )
}

export default CategoryList