import { memo, useContext } from "react"
import { NextFunctionFieldProps } from "./typings"
import { ChainCalciContext } from "../../App"

const NextFunctionField = ({currentFunctionId, nextFunctionId, onNextFunctionChange}: NextFunctionFieldProps) => {
    const {functionsData} = useContext(ChainCalciContext)
    
    const handleNextFunctionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onNextFunctionChange(e.target.value)
    }

    

    return <div className="flex flex-col w-full items-start justify-between font-inter text-[12px] font-medium gap-[4px]" style={{color: "#252525"}}>
                <p className="leading-[14.52px]">Next function</p>
                <select name="next_functions" id="next_functions" value={nextFunctionId} disabled className="w-full h-[33px] rounded-[8px] border-[1px] leading-[14.52px] px-[10px] py-[8px] bg-[#D3D3D3] border-[#D3D3D3]">
                    {
                        functionsData.filter(f => f.id !== currentFunctionId)
                        .map(f => (<option value={f.id}>{f.displayName}</option>))
                    }
                    <option value="">{'-'}</option>
                </select>
            </div>
}

export default memo(NextFunctionField)