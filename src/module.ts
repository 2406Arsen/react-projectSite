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
    activeUser: IActiveUser
}
export interface IActiveUser {
    name: string,
    email: string,
    password: string
}
export interface INavigation {
    isAuth: boolean
    activeUser: IFormInputValues
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
export interface INavigationUser {
    activeUser: IFormInputValues
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ISelfClientProps {
    fullName: string,
    id: number, 
    comment: string,
    job: string,
    img: string
}
export interface ISelfClient {
    userCom: ISelfClientProps
}