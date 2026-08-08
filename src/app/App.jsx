import React from 'react';
import Section from '../components/UI/sections/Section';
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';
import useForm from '../hooks/useForm';

const App = () => {
    const init = {
        title: '',
        bio: '',
        skills: ''
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Title is required';
        }
        if (!values.bio) {
            errors.bio = 'Bio is required';
        }
        if (!values.skills) {
            errors.skills = 'Skills is required';
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    };

    const { state, handleChange, handleFocus, handleBlur, handleSubmit } = useForm({ init, validate });

    return (
        <Section>
            <div style={{ padding: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem', textAlign: 'center' }}>React Form</h1>
                <form onSubmit={(e) => handleSubmit(e, init)}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <InputGroup title={'Title'} name={'title'} placeholder={'Softwere Engineer'} value={state.title.value} onchange={handleChange} error={state.title.error} onfocus={handleFocus} onblur={handleBlur} />
                        <InputGroup title={'Bio'} name={'bio'} placeholder={'I am a Softwere Engineer'} value={state.bio.value} onchange={handleChange} error={state.bio.error} onfocus={handleFocus} onblur={handleBlur} />
                        <InputGroup title={'Skills'} name={'skills'} placeholder={'JavaScript, React'} value={state.skills.value} onchange={handleChange} error={state.skills.error} onfocus={handleFocus} onblur={handleBlur} />
                    </div>
                    <Button type="submit" style={{ marginTop: '1rem' }}>Submit</Button>
                </form>
            </div>
        </Section>
    );
};

export default App;