import { memo } from "react"
import { IOPlugProps } from "./typings"

const IOPlug = ({showText, text, textSide}: IOPlugProps) => {
    return (
        <div className="flex flex-row h-[15px] items-center gap-[4px]">
            {
                showText && textSide !== 'right' && (
                    <p className="font-inter font-medium text-[10px] leading-[12.1px]">{text}</p>
                )
            }
            <div className="w-[15px] h-full border-[2px] rounded-[50%] flex items-center justify-center" style={{borderColor: '#DBDBDB'}}>
                <div className="w-[8px] h-[8px] rounded-[50%]" style={{backgroundColor: '#DBDBDB'}}/>
            </div> 
            {
                showText && textSide === 'right' && (
                    <p className="font-inter font-medium text-[10px] leading-[12.1px]">{text}</p>
                )
            }   
        </div>
    )
}

export default memo(IOPlug)