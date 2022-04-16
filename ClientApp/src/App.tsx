import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hooks'
import { getAllCategoryGroups } from './redux/categoryGroups/creators'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    getAllCategoryGroups.thunk()(dispatch)
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
