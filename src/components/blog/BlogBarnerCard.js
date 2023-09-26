import moment from 'moment'
import React from 'react'

const BlogBarnerCard = ({ data }) => {
    return (
        <a
            class="mb-4 md:mb-0 w-full px-5 md:w-full relative rounded inline-block"
            style={{ height: "24em" }}
            href="#"
        >
            <div class="absolute left-0 bottom-0 w-full h-full z-10"
                style={{ backgroundImage: `linear-gradient(180deg,transparent,rgba(0,0,0,.7))` }}></div>
            <img src={data.coverPicture} class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex datas-center justify-center mb-2">{data.areaPost}</span>
                <h2 class="text-4xl font-semibold text-gray-100 leading-tight line-clamp-3">
                    {data.title}
                </h2>
                <div class="flex mt-3">
                    <img src={data.customerPhoto}
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-200 text-sm"> {data.customerName} </p>
                        <p class="font-semibold text-gray-400 text-xs"> {moment(data.createdAt).format("DD/MM/YYYY")}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BlogBarnerCard