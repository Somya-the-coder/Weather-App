//weatherapi.com(leafoverma@gmaaa,leafo@..)
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'aa316570b8b642f89df72317242001'
    }
  };

  //getweather a function and city is parameter
  const getWeather = (city) => {//getweather a function and city is parameter
    cityName.innerHTML = city;//innerHTML-gives html the power to make direct changes in html/browser
    //hardcode-developer apne man se values daal Diya while making app
  
    fetch('https://api.weatherapi.com/v1/current.json?key=aa316570b8b642f89df72317242001&q=${city},${country}' + city, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.location.region);//console.log=sopln/print
  
        if (response.error) {
          console.error("Error in API response:", response.error.message);
          // Handle the error appropriately, e.g., display an error message to the user
        } else {
          // Access properties based on the actual structure of the response
          //name.innerHTML = response.location.name;
          temp_c.innerHTML = response.current.temp_c;
          temp_c2.innerHTML = response.current.temp_c;
          text.innerHTML = response.current.condition.text;
          wind_kph.innerHTML = response.current.wind_kph;
          wind_kph2.innerHTML = response.current.wind_kph;
          wind_degree.innerHTML = response.current.wind_degree;
          humidity.innerHTML = response.current.humidity;
          humidity2.innerHTML = response.current.humidity;
          cloud.innerHTML = response.current.cloud;
          feelslike_f.innerHTML = response.current.feelslike_f;
          region.innerHTML = response.location.region;
        }
      })
      .catch(err => console.error(err));
  };
  
  const submit = document.getElementById("submit");//document--our whole o/p page or website 
  
  submit.addEventListener("click", (e) => {//yellow ones are function(when click is called 2nd parameter "e" runs)
    e.preventDefault();
    getWeather(document.getElementById("city").value);
  });//console.log=sopln/print
  
  // Initial call to display weather for "Delhi"
  getWeather("Delhi","India");

  //SHANGHAI API
  fetch('https://api.weatherapi.com/v1/current.json?key=aa316570b8b642f89df72317242001&q=Shanghai,China' + city, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.location.region);
  
        if (response.error) {
          console.error("Error in API response:", response.error.message);
        } else {

            temp_cS.innerHTML = response.current.temp_c;
            textS.innerHTML = response.current.condition.text;
            wind_kphS.innerHTML = response.current.wind_kph;
            wind_degreeS.innerHTML = response.current.wind_degree;
            humidityS.innerHTML = response.current.humidity;
            cloudS.innerHTML = response.current.cloud;
            feelslike_fS.innerHTML = response.current.feelslike_f;
            regionS.innerHTML = response.location.region;
        }
      })

      //BOSTON API
  fetch('https://api.weatherapi.com/v1/current.json?key=aa316570b8b642f89df72317242001&q=Boston,United States of America' + city, options)
  .then(response => response.json())
  .then(response => {
    console.log(response.location.region);

    if (response.error) {
      console.error("Error in API response:", response.error.message);
    } else {

        temp_cB.innerHTML = response.current.temp_c;
        textB.innerHTML = response.current.condition.text;
        wind_kphB.innerHTML = response.current.wind_kph;
        wind_degreeB.innerHTML = response.current.wind_degree;
        humidityB.innerHTML = response.current.humidity;
        cloudB.innerHTML = response.current.cloud;
        feelslike_fB.innerHTML = response.current.feelslike_f;
        regionB.innerHTML = response.location.region;
    }
  })

  //LUCKNOW API
  fetch('https://api.weatherapi.com/v1/current.json?key=aa316570b8b642f89df72317242001&q=Lucknow,India' + city, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.location.region);
  
        if (response.error) {
          console.error("Error in API response:", response.error.message);
        } else {

            temp_cL.innerHTML = response.current.temp_c;
            textL.innerHTML = response.current.condition.text;
            wind_kphL.innerHTML = response.current.wind_kph;
            wind_degreeL.innerHTML = response.current.wind_degree;
            humidityL.innerHTML = response.current.humidity;
            cloudL.innerHTML = response.current.cloud;
            feelslike_fL.innerHTML = response.current.feelslike_f;
            regionL.innerHTML = response.location.region;
        }
      })

      //KOLKATA API
  fetch('https://api.weatherapi.com/v1/current.json?key=aa316570b8b642f89df72317242001&q=Kolkata,India' + city, options)
  .then(response => response.json())
  .then(response => {
    console.log(response.location.region);

    if (response.error) {
      console.error("Error in API response:", response.error.message);
    } else {

        temp_cK.innerHTML = response.current.temp_c;
        textK.innerHTML = response.current.condition.text;
        wind_kphK.innerHTML = response.current.wind_kph;
        wind_degreeK.innerHTML = response.current.wind_degree;
        humidityK.innerHTML = response.current.humidity;
        cloudK.innerHTML = response.current.cloud;
        feelslike_fK.innerHTML = response.current.feelslike_f;
        regionK.innerHTML = response.location.region;
    }
  })
  
