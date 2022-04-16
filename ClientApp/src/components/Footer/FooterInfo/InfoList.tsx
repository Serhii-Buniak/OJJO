import { styled } from "../../../themes"

const InfoListStyled = styled.div`
    overflow: hidden;
    transition: height 0.1s ease 0s;
    &.open {
        height: 100%;
    }
    
    &.close {
        height: 0;
    }
    
    & > * {
        :last-child{
            margin-bottom: 0;
        }
    }
`

interface InfoListProps {
    className?: string
    menu: 'close' | 'open' | null
}

const InfoList: React.FC<InfoListProps> = ({ className, children, menu }) => {
    return (
        <InfoListStyled className={`${className} ${menu}`}>
            {children}
        </InfoListStyled>
    )
}

export default InfoList