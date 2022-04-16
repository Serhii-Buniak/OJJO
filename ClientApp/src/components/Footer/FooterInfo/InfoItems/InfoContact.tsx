import { styled } from "../../../../themes"

const InfoContactStyled = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 20px;
        margin-right: 20px;
        height: 20px;
        object-fit:scale-down;
    }
    

`

export interface InfoContactProps {
    className?: string
    image: {
        src: string,
        alt?: string
    }
    children: React.ReactNode
}

const InfoContact: React.FC<InfoContactProps> = ({ className, image, children }) => {
    return (
        <InfoContactStyled className={className}>
            <div>
                <img src={image.src} alt={image.alt || 'icon'} />
            </div>
            <span>{children}</span>
        </InfoContactStyled>
    )
}

export default InfoContact