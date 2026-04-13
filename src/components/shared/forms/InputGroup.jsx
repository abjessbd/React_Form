import ErrorText from '../../UI/error_text/ErrorText';
import GroupWrapper from '../../UI/group_wrap/GroupWrapper';
import InputsField from '../../UI/inputs/InputsField';
import Label from '../../UI/label/Label';

const InputGroup = ({ title, name, placeholder, value, error, onchange, onblur, onfocus }) => {
    return (
        <GroupWrapper>
            <Label htmlFor={name}>{title}:</Label>

            <InputsField name={name} id={name} value={value} $error={error} placeholder={placeholder ?? ''} onChange={onchange} onBlur={onblur} onFocus={onfocus} />

            {error && <ErrorText>{error}</ErrorText>}
        </GroupWrapper>
    );
};

export default InputGroup;