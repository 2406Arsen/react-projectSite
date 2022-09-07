export interface IButtonProps {
    width: number,
    height: number,
    content: string,
    click: () => void
}
export interface IFormInputValues {
    name: string,
    email: string,
    password: string
}
export interface ISignInFormValues {
    name: string,
    password: string
}