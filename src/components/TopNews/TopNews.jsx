// import React from 'react'
import NewsItem from "./newsIteam/NewsItem";
import "./style.scss";

const TopNews = () => {
  const data = [
    {
      source: {
        id: null,
        name: "DW (English)",
      },
      author: "Deutsche Welle",
      title: "BMW says electric cars as profitable as petrol, diesel cars",
      description:
        'The German automaker is betting big on electric vehicles with its "Neue Klasse." The new generation of EVs will be available from 2025. German car manufacturer BMW makes the same profit from its electric vehicles as from its petrol and diesel vehicles, Oliver…',
      url: "https://www.dw.com/en/bmw-says-electric-cars-as-profitable-as-petrol-diesel-cars/a-66703975",
      urlToImage: "https://static.dw.com/image/66703810_6.jpg",
      publishedAt: "2023-09-02T15:50:00Z",
      content:
        "German car manufacturer BMW makes the same profit from its electric vehicles as from its petrol and diesel vehicles, Oliver Zipse, the automaker's boss, said on Saturday as he presented the new gener… [+1745 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "benzinga.com",
      title:
        "Benzinga Bulls And Bears: Apple, Tesla, Nvidia, And Dogecoin May Spike 150% Contingent On Musk's Next Move",
      description:
        "Benzinga examined the prospects for many investors' favorite stocks over the last week — here's a look at some of our top stories. The Dow Jones and the Nasdaq Composite had their best weeks since July, with increases of 1.4% and 3.3% respectively, while the …",
      url: "https://biztoc.com/x/63955db5010732ea",
      urlToImage: "https://c.biztoc.com/p/63955db5010732ea/s.webp",
      publishedAt: "2023-09-02T14:08:10Z",
      content:
        "Benzinga examined the prospects for many investors' favorite stocks over the last week here's a look at some of our top stories.The Dow Jones and the Nasdaq Composite had their best weeks since July,… [+318 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Dan Avery",
      title:
        "With a Crippled Energy Grid, Puerto Rico Turned to Solar Power. (Spoiler: It's Working) - CNET",
      description:
        'After Hurricane Maria devastated the island, residents launched community-based solar projects to keep the lights on. Activists call it an "energy insurrection."',
      url: "https://www.cnet.com/home/energy-and-utilities/with-a-crippled-energy-grid-puerto-rico-turned-to-solar-power-spoiler-its-working/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/4a9c6f313b21bfb6804840af8933b7662862dc02/hub/2023/09/01/cb655e64-2e19-4d7b-9e07-af6711c77689/gettyimages-1060038616.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-09-02T13:00:06Z",
      content:
        "On Sept. 20, 2017, Hurricane Maria slammed into Puerto Rico and devastated the island's aging and inefficient power grid.  \r\nAir conditioning couldn't work. Water couldn't be pumped to higher floors.… [+16012 chars]",
    },
  ];

  const imgUrl = [
    "https://static.dw.com/image/66703810_6.jpg",
    "https://www.cnet.com/a/img/resize/4a9c6f313b21bfb6804840af8933b7662862dc02/hub/2023/09/01/cb655e64-2e19-4d7b-9e07-af6711c77689/gettyimages-1060038616.jpg?auto=webp&fit=crop&height=675&width=1200",
    "https://c.biztoc.com/p/63955db5010732ea/s.webp",
  ];
  return (
    <div className="w-full py-4 px-16 h-[70%]">
      <div className="container flex ">
        <div className="new_item1 item">
          <NewsItem imageUrl={imgUrl[0]} news={data[0]} />
        </div>
        <div className="second_container flex flex-col">
          <div className="new_item2 item">
            <NewsItem imageUrl={imgUrl[1]} news={data[1]} />
          </div>
          <div className="new_item2 item">
            <NewsItem imageUrl={imgUrl[2]} news={data[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
