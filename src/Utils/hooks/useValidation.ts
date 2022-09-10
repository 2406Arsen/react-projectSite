import { useEffect, useState } from 'react'
import { IUseValidationReturn, IValidations, VALIDATION_KEYS } from './model'

export const useValidation = (value: string, validations: IValidations): IUseValidationReturn => {
	const [isEmptyError, setIsEmptyError] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case VALIDATION_KEYS.MIN_LENGTH:
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false)
					break
				case VALIDATION_KEYS.MAX_LENGTH:
					value.length > validations[validation]
						? setMaxLengthError(true)
						: setMaxLengthError(false)
					break
				case VALIDATION_KEYS.IS_EMPTY:
					value ? setIsEmptyError(false) : setIsEmptyError(true)
					break
			}
		}
	}, [value, validations])

	return { isEmptyError, minLengthError, maxLengthError }
}
