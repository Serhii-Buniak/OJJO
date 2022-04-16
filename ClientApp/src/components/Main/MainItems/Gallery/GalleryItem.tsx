import { styled } from "../../../../themes"


const GalleryItemStyled = styled.div`
 
`

interface GalleryItemProps {

}

const GalleryItem: React.FC<GalleryItemProps> = ({children}) => {
    return (
        <GalleryItemStyled>
            {children}
        </GalleryItemStyled>
    )
}

export default GalleryItem


