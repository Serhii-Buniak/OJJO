import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import Button from "../../../UI/Button"
import DoubleTitleBlock from "../../MainBlocks/DoubleTitleBlockStyled"
import { ImageListStyled } from "../CategoryList/CategoryGallery"
import UsefulArticlesItem, { UsefulArticlesItemProps } from "./UsefulArticlesItem"

const UsefulArticlesStyled = styled.div`
    margin: 60px 0 0 0;
    text-align: center;
`
const ArticlesListStyled = styled(ImageListStyled)`
    margin: 0 0 60px 0;
    @media ${Breakpoints.TabletL}, ${Breakpoints.TabletM} {
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 2vw;
    }
    @media ${Breakpoints.Mobile} {
        grid-template-columns: 1fr; 
        gap: 10px;
    }
`


interface UsefulArticlesProps {
    items: UsefulArticlesItemProps[]
    buttonTitle: string
}

const UsefulArticles: React.FC<UsefulArticlesProps> = ({ items, buttonTitle }) => {
    return (
        <DoubleTitleBlock
            smallTitle='Полезные статьи'
            bigTitle='Лучшие советы по подбору дорогих подарков'
        >
            <UsefulArticlesStyled>
                <ArticlesListStyled>
                    {items.map((it, i) =>
                        <UsefulArticlesItem key={i} {...it} />
                    )}
                </ArticlesListStyled>
                <Button className="button">{buttonTitle}</Button>
            </UsefulArticlesStyled>
        </DoubleTitleBlock>
    )
}

export default UsefulArticles