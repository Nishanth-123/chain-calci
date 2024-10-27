import { memo, useCallback, useContext, useEffect, useRef, useState } from "react"
import PathManager from "./PathManager"
import { Path, PathType } from "./typings"
import { ChainCalciContext } from "../../App"

const Paths = () => {
    const [canvasContainer, setCanvasContainer] = useState<HTMLCanvasElement>()
    const pathManagerRef = useRef<PathManager>()
    const {functionsData} = useContext(ChainCalciContext)

    const handleCanvasRef = useCallback((element: HTMLCanvasElement) => {
        const dpr = window.devicePixelRatio || 1;
    
        // Get the canvas's display size from CSS
        const displayWidth = element.clientWidth;
        const displayHeight = element.clientHeight;
        
        // Set the canvas internal dimensions to match display size * pixel ratio
        element.width = Math.floor(displayWidth * dpr);
        element.height = Math.floor(displayHeight * dpr);
        
        // Set the canvas element size to the display size
        element.style.width = `${displayWidth}px`;
        element.style.height = `${displayHeight}px`;

        setCanvasContainer(element)
    }, [])

    useEffect(() => {
        if(!canvasContainer || pathManagerRef.current) return

        // for now, adding paths statically, but we can add paths based on the functions data as they have info about the next functions
        // and we can use the data to create paths dynamically
        // we can get the exact point points of the paths by using ids that we had given to io plugs  
        // but for now, adding paths statically as these path types are fixed and dragging function cads is also not allowed 

        const paths: Path[] = [{
            startingPoint: {x: 234.5, y: 387.5 },
            endingPoint: {x: 292.5, y: 387.5 },
            midPoints: [],
            pathType: PathType.LINE,
            color: '#0066FF4D',
            thickness: 7
        },{
            startingPoint: {x: 1196.5, y: 387.5 },
            endingPoint: {x: 1271.5, y: 387.5 },
            midPoints: [],
            pathType: PathType.LINE,
            color: '#0066FF4D',
            thickness: 7
        },{
            startingPoint: {x: 472.5, y: 387.5 },
            endingPoint: {x: 658.5, y: 387.5 },
            midPoints: [{x: 565.5, y: 428.39 }],
            pathType: PathType.QUADRATIC,
            color: '#0066FF4D',
            thickness: 7
        },{
            startingPoint: {x: 661.5, y: 745.5 },
            endingPoint: {x: 850.5, y: 745.5 },
            midPoints: [{x: 756, y: 786.89 }],
            pathType: PathType.QUADRATIC,
            color: '#0066FF4D',
            thickness: 7
        },{
            startingPoint: {x: 1016.5, y: 387.5 },
            endingPoint: {x: 1030.5, y: 745.5 },
            midPoints: [{x: 1065.5, y: 566.5 }],
            pathType: PathType.QUADRATIC,
            color: '#0066FF4D',
            thickness: 7
        },{
            startingPoint: {x: 481.5, y: 745.5 },
            endingPoint: {x: 838.5, y: 387.5 },
            midPoints: [{x: 481.5, y: 387.5 }, {x: 838.5, y: 745.5 }],
            pathType: PathType.BEZIER,
            color: '#0066FF4D',
            thickness: 7
        },]

        pathManagerRef.current = new PathManager({
            paths,
            context: canvasContainer.getContext('2d')!,
            width: canvasContainer.width,
            height: canvasContainer.height
        })
    }, [canvasContainer])

    //we can update paths here based on the functions data
    useEffect(() => {
        
    }, [functionsData])

    return (
        <canvas className="absolute w-full h-screen left-0 top-0 pointer-events-none" ref={handleCanvasRef}/>
    )
}

export default memo(Paths)