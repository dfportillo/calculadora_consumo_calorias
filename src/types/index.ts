import { Dispatch } from "react";
import { ActivityActions } from "../reducers/activity-reducers";

export type Category = {
    id:number;
    name:string;
};

export type Activity = {
    id:string;
    category:number;
    name:string;
    calories:number
};

export type TypeForms = {
    dispatch: Dispatch<ActivityActions>;
}

export type ActivityState = {
    activities: Activity[];
    activeId: Activity['id'];
};