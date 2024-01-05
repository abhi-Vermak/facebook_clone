import React from "react";
import openAI from "openai";

export default function Image() {
    let image_url = ""
    const func = async () => {
    const response = await openAI.createImage({
      model: "dall-e-3",
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;
  };
  func();

  return(
    <>
    <img src={image_url} alt="Image" />
    </>
  );
}

