import { NUMBER_FIELD } from "../dtos";
import formality from "./utils/formality";
import toneOfVoice from "./utils/toneOfVoice";

export default {
  displayName: "Blogs",
  projects: {
    content_improver: {
      query: "I want you to serve as a content improver, I will give you the content text, target audience, tone of voice, formality and you will improve the content.\n\nFields:\nContent: {content_text}\nTarget audience: {target_audience}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

      displayName: "Content Improver",
      purpose:
        "Revise a piece of content to make it more interesting, creative, and engaging.",
      project_id: "content_improver",
      fields: [
        {
          name: "content_text",
          displayName: "Content",
          placeholder: "Write Something here",
          type: "TEXT_AREA",
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
    text_summarizer: {
      query: "I want you to serve as a text summarizer, I will give you the content text, target audience, tone of voice, formality and you will summarize the content.\n\nFields:\nContent: {content_text}\nTarget audience: {target_audience}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

      displayName: "Text Summarizer",
      purpose: "Summarize the key points from a piece of text",
      project_id: "text_summarizer",
      fields: [
        {
          name: "content_text",
          displayName: "Text",
          placeholder: "Write Something here",
          type: "TEXT_AREA",
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
    paragraph_generator: {
      query: "I want you to serve as a paragraph generator, I will give you the paragraph topic, keywords to include, tone of voice, formality and you will summarize the content.\n\nFields:\nParagraph topic: {paragraph_topic}\nKeywords: {keywords}\nTone of voice: {tone_of_voice}\nFormality: {formality}\n\n",

      displayName: "Paragraph Generator",
      purpose:
        "Generate paragraphs that will capture the attention of your readers",
      project_id: "paragraph_generator",
      fields: [
        {
          name: "paragraph_topic",
          displayName: "Paragraph Topic",
          placeholder: "Topic Of the paragraph",
        },
        {
          name: "keywords",
          displayName: "Keywords to Include",
          placeholder: "Keywords to Include",
        },
        toneOfVoice,
        formality,
      ],
    },
    seo_titles_meta_description: {
      query: "I want you to serve as an SEO blog posts title and meta description generator, I will give you the product name, blog post title, blog post description, Keywords, formality and you will give me SEO blog posts titles and meta descriptions\n\nFields:\nProduct name: {product_name}\nBlog post title: {blog_post_title}\nBlog post description: {blog_post_description}\nKeywords: {keywords}\nFormality: {formality}\n\n",

      displayName: "SEO - Blog Posts - Title and Meta Descriptions",
      purpose:
        "Compose SEO-friendly title tags and meta descriptions for blog posts that will rank high on Google.",
      project_id: "seo_titles_meta_description",
      fields: [
        {
          name: "product_name",
          displayName: "Company/Product Name",
          placeholder: "name of product",
        },
        {
          name: "blog_post_title",
          displayName: "Blog post title",
          placeholder: "Title of blog post",
        },
        {
          name: "blog_post_description",
          displayName: "Blog post description",
          placeholder: "Description of the blog post",
          type: "TEXT_AREA",
        },

        {
          name: "keywords",
          displayName: "Keywords to Include",
          placeholder: "Keywords to Include",
        },
        toneOfVoice,
        formality,
      ],
    },
    blog_post_intro_paragraph: {
      query: "I want you to serve as a blog posts intro paragraph generator, I will give you the blog post title, target audience, Keywords, formality and you will give me a blog post intro paragraph\n\nFields:\nBlog post title: {blog_post_title}\ntarget audience: {target_audience}\nKeywords: {keywords}\nFormality: {formality}\n\n",

      displayName: "Blog Post Intro Paragraph",
      purpose:
        "Let Copyleads write your opening paragraph and overcome writer's block.",
      project_id: "blog_post_intro_paragraph",
      fields: [
        {
          name: "blog_post_title",
          displayName: "Blog Post Title",
          placeholder: "your blog post title",
        },
        {
          name: "keywords",
          displayName: "Keywords to Include",
          placeholder: "Keywords to Include",
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
    post_conclusion_paragraph: {
      query: "I want you to serve as a blog posts conclusion paragraph generator, I will give you the blog post title, main points of blog post, target audience, Keywords, formality and you will give me a blog post conclusion paragraph\n\nFields:\nBlog post title: {blog_post_title}\nMain points of blog post: {main_points_of_blog_post}\ntarget audience: {target_audience}\nKeywords: {keywords}\nFormality: {formality}\n\n",

      displayName: "Blog Post Conclusion Paragraph",
      purpose:
        "Conclude your blog posts with a compelling conclusion paragraph",
      project_id: "post_conclusion_paragraph",
      fields: [
        {
          name: "blog_post_title",
          displayName: "Blog Post Title",
          placeholder: "your blog post title",
        },
        {
          name: "main_points_of_blog_post",
          displayName: "main points of the blog post",
          placeholder: "main points of the blog post",
          type: "TEXT_AREA",
        },
        {
          name: "keywords",
          displayName: "Keywords to Include",
          placeholder: "Keywords to Include",
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
    blog_post_outline: {
      query: "I want you to serve as a blog posts outline generator, I will give you the blog post title, target audience, formality and you will give me an outline for the blog post\n\nFields:\nBlog post title: {blog_post_title}\ntarget audience: {target_audience}\nKeywords: {keywords}\nFormality: {formality}\n\n",

      displayName: "Blog Post Outline",
      purpose: "Generate outlines for articles.",
      project_id: "blog_post_outline",
      fields: [
        {
          name: "blog_post_title",
          displayName: "Blog Post Title",
          placeholder: "your blog post title",
        },
        {
          name: "keywords",
          displayName: "Keywords to Include",
          placeholder: "Keywords to Include",
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
    blog_post_topic_ideas: {
      query: "I want you to serve as a blog posts topic ideas generator, I will give you the product name, product description, target audience, formality, and the number of topic ideas and you will give me blog posts topic ideas\n\nFields:\nProduct name: {product_name}\nProduct Description: {product_description}\nTarget audience: {target_audience}\nFormality: {formality}\nNumber of topic ideas: {number_of_topics}\n\n",

      displayName: "Blog Post Topic Ideas",
      purpose:
        "Come up with new blog post topics that will engage readers and perform well on Google.",
      project_id: "blog_post_topic_ideas",
      fields: [
        {
          name: "product_name",
          displayName: "Product/Company Name",
          placeholder: "name of your product or company",
        },
        {
          name: "product_description",
          displayName: "Product Description",
          placeholder: "description of your product",
          type: "TEXT_AREA",
        },
        {
          name: "target_audience",
          displayName: "Target Audience",
          placeholder: "Target Audience",
        },
        {
          name: "number_of_topics",
          displayName: "Number of topics",
          minVal: 1,
          maxVal: 10,
          type: NUMBER_FIELD,
        },
        toneOfVoice,
        formality,
      ],
    },
    faq_generator: {
      query: "I want you to serve as a FAQ generator, I will give you the topic, product description, formality, and the number of questions and you will give me blog posts topic ideas\n\nFields:\nProduct name: {product_name}\nProduct Description: {product_description}\nFormality: {formality}\nNumber of questions: {number_of_questions}\n\n",

      displayName: "FAQ Generator",
      purpose:
        "Complete your blog post with some frequently asked questions related to your topic",
      project_id: "faq_generator",
      fields: [
        {
          name: "product_name",
          displayName: "Product Name",
          placeholder: "name of your product",
        },
        {
          name: "product_description",
          displayName: "Product Description",
          placeholder: "description of your product",
          type: "TEXT_AREA",
        },
        {
          name: "target_audience",
          displayName: "Target Audience",
          placeholder: "Target Audience",
        },
        {
          name: "number_of_questions",
          displayName: "Number of Questions",
          minVal: 1,
          maxVal: 10,
          type: "NUMBER_FIELD",
        },
        toneOfVoice,
        formality,
      ],
    },
    listicle: {
      query: "I want you to serve as a listicle generator, I will give you the topic, product description, formality, and the number of paragraphs and you will give me a numbered list based on the topic\n\nFields:\nTopic: {topic}\nProduct Description: {product_description}\nFormality: {formality}\nNumber of paragraphs: {number_of_paragraphs}\n\n",

      displayName: "Listicle",
      purpose:
        " Produce a numbered list based on a specific topic, ideal for adding detail to a blog post",
      project_id: "listicle",
      fields: [
        {
          name: "topic",
          displayName: "Topic",
          placeholder: "topic here",
        },
        {
          name: "product_description",
          displayName: "Product Description",
          placeholder: "description of your product",
          type: "TEXT_AREA",
        },
        {
          name: "number_of_paragraph",
          displayName: "List count (number of paragraphs)",
          minVal: 1,
          maxVal: 10,
          type: "NUMBER_FIELD",
        },
        formality,
      ],
    },
  },
};
