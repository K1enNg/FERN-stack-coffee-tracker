import React from 'react'
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getTopThreeCoffees, statusLevels } from '../utils'

function StatCard(props) {
  const {lg, title, children} = props
  return (
    <div className={'card stat-card ' + (lg ? 'col-span-2' : '' ) }>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

const Stats = () => {
  const stats = {
    dailyCaffein: 260,
    dailyCost: 7.9,
    avgCoffee: 2.3,
    totalCost: 220
  }

  const caffeinLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)
  const warningLevel = caffeinLevel < statusLevels['low'].maxLevel ? 
  'low' : caffeinLevel < statusLevels['moderate'].maxLevel ? 
  'moderate' :
  'high'
  return (
    <>
      <div className="section-header">
        <i className='fa-solid fa-chart-simple'/>
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        <StatCard lg title="Active Caffeine Level">
          <div className='status'>
            <p><span className='stat-text'>{caffeinLevel}</span>mg</p>
            <h5 style={{color: statusLevels[warningLevel].color, background: statusLevels[warningLevel].background}}>Low</h5>
          </div>
          <p>{statusLevels[warningLevel].description}</p>
        </StatCard>
        <StatCard title="Daily Caffeine">
          <p><span className='stat-text'>{stats.dailyCaffein}</span>mg</p>
        </StatCard>
        <StatCard title="Avg # of Coffees">
          <p><span className='stat-text'>{stats.avgCoffee}</span></p>
        </StatCard>
        <StatCard title="Daily Cost ($)">
        <p>$ <span className='stat-text'>{stats.dailyCost}</span></p>
        </StatCard>
        <StatCard title="Total Cost ($)">
        <p>$ <span className='stat-text'>{stats.totalCost}</span></p>
        </StatCard>
        <table>
          <thead>
            <tr>
              <th>Coffee Name</th>
              <th>Number of Purchase</th>
              <th>Percentage of Total</th>
            </tr>
          </thead>
          <tbody>
            {getTopThreeCoffees(coffeeConsumptionHistory).map((coffee, coffeeIndex)=> {
              return (
                <tr key={coffeeIndex}>
                  <td>{coffee.coffeeName}</td>
                  <td>{coffee.count}</td>
                  <td>{coffee.percentage}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Stats