import { styled } from "../../../../themes"
import listImage from "images/main/mailing/list-image.svg"

const MailingListStyled = styled.ul`
    font-size: 18px;
    line-height: 140%;
`

const MailingListItemStyled = styled.li`
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
        }
        :last-child {
            margin-bottom: 0; 
        }
`

interface MailingListProps {

}

const MailingList: React.FC<MailingListProps> = () => {
    return (
        <MailingListStyled>
            <MailingListItem>Личный менеджер</MailingListItem>
            <MailingListItem>Доставка и оформление</MailingListItem>
            <MailingListItem>Индивидуальный дизайн</MailingListItem>
        </MailingListStyled>
    )
}

const MailingListItem: React.FC = ({ children }) => (
    <MailingListItemStyled>
        <img src={listImage} alt="listImage" />
        <div>{children}</div>
    </MailingListItemStyled>
)

export default MailingList