import { Activity } from "../types";
import { categories} from '../data/categorys';
import { useMemo } from "react";

type ActivityListProps = {
    activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {

    const identifyActivities = useMemo(() => // se tiene que hacer un doble callback, el primero es utilizado solamente para use memo
        (category:Activity['category']) => 
            categories.map((cat) => cat.id === category ? cat.name : '') 
        ,[activities])

    console.log(activities);

    return (
        <>
            <h2 className=" text-4xl font-bold text-slate-600 text-center pb-4">
                comida y actividades
            </h2>
            {
                activities.map((activity) => 
                    <div key={activity.id} className=" px-5 py-10 flex mt-5 justify-between bg-white">
                        <div className=" space-y-2 relative">
                            <p className={` absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1?'bg-lime-500':'bg-orange-500'}`}>
                                {identifyActivities(activity.category)}
                            </p>
                            <p className=" text-2xl font-bold pt-5">{activity.name}</p>
                            <p className=" text-4xl font-black text-lime-500">
                                {activity.calories}{' '}
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