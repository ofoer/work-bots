import { useState } from "react"
import { Container, Typography }  from "@material-ui/core"
import BaseLayout from "../layout/Base"
import CardStory from "../components/CardStory"
import { getStories } from "../api/data_server"
import { getOSSHostName } from "../utils/path_maker"

const ossHostName = getOSSHostName()

const Front = ({stories}) =>{
  const [ state, setState ] = useState({items: stories})
  const { items } = state
  return  (
    <BaseLayout tabIndex="front" title="就是甜！-- 情侣日常、给女朋友讲故事、有哪些适合每天睡前给女朋友讲的故事、有哪些适合说给女朋友的睡前温暖小故事">
      <Container className="pb-5" maxWidth="md">  
        <Typography variant="subtitle2" className="pt-4" gutterBottom>5月20日 星期三</Typography>
        <Typography variant="h5" style={{fontWeight: 'bold'}} component="h1">就是甜</Typography>
        {items.map((item) => <CardStory key={item._id} id={item._id} title={item.title} banner={ossHostName+item.banner} desc={item.desc} />) }
      </Container>
    </BaseLayout>
  )
}
  


export async function getServerSideProps(){
  const ds = await getStories()
  
  return {
    props: {
      stories: ds.data.result.items
   }
 }
}

export default Front