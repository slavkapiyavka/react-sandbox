import GalleryImage from "./GalleryImage";
import type { TGallery } from "../core/types";

const Gallery = ({ images, isLoading }: TGallery) => {
  return (
    <section className="gallery-grid">
      {isLoading && <p className="text">Загрузка...</p>}
      {!isLoading &&
        images.map((image) => (
          <GalleryImage key={image.url} url={image.url} alt={image.alt} />
        ))}
      {!images.length && !isLoading && <p>нет картинок</p>}
    </section>
  );
};

export default Gallery;
