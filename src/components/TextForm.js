import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const TextForm = () => {

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }

    const clearAll = () => {
        setText('')
    }

    const clearSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim())
    }
    return (
        <div>
            <Container >
                <h1 className='mt-5' style={{ textAlign: 'left' }}>Write Your Text Here</h1>
                <Form className='mt-3'>
                    <Form.Group className="mb-3" >
                        <Form.Control value={text} onChange={onChange} as="textarea" rows={10} />
                    </Form.Group>
                </Form>
                <button className='btn btn-primary mx-1' onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={clearAll}>Clear All</button>
                <button className='btn btn-primary mx-1' onClick={clearSpace}>Remove Extra Space</button>
                <h2 className='mt-3' style={{ textAlign: 'left' }}>Words Count</h2>

                <h5 className='mt-3' style={{ textAlign: 'left' }}>{text.length > 0 ? <p>Total Characters: {text.length}</p> : "Please Write in the Above Box"}</h5>
            </Container>
        </div>
    )
}

export default TextForm
