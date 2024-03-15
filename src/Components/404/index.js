import React from 'react';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
            <p style={styles.text}>Please check the URL or go back to the homepage.</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        padding: '20px',
    },
    heading: {
        fontSize: '48px',
        marginBottom: '20px',
        color: '#dc3545',
    },
    text: {
        fontSize: '18px',
        marginBottom: '10px',
    }
};

export default Error404;
