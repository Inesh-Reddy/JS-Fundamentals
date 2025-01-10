export default function questionFormat(data) {
  let questionToPush = {
    id: null,
    question: null,
    options: {},
  };
  questionToPush.id = data[0].id;
  questionToPush.question = data[0].question;
  questionToPush.options = data[0].answers;
  return questionToPush;
}
