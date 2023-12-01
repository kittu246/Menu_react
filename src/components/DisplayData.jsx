import React from 'react'

const DisplayData = ({company,dates,duties,title}) => {
  return (
    <section className='details'>
    <h2>{title}</h2>
    <h5>{company}</h5>
    <h5>{dates}</h5>
    <ul>
      {duties.map((duty,index)=>{
       return <li key={index}>{duty}</li>
      })}
    </ul>
  </section>
  )
}

export default DisplayData