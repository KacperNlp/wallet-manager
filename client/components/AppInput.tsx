import { ChangeEvent } from "react";

export type Props = {
    labelText: string,
    inputType: 'number' | 'text'
    fieldName: string,
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AppInput = ({ labelText, inputType, fieldName, value, onChange }: Props) => {
    return ( 
        <label>
            <span>{labelText}</span>
            <input type={inputType} name={fieldName} value={value} onChange={onChange} />
        </label>
     );
}
 
export default AppInput;