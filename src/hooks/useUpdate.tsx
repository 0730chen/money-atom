import {useEffect, useRef} from "react";

const useUpdate = (fn:()=>void,deps:any[])=> {
    const count = useRef(0)
    useEffect(() => {
        count.current += 1
    }, [])
    useEffect(() => {
        console.log(count.current);
        if (count.current > 0) {
            console.log(111)
            fn()
        }
    }, deps)
}
export {useUpdate}