import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/index.scss'
import store from './redux'
import { BrowserRouter } from 'react-router-dom'
import AppAction from './redux/action'
import App from './App'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './themes'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider<AppAction> store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider >
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
)