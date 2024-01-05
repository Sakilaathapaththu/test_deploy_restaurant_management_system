import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteCustomer() {

    const {id} = useParams();    
        
            function getCustomers(){
                axios.delete("https://mern-stack-caqm.onrender.com/customers/delete/" + id).then(function()  {
      alert("Customer data deleted")
    }).catch((err) => {
      alert(err)
    })

            }

            getCustomers()
        
    

    

     




    



return(
    <h1> delete </h1>
)

}


