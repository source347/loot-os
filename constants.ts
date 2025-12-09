
import { CategoryType, LinkItem, CategoryMeta } from './types';
import { 
  Zap, Gamepad2, ClipboardList, Server, 
  ShieldCheck, Wrench, Users, MousePointerClick 
} from 'lucide-react';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: CategoryType.FAUCET,
    label: "FAUCET HUB",
    description: "Hourly claim protocols initiated.",
    icon: Zap,
    color: "#fcee0a" // Yellow
  },
  {
    id: CategoryType.PTC,
    label: "AD NETWORK",
    description: "Monetize visual attention.",
    icon: MousePointerClick,
    color: "#ff0099" // Pink
  },
  {
    id: CategoryType.GAMING,
    label: "ARCADE SECTOR",
    description: "Play-to-Earn simulations.",
    icon: Gamepad2,
    color: "#a855f7" // Purple
  },
  {
    id: CategoryType.TASKS,
    label: "BOUNTY BOARD",
    description: "Execute micro-contracts.",
    icon: ClipboardList,
    color: "#0aff0a" // Green
  },
  {
    id: CategoryType.NODES,
    label: "SERVER FARM",
    description: "Passive bandwidth allocation.",
    icon: Server,
    color: "#00f3ff" // Cyan
  },
  {
    id: CategoryType.DEFI,
    label: "DEFI VAULT",
    description: "Long-term asset staking.",
    icon: ShieldCheck,
    color: "#3b82f6" // Blue
  },
  {
    id: CategoryType.SOCIAL,
    label: "SOCIAL GRID",
    description: "Identity & Network effects.",
    icon: Users,
    color: "#f97316" // Orange
  },
  {
    id: CategoryType.TOOLS,
    label: "GEAR DEPOT",
    description: "Wallets & Exchangers.",
    icon: Wrench,
    color: "#94a3b8" // Slate
  }
];

