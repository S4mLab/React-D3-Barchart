import React from 'react'
import '../styles/marks.css'

const Marks = ({ countriesdata, xScale, yScale, xValue, yValue }) =>
    countriesdata.map((countryObj, index) => (
      <rect
        className = "mark"
        key = {index}
        x = {0}
        y = {yScale(yValue(countryObj))}
        width = {xScale(xValue(countryObj))}
        height = {yScale.bandwidth()}
      >
        <title> {xValue(countryObj)} </title>
      </rect>
    ))

export default Marks