import { useEffect, useRef, useState } from "react"
import { styled } from "../../../../../../themes"
import WrapperStyled from "../WrapperStyled"
import SearchButton from "./Button"
import SeacrhBar from "./SeacrhBar"

const SearchStyled = styled(WrapperStyled)`
`

interface SearchProps {
    title: string | null
}

const Search: React.FC<SearchProps> = ({ title }) => {
    const [inputMode, setInputMode] = useState<boolean>(false)

    const searchEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inputMode) {
            const onClick = (e: Event) => {
                if (searchEl.current !== null) {
                    (searchEl.current as any).contains(e.target) || setInputMode(false)
                }
            }

            document.addEventListener('click', onClick)
            return () => document.removeEventListener('click', onClick)
        }
    })

    return (
        <SearchStyled>
            <SearchButton title={title} onClick={() => setInputMode(true)} />
            {inputMode &&
                <SeacrhBar ref={searchEl} onBackArrowClick={() => setInputMode(false)} />
            }
        </SearchStyled>
    )
}

export default Search