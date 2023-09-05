import {ImageCard} from "@/components";

const Gallery = () => {

    const galleryItems = [
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

    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {galleryItems.map(item => (
                <ImageCard key={item.id} imageUrl={item.url} comment={"Some comment for " + item.id} />
            ))}
        </div>
    );
};

export default Gallery;