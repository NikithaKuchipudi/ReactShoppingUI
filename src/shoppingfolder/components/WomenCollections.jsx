import React from 'react'

const WomenCollections = (props) => {

    const {title, Women1, Women2, Women3, Women4, Women5, Women6} =props.ladiesFashion
  return (
    <div className='collectionSection'>
        <h2>{title}</h2>
        <div className="bannerBox">
            <img src="https://s3images.coroflot.com/user_files/individual_files/large_783291_hbz_qswefiwchggq8l8_athzt.jpg" alt="title"/>
        </div>

       <div className='menImages'>
            <img src={Women1} alt="{title"/>
            <img src={Women2} alt="{title"/>
            <img src={Women3} alt="{title"/>
            <img src={Women4} alt="{title"/>
            <img src={Women5} alt="{title"/>
            <img src={Women6} alt="{title"/>
        </div>

    </div>
  )
}

export default WomenCollections