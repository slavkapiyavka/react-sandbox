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
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState(CONSTANTS.DEFAULT_BREED);

  useEffect(() => {
    getImages(CONSTANTS.START_IMAGES_COUNT, false);
    getBreeds();
  }, []);

  useEffect(() => {
    if (selectedBreed !== CONSTANTS.DEFAULT_BREED) {
      getImages(imagesCount, true, selectedBreed);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBreed]);

  const getImages = async (
    count: number,
    keepInCount: boolean = true,
    breed: string = CONSTANTS.DEFAULT_BREED
  ) => {
    setIsLoading(true);

    try {
      const requestUrl =
        breed !== CONSTANTS.DEFAULT_BREED
          ? `${CONSTANTS.DOGS_API}/breed/${breed}/images/random/${count}`
          : `${CONSTANTS.DOGS_API}/breeds/image/random/${count}`;
      const request = await fetch(requestUrl);
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

  const getBreeds = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(`${CONSTANTS.DOGS_API}/breeds/list/all`);
      const data = await request.json();
      const newBreeds: object = data.message;
      setBreeds(Object.keys(newBreeds));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onImagesCountChange = (value: string) => {
    const num = parseInt(value);

    if (num <= 0) return;

    setImagesCount(Number(value));
  };

  const onBreedChange = (value: string) => {
    setSelectedBreed(value);
  };

  const onGetImagesClick = () => {
    getImages(imagesCount, true, selectedBreed);
  };

  return (
    <section>
      <Title text={CONSTANTS.APP_TITLE} />
      <UpdatesCounter value={updatesCount} isLoading={isLoading} />
      <Input
        id="count-input"
        type="number"
        min={CONSTANTS.MIN_IMAGES_COUNT}
        max={CONSTANTS.MAX_IMAGES_COUNT}
        disabled={isLoading}
        value={imagesCount}
        cb={onImagesCountChange}
      />
      <select
        name="breeds"
        id="breeds"
        onChange={(e) => onBreedChange(e.target.value)}
      >
        <option value={CONSTANTS.DEFAULT_BREED} defaultValue={selectedBreed}>
          --Все породы--
        </option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <Button
        disabled={isLoading}
        text={CONSTANTS.BUTTON_UPDATE_TEXT}
        cb={onGetImagesClick}
        type={'button'}
      />
      <Gallery images={images} isLoading={isLoading} />
    </section>
  );
}

export default App;
