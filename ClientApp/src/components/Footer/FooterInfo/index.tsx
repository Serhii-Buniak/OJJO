import { styled } from "../../../themes"
import InfoBlock, { menuState } from "./InfoBlock"
import visa from "images/icons/visa.svg"
import mastercard from "images/icons/masterd-card.svg"
import telephoneIcon from "images/icons/telephone.svg"
import emailIcon from "images/icons/email.svg"
import vk from "images/icons/socialMedias/vk-black.svg"
import youtube from "images/icons/socialMedias/youtube-black.svg"
import facebook from "images/icons/socialMedias/facebook-black.svg"
import telegram from "images/icons/socialMedias/telegram-black.svg"
import etsy from "images/icons/socialMedias/etsy-black.svg"
import Breakpoints from "../../breakpoints"
import { useMediaQuery } from "react-responsive"

const FooterInfoStyled = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 60px;
    grid-gap: 2vw;
    @media ${Breakpoints.Desktop}, ${Breakpoints.Laptop}, ${Breakpoints.TabletL} {
        grid-template-columns: 1fr 1fr;
        margin: 0 2vw 60px 2vw;
        grid-gap: 5vw;
        .block{
          margin: 0 auto;
        }
    }

    @media ${Breakpoints.Mobile}, ${Breakpoints.TabletM} {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        .block{
          margin: 0 auto 0 auto;
        }
    }
`

const FooterInfo: React.FC = () => {

    const isMobile = useMediaQuery({ query: `${Breakpoints.Mobile}, ${Breakpoints.TabletM}` })
    const menuStates = isMobile ? menuState.Close : menuState.None
    return (
        <FooterInfoStyled>
            <InfoBlock menuInitialState={menuStates} className='block'
                links={[
                    { link: '#', children: 'Доставка' },
                    { link: '#', children: 'Оплата ' },
                    { link: '#', children: 'Акции' },
                    { link: '#', children: 'Политика конфиденциальности' },
                ]}
            >Полезные ссылки</InfoBlock>
            <InfoBlock menuInitialState={menuStates} className='block'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.'
                icons={{
                    images: [
                        { src: visa },
                        { src: mastercard },
                    ]
                }}
            >Оплата</InfoBlock>
            <InfoBlock menuInitialState={menuStates} className='block'
                contacts={
                    [
                        { children: "8 (812) 234-56-55", image: { src: telephoneIcon } },
                        { children: "8 (812) 234-56-55", image: { src: telephoneIcon } },
                        { children: "ojjo@ojjo.ru", image: { src: emailIcon } },
                    ]}
            >Контакты</InfoBlock>
            <InfoBlock menuInitialState={menuStates} className='block'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.'
                icons={{
                    images: [
                        { src: youtube },
                        { src: vk },
                        { src: facebook },
                        { src: telegram },
                        { src: etsy },
                    ]
                }}
            >Социальные сети</InfoBlock>
        </FooterInfoStyled >
    )
}

export default FooterInfo