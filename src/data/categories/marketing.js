import { TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    "displayName": "Marketing",
    "projects": {
        "linked_in_personal_post":{
            "query":"Title: LinkedIn Personal Post: \nDescription; Stand out with unique and lengthy LinkedIn posts. Elevate your brand, establish your voice, and interact with your audience.\nFields:\nProblem statement: {problem_statement}\nProblem solution: {problem_solution}\nAdditional information: {additional_information}\nTarget audience: {target_audience}\nCall to action: {call_to_action}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n",
            
            "displayName": "LinkedIn Personal Post",
            "purpose": " Stand out with unique and lengthy LinkedIn posts. Elevate "+
                        "your brand, establish your voice, and interact with your audience.",
            "project_id": "linked_in_personal_post",
            "fields": [
                {
                    "name": "problem_statement",
                    "displayName": "Problem Statement",
                    "placeholder": "Problem Statement",
                    "type": TEXT_AREA
                },
                {
                    "name": "problem_solution",
                    "displayName": "Problem Solution",
                    "placeholder": "Problem Solution",
                    "type": TEXT_AREA
                },
                {
                    "name": "additional_information",
                    "displayName": "Additional Information",
                    "placeholder": "Additional Information",
                    "type": TEXT_AREA
                },
                {
                    "name": "call_to_action",
                    "displayName": "Call To Action",
                    "placeholder": "Call To Action (CTA)",
                },
                {
                    "name": "target_audience",
                    "displayName": "Target Audience",
                    "placeholder": "Target Audience",
                },
                toneOfVoice,
                formality
            ]
        },
    }
}