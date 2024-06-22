import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type calorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: calorieTrackerProps) {

    const caloiresConsumed = useMemo(() =>
        activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0)
        , [activities])

    const caloriesBurnd = useMemo(() => 
        activities.reduce((total,activity) => activity.category === 2 ? total + activity.calories : total,0)
        ,[activities])

    const totalCalories = useMemo(() => caloiresConsumed-caloriesBurnd ,[activities])

    return (
        <>
            <h2 className=" text-white font-bold text-4xl text-center first-letter:uppercase">resumen de calorias</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                
                <CalorieDisplay 
                    calories={caloiresConsumed}
                    text="Consumidas"
                />

                <CalorieDisplay 
                    calories={caloriesBurnd}
                    text="Ejercicio"
                />

                <CalorieDisplay 
                    calories={totalCalories}
                    text="total"
                />
            </div>

        </>
    )
}
