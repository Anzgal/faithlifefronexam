import Head from "next/head";

const resources = [
  {
    category: "operations, communications, ministry",
    type: "deep-dives",
    webinarType: "none",
    assetId: "12210961",
    infoText: "Deep Dive",
    title: "Get Your Church Online in under 24 Hours",
    blurbText:
      "Getting your church online doesn’t have to be complicated. In fact, if you start with four main areas, you can get your church online in under 24 hours.",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/church-online",
    linkText: "Read more",
    product: "equip,giving,sites,proclaim,live_stream",
    season: "someseason",
  },
  {
    category: "operations, ministry, communications",
    type: "deep-dives, guides",
    webinarType: "none",
    assetId: "12383468",
    infoText: "Guide",
    title: "The Ultimate Checklist for Churches",
    blurbText:
      "Everything you need to have peace of mind while singing peace on earth.",
    downloadLink:
      "https://grow.faithlife.com/equip/checklist/countdown-to-christmas",
    linkText: "Download free",
    product: "equip",
    season: "winter",
  },
  {
    category: "operations, ministry",
    type: "deep-dives, guides",
    webinarType: "live",
    assetId: "12135804",
    infoText: "Deep Dive",
    title: "Christian Leadership: An Overview",
    blurbText:
      "What is Christian leadership? What are the stages of leadership development? And what happens when leaders need to change directions?",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/christian-leadership/church-leadership-training",
    linkText: "Read more",
    product: "mobile",
    season: "someseason",
  },
  {
    category: "operations, communications",
    type: "webinars",
    webinarType: "live",
    assetId: "11953528",
    infoText: "Webinar",
    title: "Building Your Online Church Community Starts Here",
    blurbText:
      "With Faithlife Equip, your church management and church communication tools live under one digital roof.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_qTsQ0PI8QmWcTX-wD1DaHw",
    linkText: "Register now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "communications",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "12308889",
    infoText: "Webinar",
    title: "Starting with Faithlife? Start with Faithlife Groups",
    blurbText:
      "With a free group on Faithlife, you can build connections within your church and enable digital discipleship all week long.",
    downloadLink:
      "https://grow.faithlife.com/how-to-organize-church-social-networking",
    linkText: "Watch now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "operations, ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "12245340",
    infoText: "Webinar",
    title: "Discover Technology Custom-Built for the Church",
    blurbText:
      "Watch on-demand as we reveal cutting-edge technology created for the unique needs of the local church.",
    downloadLink:
      "https://grow.faithlife.com/equip/webinar/church-software-live-event",
    linkText: "Watch now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "customer-stories",
    assetId: "12131084",
    infoText: "Customer Story",
    title: "Transformed Church Presentations—Run by Preteens?",
    blurbText:
      "Learn how Calvary Chapel chose a church presentation software that could help them tear down the hurdles of time and difficulty.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/customer-story/calvary-chapel-montesano",
    linkText: "Read more",
    product: "logos,proclaim,equip",
    season: "someseason",
  },
  {
    category: "ministry,education,family",
    type: "deep-dives",
    assetId: "12087733",
    infoText: "Deep Dive",
    title: "29 Bible Study Tools",
    blurbText: "Discover tools for reading the Bible more effectively.",
    downloadLink: "https://www.logos.com/how-to/bible-study-tools",
    linkText: "Read more",
    product: "logos",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "customer-stories",
    assetId: "12028458",
    infoText: "Customer Story",
    title: "Logos, Twitch, & The Great Commission",
    blurbText: "Learn how one pastor turned his sermon prep into evangelism.",
    downloadLink:
      "https://www.logos.com/customer-stories/tanner-thetford-twitch-pastor",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "deep-dives",
    assetId: "11956449",
    infoText: "Deep Dive",
    title: "Biblical Literacy: What It Is and How to Reverse the Decline",
    blurbText:
      "Biblical literacy is declining, but that doesn’t mean your church can’t be part of the solution. Learn how to start increasing biblical literacy in your church.",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/biblical-literacy",
    linkText: "Read more",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "operations",
    type: "reports",
    assetId: "11993983",
    infoText: "Reports",
    title: "Pastoral Mental Health Report 2021",
    blurbText:
      "Learn how pastors are responding to the turmoil of the past year with this FREE report.",
    downloadLink: "https://grow.faithlife.com/pastoral-mental-health-report ",
    linkText: "Download",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "operations, ministry, communications",
    type: "webinars",
    webinarType: "live",
    assetId: "11928441",
    infoText: "Webinar",
    title: "New to Live Streaming? Here’s how to Setup Faithlife Live Stream",
    blurbText:
      "You can start live streaming sermons this weekend, inviting new online visitors to see what you’re all about and hear the gospel.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_AdxGQsChRLi3p3SjQsD-6A",
    linkText: "Register now",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "finance, operations",
    type: "webinars",
    webinarType: "live",
    assetId: "11928440",
    infoText: "Webinar",
    title: "How to Setup Faithlife Giving",
    blurbText:
      "Encouraging people to give to your church is only half the battle—you also have to make it easy for them to give.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_VYObfshzREWMVuVg2-9l0Q",
    linkText: "Register now",
    product: "giving",
    season: "someseason",
  },
  {
    category: "communications",
    type: "guides",
    assetId: "11847353",
    infoText: "Guide",
    title: "The Ultimate Guide to Church Live Streaming",
    blurbText:
      "Just starting to live stream church services? Want to improve your existing setup? Download this FREE guide to discover a ton of church-specific streaming tips for every budget.",
    downloadLink: "https://grow.faithlife.com/guide/church-live-streaming-101",
    linkText: "Download",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "finance",
    type: "customer-stories",
    assetId: "11823558",
    infoText: "Customer Story",
    title: "Less Busywork, More Engagement: St. John’s Lutheran",
    blurbText:
      "One church traded eight church softwares for one—and grew online community.",
    downloadLink:
      "https://faithlife.com/ministry-resources/equip/customer-story/st-johns-lutheran",
    linkText: "Read more",
    product: "equip",
    season: "someseason",
  },
  {
    category: "finance",
    type: "customer-stories",
    assetId: "11823557",
    infoText: "Customer Story",
    title: "Holy Temple: Saving 20+ Hours a Month",
    blurbText:
      "Church presentations were gobbling up time, and that was only part of the problem.",
    downloadLink:
      "https://faithlife.com/ministry-resources/equip/customer-story/holy-temple",
    linkText: "Read more",
    product: "proclaim,equip",
    season: "someseason",
  },
  {
    category: "ministry, communications",
    type: "deep-dives",
    assetId: "11956443",
    infoText: "Deep Dive",
    title: "Digital Discipleship: The Church Guide to Strategic Growth",
    blurbText:
      "Digital discipleship is a fast-growing topic of conversation. Learn how to set up a digital discipleship flywheel for your church.",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/digital-discipleship",
    linkText: "Read more",
    product: "equip",
    season: "someseason",
  },
  {
    category: "communications, ministry",
    type: "webinars",
    webinarType: "live",
    assetId: "11928449",
    infoText: "Webinar",
    title: "Starting with Faithlife? Start with Faithlife Groups",
    blurbText:
      "With a free group on Faithlife, you can build connections within your church and enable digital discipleship all week long.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_056JMOwOT6SHlCF3OcJiaA",
    linkText: "Register now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "communications, ministry",
    type: "webinars",
    webinarType: "live",
    assetId: "11928451",
    infoText: "Webinar",
    title: "Build a Professional Proclaim Presentation",
    blurbText:
      "Bring sermon illustrations and more to life with Faithlife Proclaim presentation software.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_zKJFjt17RDW9UT1vQqbUpA",
    linkText: "Register now",
    product: "proclaim",
    season: "someseason",
  },
  {
    category: "communications, ministry, operations",
    type: "webinars",
    webinarType: "live",
    assetId: "11928442",
    infoText: "Webinar",
    title: "Your New Church Website—Live in Minutes",
    blurbText:
      "This easy-to-follow 1-hour webinar walks you through each step you’ll need to complete before you take your church website live.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_9ky4wD9TQCGkbTpDdtT1ow",
    linkText: "Register now",
    product: "sites",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "webinars",
    webinarType: "live",
    assetId: "11928445",
    infoText: "Webinar",
    title: "Unleash a Bible Study Revolution in Your Church with Logos",
    blurbText:
      "Your Faithlife Equip subscription unlocks Logos Bible Software for everyone in your church, including small groups and home groups.",
    downloadLink:
      "https://us02web.zoom.us/webinar/register/WN_6xyp6S3GSpu8-0H9kjLILQ",
    linkText: "Register now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "finance",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11785746",
    infoText: "Webinar",
    title: "How to Boost Church Giving and Break the Summer Slump",
    blurbText:
      "In this free webinar for church leaders, we’ll show you essentials to bust out of a giving slump—and how to avoid it in the first place.",
    downloadLink: "https://grow.faithlife.com/giving/webinar/summerslump",
    linkText: "Watch",
    product: "giving",
    season: "summer",
  },
  {
    category: "operations",
    type: "reports",
    assetId: "11733893",
    infoText: "Reports",
    title: "State of Church Giving 2021",
    blurbText:
      "Learn what worked in 2020 and how churches are recovering in 2021 with this FREE report.",
    downloadLink:
      "https://grow.faithlife.com/giving/report/state-of-giving-2021",
    linkText: "Download",
    amberBoardId: "",
    product: "giving",
    season: "someseason",
  },
  {
    category: "family,education",
    type: "deep-dives",
    assetId: "12087730",
    infoText: "Deep Dive",
    title: "How to Study the Bible",
    blurbText: "9 tips for getting more out of your Bible study.",
    downloadLink: "https://www.logos.com/how-to/study-the-bible",
    linkText: "Read more",
    product: "logos",
    season: "someseason",
  },
  {
    category: "education",
    type: "books",
    assetId: "11397229",
    infoText: "Books",
    title:
      "Free Church Library: Free 15-Volume Collection from Logos Bible Software",
    blurbText:
      "Your congregation shouldn’t have to go to Google for guidance on the Christian life or tough Bible questions. Instead, give them a well-rounded Bible study library—free.",
    downloadLink:
      "https://store.faithlife.com/integrated-ministry-platform/digital-church-library",
    linkText: "Get it now",
    amberBoardId: "",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "operations",
    type: "deep-dives",
    assetId: "11956442",
    infoText: "Deep Dive",
    title:
      "What an Integrated Ministry Platform Is & Why Your Church Needs One",
    blurbText:
      "While there are many great church software solutions, most churches use a hodgepodge of platforms that don’t play well together. Here’s how to change that.",
    downloadLink: "https://faithlife.com/integrated-ministry-platform/about",
    linkText: "Read more",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "customer-stories",
    assetId: "12028457",
    infoText: "Customer Story",
    title: "She Reads Truth: Distilled Not Diluted",
    blurbText:
      "Learn how She Reads Truth uses Logos to build rich and accessible Bible reading plans.",
    downloadLink: "https://www.logos.com/case-studies/she-reads-truth",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "family",
    type: "deep-dives",
    assetId: "11397225",
    infoText: "Deep Dive",
    title: "Family Discipleship: 4 Tips for Growing Together",
    blurbText:
      "In a busy world full of conflicting priorities, how do you put Christ first in your family? How can you teach your children to do what’s right and grow in their faith—even when you’re not around?",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/family-home-discipleship-resources",
    linkText: "Read more",
    amberBoardId: "",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "operations",
    type: "deep-dives",
    assetId: "11397223",
    infoText: "Deep Dive",
    title: "Church Online: How to Get Your Church Online in under 24 Hours",
    blurbText:
      "Serving your congregation and community means reaching people where they are, and the reality is, most people in your community are online.",
    downloadLink:
      "https://faithlife.com/integrated-ministry-platform/church-online",
    linkText: "Read more",
    amberBoardId: "",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "deep-dives",
    assetId: "11397224",
    infoText: "Deep Dive",
    title: "Discipleship Strategy: The Secret to Thriving in Any Season",
    blurbText:
      "If your church fell off the map tomorrow, would anyone notice? Learn how to make a lasting, gospel-filled impact.",
    downloadLink: "https://faithlife.com/integrated-ministry-platform/thrive",
    linkText: "Read more",
    amberBoardId: "",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "finance",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11604468",
    infoText: "Webinar",
    title: "5 Crucial Keys to Boost Church Giving This Easter",
    blurbText:
      "Discover the 5 crucial keys to making Easter a strong giving Sunday—without surprising your visitors. Watch this free webinar to learn how to boost Easter giving for online and in-person attendees.",
    downloadLink:
      "https://grow.faithlife.com/giving/webinar/how-to-maximize-online-giving-for-easter",
    linkText: "Watch",
    amberBoardId: "2583",
    product: "giving",
    season: "spring",
  },
  {
    category: "operations",
    type: "reports",
    assetId: "10988021",
    infoText: "Reports",
    title: "Fall Kickoff Report 2020",
    blurbText:
      "This survey explores how churches are using technology to continue to expand their ministry while pursuing unity in a time when being together could endanger others’ health.",
    downloadLink:
      "https://faithlife.com/ministry-resources/report/fall-kickoff",
    linkText: "Download",
    amberBoardId: "2843",
    product: "someproduct",
    season: "fall",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "9652415",
    infoText: "Kit",
    title: "Just Add Pumpkin Spice: Fall&apos;s Free Church Media",
    blurbText:
      "This autumn, rake in the compliments with church presentations as gorgeous as the foliage. Download 10 free pieces of church media.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/kit/free-church-media-fall",
    linkText: "Download",
    amberBoardId: "2512",
    product: "proclaim",
    season: "fall",
  },
  {
    category: "ministry,education",
    type: "customer-stories",
    assetId: "12028459",
    infoText: "Customer Story",
    title: "Festival of Praise: Impossible Youth",
    blurbText:
      "Learn how an organization in Singapore teaching teens to dig deeper in Scripture.",
    downloadLink: "https://www.logos.com/case-studies/fopx-impossible-youth",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "10362172",
    infoText: "Kit",
    title: "Photo Shoots and Leaves: Free Fall Kickoff Images",
    blurbText:
      "Liven up your church website, announcements, slides, social media posts—anything. Download your free Fall stock photos now.",
    downloadLink:
      "https://faithlife.com/ministry-resources/sites/kit/free-fall-stock-photos",
    linkText: "Download",
    amberBoardId: "2843",
    product: "proclaim,sites",
    season: "fall",
  },
  {
    category: "ministry,education",
    type: "deep-dives",
    assetId: "12087731",
    infoText: "Deep Dive",
    title: "Getting Started with Theology",
    blurbText: "An introduction to the world’s most important topic.",
    downloadLink: "https://www.logos.com/how-to/theology",
    linkText: "Read more",
    product: "logos",
    season: "someseason",
  },
  {
    category: "finance",
    type: "deep-dives",
    assetId: "11956448",
    infoText: "Deep Dive",
    title: "The Ultimate Guide to Biblical Stewardship",
    blurbText:
      "Biblical stewardship is often misunderstood, but it’s vital to a spiritually rich life. Read myths about stewardship, and find out what it really is!",
    downloadLink: "https://faithlife.com/products/giving/biblical-stewardship",
    linkText: "Read more",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "finance, operations",
    type: "guides",
    assetId: "10295145",
    infoText: "Guide",
    title: "Simple Strategies for Successful Year-End Giving",
    blurbText:
      "Thinking through year-end giving during the holidays can be overwhelming. Easily organize your church’s year-end giving strategy with this free guide.",
    downloadLink:
      "https://faithlife.com/ministry-resources/giving/guide/simple-strategies-year-end-giving",
    linkText: "Download",
    amberBoardId: "2514",
    product: "giving",
    season: "winter",
  },
  {
    category: "ministry",
    type: "guides",
    assetId: "10884263",
    infoText: "Guide",
    title: "Your Guide to Digital Discipleship",
    blurbText:
      "Can technology really help you fulfill the Great Commission? Yes—and we’ll show you how in this biblically-rooted, six-step discipleship strategy that’s helping churches thrive.",
    downloadLink:
      "https://faithlife.com/ministry-resources/equip/guide/digital-discipleship-guide",
    linkText: "Download",
    amberBoardId: "3865",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "9652408",
    infoText: "Kit",
    title: "Screen for Joy: Winter&apos;s Free Church Media",
    blurbText:
      "Make your church merry with church presentations as pretty as a Christmas tree. Download 10 free pieces of church media.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/kit/free-church-media-winter",
    linkText: "Download",
    amberBoardId: "2512",
    product: "proclaim",
    season: "winter",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "9636546",
    infoText: "Kit",
    title: "Make Your Website Dashing: Free Christmas Images",
    blurbText:
      "Spruce up your church website, announcements, slides, social media posts—anything. Download your free Christmas stock photos now.",
    downloadLink:
      "https://faithlife.com/ministry-resources/sites/kit/free-christmas-stock-photos",
    linkText: "Download",
    amberBoardId: "2625",
    product: "sites,proclaim",
    season: "winter",
  },
  {
    category: "ministry,education",
    type: "customer-stories",
    assetId: "12028460",
    infoText: "Customer Story",
    title: "DTS: A Portable Library for Every Student",
    blurbText:
      "Learn how Dallas Theological Seminary equips the next generation with Logos.",
    downloadLink:
      "https://www.logos.com/learn/customer-story/dallas-theological-seminary",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "finance,leadership,communications,ministry",
    type: "reports",
    assetId: "10687776",
    infoText: "Report",
    title: "State of the Church COVID-19 Report",
    blurbText:
      "Learn how churches like yours have been affected by the pandemic and what trends you need to know to thrive in a post-COVID-19 world.",
    downloadLink:
      "https://faithlife.com/ministry-resources/reports/state-of-the-church-covid-19-report",
    linkText: "Download",
    amberBoardId: "1234",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "finance,communications,ministry",
    type: "reports",
    assetId: "10773616",
    infoText: "Report",
    title: "Back to Church: When and How Churches Are Reopening",
    blurbText:
      "When Should Churches Reopen and what are they expecting when they do? This free report will help you ask the right questions—and prepare well—for reopening your doors.",
    downloadLink:
      "https://faithlife.com/ministry-resources/report/back-to-church-when-and-how-churches-are-reopening",
    linkText: "Download",
    amberBoardId: "3930",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "ministry,education",
    type: "deep-dives",
    assetId: "12087732",
    infoText: "Deep Dive",
    title: "What Was Jesus Tomb Really Like?",
    blurbText:
      "Explore an ancient tomb and see the Easter story through the eyes of those who lived it.",
    downloadLink: "https://www.logos.com/encounter-easter",
    linkText: "Read more",
    product: "logos",
    season: "spring",
  },
  {
    category: "finance,leadership,communications,ministry",
    type: "guides",
    assetId: "10687779",
    infoText: "Playbook",
    title: "A Strategic Playbook for Teams",
    blurbText:
      "How can your team navigate changes like cancelled church services&mdash;while reaching your community with the gospel? Find out in this free coronavirus guide for churches.",
    downloadLink:
      "https://faithlife.com/ministry-resources/equip/guide/church-coronavirus",
    linkText: "Download",
    amberBoardId: "1234",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "finance,leadership",
    type: "kits",
    assetId: "11889325",
    infoText: "Kit",
    title: "Generosity Sermon Kit",
    blurbText:
      "Want to preach on generosity, but not sure where to start? Pick up this done-for-you kit with everything you need for a sermon series on generosity.",
    downloadLink:
      "https://faithlife.com/ministry-resources/giving/kit/generosity-sermon-kit",
    linkText: "Download",
    amberBoardId: "2584",
    product: "giving",
    season: "someseason",
  },
  {
    category: "finance,leadership",
    type: "guides",
    assetId: "8962374",
    infoText: "Guide",
    title: "7 Indispensable Ways to Make Generosity Part of Your Church’s DNA",
    blurbText:
      "In this free guide, learn to help your community become more generous while simplifying church giving, so it becomes a more natural part of daily life.",
    downloadLink:
      "https://faithlife.com/ministry-resources/giving/guide/7-ways-increase-generosity-in-church",
    linkText: "Download",
    amberBoardId: "2696",
    product: "giving",
    season: "someseason",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "10362194",
    infoText: "Kit",
    title: "Look Your Easter Best: Free Easter Images",
    blurbText:
      "Liven up your church website, announcements, slides, social media posts—anything. Download your free Easter stock photos now.",
    downloadLink:
      "https://faithlife.com/ministry-resources/sites/kit/free-easter-stock-photos",
    linkText: "Download",
    amberBoardId: "2842",
    product: "proclaim",
    season: "spring",
  },
  {
    category: "communications,worship",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "10884264",
    infoText: "Webinar",
    title: "7 Common but Avoidable Mistakes in Church Graphics",
    blurbText:
      "We&apos;ve come a long way from clip art and transparencies, but many churches still make key graphic design mistakes. Learning the design basics in this free webinar will help you make beautiful graphics, even if you don&apos;t have professional training.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/webinar/church-graphic-design-mistakes",
    linkText: "Watch",
    amberBoardId: "2583",
    product: "proclaim",
    season: "someseason",
  },
  {
    category: "finance",
    type: "customer-stories",
    assetId: "9926923",
    infoText: "Customer Story",
    title: "How a Church of Tech Skeptics Thrives with Online Community",
    blurbText:
      "Pastor Kaloma knew he couldn’t do church the same way he had in the past. Something had to change to reach this community.",
    downloadLink:
      "https://faithlife.com/ministry-resources/giving/casestudy/university-ame-zion-church",
    linkText: "Read more",
    amberBoardId: "2738",
    product: "giving",
    season: "someseason",
  },
  {
    category: "communications",
    type: "kits",
    assetId: "9652413",
    infoText: "Kit",
    title: "Easter Eye Candy: Spring&apos;s Free Church Media",
    blurbText:
      "Raise the bar this spring with professionally designed Easter media. Download 10 free pieces of church media.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/kit/free-church-media-spring",
    linkText: "Download",
    amberBoardId: "2512",
    product: "proclaim",
    season: "spring",
  },
  {
    category: "communications",
    type: "guides",
    assetId: "10821864",
    infoText: "Guide",
    title: "SEO for Churches: Everything You Need to Know to Get Found Online",
    blurbText:
      "Is Your Church Website Invisible Online? Over 17 million people search online for churches each year. With this free guide, you can help new people discover your site—and your church.",
    downloadLink:
      "https://faithlife.com/ministry-resources/sites/guide/church-website-seo",
    linkText: "Download",
    amberBoardId: "1234",
    product: "sites",
    season: "someseason",
  },
  {
    category: "operations, communications",
    type: "deep-dives",
    assetId: "11956450",
    infoText: "Deep Dive",
    title: "Best Church Websites with Examples and Best Practices",
    blurbText:
      "Not all church websites were created equal. Learn more about creating and maintaining an effective site for your church, and get inspired by our favorites.",
    downloadLink: "https://faithlife.com/products/sites/best-church-websites",
    linkText: "Read more",
    product: "sites",
    season: "someseason",
  },
  {
    category: "communications",
    type: "guides",
    assetId: "10884265",
    infoText: "Guide",
    title: "49 Tips for Using Color in Your Church Graphics",
    blurbText:
      "Feel like you&apos;re going round and round with the color wheel? Learn how to use color for elegant, attention-grabbing church graphics with this free guide.",
    downloadLink:
      "https://faithlife.com/ministry-resources/proclaim/guide/using-color-in-church-graphics",
    linkText: "Download",
    amberBoardId: "2598",
    product: "proclaim",
    season: "someseason",
  },
  {
    category: "education",
    type: "customer-stories",
    assetId: "12028461",
    infoText: "Customer Story",
    title: "DCC: Developing People of Influence",
    blurbText:
      "Learn how Dallas Christian College develops people of influence.",
    downloadLink:
      "https://www.logos.com/learn/customer-story/dallas-christian-college",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11927989",
    infoText: "Webinar",
    title: "How to Use Your Church’s Technology for Discipleship and Outreach",
    blurbText:
      "Whether you’re missing midweek opportunities or struggling to reach a younger audience, a digital discipleship strategy might be the missing ingredient. Watch this FREE, on-demand webinar to learn the 6 steps in digital discipleship—and how to get it going at your church.",
    downloadLink:
      "https://grow.faithlife.com/equip/webinar/digital-discipleship-webinar",
    linkText: "Watch",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "finance",
    type: "deep-dives",
    assetId: "11956441",
    infoText: "Deep Dive",
    title: "Year-End Giving: Everything Your Church Needs to Know",
    blurbText:
      "The year-end giving season offers your church a ready-made opportunity to encourage your congregation to give generously. Learn how to make it count this year.",
    downloadLink:
      "https://faithlife.com/products/giving/online-giving-for-churches/year-end-giving",
    linkText: "Read more",
    product: "giving",
    season: "winter",
  },
  {
    category: "communications",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11982653",
    infoText: "Webinar",
    title: "Top 5 Church Live Streaming Mistakes",
    blurbText:
      "Your church could accidentally be keeping viewers at arms’ length. Learn how to avoid the top mistakes and draw them in instead.",
    downloadLink:
      "https://grow.faithlife.com/livestream/webinar/live-stream-webinar",
    linkText: "Watch",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "ministry,education",
    type: "customer-stories",
    assetId: "12028462",
    infoText: "Customer Story",
    title: "Part-Time Seminary, Full-Throttle Research",
    blurbText: "Learn how one student used Logos to thrive in seminary.",
    downloadLink: "https://www.logos.com/learn/customer-story/andrew-daw",
    linkText: "Read story",
    product: "logos",
    season: "someseason",
  },
  {
    category: "communications, ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "12308892",
    infoText: "Webinar",
    title: "Build a Professional Proclaim Presentation",
    blurbText:
      "Bring sermon illustrations and more to life with Faithlife Proclaim presentation software.",
    downloadLink:
      "https://grow.faithlife.com/how-to-church-presentation-proclaim",
    linkText: "Watch now",
    product: "proclaim",
    season: "someseason",
  },
  {
    category: "communications, operations, ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11928443",
    infoText: "Webinar",
    title: "Your New Church Website—Live in Minutes",
    blurbText:
      "This easy-to-follow 30-minute training video walks you through each step you’ll need to complete before you take your church website live.",
    downloadLink:
      "https://grow.faithlife.com/sites/webinar/how-to-set-up-church-website",
    linkText: "Watch now",
    product: "sites",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "11928446",
    infoText: "Webinar",
    title: "Unleash a Bible Study Revolution in Your Church with Logos",
    blurbText:
      "Your Faithlife Equip subscription unlocks Logos Bible Software for everyone in your church, including small groups and home groups.",
    downloadLink:
      "https://grow.faithlife.com/how-to-share-logos-bible-study-church",
    linkText: "Watch now",
    product: "equip",
    season: "someseason",
  },
  {
    category: "finance",
    type: "deep-dives",
    assetId: "11956439",
    infoText: "Deep Dive",
    title: "A Definitive Guide to Online Giving for Churches",
    blurbText:
      "Everything you need to know about online giving for churches. Learn the top features, benefits, strategies, myths, and more!",
    downloadLink:
      "https://faithlife.com/products/giving/online-giving-for-churches",
    linkText: "Read more",
    product: "someproduct",
    season: "someseason",
  },
  {
    category: "operations, ministry, communications",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "12308890",
    infoText: "Webinar",
    title: "New to Live Streaming? Here’s how to Setup Faithlife Live Stream",
    blurbText:
      "Watch this free on-demand training with the Faithlife team to learn how easy it can be to stream your next service.",
    downloadLink:
      "https://grow.faithlife.com/how-to-church-presentations-livestream",
    linkText: "Watch now",
    product: "live-stream",
    season: "someseason",
  },
  {
    category: "finance, operations, communications",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "12308891",
    infoText: "Webinar",
    title: "How to Setup Faithlife Giving",
    blurbText:
      "Getting started with Faithlife Giving only takes a few minutes. But getting people to give to your church is only half the battle. Here’s what’s next.",
    downloadLink:
      "https://grow.faithlife.com/giving/how-to-church-presentations",
    linkText: "Watch now",
    product: "giving",
    season: "someseason",
  },
  {
    category: "ministry",
    type: "webinars",
    webinarType: "on-demand",
    assetId: "6437626",
    infoText: "Webinar",
    title: "A Pastor&apos;s Guide to Church Leadership Training",
    blurbText:
      "Scripture calls us to train the Church for ministry. Easier said than done, right? Discover key strategies for empowering leaders from an experienced pastor.",
    downloadLink:
      "https://faithlife.com/ministry-resources/equip/webinar/church-leadership-training",
    linkText: "Watch",
    amberBoardId: "2146",
    product: "someproduct",
    season: "someseason",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ministry Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}

      {/* Header */}
      <div className="flex justify-center items-center w-full">
        <img src="/images/Header-Desktop.png" alt="" className="w-11/12 h-auto -mb-24 " />
        <div className="text-5xl text-center font-extrabold text-gray-600 absolute">
          <h1 className="">Ministry Resources</h1>
        </div>
      </div>

      {/* List */}
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div className="relative max-w-7xl mx-auto">
          <section className=" mx-auto grid gap-customGap md:grid-cols-2 lg:grid-cols-3">
            {resources &&
              resources.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col shadow-md overflow-hidden w-smCard md:w-mdCard lg:w-lgCard"
                >
                  <div className="flex-shrink-0 p-2">
                    <img
                      src={`https://files.logoscdn.com/v1/assets/${post.assetId}/optimized`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-2 flex flex-col">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        <a href="#" className="hover:underline">
                          {post.infoText}
                        </a>
                      </h4>
                      <a href="#" className="block mt-2">
                        <h2 className="text-md font-bold text-gray-700">
                          {post.title}
                        </h2>
                        <p className="mt-5 text-sm text-gray-600">
                          {post.blurbText}
                        </p>
                      </a>
                    </div>
                    <div className="mt-3 self-end">
                      <button className="border-2 border-cyan-600 px-2 py-1 text-cyan-600 font-bold hover:bg-cyan-600 hover:text-white">
                        {post.linkText}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </section>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>

      {/* Footer */}
    </div>
  );
}
