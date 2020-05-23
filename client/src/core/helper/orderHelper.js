import {API} from "../../backend"

export const creatorder=(userId,token,orderData)=>{
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`

        },
        body:JSON.stringify({order:orderData})
    }).then(reponse=>{
        return Response.json()
    })
    .catch(err=>console.log(err)
    )

}