import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    "displayName": "Surveys",
    "projects": {
        "engaging_survey_questions": {
            "query":"I want you to serve as a survey Questions generator,\n I will give you the survey title, product description, survey type, answer type, target audience, tone of voice, formality, and number of questions\n and you will give me an output of complete survey questions with answers\n Fields:\n Survey title: {survey_title}\n Product description: {product_description}\n Survey type: {survey_type}\n Answer type: {answer_type}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n Number of Questions & Answers: {no_of_questions_answers}\n",

            "displayName": "Engaging Survey Questions",
            "project_id": "engaging_survey_questions",
            "purpose": "Create questions for your survey that will engage your audience",
            "fields": [
                {
                    "name": "survey_title",
                    "displayName": "Survey Title",
                    "placeholder": "Title of the Survey in Your Mind"
                },
                {
                    "name":"survey_type",
                    "displayName": "Survey Type",
                    "placeholder": "Type of Survey"
                },
                {
                    "name": "product_description",
                    "displayName": "Product Description",
                    "placeholder": "Enter Description here...",
                    "type": "TEXT_AREA"
                },
                {
                    "name": "answer_type",
                    "displayName": "Type of Answers",
                    "type": "SELECT_OPTION",
                    "values": [
                        {
                            "displayName": "Multiple Choice",
                            "value": "Multiple Choice"
                        },
                        {
                            "displayName": "Yes / No",
                            "value": "Yes or No"
                        }
                    ]
                },
                {
                    "name": "target_audience",
                    "displayName": "Target Audience",
                    "placeholder": "Who are your customers"
                },
                {
                    "name": "no_of_questions_answers",
                    "displayName": "Number of questions and answers",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": "NUMBER_FIELD"
                },
                toneOfVoice,
                formality
            ]
        },
        "compelling_survey_description": {
            "query":"I want you to serve as a survey description generator,\n I will give you the survey title, product description, survey type, call to action, target audience, tone of voice, formality, number of survey descriptions\n and you will give me an output of compelling survey headline.\n Fields:\n Survey title: {survey_title}\n Product description: {product_description}\n Survey type: {survey_type}\n Call to action: {call_to_action}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n Number of description: {no_of_description}\n",

            "displayName": "Compelling Survey Descriptions",
            "project_id": "compelling_survey_description",
            "purpose": "Craft descriptions that will captivate your audience and drive participation in your survey",
            "fields": [
                {
                    "name": "survey_title",
                    "displayName": "Survey Title",
                    "placeholder": "Title of the survey",
                },
                {
                    "name": "product_description",
                    "displayName": "Product Description",
                    "placeholder": "Enter Description here...",
                    "type": "TEXT_AREA"
                },
                {
                    "name":"survey_type",
                    "displayName": "Survey Type",
                    "placeholder": "Type of Survey"
                },
                {
                    "name":"call_to_action",
                    "displayName": "call to action",
                    "placeholder": "call to action"
                },
                {
                    "name": "no_of_description",
                    "displayName": "Number of Description",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": "NUMBER_FIELD"
                },
                {
                    "name": "target_audience",
                    "displayName": "Target Audience",
                    "placeholder": "Who are your customers"
                },
                toneOfVoice,
                formality
            ]
        },
        "engaging_survey_titles": {
            "query":"I want you to serve as a survey headlines generator,\n I will give you the company name, product description, survey type, target audience, tone of voice, formality, number of survey titles\n and you will give me an output of compelling survey headline.\n Fields:\n Company name: {company_name}\n Product description: {product_description}\n Survey tupe: {survey_type}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n Number of titles: {no_of_titles}\n",

            "displayName": "Engaging Survey Titles",
            "purpose": "Generate new survey titles that will attract your audience and increase participation",
            "project_id": "engaging_survey_titles",
            "fields": [
                {
                    "name": "company_name",
                    "displayName": "Company Name",
                    "placeholder": "Enter Name of Your Company"
                },
                {
                    "name": "product_description",
                    "displayName": "Product Description",
                    "placeholder": "Enter Description here...",
                    "type": "TEXT_AREA"
                },
                {
                    "name":"survey_type",
                    "displayName": "Survey Type",
                    "placeholder": "Type of Survey"
                },
                {
                    "name": "target_audience",
                    "displayName": "Target Audience",
                    "placeholder": "Who are your customers"
                },
                {
                    "name": "no_of_titles",
                    "displayName": "Number of Titles",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": "NUMBER_FIELD"
                },
                toneOfVoice,
                formality
            ]
        }
    }
}