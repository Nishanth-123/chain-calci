export type DraggerProps = {
    onDrag: (deltaX: number, deltaY: number) => void
}

export type IOPlugProps = {
    showText: boolean,
    text: string,
    textSide?: 'left' | 'right',
    id: string
}

export type IOFieldProps = {
    borderColor: string,
    dividerColor: string,
    fieldAlign: 'left' | 'right',
    onValueChange: undefined | ((value: number) => void),
    value: number
}

