




function getPlayerinput (event){
    event.preventDefault()
    const formData =new FormData(event.target)
   const enteredDay = formData.get('userdate').trim()
    const formatedDay = enteredDay.padStart(2, '0')
   
    const enteredMonth = formData.get('usermonth').trim()
    const enteredYear = formData.get('useryear').trim()
    
  //   if (enteredDay === ''){
  //      userInputDay.classList.add('warning')
  //      displayErrorMessage[0].style.display='block'
  //        displayErrorMessage[0].textContent = 'this field s required'
     
  //   }else if(enteredDay>31){
  //     userInputDay.classList.add('warning')
  //     displayErrorMessage[0].style.display='block'
  //       displayErrorMessage[0].textContent = 'must be a valid day'
  //   }else{
  //         userInputDay.classList.remove('warning')
  //        displayErrorMessage[0].style.display='none'
  //   }
    
  //   if (enteredMonth === ''){
  //       userInputMonth.classList.add('warning')
  //         displayErrorMessage[1].style.display='block'
  //         displayErrorMessage[1].textContent = 'this field s required'
        
  //    }else if(enteredMonth>12){
  //     userInputMonth .classList.add('warning')
  //     displayErrorMessage[1].style.display='block'
  //       displayErrorMessage[1].textContent = 'must be a valid month'
  //   }else{
  //       userInputMonth.classList.remove('warning')
  //      displayErrorMessage[1].style.display='none'
  // }
 
  //    if (!enteredYear){
  //       userInputYear.classList.add('warning')
  //         displayErrorMessage[2].style.display='block'
  //         displayErrorMessage[2].textContent = 'this field s required'
        
  //    }else if(enteredYear>=currentYear){
  //     userInputYear.classList.add('warning')
  //     displayErrorMessage[2].style.display='block'
  //     displayErrorMessage[2].textContent = 'must be in the past'
  //    }else{
  //       userInputYear.classList.remove('warning')
  //      displayErrorMessage[2].style.display='none'
  // }

 
  // if(isNaN(enteredDay)){
   
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  //     displayErrorMessage[0].textContent = 'must be a number'
 
  // } 
  // if(isNaN(enteredMonth)){
  //   userInputMonth.classList.add('warning')
  //   displayErrorMessage[1].style.display='block'
  //     displayErrorMessage[1].textContent = 'must be a number'
  // }
  // if(isNaN(enteredYear)){
  //   userInputYear.classList.add('warning')
  //       displayErrorMessage[2].style.display='block'
  //     displayErrorMessage[2].textContent = 'must be a number'
  // }
  //  if(enteredMonth == '02'&& enteredDay>29){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent = 'must be a valid date'
  // }
  // if(enteredMonth == '04'&& enteredDay>30){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent =  'must be a valid date'
  // }
  // if(enteredMonth == '06'&& enteredDay>30){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent =  'must be a valid date'
  // }
  // if(enteredMonth == '09'&& enteredDay>30){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent = 'must be a valid date'
  // }
  // if(enteredMonth == '11'&& enteredDay>30){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent =  'must be a valid date'
  // }
  // if(enteredDay.length < 2){
  //   userInputDay.classList.add('warning')
  //   displayErrorMessage[0].style.display='block'
  // displayErrorMessage[0].textContent =  'must be in the from \'01\''
  // }
  // if(enteredMonth.length < 2){
  //   userInputMonth.classList.add('warning')
  //   displayErrorMessage[1].style.display='block'
  // displayErrorMessage[1].textContent =  'must be in the from \'01\''
  // }
  
  // if(enteredYear.length < 4 ){
  //   userInputYear.classList.add('warning')
  //   displayErrorMessage[2].style.display='block'
  // displayErrorMessage[2].textContent = 'must be a four digit'
  // }

}
function displayUserInputedData(){
  let inputYearValue = userInputYear.value
let inputDayValue = userInputDay.value
let inputMonthValue = userInputMonth.value

  let firstSpanChild = displayElements[0]
  let secondSpanChild = displayElements[1]
  let thirdSpanChild = displayElements[2]

  let ageDay = currentDay - inputDayValue

  let ageMonth = currentMonth - inputMonthValue
  let ageYear  = currentYear - inputYearValue

//validate day
  if (inputDayValue.trim() == ''){
    userInputDay.classList.add('warning')
    displayErrorMessage[0].style.display='block'
      displayErrorMessage[0].textContent = 'this field is required'
  return
 }else if(inputDayValue.trim() > 31){
   userInputDay.classList.add('warning')
   displayErrorMessage[0].style.display='block'
     displayErrorMessage[0].textContent = 'must be a valid day'
     return
 }else{
       userInputDay.classList.remove('warning')
      displayErrorMessage[0].style.display='none'
 }
 if(inputDayValue.trim().length == 1){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 // displayErrorMessage[0].textContent =  'must be in the from \'01\''
 displayErrorMessage[0].textContent= 'must be 2 digits'
 return
 }
 if(isNaN(inputDayValue.trim())){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 // displayErrorMessage[0].textContent =  'must be in the from \'01\''
 displayErrorMessage[0].textContent= 'must be a number'
 return
 }
 if(ageDay > 0){
  thirdSpanChild.textContent = ageDay
}else if (ageDay < 0){
  ageMonth --
  const lastMonth = new Date(currentYear , currentMonth -1 ,0 )

ageDay+=lastMonth.getDate()
thirdSpanChild.textContent = ageDay
  
}

// validate month 
 
 if (inputMonthValue.trim() === ''){
     userInputMonth.classList.add('warning')
       displayErrorMessage[1].style.display='block'
       displayErrorMessage[1].textContent = 'this field is required'
     return
  }else if(inputMonthValue.trim() > 12 ){
   userInputMonth .classList.add('warning')
   displayErrorMessage[1].style.display='block'
     displayErrorMessage[1].textContent = 'must be a valid month'
     return
 }else{
     userInputMonth.classList.remove('warning')
    displayErrorMessage[1].style.display='none'
}

if(inputMonthValue.length == 1){
  userInputMonth.classList.add('warning')
  displayErrorMessage[1].style.display='block'
  displayErrorMessage[1].textContent= 'must be 2 digits'
  return
  
 }//validate month based on the day vice versa
if(inputMonthValue.trim() == '02'&& inputDayValue.trim()>29){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 displayErrorMessage[0].textContent = 'must be a valid date'
 return
 }
 if(inputMonthValue.trim() == '04'&&  inputDayValue.trim()>30){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 displayErrorMessage[0].textContent =  'must be a valid date'
 return
 }
 if(inputMonthValue.trim() == '06'&&  inputDayValue.trim()>30){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 displayErrorMessage[0].textContent =  'must be a valid date'
 return
 }
 if(inputMonthValue.trim() == '09'&& inputDayValue.trim()>30){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 displayErrorMessage[0].textContent = 'must be a valid date'
 return
 }
 if(inputMonthValue.trim()== '11'&&  inputDayValue.trim()>30){
  userInputDay.classList.add('warning')
  displayErrorMessage[0].style.display='block'
 displayErrorMessage[0].textContent =  'must be a valid date'
 return
 }



if(isNaN(inputMonthValue.trim())){
  userInputMonth.classList.add('warning')
  displayErrorMessage[1].style.display='block'
    displayErrorMessage[1].textContent = 'must be a number'
    return
 }
 if(ageMonth > 0){
  secondSpanChild.textContent = ageMonth
}else if(ageMonth < 0){
  ageYear--
  ageMonth+=12 
  secondSpanChild.textContent = ageMonth
}
// //  if(isNaN(inputYearValue)){
// //   userInputYear.classList.add('warning')
// //       displayErrorMessage[2].style.display='block'
// //     displayErrorMessage[2].textContent = 'must be a number'
// //  }
 

// // validate year
  if (!inputYearValue.trim()){
     userInputYear.classList.add('warning')
       displayErrorMessage[2].style.display='block'
       displayErrorMessage[2].textContent = 'this field is required'
       return
     console.log('brother')
  }else if(inputYearValue.trim()>=currentYear){
   userInputYear.classList.add('warning')
   displayErrorMessage[2].style.display='block'
   displayErrorMessage[2].textContent = 'must be in the past'
   return
  }else{
     userInputYear.classList.remove('warning')
    displayErrorMessage[2].style.display='none'
}
console.log(inputYearValue.length)
if(inputYearValue.trim().length == 3||inputYearValue.trim().length == 2||inputYearValue.trim().length == 1){
  userInputYear.classList.add('warning')
  displayErrorMessage[2].style.display='block'
  displayErrorMessage[2].textContent= 'must be 4 digits'
  console.log('sup brah')
  return
 }
 
 if(isNaN(inputYearValue.trim())){
  userInputYear.classList.add('warning')
  displayErrorMessage[2].style.display='block'
displayErrorMessage[2].textContent = 'must be a number'
return
}

if(inputYearValue.trim()){
  firstSpanChild.textContent = ageYear
}


// calculations













// if(!inputDayValue ||inputDayValue.length < 2||isNaN(inputDayValue)){
//   alert('provide the necessaray details for day')
// }else if(inputDayValue==0 || inputDayValue ==''){
//   return alert('provide a year in the past')
//  }else{
//   secondSpanChild.textContent = inputDayValue
// }

//   if(  !inputMonthValue.trim() ||inputMonthValue.trim().length < 2||isNaN(inputMonthValue.trim())){
//      alert('provi de the necessaray details for month')
//   }else if(inputMonthValue.trim()==0 || inputMonthValue.trim() ==''){
//     return alert('provide a year in the past')
//    }else{
//   thirdSpanChild.textContent = inputMonthValue.trim()
//   }

//   if (!inputYearValue||inputYearValue.length < 4 ||isNaN(inputYearValue)||inputYearValue >= currentYear){
//    return alert('provide the necessaray details for year')
   
//  }else if(inputYearValue==0 || inputYearValue >= currentYear){
//   return alert('provide a year in the past')
//  }else{
//   firstSpanChild.textContent = currentYear - inputYearValue
//  }
  }
