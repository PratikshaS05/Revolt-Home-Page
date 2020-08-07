import axios from "axios";
import Cookie from "js-cookie"

//GET https://us1.locationiq.com/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=SEARCH_STRING&format=json
const token = "pk.51fdf5cc6e76763843ff2fdf75f22330"
//const address = "NH161A Waghala Nanded-Waghala Nanded Maharashtra 431600 India "
// //address": {
//     "road": "NH161A",
//     "suburb": "Waghala",
//     "city": "Nanded-Waghala",
//     "county": "Nanded",
//     "state_district": "Nanded",
//     "state": "Maharashtra",
//     "postcode": "431600",
//     "country": "India",
//     "country_code": "in"
// },


export const register= async (data) =>{
    try{
        const {Name,
            email,
            workingTime,
            stationAddress,
            stationNumber,
            noOfChargingPoint,
        phoneNumber} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/gridStation/",
    data:{
        Name,
        email,
        phoneNumber,
        workingTime,
        stationAddress,
        stationNumber,
        noOfChargingPoint
    }

})
 
console.log(res.data.data._id)
const Data = JSON.parse(Cookie.get("user"))
if (res){
   var update = await axios({
         method:"PATCH",
         url:`http://localhost:4000/api/gridOwner/update-user/${Data.data.user._id}`,
         data:{
             ownedGridStations:res.data.data._id
         }
     })
     console.log(update)
 }
 
    }
    catch(err){
        console.log(err);

    }
}


export const geom = async(address)=>{
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=Empire%20State%20Building&format=json",
    "method": "GET"
  }
  const res = await axios({
    method:"GET",
    url:`https://us1.locationiq.com/v1/search.php?key=${token}&q=${address}&format=json`
  })
  const latitude = res.data[0].lat
  const longitude = res.data[0].lon

  return {latitude,longitude}
}
/*boundingbox: (4) ["19.009335", "19.329335", "77.151013", "77.471013"]
class: "place"
display_name: "Nanded-Waghala, Nanded, Maharashtra, 431600, India"
icon: "https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png"
importance: 0.85753452139903
lat: "19.169335"
licence: "https://locationiq.com/attribution"
lon: "77.311013"
osm_id: "1185686412"
osm_type: "node"
place_id: "13055573"
type: "city"*/