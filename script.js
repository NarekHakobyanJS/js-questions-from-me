(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = '#56E81A';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Ճիշտ պատասխան ${numCorrect} / ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1)ինչ մոտեցումներով աշխատող ծրագրավորման լեզու է համարվում JavaScript-ը՝",
      answers: {
        a: "Ֆունկցիոնալ և Օբյեկտ կողմնորոշված:",
        b: "Ֆունկցիոնալ:",
        c: "Օբյեկտ կողմնորոշված:"
      },
      correctAnswer: "a"
    },
    {
      question: "2) Քանի տեսակի են բաժանվում data-type էր JavaScript-ում?",
      answers: {
        a: "8",
        b: "6",
        c: "2",
        d: "1"
      },
      correctAnswer: "c"
    },
    {
      question: "3) Քանի տեսակի  data-type էր կան JavaScript-ում?",
      answers: {
        a: "4",
        b: "8",
        c: "7",
        d: "6"
      },
      correctAnswer: "b"
    },
    {
      question: "4) Որն է primitive և referance data-type էրի տարբերությունը?",
      answers: {
        a: 'տարբերություն չկա',
        b: 'primitive data-type-րը տեսանելի են իրենց բլոկի ներսում, իսկ referance data-type-րը բլոկից դուրս ցանկացած տեղում',
        c: 'primitive data-type-րը իրենց մեջ պահում են արժեքները,  իսկ referance data-type-րը իրենց մեջ պահում են հղումները',
        d: 'referance data-type-րը տեսանելի են իրենց բլոկի ներսում, իսկ primitive data-type-րը բլոկից դուրս ցանկացած տեղում',
      },
      correctAnswer: "c"
    },
    {
      question: "5) Զանգվածի որ մեթոդի օգնությամբ կարելի է ստանալ նոր զանգված հիմնված տվյալ զանգվածի էլէմենտներով?",
      answers: {
        a: "forEach()",
        b: "map()",
        c: "find()",
        d: "reverse()"
      },
      correctAnswer: "b"
    },
    {
      question: "6) const ի մեջ պահպանված արժեքը կարողենք փոխել ?",
      answers: {
        a: "Ոչ քանի որ այն հաստատուն է",
        b: "Այո եթե մենք փոխում ենք referance data-type-ի ներքին արժեքները"
      },
      correctAnswer: "b"
    },{
      question: "7) որն է let ու var ի տարբերությունը",
      answers: {
        a: "var ով հայտարարված փոփոխակաները համարվում են block scope փոփոխակաները և հասանելի են միայն իր բլոկի ներսում իսկ let ով հայտարարվածները պատկանում են function scope ին",
        b: "let ով հայտարարված փոփոխակաները համարվում են block scope փոփոխակաները և հասանելի են միայն իր բլոկի ներսում իսկ var ով հայտարարվածները պատկանում են function scope ին",
        c: "տարբերություն չկա",
        d: "երկուսնել համարվում են function scope փոփոխակաները իսկ տարբերությունը նրանց հայտարարման ձևի մեջ է"
      },
      correctAnswer: "b"
    },
    
    {
      question: "8) ինչ տիպի - է պատակնում ֆունկցիան ?",
      answers: {
        a: "Function",
        b: "Oject"
      },
      correctAnswer: "b"
    },{
      question: "9)որն է Function Declaration և Function Expression տարբերությունը?",
      answers: {
        a: 'Function Expression ով հայտարաված ֆունկցիաները ենթարկվում են հոստինգի իսկ Function Declaration ով հայտարարվածները ոչ',
        b: 'տարբերությունը գրելաձևի մեջ է',
        c: 'Function Declaration ով հայտարաված ֆունկցիաները ենթարկվում են հոստինգի իսկ Function Expression ով հայտարարվածները ոչ',
      },
      correctAnswer: "c"
    },{
      question: "10) callBack ֆունկցիայի սահմանումը ",
      answers: {
        a: "ֆունկցիան որը որպես արգումենտ ընդունում է մեկ այլ ֆունկցիա և վերադաձնում է ֆունկցիա կոչվում է callback function",
        b: "այն ֆունկցիան որը որպես արգումենտ փոխանցվում է մեկ այլ ֆունկցիայի որի կանչը պետքե տեղի ունենա որոշ ժամանակ անց կոչվում է CallBack function"
      },
      correctAnswer: "b"
    },{
      question: "11) pure ֆունկցիայի սահմանումը?",
      answers: {
        a: "այն ֆունկցիան որը վերադարձնում է արդունք կոչվում է Pure function",
        b: "այն ֆունկցիան որը որպես արգումենտ ստանում է primitiv-data type - էր կոչվում է Pure function",
        c: "այն ֆունկցիան որը վերադարձնում է արդունք իրեն փոխանցված արգումենտների հիման վրա, առանց դրանք փոխելու կոչվում է Pure function"
      },
      correctAnswer: "c"
    },{
      question: "12) hide order function(HOF) ֆունկցիայի սահմանումը?",
      answers: {
        a: "ֆունկցիան որը որպես արգումենտ ընդունում է մեկ այլ ֆունկցիա կոչվում է hide order function",
        b: "ֆունկցիան որը վերադաձնում է ֆունկցիա կոչվում է hide order function",
        c: "ֆունկցիան որը որպես արգումենտ ընդունում է մեկ այլ ֆունկցիա կամ վերադաձնում է ֆունկցիա կոչվում է hide order function",
      },
      correctAnswer: "c"
    },{
      question: "13) նշվածներից որն է համարվում Pure function",
      answers: {
        a: "const sum = (a, b) => a + b",
        b: "const sum = (a = 5, b = 7) => a += b",
        c: "const sum = (arr, i ) => arr.map(el => el + i)",
      },
      correctAnswer: "a"
    },{
      question: "14) javaScript ի fetch method ը վերադաձնում է ?",
      answers: {
        a: "Object;",
        b: "Function",
        c: "Promise",
        d: "խոստում"
      },
      correctAnswer: "c"
    },{
      question: "15) ինչ է Promise ը?",
      answers: {
        a: "Promise դա հատուկ Օբյեկտ է նախատեսված անսինխռոն գործողություններ կատարելու համար",
        b: "Promise դա հատուկ Ֆունկցիա է նախատեսված անսինխռոն գործողություններ կատարելու համար",
        c: "Promise դա fetch մեթոդն է",
      },
      correctAnswer: "a"
    },{
      question: "16) քանի իրավիրճակ ունի Promise ը և որոնք են դրանք",
      answers: {
        a: "2 իրավիճակ (1 : resolve; 2 : rejected)",
        b: "3 իրավիճակ (1 : pending; 2 : resolve; 3 : rejected)",
        c: "3 իրավիճակ (1 : pending; 2 : fulfilled ; 3 : rejected)"
      },
      correctAnswer: "c"
    },{
      question: "17)Promise ը միշտ վերդարձնեւմ է ?",
      answers: {
        a: "Object",
        b: "Promise",
        c: "Function;",
      },
      correctAnswer: "b"
    },{
      question: "18) Ինչ հատուկ metod ներ կան Promise ի վերադարձրած արդյունքի հետ աշխատելու համար?",
      answers: {
        a: 'then, catch',
        b: 'then, catch և finally'
      },
      correctAnswer: "b"
    },{
      question: "19) ինչ է Closures - ը",
      answers: {
        a: "Ֆունկցիա որը իր ներսում ստղծում է փոփոխականեր և վերադարձնում է Ֆունկցիա և այդ վերադարձրած Ֆունկցիան հասանելիություն ունի այդ փոփոխականերին կոչվում է Closures",
        b: "Ֆունկցիան որը իր ներսում ստղծում է փոփոխականեր կոչվում է Closures",
        c: "Ֆունկցիան որը վերադարձնում է Ֆունկցիա կոչվում է Closures",
      },
      correctAnswer: "a"
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();