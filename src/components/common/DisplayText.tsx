import { memo } from "react"

export type DisplayTextProps = {
    text: string,
    styles: {
        textClassName: string,
        containerClassName: string
    }
}

const DisplayText = ({styles, text}: DisplayTextProps) => {
    return (
        <div className={`${styles.containerClassName} flex flex-col items-center justify-center`}>
            <p className={`${styles.textClassName} `}>{text}</p>
        </div>
    )
}

export default memo(DisplayText)

