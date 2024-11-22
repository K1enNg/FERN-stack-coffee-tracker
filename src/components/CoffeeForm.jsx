import { coffeeOptions} from '../utils'
import React, {useState} from 'react'

const CoffeeForm = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null)
  const [showCoffeeType, setShowCoffeeType] = useState(false)
  const [coffeeCost, setCoffeeCost] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)

  function handleSubmitForm() {
    
  }
  return (
    <>
      <div className='section-header'>
        <i className='fa-solid fa-pencil'/>
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type:</h4>
      <div className='coffee-grid'>
        { coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button onClick={() => {
              setSelectedCoffee(option.name)
              setShowCoffeeType(false)
            }} className={'button-card' + (option.name === selectedCoffee ? ' coffee-button-selected' : '')} key={optionIndex}>
              <h4>{option.name}</h4>
              <h4>{option.caffeine} mg</h4>
            </button>
          )
        })}
        <button onClick={() => {
          setShowCoffeeType(true)
          setSelectedCoffee(null)
        }} className='button-card'>
            <h4>Other</h4>
            <p>n/a</p>
        </button>
      </div>
      { showCoffeeType && (
        <select onChange={(e) => {
          setSelectedCoffee(e.target.value)
        }} id="coffee-list" name='coffee-list'>
        <option value={null}>Select type</option>
        {coffeeOptions.map((option, optionIndex) => {
          return (
            <option value={option.name} key={optionIndex}>
              {option.name} {option.caffeine} mg
            </option>
          )
        })}
      </select>
    )}
      <h4>Add the cost ($)</h4>
      <input value={coffeeCost} onChange={(e) => {
        setCoffeeCost(e.target.value)
      }} className='w-full' type='number' placeholder='4.50'/>
      <h4>Time since consumption</h4>
      <div className='time-entry'>
        <div>
          <h6>Hours</h6>
          <select onChange={(e) => {
            setHour(e.target.value)
          }} name="" id="hours-select">
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex) => {
              return (
                <option key={hourIndex} value={hour}>{hour}</option>
              )
            })}
          </select>
        </div>
        <div>
          <h6>Min</h6>
          <select onChange={(e) => {
            setMin(e.target.value)
          }} id="hours-select">
            {[0,5,10,15,30,45].map((min, minIndex) => {
              return (
                <option key={minIndex} value={min}>{min}</option>
              )
            })}
          </select>
        </div>
      </div>
      <button>
        <p>Add Entry</p>
      </button>
    </>
  )
}

export default CoffeeForm