import React from 'react';
import ItemsExternos from '../../components/containers/Elements_Menu/ItemsExternos';

export default function CargarRepos( { projects } ) {
  const languageIcons = {
    JavaScript: 'bx bxl-javascript',
    HTML: 'bx bxl-html5',
    CSS: 'bx bxl-css3',
    Java: 'bx bxl-java',
    // Agrega otros lenguajes y sus iconos aquí
  };
  return (
    <ul className='listProject shadow padding'>
      {projects.map(project => (
        <li key={project.id} className='ListProyect element margin'>
          <div className='center flex flex_wrap width100 padding shadow'>
            <div className='containerOverflow center flex width100'>
              <h2 className='textOverflow conteinerTitulos center flex width100 color tittle_am tittles_name'>{project.name}</h2>
            </div>
            {/*project.languages && <p>{project.languages.join(', ')}</p>*/}
            {
              project.languages && (
                <div className='flex link position'>
                  {project.languages.map(language => (
                    languageIcons[language] ? (
                      <i id='IconoLenguage' key={language} className={`flex ${languageIcons[language]}`}></i>
                    ) : (
                      <span key={language}>{language}</span>
                    )
                  ))}
                </div>
              )
            }
            <p className='width100 center flex'>Creado: {new Date(project.created_at).toLocaleDateString()}</p>
            <div className='width100 center descript flex'>
              <p className='textDescript'>
                {project.description ? (
                  project.description.length === 0 ? "Ejercicio Práctico" : project.description
                ) : (
                  "Descripción no disponible"
                )}
              </p>
            </div>
            <div className='positionLinkExterno'>
              <ItemsExternos
                ruta = {project.html_url}
                icono = {'bx bx-chevron-right'}
                text_link = {''}
              />
            </div>
          </div>
        </li>
      ))}                     
    </ul>
  )
}
