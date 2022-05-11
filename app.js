// - Create an array  and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result and finally convert it to a JSON String 


let jesonfile = Class_five.map((data,index)=>{

let result =data.Ban>=33 && data.Eng>=33 && data.Math>=33 && data.Sc>=33 && data.S_Sc>=33 && data.Rel>=33 ?' passed' : 'Failed';


let cgpa = (getGpa(data.Ban)+getGpa(data.Eng)+getGpa(data.Math)+getGpa(data.Sc)+getGpa(data.S_Sc)+getGpa(data.Rel))/6
    let final_CGPA=cgpa.toFixed(2);
console.log(`
${data.Name}
${data.Roll}
${data.Gender}

------------------------------------------------------------------------------------------------------------
Subject                 Mark       GPA     Grade       CGPA           Final Result
Bangla                  ${data.Ban}         ${getGpa(data.Ban)}        ${getGrade(data.Ban)}
English                 ${data.Eng}         ${getGpa(data.Eng)}       ${getGrade(data.Eng)}      ${JSON.stringify(final_CGPA)}      ${JSON.stringify(result)}
Math                    ${data.Math}         ${getGpa(data.Math)}       ${getGrade(data.Math)}
Science                 ${data.Sc}         ${getGpa(data.Sc)}         ${getGrade(data.Sc)}
Social Science          ${data.S_Sc}        ${getGpa(data.S_Sc)}      ${getGrade(data.S_Sc)}
Religion                ${data.Rel}         ${getGpa(data.Rel)}       ${getGrade(data.Rel)}
`)
})






//2-Family Phone Book with Json stringify


Family_phonebook.map((data,index)=>{
    console.log(`
    "Name":${JSON.stringify(data.Name)}
    "Adress":${JSON.stringify(data.Adress)}
    "Email":${JSON.stringify(data.Email)}
    "Mobile":${JSON.stringify(data.Mobile)}
    `)
})




//3 -developers info with stingify

dev.map((data,index)=>{
    console.log(`
  "Name":  ${JSON.stringify(data.Name)}
  "Age":  ${JSON.stringify(data.Age)}
 "Skill":${JSON.stringify(data.Skill)}
    `)
})








// 4- make a array of those JSON String and convert it to a JSON and after that find all data by json to a object 
let Json_sting = JSON.parse(json_data);

Json_sting.map((data,index)=>{
    console.log(`
     Name: ${data.Name}
     Age: ${data.Age}
     Adress: ${data.Skill}
    `)
})
