const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector("#result");

    if(height < 0 || height === '' || isNaN(height)){
        result.innerHTML = `Please provide valid value for height`;
    }
    else if(weight < 0 || weight === '' || isNaN(weight)){
        result.innerHTML = `please provide valid value for weight`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi <= 18.5)
            result.innerHTML = `<span>Your BMI is ${bmi} , you are Under Weight</span>`
        else if(bmi > 18.5 && bmi <= 24.9)
            result.innerHTML = `<span>Your BMI is ${bmi} , you are Normal Weight</span>`
        else if(bmi > 24.9 && bmi <= 29.9)
            result.innerHTML = `<span>Your BMI is ${bmi} , you are Over Weight</span>`
        else{
            result.innerHTML = `<span>Your BMI is ${bmi} , you are obese</span>`
        }
    }
});