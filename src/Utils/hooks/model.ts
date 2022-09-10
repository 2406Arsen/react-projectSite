export interface IUseValidationReturn {
	isEmptyError: boolean
	minLengthError: boolean
	maxLengthError: boolean
}
export interface IValidations {
	minLength: number
	maxLength: number
	isEmpty: boolean
}
export enum VALIDATION_KEYS {
	MIN_LENGTH = 'minLength',
	MAX_LENGTH = 'maxLength',
	IS_EMPTY = 'isEmpty',
}

export interface IUseInputReturn extends IUseValidationReturn {
	isDirty: boolean
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}
