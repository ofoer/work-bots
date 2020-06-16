import axios from "axios"



const getStories = () =>{
  return axios.get(`http://47.103.119.89:3002/stories`).then(res =>{
    // console.log(res.data)
    return res
  })
}
const getStory = (id) =>{
  return axios.get(`http://47.103.119.89:3002/stories/${id}`).then(res =>{
    // console.log(res.data)
    return res
  })
}

const getStoryArticle = () =>{

}
export {
  getStories,
  getStory,
  getStoryArticle
}