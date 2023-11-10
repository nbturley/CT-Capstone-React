import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    input_name: string,
    placeholder: string
}

const TextInput = forwardRef(( props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
  ) 
})

export default TextInput