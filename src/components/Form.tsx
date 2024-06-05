import { categories } from "../data/categorys";
import { useState } from "react";

export default function Form() {
    return (
        <>
            <form className=" space-y-5 bg-white shadow-lg p-10 rounded-xl">
                <div className=" grid grid-cols-1 gap-3">
                    <label htmlFor="category" className=" font-bold">Categoria:</label>
                    <select name="" 
                            id="category"
                            className=" border border-slate-300 rounded-lg w-full bg-white">
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
                        <label htmlFor="activity" className=" font-bold">Actividad:</label>
                        <input 
                            id="activity" 
                            type="text"
                            className=" border border-slate-300 p-2 rounded-lg"
                            placeholder="Ej: Ejercicio, pesas, bicicleta"/>
                </div>
        
                <div className=" grid grid-cols-1 gap-3">
                        <label htmlFor="calories" className=" font-bold first-letter:uppercase">calorias:</label>
                        <input 
                            id="calories" 
                            type="number"
                            className=" border border-slate-300 p-2 rounded-lg"
                            placeholder="Ej: 500 cal / 300 cal"/>
                </div>

                <input 
                    type="submit" 
                    name="" 
                    id=""
                    value={'Guardar comida o guardar ejercicio'}
                    className=" bg-black text-white font-extrabold w-full py-2 rounded-lg hover:bg-lime-600" />
        
            </form>
        </>
    )
}
