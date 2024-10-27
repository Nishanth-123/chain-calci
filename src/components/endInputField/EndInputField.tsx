import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { ChainCalciContext } from "../../App"
import { EndInputFieldProps } from "./typings"
import DisplayText from "../common/DisplayText"
import IOField from "../common/IOField"


const EndInputField = ({displayName, nextFunctionId, calculationId}: EndInputFieldProps) => {
    const {onStageResultUpdated} = useContext(ChainCalciContext)
    const [input, setInput] = useState<number>(2)

    const displayNameStyles = useMemo(() => {
        return {
            textClassName: 'font-semibold text-white text-[12px] font-inter leading-[14.52px]',
            containerClassName: 'w-full h-[22px] text-center bg-[#E29A2D] rounded-[14px] border-[1px] border-solid border-[#E29A2D]'
        }
    }, [])

    const onInputValueChange = useCallback((input: number) => {
        onStageResultUpdated({result: input, nextFunction: nextFunctionId ?? ''})
        setInput(input)
    }, [onStageResultUpdated, nextFunctionId])

    useEffect(() => {
        if(calculationId && !Number.isNaN(input)){
            onStageResultUpdated({result: input, nextFunction: nextFunctionId ?? ''})
        }
    }, [calculationId, input])

    return (
        <div className='flex flex-col w-[115px] h-[78px] justify-between absolute left-[141px] top-[335px] bg-white'>
            <DisplayText text={displayName} styles={displayNameStyles}/>
            <IOField borderColor="#FFC267" dividerColor="#FFEED5" value={input} onValueChange={onInputValueChange} fieldAlign="left" />
        </div>
    )
}

export default memo(EndInputField)