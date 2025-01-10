/**
 * Slecet catagory
 * start the exam
 *      - before moving to next question, user needs to select the option
 * ends the test
 * Show results on the screen
 */
import dotenv from "dotenv";
dotenv.config();

export default function setCategory(inputCategory) {
  let link = process.env.quizQuestions;
  let tag = inputCategory;
  let newTag = tag.slice(0, -2) + "JS";
  var url = new URL(link);
  url.searchParams.set("category", inputCategory);
  url.searchParams.set("tags", newTag);
  return url;
}
