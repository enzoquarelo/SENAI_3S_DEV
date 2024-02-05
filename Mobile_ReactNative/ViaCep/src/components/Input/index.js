import { InputText } from "./style";

export function Input({
    placeholder,
    editable = true,
    fieldValue,
    onChangeText = null,
    KeyType,
    maxLenght
}) {
    return (
        <>
            <InputText 
                placeholder={placeholder}
                editable={editable}
                keyboardType={KeyType}
                maxLenght={maxLenght}
                value={fieldValue}
                onChangeText={onChangeText}
            />
        </>
    )
}