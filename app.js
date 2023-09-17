const quizData = [{
        question: "Does or did anyone in your family have Alzheimer's disease or dementia?",
        a: "Yes",
        b: "No",
        
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"a",
        smoke:"n",
        mloss:"n"
    },
    {
        question: "Have you tested positive for an Alzheimer's disease gene?",
        a: "Yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"a",
    smoke:"n",
    mloss:"n"
    },
    {
        question: "Does (or did) anyone in your family have Parkinson's disease?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"a",
     smoke:"n",
     mloss:"n"
    },
    {
        question: "Have you tested positive for a Parkinson’s disease gene?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"a",
     smoke:"n",
     mloss:"n"
    },
    {
        question: "Have you had a concussion (head injury with loss of consciousness or disorientation, confusion, or memory loss)?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
             smoke:"n",
             mloss:"a"
    },
    {
        question: "Have you had repeated blows to the head (e.g. from sports, military service or physical abuse)?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
   smoke:"n",
   mloss:"n"
    },
    {
        question: "On average do you sleep less than six hours a night?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
   smoke:"n",
   mloss:"n"
    },
    {
        question: "Do you frequently act out your dreams (e.g. talk, shout, scream, kick, hit, punch)?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
   smoke:"n",
   mloss:"n"
    },
    
    {
        question: "Have you tested positive for a Parkinson’s disease gene?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"a",
           smoke:"n",
           mloss:"n"
    },
    
    {
        question: "Do you have heart problems?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
smoke:"n",
mloss:"n"
    },{
        question: "Do you have high blood pressure?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
smoke:"n",
mloss:"n"
    },{
        question: "Have you had a brain stroke?",
        a: "yes",
        b: "No",

        btainstroke:"a",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
smoke:"n",
mloss:"n"
    },{
        question: "Do you have diabetes?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
        
    },
    {
        question: "Do you have high cholesterol?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"a",
        correct: "a",
        maybe:"n",
       smoke:"n",
       mloss:"n"
    },
    {
        question: "Are you obese (body mass index ≥ 30)?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
smoke:"n",
mloss:"n"
    },

    {
        question: "Do you currently smoke?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"a",
        mloss:"n"
    },
    {
        question: "On average do you have more than two drinks of alcohol (e.g. wine, beer, liquor) a day?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },

    {
        question: "Have you been diagnosed by a doctor or treated for depression?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },
    {
        question: "Did you complete less than 12 years of school?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },
    {
        question: "Have you been diagnosed by a doctor or treated for depression?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },
    {
        question: "Are you sedentary (physically inactive)?",
        a: "yes",
        b: "No",

        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },
    {
        question: "Do you eat red meat, fatty foods, sugary foods (or drinks) or white bread daily?",
        a: "yes",
        b: "No",
        
        btainstroke:"n",
        cholestrol:"n",
        correct: "a",
        maybe:"n",
        smoke:"n",
        mloss:"n"
    },

];
let index = 0;
let correct = 0,
    incorrect = 0, itmay=0,smok=0,chol=0,bstrk=0,memoryc=0;
let username="";

let load=0;
let  total = quizData.length;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        
        deflt();
        smoke();
        cholestrl();
        bstroke();
        memoryloss();
        
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.maybe) {
            itmay++;}
            else{

            }
        
        if (ans === data.correct) {
            correct++;
            console.log("cor",correct);

        } else {
            incorrect++;
            console.log("incor",incorrect);

        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}


const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    if (itmay>0){
        document.getElementsByClassName("container")[0].innerHTML = `
            <div class="col">
                <h3 > Hii, you may have chances as some diseases may be in your genetics  </h3>
                <br>
                <h3 >please,consult with a doctor for a neurological exam</h3>
            </div>
        `}
else{
    if(correct>=incorrect){
        
          
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3> Hii, you may have chances of brain disorders  </h3>
            <br>
            <h3 >please,consult your doctor</h3>
        </div>
    `}


    
    // else{
    //        console.log("3n")
    //        if (condition) {
            
    //        }
        // if ((smok>0&&chol>0&&bstroke>0)||(smok>0&&chol>0&&bstroke==0)||(smok==0&&chol>0&&bstroke>0)||(smok>0&&chol==0&&bstroke>0)) {
        //     console.log("3n done")

        //     document.getElementsByClassName("container")[0].innerHTML =`
        //     <div class="col">
        //         <h3 > you are very prone to mental disorders ,due to your smoking/high cholestrol/brain stroke  </h3>
        //         <br>
        //         <h3 >try to mantain a healthy lifestyle and consult with your doctor in regular interval.</h3>
        //     </div>
        // `
        
        else {
            console.log("else entered");
            if(smok>0) {
                document.getElementsByClassName("container")[0].innerHTML =`
                <div class="col">
                    <h3 > Hii, you may have very less chances of brain disorders.  </h3>
                    <br>
                    <h3 >but, reduce the amount of smoking it may lead you to mental disorders <a href="https://www.nami.org/About-Mental-Illness/Common-with-Mental-Illness/Smoking">learn more</a></h3>
                </div>
            `
            }  
            else{

            }  
          
            
            console.log("smok left");
        if (chol>0) {
                document.getElementsByClassName("container")[0].innerHTML =`
                <div class="col">
                    <h3 > Hii, you may have very less chances of brain disorders.  </h3>
                    <br>
                    <h3 >but, reduce the amount of cholestrol it may lead you to mental disorders <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5688912/">learn more</a></h3>
                </div>
            `
            }
            else{

            }
            console.log("chol left");
           if (bstrk>0) {
                document.getElementsByClassName("container")[0].innerHTML =`
                <div class="col">
                    <h3 > Hii, brain stroke may be a reason for mental disorders  </h3>
                    <br>
                    <h3 >it would be better for you to consult a doctor <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9122169/">read more about brain stroke</a></h3>
                </div>
            `
            }
            else{

            }
             if (memoryc>0) {
                document.getElementsByClassName("container")[0].innerHTML =`
                <div class="col">
                    <h3 > Hii, Traumatic Brain Injury may be a reason for mental disorders  </h3>
                    <br>
                    <h3 >it would be better for you to consult a doctor <a href="https://my.clevelandclinic.org/health/diseases/8874-traumatic-brain-injury#:~:text=A%20moderate%20or%20severe%20TBI%20can%20cause%20permanent,post-traumatic%20stress%20disorder%20%28PTSD%29.%20Brain%20bleed.%20Seizures%20%28epilepsy%29.">read more about Traumatic Brain Injury</a></h3>
                </div>
            `
             } else {
                
             }
         

           
             if((itmay==0&&smok==0&&bstrk==0&&chol==0&&memoryc==0)||(correct>=incorrect)){
                document.getElementsByClassName("container")[0].innerHTML =`
                <div class="col">
                    <h3 > Hii, you may have very less chances of brain disorders.  </h3>
                    <br>
                    <h3 ><a href="">please,read our articles to know more about brain health</a></h3>
                </div>
            `
            }

            else{

            }
        }
   
   
   
}
    } 
        
       
const deflt=()=>{
    
    const dataa = quizData[index]
    const dans = getAnswer()//default answer
    if (dans===dataa.maybe){
      itmay++;
      console.log("itmay",itmay)
    }


    else{}
}
const smoke=()=>{
    if(index==15){
    const dat = quizData[15]
    const an=getAnswer()
if(an===dat.smoke){
      smok++
      console.log("smok",smok)
}}}
const cholestrl=()=>{
    if(index==13){
    const datt = quizData[13]
    const ana=getAnswer()
if(ana===datt.cholestrol){
      chol++
      console.log("chol",chol)

}}

}
const bstroke=()=>{
    if (index==11){
    const datt = quizData[11]
    const ana=getAnswer()
if(ana===datt.btainstroke){
      bstrk++
      console.log(bstrk)
}
}}
const memoryloss=()=>{
    if(index==4){
        const dattt=quizData[4]
        const anss=getAnswer();
        if(anss===dattt.mloss){
             memoryc++
             console.log(memoryc)
        }
    }
}
// const name=()=>{
//     // `${index + 1}) ${data.question}`
//     document.getElementsByClassName("container")[0].innerHTML = `
//             <div class="col">
//             <label for="fname">Enter your name</label><br>
//             <input type="text" id="name" name="fname"><br>
        
//            `;$(username=document.getElementById("name").value)`
//             </div>
//         `
// }
loadQuestion(index);