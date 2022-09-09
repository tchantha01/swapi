const baseURL = "https://swapi.dev/api/"

let getResidents = document.querySelector('#button')

function buttonAction(event) {
    
    console.log('Button Clicked')
}

const getInfo = (res) => {
    const residentsURL = []
    console.log(residentsURL)
    residentsURL.push(res.data.residents)
    
}
const errCallback = err => console.log(err.response.data)
// const alderaanInfo = () => axios.get(`${baseURL}/planets/2/`).then(getInfo).catch(errCallback)
const alderaanInfo = () => {
    axios.get(`${baseURL}/planets/2/`).then((res) => {
        let residentURL = res.data.residents;
        console.log(residentURL)
        for(let i=0; i<residentURL.length; i++) {
            axios.get(residentURL[i]).then((res) => {
                let residentName=document.createElement('h2')
                residentName.textContent = res.data.name
                residentsContainer.appendChild(residentName)
        })
    }
})
}



getResidents.addEventListener('click', alderaanInfo)