import React from 'react'

export default function Create() {
  return (
    <>
        
          <h1>Elegir proyecto</h1>
          <p>Selecciona el proyecto en el que quieras crear tu rúbrica.</p>
          <line x1="18" y1="6" x2="6" y2="18" />
          
            <form action="/create" method="post" id="create">
            <label for="name">Tutilo:</label>
            <input type="text" id="tutilo" name="tutilo"> </input><br>
            <label for="email">Descripción de la rúbrica::</label>
            <input type="Problemas de acceso basados en los roles  e identidad de género." id="description" name="description"> </input><br>

            <button type="submit">Submit</button>
            </form>
          
         
    </>
  );
}
