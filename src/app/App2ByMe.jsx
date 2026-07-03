import React, { useState } from 'react';
import Section from '../components/UI/sections/Section';
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';

const initValues = {
    title: '',
    bio: '',
    skills: ''
};

const focusValue = {
    title: false,
    bio: false,
    skills: false
};

const App = () => {
    const [values, setValues] = useState({ ...initValues });
    const [error, setError] = useState({ ...initValues });
    const [focus, setFocus] = useState({ ...focusValue });

    const checkValidity = (values, focus, forceAll = false) => {
        const error = {};
        const { title, bio, skills } = values;
        if (!title && (focus.title || forceAll)) {
            error.title = 'Invalid title';
        }
        if (!bio && (focus.bio || forceAll)) {
            error.bio = 'Invalid bio';
        }
        if (!skills && (focus.skills || forceAll)) {
            error.skills = 'Invalid skills';
        }
        return {
            isValid: Object.keys(error).length === 0,
            error
        };
    };

    const handleChange = (e) => {
        const changedData = {
            ...values,
            [e.target.name]: e.target.value
        };

        const { error } = checkValidity(changedData, focus);

        if (error) {
            setError({ ...error });
        } else {
            setError({ ...error });
        }

        setValues(changedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { error, isValid } = checkValidity(values, focus, true);

        if (!isValid) {
            setError({ ...error });
        } else {
            setError({ ...error });
            console.log(values);
        }

        setFocus(focusValue);
        setValues(initValues);
    };

    const handleFocus = (e) => {
        setFocus(prev => ({
            ...prev,
            [e.target.name]: true
        }));
    };

    const handleBlur = () => {
        const { error, isValid } = checkValidity(values, focus);

        if (!isValid) {
            setError({ ...error });
        }
    };

    return (
        <Section>
            <h1 style={{ fontSize: '2rem', fontWeight: '650', color: 'gray', margin: '3rem 0', textAlign: 'center' }}>React Form</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <InputGroup name={'title'} title={'Title'} placeholder={'Title'} value={values.title} onchange={handleChange} error={error.title} onfocus={handleFocus} onblur={handleBlur} />
                    <InputGroup name={'bio'} title={'Bio'} placeholder={'Software Engineer'} value={values.bio} onchange={handleChange} error={error.bio} onfocus={handleFocus} onblur={handleBlur} />
                    <InputGroup name={'skills'} title={'Skills'} placeholder={'I am a Software Engineer'} value={values.skills} onchange={handleChange} error={error.skills} onfocus={handleFocus} onblur={handleBlur} />
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </Section>
    );
};

export default App;