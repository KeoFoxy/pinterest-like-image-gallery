import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Gallery} from "@/components";
import {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [imageUrl, setImageUrl] = useState('');
    const [galleryItems, setGalleryItems] = useState([
        {
            id: 1,
            url: "https://i.pinimg.com/564x/da/82/4f/da824fc9fa228a807c812456ded8ef46.jpg"
        },
        {
            id: 2,
            url: "https://i.pinimg.com/564x/56/c8/52/56c852b068faf2363104c6434215ef8a.jpg"
        },
        {
            id: 3,
            url: "https://i.pinimg.com/564x/d1/d8/42/d1d842dff82a45d336fd5577cf615c03.jpg"
        },
        {
            id: 4,
            url: "https://i.pinimg.com/564x/05/cb/c1/05cbc1a32a858dd7b0a91c7fad69d736.jpg"
        },
        {
            id: 5,
            url: "https://i.pinimg.com/736x/a2/1f/b1/a21fb1c50961d19a3f9b460c2238c4f4.jpg"
        },
        {
            id: 6,
            url: "https://i.pinimg.com/564x/df/d2/28/dfd2288f3fbc648a68693d68f2978eaa.jpg"
        }
    ]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && imageUrl.trim() !== '') {
            const lastId = galleryItems.length > 0 ? galleryItems[galleryItems.length - 1].id : 0;
            const newImage = {
                id: lastId + 1,
                url: imageUrl
            };
            setGalleryItems([...galleryItems, newImage]);
            setImageUrl('');
        }
    };

    const handleRemoveImage = (idToRemove: number) => {
        setGalleryItems((prevItems) => prevItems.filter(item => item.id !== idToRemove));
    }


    return (
      <div className={"bg-gray-200"}>
          <div className="container mx-auto p-4">
              <input type="text" id="first_name"
                     value={imageUrl}
                     onChange={handleInputChange}
                     onKeyDown={handleKeyDown}
                     className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Add image URL" />
          </div>
        <Gallery items={galleryItems} onRemove={handleRemoveImage}/>
      </div>
  )
}
