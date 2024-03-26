import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
	title: "Dev Store",
	tagline:
		"전반적인 개발 지식을 담는 공간. 습득한 내용을 까먹을 수 있기에 자주 사용하거나, 중요한 기초 지식 등을 정리합니다.",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/dev-store/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "eunbae0", // Usually your GitHub org/user name.
	projectName: "dev-store", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "ko",
		locales: ["ko"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/eunbae0/dev-store/tree/main/",
				},
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Dev Store",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "feBasicsSidebar",
					position: "left",
					label: "FE Basics",
				},
				{
					type: "docSidebar",
					sidebarId: "feAdvancesSidebar",
					position: "left",
					label: "FE Advances",
				},
				{
					type: "docSidebar",
					sidebarId: "beSidebar",
					position: "left",
					label: "Backend",
				},
				{
					type: "docSidebar",
					sidebarId: "csSidebar",
					position: "left",
					label: "CS",
				},
				{
					type: "docSidebar",
					sidebarId: "booksSidebar",
					position: "left",
					label: "Books",
				},
				{
					type: "docSidebar",
					sidebarId: "etcSidebar",
					position: "left",
					label: "ETC",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Basics",
							to: "/docs/basics/intro",
						},
					],
				},
				{
					title: "Social",
					items: [
						{
							label: "Blog",
							href: "https://devpluto.tistory.com/",
						},
						{
							label: "GitHub",
							href: "https://github.com/eunbae0",
						},
					],
				},
			],
			// copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			magicComments: [
				{
					className: "theme-code-block-highlighted-line",
					line: "highlight-next-line",
					block: { start: "highlight-start", end: "highlight-end" },
				},
				{
					className: "code-block-error-line",
					line: "error-next-line",
				},
			],
		},
		colorMode: {
			defaultMode: "dark",
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
