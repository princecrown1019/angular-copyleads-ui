import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
    "displayName": "Email",
    "projects": {
        "subject_line":{
            query: "I want you to serve as an email subject lines generator, I will give you the product name, email content, tone of voice, number of subject lines, and formality, and you will give me email subject lines that grab attention.\n\nFields:\nProduct/Company name: {company_name}\nEmail content: {email_content}\nTone of voice: {tone_of_voice}\nFormality: {formality}\nNumber of subject lines: {number_of_subject_lines}\n\n",

            "displayName": "Subject Lines that Grab Attention",
            "purpose": "Compose email subject lines that entice readers to open.",
            "project_id": "subject_line",
            "fields": [
                {
                    "name": "company_name",
                    "displayName": "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"email_content",
                    "displayName": "Email Content",
                    "placeholder": "Content of the email",
                    "type": "TEXT_AREA"
                },   
                {
                    name: "number_of_subject_lines",
                    displayName: "Number of Subject Lines",
                    type: "NUMBER_FIELD",
                    minVal: 1,
                    maxVal: 10,
                  },
                toneOfVoice,
                formality,
            ]
        },
        "effective_cold_email":{
            query: "I want you to serve as a cold email generator, I will give you the product name, Product information, Context for email, tone of voice, Email type, and formality, and you will write me an engaging cold email with a subject line and sections where CTAs should be added.\n\nFields:\nProduct name: {product_name}\nProduct information: {product_information}\nKeywords: {keywords}\nTone of voice: {tone_of_voice}\nEmail type: {email_type}\nFormality: {formality}\n\n",

            "displayName": "Effective Cold Emails",
            "purpose": "Craft cold emails that produce results and receive responses.",
            "project_id": "effective_cold_email",
            "fields": [
                {
                    "name": "product_name",
                    "displayName": "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_information",
                    "displayName": "Product Information",
                    "placeholder": "Product Information",
                    "type": "TEXT_AREA"
                },
                {
                    "name":"email_type",
                    "displayName": "Type of Email",
                    "placeholder": "Type of Email",
                    "type": "TEXT_AREA"
                },
                {
                    "name": "keywords",
                    "displayName": "Keywords to Include",
                    "placeholder": "Keywords to Include",
                    "type":"TEXT_AREA"
                  },
                toneOfVoice,
                formality,
            ]
        },
        "persuasive_writing_points":{
            query: "I want you to serve as a persuasive writing points generator, I will give you the product name, Product information, tone of voice, number of points, and formality, and you will generate persuasive writing points for incorporation into landing pages, emails, and more.\n\nFields:\nProduct name: {product_name}\nProduct information: {product_information}\nTone of voice: {tone_of_voice}\nNumber of points: {no_of_points}\nFormality: {formality}\n\n",

            "displayName": "Persuasive Writing Points",
            "purpose": "Generate persuasive writing points for incorporation into landing pages, emails, and more",
            "project_id": "persuasive_writing_points",
            "fields": [
                {
                    "name": "product_name",
                    "displayName": "Company/Product Name",
                    "placeholder": "Name of the company or product",
                },
                {
                    "name":"product_information",
                    "displayName": "Product Information",
                    "placeholder": "Product Information",
                    "type": "TEXT_AREA"
                }, 
                {
                    name: "no_of_points",
                    displayName: "Number of Points",
                    type: "NUMBER_FIELD",
                    minVal: 1,
                    maxVal: 10,
                  },
                toneOfVoice,
                formality,
            ]
        },
        "feature_into_benefit":{
            query: "I want you to serve as a business professional, I will give you the product name, Product descriptions, product features, tone of voice, number of benefits, and formality, and you will convert the product's features into benefits that drive action.\n\nFields:\nProduct name: {product_name}\nProduct description: {product_description}\nProduct features: {product_features}\nTone of voice: {tone_of_voice}\nNumber of benefits: {no_of_benifits}\nFormality: {formality}\n\n",

            "displayName": "Transform Features into Benefits",
            "purpose": "Convert your product's features into benefits that drive action.",
            "project_id": "feature_into_benefit",
            "fields": [
                {
                    "name":"product_name",
                    "displayName": "Product Name",
                    "placeholder": "name of the product",
                },
                {
                    "name":"product_description",
                    "displayName": "Product Description",
                    "placeholder": "description of the product",
                },
                {
                    "name":"product_features",
                    "displayName": "Product Features",
                    "placeholder": "Product Features",
                    "type": "TEXT_AREA"
                },
                {
                    name: "no_of_benefits",
                    displayName: "Number of Descriptions",
                    type: "NUMBER_FIELD",
                    minVal: 1,
                    maxVal: 10,
                  },
                toneOfVoice,
                formality,
            ]
        },
    }
}