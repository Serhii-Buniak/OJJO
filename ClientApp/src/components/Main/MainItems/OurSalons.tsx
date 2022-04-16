import { styled } from "../../../themes";
import Breakpoints from "../../breakpoints";
import Button from "../../UI/Button";
import DoubleTitleBlock from "../MainBlocks/DoubleTitleBlockStyled";

const OurSalonsStyled = styled.div`
    text-align: center;
    .text {
        ${props => props.theme.fonts.Gilroy.regular};
        font-size: 18px;
        line-height: 140%;
        text-align: center;
        max-width: 730px;
        margin: 45px auto 60px auto;
        @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
            font-size: 14px;
        }
    }
`

const OurSalons: React.FC = () => {
    return (
        <DoubleTitleBlock
            isBlack
            smallTitle='Не знаете, что выбрать?'
            bigTitle='Посетите наши салоны в Москве'
        >
            <OurSalonsStyled>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</div>
                <Button as='a' href="#" primary>наши салоны</Button>
            </OurSalonsStyled>
        </DoubleTitleBlock>
    )
}

export default OurSalons