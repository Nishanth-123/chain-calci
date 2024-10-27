import { memo, useCallback, useContext, useEffect, useState } from "react"
import { CalciFunctionProps } from "./typings"
import Dragger from "../common/Dragger"
import EquationField from "../equationField/EquationField"
import NextFunctionField from "../nextFunctionField/NextFunctionField"
import IOPlug from "../common/IOPlug"
import { ChainCalciContext } from "../../App"
import { computeExpression, isValidExpression } from "../../utils/general"


const CalciFunction = ({equation, nextFunction, displayName, id, left: l, top: t}: CalciFunctionProps) => {
    const [expression, setExpression] = useState<string>(equation)
    const [nextFunctionId, setNextFunctionId] = useState<string>(nextFunction)
    const { recalculate } = useContext(ChainCalciContext)
    const [left, setLeft] = useState<number>(l)
    const [top, setTop] = useState<number>(t)
    const { onStageResultUpdated, stageResult } = useContext(ChainCalciContext)

    const handleExpressionChange = useCallback((newExpression: string) => {
        setExpression(newExpression)
        recalculate()
    }, [])

    const handleNextFunctionChange = useCallback((newNextFunctionId: string) => {
        setNextFunctionId(newNextFunctionId)
        recalculate()
    }, [])

    const onDragged = useCallback((deltaX: number, deltaY: number) => {
        setLeft(left + deltaX)
        setTop(top + deltaY)
    }, [left, top])

    useEffect(() => {
        if(stageResult && stageResult.nextFunction === id){
            const output = computeExpression(expression, stageResult.result)
            onStageResultUpdated({result: output, nextFunction: nextFunctionId})
        }
    }, [stageResult])

    return <div className={`flex flex-col items-start w-[235px] h-[251px] border-[1px] rounded-[15px] border-solid px-[20px] pt-[15px] pb-[17px] absolute border-[#DFDFDF] bg-white`} style={{left : `${left}px`, top: `${top}px`}}>
        <div className="flex flex-row justify-start items-center gap-[5px] w-full">
            <Dragger onDrag={onDragged}/>
            <p className="font-inter font-semibold text-[14px] leading-[16.94px] text-[#A5A5A5]">{displayName}</p>
        </div>
        <div className="flex flex-col flex-1 w-full mt-[20px] gap-[17px]">
            <EquationField equation={expression} onEquationChange={handleExpressionChange} />
            <NextFunctionField nextFunctionId={nextFunctionId} onNextFunctionChange={handleNextFunctionChange} currentFunctionId={id}/>
        </div>
        <div className="flex flex-row justify-between w-full">
            <IOPlug showText text="input" textSide="right" key={`io-plug-${id}-input`} id={`io-plug-${id}-input`}/>
            <IOPlug showText text="output" textSide="left" key={`io-plug-${id}-output`} id={`io-plug-${id}-output`}/>
        </div>
    </div>
}

export default memo(CalciFunction)