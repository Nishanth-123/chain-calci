import { ICalciFunction } from "../components/calciFunctions/typings";

export const getFunctions = async (): Promise<ICalciFunction[]> => {
    return Promise.resolve([
        {
            equation: "x^2",
            id: "1", // we can also give some random id
            displayName: "Function: 1",
            nextFunction: "2",
            startingPoint: true,
            left: 265, // its a blunder to hardcode the position of the function, but we can do it for now
            top: 162
        },
        {
            equation: "2x+4",
            id: "2", // we can also give some random id
            displayName: "Function: 2",
            nextFunction: "4",
            left: 631, // its a blunder to hardcode the position of the function, but we can do it for now
            top: 162
        },
        {
            equation: "x^2+20",
            id: "3", // we can also give some random id
            displayName: "Function: 3",
            nextFunction: "",
            left: 989, // its a blunder to hardcode the position of the function, but we can do it for now
            top: 162
        },
        {
            equation: "x-2",
            id: "4", // we can also give some random id
            displayName: "Function: 4",
            nextFunction: "5",
            left: 454, // its a blunder to hardcode the position of the function, but we can do it for now
            top: 520
        },
        {
            equation: "x/2",
            id: "5", // we can also give some random id
            displayName: "Function: 5",
            nextFunction: "3",
            left: 823, // its a blunder to hardcode the position of the function, but we can do it for now
            top: 520
        },
    ])
}
