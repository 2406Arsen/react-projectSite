import { useValidation } from './useValidation'
import { useState } from 'react'
import { IUseInputReturn, IValidations } from './model'

export const useInput = (initialValue: string, validations: IValidations): IUseInputReturn => {
	const [value, setValue] = useState(initialValue)
	const [isDirty] = useState(true)
	const valid = useValidation(value, validations)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {}

	return { value, onChange, onBlur, isDirty, ...valid }
}
