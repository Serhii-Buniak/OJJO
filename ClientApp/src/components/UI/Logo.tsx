import logo from 'images/logo.svg'
import { styled } from '../../themes';
import { Property } from "csstype"

const LogoStyled = styled.div<LogoStyles>`
    margin: auto 0;
    img{
        height: ${props => props.height};
        width: ${props => props.width};
    }
    position: relative;
    z-index: 3;
`

interface LogoStyles {
    height?: Property.Height
    width?: Property.Width
}


const Logo: React.FC<LogoStyles> = (props) => {
    return (
        <LogoStyled {...props}>
            <a href='#'>
                <img src={logo} alt="logo" />
            </a>
        </LogoStyled>
    )
}

export default Logo;