import { Activity, ActivityState } from "../types";
import { categories} from '../data/categorys';
import { useMemo,Dispatch } from "react";
import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/outline';
import { ActivityActions } from "../reducers/activity-reducers";

type ActivityListProps = {
    activities: Activity[];
    dispatch:Dispatch<ActivityActions>;
    state:ActivityState
}

export default function ActivityList({ activities,dispatch,state }: ActivityListProps) {

    const identifyActivities = useMemo(() => // se tiene que hacer un doble callback, el primero es utilizado solamente para use memo
        (category:Activity['category']) => 
            categories.map((cat) => cat.id === category ? cat.name : '') 
        ,[activities])
        

    return (
        <>
            <h2 className=" text-4xl font-bold text-slate-600 text-center pb-4">
                comida y actividades
            </h2>
            {
                (activities.length !==0) ? 
                
                
                    activities.map((activity) => 
                        <div key={activity.id} className={state.activeId === activity.id? "px-5 py-10 flex mt-5 justify-between bg-white shadow-2xl border-4 border-gray-500 rounded-md":"px-5 py-10 flex mt-5 justify-between bg-white border-4 rounded-md"}>
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
                            <div className=" flex gap-5 items-center">
                                <button 
                                onClick={() => dispatch({type:'set-activeId',payload:{id:activity.id}})}>
                                    <PencilSquareIcon 
                                        className=" h-8 w-8 text-gray-800"
                                    />
                                </button>
    
                                <button className=" h-12 w-12 bg-red-600 rounded-full flex items-center justify-center"
                                onClick={() => dispatch({type:'delete-activity',payload:{id:activity.id}})}>
                                    <TrashIcon 
                                        className=" h-8 w-8 text-white"
                                    />
                                </button>
    
                            </div>
    
                        </div>
                    )
                
                : <h4 className=" text-2xl font-bold text-slate-400 text-center pb-4">
                no hay comidas ni actividades
                </h4>
            }
            
        </>
    )
}