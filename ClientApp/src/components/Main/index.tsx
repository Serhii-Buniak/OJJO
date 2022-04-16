import CategoryList from "./MainItems/CategoryList"
import DoubleTitleBlock from "./MainBlocks/DoubleTitleBlockStyled"
import CategoryListContainer from "./MainItems/CategoryList/CategoryListContainer"
import UsefulArticles from "./MainItems/UsefulArticles"
import UsefulArticlesContainer from "./MainItems/UsefulArticles/UsefulArticlesContainer"
import Gallery from "./MainItems/Gallery"
import GalleryContainer from "./MainItems/Gallery/GalleryContainer"
import OurSalons from "./MainItems/OurSalons"
import Mailing from "./MainItems/Mailing"

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
  
    return (
        <main>
            <CategoryListContainer /> 
            <OurSalons />
            <UsefulArticlesContainer />
            <GalleryContainer />
            <Mailing />
        </main>
    )
}

export default Main