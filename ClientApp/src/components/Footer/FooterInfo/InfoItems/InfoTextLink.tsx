import Text from "../../../Header/Nav/List/Items/Text"

export interface InfoTextLinktProps {
    link: string
    children: React.ReactNode
}

const InfoTextLink: React.FC<InfoTextLinktProps> = ({ link, children }) => (
    <Text styles={{ primary: true, padding: '7.5px 10px' }} link={link} >
        {children}
    </Text>
)


export default InfoTextLink