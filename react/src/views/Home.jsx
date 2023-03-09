import React from 'react'
import ButtonMain from '../components/Buttons/ButtonMain'
import Menu from '../components/menu'


export default function Home({children}) {
     
      return (
        <div>
          <Menu/>
          <ButtonMain children={"Registrar"}/>
        </div>
      )
    
  }