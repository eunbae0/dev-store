import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className="bg-lime-100 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-8 py-16 flex flex-col items-center">
				<div className="flex flex-col items-center gap-1">
					<Heading as="h1" className="hero__title">
						{siteConfig.title}
					</Heading>
					<p className="whitespace-pre-line">{siteConfig.tagline}</p>
				</div>
				<div className="flex flex-row items-center justify-center gap-4 mt-8">
					<Link
						className="button button--secondary button--lg"
						to="/docs/fe/intro"
					>
						Frontend →
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/node_js/intro"
					>
						Node.js →
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/cs/intro"
					>
						CS →
					</Link>
				</div>
        <div className="w-full flex justify-center mt-12">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search..."
              className="block w-full pl-12 pr-4 py-3 border-transparent rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent shadow-md"
            />
          </div>
        </div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
