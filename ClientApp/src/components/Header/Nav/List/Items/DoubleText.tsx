import Text from "./Text"
import { styled } from "../../../../../themes"
import { Property } from "csstype"
import WrapperStyled from "./WrapperStyled"


const DoubleTextStyled = styled(WrapperStyled)<DoubleTextStyles>`
    display: flex;
    
    span {

        margin: auto ${props => props.marginBetween};
    }
`

interface DoubleTextStyles {
    marginBetween?: Property.MarginLeft | Property.MarginRight
}

interface DoubleTextProps {
    styles?: DoubleTextStyles
    first: {
        title: string,
        link: string,
    }
    second: {
        title: string,
        link: string,
    },
}

const DoubleText: React.FC<DoubleTextProps> = ({ first, second, styles }) => {

    return (
        <DoubleTextStyled marginBetween={styles?.marginBetween}>
            <Text
                styles={{ padding: '4px' }}
                link={first.link}
                as='div'
            >{first.title}</Text>
            <span>/</span>
            <Text
                styles={{ padding: '4px' }}
                link={second.link}
                as='div'
            >{second.title}</Text>
        </DoubleTextStyled >
    )
}

export default DoubleText;
