import { memo, useCallback } from "react"
import { EquationFieldProps } from "./typings"

const EquationField = ({equation, onEquationChange}: EquationFieldProps) => {

    const handleEquationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        //put some validation here if needed
        onEquationChange(e.target.value)
    }, [])

    return <div className="flex flex-col w-full items-start justify-between font-inter text-[12px] font-medium gap-[4px]" style={{color: "#252525"}}>
        <p className="leading-[14.52px]">Equation</p>
        <input className="w-full h-[33px] rounded-[8px] border-[1px] bg-white p-[10px] leading-[14.52px] focus:outline-none" type="text" value={equation} onChange={handleEquationChange} style={{borderColor: '#D3D3D3'}}/>
    </div>
}

export default memo(EquationField)