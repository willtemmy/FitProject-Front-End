import React from 'react'
import styles from "./Home.module.css"
import WorkoutList from './WorkoutList'

const Home = (props) => {
  return (
    <div className={styles.home}>
      <h1>Workout!</h1>
      <p>Here's what you have for the day</p>

      <WorkoutList changeView={props.changeView}/>
    </div>
  )
}

export default Home