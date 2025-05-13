import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import React, { useId } from 'react'

function Filters() {
    const {setFilters, filters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>Min price</label>
            <select 
                id={minPriceFilterId}
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            >
                <option value="0">From $0</option>
                <option value="25">From $25</option>
                <option value="50">From $50</option>
                <option value="75">From $75</option>
                <option value="100">From $100</option>
                <option value="200">From $200</option>
                <option value="500">From $500</option>
                <option value="1000">From $1000</option>
                <option value="5000">From $5000</option>
            </select>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
            </select>
        </div>
    </section>
  )
}

export default Filters;
