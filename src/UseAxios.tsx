/*
@Params自定义axios钩子函数
 */
import React, { useState, useEffect } from 'react';

const useAxios = (url:string) => {
    const [data, updateData] = useState(undefined);

    // empty array as second argument equivalent to componentDidMount
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            updateData(json);
        }
        fetchData();
    }, [url]);

    return data;
};
export default useAxios