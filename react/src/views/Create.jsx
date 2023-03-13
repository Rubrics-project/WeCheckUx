import React from 'react'
import InformationBox from '../components/InformationBox';
import Title from "../components/Title";

export default function Create() {
  return (
    <>
 <form action="#" method="post" id="create" className="mt-1 ">

    <Title title={"Google"} />
     <label for="title" className="font-opencustom text-sm">Título:</label>
            <input type="text" id="title" name="title" placeholder="Título"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

     <label for="description:" className="font-opencustom text-sm">Description:</label>
            <input type="text" id="description" name="description" placeholder="Buscador de contenidos en la red. Analizamos la versión “.es”."  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>
     <div className="bg-A7D7F9">
    {<InformationBox text={"Crea una rúbrica para que tú u otras personas la podáis usar para evaluar la experiencia de usuario de una web."} onClick={"pasar onclick"}  />}
    </div>
          
           
            <label for="title" className="font-opencustom text-sm">Título:</label>
            <input type="text" id="title" name="title" placeholder="Título"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <label for="description" className="font-opencustom text-sm">Descripción de la rúbrica:</label>
            <input type="text" id="description" name="description" placeholder="Problemas de acceso basados en los roles e identidad de género." className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <label for="dimension" className="font-opencustom text-sm">Dimensión:</label>
            <input type="text" id="dimension" name="dimension" placeholder="Dimensión" className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <label for="description" className="font-opencustom text-sm">Descripción de la dimensión:</label>
            <input type="text" id="description" name="description" placeholder="Descripción" className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="evaluation" className="font-opencustom text-sm"> Criterio a evaluar:</lable>
            <input type="text" id="evaluation" name="evaluation" placeholder="Criterio que ha de ser evaluado"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="negative" className="font-opencustom text-sm" >Negativo:</lable>
            <input type="taxt" id="negative" name="negative" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="regular" className="font-opencustom text-sm" >Regular:</lable>
            <input type="text" id="regular" name="regular" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            



            <button type="submit">Añadir dimensión</button>
            </form>
          
         
    </>
  );
}
