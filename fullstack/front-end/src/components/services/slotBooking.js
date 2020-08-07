import axios from "axios";
import Cookie from "js-cookie"

var user=JSON.parse(Cookie.get("user"))

export const addToDb = async (data) => {
  try {
   
    const res = await axios({
      method: "POST",
      url: "http://localhost:4000/api/slotBooking/",
      data: {
        date:12/7/9,
      startingTime:"11AM",
      endingTime:"1PM",
      chargerType:"CHadmo",
      Station:"5f1dc1d8d9d2d625882566b2",
      User:user.data.user._id

      },
    });
  }
  catch(err){
    console.log(err)
    console.log(user.data.user._id);
}

};
