# react-youtube-feed

A basic react component for implementing a youtube channel video feed using tailwind css. 

Requires Tailwindcss and YouTube API key and channel Id. See google developer docs for more information on credentials here  - [YouTube Credential Docs](https://developers.google.com/youtube/registering_an_application)

![screenshot of react-youtube-feed](https://github.com/ronanpdh/react-youtube-feed/assets/97302667/189ddfb4-8320-43a3-9979-1f165d3fc711)


## Install

` npm i react-youtube-feed `

## Usage 
```js
import { YouTubeFeed } from 'react-youtube-feed';

// Replace id with the channel id you want to use as well as your api key.
// Required props - channelId & apiKey


<YouTubeFeed channelId={id} apiKey={apiKey}/>      


// Example with optional props

<YouTubeFeed channelId={id} apiKey={apiKey} color={'cyan'} maxResults={30} />

```
</br>

## Props

---

**Required**
| Prop               | Description |
| -----------        | ----------- |
| **channelId**      | The id of the channel you want to display  |
| **apiKey**         | Your api Key from google developer console |

</br>

**Optional**

| Prop               | Description |                               Default             |
| -----------        | ----------- | ----------- |
| **maxResults**     | The amount of results you want to display  | 20 |
| **color**          | The tailwind text color you want the title to have  |  neutral  |

</br>

*See below for all color options*

</br>

---

**Color Styles - Tailwind Colors**
- slate: 'text-slate-500',
- gray: 'text-gray-500',
- zinc: 'text-zinc-500',
- neutral: 'text-neutral-500',
- stone: 'text-stone-500',
- red: 'text-red-500',
- orange: 'text-orange-500',
- amber: 'text-amber-500',
- yellow: 'text-yellow-500',
- lime: 'text-lime-500',
- green: 'text-green-500',
- emerald: 'text-emerald-500',
- teal: 'text-teal-500',
- cyan: 'text-cyan-500',
- sky: 'text-sky-500',
- blue: 'text-blue-500',
- indigo: 'text-indigo-500',
- violet: 'text-violet-500',
- purple: 'text-purple-500',
- fuchsia: 'text-fuchsia-500',
- pink: 'text-pink-500',
- rose: 'text-rose-500',
- white: 'text-white',
- black: 'text-black',
  
