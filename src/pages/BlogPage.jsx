import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { useParams } from "react-router-dom";
import {
  aiECommerceIntegrationContent,
  fraudPreventionContent,
  healthcareWebsiteContent,
  mobileAppDevelopmentContent,
  realEstateVirtualToursContent,
  virtualClassroomContent,
} from "../blog";

const BlogPage = () => {
  const { id } = useParams();
  let blogDetails;
  if (id === "1") {
    blogDetails = mobileAppDevelopmentContent;
  } else if (id === "2") {
    blogDetails = healthcareWebsiteContent;
  } else if (id === "3") {
    blogDetails = fraudPreventionContent;
  } else if (id === "4") {
    blogDetails = virtualClassroomContent;
  } else if (id === "5") {
    blogDetails = realEstateVirtualToursContent;
  } else if (id === "6") {
    blogDetails = aiECommerceIntegrationContent;
  } else {
    blogDetails = null;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <WebsiteHeader />
      <main className="flex-grow pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className=" mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600">
              We fuel you with our insights, corporate news, case studies,
              updates on software, innovations, technologies and business
              models.
            </p>
          </div>
          {blogDetails &&
            blogDetails.map((blog, index) => (
              <article key={index} className="mb-16 last:mb-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {blog?.image && (
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <img
                        src={blog?.image}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="px-6 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{blog.date}</p>
                    <div className="prose max-w-none mb-8">
                      <p>{blog.content}</p>
                    </div>
                    {blog.highlights && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Highlights
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {blog.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-700">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {blog.commonTypes && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Common Types
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {blog.commonTypes.map((type, i) => (
                            <li key={i} className="text-gray-700">
                              {type}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {blog.features && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Features</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {blog.features.map((feature, i) => (
                            <li key={i} className="text-gray-700">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {blog.strategies && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Strategies
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {blog.strategies.map((strategy, i) => (
                            <li key={i} className="text-gray-700">
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {blog.benefits && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {blog.benefits.map((benefit, i) => (
                            <li key={i} className="text-gray-700">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {blog.steps && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Steps</h3>
                        <ol className="list-decimal pl-5 space-y-4">
                          {blog.steps.map((stepObj, i) => (
                            <li key={i}>
                              <h4 className="font-semibold">{stepObj.step}</h4>
                              <p className="text-gray-700">{stepObj.content}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {blog.technologies && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Technologies
                        </h3>
                        <div className="space-y-4">
                          {blog.technologies.map((tech, i) => (
                            <div key={i}>
                              <h4 className="font-semibold">{tech.name}</h4>
                              <p className="text-gray-700">
                                {tech.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {blog.stories && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Stories</h3>
                        <div className="space-y-4">
                          {blog.stories.map((story, i) => (
                            <div key={i}>
                              <h4 className="font-semibold">{story.step}</h4>
                              <p className="text-gray-700">{story.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {blog.callToAction && (
                      <div className="text-2xl font-bold mb-4">
                        {blog.callToAction}
                      </div>
                    )}
                    {blog.closingLine && (
                      <div className="text-xl text-gray-700">
                        {blog.closingLine}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </main>
      <WebsiteFooter />
    </div>
  );
};

export default BlogPage;
