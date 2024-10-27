import { Path, PathManagerOptions, PathType } from "./typings"

class PathManager {
    private context: CanvasRenderingContext2D
    private paths: Path[]
    private width: number
    private height: number

    constructor(options: PathManagerOptions){
        this.paths = options.paths
        this.context = options.context
        this.width = options.width
        this.height = options.height
        this.drawOrUpdatePaths()
    }

    updatePaths = (paths: Path[]) => {
        this.paths = paths
        this.drawOrUpdatePaths()
    }

    drawOrUpdatePaths = () => {
        this.context.clearRect(0, 0, this.width, this.height);
        this.paths.forEach(path => {
            this.drawPath(path)
        })
    }

    private drawPath = (path: Path) => {
        const devicePixelRatio = window.devicePixelRatio || 1
        const ctx = this.context
        ctx.beginPath()
        ctx.strokeStyle = path.color
        ctx.lineWidth = path.thickness
        ctx.setLineDash([])
        ctx.moveTo(path.startingPoint.x * devicePixelRatio, path.startingPoint.y * devicePixelRatio)

        switch(path.pathType){
            case PathType.LINE: {
                ctx.lineTo(path.endingPoint.x * devicePixelRatio, path.endingPoint.y * devicePixelRatio)
                ctx.stroke()
                break;
            }
            case PathType.QUADRATIC: {
                ctx.quadraticCurveTo(path.midPoints[0].x * devicePixelRatio , path.midPoints[0].y * devicePixelRatio, path.endingPoint.x * devicePixelRatio, path.endingPoint.y * devicePixelRatio)
                ctx.stroke()
                break;
            }
            case PathType.BEZIER: {
                ctx.bezierCurveTo(path.midPoints[0].x * devicePixelRatio, path.midPoints[0].y * devicePixelRatio, path.midPoints[1].x * devicePixelRatio, path.midPoints[1].y * devicePixelRatio, path.endingPoint.x * devicePixelRatio, path.endingPoint.y * devicePixelRatio)
                ctx.stroke()
                break;
            }
        }
    }
}

export default PathManager