import { createStore } from "redux";

const initial_state = {
  workout_library: [
    {
      id: 1,
      name: "Boxing Ex1",
      activities: [
        { id: 1, name: "Push Ups", reps: 4 },
        { id: 2, name: "Pull Ups", reps: 4 },
        { id: 3, name: "Squats", reps: 6 },
        { id: 4, name: "Dips", reps: 8 },
      ],
    },
    {
      id: 2,
      name: "Upper Body",
      activities: [
        { id: 1, name: "Push Ups", reps: 4 },
        { id: 2, name: "Pull Ups", reps: 4 },
        { id: 3, name: "Squats", reps: 6 },
        { id: 4, name: "Dips", reps: 8 },
      ],
    },
    {
      id: 3,
      name: "Weight Training",
      activities: [
        { id: 1, name: "Push Ups", reps: 4 },
        { id: 2, name: "Pull Ups", reps: 4 },
        { id: 3, name: "Squats", reps: 6 },
        { id: 4, name: "Dips", reps: 8 },
      ],
    },
  ],
  workout_history: [
    { id: 1, workoutId: 1, duration: 33, sets: 5 },
    { id: 2, workoutId: 2, duration: 3, sets: 4 },
    { id: 3, workoutId: 3, duration: 133, sets: 10 },
    { id: 4, workoutId: 2, duration: 23, sets: 2 },
    { id: 5, workoutId: 3, duration: 53, sets: 4 },
  ],
};

const workoutReducer = (state = initial_state, action) => {
  switch (action.type) {
  }
};

const store = createStore(workoutReducer);
