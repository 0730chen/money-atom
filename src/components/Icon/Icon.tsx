import React from "react";
import css from "classnames";
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../../common/icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name?:string
} & React.SVGAttributes<SVGSVGElement>
const Icon:React.FC<Props> =(props:Props)=>{
    const {name,children,className,...reset} = props
    console.log(children);
    // @ts-ignore
    return (
        <svg className={css('icon',className)} {...reset}>
            <use xlinkHref={'#'+name}/>
        </svg>
    )
};

export default Icon