export const LINKS: LinkItem[] = [
  // --- FAUCETS ---
  {
    id: 'freebitco',
    title: 'FreeBitco.in',
    url: 'https://freebitco.in/?r=17006348',
    description: 'Legacy Protocol. Hourly BTC generation.',
    category: CategoryType.FAUCET,
    tags: ['BTC', 'Hourly', 'Tier-S'],
    color: 'bg-yellow-500',
    isHot: true
  },
  {
    id: 'faucetpay',
    title: 'FaucetPay',
    url: 'https://faucetpay.io/?r=95880',
    description: 'Micro-wallet aggregator. Essential infrastructure.',
    category: CategoryType.FAUCET,
    tags: ['Wallet', 'Hub'],
    color: 'bg-blue-600'
  },
  {
    id: 'cointiply',
    title: 'Cointiply',
    url: 'https://cointiply.com/r/mOnqp',
    description: 'High-yield rain pool & offerwall.',
    category: CategoryType.FAUCET,
    tags: ['USD', 'Chat'],
    color: 'bg-red-500',
    isHot: true
  },
  {
    id: 'firefaucet',
    title: 'FireFaucet',
    url: 'https://firefaucet.win/ref/126786',
    description: 'Auto-claim distinct protocols simultaneously.',
    category: CategoryType.FAUCET,
    tags: ['Auto', 'Leveling'],
    color: 'bg-orange-600'
  },
  {
    id: 'autofaucet',
    title: 'DutchyCorp',
    url: 'https://autofaucet.dutchycorp.space/?r=Autofaucets',
    description: 'The Multiverse of Faucets. 70+ coins.',
    category: CategoryType.FAUCET,
    tags: ['Auto', 'Multi'],
    color: 'bg-purple-600'
  },
  { id: 'dogepick', title: 'DogePick', url: 'https://dogepick.io/?ref=limana', description: 'Hourly Doge Protocol.', category: CategoryType.FAUCET, tags: ['Doge'], color: 'bg-yellow-400' },
  { id: 'litepick', title: 'LitePick', url: 'https://litepick.io/?ref=source', description: 'Hourly Litecoin Protocol.', category: CategoryType.FAUCET, tags: ['LTC'], color: 'bg-gray-400' },
  { id: 'solpick', title: 'SolPick', url: 'https://solpick.io/?ref=dashboard', description: 'Solana Matrix Entry.', category: CategoryType.FAUCET, tags: ['SOL'], color: 'bg-indigo-400' },
  { id: 'tonpick', title: 'TonPick', url: 'https://tonpick.game/?ref=dashboard', description: 'Telegram Open Network access.', category: CategoryType.FAUCET, tags: ['TON'], color: 'bg-blue-500' },

  // --- PTC / ADS ---
  {
    id: 'coinpayu',
    title: 'CoinPayU',
    url: 'https://www.coinpayu.com/?r=dashboard',
    description: 'Top-tier PTC Marketplace.',
    category: CategoryType.PTC,
    tags: ['Market', 'Ads'],
    color: 'bg-green-500',
    isHot: true
  },
  {
    id: 'adbtc',
    title: 'AdBTC',
    url: 'https://r.adbtc.top/1169353',
    description: 'Satoshi accumulation via surf.',
    category: CategoryType.PTC,
    tags: ['Classic', 'BTC'],
    color: 'bg-yellow-600'
  },
  {
    id: 'btcadspace',
    title: 'BTC Ad Space',
    url: 'https://btcadspace.com/ref/source',
    description: 'New gen ad viewing.',
    category: CategoryType.PTC,
    tags: ['New', 'BTC'],
    color: 'bg-orange-400'
  },
  { id: 'adbch', title: 'AdBCH', url: 'https://adbch.top/r/312844', description: 'Bitcoin Cash focus.', category: CategoryType.PTC, tags: ['BCH'], color: 'bg-green-400' },
  { id: 'surfe', title: 'Surfe.be', url: 'https://surfe.be/ext/178882', description: 'Passive browser overlay.', category: CategoryType.PTC, tags: ['Extension'], color: 'bg-blue-500' },

  // --- GAMING ---
  {
    id: 'rollercoin',
    title: 'RollerCoin',
    url: 'https://rollercoin.com/?r=kcq1472k',
    description: 'Data center simulation. 8-bit graphics.',
    category: CategoryType.GAMING,
    tags: ['Sim', 'Mining'],
    color: 'bg-purple-700',
    isHot: true
  },
  {
    id: 'gamee',
    title: 'Gamee',
    url: 'https://t.me/gamee/start?startapp=eyJyZWYiOjMzMzYwMDY0MH0',
    description: 'Telegram Arcade Platform.',
    category: CategoryType.GAMING,
    tags: ['TG', 'Mobile'],
    color: 'bg-blue-400'
  },
  { id: 'simplebits', title: 'SimpleBits', url: 'https://simplebits.io/ref/0rd4li1cSLTL', description: 'RPG Mining Hybrid.', category: CategoryType.GAMING, tags: ['RPG'], color: 'bg-green-600' },
  { id: 'luckywatch', title: 'LuckyWatch', url: 'https://luckywatch.pro/u/0oqit', description: 'Video consumption rewards.', category: CategoryType.GAMING, tags: ['Video'], color: 'bg-red-400' },

  // --- TASKS ---
  {
    id: '2captcha',
    title: '2Captcha',
    url: 'https://2captcha.com/?from=9690712',
    description: 'Solve security grids for credits.',
    category: CategoryType.TASKS,
    tags: ['Grind', 'Work'],
    color: 'bg-slate-600'
  },
  {
    id: 'timebucks',
    title: 'TimeBucks',
    url: 'https://timebucks.com/?refID=219093340',
    description: 'Omni-task platform.',
    category: CategoryType.TASKS,
    tags: ['GPT', 'Video'],
    color: 'bg-green-700'
  },
  {
    id: 'pawns',
    title: 'Pawns.app',
    url: 'https://pawns.app/?r=1112465',
    description: 'Bandwidth & Survey monetization.',
    category: CategoryType.TASKS,
    tags: ['Passive', 'Survey'],
    color: 'bg-red-500'
  },
  { id: 'freeward', title: 'Freeward', url: 'https://freeward.net/ref/7pex8', description: 'Global GPT hub.', category: CategoryType.TASKS, tags: ['GPT'], color: 'bg-cyan-600' },
  { id: 'skynet', title: 'Certik Quest', url: 'https://skynet.certik.com/quest/signup?referralId=4324d09a-bf19-437c-8635-645a52dbf136', description: 'Security education missions.', category: CategoryType.TASKS, tags: ['Edu'], color: 'bg-slate-800' },

  // --- NODES / PASSIVE ---
  {
    id: 'grass',
    title: 'GetGrass',
    url: 'https://app.getgrass.io/register?referralCode=XBPRl6U7sAvvzRX',
    description: 'Sell unused bandwidth to AI.',
    category: CategoryType.NODES,
    tags: ['AI', 'Passive'],
    color: 'bg-green-500',
    isHot: true
  },
  {
    id: 'nodepay',
    title: 'Nodepay',
    url: 'https://app.nodepay.ai/register?ref=5pxS8VIIZzNeDSF',
    description: 'Decentralized internet backbone.',
    category: CategoryType.NODES,
    tags: ['Infra'],
    color: 'bg-blue-600'
  },
  { id: 'optimai-node', title: 'Optimai Node', url: 'https://node.optimai.network/register?ref=0EB0B06E', description: 'DePIN Network Node.', category: CategoryType.NODES, tags: ['DePIN'], color: 'bg-teal-600' },
  { id: '3dos', title: '3DOS', url: 'https://dashboard.3dos.io/register?ref_code=6d8572', description: 'Manufacturing Network.', category: CategoryType.NODES, tags: ['DePIN'], color: 'bg-orange-600' },

  // --- DEFI / LONG TERM ---
  {
    id: 'sosovalue',
    title: 'SoSoValue',
    url: 'https://sosovalue.com/join/0DCN0PVQ',
    description: 'Research platform. Brain XP farming.',
    category: CategoryType.DEFI,
    tags: ['Research'],
    color: 'bg-blue-700',
    isHot: true
  },
  {
    id: 'brevis',
    title: 'Brevis',
    url: 'https://proving-grounds.brevis.network/VQcpfa',
    description: 'ZK Proving Grounds.',
    category: CategoryType.DEFI,
    tags: ['Tech', 'ZK'],
    color: 'bg-purple-800'
  },
  { id: 'billions', title: 'Billions', url: 'https://signup.billions.network/?rc=IMENAAXD', description: 'Network Genesis.', category: CategoryType.DEFI, tags: ['Genesis'], color: 'bg-yellow-600' },

  // --- SOCIAL ---
  {
    id: 'fight',
    title: 'Fight.id',
    url: 'https://app.fight.id/home',
    description: 'Web3 Identity Claims.',
    category: CategoryType.SOCIAL,
    tags: ['ID'],
    color: 'bg-red-700'
  },
  { id: 'everve', title: 'Everve', url: 'https://everve.net/ref/678797/', description: 'Social signal exchange.', category: CategoryType.SOCIAL, tags: ['Exchange'], color: 'bg-pink-500' },

  // --- TOOLS ---
  {
    id: 'binance',
    title: 'Binance',
    url: 'https://accounts.binance.com/register?ref=49685937',
    description: 'Exchange Apex Predator.',
    category: CategoryType.TOOLS,
    tags: ['CEX', 'Tier-1'],
    color: 'bg-yellow-500'
  },
  { id: 'mexc', title: 'MEXC', url: 'https://www.mexc.com/auth/signup?inviteCode=2pLgC', description: 'Gem Hunter Exchange.', category: CategoryType.TOOLS, tags: ['CEX'], color: 'bg-green-500' },
  { id: 'etherdrops', title: 'EtherDrops', url: 'https://t.me/EtherDROPS_bot?start=promo_OYJAP5', description: 'Wallet Tracking Bot.', category: CategoryType.TOOLS, tags: ['Bot'], color: 'bg-blue-500' }
];
