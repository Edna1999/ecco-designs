import { React, useState} from 'react';

import '../style.css'

function Form() {
    const[formData, setFormdata] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {

        setFormdata({ ...formData, [e.target.name] : e.target.value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Failed to submit form!');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

    return (
        <div className='form'>

<form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  
        </div>
    )
}

export default Form;