import { memo, useEffect, useState } from "react"
import { CalciFunctionsProps, ICalciFunction } from "./typings"
import { getFunctions } from "../../service/functions"
import CalciFunction from "./CalciFunction"

const CalciFunctions = ({onFunctionsDataUpdated}: CalciFunctionsProps) => {
    const [functions, setFunctions] = useState<ICalciFunction[]>([]) 

    useEffect(() => {
        getFunctions().then((functions) => {
            setFunctions(functions)
            onFunctionsDataUpdated(functions)
        })
    }, [])

    return <>
        {functions.map(
            (func) => (
                <CalciFunction 
                    equation={func.equation}
                    nextFunction={func.nextFunction}
                    displayName={func.displayName}
                    id={func.id}
                    key={func.id}
                    left={func.left}
                    top={func.top}
                />
        ))}
    </>
}

export default memo(CalciFunctions)