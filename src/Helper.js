let getWeatherInfo = async (city) => {
    try{
        const key = import.meta.env.VITE_API_KEY;
        const url = import.meta.env.VITE_API_URL;

        let res = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let resJson = await res.json();
        console.log(resJson);
        let result = {
            id : resJson.weather[0].id,
            city: city,
            temp: resJson.main.temp,
            tempMin: resJson.main.temp_min,
            tempMax: resJson.main.temp_max,
            humidity: resJson.main.humidity,
            feelsLike: resJson.main.feels_like,
            weather: resJson.weather[0].description,
        };
        return result;
    }catch(err){
        throw err;
    }
}

let weatherImage = (info)=>{
    
    let img ;

    if(info.temp<15){
        img = "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
    else if(info.humidity>80){
        img = "https://images.unsplash.com/photo-1513774775025-b2612b7ec096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
    else if((info.id>750 && info.id<800) || info.id==721){
        img ="https://images.unsplash.com/photo-1447014421976-7fec21d26d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
    else if(info.id<750){
        img = "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
    else{
        img ="https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
    
    return img;
}

export {getWeatherInfo , weatherImage};