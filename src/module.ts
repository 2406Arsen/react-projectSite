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
export interface Ilogin {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveUser: React.Dispatch<React.SetStateAction<IFormInputValues>>
}
export interface INavigation {
    isAuth: boolean
    activeUser: IFormInputValues
}
export interface INavigationUser {
    activeUser: IFormInputValues
}