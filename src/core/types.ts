export type TGalleryImage = {
  url: string;
  alt: string | undefined;
  size?: { width: number; height: number };
};

export type TGallery = {
  images: TGalleryImage[];
  isLoading: boolean;
};
