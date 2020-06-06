"use strict"

let temperature = process.argv[2]

if(temperature < 20){
    console.log("Activating Heating")
}else if(temperature > 35.0){
    console.log("Room is overheating! Danger")
}else if(temperature > 21.0){
    console.log("De-activating heating")
}else{
    console.log("Temperature is normal")
}