import Link from "next/link"

const data = [
  {
    category_id: 1,
    category_name: "social",
    links: [
      {
        id: 1,
        title: "reddit",
        url: "https://sh.reddit.com",
      },
      {
        id: 2,
        title: "pinterest",
        url: "https://pinterest.com",
      },
      {
        id: 3,
        title: "x",
        url: "https://x.com",
      },
      {
        id: 4,
        title: "linkedin",
        url: "https://linkedin.com",
      },
    ]
  },
  {
    category_id: 2,
    category_name: "techy techy",
    links: [
      {
        id: 1,
        title: "github",
        url: "https://github.com/bonitoflakez",
      },
      {
        id: 2,
        title: "webpage",
        url: "https://bonitoflakez.github.io",
      },
      {
        id: 3,
        title: "excalidraw",
        url: "https://excalidraw.com",
      },
      {
        id: 3,
        title: "hackernews",
        url: "https://news.ycombinator.com/"
      }
    ]
  },
  {
    category_id: 3,
    category_name: "practice",
    links: [
      {
        id: 1,
        title: "leetcode",
        url: "https://leetcode.com/problemset",
      },
      {
        id: 2,
        title: "hackthebox",
        url: "https://www.hackthebox.com/",
      },
      {
        id: 3,
        title: "tryhackme",
        url: "https://tryhackme.com/",
      },
      {
        id: 4,
        title: "moneytype",
        url: "https://monkeytype.com/"
      }
    ]
  },
]

export default function Home() {
  /**
   * TODO:
   * - 
   */
  return (
    <section className="w-full max-w-[60%]">
      <div id="card-container">
        <div className="grid grid-cols-3 gap-2 p-2 cards rounded-lg">
          {data.map((item) => (
            <div key={item.category_id}>
              <h3 className="category-name font-semibold">{item.category_name}</h3>
              <div className="grid grid-flow-row gap-y-2 mt-2">
                {item.links.map((social_link) => (
                  <Link href={social_link.url} key={social_link.id} target="_blank">
                    <div className="card rounded-md">
                      <button className="outline-none card-tab p-2 flex items-center gap-x-2">
                        {"> "}
                        {social_link.title}</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}