import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import LocalBar from '@material-ui/icons/LocalBar'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const BaseLayout = ({children, title="就是甜"}) =>{
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pb-16">
      {children}
      </div>
      <BottomNavigation value={value} className="shadow fixed bottom-0 left-0 w-full" onChange={handleChange}>
        <BottomNavigationAction label="首页" value="recents" icon={<RestoreIcon />} />
        
        <BottomNavigationAction label="生活" value="favorites" icon={<LocalBar />} />
        <BottomNavigationAction  label="互动" value="nearby" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction label="我" value="folder" icon={<SentimentSatisfiedAltIcon />} />
      </BottomNavigation>
    </>
  )
}

export default BaseLayout