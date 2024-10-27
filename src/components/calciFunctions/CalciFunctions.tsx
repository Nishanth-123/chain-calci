import { memo, useEffect, useState } from "react"
import { CalciFunctionsProps, ICalciFunction } from "./typings"
import { getFunctions } from "../../service/functions"
import CalciFunction from "./CalciFunction"

const CalciFunctions = ({onFunctionsDataUpdated}: CalciFunctionsProps) => {
    const [functions, setFunctions] = useState<ICalciFunction[]>([]) 

    useEffect(() => {

        // below commented is a way if we had to fetch data from server asynchrously
        /*
            getFunctions().then((functions) => {
                setFunctions(functions)
                onFunctionsDataUpdated(functions)
            })
        */
        const data = getFunctions()
        setFunctions(data)
        onFunctionsDataUpdated(data)
        
        // eslint-disable-next-line
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