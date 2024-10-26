import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { ChainCalciContext } from "../../App"
import { EndResultDisplayProps } from "./typings"
import DisplayText from "../common/DisplayText"
import IOField from "../common/IOField"


const EndResultDisplay = ({displayName}: EndResultDisplayProps) => {
    const {stageResult, onStageResultUpdated} = useContext(ChainCalciContext)
    const [result, setResult] = useState<number>(NaN)

    const displayNameStyles = useMemo(() => {
        return {
            textClassName: 'font-semibold text-white text-[12px] font-inter leading-[14.52px]',
            containerClassName: 'w-full h-[22px] text-center bg-[#4CAF79] rounded-[14px] border-[1px] border-solid border-[#4CAF79]'
        }
    }, [])

    const onInputValueChange = useCallback((input: number) => {

    }, [onStageResultUpdated])

    const formatValue = useCallback((value: number): number => {
        if(Math.floor(value) === Math.ceil(value)) return Number(value.toFixed(0))
        return Number(value.toFixed(2))
    }, [])

    useEffect(() => {
        setResult(formatValue(stageResult?.result ?? NaN))
    }, [stageResult])

    return (
        <div className='flex flex-col w-[115px] h-[78px] justify-between absolute top-[335px] left-[1239px]'>
            <DisplayText text={displayName} styles={displayNameStyles}/>
            <IOField borderColor="#2DD179" dividerColor="#C5F2DA" value={result} onValueChange={onInputValueChange} fieldAlign="right"/>
        </div>
    )
}

export default memo(EndResultDisplay)