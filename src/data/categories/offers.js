import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";
export default {
	displayName: "Offer",
	projects: {
		offer_headline: {
			"query":"I want you to serve as a offer headlines and descriptions generator,\n I will give you the product description, call to action, target audience, tone of voice, formality, number of offers and descriptions\n and you will give me an output of compelling offers headline and descriptions.\n Fields:\n Product description: {product_description}\n Call to action : {call_to_action}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n Number of offers: {no_of_offers}\n",

			displayName: "Compelling Offer Headlines & Descriptions",
			purpose:
				"Write attention-grabbing headlines for your offers to excite your leads",
			project_id: "offer_headline",
			fields: [
				{
					name: "product_description",
					displayName: "Product Description",
					placeholder: "Enter Description here...",
					type: "TEXT_AREA",
				},
				{
					name: "call_to_action",
					displayName: "Call To Action",
					placeholder: "Call To Action (CTA)",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Who are your customers",
				},
				{
					name: "no_of_offers",
					displayName: "Number of Offers",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
			],
		}
	},
};
