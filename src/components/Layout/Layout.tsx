/* eslint-disable no-undef */
import Container from "@mui/material/Container";
import { FC } from "react";
import styles from "./Layout.module.scss";

type Props = {
	children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	return (
		<Container
			className={styles.container}
			component="main"
		>
			{children}
		</Container>
	);
};

export default Layout;