import { useRouter } from 'next/router'
import useSWR from 'swr'
import style from './css/transcript.module.css'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error("Unknow channel discord id!")
  }
  return data
}

function getDate(timestamp) {
    const date = new Date(timestamp*1000)
    return String(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" | "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
}

export default function Transcript() {
  const { query } = useRouter()

  const { data, error } = useSWR(
    () => query.id && `/api/transcript/get/${query.id}`,
    fetcher
  )

  if (!data) return <div>Unknow channel discord id!</div>

  console.log(data)

  return (
    <div className={style.message}>
        <h1>{data.guild.name} | ({data.guild.id})</h1>
        <h2>Channel: #{data.data.channelName}</h2>
        
        <h5>---------------------------------------------------------------------------------------------------------</h5>

        {data.data.messages.map(p => {
       return  <div>{p.sender} | <i>{getDate(p.timestamp)}</i> <h5>{p.input}</h5></div>
     })}
    </div>
    )
}