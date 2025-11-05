import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	FaAndroid,
	FaAppStore,
	FaArrowDown,
	FaChevronRight,
	FaEnvelope,
	FaGithub,
	FaPlus,
} from "react-icons/fa";
import { FaAnglesDown, FaLink, FaSignsPost } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";
import rehypeRaw from "rehype-raw";
import { RecommendedArticleList } from "../components/HomepageFeatures/data";
import RecommendedArticle from "../components/RecommendedArticle";

// --- Helper Components ---

const ProjectCard = ({ project }) => {
	const handleClick = useCallback(() => {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set("projectId", project.id);

		// URL 업데이트 (히스토리에 추가)
		const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
		window.history.pushState({}, "", newUrl);
		window.dispatchEvent(new Event("urlchange"));
	}, [project.id]);
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			variants={cardVariants}
			onClick={handleClick}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="group h-72 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-lime-500/10 dark:hover:shadow-lime-500/20 transition-all duration-500 ease-in-out flex flex-col w-90 hover:w-full min-w-0 hover:flex-row cursor-pointer"
		>
			<img
				src={useBaseUrl(project.imageUrl)}
				alt={project.title}
				className="h-40 object-cover transition-all duration-500 group-hover:h-full w-90 group-hover:w-60"
			/>
			<div className="p-4 flex flex-col flex-grow">
				<h3 className="text-xl group-hover:text-2xl font-bold text-gray-900 dark:text-white mb-2">
					{project.title}
				</h3>
				<div className="hidden group-hover:block">
					{project.period && (
						<p className="text-md text-lime-600 dark:text-lime-400 mb-2 font-mono">
							{project.period}
						</p>
					)}
				</div>
				<p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-md flex-grow">
					{project.description}
				</p>
				<div className="hidden max-h-0 opacity-0 group-hover:block group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
					<p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
						사용 기술:
					</p>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="text-xs bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300 px-2 py-1 rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="hidden group-hover:flex flex-row justify-center items-center gap-2 p-4 text-lime-500 dark:text-lime-400">
				<span className="text-md font-semibold">더보기</span>
				<FaChevronRight className="w-3 h-3 " />
			</div>
		</motion.div>
	);
};

const ProjectCategory = ({ title, projects }) => (
	<div className="mb-12">
		<h2>
			<span className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
				{title}
			</span>
		</h2>
		<div className="flex flex-row gap-4 pb-4 w-full">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	</div>
);

// --- Page Sections ---

const HeroSection = () => {
	const profileImageUrl = useBaseUrl("/img/profile.png");
	return (
		<motion.section
			className="h-screen w-screen bg-lime-50/35 dark:bg-lime-900/80 px-8"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="max-w-7xl mx-auto h-1/2 flex flex-col justify-end">
				<div className="flex flex-row items-center gap-12">
					<motion.img
						src={profileImageUrl}
						alt="Profile Picture"
						className="rounded-full w-48 h-48 object-cover flex-shrink-0 shadow-lg"
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					/>
					<div>
						<h1>
							<TypeAnimation
								sequence={["안녕하세요,"]}
								className="text-5xl font-extrabold text-gray-900 dark:text-white leading-16"
								speed={1}
								cursor={false}
							/>
							<br />
							<TypeAnimation
								sequence={["", 500, "사용자 중심 "]}
								className="text-5xl font-extrabold text-lime-500 dark:text-lime-400 leading-16"
								speed={1}
								cursor={false}
							/>
							<TypeAnimation
								sequence={["", 1000, "개발자 공은배입니다."]}
								speed={1}
								className="text-5xl font-extrabold text-gray-900 dark:text-white leading-16"
							/>
						</h1>
					</div>
				</div>
				<div className="mt-8 flex justify-end gap-6">
					<motion.a
						href="https://github.com/eunbae0"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<FaGithub className="w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
					</motion.a>
					<motion.a
						href="mailto:geb9211@gmail.com"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<FaEnvelope className="w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
					</motion.a>
				</div>
			</div>
			<a href="#about" className="absolute left-1/2 -translate-x-1/2 bottom-28">
				<motion.div
					className="opacity-50 cursor-pointer"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
				>
					<FaArrowDown className="w-12 h-12 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
				</motion.div>
			</a>
		</motion.section>
	);
};

const AboutMeBox = ({
	label,
	title,
	description,
	imageUrl,
}: {
	label: string;
	title: string;
	description: string;
	imageUrl: string;
}) => {
	return (
		<motion.div
			className="group relative flex h-92 flex-row items-start justify-between gap-2 p-8 bg-cover bg-center rounded-xl transition-transform duration-500 hover:scale-105 w-full overflow-hidden"
			style={{ backgroundImage: `url(${imageUrl})` }}
			whileHover={{ scale: 1.0 }}
			whileTap={{ scale: 0.9 }}
		>
			<img
				src={useBaseUrl(imageUrl)}
				className="absolute top-0 left-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-lime-950/50 hidden group-hover:block group-hover:bg-opacity-60 transition-all duration-500 group-hover:backdrop-blur-sm" />
			<div className="relative flex flex-col gap-2 z-10">
				<span className="text-lg font-medium text-gray-200 dark:text-gray-300">
					{label}
				</span>
				<span className="text-3xl whitespace-pre-line font-bold text-white dark:text-gray-300">
					{title}
				</span>
				<p className="hidden group-hover:block text-md font-medium text-gray-200 dark:text-gray-300 pt-2">
					{description}
				</p>
			</div>
			<FaPlus className="relative w-6 h-6 text-gray-200 dark:text-gray-500 z-10 opacity-1000 group-hover:opacity-0 transition-opacity duration-500" />
		</motion.div>
	);
};

const AboutMeSection = () => {
	return (
		<motion.section
			className="dark:bg-gray-950"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
			id="about"
		>
			<div className="py-40 max-w-5xl flex flex-col items-center mx-auto gap-12 px-8 ">
				<div className="flex flex-col gap-3 items-center">
					<h1>
						<span className="text-6xl font-bold mb-16 pb-2">About Me</span>
					</h1>
					<p className="text-2xl font-semibold text-gray-500 dark:text-gray-300 max-w-3xl">
						저의 가치관을 소개합니다
					</p>
				</div>
				<div className="grid grid-cols-2 flex-col gap-6 w-full">
					{ABOUT_ME.map(({ label, title, description, imageUrl }) => (
						<AboutMeBox
							key={title}
							label={label}
							title={title}
							description={description}
							imageUrl={imageUrl}
						/>
					))}
				</div>
			</div>
		</motion.section>
	);
};

