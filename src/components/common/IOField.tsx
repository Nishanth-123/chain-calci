import { memo, useCallback } from "react"
import IOPlug from "./IOPlug"

export type IOFieldProps = {
    borderColor: string,
    dividerColor: string,
    fieldAlign: 'left' | 'right',
    onValueChange: undefined | ((value: number) => void),
    value: number
}

const IOField = ({borderColor, dividerColor, fieldAlign, value, onValueChange }: IOFieldProps) => {

    const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(onValueChange){
            onValueChange(Number(e.target.value))
        }
    }, [onValueChange])

    return (
        <div className="w-full h-[50px] flex items-center border-[2px] border-solid rounded-[15px] overflow-hidden" style={{borderColor: borderColor}}>
            {
                (fieldAlign === 'right') && <div className="w-[45px] h-full border-r-[1px] flex items-center justify-center" style={{borderColor: dividerColor}}>
                    <IOPlug showText={false} text="" key={`io-plug-user-input`} id={`io-plug-user-input`}/>
                    </div>
            }
            <div className="flex flex-1 h-full py-[12px] px-[18px]">
                <input 
                    type="number" 
                    className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-full font-inter font-bold text-[18px] border-none focus:outline-none leading-[21.78px] ${fieldAlign === 'right'? 'text-right' : 'text-left'}`} 
                    value={value ?? ''} 
                    onChange={handleValueChange} 
                />
            </div>
            {
                (fieldAlign === 'left') && <div className="w-[45px] h-full border-l-[1px] flex items-center justify-center" style={{borderColor: dividerColor}}>
                    <IOPlug showText={false} text="" key={`io-plug-user-output`} id={`io-plug-user-output`}/>
                </div>
            }
            

        </div>
    )
}

export default memo(IOField)

// text-center text-lg font-bold border-none focus:outline-none 