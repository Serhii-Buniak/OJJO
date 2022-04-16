import CategoryList from "."
import { getAllCategoryGroups } from "../../../../redux/categoryGroups/creators"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { getCategoryGroupsItems } from "../../../../redux/categoryGroups/selectors"
import { useEffect } from "react"

const CategoryListContainer: React.FC = () => {

    const items = useAppSelector(getCategoryGroupsItems)
    const listProps = items.map(i => ({
        id: i.id,
        buttonTitle: i.name,
        content: i.categories.map(c => ({
            title: c.name,
            image: c.image,
            link: '#'
        }))
    }))
    console.log(listProps);
    return (
        listProps.length === 0  
            ? <></>
            : <CategoryList items={listProps} />

    )
}



export default CategoryListContainer