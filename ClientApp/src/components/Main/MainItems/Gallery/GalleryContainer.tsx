import Gallery from "."
import GalleryVideoItem from "./GalleryVideoItem"
import video1 from "images/main/gallery/video/g1.mp4"
import video2 from "images/main/gallery/video/g2.mp4"
import image1 from "images/main/gallery/img/g1.png"
import image2 from "images/main/gallery/img/g2.png"
import image3 from "images/main/gallery/img/g3.png"
import image4 from "images/main/gallery/img/g4.png"


import GalleryImageItem from "./GalleryImageItem"

const GalleryContainer: React.FC = () => {
    return (
        <Gallery items={[
            <GalleryVideoItem key={video1} video={video1} />,
            <GalleryImageItem key={image1} image={image1} />,
            <GalleryImageItem key={image2} image={image2} />,
            <GalleryImageItem key={image3} image={image3} />,
            <GalleryImageItem key={image4} image={image4} />,
            <GalleryVideoItem key={video2} video={video2} />,
        ]} />
    )
}

export default GalleryContainer