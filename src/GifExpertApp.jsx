import { useState } from 'react'
import { AddCategory, GifGrid } from '@/components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['rick and morty']);

    function onAddCategory(newCategory) {
        if (categories.includes(newCategory)) return;
        setCategories(preItems => [...preItems, newCategory])
    }

    return (
        <div className='w-full' >
            <div className='container md:mx-auto mx-10'>
                <h1 className='text-3xl my-10 text-gray-700'>Git expert App</h1>
                <AddCategory onNewCategory={onAddCategory} />

                <div >
                    {categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )}
                </div>

            </div>
        </div >

    )
}
