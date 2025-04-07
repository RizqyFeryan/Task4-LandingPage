import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Untuk sekarang cukup tampilkan data di console
        console.log('Form submitted', formData);
        alert('Pesan Terkirim!');
        setFormData({ nama: '', email: '', pesan: ''});
    };

    return (
        <div style={{ padding: '2rem'}}>
            <h1>Hubungi Kami</h1>
            <p>Isi form di bawah ini untuk menghubungi kami:</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <div style={{ marginBottom: '1rem'}}>
                    <label>Nama:</label>
                    <input
                        type="text"
                        name="nama"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '1rem'}}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '1rem'}}>
                    <label>Pesan:</label>
                    <textarea
                        name="pesan"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#6C63FF',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Kirim Pesan
                </button>
            </form>
        </div>
    );
};

export default Contact;