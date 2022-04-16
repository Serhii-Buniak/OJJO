import { css, styled } from "../../../themes"
import backgroundImage from "images/backgroud.png"
import { Property } from "csstype"
import BrandsList from "./BrandsList"
import AppContainer from "../../AppContainer"
import MediaQuery from "react-responsive"
import Breakpoints from "../../breakpoints"
import Button from "../../UI/Button"
import GreetingTitle from "./Title"

const GreetingStyled = styled.section`
    position: relative;
    height: 100%;
    background-image: url('${backgroundImage}');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: 1;
    .content{
        bottom: 20vh;
        left: 0;
        width: 100%;
        position: absolute;
        text-align: center;
        .title{
            margin: 0 5vw;
            white-space: pre-wrap;
            padding-bottom: 50px;
        }
    }
`



const Greeting: React.FC = () => {
    return (
        <GreetingStyled>

            <div className='content'>
                <GreetingTitle className='title'>Долго, дорого, богато!</GreetingTitle>
                <Button as='a' href='#'>каталог изделий</Button>
            </div>

            <MediaQuery query={`${Breakpoints.Default}, ${Breakpoints.Desktop}`}>
               
                <BrandsList />
            </MediaQuery>

        </GreetingStyled>
    )
}

export default Greeting