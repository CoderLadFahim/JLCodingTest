import {ICanvasChild} from './Reusables'

export interface ICanvasInputProps {
	label: string
	value: string | number
	onChange?: ChangeEventHandler<HTMLInputElement>
	onEnter?: ChangeEventHandler<HTMLInputElement>
}

export interface ICanvasToolProps {
	type: TCanvasChildType
	icon: Function
}

export interface ICanvasChildProps extends ICanvasChild {
	dragHandler: Function
}
