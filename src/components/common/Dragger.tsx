import { memo } from "react"
import { DraggerProps } from "./typings"

const Dragger = ({onDrag}: DraggerProps) => {
    return <div className="w-[12px] h-[7.09px] border-dotted border-[3px]" style={{ borderColor: '#CDCDCD' }}></div>
}

export default memo(Dragger)