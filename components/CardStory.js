
import { Card, CardContent, Typography,makeStyles, CardActionArea }  from "@material-ui/core"
// import Link from "next/link"

const useStyles = makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const CardStory = ({ item, baseUrl, onChange }) =>{
  const classes = useStyles()
  const { title, desc, banner } = item
  return (
    <Card className="mt-4" onClick={()=>onChange(item)}>
      <CardActionArea>
        <div className="w-full relative" style={{paddingBottom: "56.25%"}}>
          <img className="w-full h-full absolute left-0 top-0 object-cover" src={baseUrl+banner} alt={title}  />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>

          <div className="relative">
            <Typography variant="body2" color="textSecondary" component="p" className="text-justify overflow-hidden">
              {desc}
            </Typography>
            {/* <div className="absolute bottom-0 left-0 w-full h-6" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7) , #fff)"}}></div> */}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

//     {/*<Link href={"/stories/[id]"} as={`/stories/${id}`}>
//   <a className="no-underline">*/}
//   <Card className="mt-4">
//   <CardActionArea>
//     <div className="w-full relative" style={{paddingBottom: "56.25%"}}>
//       <img className="w-full h-full absolute left-0 top-0 object-cover" src={banner} alt={title}  />
//     </div>
//     <CardContent>
//       <Typography gutterBottom variant="h6" component="h2">
//         {title}
//       </Typography>

//       <div className="relative">
//         <Typography variant="body2" color="textSecondary" component="p" className="text-justify overflow-hidden">
//           {desc}
//         </Typography>
//         {/* <div className="absolute bottom-0 left-0 w-full h-6" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7) , #fff)"}}></div> */}
//       </div>
//     </CardContent>
//   </CardActionArea>
// </Card>
// {/*</a>
// </Link>*/}
export default CardStory