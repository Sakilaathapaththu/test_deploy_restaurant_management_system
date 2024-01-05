import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteEmployee() {

    const {id} = useParams();    
        
            function getEmployees(){
                axios.delete("https://mern-stack-caqm.onrender.com/employees/delete/" + id).then(function()  {
      alert("Employee data deleted")
    }).catch((err) => {
      alert(err)
    })

            }

            getEmployees()
        
    

    

     




    



return(
    <h1> delete </h1>
)

}

