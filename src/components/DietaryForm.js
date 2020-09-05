import React, { Component } from 'react' 

class DietaryForm extends Component {
    constructor() {
        super()
        this.state= {
            isVegan: false,
            isVeggie: false,
            isLactoseFree: false,
            isGlutenFree: false,
            isNutFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main className="raider">
                <form>
                    <h2>Dietary Requirements</h2>
                    <label>
                        <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan} />
                        Vegan 
                    </label>
                    <label>
                        <input type="checkbox" name="isVeggie" onChange={this.handleChange} checked={this.state.isVeggie} />
                        Vegetarian 
                    </label>
                    <label>
                        <input type="checkbox" name="isLactoseFree" onChange={this.handleChange} checked={this.state.isLactoseFree} />
                        Lactose Intolerant 
                    </label>
                    <label>
                        <input type="checkbox" name="isGlutenFree" onChange={this.handleChange} checked={this.state.isGlutenFree} />
                        Gluten Intolerant 
                    </label>
                    <label>
                        <input type="checkbox" name="isNutFree" onChange={this.handleChange} checked={this.state.isNutFree} />
                        Nut Allergy
                    </label>
                </form>    
            </main>
        )
    }
}

export default DietaryForm 