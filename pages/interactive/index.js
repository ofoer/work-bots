import { useState } from "react"
import Head from 'next/head'
import BaseLayout from "../../layout/Base"


const InteractiveIndex = ({story}) =>{

  return  (
    <BaseLayout tabIndex="interactive">
      InteractiveIndex
    </BaseLayout>
  )
}


export async function getServerSideProps(context){

  return {
    props: {
      
   }
 }
}

export default InteractiveIndex