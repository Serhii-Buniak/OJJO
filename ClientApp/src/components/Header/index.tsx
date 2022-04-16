import { styled } from '../../themes'
import Greeting from './Greeting'
import Nav from './Nav'

const HeaderStyled = styled.header<HeaderProps>`
    height: ${props => props.withGreeting ? '100vh' : 'unset'};
    display: flex; 
    justify-content:space-between;
    flex-direction:column;
`

interface HeaderProps {
    withGreeting?: boolean
}

const Header: React.FC<HeaderProps> = ({ withGreeting }) => {
    
    return (
        <HeaderStyled withGreeting={withGreeting}>
            <Nav />
            {withGreeting && <Greeting />}
        </HeaderStyled >
    )
}

export default Header
