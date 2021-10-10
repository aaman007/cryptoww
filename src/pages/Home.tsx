import React from "react";
import { sectionContents } from "../data/contents";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
	const renderContents = () => {
		return sectionContents.map(content => (
			<Content key={content.id} content={content} />
		))
	}

	return (
		<React.Fragment>
			<Header />
			{ renderContents() }
		</React.Fragment>
	);
};

export default Home;