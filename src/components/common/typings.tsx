export type DraggerProps = {
    onDrag: (deltaX: number, deltaY: number) => void
}

export type IOPlugProps = {
    showText: boolean,
    text: string,
    textSide?: 'left' | 'right',
    id: string
}