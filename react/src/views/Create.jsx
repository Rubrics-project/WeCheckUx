import React from 'react'

export default function Create() {
  return (
    
        <div>Buscador

          <h1>Elegir proyecto</h1>
          <p>Selecciona el proyecto en el que quieras crear tu rúbrica.</p>
          <line x1="18" y1="6" x2="6" y2="18" />
          <section>
            <form action="/create" method="post" id="create">
            <label for="name">Tutilo:</label>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>

            <button type="submit">Submit</button>
          </form> 
          </section>


    </div>
    
  )
}
