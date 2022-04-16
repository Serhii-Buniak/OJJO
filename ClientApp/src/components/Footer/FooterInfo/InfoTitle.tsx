import { styled } from "../../../themes"
import createArrow from "../../UI/Arrow"
import Line from "../../UI/Line"

const InfoTitleStyled = styled.div`
    div {
        margin-bottom: 10px; 
        display: flex;
        align-items: center;
        h4 {
            ${props => props.theme.fonts.Gilroy.medium};
            font-size: 18px;
            line-height: 140%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
           
        }
        i.up {    
            ${props => createArrow({ direction: 'up', padding: '3px', width: '3px', color: props.theme.colors.accent })}
            margin-left: 10px;
        }
        i.down {    
            ${props => createArrow({ direction: 'down', padding: '3px', width: '3px', color: props.theme.colors.accent })}
            margin-left: 10px;
        }

    }
    &.menu{
        cursor: pointer;
    }

    .line{
        border-color: ${props => props.theme.colors.accent};
    }
`

interface InfoTitleProps {
    className?: string
    arrow: 'up' | 'down' | null
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLElement>
}

const InfoTitle: React.FC<InfoTitleProps> = ({ className, children, arrow, onClick }) => {
    return (
        <InfoTitleStyled onClick={onClick} className={`${className} ${arrow && 'menu'}`}>
            <div>
                <h4>{children}</h4>
                {arrow && <i className={arrow}></i>}
            </div>
            <Line className='line' />
        </InfoTitleStyled>
    )
}

export default InfoTitle