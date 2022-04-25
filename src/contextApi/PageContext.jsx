import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({children}) =>{

    const [showModal , setShowModal] = useState(false)

    return <PageContext.Provider

            value={ {showModal , setShowModal } }>
                {children}

          </PageContext.Provider>

}