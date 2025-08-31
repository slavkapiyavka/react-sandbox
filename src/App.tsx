import { useState, useEffect } from "react";
import "./App.css";
import { type TGalleryImage } from "./core/types";
import { CONSTANTS } from "./core/constants";
import Gallery from "./components/Gallery";
import Title from "./components/Title";
import Input from "./components/Input";
import UpdatesCounter from "./components/UpdatesCounter";
import Button from "./components/Button";

function App() {
  const [imagesCount, setImagesCount] = useState(CONSTANTS.START_IMAGES_COUNT);
  const [updatesCount, setUpdatesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<TGalleryImage[]>([]);

  useEffect(() => {
    getImages(CONSTANTS.START_IMAGES_COUNT, false);
  }, []);

  const getImages = async (count: number, keepInCount: boolean = true) => {
    setIsLoading(true);

    try {
      const request = await fetch(
        `${CONSTANTS.DOGS_API}/breeds/image/random/${count}`
      );
      const data = await request.json();
      const newImages = data.message.map((i: string) => ({ url: i }));
      setImages(newImages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      if (keepInCount) setUpdatesCount((c) => c + 1);
    }
  };

  const onImagesCountChange = (value: string) => {
    const num = parseInt(value);

    if (num <= 0) return;

    setImagesCount(Number(value));
  };

  const onGetImagesClick = () => {
    getImages(imagesCount);
  };

  return (
    <section>
      <Title text={CONSTANTS.APP_TITLE} />

      <UpdatesCounter value={updatesCount} isLoading={isLoading} />
      <Input
        disabled={isLoading}
        value={imagesCount}
        cb={onImagesCountChange}
      />
      <Button
        disabled={isLoading}
        text={CONSTANTS.BUTTON_UPDATE_TEXT}
        cb={onGetImagesClick}
      />
      <Gallery images={images} isLoading={isLoading} />
    </section>
  );
}

export default App;
