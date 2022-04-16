import { styled } from "../../../../themes"
import GalleryItem from "./GalleryItem"

const GalleryImageItemStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
interface GalleryImageItemProps {
    image: string
}

const GalleryImageItem: React.FC<GalleryImageItemProps> = ({image}) => {
    return (
        <GalleryItem>
            <GalleryImageItemStyled src={image} alt="image" />
        </GalleryItem>
    )
}

export default GalleryImageItem