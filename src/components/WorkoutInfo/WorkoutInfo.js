import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./WorkoutInfo.module.css";
import Modal, { CloseIcon } from "../UI/Modal";

const WorkoutInfo = (props) => {
  const [exercises, setExercises] = useState([]);
  // const [exerciseName, setExerciseName] = useState("");
  // const [sets, setSets] = useState("");
  // const [reps, setReps] = useState("");
 

  // useEffect(() => {
  //   const fetchExercises = async () => {
  //     try {
  //       const response = await fetch('http://localhost:9292/exercise');
  //       const data = await response.json();
  //       setExercises(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchExercises();
  // }, []);

  // const filteredExercises = exercises.filter(
  //   (exercise) =>
  //     exercise.exercise_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     exercise.exercise_type.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleDeleteWorkout = (workoutId) => {
  //   fetch(`http://localhost:9292/workouts/${workoutId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Workout deleted");
  //         // Remove the deleted workout from the state
  //         setWorkouts((prevPlans) =>
  //           prevPlans.filter((plan) => plan.workout_id !== workoutId)
  //         );
  //       } else {
  //         throw new Error("Error deleting workout plan");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       if (error.response) {
  //         console.log("Response status:", error.response.status);
  //         console.log("Response body:", error.response.body);
  //       }
  //     });      
  // };
  // fetch("http://localhost:9292/workouts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(workoutPlan),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setExerciseName("");
  //       setSets("");
  //       setReps("");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const [delWorkModal, setDelWorkModal] = useState(false);
  const workout = useSelector((state) => state.workout_library).find(
    (itm) => itm.id == props.workoutId
  );
  const workoutHistory = useSelector((state) => state.workout_history).filter(
    (itm) => itm.workoutId == props.workoutId
  );
  const dispatch = useDispatch();

  const workoutAvg =
    workoutHistory.length > 0
      ? workoutHistory.reduce((a, b) => a + b.duration, 0) /
        workoutHistory.length
      : 0;

  const deleteWorkoutHandler = () => {
    props.changeView("Home");
    dispatch({ type: "DELETE_WORKOUT_FROM_LIBRARY", payload: props.workoutId });
  };

  const recentReps = workoutHistory.length > 0 ? workoutHistory[0].sets : 0;
  return (
    <div className={styles.workoutInfo}>
      {delWorkModal && (
        <Modal>
          <div className={styles.modal}>
            Are you sure you want to delete this workout?
            <div className={styles.flexBut}>
              <button onClick={deleteWorkoutHandler} className={styles.delete}>
                Delete Workout
              </button>
              <button
                onClick={() => {
                  setDelWorkModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className="header">
        <button
          onClick={() => {
            props.changeView("Library");
          }}
        >
          <CloseIcon size="1.5rem" />
        </button>
        <h1>{workout.name}</h1>
      </div>
      <div className={styles.activities}>
        {workout.activities.map((itm) => (
          <div className={styles.activity} key={itm.id}>
            <div className={styles.number}>{itm.reps}</div>
            <div className={styles.name}>{itm.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.flex}>
        <div className={styles.flexer}>
          <button
            className={styles.delButton}
            onClick={() => {
              setDelWorkModal(true);
            }}
          >
            Delete Workout
          </button>
          <button
            className={styles.editButton}
            onClick={() => {
              props.changeView("ewo" + props.workoutId);
              // () => handleDeleteWorkout(workout_id)
            }}
          >
            Edit Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInfo;
