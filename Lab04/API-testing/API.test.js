import axios from "axios";

axios.get("https://restful-booker.herokuapp.com/booking")
.then(function(response){
    console.log(response.data)
})