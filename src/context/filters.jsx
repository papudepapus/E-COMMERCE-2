/* eslint-disable react/prop-types */
import {createContext} from 'react';
import React from 'react';
import { useState } from 'react';

//contexto
export const FiltersContext = createContext() 

//proveer contexto
export function FiltersProvider ({ children }){
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}
