import { styled } from "../../../../themes";
import Breakpoints from "../../../breakpoints";
import DoubleTitleBlock from "../../MainBlocks/DoubleTitleBlockStyled";
import MailingForm from "./MailingForm";
import MailingList from "./MailingList";

const MailingStyled = styled.div`
    margin: 60px auto 0 auto;
    display: grid;
    grid-template-columns: 4fr 6fr;
    align-items: center;
    max-width: 775px;
    @media ${Breakpoints.TabletL}, ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`

const Mailing: React.FC = () => {
    return (
        <DoubleTitleBlock
            isBlack
            smallTitle='Полезные советы и персональный предложения'
            bigTitle='Эксклюзивная рассылка'
        >
            <MailingStyled>
                <MailingList />
                <MailingForm />
            </MailingStyled>
        </DoubleTitleBlock>
    )
}

export default Mailing