import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <p>&copy; {new Date().getFullYear()} Donders Institute. All rights reserved.</p>
                <nav>
                    {/* <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> |  */}
                    {/* <a href="/terms-of-service" style={linkStyle}>Terms of Service</a> |  */}
                    <a href="/contact" style={linkStyle}>Contact</a>
                </nav>
            </div>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    color: '#333',
    padding: '1rem 0',
    textAlign: 'center',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
};

const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
};

const linkStyle: React.CSSProperties = {
    color: '#333',
    margin: '0 0.5rem',
    textDecoration: 'none',
};

export default Footer;