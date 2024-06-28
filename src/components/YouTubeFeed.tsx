import React, { useState, useEffect } from 'react';
import { YouTubeData, YoutubeFeedProps } from '../types/types';
import '../output.css';

export default function YouTubeFeed({ channelId, apiKey }: YoutubeFeedProps) {

    const [data, setData] = useState<YouTubeData>();


    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

    const getChannel = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(`Fetching data failed, Error: ${error}`)
        }
    }

    useEffect(() => {
        getChannel();
    }, [])

    return (
        <>
            <div className="p-10 w-full">
                {data ?
                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {data?.items.map((data, index) => (
                            <li key={`${data.id.videoId}-${index}`} className="relative">
                                <a href={`https://youtu.be/${data.id.videoId}`} target="_blank">
                                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                        <img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} className="pointer-events-none object-cover group-hover:opacity-75" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span className="sr-only">{data.snippet.title}</span>
                                        </button>
                                    </div>
                                </a>
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-white">{data.snippet.title}</p>
                            </li>
                        ))}
                    </ul>
                    :
                    <div>
                        <svg width="308" height="308" viewBox="0 0 308 308" fill="none" className="animate-spin h-5 w-5 mr-3">
                            <circle cx="154" cy="154" r="128.96" stroke="#C7C6E4" strokeWidth="49.92" />
                            <path d="M66.8353 249.042C82.8442 263.724 102.302 274.124 123.404 279.278C144.506 284.432 166.568 284.171 187.543 278.521C208.517 272.871 227.724 262.015 243.383 246.959C259.041 231.904 270.642 213.137 277.11 192.4" stroke="#6D6AF2" strokeWidth="49.92" />
                        </svg>

                    </div>
                }
            </div>
        </>

    )
}


