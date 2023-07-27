import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
    return(
        <>
         <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
         <BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="#287efa"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            visible={true}
                        />
         </div>
        </>
    )
}