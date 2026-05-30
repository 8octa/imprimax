import React from "react";


// Define a type for the article items
type ArticleItem = {
  type: string;
  title: string;
  intro?: string;
  id?: number;
  points?: string[];
  text?: string;
};

const Article = ({
  articol1,
}: {
  articol1: ArticleItem[];
}) => {
  return (
    <div className="text-foreground mt-25 p-5 font-geist max-w-screen-lg">
      {articol1.map(
        (
          { type, title, intro, id, points, text },
          index
        ) => {
          switch (type) {
            case "header":
              return (
                <div key={index}>
                  <h1 className="text-2xl font-bold my-10">{title}</h1>
                  {intro && <p>{intro}</p>}
                </div>
              );

            case "section":
              return (
                <section className="my-15" key={id || index}>
                  <h2 className="text-xl font-semibold my-2">{title}</h2>
                  {text && <p>{text}</p>}
                  {points && (
                    <ul className="list-disc list-inside space-y-1">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </section>
              );

            case "conclusion":
              return (
                <div key={index} className="border-t pt-4">
                  <h2 className="text-xl font-semibold my-2">{title}</h2>
                  {text && <p>{text}</p>}
                </div>
              );

            default:
              return null;
          }
        }
      )}
    </div>
  );
};

export default Article;