import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "@/hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (

        <div key={category} className='my-10'>
            <h1 className='text-red-800 font-bold text-xl'>{category}</h1>
            {
                isLoading ?
                    (
                        <div className="h-20 border grid place-content-center my-10">
                            <h3 className="text-xl text-orange-600">Cargando...</h3>
                        </div>
                    )
                    :
                    (
                        <div className="w-full">
                            <div className="flex flex-wrap -mx-2">
                                {
                                    images.map((img) => (
                                        <GifGridItem key={img.id} img={img} />
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
