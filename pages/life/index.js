import { useState } from "react"
import Head from 'next/head'
import BaseLayout from "../../layout/Base"


const LifeIndex = ({story}) =>{

  return  (
    <BaseLayout tabIndex="life">
      LifeIndex
    </BaseLayout>
  )
}


export async function getServerSideProps(context){

  return {
    props: {
      
   }
 }
}

export default LifeIndex