import axios from "axios"



const getStories = () =>{
  return axios.get(`http://localhost:3002/stories`).then(res =>{
    // console.log(res.data)
    return res
  })
}
const getStory = (id) =>{
  return axios.get(`http://localhost:3002/stories/${id}`).then(res =>{
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