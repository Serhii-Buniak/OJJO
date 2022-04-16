import { styled } from "../../../../../../themes";
import BackArrowIcon from "../../../../../UI/Svg/BackArrowIcon";
import SearchIcon from "../../../../../UI/Svg/SearchIcon";

const SeacrhBarStyled = styled.div`
    svg {                    
        fill: ${props => props.theme.colors.accent};
    }
   
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    .searchBar {
        width: 100%;
        padding: 5px 10px;
        border-radius: 8px;
        margin: 0 50px;
        display: flex;
        justify-content:space-between;
        align-items:center;
        background-color: ${props => props.theme.colors.white};
        max-width: 700px;
        min-width: 280px;
        .SearchIcon {
            cursor: pointer;
            display: flex;
            justify-content:space-between;
            align-items:center;
            margin-right: 10px
        }
        .BackArrowIcon{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items:center;
            margin-right: 0px;
            height: 25px;
            svg {
                height:inherit;
                fill: red;
            }
        }
        input {
            padding-right: 5px;
            font-size: 21px;
            width: 100%;
            height: 100%;   
        }
    }
 
`

interface SeacrhBarProps {
    onBackArrowClick?: React.MouseEventHandler<HTMLElement>
    onSearchIconClick?: React.MouseEventHandler<HTMLElement>
    ref?: React.RefObject<HTMLDivElement>
}

const SeacrhBar: React.FC<SeacrhBarProps> = ({ onBackArrowClick, onSearchIconClick, ref }) => {
    return (
        <SeacrhBarStyled ref={ref}>
            <div className="searchBar">
                <SearchIcon onClick={onSearchIconClick} />
                <input type="text" />
                <BackArrowIcon onClick={onBackArrowClick} />
            </div>
        </SeacrhBarStyled>
    );
}

export default SeacrhBar;