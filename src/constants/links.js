// Centralized links data for /links hub
// Safe defaults; replace with your actual handles and URLs

export const LINK_CATEGORIES = [
  { key:"all", title: "All"},
  { key: "certifications", title: "Certifications" },
  { key: "coding", title: "Coding Profiles" },
  { key: "socials", title: "Socials" },
  // { key: "projects", title: "Projects" },
];

// Example data; customize freely
export const linksData = [
  // Coding
  {
    category: "coding",
    title: "TUF (TakeUForward)",
    subtitle: "@Yash Raj Singh",
    url: "https://takeuforward.org/plus/profile/Yash Raj Singh",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEVHcEwSEhISEhISEhIREhISEhISEhITExMSEhISEhISEhIICgwBAQEkJiZJSUlMJxbAwMD////Pz89sbGytra3PZC+KRiRaWlr09PQ3Nzf8f0OMjIzc3Nwqd4iqAAAAC3RSTlMAM4fC7v9gF98/F5YUARMAAADtSURBVHgBfdNXgoMwDARQt0nzmEWkCBbuf84g0pvfj3u33J0PMQEpBu/erRLu0uqlab3Bi83a3W3xYVtpu7fu8NXOmQ2+2iz7xA+254QfknMeyDQ5EzNa2UqAdwG5NIvSZABNIaz0lxFcBFsxXSsE99IcltLxlKNLoOpBdF/6luCck4OqDvhHcgDIrieLjASn7iBd101lHglrBKUlRxlIyjj10+x0ImAnycM8iAcZVVtpLH/ZbXIRsEGZezEHFSUuogs20sosqlo4aMZVsEtAJnA9u+VvfP366hdffbL6Y1e/Sf2DVb9m5VNXwuEM+CIVTov8WXQAAAAASUVORK5CYII=",
  },
  {
    category: "coding",
    title: "LeetCode",
    subtitle: "@yashsng",
    url: "https://leetcode.com/u/yashsng/",
    icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkGBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Kzc3Nzc3Nzc3Nzc3NzgtNzc3MTc4Ky83Nzc3ODc3ODc3NTgsNzM3Mi83Nzc3Nzg3LP/AABEIABwAHAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgEFBwMC/8QAKhAAAQMDAwIFBQEAAAAAAAAAAgEDBAAFEQYSMRNRITJBYZElQnGx8Af/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAIxEAAgIBAwMFAAAAAAAAAAAAAAIBAxESMWEEI3ETISJR0f/aAAwDAQACEQMRAD8AzHcPZPigLTTdimajuY223tjlE3vPH4AyHqRL6J+6AAlg0xKejtPNSAbcIRea8jiIuNyey80By3D2SgPNpivXW6w7RHIRelvgyBFwKkuMr+KA0SRc5ltekaG/z6IjjUA1S5ynkHfMdRdq5yqYFFRUwnbwwnMrqVuSUbafo7rsmttS7ivq20TY5FeVs5W+MSCjo9YCFHF52oi8L4Vx01dldeixtWNp455OrnR21LGP0WerWgkCRpj0WS1MjOk2+yaONmPIki5RfmgHq7XnTWr2o96uMs7JfUXbP6DJE3LFE8444Jf7OKz9RZakR6Sap84K1IjT82xAqahuMKXP+lMGxDbBABDNVJzH3ln1WnTJalfdbLT7+OBcyM3bjEFZ1fetBIHoCKAmgIoD/9k=",
  },
  {
    category: "coding",
    title: "HackerRank",
    subtitle: "@yashsng7",
    url: "https://www.hackerrank.com/profile/yashsng7",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEUNFB4MFB4NFB0NEx4ADRkAAAAAAAwNABgMEx47PkLV1dY2OT2Gh4m8vLwEw1QFvlIABxVLTVH///9GSEupqqvq6uoA9GcB7WQA8WYNABZBQ0cB6WMC6WNgYWQuMTexsbLvMrB+AAAAyElEQVR4AZ2QiwrCMAxFb5tF43zP13RT//8v3SVgAxQmnjEu5DRbE8yRPLKHIEYmqDMrafPfsk6O1GSj2mChiqXDusFls2rbtW7are72ZLeU0nk4dt1Jz91FrzfS3wWQIB+U2g/jMI43Sgvy+XpTjoQSyaVQktIJiZ0kdKIQPjsQv5CBxAsFKSD1UeCysoQifX0W1icoElksTY+Z8GeE4TJz5DTB06x6gNBSmYGIiQfcURIe5+sRJUHgKyURC9Ug4bdN4tUfRvkApzgQVpG08DsAAAAASUVORK5CYII=",
  },
  {
    category: "coding",
    title: "GFG",
    subtitle: "@yashs7zje",
    url: "https://www.geeksforgeeks.org/user/yashs7zje/",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwujUUvjUYwi0QujUUvjUYvjUYujUUvjUUujUUvjUUvjUYujEUujUUvjUZimRHUAAAADnRSTlMADNYeufPka400e6VKXaau79UAAACrSURBVCiR3ZBZDgMhDEOHLITV9z9uQ6DqIs0BWn8gPQxxkuv6N6WU7mA0EbG6oS5o9fjcEaK5oGzItl0WlWaFoO76Q4dGWs7XOnidHZoGtAXMt9h4QzBC/7p9qkCg9jGE4EYWZqYtheINltnROeSZ3vKBQViTGfKI+kXBDjPSGnR1zQQqo5ooSoQ4zO4QbY/sSdnjFnrtDZ3P/prbkF0v+ayv7Z2Jrjv4GT0AJwcIG55/Qx4AAAAASUVORK5CYII=",
  },

  // Socials
  {
    category: "socials",
    title: "LinkedIn",
    subtitle: "Yash Raj Singh",
    url: "https://www.linkedin.com/in/yash-raj-singh-b48756256/",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII=",
  },
  {
    category: "socials",
    title: "GitHub",
    subtitle: "@yashraj1706",
    url: "https://github.com/yashraj1706",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUuMze/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaTxAyfNAAABPUlEQVR4AW3TBYKDMBQE0AltAgzuzur9z7ibH5oKfWjc4UEFl6s2Rl8vgcJZGMX04iTEM5UaPomzHA+KkidVAa/WfKNpffMd32oKCHUlWfb27Q19ZSMVrNHGTMDckMtQLqSegdXGpvi3Sf93W9UudRby2WzsEgL4oMvwoqY1AsrQNfFipbXkCGh1BV6oT1pfRwvfOJlo9ZA5NAonStbmB1pawBuDTAgkX4MzV/eC2H3e0C7lk1aBEzd+7SpigJOZVoXx+J5UxzADil+8+KZYoRaK5y2WZxSdgm0j+dakzkIc2kzT6W3IcFnDTzdt4sKbWMqkpNl229IMsfMmg6UaMsJXmv4qCMXDoI4mO5oADwyFDnGoO3KI0jSHQ6E3eJum5TP4Y+EVyUOGXHZjgWd7ZEwOJzZRjbPQt7mF8P4AzsYZpmkFLF4AAAAASUVORK5CYII=",
  },

  // Projects (examples)
  //   { category: "projects", title: "AI Portfolio", subtitle: "This site", url: "/", icon: null },
  //   { category: "projects", title: "Realtime Video Call", subtitle: "WebRTC demo", url: "#projects", icon: null },

  // Certifications (grouped)
    // IBM Generative AI Professional Certificate
    {
    category: "certifications",
    title: "IBM Generative AI Professional Certificate (Coursera)",
    subtitle: "Program certificate + 16 courses",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/Q9EYJYR1DC5Q", // 0: main program certificate
    icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
    subItems: [
      { 
        title: "1. Introduction to Artificial Intelligence (AI)", 
        url: "https://www.coursera.org/account/accomplishments/records/HN9K3ZJFT5UZ" ,
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "2. Generative AI — Introduction and Applications", 
        url: "https://www.coursera.org/account/accomplishments/records/5B5NMIUT219I",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "3. Generative AI — Prompt Engineering Basics", 
        url: "https://www.coursera.org/account/accomplishments/records/L6Q8AVQ5KX5O" ,
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "4. Python for Data Science, AI & Development", 
        url: "https://www.coursera.org/account/accomplishments/verify/FP4WUVIOIMSC" ,
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title: "5. Developing AI Applications with Python and Flask",
        url: "https://www.coursera.org/account/accomplishments/verify/QR4UCIK2FTTK",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title: "6. Building Generative AI-Powered Applications with Python",
        url: "https://www.coursera.org/account/accomplishments/verify/Q8NH976121II",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "7. Data Analysis with Python", 
        url: "https://www.coursera.org/account/accomplishments/verify/VWXXHJXPU1YC",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "8. Machine Learning with Python", 
        url: "https://www.coursera.org/account/accomplishments/verify/WI08B0J21E81",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24", },
      {
        title: "9. Introduction to Deep Learning & Neural Networks with Keras",
        url: "https://www.coursera.org/account/accomplishments/verify/74T7ZHY16VDI",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title: "10. Generative AI and LLMs — Architecture and Data Preparation",
        url: "https://www.coursera.org/account/accomplishments/verify/ONRIVMTBZCHJ",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title:
          "11. Gen AI Foundational Models for NLP & Language Understanding",
        url: "https://www.coursera.org/account/accomplishments/verify/HYYZK57SSWLA",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title: "12. Generative AI Language Modeling with Transformers",
        url: "https://www.coursera.org/account/accomplishments/verify/WG1WDAUKVJ95",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title: "13. Generative AI Engineering and Fine-Tuning Transformers",
        url: "https://www.coursera.org/account/accomplishments/verify/LWMLKAT6FOFD",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      { 
        title: "14. Generative AI Advanced Fine-Tuning for LLMs", 
        url: "http://coursera.org/account/accomplishments/verify/LWMLKAT6FOFD",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24", },
      {
        title: "15. Fundamentals of AI Agents Using RAG and LangChain",
        url: "https://www.coursera.org/account/accomplishments/verify/KZ1B8T6ANUPV",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
      {
        title:
          "16. Project — Generative AI Applications with RAG and LangChain",
        url: "https://www.coursera.org/account/accomplishments/verify/GMMME8GSMB1V",
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/54/a2cad57ff54d7ca2b771edc7572b46/IBM-Logo-Blk.png?auto=format%2Ccompress&dpr=2&w=24&h=24",
      },
    ],
  },

  {
    category: "certifications",
    title: "Business Analytics for Decision Making (Coursera)",
    subtitle:"University of Colorado Boulder",
    url: "https://www.coursera.org/account/accomplishments/verify/0EL24MITNCPJ",
    icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
  },

    // -- Coursera: Entrepreneurship (parent with parts I & II) --
  {
    category: "certifications",
    title: "Entrepreneurship (Coursera)",
    subtitle: "University of Illinois Urbana-Champaign",
    url: "https://www.coursera.org/account/accomplishments/verify/DREE3HDL9PEK",
    icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    subItems: [
      { 
        title: "Entrepreneurship I — Laying the Foundation", 
        url: "https://www.coursera.org/account/accomplishments/verify/DREE3HDL9PEK" ,
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
      },
      { 
        title: "Entrepreneurship II — Preparing for Launch", 
        url: "https://www.coursera.org/account/accomplishments/verify/F90QNXZHSUPI" ,
        icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
      },
    ],
  },

  {
    category: "certifications",
    title: "Game Theory — IIMA (Coursera)",
    subtitle:"IIM Ahmedabad",
    url: "https://www.coursera.org/account/accomplishments/verify/F2W0613582XY",
    icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b7/d1ebb62c8845b29b536bf08089dbc2/360X360-px.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
  },


  // Previous placeholders (kept for reference):
  // {
  //   category: "certifications",
  //   title: "Coursera: Full Stack Specialization",
  //   url: "https://coursera.org/share/MAIN_CERT_LINK",
  //   icon: null,
  //   subItems: [
  //     { title: "Course 1: HTML, CSS, JS", url: "https://coursera.org/share/C1" },
  //     { title: "Course 2: React", url: "https://coursera.org/share/C2" },
  //     { title: "Course 3: Node & Express", url: "https://coursera.org/share/C3" },
  //   ],
  // },
  // { category: "certifications", title: "Google GenAI Exchange", url: "https://example.com/google-genai-exchange-cert", icon: null },
];
