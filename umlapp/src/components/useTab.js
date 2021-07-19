import { useEffect, useState } from "react";
import songsterr from "../apis/songsterr";
const url = `http://www.songsterr.com/a/ra/songs.json?pattern=`

const useTab = (song) => {
    const [tab, setTab] = useState("");

    const fetchTab = async (song) => {
        const {data} = await songsterr.get(`${url}&${song}`)
        const tabSrc = data
        setTab(tabSrc)
    }

    useEffect(() => {
        fetchTab(song);
    }, [song]);

    return { tab, fetchTab } ;
}

export default useTab;