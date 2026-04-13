import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Section from "../components/UI/sections/Section";
import Button from "../components/UI/buttons/Button";
import { deepClone } from "../utils/objectUtils";
import { makeStateToValues } from "../utils/makeStateToValues";

const init = {
    title: {
        value: '',
        error: '',
        focus: false
    },
    bio: {
        value: '',
        error: '',
        focus: false
    },
    skills: {
        value: '',
        error: '',
        focus: false
    }
};
const App = () => {
    const [state, setState] = useState({ ...init });

    const validityCheck = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Invalid title';
        }
        if (!values.bio) {
            errors.bio = 'Invalid bio';
        }
        if (!values.skills) {
            errors.skills = 'Invalid skills';
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    };

    const handleChange = (e) => {
        const { name: key, value } = e.target;

        const oldState = deepClone(state);
        const values = makeStateToValues(oldState, state);
        oldState[key].value = value;

        const { errors } = validityCheck(values);
        if (oldState[key].error && errors[key]) {
            oldState[key].error = errors[key];
        } else {
            oldState[key].error = '';
        }

        setState(oldState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const oldState = deepClone(state);
        const values = makeStateToValues(oldState, state);

        const { isValid, errors } = validityCheck(values);
        if (isValid) {
            console.log('Form Submitted Successfully:', values);
        } else {
            Object.keys(oldState).forEach((key) => {
                if (errors[key]) {
                    oldState[key].error = errors[key];
                } else {
                    oldState[key].error = '';
                }
            });
        }

        setState(oldState);
    };

    const handleFocus = (e) => {
        const key = e.target.name;
        const oldState = deepClone(state);
        oldState[key].focus = true;
        setState(oldState);
    };

    const handleBlur = (e) => {
        const key = e.target.name;

        const oldState = deepClone(state);
        const values = makeStateToValues(oldState, state);

        const { errors } = validityCheck(values);
        if (oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key];
        } else {
            oldState[key].error = '';
        }

        setState(oldState);
    };

    return (
        <Section>
            <div style={{ padding: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem', textAlign: 'center' }}>React Form</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <InputGroup title={'Title'} name={'title'} placeholder={'Softwere Engineer'} value={state.title.value} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={state.title.error} />
                        <InputGroup title={'Bio'} name={'bio'} placeholder={'I am a Softwere Engineer'} value={state.bio.value} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={state.bio.error} />
                        <InputGroup title={'Skills'} name={'skills'} placeholder={'JavaScript, React'} value={state.skills.value} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={state.skills.error} />
                    </div>
                    <Button type="submit" style={{ marginTop: '1rem' }}>Submit</Button>
                </form>
            </div>
        </Section>
    );
};

export default App;