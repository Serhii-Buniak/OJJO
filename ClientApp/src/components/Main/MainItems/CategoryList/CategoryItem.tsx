import ImageFile from '../../../../api/models/ImageFile'
import { styled } from '../../../../themes'
import Breakpoints from '../../../breakpoints'

export const CategoryItemStyled = styled.div`
    width: 100%;
    height: 280px;
    margin: auto;
    position: relative;
    z-index: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media ${Breakpoints.TabletL} {
        height: 260px;
    }
    
    @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        height: 170px;
    }
`

export const CategoryItemTitle = styled.div`
    position: absolute;
    z-index: 1;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    ${props => props.theme.fonts.Gilroy.medium};
    left: 0;
    right: 0;
    font-size: 24px;
    bottom: 30px;
    @media ${Breakpoints.Laptop} {
        font-size: 18px;
    }
    @media ${Breakpoints.TabletL} {
        font-size: 18px;
    }
    @media ${Breakpoints.TabletM} {
        font-size: 15px;
        bottom: 20px;
    }
    @media ${Breakpoints.Mobile} {
        font-size: 12px;
        bottom: 10px;
    }
`

export interface CategoryItemProps {
    image: ImageFile
    link: string
    title: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ image, title, link }) => {
    return (
        <CategoryItemStyled>
            <a href={link}><img src={`data:${image.contentType};base64, ${image.byteArray}`} alt='image' /></a>
            <CategoryItemTitle>{title}</CategoryItemTitle>
        </CategoryItemStyled>
    )
}

export default CategoryItem