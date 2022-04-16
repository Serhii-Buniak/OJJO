class ImageFile {
    public readonly id?: number
    public byteArray: string
    public contentType: string
    public length: number

    constructor(image: ImageType) {
        this.id = image.id
        this.byteArray = image.byteArray
        this.contentType = image.contentType
        this.length = image.length
    }
    public getSource() {
        return `data:${this.contentType};base64, ${this.byteArray}`
    }
}

export interface ImageType {
    id?: number
    byteArray: string
    contentType: string
    length: number
}

export default ImageFile