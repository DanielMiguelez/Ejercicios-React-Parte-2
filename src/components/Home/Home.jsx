import React from 'react'
import './Home.css'

const Home = (props) => {
    console.log(props)
  return (
    <p className='home'>I am {props.User.name}, and I am {props.User.Age} and I do some interesting things, like : {props.User.hobbies[0]} And also this, {props.User.hobbies[1]}</p>
    
  )
}
export default Home