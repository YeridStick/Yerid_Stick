import React, { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';

import "../styles/Projects.css";
import Loading from '../components/Loading';

const LazyCargarRepos = lazy(() => import('./project/CargarRepos'));
const LazyFooter = lazy(() => import('./home/Footer'));

export default function NewProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.github.com/users/YeridStick/repos')
      .then(async response => {
        const repos = response.data;
        for (const repo of repos) {
          const languagesResponse = await axios.get(repo.languages_url);
          const languages = Object.keys(languagesResponse.data);
          repo.languages = languages;
        }
        setProjects(repos);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="widthHome Project container_main_pages flex_wrap flex">
      <section className="centeDescripcionr width100 center flex padding">
        <Suspense fallback={<Loading />}>
          {isLoading ? (
            <section className="centeDescripcionr width100 center flex padding">
              <div className='marging padding positionRelative width100 flex center margin'>
                <Loading />
              </div>
            </section>
          ) : (
            <div className='Marging_boton'>
              <h1 className="h2Project flex center width100">Mis Proyectos</h1>
              <section className="centeDescripcionr width100 center flex padding">
                <Suspense fallback={<Loading />}>
                  <LazyCargarRepos projects={projects} />
                </Suspense>
              </section>
            </div>
          )}
        </Suspense>

      </section>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <section className="width100 center flex PosicionFixeProject">
          <LazyFooter />
        </section>
      </Suspense>
    </main>
  )
}