const ProjectsSection = () => {
	return (
		<motion.section
			className="bg-lime-50/40 dark:bg-gray-900 px-8"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="py-20 max-w-7xl mx-auto">
				<h1 className="!mb-12">
					<span className="text-6xl font-bold pb-2">Projects</span>
				</h1>
				{Object.entries(projectCategories).map(
					([title, projects]) =>
						projects.length > 0 && (
							<ProjectCategory key={title} title={title} projects={projects} />
						)
				)}
			</div>
		</motion.section>
	);
};

const RecommendArticleSection = () => {
	return (
		<motion.section
			className="bg-lime-50/40 dark:bg-gray-900 px-8"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="py-20 max-w-7xl mx-auto">
				<h1 className="!mb-12">
					<span className="text-6xl font-bold pb-2">Recommend Articles</span>
				</h1>
				<div className="grid gap-x-4 gap-y-5 grid-cols-3">
					{RecommendedArticleList.filter(
						({ to }) =>
							!to.includes("react-native-optimization") && !to.includes("만나")
					).map(({ to, title, description, image }) => (
						<RecommendedArticle
							to={to}
							title={title}
							description={description}
							image={image}
						/>
					))}
				</div>
			</div>
		</motion.section>
	);
};

// --- Main Portfolio Page ---

