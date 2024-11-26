import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import RecommendedArticle from "../RecommendedArticle";
import { RecommendedArticleList } from "./data";

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<section className={styles.features}>
			<div className="container">
				<Heading as="h2">소개</Heading>
				<div className={styles.spacer} />
				<Heading as="h3">{siteConfig.tagline}</Heading>
				<div style={{ height: 14 }} />
				<Heading as="h2">읽어볼만한 글</Heading>
				<div className={styles.spacer} />
				<div className={styles.recommendedArticleContainer}>
					{RecommendedArticleList.map(({ to, title, description, image }) => (
						<RecommendedArticle
							to={to}
							title={title}
							description={description}
							image={image}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
