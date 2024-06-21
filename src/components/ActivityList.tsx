import { Activity } from "../types";
import { categories} from '../data/categorys';
import { useMemo } from "react";

type ActivityListProps = {
    activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {

    const IdentifyActivities = useMemo(() => // se tiene que hacer un doble callback, el primero es utilizado solamente para use memo
        (category:Activity['category']) => 
            console.log(category) ,[activities])

    console.log(activities);

    return (
        <>
            <h2 className=" text-4xl font-bold text-slate-600 text-center pb-4">
                comida y actividades
            </h2>
            {
                activities.map((activitiy) => 
                    <div key={activitiy.id} className=" px-5 py-10 flex justify-between bg-white">
                        <div className=" space-y-2">
                            <p>
                                {(activitiy.category)}
                            </p>
                            <p className=" text-2xl font-bold pt-5">{activitiy.name}</p>
                            <p className=" text-4xl font-black text-lime-500">
                                {activitiy.calories}{''}
                                <span>calories</span>
                            </p>
                        </div>
                        <div>

                        </div>

                    </div>
                )
            }
        </>
    )
}