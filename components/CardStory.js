import Link from 'next/link'
import { Card, CardContent, Typography,makeStyles,  CardMedia, CardActionArea }  from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  root: {
    marginTop: theme.spacing(2)
  }
}));

const CardStory = ({id, title, banner, desc}) =>{
  const classes = useStyles()
  return (
    <Link href={"/stories/[id]"} as={`/stories/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={banner}
              title="Contemplative Reptile"
            />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>

            <div className="relative">
              <Typography variant="body2" color="textSecondary" component="p" className="text-justify h-16 overflow-hidden">
                {desc}
              </Typography>
              <div className="absolute bottom-0 left-0 w-full h-12" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7) , #fff)"}}></div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

    // <Link href={"/stories/[id]"} as={`/stories/${id}`}>
    //   <div className="cardstory mb-5 rounded-lg overflow-hidden shadow-lg transition delay-150 duration-300 ease-in-out">
    //     <div className="w-full relative" style={{paddingBottom: "56.25%"}}>
    //       <img className="w-full h-full absolute left-0 top-0 object-cover" src={banner} alt={title}  />
    //     </div>
    //     <div className="px-4 bg-white">
    //       <h2 className="font-bold text-2xl py-3">{title}</h2>
    //       <div className="relative">
    //         <p className="text-gray-700 text-base text-justify h-24">
    //           {desc}
    //         </p>
    //         <div className="absolute bottom-0 left-0 w-full h-12" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7) , #fff)"}}></div>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
export default CardStory