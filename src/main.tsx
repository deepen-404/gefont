import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './store/store.ts'
// import { ApiProvider } from "@reduxjs/toolkit/query/react"
// import { productsApi } from './store/slices/apiSlice.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <ApiProvider api={productsApi}> */}
    <App />
    {/* </ApiProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,
)
