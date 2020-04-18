import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import MenuCount from './components/MenuCount';
import Foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    foodFilter: "",
    listFood: Foods,
    countFood: ""
  }

  addFoodHandler = (theFood) => {
    const newListFood = [...this.state.listFood];
    newListFood.push(theFood);
    this.setState({
      listFood: newListFood,
    })
  }

  handleFilter = event => {
    this.setState({
      foodFilter: event.target.value
    })
  }

  render() {
    const { foodFilter } = this.state;
    const filteredFood = this.state.listFood.filter((food) => {
      return food.name.toLowerCase().indexOf( foodFilter.toLowerCase() ) !== -1
    })
    
    return (
      <div >
        <header className="search-bar-container">
          <SearchBar inputValue={this.state.foodFilter} inputOnChange={this.handleFilter}/>
        </header>
        
        <section className="principal-container">
          <div className="FoodBox-container">
            {filteredFood.map((list) => (
              <FoodBox image={ list.image } name={ list.name } calories={ list.calories } />
              ))}
          </div>

          <div>
            <MenuCount /*image={ list.image } name={ list.name } totalCalories={ list.calories } quantity={ list.quantity }*/ />
          </div>
        </section>

        <AddButton addFood = { this.addFoodHandler }/>

      </div>  
    );
  }
}

export default App;
