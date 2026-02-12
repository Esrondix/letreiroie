import React from 'react';

export const GallerySection = () => {
  return (
    <section className="container mx-auto py-20">
      {/* Comentário para futura implementação de carrossel animado */}
      {/* Esta secção será transformada num carrossel de imagens de portfólio */}
      <div 
        className="relative max-w-full mx-auto overflow-hidden rounded-[40px]"
        style={{ width: `min(100%, calc(1270px + 2 * 100px + 2 * 32px))` }} /* Responsive viewport width */
      > {/* Este será o viewport */}
        <div 
          className="flex h-[573.63px] transition-transform duration-500 ease-in-out gap-8"
          style={{ 
            width: `calc(3 * 1270px + 2 * 32px)`, /* Total width of all items + gaps */
            transform: `translateX(-1170px)` /* Positions the middle item correctly with 100px partial visibility on sides */
          }}
        >
          {/* Placeholder 1 (Esquerda) */}
          <div className="w-[1270px] h-[573.63px] bg-gray-300 rounded-[40px] flex items-center justify-center text-center text-gray-600 p-4 flex-shrink-0">
            Placeholder Imagem Esquerda
            <br />
            (Substituir por imagem de portfólio)
          </div>

          {/* Placeholder 2 (Centro) */}
          <div className="w-[1270px] h-[573.63px] bg-gray-400 rounded-[40px] flex items-center justify-center text-center text-gray-700 p-4 flex-shrink-0">
            Placeholder Imagem Central
            <br />
            (Substituir por imagem de portfólio)
          </div>

          {/* Placeholder 3 (Direita) */}
          <div className="w-[1270px] h-[573.63px] bg-gray-300 rounded-[40px] flex items-center justify-center text-center text-gray-600 p-4 flex-shrink-0">
            Placeholder Imagem Direita
            <br />
            (Substituir por imagem de portfólio)
          </div>
        </div>
      </div>
    </section>
  );
};
