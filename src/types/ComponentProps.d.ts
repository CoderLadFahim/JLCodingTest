import { ICanvasChild } from "./Reusables"

export interface ICanvasInputProps {
	label: string
	value: string | number
	onChange?: ChangeEventHandler<HTMLInputElement> 
}

export interface ICanvasChildProps extends ICanvasChild {
	dragHandler: Function
}
