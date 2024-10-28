import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

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
				<Heading as="h3">{siteConfig.tagline}</Heading>
				<div style={{ height: 14 }} />
				<Heading as="h2">읽어볼만한 글</Heading>
				<Heading as="h3">
					<Link to="/docs/node_js/engine/v8_engine">JS V8 Engine</Link>
				</Heading>
				<Heading as="h3">
					<Link to="/docs/category/react-native-optimization">
						React Native Optimization
					</Link>
				</Heading>
			</div>
		</section>
	);
}
