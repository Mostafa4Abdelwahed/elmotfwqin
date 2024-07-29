import Quiz from "react-quiz-component";
import Container from "../../../Components/ui/container";

const QuizC = () => {
  const quiz = {
    quizTitle: "أسئلة علي الوحدة الأولي",
    quizSynopsis:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    nrOfQuestions: "6",
    questions: [
      {
        question:
          "ماهو الكائن الحي الذي يستطيع العيش بدون ماء لفترة طويلة",
        questionType: "text",
        answerSelectionType: "single",
        answers: [
          "الفيل",
          "الحمار",
          "الجمل",
          "الزرافة",
        ],
        correctAnswer: "3",
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        explanation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        point: "20",
      },
      {
        question: "What are the advantages of React JS?",
        questionType: "text",
        answerSelectionType: "multiple",
        answers: [
          "React can be used on client and as well as server side too",
          "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
          "React components have lifecycle events that fall into State/Property Updates",
          "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
        ],
        correctAnswer: [1, 2, 4],
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        explanation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        point: "20",
      },
    ],
    appLocale: {
      landingHeaderText: "عدد الأسئلة: <questionLength>",
      question: "اسئلة",
      startQuizBtn: "ابدء الامتحان",
      resultFilterAll: "الكل",
      resultFilterCorrect: "صحيحة",
      resultFilterIncorrect: "خاطئة",
      prevQuestionBtn: "السابق",
      nextQuestionBtn: "التالي",
      resultPageHeaderText:
        "الامتحان انتهي, و جاوبت علي <correctIndexLength> اسئلة صح, من <questionLength> اسئلة.",
      singleSelectionTagText: "اختيار واحد",
      resultFilterUnanswered: "مجاوبتش عليها",
      resultPagePoint: "انت جبت <correctPoints> من <totalPoints>.",
      pickNumberOfSelection: "اختر <numberOfSelection>",
      marksOfQuestion: "**درجة السؤال: <marks>**",
      multipleSelectionTagText: "متعدد الاختيارات",
      timerTimeRemaining: "الوقت المتبقي",
      timerTimeTaken: "وقت الامتحان"
    },
  };
  return (
    <Container>
      <Quiz timer={120} quiz={quiz} />
    </Container>
  );
};

export default QuizC;
