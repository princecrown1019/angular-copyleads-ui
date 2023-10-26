import { NUMBER_FIELD, TEXT_AREA } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
	displayName: "Social Media",
	projects: {
		innovative_story: {
			query: "I want you to serve as an innovative story genarator,\n I will give you the story line, tone of voice, target audience, and formality\n and you will compose imaginative stories that is captivating.\n\n\n Fields:\n Story line: {story_line}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",
			displayName: "Innovative Story",
			purpose: "Compose imaginative stories to captivate your readers.",
			project_id: "innovative_story",
			fields: [
				{
					name: "story_line",
					displayName: "Story Line",
					placeholder: "Story Line ...",
					type: TEXT_AREA,
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Target Audience",
				},
				toneOfVoice,
				formality,
				
			],
		},
		engaging_queries: {
			query:"I want you to serve as an engaging queries genarator,\n I will give you the Topic of discussion, tone of voice, target audience, keywords number of queries, and formality\n and you will design a questionnaire to pose creative questions to increase participation of my audience\n\n\n Fields:\n Topic of discussion: {topic_of_discussion}\n Target audience: {target_audience}\n Tone of voice: {tone_of_voice}\n Keywords: {keywords}\n Number of queries: {no_of_queries}\n Formality: {formality} \n",

			displayName: "Engaging Queries",
			purpose:
				"Design a questionnaire to pose creative questions to your audience " +
				"to increase participation.",
			project_id: "engaging_queries",
			fields: [
				{
					name: "topic_of_discussion",
					displayName: "Topic of discussion",
					placeholder: "Topic of discussion",
				},
				{
					name: "target_audience",
					displayName: "Target Audience",
					placeholder: "Target Audience",
				},
				{
					name: "keywords",
					displayName: "Target Keywords",
					placeholder: "target keywords",
					type: TEXT_AREA,
				},
				{
                    "name": "no_of_queries",
                    displayName: "Number of Queries",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
				toneOfVoice,
				formality,
				
			],
		},
		personal_bio: {
			query:"I want you to serve as a personal bio genarator,\n I will give you the personal information, tone of voice, point of view, and formality\n and you will write a unique personal bio that captures attention.\n\n\n Fields:\n Personal information: {personal_information}\n Point of view: {point_of_view}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",

			displayName: "Personal Bio",
			purpose: "Write a unique personal bio that captures attention.",
			project_id: "personal_bio",
			fields: [
				{
					name: "personal_information",
					displayName: "Personal Information",
					placeholder: "Personal Information",
					type: TEXT_AREA,
				},
				{
					name: "point_of_view",
					displayName: "Point of View (First or Third Person)",
					placeholder: "Point of View (First or Third Person)",
				},
				toneOfVoice,
				formality,
				
			],
		},
		photo_post_caption: {
			query:"I want you to serve as photo post caption genarator,\n I will give the about post, number of captions, tone of voice, and formality\n and you will write generate eye-catching captions for your Instagram posts.\n\n\n Fields:\n About post: {about_post}\n Number of captions: {no_of_captions}\n Tone of voice: {tone_of_voice}\n Formality: {formality} \n",

			displayName: "Photo Post Caption",
			purpose: "Generate eye-catching captions for your Instagram posts.",
			project_id: "photo_post_caption",
			fields: [
				{
					name: "about_post",
					displayName: "Post Information",
					placeholder: "Whats your post about?",
					type: TEXT_AREA,
				},
				{
                    "name": "no_of_captions",
                    displayName: "Number of Captions",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
				toneOfVoice,
				formality,
				
			],
		},
		pinterest_pin_title_description: {
			query:"I want you to serve as a Pinterest Pin Title & Description genarator,\n I will give the about pin, product name, keywords, number of titles & descriptions, tone of voice, and formality\n and you will create compelling Pinterest pin titles and descriptions that drive engagement, attract traffic, and expand your reach.\n\n\n Fields:\n About pin: {about_pin}\n Product name: {product_name}\n Keywords: {keywords}\n Number of pins: {no_of_pins}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n \n",

			displayName: "Pinterest Pin Title & Description",
			purpose:
				"Create compelling Pinterest pin titles and " +
				"descriptions that drive engagement, attract traffic, and expand your reach",
			project_id: "pinterest_pin_title_description",
			fields: [
				{
					name: "about_pin",
					displayName: "About Pin",
					placeholder: "Tell us about the pin",
					type: TEXT_AREA,
				},
				{
					name: "keywords",
					displayName: "Target Keywords",
					placeholder: "target keywords",
					type: TEXT_AREA,
				},
				{
					name: "product_name",
					displayName: "Company/Product Name",
					placeholder: "Company/Product Name",
				},
				{
                    "name": "no_of_pins",
                    displayName: "Number of pins",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
				toneOfVoice,
				formality,
				
			],
		},
		tiktok_video_captions: {
			query:"I want you to serve as tiktok video caption genarator,\n I will give the about post, keywords, number of captions, tone of voice, and formality\n and you will write viral captions i can use for TikTok videos.\n\n\n Fields:\n About post: {about_post}\n Keywords: {keywords}\n Number of captions: {no_of_captions}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",

			displayName: "TikTok Video Captions",
			purpose: "Write viral captions for your TikTok videos.",
			project_id: "tiktok_video_captions",
			fields: [
				{
					name: "about_post",
					displayName: "Video Information",
					placeholder: "Whats the video content about?",
					type: TEXT_AREA,
				},
				{
					name: "keywords",
					displayName: "Keywords to Include",
					placeholder: "Keywords to Include",
					type: TEXT_AREA,
				},
				{
                    "name": "no_of_captions",
                    displayName: "Number of captions",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
				toneOfVoice,
				formality,
				
			],
		},
		quora_answer: {
			query:"I want you to serve as a quora answer genarator,\n I will give the question, information to include in answer, tone of voice, and formality\n and you will provide insightful answers to challenging questions.\n\n\n Fields:\n Question: {question}\n Info to include in answer: {info_to_include_in_answer}\n Tone of voice: {tone_of_voice}\n Formality: {formality} \n",

			displayName: "Quora Answers",
			purpose: "Provide insightful answers to challenging questions.",
			project_id: "quora_answer",
			fields: [
				{
					name: "question",
					displayName: "Question",
					placeholder: "Question",
					type: TEXT_AREA,
				},
				{
					name: "info_to_include_in_answer",
					displayName: "Information to Include in Answer",
					placeholder: "Information to Include in Answer",
					type: TEXT_AREA,
				},
				toneOfVoice,
				formality,
				
			],
		},
		tweeter_tweets: {
			query:"I want you to serve as twitter tweet genarator,\n I will give the about post, keywords, number of tweets, tone of voice, and formality\n and you will compose attention-grabbing tweets for Twitter.\n\n Fields:\n About post: {about_post}\n Keywords: {keywords}\n Number of tweets: {no_of_tweets}\n Tone of voice: {tone_of_voice}\n Formality: {formality}\n",

			displayName: "Twitter Tweets",
			purpose: "Compose attention-grabbing tweets for Twitter",
			project_id: "tweeter_tweets",
			fields: [
				
				{
					name: "about_post",
					displayName: "Whats your tweet about?",
					placeholder: "Whats your tweet about?",
					type: TEXT_AREA,
				},
				{
					name: "keywords",
					displayName: "Keywords",
					placeholder: "Keywords to Include",
					type: TEXT_AREA,
				},
				{
                    "name": "no_of_tweets",
                    displayName: "Number of Tweets",
                    "minVal": 1,
                    "maxVal": 10,
                    "type": NUMBER_FIELD
                },
				toneOfVoice,
				formality,
				
			],
		},
	},
};
