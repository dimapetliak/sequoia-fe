import { BlogPost } from "@/types";

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 24 },
  },
};

export const MOCKED_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
    bannerTitle: "NEW NFT COLLECTION",
    content:
      "Get ready for an incredible journey into the world of blockchain gaming and digital ecosystems! Our team has been working tirelessly to bring you the most comprehensive update to date, featuring revolutionary gameplay mechanics, stunning visual enhancements, and an expanded garden ecosystem that will transform how you interact with our digital environment. This March 2025 update represents months of development, community feedback integration, and cutting-edge technology implementation. We're introducing new character classes, each with unique abilities and progression paths that will challenge even our most experienced players. The garden system receives a complete overhaul with seasonal cycles, advanced breeding mechanics, and rare plant species that can only be discovered through exploration and community collaboration. Additionally, we're launching our highly anticipated NFT marketplace integration, allowing players to trade rare items, showcase their achievements, and participate in exclusive community events. The update also includes performance optimizations, enhanced graphics rendering, and improved multiplayer functionality that will support larger communities and more dynamic interactions. Our development team has incorporated player suggestions from the past year, resulting in quality-of-life improvements that enhance the overall gaming experience while maintaining the core elements that make our ecosystem special.",
  },
  {
    id: 2,
    title: "Mastering the Art of Digital Gardening in Virtual Ecosystems",
    excerpt:
      "Discover advanced techniques for creating thriving digital gardens and maximizing your harvest potential.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["Garden", "Tutorials"],
    date: "2025-05-18",
    author: "Green Thumb Expert",
    slug: "digital-gardening-mastery",
    publishedAt: "2025-05-18T14:30:00Z",
    bannerTitle: "GARDENING MASTERY",
    content:
      "Digital gardening has evolved beyond simple plant placement and watering schedules. Today's virtual ecosystems require deep understanding of soil composition, weather patterns, and symbiotic relationships between different plant species. This comprehensive guide explores advanced techniques that seasoned gardeners use to create flourishing digital landscapes. We'll delve into the science behind nutrient cycling, optimal planting arrangements, and the intricate balance needed to maintain healthy soil microbiomes in virtual environments. Understanding seasonal variations is crucial for long-term success, as different plants thrive under specific conditions that change throughout the virtual year. Advanced gardeners know that companion planting isn't just about aesthetics – certain combinations create beneficial relationships that boost growth rates, improve resistance to virtual pests, and enhance overall garden productivity. We'll explore rare seed varieties, their unique requirements, and cultivation techniques that can unlock their full potential. The integration of technology with traditional gardening wisdom creates opportunities for innovation, from automated irrigation systems to AI-powered growth optimization algorithms. Community collaboration plays a vital role in sharing knowledge, trading rare species, and participating in seasonal events that can significantly impact your garden's development. This guide also covers troubleshooting common issues, from soil depletion to pest management, providing practical solutions that every digital gardener should master.",
  },
  {
    id: 3,
    title: "Revolutionary NFT Gaming: The Future of Digital Ownership",
    excerpt:
      "Exploring how non-fungible tokens are reshaping the gaming landscape and creating new economic opportunities.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["NFTs", "Game"],
    date: "2025-05-15",
    author: "Blockchain Pioneer",
    slug: "nft-gaming-revolution",
    publishedAt: "2025-05-15T09:15:00Z",
    bannerTitle: "DIGITAL OWNERSHIP",
    content:
      "The intersection of blockchain technology and gaming has created unprecedented opportunities for true digital ownership, fundamentally changing how players interact with virtual assets and economies. Non-fungible tokens represent more than just collectible items – they embody a paradigm shift toward player empowerment and decentralized gaming ecosystems. This revolutionary approach allows players to own, trade, and leverage their in-game achievements across multiple platforms and experiences. The traditional model of centralized gaming economies, where players invest time and money without true ownership, is being replaced by systems that recognize and protect player investments through blockchain verification. Smart contracts enable automatic royalty distributions to creators, ensuring that original developers continue benefiting from secondary market transactions while players gain real economic value from their gaming activities. The emergence of play-to-earn mechanics has transformed gaming from pure entertainment into viable income opportunities, particularly in developing economies where skilled players can earn substantial livings through strategic gameplay and asset management. Cross-platform compatibility represents another significant advancement, allowing assets earned in one game to be utilized in entirely different virtual worlds, creating interconnected ecosystems that enhance the value proposition for players. However, this revolution also brings challenges including environmental concerns, market volatility, and the need for user education about blockchain technologies. Understanding these complexities is essential for players, developers, and investors looking to participate in this evolving landscape responsibly and effectively.",
  },
  {
    id: 4,
    title:
      "Building Sustainable Virtual Communities: Best Practices and Strategies",
    excerpt:
      "Learn how to foster long-lasting, engaged communities in virtual environments through proven methodologies.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["News", "Popular"],
    date: "2025-05-12",
    author: "Community Builder",
    slug: "sustainable-virtual-communities",
    publishedAt: "2025-05-12T16:45:00Z",
    bannerTitle: "COMMUNITY BUILDING",
    content:
      "Creating sustainable virtual communities requires understanding the delicate balance between structure and freedom, engagement and autonomy, growth and intimacy. Successful virtual environments don't emerge by accident – they result from intentional design decisions, consistent community management, and adaptive governance structures that evolve with member needs. The foundation of any thriving virtual community lies in establishing clear values and purposes that resonate with target participants while remaining flexible enough to accommodate diverse perspectives and contributions. Effective community building starts with identifying core activities that naturally encourage interaction and collaboration, whether through shared goals, creative projects, or problem-solving challenges that require collective effort. Leadership structures in virtual communities often differ significantly from traditional hierarchies, favoring distributed authority and peer-to-peer mentorship that empowers members to take ownership of community outcomes. Communication tools and platforms must be carefully selected and configured to support both casual social interaction and focused collaborative work, with moderation policies that protect member safety while preserving open dialogue. Onboarding processes play a crucial role in helping newcomers understand community norms, find their place within existing social structures, and begin contributing meaningfully to collective activities. Regular events, both scheduled and spontaneous, help maintain community momentum and provide opportunities for members to strengthen relationships beyond their initial shared interests. Conflict resolution mechanisms become essential as communities grow, requiring established procedures for addressing disputes while maintaining trust and cohesion among diverse member groups.",
  },
  {
    id: 5,
    title: "Advanced Game Mechanics: Designing Engaging Player Experiences",
    excerpt:
      "Deep dive into the psychological and technical aspects of creating compelling game mechanics that keep players engaged.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["Game", "Tutorials"],
    date: "2025-05-10",
    author: "Game Designer Pro",
    slug: "advanced-game-mechanics",
    publishedAt: "2025-05-10T11:20:00Z",
    bannerTitle: "GAME DESIGN",
    content:
      "Exceptional game mechanics emerge from the intersection of psychological understanding and technical innovation, creating experiences that resonate deeply with players while maintaining long-term engagement. The art of game design involves crafting systems that are immediately intuitive yet offer profound depth for dedicated players willing to invest time in mastery. Successful mechanics often tap into fundamental human motivations: the desire for achievement, social connection, creative expression, and personal growth. Understanding player psychology helps designers create feedback loops that provide appropriate rewards for different types of engagement, from casual exploration to competitive mastery. Progression systems must balance accessibility with challenge, ensuring that new players can experience success while providing experienced players with meaningful goals that require skill development and strategic thinking. The concept of 'flow state' becomes crucial in mechanical design – creating conditions where players lose themselves in gameplay through perfectly calibrated difficulty curves that adapt to individual skill levels. Emergent gameplay represents the pinnacle of mechanical design, where simple rules combine to create complex, unpredictable situations that surprise even the designers themselves. Social mechanics add another layer of complexity, as multiplayer interactions can either enhance or undermine individual player experiences depending on implementation quality and community management. Balancing competitive and cooperative elements requires careful consideration of player personalities, motivations, and the overall community atmosphere developers want to cultivate. Regular playtesting and data analysis provide essential feedback for iterative improvement, helping designers understand how theoretical mechanics perform in practice and identifying areas for refinement.",
  },
  {
    id: 6,
    title:
      "The Economics of Virtual Worlds: Understanding Digital Marketplace Dynamics",
    excerpt:
      "Comprehensive analysis of economic principles governing virtual marketplaces and digital asset valuation.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["NFTs", "Popular"],
    date: "2025-05-08",
    author: "Economic Analyst",
    slug: "virtual-world-economics",
    publishedAt: "2025-05-08T13:30:00Z",
    bannerTitle: "DIGITAL ECONOMICS",
    content:
      "Virtual economies have evolved into complex systems that mirror and sometimes surpass traditional economic principles, creating new paradigms for value creation, distribution, and exchange in digital environments. Understanding these economic dynamics requires analyzing supply and demand mechanics within constrained virtual systems where scarcity can be artificially controlled yet must feel natural to participants. The psychology of virtual asset valuation involves both intrinsic utility within game systems and perceived social status among community members, creating multi-layered value propositions that traditional economics alone cannot fully explain. Inflation management in virtual worlds presents unique challenges as developers must balance rewarding player effort with maintaining economic stability, often requiring sophisticated mathematical models and real-time adjustment mechanisms. Cross-platform asset portability introduces additional complexity as values must remain stable across different virtual environments with varying economic rules and player populations. Speculation and investment behavior in virtual marketplaces often exhibit extreme volatility due to limited liquidity, emotional attachment to digital assets, and the influence of social media on perceived value trends. Market manipulation becomes a significant concern when whales or coordinated groups can artificially influence prices in ways that would be illegal in traditional financial markets but remain largely unregulated in virtual spaces. The emergence of professional traders and investment funds focused solely on virtual assets indicates the maturation of these markets and their increasing integration with traditional financial systems. Understanding these economic principles helps players make informed decisions about asset acquisition and management while providing developers with frameworks for creating sustainable economic systems.",
  },
  {
    id: 7,
    title:
      "Innovative Storytelling in Interactive Media: Crafting Narrative Experiences",
    excerpt:
      "Exploring cutting-edge approaches to narrative design that leverage interactivity for deeper emotional impact.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["Game", "News"],
    date: "2025-05-05",
    author: "Narrative Designer",
    slug: "interactive-storytelling-innovation",
    publishedAt: "2025-05-05T08:45:00Z",
    bannerTitle: "NARRATIVE INNOVATION",
    content:
      "Interactive storytelling has transcended traditional linear narratives to become a sophisticated art form that leverages player agency, emergent choice consequences, and dynamic character development to create deeply personal narrative experiences. Modern interactive narratives challenge conventional storytelling boundaries by allowing players to influence not just plot outcomes but character motivations, world states, and thematic exploration through their actions and decisions. The concept of player authorship emerges when well-designed choice systems enable participants to co-create stories that feel uniquely their own while maintaining narrative coherence and emotional impact. Branching narrative structures require careful architectural planning to ensure that all paths provide meaningful experiences while avoiding the exponential complexity that can make development impractical or story quality inconsistent. Character development in interactive media involves creating personalities that can respond authentically to player choices while maintaining their core identity traits, requiring sophisticated dialogue systems and behavioral modeling. Environmental storytelling has become increasingly important as players expect world details, object placement, and ambient narrative elements to reinforce and expand upon explicit story content. The integration of procedural generation with authored narrative content creates opportunities for infinite storytelling possibilities while maintaining human-crafted emotional beats and thematic coherence. Player memory and consequence tracking systems allow stories to acknowledge and build upon past decisions across extended play sessions, creating persistent narrative momentum that encourages long-term engagement. Understanding how different players approach choice-making, from optimizers seeking best outcomes to role-players maintaining character consistency, helps designers create systems that support multiple valid approaches to interactive narrative engagement.",
  },
  {
    id: 8,
    title: "Community-Driven Content Creation: Empowering Player Creativity",
    excerpt:
      "How player-generated content transforms gaming experiences and builds stronger community bonds.",
    image: "/assets/portfolio/Portfolio-Game.png",
    tags: ["Popular", "Tutorials"],
    date: "2025-05-03",
    author: "Content Creator",
    slug: "community-driven-content",
    publishedAt: "2025-05-03T15:10:00Z",
    bannerTitle: "PLAYER CREATIVITY",
    content:
      "Player-generated content has revolutionized the gaming industry by transforming players from passive consumers into active creators, fostering unprecedented levels of community engagement and extending game longevity far beyond traditional development cycles. The democratization of content creation tools has enabled players to contribute meaningfully to game worlds through custom levels, modifications, cosmetic items, and even entirely new gameplay mechanics that developers never envisioned. Successful user-generated content systems require careful balance between creative freedom and quality control, providing robust creation tools while maintaining standards that ensure content integrates seamlessly with the core game experience. Community curation mechanisms, including peer review systems and reputation-based filtering, help identify high-quality contributions while encouraging creators to improve their skills and collaborate with others. The economic implications of player-created content extend beyond simple monetization to include revenue sharing models that compensate creators for popular contributions, creating sustainable ecosystems where talented community members can earn recognition and income. Legal frameworks around intellectual property rights become crucial when players create content using developer-provided tools and assets, requiring clear agreements that protect both creator rights and platform sustainability. Educational resources and mentorship programs help aspiring creators develop technical skills and design sensibilities, building stronger creative communities that can tackle increasingly ambitious projects. Cross-pollination between different creator communities leads to innovation and knowledge sharing that benefits the entire ecosystem, from beginners learning basic techniques to experts pushing the boundaries of what's possible within given technical constraints. The social aspects of collaborative creation often prove as valuable as the content itself, building lasting friendships and professional networks that extend beyond individual games or platforms.",
  },
];

export const TAGS = ["News", "Game", "NFTs", "Garden", "Popular", "Tutorials"];

export const TOTAL_COUNT = MOCKED_POSTS.length;
