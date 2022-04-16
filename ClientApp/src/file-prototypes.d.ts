declare global {
    interface File {
        convertToImage: () => Promise<Image>
    }
}

File.prototype.convertToImage = async function () {
    return new Image({
        byteArray: await this.text(),
        contentType: this.type,
        length: this.size,
    })
}