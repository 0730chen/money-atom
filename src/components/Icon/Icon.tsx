import React from "react";
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../../common/icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name:string
}
const Icon:React.FC<Props> =(props:Props)=>{
    return (
        <svg className="icon">
            <use xlinkHref={'#'+props.name}/>
        </svg>
    )
};

export default Icon