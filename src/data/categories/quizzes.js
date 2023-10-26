import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";
import {
	HIDDEN_FIELD,
	NUMBER_FIELD,
	ProjectField,
	SELECT_OPTION,
	TEXT_AREA,
	TEXT_FIELD,
} from "../dtos";

export default {
	displayName: "Quiz",
	projects: {
		question_answer_for_quiz: {
			query:"I want you to serve as a quiz generator, I will give you the quiz title, product description, quiz type, answer type, target audience, tone of voice, formality, and number of questions and you will give me an output of complete quiz questions with answers \n Fields: Quiz title: {quiz_title} Product description: {product_description} Quiz type : {quiz_type} Answer type : {answer_type} Target audience: {target_audience} Tone of voice: {tone_of_voice} Formality: {formality} Number of quiz questions: {no_of_questions}",
			
			displayName: "Design Quiz Questions & Answers",
			project_id: "question_answer_for_quiz",
			purpose: "Create questions and answers for your quiz",
			fields: [
				{
					name: "quiz_title",
					displayName: "Quiz Title",
					placeholder: "Title of the Quiz in Your Mind",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Enter Description here...",
					type: TEXT_AREA,
				},
				{
					name: "quiz_type",
					displayName: "Quiz Type",
					placeholder: "Ex. personality quiz",
				},
				{
					name: "answer_type",
					displayName: "Answer Type",
					placeholder: "Ex. Yes or No answers",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Ex. Children",
				},
				{
					name: "no_of_questions",
					displayName: "Number of Questions",
					placeholder: "1",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		oneshot_quiz: {
			query:"I want you to serve as a quiz generator,\n I will give you the quiz title, product description, quiz type, answer type, target audience, tone of voice, formality, number of results and number of questions\n and you will give me an output of a complete quiz with questions, answers results and the mapping\n Fields:\n Quiz title: {quiz_title}\n Product description: {product_description}\n Quiz type : {quiz_type}\n Answer type : {answer_type}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n Number of quiz questions: {no_of_questions}\n Number of quiz results: {no_of_results}",

			displayName: "One Shot Quiz",
			project_id: "oneshot_quiz",
			purpose:
				"Develop questions, answers, and results for your quiz.",
			fields: [
				{
					name: "quiz_title",
					displayName: "Quiz Title",
					placeholder: "Title of the Quiz in Your Mind",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Enter Description here...",
					type: TEXT_AREA,
				},
				{
					name: "quiz_type",
					displayName: "Quiz Type",
					placeholder: "Ex. personality quiz",
				},
				{
					name: "answer_type",
					displayName: "Type of Answer",
					type: SELECT_OPTION,
					values: [
						{
							displayName: "Multiple Choice",
							value: "Multiple Choice",
						},
						{
							displayName: "Yes / No",
							value: "Yes or No",
						},
					],
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Who are your customers",
				},
				{
					name: "no_of_questions",
					displayName: "Number of Questions",
					placeholder: "1",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				{
					name: "no_of_results",
					displayName: "Number of Results",
					placeholder: "1",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		engaging_quiz_results: {
			query:"I want you to serve as a quiz results generator, I will give you the quiz title, product description, quiz type, call to action, target audience, tone of voice, formality, number of descriptions and you will give me an output of engadging quiz results \n Fields: Quiz title: {quiz_title} Product description: {product_description} Quiz type : {quiz_type} Call to action : {call_to_action} Target audience: {target_audience} Tone of voice: {tone_of_voice} Formality: {formality} Number of results: {no_of_results}",

			displayName: "Engaging Quiz Results",
			project_id: "engaging_quiz_results",
			purpose:
				"Conclude your quiz with a results page that compels leads to take your call to action",
			fields: [
				{
					name: "quiz_title",
					displayName: "Quiz Title",
					placeholder: "Title Of The Quiz",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Description of the product",
				},
				{
					name: "quiz_type",
					displayName: "Quiz Type",
					placeholder: "Ex. personality quiz",
				},
				{
					name: "call_to_action",
					displayName: "Call to Action (CTA)",
					placeholder: "write something here...",
					type: TEXT_AREA,
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Target Audience",
				},
				{
					name: "no_of_results",
					displayName: "Number of Results",
					placeholder: "1",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		quiz_description: {
			query:"I want you to serve as a quiz description generator, I will give you the quiz title, product description, quiz type, call to action, target audience, tone of voice, formality, number of descriptions and you will give me an output of compelling descriptions \n Fields: Quiz title: {quiz_title} Product description: {product_description} Quiz type : {quiz_type} Call to action : {call_to_action} Target audience: {target_audience} Tone of voice: {tone_of_voice} Formality: {formality} Number of descriptions: {no_of_descriptions}",

			project_id: "quiz_description",
			displayName: "Compose Quiz Descriptions",
			purpose:
				"Craft captivating quiz descriptions for use on quiz cover page and form fields",
			fields: [
				{
					name: "quiz_title",
					displayName: "Quiz Title",
					placeholder: "Title Of The Quiz",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Enter Description here...",
					type: TEXT_AREA,
				},
				{
					name: "quiz_type",
					displayName: "Quiz Type",
					placeholder: "Ex. personality quiz",
				},
				{
					name: "call_to_action",
					displayName: "Call to Action (CTA)",
					placeholder: "write something here...",
					type: TEXT_AREA,
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Who are your customers",
				}, {
					name: "no_of_descriptions",
					displayName: "Number of Descriptions",
					placeholder: "1",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		quiz_title: {
			project_id: "quiz_title",
			query:"I want you to serve as a quiz title generator, I will give you the product description, quiz type, target audience, tone of voice, formality, and number of titles and you will give me an output of compelling quiz titles. \n Fields: Product description: {product_description} Quiz type : {quiz_type} Target audience: {target_audience} Tone of voice: {tone_of_voice} Formality: {formality} Number of quiz titles: {no_of_titles}",

			displayName: "Brainstorm New Quiz Titles",
			purpose:
				"Generate engaging quiz titles to attract your audience and drive participation",
			fields: [
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Enter Description of Your Product",
					type: TEXT_AREA,
				},
				{
					name: "quiz_type",
					displayName: "Quiz Type",
					placeholder: "Ex. personality quiz",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Who are your customers",
				},
				{
					name: "no_of_titles",
					displayName: "Number of Titles",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality
			],
		},
	},
};
