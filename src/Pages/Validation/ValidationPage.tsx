import {
    Formik, Form, Field,
    // ErrorMessage
} from "formik"

import * as yup from 'yup'


interface IFormikInitialValues {
    firstName: string
    lastName: string
    password: string
    email: string
    disableEmail: boolean
}

const formikInitialValues: IFormikInitialValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    disableEmail: false
}

const ValidationPage = () => {
    const validationSchema = yup.object({
        firstName: yup.string().required().min(5),
        lastName: yup.string().required('Last Name field is required !!!').min(5),
        password: yup.string().matches(/^(?=.*[a-z].*[A-Z]).{8}$/, {
            message: 'password must be valid'
        }),
        email: yup.string().email().when('disableEmail', {
            is: false,
            then: yup.string().email().required('Please enable --> disableEmail <-- ')
        }),
        disableEmail: yup.boolean()
    })
    // console.log("🚀 ~ file: ValidationPage.tsx ~ line 29 ~ ValidationPage ~ validationSchema", validationSchema)
    return (
        <Formik
            initialValues={formikInitialValues}
            onSubmit={(values) => console.log(values, '=== values ===')}
            validationSchema={validationSchema}
            validateOnMount
        >
            {
                ({ values, errors, isValid, touched, dirty }) => (
                    <Form style={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gridRowGap: '10px'
                    }}>
                        <p>{JSON.stringify(values.disableEmail, null, 2)} values</p>
                        <br />
                        <p>{JSON.stringify(errors, null, 2)} errors</p>
                        <br />
                        {/* <p>{JSON.stringify(touched, null, 2)} touched</p> */}
                        {/* <p>{JSON.stringify(dirty, null, 2)} dirty</p> */}
                        {/* <p>{JSON.stringify(isValid)} isValid</p> */}

                        <Field name='firstName' value={values.firstName} placeholder='first name...' />
                        {/* <ErrorMessage name="firstName" render={() => <span>aaaaa</span>} /> */}
                        <Field name='lastName' value={values.lastName} placeholder='last name...' />
                        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                        <Field name='password' value={values.password} placeholder='password' type='password' />
                        <Field name='email' value={values.email} placeholder='email' />
                        {touched.email && errors.email && <span>{errors.email}</span>}
                        <label >
                            disable email
                            <Field name='disableEmail' type='checkbox' />
                        </label>
                        <button type="submit">submit</button>
                    </Form>
                )
            }

        </Formik >
    )
}

export default ValidationPage