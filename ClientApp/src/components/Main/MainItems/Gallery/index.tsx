import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import DoubleTitleBlock from "../../MainBlocks/DoubleTitleBlockStyled"

const GalleryStyled = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-areas: 
        'first first second third'
        'fourth fifth sixth sixth';
        grid-template-columns: 1fr 1fr 1fr 1fr;
    & > * {
        height: 300px;
        :nth-child(1) {
           grid-area: first;
        }
        :nth-child(2) {
            grid-area: second;
        }
        :nth-child(3) {
            grid-area: third;
        }
        :nth-child(4) {
            grid-area: fourth;
        }
        :nth-child(5) {
            grid-area: fifth;
        }
        :nth-child(6) {
            grid-area: sixth;
        }
    }
    @media ${Breakpoints.Laptop} {
        & > * {
            height: 250px;
        }
    }
    @media ${Breakpoints.TabletL} {
        & > * {
            height: 250px;
        }
        grid-template-areas: 
            'first second third'
            'fourth fifth sixth';
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        & > * {
            height: 150px;
        }
        grid-template-areas: 
            'first first'
            'second third'
            'fourth fifth'
            'sixth sixth';
        grid-template-columns: 1fr 1fr;
    }

`

interface GalleryProps {
    items: JSX.Element[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {

    return (
        <DoubleTitleBlock
            smallTitle="#ojjo_jewerly"
            bigTitle="Мы в социальных сетях"
        >
            <GalleryStyled>
                {items}
            </GalleryStyled>
        </DoubleTitleBlock>
    )
}

export default Gallery