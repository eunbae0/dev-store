import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 8,
					}}
				>
					<Heading as="h1" className="hero__title">
						{siteConfig.title}
					</Heading>
					<img
						src={useBaseUrl("/img/favicon.ico")}
						style={{ width: "48px", paddingBottom: 10 }}
					/>
				</div>
				<div className={styles.buttonsWrapper}>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/fe/intro"
						>
							Frontend →
						</Link>
					</div>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/node_js/intro"
						>
							Node.js →
						</Link>
					</div>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/docs/cs/intro"
						>
							CS →
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
