import brand from 'images/brands/brand.svg'
import { styled } from '../../../themes'

const BrandStyled = styled.li` 
    border: 1px solid ${props => props.theme.colors.white};
    border-top: 0;
    border-bottom: 0;
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 60px;
    
    img{ 
        width: 100%;
        height: 100%;
        margin: auto;
        display: block;
    }
`

interface BrandProps {

}

const Brand: React.FC<BrandProps> = () => {
    return (
        <BrandStyled>
            <img src={brand} alt="brand" />
        </BrandStyled>
    )

}

export default Brand