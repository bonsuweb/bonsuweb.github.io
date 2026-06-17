import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Text,
	Grid,
	Heading,
	Container,
	Section,
	Separator,
	Flex,
	Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMarketingButton } from "@components/ColorsMarketingButton";
import { SerifHeading } from "@components/SerifHeading";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	PlayIcon,
	PauseIcon,
} from "@radix-ui/react-icons";
import Head from "next/head";
import styles from "./index.module.css";

// Sample gallery content for BONSU
const galleryImages = [
	{
		id: 1,
		title: "BONSU Leadership",
		description: "The fearless leadership of the Bodo National Students' Union",
		image: "/bonsu-logo.jpg",
	},
	{
		id: 2,
		title: "Youth Movement",
		description: "Young voices united for Bodo liberation",
		image: "/gallery/bonsu-memo.jpg",
	},
	{
		id: 3,
		title: "Community Gathering",
		description: "BONSU members and supporters coming together",
		image: "/gallery/gom.jpg",
	},
	{
		id: 4,
		title: "Activism in Action",
		description: "BONSU advocating for Bodo rights and dignity",
		image: "/gallery/ind.jpg",
	},
	{
		id: 5,
		title: "Cultural Celebration",
		description: "Celebrating Bodo heritage and traditions",
		image: "/gallery/mass-rally.jpg",
	},
];

export default function GalleryPage() {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [isAutoPlay, setIsAutoPlay] = React.useState(true);

	React.useEffect(() => {
		if (!isAutoPlay) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlay]);

	const goToPrevious = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? galleryImages.length - 1 : prev - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
	};

	const currentImage = galleryImages[currentIndex];

	return (
		<MobileMenuProvider>
			<ColorsMobileMenu />

			<Head>
				<style>
					{`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
				</style>
			</Head>

			<Box
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					height: 480,
					opacity: 0.6,
					background:
						"linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
				}}
			/>

			<ColorsHeader ghost />

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<TitleAndMetaTags
					title="BONSU Gallery"
					description="Explore the moments and achievements of the Bodo National Students' Union"
					image="bonsu-gallery.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							BONSU Gallery
						</SerifHeading>

						<Box style={{ maxWidth: 880 }}>
							<Text size="5" as="p" mb="6" color="gray">
								Discover the moments of unity, activism, and cultural celebration that define the Bodo National Students' Union.
							</Text>
						</Box>
					</Container>
				</Section>
			</Box>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						{/* Main Slideshow */}
						<Box
							style={{
								position: "relative",
								overflow: "hidden",
								borderRadius: "var(--radius-3)",
								aspectRatio: "16 / 9",
								backgroundColor: "var(--gray-2)",
							}}
							mb="6"
						>
							{/* Image */}
							<Box
								style={{
									width: "100%",
									height: "100%",
									backgroundImage: `url('${currentImage.image}')`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									transition: "opacity 0.5s ease-in-out",
								}}
							/>

							{/* Caption Overlay */}
							<Box
								style={{
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									background:
										"linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
									padding: "var(--space-6)",
									color: "white",
								}}
							>
								<Heading size="6" as="h3" style={{ color: "white" }}>
									{currentImage.title}
								</Heading>
								<Text size="3" style={{ color: "rgba(255,255,255,0.8)" }}>
									{currentImage.description}
								</Text>
							</Box>

							{/* Navigation Buttons */}
							<Flex
								style={{
									position: "absolute",
									top: "50%",
									left: 0,
									right: 0,
									justifyContent: "space-between",
									transform: "translateY(-50%)",
									padding: "var(--space-4)",
									pointerEvents: "none",
								}}
							>
								<Button
									size="3"
									variant="soft"
									color="gray"
									onClick={goToPrevious}
									style={{ pointerEvents: "auto" }}
									aria-label="Previous image"
								>
									<ChevronLeftIcon width="20" height="20" />
								</Button>
								<Button
									size="3"
									variant="soft"
									color="gray"
									onClick={goToNext}
									style={{ pointerEvents: "auto" }}
									aria-label="Next image"
								>
									<ChevronRightIcon width="20" height="20" />
								</Button>
							</Flex>

							{/* Autoplay Toggle */}
							<Box
								style={{
									position: "absolute",
									bottom: "var(--space-4)",
									right: "var(--space-4)",
									pointerEvents: "auto",
								}}
							>
								<Button
									size="2"
									variant="soft"
									color="gray"
									onClick={() => setIsAutoPlay(!isAutoPlay)}
									aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
								>
									{isAutoPlay ? (
										<PauseIcon width="16" height="16" />
									) : (
										<PlayIcon width="16" height="16" />
									)}
								</Button>
							</Box>
						</Box>

						{/* Image Counter */}
						<Flex justify="between" align="center" mb="6">
							<Text size="2" color="gray">
								Image {currentIndex + 1} of {galleryImages.length}
							</Text>
							{/* Dot Indicators */}
							<Flex gap="2">
								{galleryImages.map((_, index) => (
									<Box
										key={index}
										onClick={() => setCurrentIndex(index)}
										style={{
											width: "10px",
											height: "10px",
											borderRadius: "50%",
											backgroundColor:
												index === currentIndex
													? "var(--accent-9)"
													: "var(--gray-6)",
											cursor: "pointer",
											transition: "all 0.3s ease",
										}}
										role="button"
										tabIndex={0}
										aria-label={`Go to image ${index + 1}`}
									/>
								))}
							</Flex>
						</Flex>

						{/* Thumbnail Gallery */}
						<Box mb="8">
							<Heading size="4" as="h3" mb="4">
								Featured Moments
							</Heading>
							<Grid columns={{ sm: "2", md: "5" }} gap="4">
								{galleryImages.map((image, index) => (
									<Box
										key={image.id}
										onClick={() => setCurrentIndex(index)}
										style={{
											cursor: "pointer",
											borderRadius: "var(--radius-2)",
											overflow: "hidden",
											border:
												index === currentIndex
													? "2px solid var(--accent-9)"
													: "2px solid transparent",
											transition: "all 0.2s ease",
											aspectRatio: "1",
											backgroundImage: `url('${image.image}')`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											opacity: index === currentIndex ? 1 : 0.6,
										}}
										className="hover:opacity-100"
									/>
								))}
							</Grid>
						</Box>

						{/* Call to Action */}
						<Box
							style={{
								backgroundColor: "var(--gray-2)",
								padding: "var(--space-7)",
								borderRadius: "var(--radius-3)",
								textAlign: "center",
							}}
						>
							<Heading size="5" as="h3" mb="3">
								Join the Movement
							</Heading>
							<Text as="p" size="3" color="gray" mb="5">
								Be part of the BONSU story and the fight for Bodo liberation.
							</Text>
							<Flex gap="4" justify="center">
								<ColorsMarketingButton asChild size="3">
									<NextLink href="/about-us">
										Learn More
									</NextLink>
								</ColorsMarketingButton>
								<Button
									highContrast
									variant="soft"
									color="gray"
									size="3"
									asChild
								>
									<NextLink href="/organization/custom">Join BONSU</NextLink>
								</Button>
							</Flex>
						</Box>
					</Container>
				</Section>
			</Box>

			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</MobileMenuProvider>
	);
}


