import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteDistribution() {

    const {id} = useParams();    
        
            function getDistribution(){
                axios.delete("https://mern-stack-caqm.onrender.com/distributions/deleteDistribution/" + id).then(function()  {
      alert("Distribution data deleted")
    }).catch((err) => {
      alert(err)
    })

            }

            getDistribution()
        
    

    

     




    



return(
    <h1> delete </h1>
)

}

