export interface ICalciFunction {
    equation: string
    nextFunction: string,
    id: string,
    displayName: string,
    startingPoint?: boolean,
    left: number, 
    top: number
}

export type CalciFunctionProps = {
    equation: string,
    nextFunction: string,
    id: string,
    displayName: string,
    left: number,
    top: number
}

export type CalciFunctionsProps = {
    onFunctionsDataUpdated : (data: ICalciFunction[]) => void
}