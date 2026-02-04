import Image from "next/image";

function ProjectsImageGallery({images}){
    return (
        <>
            <div>
                <div className="gallery">
                    {images.map((img, id) => {
                        return (
                            <Image src={img} width={100} key={id}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}