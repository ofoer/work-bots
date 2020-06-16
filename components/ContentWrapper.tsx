import { SFC } from "react"
interface ContentWrapperProps {
  isFetching: boolean
  isReady: boolean,
  isEmpty: boolean,
  err: string
}

const ContentWrapper:SFC<ContentWrapperProps> = ({ isFetching,isReady, isEmpty, children, err }) =>{
  if(err){
    return (
    <div>{err}</div>
    )
  }
  return (
    <>
      {isFetching&&<div>请求中</div>}
      {
        !isFetching&&(
          isReady
            ? isEmpty
              ? <div>暂无数据</div>
              : children
            : null 
        )
      }
    </>
  )
}
export default ContentWrapper