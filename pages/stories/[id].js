import { useState } from "react"
import Head from 'next/head'
import {getStory } from "../../api/data_server"
import { OSSHostName } from "../../utils/path_maker"



const Story = ({story}) =>{
  
  const [state, setState] = useState(story)
  const {title, banner} = state
  return  (
    <>
      <div className="w-full relative" style={{paddingBottom: "56.25%"}}>
        <img className="w-full h-full absolute left-0 top-0 object-cover" src={OSSHostName+banner} alt={title}  />
      </div>
      <div className="px-2">
        <h2 className="font-bold text-3xl my-3">{title}</h2>
      </div>
    </>
  )
}
  


export async function getServerSideProps(context){
  const { id } = context.params
  const ds = await getStory(id)
  
  return {
    props: {
      story: ds.data.result.item
   }
 }
}

export default Story