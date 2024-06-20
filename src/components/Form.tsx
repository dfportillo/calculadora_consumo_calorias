import { useState, Dispatch } from "react";
import { v4 as uuidv4} from "uuid"
import { categories } from "../data/categorys";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activity-reducers";

type TypeForms = {
    dispatch: Dispatch<ActivityActions>;
}

export default function Form({ dispatch }: TypeForms) {

    const initialStateActivity:Activity = {
        id: uuidv4(),
        category: 1,
        name: "",
        calories: 0,
    }

    const [activity, setActivity] = useState<Activity>(initialStateActivity);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        const isNum = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNum ? +e.target.value : e.target.value,
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:'save-activity',payload:{newActivity:activity}});

        setActivity(initialStateActivity);
    }

    return (
        <>
            <form className=" space-y-5 bg-white shadow-lg p-10 rounded-xl"
                onSubmit={handleSubmit}>
                <div className=" grid grid-cols-1 gap-3">
                    <label htmlFor="category" className=" font-bold">Categoria:</label>
                    <select name=""
                        id="category"
                        className=" border border-slate-300 rounded-lg w-full bg-white"
                        value={activity.category}
                        onChange={handleChange}
                    >
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className=" grid grid-cols-1 gap-3">
                    <label htmlFor="name" className=" font-bold">Actividad:</label>
                    <input
                        id="name"
                        type="text"
                        className=" border border-slate-300 p-2 rounded-lg"
                        placeholder="Ej: Ejercicio, pesas, bicicleta"
                        value={activity.name}
                        onChange={handleChange}
                    />
                </div>

                <div className=" grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className=" font-bold first-letter:uppercase">calorias:</label>
                    <input
                        id="calories"
                        type="number"
                        className=" border border-slate-300 p-2 rounded-lg"
                        placeholder="Ej: 500 cal / 300 cal"
                        value={activity.calories}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    name=""
                    id=""
                    value={activity.category === 1 ? 'guardar comida' : 'guardar ejercicio'}
                    className=" bg-black text-white font-extrabold w-full py-2 rounded-lg hover:bg-lime-600 disabled:opacity-10 uppercase"
                    disabled={!isValidActivity()}
                />

            </form>
        </>
    )
}
