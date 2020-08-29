import React, {createContext, useState, useContext} from 'react'

// react context created
const DataContext = createContext()

// wrapper component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({})

    const setValues = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    return (
        <DataContext.Provider value={{data, setValues}}>{children}</DataContext.Provider>
    )
}
// export of custom hook with our context
export const useData = ()=> useContext(DataContext)