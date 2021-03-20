import React from 'react'
import './styles/App.css'
import './styles/general.css'
import { scaleBand, scaleLinear, max, format } from 'd3'

import LoadData from './LoadData'
import BottomAxis from './components/BottomAxis'
import LeftAxis from './components/LeftAxis'
import Marks from './components/Marks'

const App = () => {

  const countriesdata = LoadData()

  const widthSVG = 960
  const heightSVG = 500
  const margin = { top: 20, right: 30, bottom: 70, left:220 }

  const xAxisLabelOffset = 50

  const innerWidth = widthSVG - margin.right - margin.left
  const innerHeight = heightSVG - margin.top - margin.bottom

  const xValue = countryObj => countryObj['2020NumType']
  
  // scale the data into x-axis
  const xScale = scaleLinear()
  .domain([0, max(countriesdata, xValue)])
  .range([0, innerWidth])
  
  const yValue = countryObj => countryObj['Country']

  // extract the countries name into an array
  const countriesNameArray = countriesdata.map(yValue)
  
  // scale the countries' name into y-axis
  const yScale = scaleBand()
    .domain(countriesNameArray)
    .range([0, innerHeight])
    .paddingInner(0.15)
  
  // the x position of the bars is always 0, starts from the left to the rightLargest Populations
  // the y position from top to bottom, these should be determined by different countries
  // need to use scale to calculate y position, band scale
  // the width of the bar is driven by the population of each country in 2020 
  // to figure out the width of the bars, use Linear scale

  return (
    <svg width = {widthSVG} height = {heightSVG}>

      <g transform = {`translate(${margin.left}, ${margin.top})`}>
        <BottomAxis 
          xScale = {xScale}
          innerHeight = {innerHeight}
          tickFormat = {format(".2s")}
        />
        <LeftAxis 
          yScale = {yScale}
        />
        <text 
          className = "axis-label"
          x = {innerWidth / 2} 
          y = {innerHeight + xAxisLabelOffset}
          textAnchor = "middle"
        >
          10 Largest Populations
        </text>
        <Marks
          countriesdata = {countriesdata}
          xScale = {xScale}
          yScale = {yScale}
          xValue = {xValue}
          yValue = {yValue}
        />
      </g>
    </svg>
  )
}

export default App;
