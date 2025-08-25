import Image from "next/image";
// import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me.jpg";
import Hr from "@/components/Hr";
import Link from "next/link";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="javaria"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Javaria Masooma
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						Hey there, I&rsquo;m Javaria Masooma, a
						<span className="text-black font-medium">
							{" "}
							passionate Web Developer
						</span>{" "}
						with a growing expertise in
						<span className="text-black font-medium">
							{" "}
							Full-Stack web development.
						</span>{" "}
						Hailing from Skardu, Gilgit Baltistan, Pakistan, I&rsquo;ve 
						completed my degree in {" "}
						<span className="text-black font-medium">
							Computer Science
						</span>{" "}
						at{" "}
						<span className="text-black font-medium">
							Sukkur IBA University.
						</span>{" "}
						My work are mainly focused on modern web technologies.And  beyond development, I stay curious about
						design and emerging technologies. In today&rsquo;s ever-changing
						digital world, I believe being a
						<span className="text-black font-medium"> lifelong learner</span> is
						essential. Let&rsquo;s connect and explore the evolving intersection
						of web and AI together!
					</p>
					{/* <Card /> */}
					<div className="border-2 border-gray-500 rounded-lg p-6 flex mt-4 hover:bg-gray-200  w-full bg-white">
						<Link 
						href='https://www.linkedin.com/in/javaria-masooma-54a9b423b/'
						className="flex items-center gap-4 text-lg  cursor-pointer font-semibold "
						>
							<FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
								Let&rsquo;s connect on LinkedIn
							
						</Link>
					</div>
				</motion.div>
			</div>
		</>
	);
}
