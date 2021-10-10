import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

interface IProps {
	children?: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			{ children }
			<Footer />
		</React.Fragment>
	);
};

export default BaseLayout;