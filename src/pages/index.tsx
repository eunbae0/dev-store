import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<div className={styles.buttonsWrapper}>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/ios/intro"
						>
							iOS 살펴보기 →
						</Link>
					</div>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/basics/intro"
						>
							FE Basics 살펴보기 →
						</Link>
					</div>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/cs/intro"
						>
							CS 살펴보기 →
						</Link>
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
