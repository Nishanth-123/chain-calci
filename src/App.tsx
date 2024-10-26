import { createContext, memo, useCallback, useMemo, useState } from 'react';
import './App.css';
import { StageResult, ChainCalciContextType } from './typings';
import EndInputField from './components/endInputField/EndInputField';
import CalciFunctions from './components/calciFunctions/CalciFunctions';
import { ICalciFunction } from './components/calciFunctions/typings';
import EndResultDisplay from './components/endResultDisplay/EndResultDisplay';



export const ChainCalciContext = createContext<ChainCalciContextType>({
  stageResult: undefined,
  functionsData: [],
  recalculate: () => {},
  onStageResultUpdated: () => { }
})

const App = () => {

  const [stageResult, setStageResult] = useState<StageResult>()
  const [functionsData, setFunctionsData] = useState<ICalciFunction[]>([])
  const [calculationId, setCalculationId] = useState<number>(NaN)

  const startingFunctionId = useMemo(() => {
    return functionsData.find((f) => f.startingPoint)?.id
  }, [functionsData])

  const onStageResultUpdated = useCallback((result: StageResult) => {
    setStageResult(result)
  }, [])

  const onFunctionsDataFetched = useCallback((functionsData: ICalciFunction[]) => {
    setFunctionsData(functionsData)
  }, [])

  const recalculate = useCallback(() => {
    let rnId: number = Math.random()
    while(rnId === calculationId) rnId = Math.random()
    setCalculationId(rnId)
  }, [calculationId])

  const stageResultContextValue = useMemo(() => {
    return {
      stageResult,
      functionsData,
      recalculate,
      onStageResultUpdated
    }
  }, [onStageResultUpdated, stageResult, functionsData, recalculate])

  const endInputDisplayName = useMemo(() => ('Initial value of x'), [])
  const endResultDisplayName = useMemo(() => ('Final Output y'), [])

  return (
    <div className='w-full h-screen'>
      <ChainCalciContext.Provider value={stageResultContextValue}>
        <EndInputField displayName={endInputDisplayName} nextFunctionId={startingFunctionId} calculationId={calculationId}/>
        <CalciFunctions onFunctionsDataUpdated={onFunctionsDataFetched}/>
        <EndResultDisplay displayName={endResultDisplayName}/>
      </ChainCalciContext.Provider>      
    </div>
  )
}

export default memo(App);
