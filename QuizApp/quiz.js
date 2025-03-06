const quizQuestions = [
    {
      question: "What is the correct way to declare an object in JavaScript?",
      options: {
        a: "let obj = ();",
        b: "let obj = [];",
        c: "let obj = {};",
        d: "let obj = <>;"
      },
      correctAnswer: "c"
    },
    {
      question: "Which method is used to convert a JavaScript object to a JSON string?",
      options: {
        a: "JSON.stringify()",
        b: "JSON.parse()",
        c: "toString()",
        d: "stringifyJSON()"
      },
      correctAnswer: "a"
    },
    {
      question: "How do you access the value of a property in a JavaScript object?",
      options: {
        a: "object[property]",
        b: "object.property",
        c: "Both a and b",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Which method is used to check if an object has a specific property?",
      options: {
        a: "object.hasOwnProperty()",
        b: "object.includes()",
        c: "object.exists()",
        d: "object.findProperty()"
      },
      correctAnswer: "a"
    }
  ];
  
const question = document.getElementById("heading");
console.log(question);
console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");
  

  