import { styled } from "../../../../themes"

const CategoryButtonStyled = styled.div`
    ${props => props.theme.fonts.Gilroy.medium};

    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;  

    vertical-align: center;
    align-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const CategoryButtonNonActiveStyled = styled(CategoryButtonStyled)`
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.bgc};
    border: 1px solid #D6D6D6;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
`

const CategoryButtonNonActiveWrapper = styled.div`
    width: 170px;
    height: 60px;
    position: relative;
    font-size: 18px;
    .foreground {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
    }
    .background{
        position: absolute;
        z-index: 0;
        bottom: 0;
        right: 0;
    }
`

const CategoryButtonActiveStyled = styled(CategoryButtonStyled)`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
    font-size: 18px;
    width: 170px;
    height: 60px;
`
export interface CategoryButtonType {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLElement>
}

interface CategoryButtonProps extends CategoryButtonType {
    className?: string
    primary?: boolean
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, primary, onClick, className }) => {
    return (
        <>
            {primary
                ?
                <CategoryButtonActiveStyled onClick={onClick} className={className}>
                    {children}
                </CategoryButtonActiveStyled>
                :
                <CategoryButtonNonActiveWrapper onClick={onClick} className={className}>
                    <CategoryButtonNonActiveStyled className='foreground'>
                        {children}
                    </CategoryButtonNonActiveStyled>
                    <CategoryButtonNonActiveStyled className='background'>
                    </CategoryButtonNonActiveStyled>
                </CategoryButtonNonActiveWrapper>
            }
        </>
    )
}

export default CategoryButton