import { Activity } from "../types";

export type ActivityActions = {
    type:'save-activity',
    payload:{newActivity:Activity}
};

type ActivityState = {
    activities: Activity[];
};

export const initialState:ActivityState = {
    activities:[]
};

export function activityReducer (state:ActivityState=initialState , actions:ActivityActions) {
    if(actions.type ==='save-activity'){
        // este codigo ejecuta los cambios del estado 

        console.log('desde el type save activity')
    }
};