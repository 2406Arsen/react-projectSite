import React from 'react'
import { IButtonProps } from '../../module'

const Button: React.FC<IButtonProps> = ({ width, height, content, click }) => {
    return (
        <button disabled onClick={click} className='standartBtn' style={{width:`${width}px`, height:`${height}px`}}>{content}</button>
    )
}

export default Button