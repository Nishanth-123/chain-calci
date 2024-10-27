export type PathManagerOptions = {
    context: CanvasRenderingContext2D,
    paths: Path[],
    width: number,
    height: number
}

export type Point = {
    x: number, 
    y: number
}

export type Path = {
    startingPoint : Point,
    endingPoint: Point,
    midPoints: Point[],
    pathType: PathType,
    color: string,
    thickness: number
}

export enum PathType {
    LINE, 
    ARC,
    BEZIER,
    QUADRATIC
}
