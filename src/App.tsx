import Form from "./components/Form";
import {  useEffect, useMemo, useReducer } from "react";
import { activityReducer,initialState } from "./reducers/activity-reducers";
import ActivityList from "./components/ActivityList";



function App() {
  
  const [state,dispatch] = useReducer(activityReducer,initialState);

  useEffect(() => {
    localStorage.setItem('activities',JSON.stringify(state.activities))
  } ,[state.activities])

  const restartOk = () => useMemo(() =>state.activities.length , [state.activities])


  return (
    <>

      <header className=" bg-lime-400 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center font-bold text-xl text-white uppercase place-items-center">contador de calorias</h1>
          <button className=" first-letter:uppercase text-xl font-bold text-white w-40 h-10 bg-gray-700 hover:bg-gray-500 hover:border-4 border-black items-center rounded-lg disabled:opacity-10"
          disabled={!restartOk()}
          onClick={() => dispatch({type:'restart-app'})}
          >
            reiniciar app
          </button>
        </div>
      </header>
      <section className=" bg-lime-600 py-20 px-5">
        <div className=" max-w-4xl mx-auto">

          <Form 
          dispatch = {dispatch}
          state = {state}
          />

        </div>
      </section>

      <section className=" p-10 max-w-4xl mx-auto">
        <ActivityList 
          activities = {state.activities}
          dispatch = { dispatch}
        />
      </section>
    </>
  )
}

export default App
