import Image from 'next/image';


function Service(props){
    return (
        <div>
            <div className="w-[340px] h-[390px] relative">
                <Image src={props.img} title={props.title} fill className="object-cover" alt="image that represents service offering"/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Service;