const ProjectModal = ({ project, onClose }) => {
	if (!project) return null;
	const imageUrl = useBaseUrl(project.imageUrl);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const [isScrolled, setScrolled] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(true);
		};

		ref.current.addEventListener("scroll", handleScroll);

		return () => {
			setScrolled(false);
			ref.current.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.div
			className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4"
			onClick={onClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-5xl h-auto max-h-[80vh] overflow-y-scroll"
				onClick={(e) => e.stopPropagation()}
				ref={ref}
				initial={{ y: "50%", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: "50%", opacity: 0 }}
				transition={{ type: "spring", damping: 30, stiffness: 300 }}
			>
				{!isScrolled && (
					<div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-10">
						<motion.div
							className="opacity-50 cursor-pointer flex flex-col items-center gap-2"
							animate={{ y: [0, 10, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<span>스크롤해서 더 보기</span>
							<FaAnglesDown className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
						</motion.div>
					</div>
				)}
				<div className="relative flex flex-col">
					<button
						onClick={onClose}
						className="absolute z-20 top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<div className="relative h-64 md:h-96">
						<img
							src={imageUrl}
							alt={project.title}
							className="absolute h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
						<div className="absolute bottom-0 p-8">
							<h2>
								<span className="text-4xl font-bold text-white mb-2">
									{project.title}
								</span>
							</h2>
							{project.period && (
								<p className="text-lg text-lime-300 font-mono">
									{project.period}
								</p>
							)}
						</div>
					</div>
					<div className="p-8 pb-20">
						<h3>
							<span className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
								프로젝트 소개
							</span>
						</h3>
						<p className="font-medium text-gray-600 dark:text-gray-300 text-lg !mb-10 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
							{project.description}
						</p>
						<h3 className="!mb-4">
							<span className="text-3xl font-bold text-gray-900 dark:text-white ">
								사용 기술
							</span>
						</h3>
						<div className="flex flex-wrap gap-3 mb-16">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="text-md bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300 px-3 py-1 rounded-full font-medium"
								>
									{tech}
								</span>
							))}
						</div>
						{project.links.length > 0 && (
							<>
								<h3 className="!mb-4">
									<span className="text-3xl font-bold text-gray-900 dark:text-white ">
										링크
									</span>
								</h3>
								<div className="flex flex-wrap gap-2 mb-16">
									{project.links.map((link) => {
										switch (link.type) {
											case "github":
												return (
													<a
														key={link.type}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-md hover:scale-105 text-lime-800 dark:text-lime-300 px-2 py-1 rounded-full font-medium"
													>
														<FaGithub className="w-10 h-10" />
													</a>
												);
											case "ios":
												return (
													<a
														key={link.type}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-md hover:scale-105 text-lime-800 dark:text-lime-300 px-3 py-1 rounded-full font-medium"
													>
														<FaAppStore className="w-10 h-10" />
													</a>
												);
											case "android":
												return (
													<a
														key={link.type}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-md hover:scale-105 text-lime-800 dark:text-lime-300 px-3 py-1 rounded-full font-medium"
													>
														<FaAndroid className="w-10 h-10" />
													</a>
												);
											case "website":
												return (
													<a
														key={link.type}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-md hover:scale-105 text-lime-800 dark:text-lime-300 px-3 py-1 rounded-full font-medium"
													>
														<FaLink className="w-10 h-10" />
													</a>
												);
											case "post":
												return (
													<a
														key={link.type}
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-md hover:scale-105 text-lime-800 dark:text-lime-300 px-3 py-1 rounded-full font-medium"
													>
														<FaSignsPost className="w-10 h-10" />
													</a>
												);
											default:
												return null;
										}
									})}
								</div>
							</>
						)}
						<ReactMarkdown
							rehypePlugins={[rehypeRaw]}
							components={{
								img(props) {
									const { src, ...rest } = props;
									return <img src={useBaseUrl(src)} {...rest} />;
								},
							}}
						>
							{project.content}
						</ReactMarkdown>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default function Portfolio() {
	const [projectId, setProjectId] = useState(null);

	useEffect(() => {
		const updateProjectId = () => {
			const params = new URLSearchParams(window.location.search);
			setProjectId(params.get("projectId"));
		};

		updateProjectId();

		window.addEventListener("popstate", updateProjectId);
		window.addEventListener("urlchange", updateProjectId);

		return () => {
			window.removeEventListener("popstate", updateProjectId);
			window.removeEventListener("urlchange", updateProjectId);
		};
	}, []);

	const handleClose = () => {
		const newUrl = window.location.pathname;
		window.history.pushState({}, "", newUrl);
		window.dispatchEvent(new Event("urlchange"));
	};

	const data = projectId
		? projects.find((p) => p.id === parseInt(projectId, 10))
		: null;

	return (
		<Layout title="Portfolio" description="Developer Portfolio Page">
			<div className="bg-white dark:bg-gray-900 antialiased">
				<main className="min-h-screen mx-auto">
					<HeroSection />
					<AboutMeSection />
					<ProjectsSection />
					<AnimatePresence>
						<ProjectModal project={data} onClose={handleClose} />
					</AnimatePresence>
					<RecommendArticleSection />
				</main>
			</div>
		</Layout>
	);
}

const ABOUT_ME = [
	{
		label: "사용자 경험",
		title: "‘사용자 경험’을\n최우선으로 개발합니다",
		description:
			"`어떻게 하면 사용자가 가장 편안한 환경에서 서비스를 사용할 수 있을까?`를 항상 고민합니다. 여러 프로젝트를 하며 사용자의 목소리를 듣고, 끊임없는 개선과 변화를 반복해왔습니다.",
		imageUrl: "/img/portfolio/about_me_01.webp",
	},
	{
		label: "오너십",
		title: "서비스에 대한 오너십을 가지고\n주도적으로 일합니다",
		description:
			"어떻게 하면 만들어낸 서비스에 유저를 더 많이 모을 수 있을까? 라는 의문을 가지고 주도적으로 TF 팀를 꾸려, `도서관 예약 서비스`를 출시해 앱 MAU를 30% 증가시킨 경험이 있습니다. 항상 비즈니스 임팩트를 고려합니다.",
		imageUrl: "/img/portfolio/about_me_02.webp",
	},
	{
		label: "성격",
		title: "항상 놓친 부분이 없는지\n 꼼꼼히 살핍니다",
		description:
			"문서화와 정리에 능숙하며, 디자인에 민감해 피그마 시안과 비교해 하나의 오차 없이 구현하기 위해 노력합니다.",
		imageUrl: "/img/portfolio/about_me_03.webp",
	},
	{
		label: "성장",
		title: "동료와 함께하는\n꾸준한 성장을 목표로 일합니다",
		description:
			"시대생 동아리 내에서 코드 리뷰 문화를 정착시키고, 기술 스터디와 개발 컨퍼런스 등을 운영하며 동료와 함께 하는 성장을 추구해왔습니다. 개인적으로는 개발 문서와 블로그를 작성하며 꾸준히 학습과 공유를 실천하고 있습니다.",
		imageUrl: "/img/portfolio/about_me_04.webp",
	},
];

const projects = [
	{
		id: 1,
		title: "터닝 앱 개편 프로젝트",
		description:
			"터닝 앱 개편 프로젝트에서 SwiftUI를 이용해 다양한 화면 및 기능 개발",
		category: "Hustlers",
		period: "2024.09 ~ 2024.11",
		imageUrl: "/img/portfolio/projects/1/main.png",
		technologies: ["Swift", "SwiftUI"],
		links: [
			{
				type: "ios",
				url: "https://apps.apple.com/kr/app/%ED%84%B0%EB%8B%9D-%EC%95%B1-%EC%9E%A0%EA%B8%88-%ED%8F%B0-%EC%9E%A0%EA%B8%88-%EA%B3%B5%EB%B6%80-%EC%A7%91%EC%A4%91-%ED%83%80%EC%9D%B4%EB%A8%B8-%EB%A3%A8%ED%8B%B4/id6449270376",
			},
		],
		content: `# 구현사항

---

## 온보딩 화면 구현 및 구조 설계

- Swift TCA를 이용하여 온보딩 flow 관리 로직 설계
- 온보딩 환영, 사용자 정보 수집, 앱 안내 등의 페이지 구현

![온보딩화면](/img/portfolio/projects/1/main.png)

## 메인 화면, 도전, 기록 탭 등 구현

---

### 도전 탭

- Swift TCA를 이용한 도전 flow 관리
- 캘린더 View 및 사진 자르기 기능 구현

<div style="display: flex; gap: 10px;">
<img src="/img/portfolio/projects/1/IMG_1935.png" width="23%">
<img src="/img/portfolio/projects/1/IMG_1936.png" width="23%">
<img src="/img/portfolio/projects/1/IMG_1937.png" width="23%">
<img src="/img/portfolio/projects/1/IMG_1938.png" width="23%">
</div>

<br />
<br />

### 메인 화면 및 기록 탭, 페이월 페이지 구현

<div style="display: flex; gap: 10px;">
<img src="/img/portfolio/projects/1/IMG_1940.png" width="30%">
<img src="/img/portfolio/projects/1/IMG_1939.png" width="30%">
<img src="/img/portfolio/projects/1/IMG_1941.png" width="30%">
</div>
`,
	},
	{
		id: 2,
		title: "허슬러즈 홈페이지 개발",
		description: "Next.js, Strapi를 이용한 회사 홈페이지 및 블로그 개발",
		category: "Hustlers",
		period: "2024.12 ~ 2025.01",
		imageUrl: "/img/portfolio/hustlers_02.png",
		technologies: ["Next.js", "Strapi", "GA4"],
		links: [
			{
				type: "website",
				url: "https://www.hustlers.co.kr",
			},
		],
		content: `# 구현사항

---

- Next.js를 이용한 회사 홈페이지 개발
- 웹 표준 준수와 웹 접근성을 고려한 퍼블리싱
- Strapi를 이용하여 블로그 및 Q&A API 다국어 지원 환경 구축
- Next-intl을 이용한 홈페이지 다국어 지원 구현
- PC, Tb, Mb 사이즈에 맞는 반응형 디자인 구현
- Motion을 활용한 다양한 애니메이션 구현`,
	},
	{
		id: 3,
		title: "시대생 메인 앱 개발 및 유지보수",
		description: "React와 Node.js를 사용한 개인 작업 관리 애플리케이션.",
		category: "시대생",
		imageUrl: "/img/portfolio/uoslife_main_app.png",
		technologies: [
			"React Native(Bare)",
			"TS",
			"Emiotion",
			"Jotai",
			"React Query",
			"Ky",
		],
		links: [
			{
				type: "github",
				url: "https://github.com/uoslife/uoslife-client",
			},
		],
		content: `# 구현사항

---
## 소개

- ‘시대생’은 서울시립대의 공지사항, 도서관, 학식 등 **학교 생활에 관련한 정보와 기능을 제공**하는 서비스입니다.
- 기존 시대생 서비스를 새롭게 기획하여 출시하는 프로젝트이며, 기존 WebView에서 React Native로 기술 전환을 했습니다.

## 성과

- 앱 출시 후 **3일**동안 **1,500+명**의 사용자가 가입하고, 누적 메인 페이지 조회수 **2만+**을 달성했습니다.
- 앱 로딩 시간을 기존 앱 평균 **3.5초 → 1.7초**로 단축시켰습니다.

## Links

---

- [**[Github →]**](https://github.com/uoslife/rebuild-client)

- [**[App Store →]**](https://apps.apple.com/kr/app/시대생-내-손안의-서울시립대학교/id1514073192)
- [**[Play Store →]**](https://play.google.com/store/apps/details?id=com.beyondconnect.uoslife)

## 사용 기술

---

- React Native, Typescript
- emotion, jotai, ky

## 저는 이런 부분을 구현했어요.

---

### 유저 로그인 & 회원가입 flow 개발

- jotai를 이용하여 퍼널 상태를 관리했습니다.
- 개발하는 중 추가적인 요구사항으로 재가입 유저에 대한 화면이 필요했습니다. 
하지만 해당 화면이 기획되지 않아 해당 화면에 대한 요구사항을 **스스로 정의하고 개발**했습니다.
- API 통신과 유저 정보 저장에 필요한 함수를 메서드화해서 재사용 가능하게 코드를 작성했습니다.
- JWT **refresh token**을 이용한 **로그인 유지기능**을 ky 패키지를 이용하여 구현했습니다. [**[정리 블로그 →]**](https://devpluto.tistory.com/entry/React-ky%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-with-JWT-%EC%9D%B8%EC%A6%9D)

![로그인 & 회원가입을 담당하는 account flow](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/57d79016-5665-40ba-9ffb-c183a246cbcd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.25.29.png)

로그인 & 회원가입을 담당하는 account flow

### 앱 push 알림 구현

- FCM과 notifee를 이용해서 **앱에서 알림을 띄우는 기능**을 구현했습니다.
- 알림에서 사용하는 함수들을 하나의 클래스로 추상화하여 재사용 가능하고 직관적으로 설계했습니다.
- 앱을 바로 접근할 수 있도록 하는 링크인 **deeplink 환경을 구축**했고, deeplink가 포함된 알림 클릭시 해당 **링크를 여는 기능**을 구현했습니다.
[**[블로그 정리 →]**](https://devpluto.tistory.com/entry/React-Native-deeplink를-이용해-알림을-여는-방법with-notifee)

### toast를 이용한 에러 또는 성공 처리

- \`서버 오류\` , \`계정 연동 완료\` 등의 안내 사항을 보여주는 것이 유저 경험에서 필요하다 판단하여 toast 팝업을 도입했습니다.
- react-native-toast-message 패키지를 커스텀하여 한 곳에서 모든 메세지를 관리할 수 있도록 구현했습니다.

### 앱 최초 로딩시 동작 구현

- 앱 최초 로딩시 필요한 아래의 동작을 구현했습니다.
    - fcm token을 받아와 device storage에 저장
    - 유저 정보를 얻는 API를 요청해 응답 여부에 따라 로그인 여부를 확인하여 account 또는 main 화면을 보여주도록 처리
    - device의 정보와 서버가 다르다면 해당 device 정보를 patch하도록 구현
- [**[블로그 정리 →]**](https://devpluto.tistory.com/entry/React-Native-%EC%95%B1-%EC%A0%91%EA%B7%BC%EC%8B%9C-%ED%95%84%EC%9A%94%ED%95%9C-%EB%8F%99%EC%9E%91%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90)

### 메인 화면, 학식 및 도서관 화면 개발

- 메인 화면을 작성하였고, 스크롤 시 banner가 넘어가는 동작을 하는 Carousel 컴포넌트를 직접 구현했습니다.
- 도서관 화면에서 사용자의 학습 시간의 count-up과 외출 시간의 count-down기능을 구현했고, 훅으로 분리했습니다.
- 이후 중복된 API 요청을 줄이고 캐싱하고자 **react-query를 도입**하여 여러번 중복하여 호출되던 API호출을 필요한 API를 한번만 호출하도록 구현했습니다.

![메인 화면](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/61670f40-65b6-4d83-bd75-724316176b90/Simulator_Screenshot_-_iPhone_14_Pro_-_2024-01-12_at_09.05.32.png)

메인 화면

![학식 화면](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/c6423f00-7796-40bf-91a4-68ce2f2ea4ca/Simulator_Screenshot_-_iPhone_14_Pro_-_2024-01-12_at_09.15.31.png)

학식 화면

![도서관 화면](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/a3137a4a-8206-438f-beb7-cdc4092a488e/Simulator_Screenshot_-_iPhone_14_Pro_-_2024-01-12_at_09.20.39.png)

도서관 화면

### ‘숨은 학점 확인하기’ 서비스 개발

[**[서비스 소개 팀블로그 →]**](https://www.uoslife.team/blog/101)

- 신규 앱 회원 전환율을 높이기 위해 유저 수를 늘릴 만한 서비스가 필요했고, 이번 학기 학점을 확인할 수 있는 기능을 백엔드 팀원 1명과 기획하고 구현했습니다.
- 기존 디자인 시스템을 이용하여 빠르게 디자인하고 개발하여 3일만에 앱 출시에 맞춰 서비스 했습니다.
- 이 기능으로 출시 후 **분당 평균 사용자수 10+명, 서비스 누적 조회수 2만+**의 성과를 달성했습니다.
- 서비스 중 CS 문의를 통해 특정 오류를 파악했습니다. 해당 오류를 백엔드에서 대응하는 동안 codepush를 이용해 **안내문구를 표시**하여 **사용자가 혼동없이 서비스를 이용**하도록 했습니다.

![숨은 학점 서비스 메인](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/693b345a-6f2d-4d5f-953c-bfc1aa737e3c/Simulator_Screenshot_-_iPhone_14_Pro_-_2023-12-28_at_03.24.18.png)

숨은 학점 서비스 메인

![백엔드 오류 대응](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/7822a37f-6a57-4edc-b008-d2799c678398/Simulator_Screenshot_-_iPhone_14_Pro_-_2023-12-29_at_14.01.56.png)

백엔드 오류 대응

- 사용자가 정보를 확인하기 위해 '끌어당겨 새로고침' 할 수 있는 기능을 알려줘야 했습니다. 따라서 오른쪽과 같이 안내 문구가 깜빡이다 3초 후 사라지는 애니메이션을 도입했습니다.

![끌어당겨 새로고침 기능](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/8fce7145-4e18-44c6-abc9-383189cdd56e/ezgif-1-d5264960ec.gif)

끌어당겨 새로고침 기능

### 기타 성능 개선 및 앱 배포

- 버튼, input 등의 event 함수의 중복 호출을 막기 위해 **throttling 기능을 적용**했습니다. 
[**[블로그 정리 →]**](https://devpluto.tistory.com/entry/React-함수의-중복-호출을-막기-위한-throttling-기능-적용기)
- React Suspense를 이용해 선언적으로 로딩 fallback 컴포넌트를 처리했습니다.
- 사용자가 앱 접근시 codepush를 통한 앱 업데이트가 완료되면 Reload되지만, 업데이트되는 동안의 화면이 없어 **앱이 깜빡이는것 처럼 동작하는 문제**가 발생했습니다.
해당 문제를 해결하기 위해 codepush에서 앱 업데이트 중이면 **앱 업데이트 중 안내 화면**을 유저에게 보여주도록 처리 했습니다.
- Sentry를 도입하여 사용자에게 발생하는 에러를 수집하도록 구현하고 대응했습니다.
- Google Analytics를 이용하여 페이지 전환율, 특정 버튼의 클릭 이벤트 측정 등의 정보를 수집하도록 구현하여 운영팀이 앱과 사용자 현황을 알 수 있도록 했습니다.
- React Native앱을 플랫폼 별로 번들링하여 App store, Play store에 **앱을 출시**했습니다.
- 배포 후 15**+건**의 CS문의를 대응했습니다.

![codepush를 통한 앱 업데이트 중 화면](https://prod-files-secure.s3.us-west-2.amazonaws.com/8bb09b0d-85c3-4e8f-9953-8830a663c22d/4e9a2802-bdd5-4c52-baf5-c9a08320a95a/Simulator_Screenshot_-_iPhone_14_Pro_-_2024-01-12_at_08.53.28.png)

codepush를 통한 앱 업데이트 중 화면
## **소개 및 설명**
`,
	},
	{
		id: 4,
		title: "시대생 신규서비스 개발",
		description:
			"다양한 서비스(도서관 좌석 예약·랭킹, 이용 내역 Recap, 숨은 학점 등)와 시대팅(webview)·팀페이지·블로그·백오피스까지 전반 개발",
		category: "시대생",
		imageUrl: "/img/portfolio/projects/4/main.png",
		technologies: ["React Native(Bare)", "TS"],
		links: [],
		content: `# 시대생 앱 유지보수

---

### 서비스 유지보수

- 앱 시작시간을 평균 \`4.4초\`에서 \`1.7초\`로 개선
    - iOS에서 fcm, APNs token을 가져오는 동작이 평균 1~2초정도 소요됨을 파악하여 해당 동작을 splash screen이 사라진 이후 실행되도록 변경
    - API 호출에 지연이 발생하는 로직을 분리
- React Native 버전을 기존 \`0.71.19\` 에서 최신 버전인 \`0.74.2\` 로 마이그레이션하여 **개발 환경 개선** 및 **앱 번들 크기 축소**
- 결제 서비스가 포함된 웹앱 서비스를 **웹뷰 bridge를 이용해 앱 내에 추가**, **iamport 결제 모듈 환경 대응**
- Sentry, GA, Firebase Performance Monitoring 등을 이용한 성능 및 사용자 추적 환경 구축, 해당 도구를 활용한 유지보수 진행
- React-query를 도입하여 API 호출 로직 개선과 **성능 개선** 진행
- Suspense와 ErrorBoundary를 도입하여 선언적인 코드로 리팩터링
- 폴더 구조를 도메인 별로 나누어 각 환경의 관심사 분리
- BE에서 계정 서비스를 Spring → Node로 마이그레이션하는 TF 대응, 이 과정에서 일부 유저에게 로그인 유지가 되지 않는 현상 수정
- 아이콘 버튼, 모달 등에 애니메이션을 도입해 사용자 경험 향상
- Android에서 뒤로가기로 앱 끄는 동작을 추가하여 앱 사용성 개선 (1번 뒤로가기시 안내문구 표시)

### 개발 환경 구축 (RN)

- React Native 앱 환경에서 Github Action을 이용해 Codepush 자동 배포 환경을 구축
    - Codepush 업데이트 화면 추가 및 기존 앱 업데이트시 splash screen이 깜빡이는 현상 수정
- Fastlane match를 이용하여 iOS Appstore 인증서를 동기화
    - 이를 통해 분산되어있던 팀원들의 인증서를 Git private repo에서 하나의 인증서로 관리하도록 통합하였음
- Fastlane을 이용한 Appstore Testflight, Firebase Distribution 자동 배포 환경 구축
- 메인 앱 이외에 시대생팀 내부에서 이용 가능한 Alpha 앱 배포환경을 분리 설정
    - 해당 설정을 통해 내부 테스팅, QA 등을 위한 Alpha 앱을 구축

<br />
<br />

# 신규 서비스 개발

---

- 시대생의 여러 신규 서비스 TF의 개발을 리딩하며 개발을 진행했습니다.
- 개발한 서비스는 아래와 같습니다.
    - [도서관 예약 및 랭킹 서비스](https://www.notion.so/d431edafab5048299ac64944a2e358a4?pvs=21)
    - [도서관 이용 내역 Recap 서비스](https://www.notion.so/d431edafab5048299ac64944a2e358a4?pvs=21) (Webview)
    - 내 숨은 학점 확인하기 서비스
    - 시대팅, 마이버디, 트리 꾸미기 서비스
    - 시대생 팀페이지 및 블로그(strapi + next.js), 백오피스 개발

<br />
<br />

## 도서관 예약 및 랭킹

---

### 개요

- 아래 서비스를 출시하는 TF 프로젝트 PM을 맡아 2주간 프로젝트 리딩과 개발을 진행했습니다.
    - 시립대 중앙도서관 열람실 예약 서비스
    - 나의 공부시간 랭킹을 학과, 날짜 단위(일/주/월)별로 조회할 수 있는 서비스
- Linear를 이용하여 태스크를 티켓 단위로 나누어 개발을 진행했습니다.

### 링크

[github 01](https://github.com/uoslife/uoslife-client/pull/401)

[github 02](https://github.com/uoslife/uoslife-client/pull/424)

[Instagram: "📚시대생 중앙도서관 기능 업데이트!👨‍🏫 “공존..."](https://www.instagram.com/p/C6GzaKLy9P5/?img_index=6)

### 서비스 개선

> [블로그 정리글 Link](https://devpluto.tistory.com/entry/React-Native-FlashList%EB%A1%9C-%EC%9D%B4%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0)
> 
- 도서관 예약 서비스의 좌석 item을 표시하기 위해 보통 18 x 30 크기의 이차원 배열을 이중 리스트로 렌더링합니다.
- 공식문서에서 제시하는 방법을 이용하더라도 평균 렌더링 시간이 \`4~5초\` 정도 걸려 유저의 사용 경험이 좋지 않은 상황이었습니다.
- 이에 서드파티 패키지인 \`@Shopify/flash-list\` 를 도입했습니다.
- 추가적으로 기존 item 컴포넌트의 애니메이션 동작 방식은 moti를 이용했는데, 이는 3~4개의 Layer를 사용하고 무겁기 때문에 **애니메이션을 가볍게 표시하도록 직접 커스텀하여 컴포넌트를 작성했습니다.**
- 이에 평균 렌더링 시간을 \`1~2초\`로 단축하여 성능을 많이 개선할 수 있었습니다.


<div style="display: flex; gap: 24px;">
	<div style="display: flex; flex-direction: column; gap: 4px; text-align: center;">
		<img src="/img/portfolio/projects/4/before_improve_performance.gif">
		렌더링 성능 개선 전
	</div>
	<div style="display: flex; flex-direction: column; gap: 4px; text-align: center;">
		<img src="/img/portfolio/projects/4/after_improve_performance.gif">
		렌더링 성능 개선 후
	</div>
</div>

<br />
<br />

## 도서관 이용 내역 Recap

---

2024.01 | Typescript, React, Vite, Emotion

- [Github link](https://github.com/uoslife/library-recap)

### 개요

- 시대생 유저의 1년간 학교 도서관 이용내역을 스토리 형식으로 보여주는 TF 프로젝트입니다.
- 혼자 프론트엔드 구현을 담당했으며, **React를 이용해 시대생 모바일 앱 내 웹앱으로 구현**했습니다.

### 기여

- 스토리 기능 구현 및 Chart.js를 이용한 차트 구현
- AWS S3 + cloudfront를 이용하여 배포
- API 요청을 보낼 경우 API 서버로 요청이 가지 않는 문제가 있었는데, cloudfront에서 reverse proxy 환경설정을 해주어 해결했습니다.
- 앱과 웹 간의 JWT token과 user 정보 등의 **데이터를 주고 받기 위해 통신을 위한 bridge를 구현**했습니다. 그리고 팀 내 라이브러리로 해당 기능을 패키지로 배포했습니다.

### 성과

- 서비스 배포 후 **MAU 20% 증가**
`,
	},
	{
		id: 9,
		title: "도서관 이용시간 알림 기능",
		description:
			"Native Module을 이용해 도서관 이용시간을 알림을 통해 실시간으로 알려주는 기능",
		category: "시대생",
		imageUrl: "/img/portfolio/projects/9/main.png",
		technologies: [
			"React Native(Bare)",
			"iOS Activity Kit",
			"Android Notification",
		],
		links: [
			{
				type: "github",
				url: "https://github.com/uoslife/uoslife-client",
			},
			{
				type: "post",
				url: "https://devpluto.tistory.com/entry/React-Native-RN%EC%97%90%EC%84%9C-dynamic-island-%EC%9C%84%EC%A0%AF-%EB%A7%8C%EB%93%A4%EA%B8%B0",
			},
			{
				type: "post",
				url: "https://devpluto.tistory.com/entry/React-Native-native-module%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-android-notification-%EB%9D%84%EC%9A%B0%EA%B8%B0",
			},
		],
		content: `# 구현사항

---

## 개요

---

- **도서관 이용시간을 알림으로 확인할 수 있는 기능**
- 이용 중 / 외출 중 상태 별로 현재 이용 중인 좌석과 시간을 표시합니다.
- 혼자 개발을 담당했고, 서비스 중인 현재 도서관 이용시간을 알림을 통해 실시간으로 알려주는 기능이 유저에게 편리함을 줄것이라 판단하여 개발했습니다.

## 구현

---

- NativeModule을 이용하여 각 OS 별로 기능을 구현했습니다.
	- **iOS**: Activity Kit (Dynamic Island)
	- **Android**: Notification

- Github (PR)
	- 	[iOS Github link](https://github.com/uoslife/uoslife-client/pull/454)
	- [Android Github link](https://github.com/uoslife/uoslife-client/pull/519)

- 정리 블로그
	- [iOS](https://devpluto.tistory.com/entry/React-Native-RN%EC%97%90%EC%84%9C-dynamic-island-%EC%9C%84%EC%A0%AF-%EB%A7%8C%EB%93%A4%EA%B8%B0)
	- [Android](https://devpluto.tistory.com/entry/React-Native-native-module%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-android-notification-%EB%9D%84%EC%9A%B0%EA%B8%B0)

## 트러블 슈팅

---

### **Android: BoradcastReciever를 이용해 intent를 열 수 없는 문제(Android 12+)**

- 알림을 클릭하여 intent를 실행하는 경우 아래 오류가 발생했습니다.
    
    ![스크린샷 2024-06-07 오후 7.13.16.png](/img/portfolio/projects/9/android_trouble_shooting_01.png)
    
- broadcastReciever를 이용해 pendingIntent 동작을 수행하는 코드에서 발생하는 문제였습니다. 동작 중 activity를 직접 여는 동작은 **Android 12+부터 불가**해서 발생하는 문제였습니다.

> 공식문서 - after the user taps on a notification, or an action button within the notification, your app cannot call **startActivity()** inside of a service or broadcast receiver.
> 
- 따라서 Broadcast를 사용하지 않고 아래와 같이 getActivity를 이용하는 방식으로 pendingIntent를 생성하도록 수정했습니다.

\`\`\`kotlin
var pendingIntent = TaskStackBuilder.create(myContext).run {
  addNextIntentWithParentStack(intent)
  getPendingIntent(0, if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) PendingIntent.FLAG_IMMUTABLE else PendingIntent.FLAG_UPDATE_CURRENT)
}
\`\`\`

### Android: 이미지가 표시되지 않는 현상

- Layout의 Image가 표시되지 않는 문제가 있었습니다.
- \`<ImageView>\` 의 \`app:srcCompat\` 속성을 \`android:src\`로 변경하여 해결했습니다.

### **Android: foreground에서 알림을 클릭했을 때, 새로운 intent를 실행하여 앱을 덮어쓰는 현상**

- background에서 알림을 클릭했을때는 intent가 실행되어 문제가 없는 반면, foreground에서 클릭했을때는 새로운 intent를 실행해서 앱을 덮어쓰는 현상이 발생했습니다.
    
<img src="/img/portfolio/projects/9/android_trouble_shooting_02.gif" width="40%">
    
- pendingIntent를 정의하는 방법을 수정하고, 실행할 intent의 Activity Flag를 \`FLAG_ACTIVITY_NEW_TASK\`, \`FLAG_ACTIVITY_SINGLE_TOP\` 속성을 주도록 수정하여 해결했습니다.

\`\`\`kotlin
// mainActivity Intent
val intent = Intent(Intent.ACTION_VIEW, "uoslife://library".toUri(), myContext, MainActivity::class.java)
  .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_SINGLE_TOP)

// notification PendingIntent
var pendingIntent = PendingIntent.getActivity(myContext, 0, intent, if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) PendingIntent.FLAG_IMMUTABLE else PendingIntent.FLAG_UPDATE_CURRENT)
\`\`\`

<div style="display: flex; gap: 24px;">
	<div style="display: flex; flex-direction: column; gap: 4px; text-align: center;">
		<img src="/img/portfolio/projects/9/native_module_ios.gif">
		iOS 알림 실행 화면
	</div>
	<div style="display: flex; flex-direction: column; gap: 4px; text-align: center;">
		<img src="/img/portfolio/projects/9/native_module_android.gif">
		Android 알림 실행 화면
	</div>
</div>

`,
	},
	{
		id: 5,
		title: "시대생 라이브러리 (사내 패키지)",
		description:
			"시대생팀에서 사용하는 여러 기능(webview bridge, design system, etc...)을 관리하는 팀 내부 라이브러리",
		category: "시대생",
		imageUrl: "https://picsum.photos/seed/freelance2/600/400",
		technologies: ["React", "Vite", "TS", "Lerna", "Storybook"],
		links: [
			{
				type: "github",
				url: "https://github.com/uoslife/uoslife-client",
			},
		],
		content: `# 구현사항

---

## **소개 및 설명**

- 아래 소개할 라이브러리의 배포 환경설정을 하고 각 라이브러리에 들어갈 **기능들을 모두 구현**했습니다.
- 시대생 내 여러 서비스들이 다른 디자인과 코드가 분산되어 있는 상황에서, UX와 DX를 위해 통일된 시대생 디자인 시스템을 도입했습니다.
- Lerna를 이용하여 **모노레포로 환경을 구축**했습니다.
- NPM이 아닌, Github Packages를 통해 배포하여 팀 내부에서 사용할 수 있는 환경을 구축했습니다.

## **Library 목록**

---

### Design-system

---

- 시대생 디자인 시스템에 해당하는 **컴포넌트와 디자인 토큰을 제공**합니다.
- 시대생 메인 서비스 이외에 시대생팀에서 만드는 모든 서비스에서 **사용자에게 일관된 경험을 제공**하기 위해 **디자인 시스템을 구축**했습니다.
- native와 web 두 환경에서 일관되게 사용할 수 있도록 구현했습니다.
- Chromatic을 이용하여 Storybook에 대한 CI/CD 환경을 설정했습니다.

### React

---

- 시대생 프론트엔드 팀에서 사용하는 React 훅을 관리하는 라이브러리입니다.

### Webview

---

- **React Native와 Webview 서비스 간 정보 통신**을 위한 **Bridge**를 쉽게 설치할 수 있도록 기능을 제공하는 라이브러리입니다.
- Driver를 통해 webview 서비스에 Bridge를 설치하면 유저 및 디바이스 정보, JWT token과 같은 데이터를 webview에서도 접근 할 수 있습니다.

## 트러블 슈팅

---

- build 환경에서 이미지를 dynamic import 하도록 컴포넌트를 구현했습니다. [**[정리 블로그 →]**](https://devpluto.tistory.com/entry/Vite-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-build%EC%8B%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-dynamic-import%EB%90%98%EB%8F%84%EB%A1%9D-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95)

`,
	},
	{
		id: 6,
		title: "Poker Hand History",
		description: "텍사스 홀덤 포커의 패 기록 및 커뮤니티 공유 앱",
		category: "외주",
		period: "2025.09~2025.11",
		imageUrl: "/img/portfolio/projects/6/main.webp",
		technologies: ["React Native(EAS)", "Supabase", "TS"],
		links: [
			{
				type: "ios",
				url: "https://apps.apple.com/kr/app/poker-hand-history-app/id6744484636",
			},
		],
		content: `# 구현사항

---

- React Native Expo를 이용한 기존 프로젝트의 유지보수 및 신규 기능 개발

## 유지보수 및 기능 개발

- Supabase 기반 Apple, Google Signin 기능 구현
- Expo Notification기반 iOS & Android push notification 셋업
- EAS updates를 이용한 앱 업데이트 구현
- iOS & Android 빌드 및 스토어 배포

### 성능 개선

- 포커 로깅 process에서 최대 800ms의 메모리 성능을 개선하기위해 devtools를 활용하여 병목이 있는 컴포넌트를 memoization 및 이미지 캐싱 등의 작업을 통해 300ms까지 개선
- API 호출시 React Query를 이용하여 상태를 선언적으로 관리하도록 변경
- react compiler를 도입하여 성능 개선
`,
	},
	{
		id: 11,
		title: "Popcorn List",
		description: "TMDB API를 이용한 영화 & TV 시리즈 평가 및 추천 커뮤니티 앱",
		category: "외주",
		period: "2025.09~2025.11",
		imageUrl: "/img/portfolio/projects/11/main.webp",
		technologies: ["React Native(EAS)", "Supabase", "TS"],
		links: [
			{
				type: "ios",
				url: "https://apps.apple.com/kr/app/popcorn-list-rank-movies-tv/id6744907475",
			},
		],
		content: `# 구현사항

---

- React Native Expo를 이용한 기존 프로젝트의 유지보수 및 신규 기능 개발

## 유지보수 및 기능 개발

- 앱 시작시 로그인 화면 구현
- Supabase 기반 Apple, Google Signin 기능 구현
- Expo Notification기반 iOS & Android push notification 셋업
- EAS updates를 이용한 앱 업데이트 구현
- iOS & Android 빌드 및 스토어 배포

### 성능 개선

- 유저 조회시 로딩 시간을 줄이기 위해 API 호출 횟수를 제한하고 batching처리하도록 구현, Skeleton UI를 필요한 정보만 렌더링하도록 구현
- API 호출시 React Query를 이용하여 상태를 선언적으로 관리하도록 변경
- react compiler를 도입하여 성능 개선
`,
	},
	{
		id: 7,
		title: "만나 앱",
		description: "기독교 소그룹 공동체를 위한 소통 앱",
		category: "개인",
		period: "2023.07~2023.08",
		imageUrl: "/img/portfolio/manna.webp",
		technologies: [
			"React Native(CNG)",
			"Firebase",
			"TS",
			"React Query",
			"Biome.js",
			"Sentry",
			"Amplitude",
		],
		links: [
			{
				type: "github",
				url: "https://github.com/eunbae0/manna",
			},
			{
				type: "website",
				url: "https://manna.web.app",
			},
			{
				type: "ios",
				url: "https://apps.apple.com/us/app/%EB%A7%8C%EB%82%98-%EB%AF%BF%EC%9D%8C%EC%9D%98-%EC%97%AC%EC%A0%95%EC%9D%84-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-%EC%9A%B0%EB%A6%AC%EB%93%A4%EC%9D%98-%EC%86%8C%ED%86%B5-%EA%B3%B5%EA%B0%84/id6744582157",
			},
			{
				type: "android",
				url: "https://play.google.com/store/apps/details?id=com.eunbae.sogroup",
			},
		],
		content: `# 구현사항

---
## **프로젝트 개요**

> React Native 기반으로 제작한, **기독교 소그룹 공동체를 위한 소통 + 개인 성경 읽기 등의 기능을 제공하는 앱**
> 

- 설교 나눔, 기도제목 공유, 자유게시판, 그룹 챌린지 등 교회 내 **공동체 활동에 필요한 핵심 기능을 통합**했습니다.
- 기획, UI/UX 디자인, 개발, 배포, 운영까지 단독으로 진행하고 있습니다.

## **기술 스택**

---

- **React Native, Tailwind CSS (via NativeWind), React Query, Zustand**
- **Firebase (Auth, Firestore, Storage)** – 인증, 데이터 저장, 이미지 업로드
- **Sentry, Amplitude, Biome.js**

---

## **성능 개선**

- React Native Devtools를 이용해 성능을 개선했습니다.

### Memory 성능 최적화

- 앱의 메모리 사용량을 최대 1000ms에서 550ms로 약 40%를 개선했습니다.
- React Native Tabs를 사용시, 모든 탭이 리렌더링되는 문제가 있어 이를 라우팅 구조를 변경하여 해결했습니다.
- 녹음, textinput이 많이 사용되는 페이지에서 리렌더링이 많이 되어 컴포넌트에 메모이제이션을 적용하고, 컴포넌트 자체를 최소화했습니다.
- JS를 프로파일링하여 중복 코드를 제거하고, 병목이 있는 로직을 제거하는 등의 작업으로 성능을 개선했습니다.

### Caching

- 자주 사용하는 이미지의 cache 저장소를 memory단에 캐시하도록 변경했습니다.
- Firebase Storage를 이용한 이미지가 캐싱이 되지 않는 문제가 있어, 직접 이미지를 캐시하도록 구현했습니다.


## **주요 기능 및 구현 방식**

### **1. 앱 초기화 및 유저 정보**

- **Firebase Authentication**을 이용하여 이메일/비밀번호, Google, Apple 로그인 지원

### **2. 설교 나눔 작성 기능**

- 유저가 일요일 예배의 설교에 대한 나눔지를 생성하고, 그룹원들과 실시간으로 나눔에 대한 답변 공유 및 아카이빙 가능

<img src="/img/portfolio/projects/7/fellowships.webp" width="40%">

### **3. 자유게시판 / 공지사항**

- **기능**: 그룹 내 커뮤니케이션 용도로 텍스트 및 이미지 기반 글 등록
- 게시글 고정 기능, 게시글 고정시 메인화면에 표시
- 확장성을 고려한 타입 및 db 설계
    - 투표 및 일정 등의 추가 요소를 elements에 확장성 있게 관리
    - NoSQL 기반의 database 성능 최적화를 위해 reaction, comment 등의 count를 집계하도록 구현

<img src="/img/portfolio/projects/7/post.gif" width="40%">

게시글 작성 및 조회, 댓글 작성

### **4. 그룹 가입/생성 및 멤버 관리**

- 유저는 온보딩시 그룹을 생성하거나, 초대코드로 참여 가능합니다.
- 여러 소그룹을 생성할 수 있으며,

![ezgif-715a6f58f5003e.gif](attachment:9cc0ad02-87d0-4350-81fb-382d193edece:ezgif-715a6f58f5003e.gif)

### **2. 기도제목 작성 및 공유**

- **기능**: 오늘의 기도제목을 작성하고, 다른 멤버의 기도제목을 피드 형식으로 열람

### **4. 그룹 챌린지 기능**

- **기능**: 정해진 기간 동안 QT/성경읽기 챌린지를 함께 실천하고 인증
- **구현**: 날짜 Range Picker, 진행률 Progress UI, 사용자별 참여 이력 저장
- 매일 인증 누락 시 사용자가 이탈하는 UX 방지를 위해 **하루 1회 알림 로직** 설계 예정
`,
	},
	{
		id: 8,
		title: "tistory-react",
		description:
			"Tistory 스킨을 React 문법을 이용해 개발할 수 있는 환경을 제공하는 프레임워크",
		category: "개인",
		imageUrl: "https://picsum.photos/seed/freelance2/600/400",
		technologies: ["React", "Lerna", "TS", "Rsbuild", "Modern.js"],
		links: [
			{
				type: "github",
				url: "https://github.com/eunbae0/tistory-react",
			},
		],
		content: `# 구현사항

---
- 기존 스킨 개발시 스킨 정보 파일(xml)구문과 치환자를 하나하나 파악하고, 1000줄 이상의 HTML 파일을 작성해야해서 이러한 개발 환경이 불편하다 느껴 프레임워크를 개발하게 되었습니다.
- React 문법을 아는 누구나 Tistory 스킨 개발이 가능하도록 하는 것이 해당 프레임워크의 목적입니다.

## 기술 스택

- React, Typescript, Lerna, Rsbuild, Modern.js, Vitest

## 기능 및 구현사항

- 모노레포를 이용하여 cli, core, runtime, theme, … 등의 패키지 분리
- \`/pages\` 하위 폴더에 존재하는 파일의 라우팅 처리(Next.js의 pages router과 비슷한 기능)
    - 하위 폴더의 \`main\`, \`article\` , \`tags\` 폴더 이외에는 인식하지 않도록 구현
- create tistory-react 명령어를 통해 쉽게 프로젝트 시작 가능
- build 명령어 실행시 SSG로 스킨 등록에 필요한 XML, HTML, JS 파일을 번들링
- tistory-react.config.js 파일의 정의에 따라 XML 파일 생성
- 프레임워크 문서를 통해 컴포넌트, 치환자를 상세히 안내
		`,
	},
	{
		id: 10,
		title: "tiny-equal",
		description: "가장 빠른 성능을 제공하는 equal 함수 오픈소스 패키지",
		category: "개인",
		imageUrl: "https://picsum.photos/seed/freelance2/600/400",
		technologies: ["Typescript", "Rslib", "Biome.js", "Vitest"],
		links: [
			{
				type: "github",
				url: "https://github.com/eunbae0/tiny-equal",
			},
		],
		content: `# 구현사항

---

- 의존성이 없는 equal 함수를 제공하는 오픈소스 패키지
- 500 byte대의 작은 번들 사이즈와 is-equal 관련 패키지 중 가장 빠른 성능을 제공
    - [performance benchmark](https://github.com/eunbae0/tiny-is-equal/blob/main/benchmark/README.md)
- js 구문을 비교하며 관련 패키지 중 가장 빠른 성능을 제공하자는 목표를 달성
- vitest를 이용한 test case 작성
- github action을 이용하여 npm 및 github release에 자동 배포 기능을 구현
    - [deploy_and_release_package.yaml](https://github.com/eunbae0/tiny-is-equal/blob/main/.github/workflows/deploy_and_release_package.yaml)
`,
	},
];

const projectCategories = {
	Hustlers: projects.filter((p) => p.category === "Hustlers"),
	시대생: projects.filter((p) => p.category === "시대생"),
	외주: projects.filter((p) => p.category === "외주"),
	개인: projects.filter((p) => p.category === "개인"),
};
