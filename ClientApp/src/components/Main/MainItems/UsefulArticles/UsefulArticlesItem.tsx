import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import { CategoryItemStyled, CategoryItemTitle } from "../CategoryList/CategoryItem"

const UsefulArticlesItemStyled = styled(CategoryItemStyled)`
    height: 370px;
    @media ${Breakpoints.TabletL} {
        height: 340px;
    }
    
    @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        height: 320px;
    }
`

const UsefulArticlesTitleStyled = styled(CategoryItemTitle)`
    font-size: 21px;
    margin: 0 55px;
    text-transform: unset;
    ${props => props.theme.fonts.Gilroy.regular};

    @media ${Breakpoints.Laptop} {
        font-size: 18px;
        margin: 0 30px;
    }
    @media ${Breakpoints.TabletL} {
        font-size: 16px;
        margin: 0 8px;
    }
    @media ${Breakpoints.TabletM} {
        font-size: 14px;
        margin: 0 3px;
        bottom: 20px;
    }
    @media ${Breakpoints.Mobile} {
        font-size: 14px;
        margin: 0 10vw;
    }
`

export interface UsefulArticlesItemProps {
    title: string
    link: string
    image: string
}

const UsefulArticlesItem: React.FC<UsefulArticlesItemProps> = ({ title, link, image }) => {
    return (
        <UsefulArticlesItemStyled>
            <a href={link}><img src={image} alt='article' /></a>
            <UsefulArticlesTitleStyled>
                {title}
            </UsefulArticlesTitleStyled>
        </UsefulArticlesItemStyled>
    )
}

export default UsefulArticlesItem

