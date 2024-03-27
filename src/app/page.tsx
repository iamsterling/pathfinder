'use client'

//  ------------

import Image from "next/image"
import style from "./page.module.scss"
import { Header } from "./components/header"
import React from "react"
import Link from "next/link"

export default function Home() {



	const test = [
		{ 
			title: "Network",
			description: "something something nation's largest 5G network",
			link: "https://www.t-mobile.com/coverage/network",
		},
		{ 
			title: "T-Mobile 5G Home Internet",
			description: "lorem ipsum dolor sit amet",
		},
	]



	return <>
		<Header />

		<Sections links={test} />

	</>
}




// Define the props types
type Link = {
	title: string
	description: string
	link?: string
}

type MainProps = {
	links: Link[];
}

const Sections = ({ links }: MainProps) => {
	const [isActive, setIsActive] = React.useState<number | undefined>(undefined)

	React.useEffect(() => {
		console.log(isActive)
	}, [isActive])


	console.log(links)



	return <main className={style.main}>
		{ links.map((i, index) => {
			return <section key={index}
			onMouseEnter={e => setIsActive(index)}
			onMouseLeave={e => setIsActive(undefined)}
			>
			<h1>{i.title}</h1>
			{ isActive === index ?
				<div className={style.container}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio nulla, congue ac diam vitae, viverra luctus neque. Nam imperdiet arcu in libero mollis blandit. Donec augue nunc, scelerisque quis ornare eget, accumsan nec velit. Aliquam dapibus tincidunt iaculis. Nunc auctor convallis tincidunt. Fusce auctor tellus id ultricies tempus. Nulla aliquet tempus risus eget pharetra. Suspendisse ut bibendum ante, molestie posuere purus. Vestibulum ut nunc vitae nunc lacinia lacinia ac sit amet urna. Nam interdum lectus id tincidunt sollicitudin. Vivamus fringilla mi convallis ex varius luctus. Fusce imperdiet arcu non tellus molestie tristique. Vestibulum vestibulum, nibh sed euismod placerat, tortor dolor volutpat est, at lacinia lacus ligula sit amet sapien. Integer sit amet aliquet quam.</p>
					{ i.link && <button onClick={(e) => window.open(i.link, '_blank', 'noopener,noreferrer')}>
						Check out our network
					</button> }
				</div>
				:<>
					<p>Truncated description</p>
				</>
			}
		</section>
		})}
	</main>
}


