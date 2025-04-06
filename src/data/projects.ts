export interface Project {
  id: number;
  category: string;
  title: string;
  year: string;
  mediaType: 'video' | 'image';
  image: string;
  video?: string;
  tags: string[];
  liveLink: string;
  // description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: 'Fitness',
    title: 'StrideAI - Your Personal Running Coach',
    year: '2025',
    mediaType: 'video',
    image: '/images/strideai_preview8.png',
    video: '/videos/strideai-preview.mp4',
    tags: ['DESIGN', 'DEVELOPMENT', '2024'],
    liveLink: 'https://stride-ai.vercel.app/',
    // description: 'A venture capital firm investing in early-stage startups. The website showcases their portfolio, investment thesis, and team.',
  },
  {
    id: 2,
    title: 'Wellthi - Generation Boost',
    category: 'Fintech',
    year: '2024',
    mediaType: 'image',
    image: '/images/wellthi_preview2.png',
    tags: ['DESIGN', 'DEVELOPMENT', '2024'],
    liveLink: 'https://wellthiapp.com/generationboost/',
    // description: 'A financial wellness platform helping the next generation build wealth through smart investing and financial education.',
  },
  {
    id: 3,
    title: 'We Run Nairobi',
    category: 'Fitness',
    year: '2024',
    mediaType: 'video',
    image: '/images/wrn_preview3.png',
    tags: ['DESIGN', 'MOBILE UI', '2024'],
    liveLink: 'https://www.figma.com/proto/713TqNUrkUR3TQy0pFlRkk/Oduma%27s-UX-Work?page-id=0%3A1&node-id=818-16542&viewport=23379%2C31019%2C0.26&t=hComDjtzdpuSeNK8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=747%3A10375&show-proto-sidebar=1',
    // description: 'A community-driven running app that connects runners in Nairobi, helping them find running partners and track their progress.',
  },
  {
    id: 4,
    title: 'Enkang',
    category: 'Real Estate',
    year: '2024',
    mediaType: 'image',
    image: '/images/enkang_preview1.png',
    tags: ['DESIGN', '2024'],
    liveLink: 'https://enkang.co.ke',
  },  
]; 




