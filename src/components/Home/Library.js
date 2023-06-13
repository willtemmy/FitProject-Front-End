import React from "react";

import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Library = (props) => {
  // const [workouts, setWorkouts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9292/workouts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setWorkouts(data);
  //     });
  // }, []);


  const library = useSelector((state) => state.workout_library);

  return (
    <div className={styles.library}>
      <h1>Library</h1>

      <div className={styles.workoutList}>
        <button
          onClick={() => {
            props.changeView("Create Workout");
          }}
        >
          Create Workout
        </button>

        {/* {filteredExercises.map((exercise) => (
          <div key={exercise.id}>
            <h3>{exercise.exercise_name}</h3>
            <p>Sets: {exercise.sets} </p>
            <p>Reps: {exercise.reps} </p>
          </div>
        ))} */}

        {library.map((itm) => (
          <button
            onClick={() => {
              props.changeView("woi" + itm.id);
            }}
            className={styles.libButton}
            key={itm.id}
          >
            {itm.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Library;
