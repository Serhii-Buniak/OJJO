import { styled } from "../../../themes"

import Line from "../../UI/Line"
import AppContainer from "../../AppContainer"
import Brand from "./Brand"

const BrandsListStyled = styled.div`
 
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    text-align: center;

    .line {
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 0;
        text-align: center;
    }
    .brands{
        padding: 30px 0 20px 0;
        display: flex;
        justify-content: space-between;  
        flex-wrap: nowrap;
        overflow: hidden;
        li{
            :first-child{
                border-left: 0; 
            }
            :last-child{
                border-right: 0; 
            }
        }
    }
`

interface BrandsListProps {

}

const BrandsList: React.FC<BrandsListProps> = () => (
    <BrandsListStyled>
        <Line className='line' />
        <AppContainer>
            <ul className="brands">
                <Brand />
                <Brand />
                <Brand />
                <Brand />
                <Brand />
                <Brand />
            </ul>
        </AppContainer>
    </BrandsListStyled>
)


export default BrandsList