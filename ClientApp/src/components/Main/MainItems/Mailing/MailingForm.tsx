import { styled } from "../../../../themes"
import Breakpoints from "../../../breakpoints"
import Button from "../../../UI/Button"

const MailingFormStyled = styled.form`
    outline: 2px solid ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    .container {
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.colors.white};
        display: flex;
        padding: 20px;
        
        .input {
            outline: 1px solid ${props => props.theme.colors.grey};
            width: 100%;
            display: block;
            padding: 15px 20px 15px 20px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            ::placeholder {
                text-transform: uppercase;
            }
        }
        @media ${Breakpoints.TabletM}, ${Breakpoints.Mobile} {
            flex-direction: column;  
            
        }
    }

`

interface MailingFormProps {

}

const MailingForm: React.FC<MailingFormProps> = () => {
    return (
        <MailingFormStyled>
            <div className="container">
                <input placeholder="Ваш e-mail" className="input" type="text" />n
                <Button className="button" >отправить</Button>
            </div>
        </MailingFormStyled>
    )
}

export default MailingForm