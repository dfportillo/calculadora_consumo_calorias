import { Activity, ActivityState } from "../types";

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } } |
    { type: 'restart-app' }


const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : [];
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: '',
};

export function activityReducer(
    state: ActivityState = initialState,
    actions: ActivityActions) {
    if (actions.type === 'save-activity') {
        // este codigo ejecuta los cambios del estado 
        // console.log(actions.payload.newActivity)

        let uppdatedActivities: Activity[] = []

        if (state.activeId) {
            uppdatedActivities = state.activities.map((activity) => activity.id === state.activeId ? actions.payload.newActivity : activity)
        } else {
            uppdatedActivities = [...state.activities, actions.payload.newActivity]
        };

        return {
            ...state,
            activities: uppdatedActivities,
            activeId: '' // para poder reiniciar el activedId 
        };
    }

    if (actions.type === 'set-activeId') {

        return {
            ...state,
            activeId: actions.payload.id
        }
    }

    if (actions.type === 'delete-activity') {

        let uppdatedActivities = state.activities.filter(activity => activity.id !== actions.payload.id)
        return {
            ...state,
            activities: uppdatedActivities

        }
    }

    if (actions.type === 'restart-app') {

        return {
            activities: [],
            activeId: ''
        }
    }

    return state; // siempre ser retorna el state
};