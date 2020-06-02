import { useState } from "react"
import Head from 'next/head'
import BaseLayout from "../../layout/Base"
import Avatar from "../../components/Avatar"

const MeIndex = ({story}) =>{

  return  (
    <BaseLayout>
      <div className="container mx-auto px-4 py-5 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-3xl font-bold">已甜蜜180天了！</h1>
          <Avatar />
        </div>
        
        <div className="interactive">
          <div className="items-center justify-between flex border-b">
            <div className="font-bold text-xl">
              今日互动
            </div>
            <div>
              add
            </div>
          </div>
          <div className="py-1">
            <ul>
              <li>给宝宝讲今日故事</li>
              <li>提醒宝宝带钥匙</li>
            </ul>
            
          </div>
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