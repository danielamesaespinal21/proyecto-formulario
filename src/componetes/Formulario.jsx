import React, { useState } from 'react'
import Card from './Card'




const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [validacion, setValidacion] = useState('');
    const [card, setCard] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();

        console.log(nombre);
        console.log(color);

        let validacionTresCaracteres = false;
        let validacionSeisCaracteres = false;

        if (nombre.trim().length >= 3) {
            console.log("Es Mayor a 3 Caracteres");
            validacionTresCaracteres = true;
        }else{
            console.log("Es Menor a 3 Caracteres");
            validacionTresCaracteres = false;
        }


        if (color.length >= 6) {
            console.log("Es Mayor a 6 Caracteres");
            validacionSeisCaracteres = true;
        }else{
            console.log("Es Menor a 6 Caracteres");
            validacionSeisCaracteres = false;
        }
        
        if (validacionTresCaracteres === true && validacionSeisCaracteres === true) {
            setValidacion(false); 
            setCard(true);
        }else{
            setValidacion(true);
            setCard(false);

        }

    }

    return (
        <div
        style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            minWidth:'1280px',
            backgroundImage: `url("https://s03.s3c.es/imag/_v0/770x420/d/d/2/iStock-870361774.jpg")`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundAttachment:'fixed',
            margin:'0',
            fontFamily:'sans-serif',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            gap:'20px',
        }}
        >
            <form id="formular" onSubmit={handleSubmit} 
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                minWidth:'150px',
                minHeight:'200px',
                backgroundColor:'#3D403D ',
                justifyContent:'center',
                gap:'10px',
                padding:'30px',
                
            }}>
                <input
                type={"text"} 
                placeholder={`Ingrese su Nombre: `} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 

                style={{
                    padding: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    border: '1px solid #4E6E81',
                    width: '240px',
                }}
                />

                <input 
                type={"text"} 
                placeholder={`Ingresar tu color Favorito (formato HEX) `} 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 

                style={{
                    padding: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    border: '1px solid #4E6E81',
                    width: '240px',
                }}
                />
            
            </form>

            <div>
                <button style={{
                    backgroundColor:'#58FF33',
                }}form="formular" btn="submit">Enviar</button>

                <style></style>
            </div>

            {
                validacion && (<p
                style={{
                    backgroundColor:'#E9ECC4',
                }}>Por favor chequea que la información sea correcta</p>)
            }
            {
                card && (<Card nombre={nombre} color={color}/>)
                
            }
        </div>
    )
}

    export default Formulario
