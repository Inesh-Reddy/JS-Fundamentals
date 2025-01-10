import selectCategory from "./src/category.js";
import examStart from "./src/exam.js";
let question;
let questionsAttempted = [1, 2, 3];
let state = false;

const check = (currentQuestion) => {
  for (let i = 0; i < questionsAttempted.length; i++) {
    if (questionsAttempted[i] === currentQuestion) {
      console.log(`found same question`);
      // break;
      return true;
    }
  }
  return false;
};
const getQuestion = async (url) => {
  let que = await examStart(url);
  question = que;
  console.log(`quiid: ${que.id}`);

  return check(que.id);
};

const questionProvided = (question) => {
  console.log(`question provided ... ${JSON.stringify(question)}`);
  return question;
};

const init = async () => {
  const url = await selectCategory("nodejs");
  while (state == false) {
    let checked = await getQuestion(url.href);
    if (checked == false) {
      console.log(`changed state`);
      state = true;
    }
  }
  questionProvided(question);
};

init();
