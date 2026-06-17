"use client";
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type TitleAndMetaTagsProps = {
	title?: string;
	description?: string;
	image?: string | null;
	url?: string;
	pathname?: string;
};

export function TitleAndMetaTags({
	title = "Bodo National Students' Union (BONSU)",
	description = "The fearless voice of Bodo youth and a student movement dedicated to the socio-economic, cultural, and political liberation of the Bodos.",
	image,
	url = "https://bonsu.github.io",
	pathname,
}: TitleAndMetaTagsProps) {
	const router = useRouter();

	const imageUrl = image
		? image.startsWith("http")
			? image
			: `${url}/social/${image}`
		: null;
	const path = pathname || router.pathname;

	return (
		<Head>
			<title>{title}</title>

			<meta name="description" content={description} />

			<meta property="og:url" content={`${url}${path}`} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{imageUrl && <meta property="og:image" content={imageUrl} />}

			<meta name="twitter:site" content="@bonsu" />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
}
