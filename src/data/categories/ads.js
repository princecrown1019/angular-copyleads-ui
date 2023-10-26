import { NUMBER_FIELD, TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    displayName: "Ads",
    projects: {
        "aida_method":{
            query: "I want you to serve as AIDA method expert, I will give you the product name, Product descriptions, tone of voice, and formality and you will utilize the world's oldest marketing framework: Attention, Interest, Desire, Action to create a marketing copy concepts. \n\n Fields: Product name: {product_name} Product description: {product_description} Tone of voice: {tone_of_voice} Formality: {formality}",
            
            displayName: "AIDA Method",
            "purpose": "Utilize the world's oldest marketing framework: Attention, Interest, Desire, Action.",
            "project_id": "aida_method",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },
                toneOfVoice,
                formality
            ]
        },
        "pas_method":{
            query: "I want you to serve as PAS method expert, I will give you the product name, Product descriptions, tone of voice, and formality and you will utilize Problem-Agitate-Solution as a useful framework to create a marketing copy concepts. \n\n Fields: Product name: {product_name} Product description: {product_description} Tone of voice: {tone_of_voice} Formality: {formality}",

            displayName: "PAS Method",
            "purpose": "Problem-Agitate-Solution, A useful framework for creating marketing copy concepts.",
            "project_id": "pas_method",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },
                toneOfVoice,
                formality
            ]
        },
        "captive_facebook_ad_headlines":{
            query: "I want you to serve as facebook ad headline generator, I will give you the product name, Product descriptions, keywords, tone of voice, number of benefits and formality and you will generate attention-grabbing headlines for Facebook ads that entice prospects to click and ultimately make a purchase \n Fields: Product name: {product_name} Product description: {product_description} Keywords: {Keywords} Tone of voice: {tone_of_voice} Number of headlines: {no_of_headlines} Formality: {formality}",

            displayName: "Captivating Facebook Ad Headlines",
            "purpose": "Generate attention-grabbing headlines for your Facebook ads that entice prospects to click and ultimately make a purchase.",
            "project_id": "captive_facebook_ad_headlines",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },{
                    "name":"keywords",
                    displayName: "Keywords",
                    "placeholder": "Keywords",
                    "type": TEXT_AREA
                },
                {
                    "name": "no_of_headlines",
                    displayName: "Number of Headlines",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
                toneOfVoice,
                formality
            ]
        },
        "primary_text_for_facebook_ads":{
            query: "I want you to serve as facebook ad primary text generator, I will give you the product name, Product descriptions, keywords, tone of voice, number of benefits and formality and you will compose high-converting copy for the primary text section for Facebook ads. \n\n Fields: Product name: {product_name} Product description: {product_description} Keywords: {Keywords} Tone of voice: {tone_of_voice} Number of primary text: {no_of_primary_text} Formality: {formality}",

            displayName: "Primary Text for Facebook Ads",
            "purpose": "Compose high-converting copy for the primary text section of your Facebook ads.",
            "project_id": "primary_text_for_facebook_ads",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },
                {
                    "name":"keywords",
                    displayName: "Keywords",
                    "placeholder": "Keywords",
                    "type": TEXT_AREA
                },{
                    "name": "no_of_primary_text",
                    displayName: "Number of Primary Text",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
                toneOfVoice,
                formality
            ]
        },
        "google_ad_description":{
            query: "I want you to serve as Google ad descriptions generator, I will give you the product name, Product descriptions, keywords, tone of voice, number of benefits and formality and you will generate high-converting descriptions for your Google ads. \n\n Fields: Product name: {product_name} Product description: {product_description} Keywords: {Keywords} Tone of voice: {tone_of_voice} Number of headlines: {no_of_descriptions} Formality: {formality}",

            displayName: "Google Ad Descriptions",
            "purpose": "Create high-converting descriptions for your Google ads.",
            "project_id": "google_ad_description",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },{
                    "name":"keywords",
                    displayName: "Keywords",
                    "placeholder": "Keywords",
                    "type": TEXT_AREA
                },{
                    "name": "no_of_descriptions",
                    displayName: "Number of descriptions",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
                toneOfVoice,
                formality,
            ]
        },
        "google_ad_headlines":{
            query: "I want you to serve as Google ad headline generator, I will give you the product name, Product descriptions, keywords, tone of voice, number of headlines and formality and you will generate igh-converting headlines for your Google ads. \n\n Fields: Product name: {product_name} Product description: {product_description} Keywords: {Keywords} Tone of voice: {tone_of_voice} Number of headlines: {no_of_headlines} Formality: {formality}",

            displayName: "Google Ad Headlines",
            "purpose": " Compose high-converting headlines for your Google ads.",
            "project_id": "google_ad_headlines",
            "fields": [
                {
                    "name": "product_name",
                    displayName: "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_description",
                    displayName: "Product Description",
                    "placeholder": "Product Description",
                    "type": TEXT_AREA
                },{
                    "name":"keywords",
                    displayName: "Keywords",
                    "placeholder": "Keywords",
                    "type": TEXT_AREA
                },
                {
                    "name": "no_of_headlines",
                    displayName: "Number of Headlines",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
                toneOfVoice,
                formality            
            ]
        },
    }
}