import React from 'react'

const User = ({company,id,getDetails}) => {
  return (
    <div className='singleCompany' onClick={()=>{
        getDetails(id)
    }}>
     <div className='bar'></div>
     <h4>{company}</h4>

    </div>
  )
}

export default User