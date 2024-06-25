import React from 'react'

const Collections = (props) => {

    const{title, Men1, Men2, Men3, Men4, Men5, Men6 }=props.gentsFashion
  return (
    <div className='collectionSection'>
        <h2>{title}</h2>
        <div className='menImages'>
            <img src={Men1} alt="{title"/>
            <img src={Men2} alt="{title"/>
            <img src={Men3} alt="{title"/>
            <img src={Men4} alt="{title"/>
            <img src={Men5} alt="{title"/>
            <img src={Men6} alt="{title"/>
        </div>

    </div>
  )
}

export default Collections