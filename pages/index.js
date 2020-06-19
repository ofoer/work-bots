import _ from "lodash"
import { useState } from "react"
import { Container, Typography, AppBar, Dialog, IconButton, Toolbar, Button, Slide}  from "@material-ui/core"
import { Close }  from "@material-ui/icons"
import BaseLayout from "../layout/Base"
import CardStory from "../components/CardStory"
import marked from "marked"
import { getStories, getStoryArticle } from "../api/data_server"
import { OSSHostName } from "../utils/path_maker"
import ContentWrapper from "../components/ContentWrapper"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const Front = ({stories}) =>{
  const [ state, setState ] = useState({isFetching: false,isReady: true, items: stories, err: ""})
  const { isFetching, isReady, items, err } = state
  const [showDiagContent,setContent] = useState({content: null, title: null})
  const [open, setOpen] = useState(false);
  const content = showDiagContent.content&&marked(showDiagContent.content)
  const handleClose = () => {
    setOpen(false);
  };
  const handleDetail = (item) =>{
    const { asset_path }= item
    console.log(item)
    
    getStoryArticle(asset_path).then(res =>{
      setOpen(true)
      setContent({title:item.title ,content:res.data})
    })
    
  }
  return  (
    <BaseLayout tabIndex="front" title="就是甜！-- 情侣日常、给女朋友讲故事、有哪些适合每天睡前给女朋友讲的故事、有哪些适合说给女朋友的睡前温暖小故事">
      <Container className="pb-5" maxWidth="md">  
        <Typography variant="subtitle2" className="pt-4" gutterBottom>5月20日 星期三</Typography>
        <Typography variant="h5" style={{fontWeight: 'bold'}} component="h1">就是甜</Typography>
        <ContentWrapper isFetching={isFetching} isReady={isReady} isEmpty={_.isEmpty(items)}>
          {items.map((item) => <CardStory baseUrl={OSSHostName} onChange={handleDetail} key={item._id}  item={item} />) }
        </ContentWrapper>
      </Container>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar position="static" className="shadow-none bg-transparent">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
            <Typography variant="h6">
              {showDiagContent.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="p-2" dangerouslySetInnerHTML={{__html: content}}>

        </div>
      </Dialog>
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