const cityName = document.getElementById("cityName");
const SubmitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status")
const temp = document.getElementById("temp_real_val");
const datahide = document.querySelector('.middle_layer');


const day = document.getElementById("day");
let d = new Date();
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day.innerText = arr[d.getDay()]


const month = document.getElementById('today_date');
let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
month.innerText=`${d.getDate()} ${monthArr[d.getMonth()]}`


const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = "Please enter a city name";
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=df8beb76fe986cd4856605f097af920e`
            const response = await fetch(url);
            const data = await response.json(); //convert it on json format
            const arrData = [data];

            // console.log(data);
            // console.log(data.sys.country)
            city_name.innerText = `${data.name}, ${data.sys.country}`;

            temp.innerText = data.main.temp;

            const tempMood = arrData[0].weather[0].main;
            // console.log(tempMood)

            if (tempMood == 'Clear') {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow"></i>';
            }
            else if (tempMood == 'Clouds') {
                temp_status.innerHTML = '<i class="fas fa-cloud text-primary"></i>';
            }
            else if (tempMood == 'Rain') {
                temp_status.innerHTML = '<i class="fas fa-cloud-rain"></i>';
            }
            else {
                temp_status.innerHTML = '<i class="fa fa-sun text-warning" aria-hidden="true"></i>'
            }
            datahide.classList.remove('data_hide');


        }
        catch {
            city_name.innerText = `Please enter the city name properly.`
            datahide.classList.add('data_hide');
        }
    }

}
SubmitBtn.addEventListener('click', getinfo);