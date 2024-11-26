import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Props = {
	to: string;
	title: string;
	description: string;
	tag?: string;
	image?: string;
};

function RecommendedArticle({
	to,
	title,
	description,
	tag,
	image = "",
}: Props) {
	return (
		<a href={to} className={styles.contentWrapper}>
			<img src={useBaseUrl(image)} className={styles.image} />
			<div className={styles.textWrapper}>
				<Heading as="h3">{title}</Heading>
				<p className={styles.description}>{description}</p>
			</div>
		</a>
	);
}

export default RecommendedArticle;
