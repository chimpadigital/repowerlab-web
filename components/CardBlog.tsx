"use client"
import React from 'react'
import { subtitle } from './primitives';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogI {
  title: string;
  published_at: string;
  slug: string;
  id: string
  writer: {
    name: string;
    img: string | null
  }
  content?: any;
  images: any[];
  description: string;
}

function obtenerResumen(texto: string) {
  const palabras = texto.split(' ');
  const primerasCuatro = palabras.slice(0, 2).join(' ');
  return primerasCuatro + '...';
}

function cambiarFormatoFecha(fechaStr: any) {
  // Convertir la cadena de fecha a un objeto Date
  const fecha = new Date(fechaStr.replace(' ', 'T')); // Agregar 'T' para que el formato sea válido

  // Opciones para el formato deseado
  const opciones: any = { year: 'numeric', month: 'long', day: 'numeric' };

  // Formatear la fecha
  const fechaFormateada = new Intl.DateTimeFormat('en-US', opciones).format(fecha);

  return fechaFormateada;
}

const TextoConResumen = ({ contenidoHtml }: any) => {
  // Crear un elemento temporal para extraer el texto

  const div = document.createElement('div');
  div.innerHTML = contenidoHtml;

  // Extraer el texto sin HTML
  const textoSinHtml = div.innerText.trim();
  const resumen = obtenerResumen(textoSinHtml);

  return (
    <div>
      <p>{resumen}</p>
    </div>
  );
};

export default function CardBlog({ blog, }: { blog: BlogI }) {

  const fechaCambiada = (blog && blog.published_at) ? cambiarFormatoFecha(blog?.published_at) : "";

  return (
    <article className={`w-[400px] p-6`}>
      <div className="flex gap-2 flex-col">

        <h5 className={`${subtitle({ colors: "primary", size: "md" })}`}>{blog?.title}</h5>

        <Image width={400} height={200} alt="" className="w-full object-cover h-[200px] rounded-[10px] " src={blog?.images[0]?.url || "/images/our-services/e2.jpg"} />

        <div className={`${subtitle({ colors: "grey", size: "md" })} font-light`}>
          <TextoConResumen contenidoHtml={blog.content} />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2"></div>
          <p className="text-grey-600">{fechaCambiada}</p>
        </div>

        <div className="w-full flex justify-end">
          <Link href={`/success-cases/${blog?.slug}/${blog?.id}`} className='font-bold flex gap-2 items-center text-primary cursor-pointer'>
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1 12L7 6.5L1 1" stroke="#1C4741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
