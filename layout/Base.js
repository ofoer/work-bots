import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import LocalBar from '@material-ui/icons/LocalBar'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const BaseLayout = ({children, title="就是甜", tabIndex}) =>{
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
      <BottomNavigation value={tabIndex} className="shadow fixed bottom-0 left-0 w-full">
        
        <BottomNavigationAction href="/" label="首页" value="front" icon={<RestoreIcon />} />
        <BottomNavigationAction href="/interactive" label="互动" value="interactive" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction href="/life" label="生活" value="life" icon={<LocalBar />} />
        <BottomNavigationAction href="/me" label="我" value="me" icon={<SentimentSatisfiedAltIcon />} />
      </BottomNavigation>
    </>
  )
}

export default BaseLayout