import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import CategoryItem, { CategoryItemProps } from "./CategoryItem"

export const ImageListStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
`

export const CategoryGalleryStyled = styled(ImageListStyled)`
    @media ${Breakpoints.TabletL}, ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2vw;
    }
`

interface CategoryGalleryProps {
    items: CategoryItemProps[]
}

const CategoryGallery: React.FC<CategoryGalleryProps> = ({ items }) => {
    return (
        <CategoryGalleryStyled>
            {items.map(i =>
                <CategoryItem key={Math.random()} {...i} />)}
        </CategoryGalleryStyled>
    )
}

export default CategoryGallery