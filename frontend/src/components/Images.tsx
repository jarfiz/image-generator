import { useEffect, useState } from "react";

interface Image {
  id: string;
  prompt: string;
  url: string;
}

const Images = () => {
  const [images, setImages] = useState<Image[] | []>([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/images`);
      const data = await res.json();
      setImages(data);
    };
    getImages();
  }, []);

  return (
    <div className="mt-10 mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image) => (
        <a
          href={image.url}
          target="_blank"
          key={image.id}
          className="flex flex-col items-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={image.url}
            alt="image generated"
            className="aspect-video w-full object-cover"
          />
          <div className="w-full p-4">
            <h1 className="text-lg text-gray-800">{image.prompt}</h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Images;
