import { ICalciFunction } from "./components/calciFunctions/typings"

export type StageResult = {
    result: number,
    nextFunction: string
}
export type ChainCalciContextType = {
    stageResult: StageResult | undefined,
    functionsData: ICalciFunction[],
    recalculate: () => void
    onStageResultUpdated: (StageResult: StageResult) => void
}