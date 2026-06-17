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
	ScrollArea,
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
	DesktopIcon,
	EyeOpenIcon,
	Half2Icon,
	InputIcon,
	MoonIcon,
	TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { Swatch } from "@components/Swatch";
import Head from "next/head";
import styles from "./index.module.css";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";
import { RadixLogo } from "@components/RadixLogo";
import { BoxLink } from "@components/BoxLink";
import { AccessibleIcon } from "@radix-ui/themes";
import {NarzaryAILogo} from "@components/NarzaryAILogo"
export default function ColorsHome() {
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
					title="Bodo National Students' Union (BONSU)"
					description="The fearless voice of Bodo youth and a student movement dedicated to the socio-economic, cultural, and political liberation of the Bodos."
					image="seekgpt.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Bodo National Students' Union (BONSU)
							
						</SerifHeading>
						
						<Box style={{ maxWidth: 880 }}>
							<Text size="5" as="p" mb="6" color="gray">
								We are the Bodo National Students' Union (BONSU) - the fearless voice of the Bodo youth and the vanguard of our community's unbroken spirit. Born out of an urgent need to protect our indigenous identity, we officially united on February 7, 2022, in Kokrajhar. We arose because our people's core political aspirations were left unfulfilled by past compromises. Today, we stand as a revolutionary, non-political student movement dedicated to the total socio-economic, cultural, and political liberation of the Bodos.
							</Text>
						</Box>
						

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/about-us">
									Our Movement
									<svg
										width="14"
										height="14"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentcolor"
										style={{ opacity: 1, marginRight: -3 }}
									>
										<path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
									</svg>
								</NextLink>
							</ColorsMarketingButton>

							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/organization/custom">Join BONSU</NextLink>
							</Button>
						</Flex>
						
					</Container>
				</Section>
			</Box>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<Heading size="7" as="h2" mb="5" style={{ maxWidth: 720 }}>
							Our Sacred Mission
						</Heading>
						<Grid
							columns={{ sm: "3" }}
							gap={{ initial: "7", sm: "6", md: "9" }}
						>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<EyeOpenIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									The Fight for Bodoland
								</Heading>
								<Text as="p" size="3">
									We have revived the ultimate dream of a separate Bodoland state under Articles 2 and 3 of the Indian Constitution, taking our loud, clear demands straight to New Delhi.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<MoonIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Guarding Tribal Rights
								</Heading>
								<Text as="p" size="3">
									We actively build solidarity across the Northeastern states to fiercely protect our Sixth Schedule rights and indigenous land.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<TransparencyGridIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Total Social Revolution
								</Heading>
								<Text as="p" size="3">
									We fight for total revolution in Education and Literature, Culture, Games and Sports, and the upliftment of Agriculture.
								</Text>
							</Box>
						</Grid>
						<Box mt="8" style={{ maxWidth: 920 }}>
							<Heading size="6" as="h3" mb="3">
								Our Uncompromising Stand
							</Heading>
							<Text as="p" size="4" color="gray">
								While we respect the long history of student activism before us, BONSU represents a new generation. We refuse to let the sacrifice of our martyrs be diluted by inadequate peace accords. We are young, independent, and completely unapologetic in our mission to secure a dignified, self-determined future for every Bodo citizen.
							</Text>
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


