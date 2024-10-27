import { memo, useCallback, useEffect, useState } from "react"
import { EquationFieldProps } from "./typings"
import { isValidExpression } from "../../utils/general"

const EquationField = ({equation, onEquationChange}: EquationFieldProps) => {

    const [equationValue, setEquationValue] = useState<string>("")

    const [error, setError] = useState<boolean>(false)

    const handleEquationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newExpression = e.target.value
        setEquationValue(newExpression)
        if(!isValidExpression(newExpression)){
            setError(true)
            return
        }
        setError(false)
        onEquationChange(newExpression)
    }, [])

    useEffect(() => {
        setEquationValue(equation)
    }, [equation])


    return <div className="flex flex-col w-full items-start justify-between font-inter text-[12px] font-medium gap-[4px]" style={{color: "#252525"}}>
        <p className="leading-[14.52px]">Equation</p>
        <input className={`w-full h-[33px] rounded-[8px] border-[1px] bg-white p-[10px] leading-[14.52px] focus:outline-none`} type="text" value={equationValue} onChange={handleEquationChange} style={{ borderColor: error ? '#dc2626' : '#D3D3D3'}}/>
    </div>
}

export default memo(EquationField)