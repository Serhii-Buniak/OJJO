import { styled } from "../../../../themes";

const InfoIconsStyled = styled.div`
    display: flex; 
    align-items: center;

    div{
        margin-right: 20px;
        :last-child{
            margin-right: 0;
        }
    }

`

export interface InfoIconsProps {
    className?: string
    images: {
        src: string,
        alt?: string
    }[]
}

const InfoIcons: React.FC<InfoIconsProps> = ({ images, className }) => {
    return (
        <InfoIconsStyled className={className}>
            {images.map(img =>
                <div key={img.src}>
                    <img key={img.src} src={img.src} alt={img.alt} />
                </div>
            )}
        </InfoIconsStyled>
    )
}

export default InfoIcons;