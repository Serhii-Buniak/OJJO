import { styled } from '../../themes'

const Button = styled.button<ButtonStyles>`
    display: inline-block;
    padding: 15px 35px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    ${props=> props.theme.fonts.Gilroy.medium}

    letter-spacing: 0.1em;
    color: ${props => props.primary ? props.theme.colors.accent : props.theme.colors.white};
    background-color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.accent};
    border: 1px solid ${props => props.primary ? props.theme.colors.accent : props.theme.colors.white};
`

interface ButtonStyles {
    primary?: true
}

export default Button