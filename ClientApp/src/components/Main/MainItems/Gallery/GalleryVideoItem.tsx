import { styled } from "../../../../themes"
import GalleryItem from "./GalleryItem"
import playButton from "images/main/gallery/play-btn.svg"
import { useEffect, useRef, useState } from "react"

const GalleryVideoItemStyled = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    img {
        cursor: pointer;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        text-align: center;
    }
`

interface GalleryVideoItemProps {
    video: string
}

const GalleryVideoItem: React.FC<GalleryVideoItemProps> = ({video}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [playing, setPlaying] = useState<boolean>(true)

    useEffect(() => {
        if (playing) {
            videoRef.current?.play()
        } else {
            videoRef.current?.pause()
        }
    })

    return (
        <GalleryItem>
            <GalleryVideoItemStyled>
                <video
                    ref={videoRef}
                    onClick={() => setPlaying(!playing)}
                    loop
                    muted
                    src={video}
                />
                {playing ||
                    <img onClick={() => setPlaying(true)} src={playButton} alt='play-btn' />
                }
            </GalleryVideoItemStyled>
        </GalleryItem>
    )
}

export default GalleryVideoItem