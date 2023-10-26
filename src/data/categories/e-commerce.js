import { NUMBER_FIELD, TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
	displayName: "E Commerce",
	projects: {
		amazon_product_description: {
			query:"I want you to serve as an Amazon Product Description generator,\n I will give you the product name, key benefits, tone of voice, number of descriptions, and formality\n and you will generate a paragraph of persuasive product descriptions for Amazon listings that highlight key features and benefits.\n\n Fields:\n Product name: {product_name}\n Key benefits: {key_benefits}\n Tone of voice: {tone_of_voice}\n Number of descriptions: {number_of_descriptions}\n Formality: {formality}\n",

			displayName: "Amazon Product Description (Paragraph)",
			purpose:
				" Draft persuasive product descriptions for Amazon listings that highlight key features and benefits",
			project_id: "amazon_product_description",
			fields: [
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Name of the company or product",
				},
				{
					name: "key_benefits",
					displayName: "Key Benefits/Features",
					placeholder: "Key Benefits/Features",
					type: TEXT_AREA,
				},
				{
					name: "number_of_descriptions",
					displayName: "Number of Descriptions",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		amazon_product_features_bullet: {
			query:"I want you to serve as an Amazon Product Features generator,\n I will give you the product name, product description, key benefits, Keywords, tone of voice, number of descriptions, and formality\n and you will compose bullet points that clearly articulate the key features and benefits of the product for Amazon listings under the 'About This Item' section.\n\n Fields:\n Product name: {product_name}\n Product Description: {product_description}\n Key benefits: {key_benefits}\n Keywords: {keywords}\n Tone of voice: {tone_of_voice}\n Number of points: {number_of_points}\n Formality: {formality}\n",

			displayName: "Amazon Product Features (Bullets)",
			purpose:
				"Compose bullet points that clearly articulate the key features and " +
				'benefits of the product for Amazon listings under the "About This Item" section',
			project_id: "amazon_product_features_bullet",
			fields: [
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Name of the company or product",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "description of the product",
					type: TEXT_AREA,
				},
				{
					name: "key_benefits",
					displayName: "Key Benefits/Features",
					placeholder: "Key Benefits/Features",
					type: TEXT_AREA,
				},
				{
					name: "keywords",
					displayName: "Keywords to Include",
					placeholder: "Keywords to Include",
				},
				{
					name: "number_of_points",
					displayName: "Number of Points",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		},
		one_shot_landing_page: {
			query:"I want you to serve as a Landing Page generator,\n I will give you the background information, key benefits, Keywords, tone of voice, and formality\n and you will compose and Generate a complete landing page with H1, H2, and H3 headings that effectively convey the intended message. It must also include a CTA, social proof, and a list of benefits.\n Fields:\n Background information: {background_information}\n Product Description: {product_description}\n Key benefits: {key_benefits}\n Keywords: {keywords}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",

			displayName: "One-Shot Landing Page",
			purpose:
				"Generate a complete landing page with H1, H2, and H3 " +
				"headings that effectively conveys the intended message.",
			project_id: "one_shot_landing_page",
			fields: [
				{
					name: "background_information",
					displayName: "Background Information",
					placeholder: "Background Information",
					type: TEXT_AREA,
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Product Description",
					type: TEXT_AREA,
				},
				{
					name: "key_benefits",
					displayName: "Key benefits",
					placeholder: "",
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "",
				},
				toneOfVoice,
				formality,
			],
		},
		product_description: {
			query:"I want you to serve as a Product Description generator,\n I will give you the product name, product description, target audience, tone of voice, number of descriptions, and formality\n and you will craft paragraphs of product descriptions that are appealing, engaging, and relevant for use on websites, emails, and social media platforms.\n\n\n\n Fields:\n Product name: {product_name}\n Product Description: {product_description}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Number of descriptions: {number_of_descriptions}\n Formality: {formality}\n",

			displayName: "Product Description",
			purpose:
				"Craft product descriptions that are appealing, engaging and " +
				"relevant for use on websites, emails, and social media platforms",
			project_id: "product_description",
			fields: [
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Name of the company or product",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Product Description",
					type: TEXT_AREA,
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Target Audience",
				},
				{
					name: "number_of_descriptions",
					displayName: "Number of Descriptions",
					type: NUMBER_FIELD,
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality
			],
		},
		seo_product_page: {
			query:"I want you to serve as an SEO Product Page generator,\n I will give you the product name, product description, Keywords, tone of voice, and formality\n and you will develop title tags and meta descriptions that are optimized for search engines and designed to rank well on Google for product pages.\n\n\n Fields:\n Product name: {product_name}\n Product Description: {product_description}\n Keywords: {keywords}\n Tone of voice: {tone_of_voice}\n Formality: {formality} \n",

			displayName: "SEO - Product Page",
			purpose:
				"Title and Meta Descriptions: Develop title tags and meta " +
				"descriptions that are optimized for search engines and designed to rank well on Google " +
				"for product pages",
			project_id: "seo_product_page",
			fields: [
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Name of the company or product",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Product Description",
					type: TEXT_AREA,
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "Keywords",
				},
				toneOfVoice,
				formality,
			],
		},
	},
};
