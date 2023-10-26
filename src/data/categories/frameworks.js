import { TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    "displayName": "Frameworks",
    "projects": {
        "before_after_bridge_framework":{
            "query":"I want you to serve as a Before-After-Bridge Framework generator,\n I will give you the product name, content description, tone of voice, and formality\n and you will create marketing copy using the BAB framework, which outlines the benefits of a product or solution in a Before-After-Bridge format.\n\n\n Fields:\n Product name: {product_name}\n Content description: {content_description}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",
            "displayName": "Before-After-Bridge Framework",
            "purpose": "Create marketing copy using the BAB framework, "+
                "which outlines the benefits of a product or solution in a Before-After-Bridge format.",
            "project_id": "before_after_bridge_framework",
            "fields": [
                {
                    "name": "product_name",
                    "displayName": "Company/Product Name",
                    "placeholder": "Name of the company / product",
                },
                {
                    "name": "content_description",
                    "displayName": "Content Description",
                    "placeholder": "Content Description",
                    "type":TEXT_AREA
                },
                toneOfVoice,
                formality,
            ]
        },
    }
}