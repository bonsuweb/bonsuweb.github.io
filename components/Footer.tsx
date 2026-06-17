import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Grid,
	Text,
	Flex,
	Link,
	Heading,
} from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styles from "./Footer.module.css";
import { RadixLogoIcon } from "./RadixLogo";

export const Footer = () => {
	return (
		<Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
			<footer>
				<Flex
					align="start"
					direction="column"
					className={styles.RadixLogo}
					mb="5"
				>
					<Heading as="h5" size="6">
						<NextLink href="/" passHref legacyBehavior>
							<Link color="gray">BONSU</Link>
						</NextLink>
					</Heading>
					<Box pr="8" mt="5">
						<Heading
							as="h6"
							size="2"
							style={{
								lineHeight: "20px",
								color: "var(--gray-10)",
								fontWeight: "inherit",
							}}
						>
							Official website of the Bodo National Students' Union.
						</Heading>
					</Box>
					<Box mt="5">
						<Heading as="h6" size="3">
							Developed by
						</Heading>
						<ul>
							<li>
								<Text as="p" size="2" mt="3">
									<Link
										href="https://seekgpt.org"
										color="gray"
										target="_blank"
										style={{ display: "inline-flex", alignItems: "center" }}
									>
										SeekGPT Team
										<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
											<ArrowTopRightIcon />
										</Flex>
									</Link>
								</Text>
							</li>
						</ul>
					</Box>
				</Flex>
				<Box>
					<Heading as="h6" size="3">
							BONSU
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
									<NextLink href="/organization" passHref legacyBehavior>
										<Link color="gray">About BONSU</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/#" passHref legacyBehavior>
										<Link color="gray">Youth Initiatives</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/#" passHref legacyBehavior>
										<Link color="gray">Programs</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/#" passHref legacyBehavior>
										<Link color="gray">BONSU Resources</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/organization" passHref legacyBehavior>
										<Link color="gray">Organization</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>
					<Box>
						<Heading as="h6" size="3">
							Resources
						</Heading>
						<ul>
							<li>
								<Text as="p" size="2" mt="3">
									<NextLink
										href="/about-us"
										passHref
										legacyBehavior
									>
										<Link color="gray">About Us</Link>
									</NextLink>
								</Text>
							</li>
							
							<li>
								<Text as="p" size="2" mt="3">
									<NextLink
										href="#"
										passHref
										legacyBehavior
									>
										<Link color="gray">Organizational Framework</Link>
									</NextLink>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<NextLink
										href="#"
										passHref
										legacyBehavior
									>
										<Link color="gray">Community Structure</Link>
									</NextLink>
								</Text>
							</li>
						</ul>
					</Box>
				<Box>
					<Heading as="h6" size="3">
						Community
					</Heading>
					<ul>
						
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://facebook.com/BONSU333"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Facebook
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="#"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									X (Twitter)
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="#"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Instagram
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
					</ul>
				</Box>

			<Flex justify="center" py="4">
				<Text as="p" size="2" color="gray">
					&copy; {new Date().getFullYear()} BONSU. All rights reserved.
				</Text>

			</Flex>
			</footer>
			
		</Grid>
	);
};
