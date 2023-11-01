import { Input } from 'antd'
import React from 'react'

const InputFormComponent = (props) => {
    const { placeholder = 'Nhập text', ...rests } = props
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <>
            <Input placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
        </>
    )
}
// const InputFormComponent = ({ size, placeholder, bordered, style, ...rests }) => {

//     return (
//         <Input
//             size={size}
//             placeholder={placeholder}
//             bordered={bordered}
//             {...rests}
//         />
//     )
// }

export default InputFormComponent
