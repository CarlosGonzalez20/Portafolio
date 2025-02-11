import { useState } from 'react';
import './PersonalImage.css';

function PersonalImage({ id }) {
    const [copied, setCopied] = useState(false);
    const email = 'll3224645@gmail.com';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error('Error al copiar:', err));
    };

    return (
        <div className="personal-image">
            <img src={`https://drive.google.com/thumbnail?id=${id}`} alt="Personal" />
            <span className='name'>Carlos Geovanni González López</span>
            <span className='job'>Full Stack Developer en formación</span>
            <span className='email' onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
                {email}
            </span>
            {copied && <div className='copied-alert'>¡Correo copiado!</div>}
        </div>
    );
}

export default PersonalImage;