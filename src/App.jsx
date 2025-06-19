import React from 'react'
import Header from './Comonents/Header'
import './App.css/'
import { Typography } from '@mui/material'
import Carder from './Comonents/Carder'

const courses=[
  {
    image:"https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png",
    title:"Frontend"

  },
  {
    image:"https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1",
    title:"MERN Stack"

  },
  {
    image:"https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
    title:"Backend"

  }
]

const App = () => {
  return (
    <div align="center" margin="20px">
      <Header/>
      
      <Typography style={{marginTop:"30px"}} align="center" variant="h3" color="warning">Welcome to Google</Typography>
      <Typography color='dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic esse nostrum omnis facilis illum neque provident atque sunt sapiente.</Typography>
     <Typography variant='h3' margin="30px">Our Courses</Typography> <div style={{display:"flex", flexWrap:"wrap", gap:"16px", margin:"20px" ,alignContent:"center", justifyContent:"center"}}>
        {courses.map((course,index)=><Carder key={index} image={course.image} title={course.title}/>)}
      </div>
      
      <h2 variant="h2" style={{margin:"30px"}}> Made with 💕❤️ by Ur Dearest Vamsi 😈🔥🐦‍🔥💀</h2>
       
      
    </div>
    
    
  )
}

export default App
