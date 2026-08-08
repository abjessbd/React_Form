import { useState } from "react";
import { deepClone } from "../utils/objectUtils";


const useForm = ({ init, validate }) => {
    const [state, setState] = useState(mapValuesToState(init));

    const handleChange = (e) => {
        const { type, name, value } = e.target;
        const oldState = deepClone(state);

        if (type === 'checkbox') {
            oldState[name].value = 'checked';
        } else {
            oldState[name].value = value;
        }

        const values = mapStateToKeys(oldState, 'value');
        const { errors } = validate(values);

        if (!oldState[name].value && errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = '';
        }

        setState(oldState);
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        const oldState = deepClone(state);

        if (!oldState[name].focused) {
            oldState[name].focused = true;
        }

        oldState[name].touched = true;

        setState(oldState);
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        const oldState = deepClone(state);
        const values = mapStateToKeys(oldState, 'value');
        const { errors } = validate(values);

        if (oldState[name].focused && errors[name]) {
            oldState[name].error = errors[name];
        } else {
            oldState[name].error = '';
        }

        oldState[name].focused = false;

        setState(oldState);
    };

    const handleSubmit = (e, defaultValues) => {
        e.preventDefault();
        const oldState = deepClone(state);
        const values = mapStateToKeys(oldState, 'value');
        const { errors, isValid } = validate(values);

        if (!isValid) {
            Object.keys(oldState).forEach((key) => {
                oldState[key].error = errors[key];
            });
            setState(oldState);
            return;
        } else {
            console.log(state);
        }

        clearInputs(defaultValues);
    };

    const clearInputs = (defaultValues) => {
        const primaryState = mapValuesToState(defaultValues);
        setState(primaryState);
    };

    return {
        state,
        handleChange,
        handleFocus,
        handleBlur,
        handleSubmit
    };
};

const mapValuesToState = (values) => {
    return Object.keys(values).reduce((acc, cur) => {
        acc[cur] = {
            value: values[cur],
            error: '',
            focused: false,
            touched: false
        };

        return acc;
    }, {});
};

const mapStateToKeys = (state, key) => {
    return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = state[cur][key];

        return acc;
    }, {});
};

export default useForm;