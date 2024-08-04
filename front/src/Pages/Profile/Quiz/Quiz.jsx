import { useParams } from "react-router-dom"
import Quiz from "react-quiz-component";
import Container from "../../../Components/ui/container";
import { useGetSingleQuizByIdQuery } from "../../../app/ApiCalls/quizSlice";

const QuizC = () => {
  const params = useParams();
  const { data, isLoading, isError } = useGetSingleQuizByIdQuery(params.id);
  const singleQuiz = data?.data?.attributes;
  console.log(singleQuiz);
  const quiz = {
    quizTitle: singleQuiz?.title,
    quizSynopsis: singleQuiz?.synopsis,
    nrOfQuestions: singleQuiz?.quesionsCount,
    questions: [
      // singleQuiz?.question?.map((question)=>(
      //   {
      //     question: question?.question,
      //   }
      // ))
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
          }
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
      <Quiz timer={singleQuiz?.time} quiz={quiz} />
    </Container>
  );
};

export default QuizC;
