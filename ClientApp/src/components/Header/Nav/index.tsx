import { css, styled } from '../../../themes'
import AppContainer from '../../AppContainer'
import Logo from '../../UI/Logo'
import List from './List'
import DoubleText from './List/Items/DoubleText'
import Icon from './List/Items/Icon'
import Text from './List/Items/Text'
import favoriteIcon from 'images/icons/favorite.svg'
import Search from './List/Items/Search'
import { useMediaQuery } from 'react-responsive'
import Breakpoints from '../../breakpoints'
import DropDownMenu from './List/Items/DropMenu'
import BurgerMenu from './List/Items/BurgerMenu'
import BurgerList from './List/Items/BurgerMenu/List'

const NavStyled = styled.nav`
    position: relative;
    min-height: 110px;
    background-color: ${props => props.theme.colors.accent};
    z-index:2;
`
const ContainerStyles = css`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    height: 100%;
    @media ${Breakpoints.Laptop}, ${Breakpoints.TabletL} {
        grid-template-columns: max-content 1fr;
        gap: 3vw;
        padding: 0 5px;
    }
    @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
       display: block;
    }

`


const Nav: React.FC = (props) => {
    return (
        <NavStyled>
            <AppContainer css={ContainerStyles}>
                {useMediaQuery({ query: `${Breakpoints.Desktop}, ${Breakpoints.Default}` }) &&
                    <Desktop {...props} />}

                {useMediaQuery({ query: `${Breakpoints.Laptop}, ${Breakpoints.TabletL}` }) &&
                    <Laptop {...props} />}

                {useMediaQuery({ query: `${Breakpoints.TabletM}, ${Breakpoints.Mobile}` }) &&
                    <Mobile {...props} />}
            </AppContainer>
        </NavStyled >
    )
}

const Desktop: React.FC = () => (<>
    <List styles={{ gap: '1vw', direction: 'left' }}>
        <Text link='#'>Контрагентам</Text>
        <Text link='#'>Дизайнерам</Text>
        <Text link='#'>Вакансии</Text>
    </List>
    <Logo />
    <List styles={{ gap: '3vw', direction: 'right' }}>

        <Search title='Поиск' />
        <DoubleText
            first={{ title: 'Вход', link: '#' }}
            second={{ title: 'Регистрация', link: '#' }}
        />
        <List styles={{ gap: '25px', direction: 'right' }}>
            <Icon image={favoriteIcon} link='favoriteIcon' />
            <Icon image={favoriteIcon} link='favoriteIcon' />
        </List>
    </List>
</>
)

const Laptop: React.FC = () => (<>
    <Logo height='40px' />
    <List>
        <DropDownMenu title={'Наши услуги'}>
            <Text link='#'>Контрагентам</Text>
            <Text link='#'>Дизайнерам</Text>
            <Text link='#'>Вакансии</Text>
        </DropDownMenu>
        {useMediaQuery({ query: `${Breakpoints.TabletL}` })
            ? <Search title={null} />
            : <Search title='Поиск' />}

        <DoubleText
            first={{ title: 'Вход', link: '#' }}
            second={{ title: 'Регистрация', link: '#' }}
        />
        <List styles={{ gap: '15px', direction: 'right' }}>
            <Icon image={favoriteIcon} link='favoriteIcon' />
            <Icon image={favoriteIcon} link='favoriteIcon' />
        </List>
    </List>
</>
)

const Mobile: React.FC = () => (<>
    <List styles={{ direction: 'space-between' }}>
        <Logo height={'40px'} />
        {useMediaQuery({ query: `${Breakpoints.Mobile}` })
            ? <Search title={null} />
            : <Search title='Поиск' />}
        <BurgerMenu>
            <BurgerList className='SimpleList'>
                <Text link='#'>Контрагентам</Text>
                <Text link='#'>Дизайнерам</Text>
                <Text link='#'>Вакансии</Text>
            </BurgerList>
            <BurgerList className='BigIconList'>
                <Icon image={favoriteIcon} link='favoriteIcon' />
                <Icon image={favoriteIcon} link='favoriteIcon' />
            </BurgerList>
            <BurgerList className='SmallIconList'>
                <Icon image={favoriteIcon} link='favoriteIcon' />
                <Icon image={favoriteIcon} link='favoriteIcon' />
                <Icon image={favoriteIcon} link='favoriteIcon' />
                <Icon image={favoriteIcon} link='favoriteIcon' />
                <Icon image={favoriteIcon} link='favoriteIcon' />
            </BurgerList>
        </BurgerMenu>
    </List>
</>
)
export default Nav