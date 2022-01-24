import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={370}
    height={460}
    viewBox="0 0 392 470"
    backgroundColor="#c0c0"
    foregroundColor="#33ace1"
    borderRaduis="10px"
    {...props}
  >
     
    <rect x="-4" y="-10" rx="3" ry="3" width="394" height="40" /> 
    <rect x="3" y="456" rx="3" ry="3" width="95" height="11" /> 
    <rect x="301" y="409" rx="3" ry="3" width="33" height="0" /> 
    <rect x="-36" y="61" rx="3" ry="3" width="434" height="73" /> 
    <rect x="-32" y="484" rx="3" ry="3" width="178" height="6" /> 
    <rect x="-27" y="161" rx="0" ry="0" width="438" height="279" /> 
    <circle cx="378" cy="456" r="11" />
  </ContentLoader>
)

export default MyLoader