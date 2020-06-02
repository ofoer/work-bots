import { useState } from "react"
import Head from 'next/head'
import { CardHeader, Avatar, Typography, makeStyles, CardActionArea, IconButton } from "@material-ui/core"
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import MoneyIcon from '@material-ui/icons/Money'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import BaseLayout from "../../layout/Base"

const useStyles = makeStyles((theme) => ({
  ch: {
    "& .MuiCardHeader-content":{
      minWidth: 0
    }
  }
}));

const MeIndex = ({story}) =>{
  const classes = useStyles()
  return  (
    <BaseLayout tabIndex="me">
      <div className="text-right p-4 pb-0">
        <IconButton size="small">
          <SettingsOutlinedIcon />
        </IconButton>
      </div>
      <CardHeader
        className={classes.ch}
        avatar={
          <Avatar aria-label="recipe">
            O
          </Avatar>
        }
        title={<Typography noWrap>小仙女</Typography>}
        subheader="小宝贝"
      />

      {/* <div className="px-4">
        <Typography variant="h5">已甜蜜180天了！</Typography>
      </div> */}
      <div className="p-4">
        <Typography variant="h6">我的工具</Typography>
        <div className="flex pt-3">
          <CardActionArea style={{textAlign: 'center'}}>
            <TextFieldsIcon fontSize="large" />
            <div>情话专区</div>
          </CardActionArea>
          <CardActionArea style={{textAlign: 'center'}}>
            <SportsEsportsIcon fontSize="large" />
            <div>游戏</div>
          </CardActionArea>
          <CardActionArea style={{textAlign: 'center'}}>
            <MoneyIcon fontSize="large" />
            <div>记账</div>
          </CardActionArea>
          <CardActionArea style={{textAlign: 'center'}}>
            <FastfoodIcon fontSize="large" />
            <div>查卡路里</div>
          </CardActionArea>

        </div>
        <div className="flex pt-3">
          <CardActionArea style={{textAlign: 'center'}}>
            <ChatBubbleOutlineIcon fontSize="large" />
            <div>我的咨询</div>
          </CardActionArea>
          <CardActionArea style={{textAlign: 'center'}}>
            <AirlineSeatFlatIcon fontSize="large" />
            <div>我的委托</div>
          </CardActionArea>
          <CardActionArea className="opacity-0" style={{textAlign: 'center'}}>
            <FastfoodIcon fontSize="large" />
            <div>查卡路里</div>
          </CardActionArea>
          <CardActionArea className="opacity-0" style={{textAlign: 'center'}}>
            <FastfoodIcon fontSize="large" />
            <div>记账</div>
          </CardActionArea>
        </div>
      </div>
    </BaseLayout>
  )
}
  


export async function getServerSideProps(context){

  
  return {
    props: {
      
   }
 }
}

export default MeIndex