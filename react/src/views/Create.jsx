import React from 'react'

export default function Create() {
  return (
    <>
        
          <h1>Elegir proyecto</h1>
          <p>Selecciona el proyecto en el que quieras crear tu rúbrica.</p>
          <line x1="18" y1="6" x2="6" y2="18" />
          
            <form action="/create" method="post" id="create">
            <label for="title">Título:</label>
            <input type="text" id="title" name="title" placeholder='Título'> </input>

            <label for="description">Descripción de la rúbrica:</label>
            <input type="text" id="description" name="description" placeholder='Problemas de acceso basados en los roles  e identidad de género.'> </input>

            <label for="dimension">Dimensión:</label>
            <input type="text" id="dimension" name="dimension" placeholder='Dimensión'> </input>

            <label for="description">Descripción de la dimensión:</label>
            <input type="text" id="description" name="description" placeholder='Descripción'> </input>

            <lable for="evaluation" > Criterio a evaluar:</lable>
            <input type="text" id="evaluation" name="evaluation" placeholder='Criterio que ha de ser evaluado'> </input>



            <button type="submit">Añadir dimensión</button>
            </form>
          
         
    </>
  );
}
