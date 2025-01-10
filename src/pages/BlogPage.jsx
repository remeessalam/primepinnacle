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
  console.log(blogDetails, id, "asdfasdfasfd");
  return (
    <div>
      <WebsiteHeader />
      <div className="pt-[12rem] pb-[10rem]">
        <div className="wrapper">
          {blogDetails.map((obj) => (
            <div>
              <div className="space-y-6">
                <div>
                  <img
                    src={obj.image}
                    alt=""
                    className="max-h-[70vh] max-w-[90rem]"
                  />
                </div>
                <h1 className="text-3xl">{obj?.title && obj?.title}</h1>
                <h1 className="text-xl">{obj?.date && obj?.date}</h1>
                <p className="text-base">{obj?.content && obj?.content}</p>
                <div>
                  {obj?.highlights?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="text-lg font-medium">{obj}</h3>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.commonTypes?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="text-lg font-medium">{obj}</h3>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.features?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="text-lg font-medium">{obj}</h3>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.strategies?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="text-lg font-medium">{obj}</h3>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.benefits?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="text-lg font-medium">{obj}</h3>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.steps?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="font-semibold">{obj.step}</h3>
                      <p>{obj.content}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.technologies?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3 className="font-semibold">{obj?.name}</h3>
                      <p>{obj?.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {obj?.stories?.map((obj, i) => (
                    <div key={i}>
                      {" "}
                      <h3>{obj?.step}</h3>
                      <p>{obj?.content}</p>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl">
                  {obj?.callToAction && obj.callToAction}
                </h2>
                <h2 className="text-2xl">
                  {obj?.closingLine && obj.closingLine}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default BlogPage;
