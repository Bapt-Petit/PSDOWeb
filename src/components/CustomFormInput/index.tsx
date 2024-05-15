import {HTMLInputTypeAttribute} from "react";

interface Types{
    type: HTMLInputTypeAttribute,
    name: string,
    labelVal: string,
    required?: boolean,
    showed?: boolean
}
export default function CustomFormInput({type, name, labelVal, required, showed = true}: Types){
    return (
        <div className={`${showed ? 'flex' : 'hidden'} flex-col items-center gap-3`}>
            <label htmlFor={name} className={"w-72 text-center font-medium"}>{labelVal}</label>
            <input type={type} id={name} name={name} required={required} className={"text-center rounded w-52 p-0.5 shadow-custom_shadow"}/>
        </div>
    )
}