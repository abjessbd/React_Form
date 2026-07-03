import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Section from "../components/UI/sections/Section";
import Button from "../components/UI/buttons/Button";

const initValue = {
    title: '',
    bio: '',
    skills: ''
};
const App = () => {
    const [change, setChange] = useState({ ...initValue });
    const [errors, setErrors] = useState({ ...initValue });
    const [focus, setFocus] = useState({
        title: false,
        bio: false,
        skills: false
    });


    const handleChange = (e) => {
        setChange(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        const { errors } = validityCheck(change);
        setErrors({ ...errors });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { errors, isValid } = validityCheck(change);

        if (isValid) {
            console.log(change);
            setErrors({ ...errors });
        } else {
            setErrors({ ...errors });
        }

        setChange(initValue);
    };

    const validityCheck = (value) => {
        const errors = {};
        if (!value.title) {
            errors.title = 'Invalid title';
        }
        if (!value.bio) {
            errors.bio = 'Invalid bio';
        }
        if (!value.skills) {
            errors.skills = 'Invalid skills';
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    };

    const handleFocus = (e) => {
        setFocus(prev => ({
            ...prev,
            [e.target.name]: true
        }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const { errors } = validityCheck(change);
        if (errors[key] && focus[key]) {
            setErrors(prev => ({
                ...prev,
                [key]: errors[key]
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                [key]: ''
            }));
        }
    };

    return (
        <Section>
            <div style={{ padding: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem', textAlign: 'center' }}>React Form</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <InputGroup title={'Title'} name={'title'} placeholder={'Softwere Engineer'} value={change.title} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={errors.title} />
                        <InputGroup title={'Bio'} name={'bio'} placeholder={'I am a Softwere Engineer'} value={change.bio} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={errors.bio} />
                        <InputGroup title={'Skills'} name={'skills'} placeholder={'JavaScript, React'} value={change.skills} onchange={handleChange} onfocus={handleFocus} onblur={handleBlur} error={errors.skills} />
                    </div>
                    <Button type="submit" style={{ marginTop: '1rem' }}>Submit</Button>
                </form>
            </div>
        </Section>
    );
};

export default App;