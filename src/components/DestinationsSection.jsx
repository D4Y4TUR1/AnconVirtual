// src/components/DestinationsSection.jsx
import React from 'react';
import DestinationCard from './DestinationCard';
import './DestinationsSection.css'; // Importar archivo CSS para los estilos

function DestinationsSection() {
    const destinations = [
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'Museo de Sitio',
        description: 'Preserva y exhibe hallazgos arqueológicos.',
        },
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'Biblioteca Municipal',
        description: 'Promueve, organiza y facilita información.',
        },
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'Playa Hermosa',
        description: 'Ofrece, embellece y atrae a turistas.',
        },
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'SandBoarding',
        description: 'Proporciona, desafía y emociona a los aventureros.',
        },
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'Puerto de Ancón',
        description: 'Recibe y facilita el acceso al mar.',
        },
        {
        image: 'https://via.placeholder.com/300x200',
        title: 'Plaza de Armas',
        description: 'Centraliza, reúne y simboliza el corazón cívico.',
        },
    ];

    return (
        <section className="destinations-section">
        <h2>Destinos Turísticos</h2>
        <p>Conoce los principales destinos turísticos de Ancón.</p>
        <div className="destinations-grid">
            {destinations.map((destination, index) => (
            <DestinationCard
                key={index}
                image={destination.image}
                title={destination.title}
                description={destination.description}
            />
            ))}
        </div>
        </section>
    );
}

export default DestinationsSection;