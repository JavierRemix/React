import './Filters.css'
import { useState } from 'react'



export function Filters () {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
    }


    return(
        <section className="filters">

            <div>
                <label htmlFor="price">Price</label>
                <input 
                    type="range" 
                    id="price" 
                    min="0" 
                    max="1000" 
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}