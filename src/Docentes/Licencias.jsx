import React, { useRef } from 'react';

const Licencias = () => {

    
    const iframeRef = useRef(null);

    const obtenerAltoIframe = () => {
        if (iframeRef.current) {
        const altoIframe = iframeRef.current.offsetHeight;
            console.log(`El alto del iframe es: ${altoIframe}px`);
        }
    };

    
    return (
        <div className='seccion'>

            <h2> Licencias </h2>
            
            <div className='frame'>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRV4sASoULq0Hmq5-p8QnVyR0qZUeFzaNn-sSMj0tVix7OgQ/viewform?embedded=true" 
                    width="100%" height="1333" frameborder="0" marginheight="0" marginwidth="0"
                >Cargando…</iframe>

            </div>



        </div>
    );
}

export default Licencias;
