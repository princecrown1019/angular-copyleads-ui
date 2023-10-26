import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
	displayName: "Video",
	projects: {
		high_impact_mini_vsl: {
            "query": "I want you to serve as a High-Impact Mini-VSLgenerator,I will give you Your name, Company/Product Name, Who is your ideal buyer audience, What is your product's price,  What are customers' ultimate goal that results from the initial goal, What is your niche? A more narrow focus of your audience, What are customers' initial goals, What's the big idea in 2-3 words? What hook makes your product different, List your key benefits & features,  What current pain or negative circumstance is your customer-facing now, What's a true negative or scary fact, tone of voice, formality and you will craft a compelling 60 seconds video script that piques the interest of your audience and drives sales.",
			displayName: "High-Impact Mini-VSL",
			purpose:
				"Craft a compelling 60-90 second video script that piques the interest of your audience and drives sales. Written by the renowned copywriter and creator of the Video Sales Letter, Jon Benson.",
			project_id: "high_impact_mini_vsl",
			fields: [
				{
					name: "your_name",
					displayName: "Your Name",
					placeholder: "Your Name",
				},
				{
					name: "product_name",
					displayName: "Product Name",
					placeholder: "Name of the product",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Who is your ideal buyer audience",
				},
				{
					name: "key_benefits",
					displayName: "Key Benefits",
					placeholder: "List your key benefits & features",
				},
				{
					name: "biggest_customer_issues",
					displayName: "Biggest Customer Issues",
					placeholder:
						"What current pain or negative circumstance is your customer-facing now",
				},
				{
					name: "negative_fact",
					displayName: "Negative Fact",
					placeholder: "What's a true negative or scary fact",
				},
				{
					name: "big_idea",
					displayName: "Big Idea",
					placeholder:
						"What's the big idea in 2-3 words? What hook makes your product different",
				},
				{
					name: "your_niche",
					displayName: "Your Niche",
					placeholder: "What is your niche?",
				},
				{
					name: "customers_initial_goal",
					displayName: "Customers Initial Goal",
					placeholder: "What are customers' initial goal",
				},
				{
					name: "customers_ultimate_goal",
					displayName: "Customers Final Goal",
					placeholder:
						"What are customers' ultimate goal that results from the initial goal",
				},
				{
					name: "products_price",
					displayName: "Products Price",
					placeholder: "What is your product's price",
				},
				toneOfVoice,
				formality,
				
			],
		},
		tik_tok_video_captions: {
            "query": "I want you to serve as a TikTok captions generator, I will give you What the video is about, Keywords, number of captions, tone of voice, formality, and you will generate TikTok captions that are both entertaining and shareable.\n\nFields:\nWhat’s your video about: {about_video}\nKeywords: {keywords}\nNumber of captions: {no_of_captions}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "TikTok Video Captions",
			purpose:
				"Elevate your TikTok content with captions that are both entertaining and shareable.",
			project_id: "tik_tok_video_captions",
			fields: [
				{
					name: "about_video",
					displayName: "About Video",
					placeholder: "About video",
					type: "TEXT_AREA",
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "keywords",
				},
				{
					name: "no_of_captions",
					displayName: "Number of Captions",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
		you_tube_description: {
            "query": "I want you to serve as a youtube video description generator, I will give you the video title, Keywords, number of descriptions, tone of voice, formality, and you will Craft Engaging Youtube Descriptions That Drive Search Engine Rankings and Attract Viewers.\n\nFields:\nVideo title: {video_title}\nKeywords: {keywords}\nNumber of descriptions: {no_of_descriptions}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Video Description - YouTube",
			purpose:
				"Craft Engaging Descriptions That Drive Search Engine Rankings and Attract Viewers.",
			project_id: "you_tube_description",
			fields: [
				{
					name: "video_title",
					displayName: "Video Title",
					placeholder: "Title of the video",
					type: "TEXT_AREA",
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "keywords",
					type: "TEXT_AREA",
				},
				{
					name: "no_of_descriptions",
					displayName: "Number of Descriptions",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
		video_outline: {
            "query": "I want you to serve as a  video script outline generator, I will give you the video title, number of outlines, tone of voice, formality and you will develop a comprehensive script outline that is perfect for \"Listicle\" and \"How-to\" style videos.\n\nFields:\nVideo title: {video_title}\nNumber of outlines: {no_of_outlines}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Video Script Outline",
			purpose:
				'Develop a comprehensive script outline that is perfect for "Listicle" and "How-to" style videos.',
			project_id: "video_outline",
			fields: [
				{
					name: "video_title",
					displayName: "Video Title",
					placeholder: "Title of the video",
				},
				{
					name: "no_of_outlines",
					displayName: "Number of Outlines",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
		video_hook: {
            "query": "I want you to serve as a  video script hook and introduction generator, I will give you the video title, Keywords, number of hooks, tone of voice, formality and you will write engaging hooks with introductions that grab your viewers' attention and keep them invested in your video from start to finish.\n\nFields:\nVideo title: {video_title}\nNumber of hooks: {no_of_hooks}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",
			
			displayName: "Video Script Hook and Introduction",
			purpose:
				"Write engaging hooks that grab your viewers' attention and keep them invested in your video from start to finish.",
			project_id: "video_hook",
			fields: [
				{
					name: "video_title",
					displayName: "Video Title",
					placeholder: "Title of video",
					type: "TEXT_AREA",
				},
				{
					name: "no_of_hooks",
					displayName: "Number of Hooks",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
		video_title: {
            "query": "I want you to serve as a  video title generator, I will give you the video about, the number of titles, keywords, tone of voice, formality and you will generate Attention-Grabbing Video Titles for Maximum Reach on YouTube\"\n\nFields:\nWhat is the video about: {about_video}\nNumber of titles: {no_of_titles}\nKeywords to rank for: {keywords}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Video Titles",
			purpose:
				"Generate Attention-Grabbing Video Titles for Maximum Reach on YouTube.",
			project_id: "video_title",
			fields: [
				{
					name: "video_about",
					displayName: "Video About",
					placeholder: "About of video",
					type: "TEXT_AREA",
				},
				{
					name: "keywords",
					displayName: "keywords",
					placeholder: "keywords",
					type: "TEXT_AREA",
				}, {
					name: "no_of_titles",
					displayName: "Number of Titles",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
		video_topic_ideas: {
            "query": "I want you to serve as a  video topic idea generator, I will give you the video about, the number of titles, keywords, tone of voice, formality and you will generate topic ideas that will captivate your audience and climb the ranks on YouTube.\n\nFields:\nWhat is the video about: {about_video}\nNumber of topics: {no_of_topics}\nKeywords to rank for: {keywords}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

			displayName: "Video Topic Ideas",
			purpose:
				"Spark new ideas for videos that will captivate your audience and climb the ranks on YouTube.",
			project_id: "video_topic_ideas",
			fields: [
				{
					name: "video_about",
					displayName: "Video About",
					placeholder: "About of video",
					type: "TEXT_AREA",
				},
				{
					name: "keywords",
					displayName: "keywords",
					placeholder: "keywords",
					type: "TEXT_AREA",
				}, {
					name: "no_of_topics",
					displayName: "Number of Topics",
					type: "NUMBER_FIELD",
					minVal: 1,
					maxVal: 10,
				},
				toneOfVoice,
				formality,
				
			],
		},
	},
};
