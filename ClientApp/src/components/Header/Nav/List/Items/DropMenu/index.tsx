import { useEffect, useRef, useState } from 'react'
import { styled } from '../../../../../../themes';
import DropMenuButton from './Button';
import DropMenuPopup from './Popup';

const DropDownMenuStyled = styled.li`
        position: relative;
        z-index: 1;
     
`
export interface DropMenuProps {
    title: string
}

const DropDownMenu: React.FC<DropMenuProps> = ({ title, children }) => {

    const [dropped, SetDropped] = useState<boolean>(false)

    const rootEl = useRef(null)

    useEffect(() => {
        const onClick = (e: Event) => {
            if (rootEl.current !== null) {
                (rootEl.current as any).contains(e.target) || SetDropped(false)
            }
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [dropped])

    return (
        <DropDownMenuStyled ref={rootEl}>
            <DropMenuButton isActive={dropped} onClick={() => SetDropped(!dropped)} title={title} />
            {dropped &&
                <DropMenuPopup>
                    {children}
                </DropMenuPopup>
            }
        </DropDownMenuStyled>
    )
}

export default DropDownMenu