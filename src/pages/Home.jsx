import  React  from "react";

const Home = () => {
    return (
        <div style={{ padding: '2rem'}}>
            <h1>Selamat Datang di Website Kami!</h1>
            <p>Ini adalah halaman beranda sederhana menggunakan React + Vite.</p>
            <button 
                style={{
                    padding: '0.5rem 1rem',
                    marginTop: '1rem',
                    backgroundColor: '#6C63FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Pelajari Lebih Lanjut
            </button>
        </div>
    );
};

export default Home;