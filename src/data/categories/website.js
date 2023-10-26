import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
	displayName: "Website",
	projects: {
		improve_sub_headline: {
            "query": "I want you to serve as a website sub-headline generator,\n    I will give you the product name, product description, headline, tone of voice, Keywords, number of titles, formality\n   and you will Craft Engaging and Informative Sub-Headlines (H2) for Your Website and Landing Pages\n\n\n     Fields:\n     Product name: {product_name}\n     Product Description: {product_description}\n     Headline: {headline}\n     Keywords: {keywords}\n     Number of titles: {no_of_titles}\n     Tone of voice: {tone_of_voice}\n     Formality: {formality}\n    \n\n",

			displayName: "Improved Website Sub-headline",
			purpose:
				"Craft Engaging and Informative Sub-Headlines (H2) " +
				"for Your Website and Landing Pages",
			project_id: "improve_sub_headline",
			fields: [
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Company/Product Name",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Product Description",
					type: "TEXT_AREA",
				},
				{
					name: "headline",
					displayName: "Headline",
					placeholder: "Headline",
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "Keywords",
				},
				{
					name: "no_of_titles",
					displayName: "Number of Headlines",
					minVal: 1,
					maxVal: 10,
					type: "NUMBER_FIELD",
				},
				toneOfVoice,
				formality,
			],
		},
		unique_value_proposition: {
            "query": "I want you to serve as a unique value proposition generator, I will give you the product description, tone of voice, number of value propositions, formality and you will Craft a value proposition that clearly conveys the Benefits of Your Offer in an Impactful Manner.\n\nFields:\nProduct Description: {product_description}\nNumber of value propositions: {no_of_value_propositions}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Unique Value Propositions",
			purpose:
				"Clearly Convey the Benefits of Your Offer in an Impactful Manner.",
			project_id: "unique_value_proposition",
			fields: [
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Product Description",
					type: "TEXT_AREA",
				},
				{
					name: "no_of_value_propositions",
					displayName: "Number of Propositions",
					minVal: 1,
					maxVal: 10,
					type: "NUMBER_FIELD",
				},
				toneOfVoice,
				formality,
				
			],
		},
		company_profile: {
            "query": "I want you to serve as a company profile generator, I will give you the company name, company information, tone of voice, formality and you will craft a lengthy captivating narrative that brings your company's story to life.\n\nFields:\nCompany name: {company_name}\nCompany information: {company_information}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Company Profile",
			purpose:
				"Craft a captivating narrative that brings your company's story to life",
			project_id: "company_profile",
			fields: [
				{
					name: "company_name",
					displayName: "Company Name",
					placeholder: "Company Name",
				},
				{
					name: "company_info",
					displayName: "Company Information",
					placeholder: "Company Information",
					type: "TEXT_AREA",
				},
				toneOfVoice,
				formality,
				
			],
		},
		persuasive_bullet_points: {
            "query": "I want you to serve as a persuasive bullet points generator, I will give you the product name, product description, tone of voice, number of points, formality and you will craft impactful bullet points that persuade your audience and drive conversions.\n\nFields:\nProduct name: {product_name}\nProduct Description: {product_description}\nNumber of points: {no_of_points}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Persuasive Bullet Points",
			purpose:
				"Enhance your marketing materials with impactful bullet points that persuade your audience and drive conversions",
			project_id: "persuasive_bullet_points",
			fields: [
				{
					name: "product_name",
					displayName: "Product Name",
					placeholder: "Name of the product",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "description of the product",
					type: "TEXT_AREA",
				},
				{
					name: "no_of_points",
					displayName: "Number of Points",
					minVal: 1,
					maxVal: 10,
					type: "NUMBER_FIELD",
				},
				toneOfVoice,
				formality,
				
			],
		},
		perfect_headline: {
            "query": "I want you to serve as a perfect headline generator, I will give you the product name, product description, tone of voice, target audience, number of headlines, formality and you will Craft headlines that grab attention, communicate value, and drive results with the power of proven copywriting formulas.\n\nFields:\nProduct name: {product_name}\nProduct Description: {product_description}\nTarget audience: {target_audience}\nNumber of headlines: {no_of_headlines}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Perfect Headline",
			purpose:
				"Craft headlines that grab attention, communicate value, and drive results with the power of proven copywriting formulas.",
			project_id: "perfect_headline",
			fields: [
				{
					name: "product_name",
					displayName: "Product Name",
					placeholder: "Name of the product",
				},
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "description of the product",
					type: "TEXT_AREA",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Target Audience",
				},
				{
					name: "no_of_headlines",
					displayName: "Number of headlines",
					minVal: 1,
					maxVal: 10,
					type: "NUMBER_FIELD",
				},
				toneOfVoice,
				formality,
				
			],
		},
	},
};
