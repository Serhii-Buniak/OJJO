import { styled } from "../../../../../../themes";
import SearchIcon from "../../../../../UI/Svg/SearchIcon";

const ButtonStyled = styled.div`

    display: flex;
    align-items:center;
    margin: auto;
    padding: 10px 15px;
    line-height: 150%;
    :hover {
        color: ${props => props.theme.colors.accent};
        background: ${props => props.theme.colors.white};
    }
    cursor: pointer;
    :hover{
        svg {                    
            fill: ${props => props.theme.colors.accent};
        }
    }
    span {
        padding-left: 8px;
    }
    .SearchIcon {
        display: flex;
    } 
`

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>,
    title: string | null
}

const SearchButton: React.FC<ButtonProps> = ({ onClick, title }) =>
(
    <ButtonStyled onClick={onClick}>
        <SearchIcon />
        {title &&
            <span>{title}</span>
        }

    </ButtonStyled>
)


export default SearchButton