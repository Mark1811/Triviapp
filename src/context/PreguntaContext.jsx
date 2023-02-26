import React,{createContext} from "react";

export const PreguntaContext = createContext();

export const DataProvider = ({children})=>{
    return(
        <DataProvider.Provider>
            {children }
        </DataProvider.Provider>
    )
}