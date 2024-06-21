import Form from "./components/Form";
import {  useReducer } from "react";
import { activityReducer,initialState } from "./reducers/activity-reducers";
import ActivityList from "./components/ActivityList";



function App() {
  
  const [state,dispatch] = useReducer(activityReducer,initialState);


  return (
    <>

      <header className=" bg-lime-400 py-3">
        <div className=" max-w-4xl mx-auto flex">
          <h1 className=" text-center font-bold text-xl text-white uppercase">contador de calorias</h1>
        </div>
      </header>
      <section className=" bg-lime-600 py-20 px-5">
        <div className=" max-w-4xl mx-auto">

          <Form 
          dispatch = {dispatch}
          />

        </div>
      </section>

      <section className=" p-10 max-w-4xl mx-auto">
        <ActivityList 
          activities = {state.activities}
        />
      </section>
    </>
  )
}

export default App
