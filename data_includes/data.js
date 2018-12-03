/*
-- WH judgement task
-- Key for Items:
    formalExpert
    informalExpert -
    filler1Informal - ne... pas/aucun fillers
    filler2informalExpert -
*/

var shuffleSequence = seq(anytype); // Work out randomization for items
var practiceItemTypes; // Practice Items?
var centerItems = true;


var defaults = [
  "Question", {
      //"as" option is obligatory
      as: ["Yes", "No"],
      hasCorrect: true
        //if a question has a correct answer,
          //keep it as the first element of the "as" option
  }
];

var items = [
  /*
  Do we need separators?
  Is there a way to import from CSV?
  */

  /*
  INTRODUCTION
  */

  ["intro",
    //type
    "Form",
    //obligatory option that includes a HTML file that is a questionnaire
    {html: { include: "example_intro.html" },
    //fields that need to have the right format when taking input from user
    validators: {
      //age has to be a number
      age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
      }
  } ],

  // TARGET ITEMS

  /*
  TEMPLATE for all items
  ["target1_01", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];
  */

  ["target1_01", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}],
  /*
  ["target1_02", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];
  ["target1_03", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];

  ["target1_04", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];
  */
];
