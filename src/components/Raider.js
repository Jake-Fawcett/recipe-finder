import React, { useState } from 'react'

function Raider() {
    const [value, setValue] = useState('')
    const [ingredients, setIngredients] = useState([])

    function handleChange(event) {
        setValue(event.target.value.toLowerCase())
    }

    function handleKeyDown(event) {
        if (value && !ingredients.includes(value) ) {
            setIngredients(ingredients.concat(value)) 
        }
        setValue('')
        event.preventDefault()
    }

    function handleClick(ingredient) {
        setIngredients(ingredients.filter(item => item !== ingredient))
    }

    return (
        <div>
            <main className='raider'> 
                <div>
                    <h2>Enter your ingredients to find matching recipes</h2>
                    <p>You must enter a minimum of 3 ingredients!</p>
                    <form onSubmit={handleKeyDown}>
                        <input type='text' placeholder='Enter Ingredient' value={value} onChange={handleChange}/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div>
                    <h3>Your Ingredients</h3>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li key={ingredient}>
                                <button className= 'itembutton' type='button' onClick={() => handleClick(ingredient)}>{ingredient}</button>
                            </li>    
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Raider