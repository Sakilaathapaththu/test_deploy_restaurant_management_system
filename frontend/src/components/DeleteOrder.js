import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteOrder() {

    const {id} = useParams();    
        
            function getOrders(){
                axios.delete("https://mern-stack-caqm.onrender.com/order/delete/" + id).then(function()  {
      alert("Order data deleted")
    }).catch((err) => {
      alert(err)
    })

            }

            getOrders()
        
    

    

     




    



return(
    <h1> delete </h1>
)

}

