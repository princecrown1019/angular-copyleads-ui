import { TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    "displayName": "SEO",
    "projects": {
        "seo_home_page":{
            "query":"I want you to serve as an SEO homepage title and meta description generator,\n I will give you the product name, homepage description, Keywords, formality\n and you will give me SEO-friendly title tags and meta descriptions for homepages to achieve high rankings on Google.\n\n\n Fields:\n Product name: {product_name}\n Homepage description: {homepage_description}\n Keywords: {keywords}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",
            "displayName": "SEO - Homepage - Title and Meta Descriptions",
            "purpose": "Craft SEO-friendly title tags and meta "+
                        "descriptions for homepages to achieve high rankings on Google",
            "project_id": "seo_home_page",
            "fields": [
                {
                    "name": "product_name",
                    "displayName": "Company/Product Name",
                    "placeholder": "Company/Product Name",
                },
                {
                    "name": "homepage_description",
                    "displayName": "Homepage Description",
                    "placeholder": "Homepage Description",
                    "type": TEXT_AREA
                },
                {
                    "name": "keywords",
                    "displayName": "Target Keyword",
                    "placeholder": "Target Keyword",
                },
                toneOfVoice,
                formality
            ]
        },
        "seo_service_page":{
            "query":"I want you to serve as an SEO service page title and meta description generator,\n I will give you the product name, service description, Keywords, formality\n and you will develop SEO-optimized title tags and meta descriptions to achieve top Google rankings for company services pages.\n\n\n Fields:\n Product name: {product_name}\n Service description: {service_description}\n Keywords: {keywords}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",

            "displayName": "SEO - Services Pages - Title and Meta Descriptions",
            "purpose": "Develop SEO-optimized title "+
                        "tags and meta descriptions to achieve top Google rankings for company services pages",
            "project_id": "seo_service_page",
            "fields": [
                {
                    "name": "product_name",
                    "displayName": "Company Name",
                    "placeholder": "Company Name",
                },
                {
                    "name": "service_description",
                    "displayName": "Service Description",
                    "placeholder": "Service Description",
                    "type": TEXT_AREA
                },
                {
                    "name": "keywords",
                    "displayName": "Target Keyword",
                    "placeholder": "Target Keyword",
                    "type": TEXT_AREA
                },
                toneOfVoice,
                formality
            ]
        },
    }
}