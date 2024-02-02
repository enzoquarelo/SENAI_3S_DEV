import { Text } from "react-native"
import { FieldContent } from "./style"
import { LabelEx } from "../labelinput"
import { InputText } from "../input/style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght

}) => {
    return(
        <FieldContent>
            {/* label */}
            <LabelEx  
            textLabel={textLabel}/>
            <InputEx 
            placeholder={placeholder}
            editabel={editable}
            KeyType={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />
            <InputText />
        </FieldContent>
)}